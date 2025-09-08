import Link from 'next/link';
import {
  Bell,
  Bot,
  Plus,
  Home,
  BrainCircuit,
  Calendar,
  BarChart2,
  Inbox,
  Settings,
  MoreHorizontal,
  PlusCircle,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { UserNav } from '@/components/user-nav';

const ProjectLink = ({
  name,
  color,
}: {
  name: string;
  color: string;
}) => (
  <SidebarMenuItem>
    <SidebarMenuButton>
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span>{name}</span>
    </SidebarMenuButton>
  </SidebarMenuItem>
);

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" side="left" variant="sidebar">
        <SidebarHeader className="h-16">
          <UserNav showAvatarOnly={false} />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard">
                  <Home />
                  Home
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard/train">
                  <BrainCircuit />
                  Prodify AI
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard/create-bot">
                  <Bot />
                  My Tasks
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Inbox />
                Inbox
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Calendar />
                Calendar
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <BarChart2 />
                Reports & Analytics
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarGroup className="mt-4">
            <SidebarGroupLabel className="flex items-center justify-between">
              My Projects
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Plus className="h-4 w-4" />
              </Button>
            </SidebarGroupLabel>
            <SidebarMenu>
              <ProjectLink name="Product launch" color="#7c3aed" />
              <ProjectLink name="Team brainstorm" color="#2563eb" />
              <ProjectLink name="Branding launch" color="#22c55e" />
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="mt-auto">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings />
                Settings
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <div className="m-2 rounded-lg bg-primary/10 p-4 text-center">
            <h4 className="font-semibold text-primary">prodify</h4>
            <p className="mb-2 mt-1 text-xs">
              New members will gain access to public Spaces, Docs and
              Dashboards
            </p>
            <Button size="sm" className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Invite people
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/50 px-4 backdrop-blur-sm sm:px-6">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <Logo />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell />
            </Button>
            <MoreHorizontal />
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
