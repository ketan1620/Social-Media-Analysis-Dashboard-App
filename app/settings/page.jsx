'use client';

import { useState } from 'react';
import { useTheme } from '../components/ThemeProvider';

export default function Settings() {
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
    '#A855F7', // Purple
    '#2563EB', // Blue
    '#F59E0B', // Yellow
    '#EF4444', // Red
    '#EC4899'  // Pink
  ];

  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>

        <div className="space-y-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 relative overflow-hidden">
                <img
                  src="/placeholder-user.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                Change Profile Picture
              </button>
            </div>

            <h2 className="text-xl font-semibold mb-4 text-foreground">Theme Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
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
    </div>
  );
}