"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { flavorMarkdown, type FlavorMarkdownInput } from "@/ai/flows/flavor-markdown";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AiFlavoringProps {
  currentMarkdown: string;
  onFlavoredContent: (markdown: string) => void;
}

export function AiFlavoring({ currentMarkdown, onFlavoredContent }: AiFlavoringProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFlavor = async () => {
    if (!currentMarkdown.trim()) {
      toast({
        title: "No Content",
        description: "There's no Markdown content to flavor.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const input: FlavorMarkdownInput = { markdown: currentMarkdown };
      const result = await flavorMarkdown(input);
      onFlavoredContent(result.flavoredMarkdown);
      toast({
        title: "Markdown Flavored!",
        description: "Your content has been enhanced.",
        variant: "default",
        className: "bg-accent text-accent-foreground"
      });
    } catch (error) {
      console.error("Error flavoring Markdown:", error);
      toast({
        title: "Flavoring Failed",
        description: "Could not flavor Markdown. Please try again.",
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
          <Sparkles className="h-5 w-5 text-primary" />
          AI Markdown Flavoring
        </CardTitle>
        <CardDescription>
          Add some creative flair to your existing Markdown.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleFlavor} disabled={isLoading || !currentMarkdown.trim()} className="w-full">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <Sparkles className="h-4 w-4 mr-2" />
          )}
          Flavor Current Markdown
        </Button>
      </CardContent>
    </Card>
  );
}
