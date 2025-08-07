import AuthTabs from "@/components/auth/auth-tabs"

export default function Home() {
  // If user is authenticated, redirect to dashboard
  // const isAuthenticated = false // Replace with actual auth check
  // if (isAuthenticated) redirect("/dashboard")

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">Social Media Analysis</h1>
        </div>
        <AuthTabs />
      </div>
    </main>
  )
}

