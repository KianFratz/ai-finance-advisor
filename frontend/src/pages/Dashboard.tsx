import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <h1 className="text-lg font-semibold">Personal Finance AI Advisor</h1>
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            Sign out
          </Button>
        </div>
      </header>
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Your account details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <span className="font-medium text-muted-foreground">
                Email:
              </span>{" "}
              {user?.email}
            </p>
            {user?.monthly_income != null && (
              <p>
                <span className="font-medium text-muted-foreground">
                  Monthly income:
                </span>{" "}
                ${Number(user.monthly_income).toLocaleString()}
              </p>
            )}
            {user?.created_at && (
              <p>
                <span className="font-medium text-muted-foreground">
                  Member since:
                </span>{" "}
                {new Date(user.created_at).toLocaleDateString()}
              </p>
            )}
          </CardContent>
        </Card>
        <section className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Next steps</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Upload a CSV of transactions via Transactions.</li>
            <li>Explore analytics, forecast, and advisor features.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
