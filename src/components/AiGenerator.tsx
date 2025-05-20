"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wand2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateMarkdown, type GenerateMarkdownInput } from "@/ai/flows/generate-markdown";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


interface AiGeneratorProps {
  onGeneratedContent: (markdown: string) => void;
}

export function AiGenerator({ onGeneratedContent }: AiGeneratorProps) {
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please enter a topic to generate Markdown.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const input: GenerateMarkdownInput = { topic };
      const result = await generateMarkdown(input);
      onGeneratedContent(result.markdownContent);
      toast({
        title: "Markdown Generated!",
        description: "Content added to your editor.",
        variant: "default",
        className: "bg-accent text-accent-foreground"
      });
      setTopic(""); // Clear topic after generation
    } catch (error) {
      console.error("Error generating Markdown:", error);
      toast({
        title: "Generation Failed",
        description: "Could not generate Markdown. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Wand2 className="h-5 w-5 text-primary" />
          AI Markdown Generator
        </CardTitle>
        <CardDescription>
          Enter a topic and let AI craft Markdown for you.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="topic-input" className="text-sm font-medium">Topic</Label>
          <Input
            id="topic-input"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Benefits of server components"
            disabled={isLoading}
            className="mt-1"
          />
        </div>
        <Button onClick={handleGenerate} disabled={isLoading || !topic.trim()} className="w-full">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <Wand2 className="h-4 w-4 mr-2" />
          )}
          Generate Markdown
        </Button>
      </CardContent>
    </Card>
  );
}
