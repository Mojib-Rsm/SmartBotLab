import { getBots } from '@/lib/data';
import type { Bot } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Bot as BotIcon, CheckCircle, MessageSquare, Users } from 'lucide-react';

export default async function Dashboard() {
  const bots: any[] = await getBots();
  const totalBots = bots.length;
  const activeBots = bots.filter((bot) => bot.status).length;
  // These are mock calculations. In a real app, this data would come from the database.
  const totalMessages = 5670;
  const totalUsers = 1375;


  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="grid flex-1 items-start gap-4 md:gap-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Bots</CardTitle>
                <BotIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalBots}</div>
                <p className="text-xs text-muted-foreground">
                  All bots created on the platform
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Bots</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeBots}</div>
                <p className="text-xs text-muted-foreground">
                  Bots currently active and responding
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Messages Sent</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+{totalMessages.toLocaleString()}</div>
                 <p className="text-xs text-muted-foreground">
                  Total messages sent by all bots
                </p>
              </CardContent>
            </Card>
             <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Users Interacted</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+{totalUsers.toLocaleString()}</div>
                 <p className="text-xs text-muted-foreground">
                  Total users helped by bots
                </p>
              </CardContent>
            </Card>
          </div>
        <Card>
          <CardHeader>
            <CardTitle>My Bots</CardTitle>
            <CardDescription>
              Manage your bots and view their performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bots.map((bot: any) => (
                  <TableRow key={bot.id}>
                    <TableCell>{bot.id}</TableCell>
                    <TableCell className="font-medium">{bot.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          bot.status ? 'default' : 'secondary'
                        }
                        className={`${
                          bot.status
                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                            : ''
                        }`}
                      >
                        {bot.status ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
