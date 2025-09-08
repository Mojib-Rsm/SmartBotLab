import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { generateResponse } from '@/ai/flows/generate-response';

const FACEBOOK_VERIFY_TOKEN = process.env.FACEBOOK_VERIFY_TOKEN || 'your-secret-verify-token';

// Facebook requires this to verify the webhook
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    if (mode === 'subscribe' && token === FACEBOOK_VERIFY_TOKEN) {
        console.log('Webhook verified successfully!');
        return NextResponse.json(Number(challenge), { status: 200 });
    } else {
        console.error('Webhook verification failed.');
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
}


// This function handles incoming messages from Messenger
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log('Received webhook event:', JSON.stringify(body, null, 2));

        // Ensure the event is a page event
        if (body.object === 'page') {
            for (const entry of body.entry) {
                for (const event of entry.messaging) {
                    // We only want to handle received messages
                    if (event.message && !event.message.is_echo) {
                        const senderId = event.sender.id;
                        const pageId = event.recipient.id;
                        const messageText = event.message.text;

                        console.log(`Message from ${senderId} to page ${pageId}: "${messageText}"`);

                        // 1. Find the bot associated with the pageId
                        const botRes = await pool.query('SELECT * FROM bots WHERE page_id_fb = $1', [pageId]);
                        if (botRes.rows.length === 0) {
                            console.log(`No bot found for page ID: ${pageId}`);
                            continue; // Skip if no bot is configured
                        }
                        const bot = botRes.rows[0];

                        // 2. (Simulated) Find relevant info from Knowledge Base
                        // In a real app, you'd use vector search here.
                        // For now, we'll just pull the most recent knowledge item.
                        const kbRes = await pool.query('SELECT content FROM knowledge_base ORDER BY created_at DESC LIMIT 1');
                        const knowledgeBaseContent = kbRes.rows.length > 0 ? kbRes.rows[0].content : undefined;

                        // 3. Generate AI response
                        const aiResponse = await generateResponse({
                            userId: senderId,
                            userMessage: messageText,
                            botId: bot.id,
                            knowledgeBaseContent,
                            targetLanguage: bot.language || 'en',
                        });

                        // 4. Log the conversation
                        await pool.query(
                            'INSERT INTO conversations (bot_id, user_message, bot_response) VALUES ($1, $2, $3)',
                            [bot.id, messageText, aiResponse.botResponse]
                        );

                        // 5. Send the response back to the user via Messenger Graph API
                        // Note: This requires a Page Access Token and is a separate step.
                        // We will log it for now.
                        console.log(`Generated response for ${senderId}: "${aiResponse.botResponse}"`);
                        // await sendMessengerReply(senderId, aiResponse.botResponse);
                    }
                }
            }
            return NextResponse.json({ status: 'ok' });
        } else {
            return NextResponse.json({ error: 'Not a page event' }, { status: 404 });
        }
    } catch (error: any) {
        console.error('Error processing webhook:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
