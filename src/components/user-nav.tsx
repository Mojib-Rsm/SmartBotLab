'use client';
import Link from 'next/link';
import { LogOut, Settings, User, ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function UserNav({
  showAvatarOnly = true,
}: {
  showAvatarOnly?: boolean;
}) {
  const triggerContent = showAvatarOnly ? (
    <Avatar className="h-9 w-9">
      <AvatarImage
        src="https://picsum.photos/100"
        alt="User Avatar"
        data-ai-hint="person face"
      />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  ) : (
    <div className="flex items-center gap-2">
      <Avatar className="h-9 w-9">
        <AvatarImage
          src="https://picsum.photos/100"
          alt="User Avatar"
          data-ai-hint="person face"
        />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <div className="hidden text-left group-data-[collapsible=icon]:hidden">
        <p className="text-sm font-medium leading-none">Your Name</p>
        <p className="text-xs leading-none text-muted-foreground">Online</p>
      </div>
      <ChevronDown className="ml-auto hidden h-4 w-4 text-muted-foreground group-data-[collapsible=icon]:hidden" />
    </div>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`relative h-auto w-full justify-start p-0 group-data-[collapsible=icon]:w-9 group-data-[collapsible=icon]:justify-center ${showAvatarOnly ? 'w-9' : ''}`}
        >
          {triggerContent}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Your Name</p>
            <p className="text-xs leading-none text-muted-foreground">
              user@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/login">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
