"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MarkdownPreviewProps {
  markdownContent: string;
}

export function MarkdownPreview({ markdownContent }: MarkdownPreviewProps) {
  return (
    <ScrollArea className="h-full w-full rounded-md border bg-card shadow-sm">
      <div className="markdown-preview-area p-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </ScrollArea>
  );
}
