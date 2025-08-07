'use client';

import { useState } from 'react';
import { useTheme } from '../components/ThemeProvider';

export default function Profile() {
  const { theme, accentColor, updateTheme, updateAccentColor } = useTheme();
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    username: '@johndoe',
    email: 'john@example.com',
    jobTitle: 'Digital Marketing Manager'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add save logic here
  };

  const accentColors = [
    '#A855F7',
    '#2563EB',
    '#F59E0B',
    '#EF4444',
    '#EC4899'
  ];

  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
              <img
                src="/placeholder-user.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-white hover:bg-primary/90 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>
          <h1 className="text-2xl font-bold text-foreground">{formData.fullName}</h1>
          <p className="text-muted-foreground">{formData.username}</p>
          <p className="text-sm text-muted-foreground mt-1">{formData.jobTitle}</p>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Theme Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Theme Mode</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => updateTheme('light')}
                  className={`px-4 py-2 rounded-md ${theme === 'light' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  Light
                </button>
                <button
                  onClick={() => updateTheme('dark')}
                  className={`px-4 py-2 rounded-md ${theme === 'dark' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  Dark
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-sm font-medium text-foreground">Accent Color</span>
              <div className="flex space-x-2">
                {accentColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => updateAccentColor(color)}
                    className={`w-8 h-8 rounded-full ${accentColor === color ? 'ring-2 ring-offset-2 ring-primary' : ''}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Personal Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md border border-gray-300 bg-background text-foreground"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md border border-gray-300 bg-background text-foreground"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md border border-gray-300 bg-background text-foreground"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md border border-gray-300 bg-background text-foreground"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}