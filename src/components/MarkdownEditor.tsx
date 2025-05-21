
"use client";

import type { ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function MarkdownEditor({
  value,
  onChange,
  placeholder = "Start typing your Markdown here...",
}: MarkdownEditorProps) {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <ScrollArea className="h-full w-full rounded-md border shadow-inner bg-background">
      <Textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="h-full w-full resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-4 text-base bg-transparent"
        aria-label="Markdown Editor"
      />
    </ScrollArea>
  );
}
