"use client";

import Link from "next/link";
import { BookOpen, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Feather className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">
            Markdown Maverick
          </h1>
        </Link>
        <nav>
          <Button variant="ghost" asChild>
            <Link href="/tutorial">
              <BookOpen className="mr-2 h-4 w-4" />
              Tutorial
            </Link>
          </Button>
        </nav>
      </div>
      <Separator />
    </header>
  );
}
