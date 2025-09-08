import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Plus,
  Grip,
  Paperclip,
  Star,
  Trash2,
  Shield,
  Circle,
  Dot,
  Briefcase,
  Calendar as CalendarIcon,
  Check,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const day = (d: string, day: string, active = false) => (
  <div
    className={`flex flex-col items-center justify-center gap-2 rounded-lg p-2 ${active ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
  >
    <span className="text-xs">{d}</span>
    <span className="font-bold">{day}</span>
  </div>
);

const TaskItem = ({
  checked,
  label,
  priority,
  dueDate,
}: {
  checked?: boolean;
  label: string;
  priority: 'High' | 'Low' | 'Medium';
  dueDate: string;
}) => (
  <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 border-b p-2">
    <Button variant="ghost" size="icon" className="h-6 w-6">
      {checked ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Circle className="h-4 w-4 text-muted-foreground" />
      )}
    </Button>
    <span className="font-medium">{label}</span>
    <Badge
      variant={
        priority === 'High'
          ? 'destructive'
          : priority === 'Low'
            ? 'secondary'
            : 'default'
      }
      className="h-6"
    >
      {priority}
    </Badge>
    <span className="text-sm text-muted-foreground">{dueDate}</span>
  </div>
);

const GoalItem = ({
  label,
  project,
  progress,
}: {
  label: string;
  project: string;
  progress: number;
}) => (
  <div className="grid grid-cols-[1fr_auto] items-center gap-4 py-2">
    <div>
      <p className="font-medium">{label}</p>
      <p className="text-sm text-muted-foreground">{project}</p>
    </div>
    <div className="flex items-center gap-2">
      <div className="h-2 w-24 rounded-full bg-muted">
        <div
          className="h-2 rounded-full bg-primary"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-sm font-medium">{progress}%</span>
    </div>
  </div>
);

const ProjectCard = ({
  icon,
  iconBg,
  title,
  tasks,
  teammates,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  tasks: number;
  teammates: number;
}) => (
  <div className="flex items-center gap-4 rounded-lg p-2 hover:bg-muted">
    <div
      className="flex h-10 w-10 items-center justify-center rounded-lg"
      style={{ backgroundColor: iconBg }}
    >
      {icon}
    </div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-muted-foreground">
        {tasks} tasks &bull; {teammates} teammates
      </p>
    </div>
  </div>
);

const ReminderItem = ({ label }: { label: string }) => (
  <div className="flex items-center justify-between border-b p-2">
    <p>{label}</p>
    <div className="flex items-center gap-1 text-muted-foreground">
      <Star className="h-4 w-4" />
      <Trash2 className="h-4 w-4" />
      <Shield className="h-4 w-4" />
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="grid flex-1 items-start gap-4 p-4 sm:p-6 md:gap-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Mon, July 7</p>
            <h1 className="text-3xl font-bold">Hello, Courtney</h1>
            <p className="mt-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-lg font-semibold text-transparent">
              How can I help you today?
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline">Ask AI</Button>
            <Button variant="outline">Get tasks updates</Button>
            <Button variant="outline">Create workspace</Button>
            <Button>Connect apps</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col gap-6 lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <Grip className="h-5 w-5" />
                  <CardTitle>My Tasks</CardTitle>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold">IN PROGRESS - 2 tasks</p>
                  <TaskItem
                    label="One-on-One Meeting"
                    priority="High"
                    dueDate="Today"
                  />
                  <TaskItem
                    label="Send a summary email to stakeholders"
                    priority="Low"
                    dueDate="3 days left"
                  />

                  <p className="mt-4 text-sm font-semibold">
                    UPCOMING - 1 task
                  </p>
                   <TaskItem
                    checked
                    label="Add task"
                    priority="Medium"
                    dueDate="Tomorrow"
                  />

                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>My Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <GoalItem
                  label="Check Emails and Messages"
                  project="Product launch - My Projects"
                  progress={73}
                />
                <GoalItem
                  label="Prepare a brief status update to the client"
                  project="Product launch - My Projects"
                  progress={11}
                />
                <GoalItem
                  label="Update project documentation"
                  project="Team brainstorm - My Projects"
                  progress={63}
                />
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1 flex flex-col gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Projects</CardTitle>
                <Button variant="ghost" size="sm">
                  Recents <ChevronRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" /> Create new project
                </Button>
                <ProjectCard
                  icon={<Briefcase className="text-white" />}
                  iconBg="#7c3aed"
                  title="Product launch"
                  tasks={6}
                  teammates={12}
                />
                 <ProjectCard
                  icon={<Briefcase className="text-white" />}
                  iconBg="#2563eb"
                  title="Team brainstorm"
                  tasks={2}
                  teammates={32}
                />
                 <ProjectCard
                  icon={<Briefcase className="text-white" />}
                  iconBg="#22c55e"
                  title="Branding launch"
                  tasks={4}
                  teammates={9}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Calendar</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <ChevronLeft />
                  </Button>
                  <span className="font-semibold">July</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <ChevronRight />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {day('Fri', '04')}
                  {day('Sat', '05')}
                  {day('Sun', '06')}
                  {day('Mon', '07', true)}
                  {day('Tue', '08')}
                  {day('Wed', '09')}
                  {day('Thu', '10')}
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Meeting with VP</p>
                  <p className="text-sm text-muted-foreground">
                    Today: 10:00 - 11:00 am
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                     <Button variant="outline" size="sm">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Google Meet
                    </Button>
                    <div className="flex -space-x-2">
                      <Avatar className="h-6 w-6 border-2 border-card">
                        <AvatarImage src="https://picsum.photos/32?random=1" />
                        <AvatarFallback>U1</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-card">
                        <AvatarImage src="https://picsum.photos/32?random=2" />
                        <AvatarFallback>U2</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-card">
                         <AvatarImage src="https://picsum.photos/32?random=3" />
                        <AvatarFallback>U3</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-card bg-muted">
                        <AvatarFallback>+2</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reminders</CardTitle>
              </CardHeader>
              <CardContent>
                <ReminderItem label="Assess any new risks identified in the morning meeting." />
                <ReminderItem label="Outline key points for tomorrow's stand-up meeting." />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
