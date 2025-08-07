"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

interface ForgotPasswordFormProps {
  onBack: () => void
}

export default function ForgotPasswordForm({ onBack }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Add your password reset logic here
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Check your email",
        description: "We sent you a password reset link",
      })
      onBack()
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send reset link",
      })
    }
  }

  return (
    <Card className="border-none bg-card">
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4 pt-4">
          <Button variant="ghost" className="mb-2 -ml-4 flex items-center gap-2" onClick={onBack} type="button">
            <ArrowLeft className="h-4 w-4" /> Back to login
          </Button>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Reset Password
          </Button>
          <Button type="button" variant="link" className="w-full" onClick={onBack}>
            Remember your password? Login
          </Button>
        </CardContent>
      </form>
      <CardFooter className="flex flex-col space-y-4 pb-6 pt-2">
        <p className="text-center text-xs text-muted-foreground">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}

