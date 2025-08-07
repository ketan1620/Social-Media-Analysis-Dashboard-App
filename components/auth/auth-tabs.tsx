"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import ForgotPasswordForm from "./forgot-password-form";

export default function AuthTabs() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <LoginForm onForgotPassword={() => setActiveTab("forgot-password")} />
        </TabsContent>

        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>

        <TabsContent value="forgot-password">
          <ForgotPasswordForm onBack={() => setActiveTab("login")} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
