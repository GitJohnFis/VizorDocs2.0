
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ImageMarkdownInserterProps {
  onInsertMarkdown: (markdown: string) => void;
}

export function ImageMarkdownInserter({ onInsertMarkdown }: ImageMarkdownInserterProps) {
  const [imageUrl, setImageUrl] = useState("");
  const [altText, setAltText] = useState("");
  const { toast } = useToast();

  const handleInsert = () => {
    if (!imageUrl.trim()) {
      toast({
        title: "Image URL Required",
        description: "Please enter the URL of the image.",
        variant: "destructive",
      });
      return;
    }

    // Basic URL validation
    const trimmedImageUrl = imageUrl.trim();
    try {
      new URL(trimmedImageUrl);
    } catch (_) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid image URL (e.g., https://example.com/image.png).",
        variant: "destructive",
      });
      return;
    }
    
    const finalAltText = altText.trim() || 'image'; // Default alt text
    const markdown = `![${finalAltText}](${trimmedImageUrl})`;
    
    onInsertMarkdown(markdown);

    toast({
      title: "Image Markdown Inserted!",
      description: "The Markdown syntax for your image has been added to the editor.",
      variant: "default",
      className: "bg-accent text-accent-foreground"
    });

    setImageUrl("");
    setAltText("");
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <ImageIcon className="h-5 w-5 text-primary" />
          Image Markdown Inserter
        </CardTitle>
        <CardDescription>
          Easily create Markdown for images from a URL. Input the image URL and optional alt text.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="image-url-input" className="text-sm font-medium">Image URL</Label>
          <Input
            id="image-url-input"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.png"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="alt-text-input" className="text-sm font-medium">Alt Text</Label>
          <Input
            id="alt-text-input"
            type="text"
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
            placeholder="Descriptive text (e.g., 'A cute cat')"
            className="mt-1"
          />
          <p className="text-xs text-muted-foreground mt-1">Alt text is important for accessibility. Defaults to "image" if left empty.</p>
        </div>
        <Button onClick={handleInsert} disabled={!imageUrl.trim()} className="w-full">
          <ImageIcon className="h-4 w-4 mr-2" />
          Insert Image Markdown
        </Button>
      </CardContent>
    </Card>
  );
}
