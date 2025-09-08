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

export default async function Dashboard() {
  const bots: any[] = await getBots();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="grid flex-1 items-start gap-4 md:gap-8">
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
                            ? 'bg-green-100 text-green-800'
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
