import React from 'react';
import { AppHeader } from "@/components/AppHeader";
import { TutorialSection } from "@/components/TutorialSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Code, Wand2, FileText, Sparkles, HelpCircle, List, Type, Link as LinkIcon, Image as ImageIcon, Terminal, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function TutorialPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-3">Welcome to the Markdown Maverick Tutorial!</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to use all features of Markdown Maverick and master Markdown syntax.
          </p>
        </div>

        <TutorialSection title="What is Markdown?" icon={<HelpCircle className="h-6 w-6" />}>
          <p>
            Markdown is a lightweight markup language with plain-text-formatting syntax. It's designed so that it can be converted to HTML and many other formats using a tool by the same name. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
          </p>
        </TutorialSection>

        <TutorialSection title="Basic Markdown Syntax" icon={<Code className="h-6 w-6" />}>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium hover:text-primary">
                <Type className="mr-2 h-5 w-5 text-primary/80" /> Headings
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pl-2">
                <p>Use hash symbols (#) before your text to create headings. More hashes mean smaller headings.</p>
                <pre className="bg-muted p-3 rounded-md text-sm"><code>{'# Heading 1\n## Heading 2\n### Heading 3'}</code></pre>
                <Alert variant="default" className="bg-secondary">
                  <AlertTitle>Preview:</AlertTitle>
                  <AlertDescription>
                    <h1 className="text-2xl font-bold mt-1 mb-1">Heading 1</h1>
                    <h2 className="text-xl font-semibold mt-1 mb-1">Heading 2</h2>
                    <h3 className="text-lg font-semibold mt-1 mb-1">Heading 3</h3>
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium hover:text-primary">
                <Sparkles className="mr-2 h-5 w-5 text-primary/80" /> Emphasis (Bold & Italic)
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pl-2">
                <p>Wrap text with asterisks (*) or underscores (_) for italic, and double asterisks (**) or double underscores (__) for bold.</p>
                <pre className="bg-muted p-3 rounded-md text-sm"><code>{'*This text will be italic*\n_This will also be italic_\n\n**This text will be bold**\n__This will also be bold__\n\n_You **can** combine them_'}</code></pre>
                 <Alert variant="default" className="bg-secondary">
                  <AlertTitle>Preview:</AlertTitle>
                  <AlertDescription>
                    <p><em>This text will be italic</em></p>
                    <p><strong>This text will be bold</strong></p>
                    <p><em>You <strong>can</strong> combine them</em></p>
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium hover:text-primary">
                <List className="mr-2 h-5 w-5 text-primary/80" /> Lists (Ordered & Unordered)
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pl-2">
                <p>For unordered lists, use asterisks (*), plus signs (+), or hyphens (-). For ordered lists, use numbers followed by periods.</p>
                <pre className="bg-muted p-3 rounded-md text-sm"><code>{'* Item 1\n* Item 2\n  * Sub-item 2.1\n\n1. First item\n2. Second item'}</code></pre>
                <Alert variant="default" className="bg-secondary">
                  <AlertTitle>Preview:</AlertTitle>
                  <AlertDescription>
                    <ul><li>Item 1</li><li>Item 2<ul><li>Sub-item 2.1</li></ul></li></ul>
                    <ol><li>First item</li><li>Second item</li></ol>
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium hover:text-primary">
                <LinkIcon className="mr-2 h-5 w-5 text-primary/80" /> Links
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pl-2">
                <p>Create links using `[Link Text](URL)`.</p>
                <pre className="bg-muted p-3 rounded-md text-sm"><code>{'[Visit Google](https://www.google.com)'}</code></pre>
                <Alert variant="default" className="bg-secondary">
                  <AlertTitle>Preview:</AlertTitle>
                  <AlertDescription>
                    <a href="#" className="text-primary hover:underline">Visit Google</a>
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium hover:text-primary">
                <ImageIcon className="mr-2 h-5 w-5 text-primary/80" /> Images
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pl-2">
                <p>Embed images using `![Alt Text](Image URL)`.</p>
                <pre className="bg-muted p-3 rounded-md text-sm"><code>{'![Placeholder Image](https://placehold.co/300x200.png)'}</code></pre>
                <Alert variant="default" className="bg-secondary">
                  <AlertTitle>Preview:</AlertTitle>
                  <AlertDescription>
                    <Image src="https://placehold.co/300x200.png" alt="Placeholder Image" width={300} height={200} className="rounded-md shadow-sm" data-ai-hint="abstract placeholder" />
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium hover:text-primary">
                <Terminal className="mr-2 h-5 w-5 text-primary/80" /> Code Blocks & Inline Code
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pl-2">
                <p>For inline code, wrap text with backticks (`). For code blocks, use triple backticks (```) or indent lines with four spaces.</p>
                <pre className="bg-muted p-3 rounded-md text-sm">{"`This is inline code.`\n\n```javascript\nfunction greet() {\n  console.log('Hello, world!');\n}\n```"}</code></pre>
                <Alert variant="default" className="bg-secondary">
                  <AlertTitle>Preview:</AlertTitle>
                  <AlertDescription>
                    <p><code className="bg-muted-foreground/20 text-sm px-1 py-0.5 rounded-sm font-mono">This is inline code.</code></p>
                    <pre className="bg-muted-foreground/20 p-2 rounded-md text-sm"><code>{'function greet() {\n  console.log(\'Hello, world!\');\n}'}</code></pre>
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium hover:text-primary">
                <MessageSquare className="mr-2 h-5 w-5 text-primary/80" /> Blockquotes
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pl-2">
                <p>Use the greater-than symbol (>) at the beginning of a line to create a blockquote.</p>
                <pre className="bg-muted p-3 rounded-md text-sm"><code>{'> This is a blockquote.\n> It can span multiple lines.'}</code></pre>
                <Alert variant="default" className="bg-secondary">
                  <AlertTitle>Preview:</AlertTitle>
                  <AlertDescription>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-2">
                      <p>This is a blockquote.</p>
                      <p>It can span multiple lines.</p>
                    </blockquote>
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </TutorialSection>

        <TutorialSection title="Using the Editor" icon={<Wand2 className="h-6 w-6" />}>
          <p>
            Markdown Maverick features a powerful split-screen editor.
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Left Panel (Tools & Editor):</strong> This is where you'll find AI tools, boilerplate management, and your main Markdown input area. Type your Markdown text directly into the editor.</li>
            <li><strong>Right Panel (Preview):</strong> This panel shows a real-time preview of how your Markdown will be rendered. As you type in the editor, the preview updates instantly.</li>
            <li><strong>Resizable Panels:</strong> You can click and drag the handle between the panels to adjust their sizes according to your preference.</li>
          </ul>
        </TutorialSection>

        <TutorialSection title="AI Markdown Generator" icon={<Wand2 className="h-6 w-6" />}>
          <p>
            Need to kickstart your document? Use the AI Markdown Generator:
          </p>
          <ol className="list-decimal list-inside ml-4 space-y-1">
            <li>Navigate to the "AI Tools" tab in the left panel.</li>
            <li>Find the "AI Markdown Generator" section.</li>
            <li>Enter a topic (e.g., "Benefits of Remote Work") into the input field.</li>
            <li>Click the "Generate Markdown" button.</li>
            <li>The AI will generate Markdown content based on your topic and append it to your current editor content.</li>
          </ol>
        </TutorialSection>

        <TutorialSection title="AI Markdown Flavoring" icon={<Sparkles className="h-6 w-6" />}>
          <p>
            Want to make your existing Markdown more engaging? Try AI Markdown Flavoring:
          </p>
          <ol className="list-decimal list-inside ml-4 space-y-1">
            <li>Ensure you have some Markdown content in the editor.</li>
            <li>In the "AI Tools" tab, find the "AI Markdown Flavoring" section.</li>
            <li>Click the "Flavor Current Markdown" button.</li>
            <li>The AI will analyze your current Markdown and rewrite it with creative additions like metaphors or anecdotes. The editor content will be replaced with the flavored version.</li>
          </ol>
        </TutorialSection>

        <TutorialSection title="Managing Boilerplates" icon={<FileText className="h-6 w-6" />}>
          <p>
            Save time with reusable Markdown snippets using the Boilerplate Manager:
          </p>
          <ol className="list-decimal list-inside ml-4 space-y-1">
            <li>Navigate to the "Boilerplates" tab in the left panel.</li>
            <li><strong>Add New Boilerplate:</strong> Click "Add New". A dialog will appear. Enter a title and the Markdown content for your boilerplate, then click "Save Boilerplate".</li>
            <li><strong>Insert Boilerplate:</strong> Find your desired boilerplate in the list and click "Insert into Editor". The boilerplate content will be appended to your current editor text.</li>
            <li><strong>Edit Boilerplate:</strong> Click the edit icon (pencil) next to a boilerplate. Modify its title or content in the dialog, then click "Save Boilerplate".</li>
            <li><strong>Delete Boilerplate:</strong> Click the delete icon (trash can) next to a boilerplate. Confirm the deletion when prompted.</li>
          </ol>
          <p className="mt-2">
            Boilerplates are stored in your browser's local storage, so they'll be available next time you use Markdown Maverick on the same browser.
          </p>
        </TutorialSection>
         <Alert variant="default" className="mt-10 bg-primary/10 border-primary/30">
          <AlertTitle className="text-primary font-semibold flex items-center gap-2"><HelpCircle />Need More Help?</AlertTitle>
          <AlertDescription className="text-primary/90">
            If you have any questions or run into issues, feel free to explore or experiment. Happy writing!
          </AlertDescription>
        </Alert>
      </main>
      <footer className="py-4 text-center text-sm text-muted-foreground border-t">
        Markdown Maverick &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
