'use client';

import { ThemeProvider } from './components/ThemeProvider';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}