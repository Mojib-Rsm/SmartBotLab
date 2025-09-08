
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Send } from 'lucide-react';
import Image from 'next/image';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Welcome! How can I help you today? 🙂' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { from: 'user', text: inputValue }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { from: 'bot', text: 'This is a demo. Sign up to create your own bot!' },
        ]);
      }, 1000);
      setInputValue('');
    }
  };

  return (
    <div>
      <Button
        className="fixed bottom-4 right-4 h-16 w-16 rounded-full bg-primary shadow-lg hover:bg-primary/90"
        onClick={toggleChat}
      >
        <Image src="/chat-icon.svg" alt="Chat" width={32} height={32} />
      </Button>

      {isOpen && (
        <div className="fixed bottom-24 right-4 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col border border-gray-200">
          <div className="p-4 bg-primary text-primary-foreground rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">SmartBotLab Demo</h3>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8 text-primary-foreground hover:bg-primary/80">
              <X size={20} />
            </Button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs rounded-lg px-3 py-2 ${
                    msg.from === 'bot'
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button onClick={handleSendMessage} size="icon" className="ml-2">
              <Send size={20} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
