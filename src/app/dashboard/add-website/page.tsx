
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ExternalLink, Plus } from 'lucide-react';
import { useState } from 'react';

export default function AddWebsitePage() {
  const [formData, setFormData] = useState({
    package: 'Default',
    owner: 'Mojibrsm',
    domainName: 'smartbotlab.com',
    email: 'mojibrsm@gmail.com',
    phpVersion: '8.1',
    openLiteSpeed: false,
    createMailDomain: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <span className="h-8 w-1 bg-primary mr-3 rounded-full"></span>
            Website Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <Label htmlFor="select-package">SELECT PACKAGE</Label>
                <Select
                  value={formData.package}
                  onValueChange={(value) => handleInputChange('package', value)}
                >
                  <SelectTrigger id="select-package">
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Default">Default</SelectItem>
                    <SelectItem value="Premium">Premium</SelectItem>
                    <SelectItem value="Enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="select-owner">SELECT OWNER</Label>
                <Select
                  value={formData.owner}
                  onValueChange={(value) => handleInputChange('owner', value)}
                >
                  <SelectTrigger id="select-owner">
                    <SelectValue placeholder="Select an owner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mojibrsm">Mojibrsm</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="User">User</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="grid gap-2">
                    <Label htmlFor="domain-name">DOMAIN NAME</Label>
                    <Input
                    id="domain-name"
                    value={formData.domainName}
                    onChange={(e) => handleInputChange('domainName', e.target.value)}
                    />
                </div>
                 <div className="grid gap-2">
                     <Label htmlFor="select-php-version">SELECT PHP VERSION</Label>
                    <Select
                    value={formData.phpVersion}
                    onValueChange={(value) =>
                        handleInputChange('phpVersion', value)
                    }
                    >
                    <SelectTrigger id="select-php-version">
                        <SelectValue placeholder="Select PHP Version" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="8.1">PHP 8.1</SelectItem>
                        <SelectItem value="8.0">PHP 8.0</SelectItem>
                        <SelectItem value="7.4">PHP 7.4</SelectItem>
                    </SelectContent>
                    </Select>
                 </div>
            </div>
             <div className="grid gap-2">
                <Label htmlFor="email">EMAIL</Label>
                <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-muted border-transparent"
                />
            </div>

            <div>
                <Label className="text-base font-semibold">ADDITIONAL FEATURES</Label>
                <div className="mt-4 grid gap-4">
                    <div className="flex items-start gap-4 rounded-lg bg-muted p-4">
                        <Checkbox id="openlitespeed" className="mt-1" onCheckedChange={(checked) => handleInputChange('openLiteSpeed', !!checked)} />
                        <div className="grid gap-1.5">
                            <Label htmlFor="openlitespeed" className="text-base font-medium leading-none">
                                OpenLiteSpeed + Apache (Backend) - <span className="text-primary">Premium Feature</span>
                                <ExternalLink className="inline-block w-4 h-4 ml-1 text-primary" />
                            </Label>
                            <p className="text-sm text-muted-foreground">For Ubuntu 22, AlmaLinux 8 and AlmaLinux 9</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4 rounded-lg bg-muted p-4">
                        <Checkbox id="create-mail-domain" className="mt-1" onCheckedChange={(checked) => handleInputChange('createMailDomain', !!checked)} />
                        <div className="grid gap-1.5">
                            <Label htmlFor="create-mail-domain" className="text-base font-medium leading-none">
                               Create Mail Domain
                            </Label>
                            <p className="text-sm text-muted-foreground">Automatically create mail domain for this website</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-start">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Website
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
