
"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Plugin } from 'unified';
import type { Root, Text, Paragraph } from 'mdast';
import { visit } from 'unist-util-visit';

interface MarkdownPreviewProps {
  markdownContent: string;
}

// Custom remark plugin to remove {::comment}...{:/comment} blocks
const remarkRemoveMarkdownComments: Plugin<[], Root> = () => {
  return (tree: Root) => {
    // First pass: remove comment content from text nodes
    visit(tree, 'text', (node: Text) => {
      const commentRegex = /{::comment}([\s\S]*?){:\/comment}/g;
      if (node.value && typeof node.value === 'string') {
        node.value = node.value.replace(commentRegex, '');
      }
    });

    // Second pass: clean up paragraphs that become empty or only contained comments
    visit(tree, 'paragraph', (node: Paragraph, index, parent) => {
      if (parent && typeof index === 'number' && parent.type === 'root') { // Ensure parent is Root or similar container
        // Filter out text nodes that are now empty
        node.children = node.children.filter(child => {
          if (child.type === 'text') {
            return child.value && child.value.trim() !== '';
          }
          return true; // Keep other node types
        });

        // If the paragraph itself becomes empty (no children left), remove it from its parent
        if (node.children.length === 0) {
          parent.children.splice(index, 1);
          return [visit.SKIP, index]; // Adjust index for splicing and skip children
        }
      }
    });
  };
};


export function MarkdownPreview({ markdownContent }: MarkdownPreviewProps) {
  return (
    <ScrollArea className="h-full w-full rounded-md border bg-card shadow-sm">
      <div className="markdown-preview-area p-6">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkRemoveMarkdownComments]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </ScrollArea>
  );
}
