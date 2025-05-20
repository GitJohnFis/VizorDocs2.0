"use client";

import { useState, useCallback } from "react";
import { AppHeader } from "@/components/AppHeader";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { MarkdownPreview } from "@/components/MarkdownPreview";
import { AiGenerator } from "@/components/AiGenerator";
import { AiFlavoring } from "@/components/AiFlavoring";
import { BoilerplateManager } from "@/components/BoilerplateManager";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Wand2, FileText, SparklesIcon } from "lucide-react";

export default function MarkdownMaverickPage() {
  const [markdownInput, setMarkdownInput] = useState<string>("");

  const handleGeneratedContent = useCallback((content: string) => {
    setMarkdownInput((prev) => prev + (prev ? "\n\n" : "") + content);
  }, []);

  const handleFlavoredContent = useCallback((content: string) => {
    setMarkdownInput(content);
  }, []);

  const handleInsertBoilerplate = useCallback((content: string) => {
    setMarkdownInput((prev) => prev + (prev ? "\n\n" : "") + content);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow container mx-auto py-6 px-4">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[calc(100vh-150px)] rounded-lg border shadow-lg"
        >
          <ResizablePanel defaultSize={35} minSize={20} className="p-1">
            <ScrollArea className="h-full rounded-md">
              <div className="p-4 space-y-6">
                <Tabs defaultValue="ai-tools" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="ai-tools"><SparklesIcon className="mr-2 h-4 w-4" />AI Tools</TabsTrigger>
                    <TabsTrigger value="boilerplates"><FileText className="mr-2 h-4 w-4" />Boilerplates</TabsTrigger>
                  </TabsList>
                  <TabsContent value="ai-tools" className="space-y-6">
                    <AiGenerator onGeneratedContent={handleGeneratedContent} />
                    <AiFlavoring
                      currentMarkdown={markdownInput}
                      onFlavoredContent={handleFlavoredContent}
                    />
                  </TabsContent>
                  <TabsContent value="boilerplates">
                    <BoilerplateManager onInsertBoilerplate={handleInsertBoilerplate} />
                  </TabsContent>
                </Tabs>
              </div>
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={65} minSize={30} className="p-1">
            <div className="flex flex-col h-full space-y-2">
                <h2 className="text-lg font-semibold px-4 pt-3 text-muted-foreground">Editor</h2>
                <div className="flex-grow min-h-[200px]">
                    <MarkdownEditor value={markdownInput} onChange={setMarkdownInput} />
                </div>
                <h2 className="text-lg font-semibold px-4 pt-3 text-muted-foreground">Preview</h2>
                <div className="flex-grow min-h-[200px]">
                     <MarkdownPreview markdownContent={markdownInput} />
                </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
      <footer className="py-4 text-center text-sm text-muted-foreground border-t">
        Markdown Maverick &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
