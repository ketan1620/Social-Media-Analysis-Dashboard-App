'use client';

import { useState } from 'react';
import { useTheme } from '../components/ThemeProvider';
import { Switch } from '@/components/ui/switch';

export default function NotificationSettings() {
  const { theme, accentColor } = useTheme();
  const [notifications, setNotifications] = useState({
    push: false,
    email: true,
    sms: false,
    desktop: true
  });

  const [categories, setCategories] = useState({
    news: true,
    account: true,
    marketing: false
  });

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleCategoryChange = (type) => {
    setCategories(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-foreground">Notification Settings</h1>
        
        <div className="space-y-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Notification Preferences</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-foreground">Push Notifications</h3>
                  <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={() => handleNotificationChange('push')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-foreground">Email Notifications</h3>
                  <p className="text-sm text-muted-foreground">Receive email updates and newsletters</p>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={() => handleNotificationChange('email')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-foreground">SMS Notifications</h3>
                  <p className="text-sm text-muted-foreground">Receive text message alerts</p>
                </div>
                <Switch
                  checked={notifications.sms}
                  onCheckedChange={() => handleNotificationChange('sms')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-foreground">Desktop Notifications</h3>
                  <p className="text-sm text-muted-foreground">Show notifications in browser</p>
                </div>
                <Switch
                  checked={notifications.desktop}
                  onCheckedChange={() => handleNotificationChange('desktop')}
                />
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Notification Categories</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-foreground">News Updates</h3>
                  <p className="text-sm text-muted-foreground">Important news and announcements</p>
                </div>
                <Switch
                  checked={categories.news}
                  onCheckedChange={() => handleCategoryChange('news')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-foreground">Account Activity</h3>
                  <p className="text-sm text-muted-foreground">Login alerts and security updates</p>
                </div>
                <Switch
                  checked={categories.account}
                  onCheckedChange={() => handleCategoryChange('account')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-foreground">Marketing</h3>
                  <p className="text-sm text-muted-foreground">Promotional offers and updates</p>
                </div>
                <Switch
                  checked={categories.marketing}
                  onCheckedChange={() => handleCategoryChange('marketing')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}