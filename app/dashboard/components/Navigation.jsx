'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Settings, Bell, User } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/notification-settings', label: 'Notifications', icon: Bell },
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-background border-t md:border-t-0 md:top-4 md:bottom-auto md:right-4 md:left-auto md:w-auto md:bg-transparent z-50">
      <div className="flex justify-around items-center md:gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center p-3 md:p-2 md:flex-row md:gap-2 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              <Icon className="w-6 h-6 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}