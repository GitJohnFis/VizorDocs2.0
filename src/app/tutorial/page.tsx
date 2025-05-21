
import React from 'react';
import { AppHeader } from "@/components/AppHeader";
import { TutorialSection } from "@/components/TutorialSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Code, Wand2, FileText, Sparkles, HelpCircle, List, Type, Link as LinkIcon, Image as ImageIcon, Terminal, MessageSquare, CheckSquare, MessageSquareOff, Baseline, Link2, CornerDownLeft, Minus, Table2 } from "lucide-react";
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
                <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border">
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
                 <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border">
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
                <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border">
                  <AlertTitle>Preview:</AlertTitle>
                  <AlertDescription>
                    <ul><li>Item 1</li><li>Item 2<ul><li>Sub-item 2.1</li></ul></li></ul>
                    <ol><li>First item</li><li>Second item</li></ol>
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>

             <AccordionItem value="item-task-lists">
              <AccordionTrigger className="text-lg font-medium hover:text-primary">
                <CheckSquare className="mr-2 h-5 w-5 text-primary/80" /> Task Lists
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pl-2">
                <p>Create task lists (checkboxes) using hyphens followed by square brackets. Use `[ ]` for an incomplete task and `[x]` for a completed task.</p>
                <pre className="bg-muted p-3 rounded-md text-sm"><code>{'- [ ] Incomplete task\n- [x] Completed task\n- [ ] Another task to do'}</code></pre>
                <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border">
                  <AlertTitle>Preview:</AlertTitle>
                  <AlertDescription>
                    <ul className="list-none p-0 m-0">
                      <li className="flex items-center mb-1">
                        <input type="checkbox" disabled className="mr-2 w-4 h-4 accent-primary appearance-none border border-primary rounded-sm checked:bg-primary checked:bg-clip-content checked:before:content-['✔'] checked:before:block checked:before:text-primary-foreground checked:before:text-center checked:before:text-xs checked:before:font-bold" />
                        <span>Incomplete task</span>
                      </li>
                      <li className="flex items-center mb-1 text-muted-foreground line-through">
                        <input type="checkbox" defaultChecked disabled className="mr-2 w-4 h-4 accent-primary appearance-none border border-primary rounded-sm checked:bg-primary checked:bg-clip-content checked:before:content-['✔'] checked:before:block checked:before:text-primary-foreground checked:before:text-center checked:before:text-xs checked:before:font-bold" />
                        <span>Completed task</span>
                      </li>
                       <li className="flex items-center">
                        <input type="checkbox" disabled className="mr-2 w-4 h-4 accent-primary appearance-none border border-primary rounded-sm checked:bg-primary checked:bg-clip-content checked:before:content-['✔'] checked:before:block checked:before:text-primary-foreground checked:before:text-center checked:before:text-xs checked:before:font-bold" />
                        <span>Another task to do</span>
                      </li>
                    </ul>
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
                <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border">
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
                <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border">
                  <AlertTitle>Preview:</AlertTitle>
                  <AlertDescription>
                    <Image src="https://placehold.co/300x200.png" alt="Placeholder Image" width={300} height={200} className="rounded-md shadow-sm my-2" data-ai-hint="abstract placeholder" />
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-linked-images">
              <AccordionTrigger className="text-lg font-medium hover:text-primary">
                <Link2 className="mr-2 h-5 w-5 text-primary/80" /> Embedding Images with Links
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pl-2">
                <p>You can make images clickable by wrapping the Markdown for an image in the Markdown for a link:</p>
                <pre className="bg-muted p-3 rounded-md text-sm"><code>{'[![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)](https://www.markdownguide.org)'}</code></pre>
                <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border">
                  <AlertTitle>Preview:</AlertTitle>
                  <AlertDescription>
                    <a href="https://www.markdownguide.org" target="_blank" rel="noopener noreferrer" className="inline-block my-2">
                      <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg" 
                        alt="Markdown Logo" 
                        width={100} 
                        height={62} 
                        className="rounded-md shadow-sm"
                        data-ai-hint="logo brand"
                      />
                    </a>
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
                <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border">
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
                <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border">
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

            <AccordionItem value="item-horizontal-rules">
              <AccordionTrigger className="text-lg font-medium hover:text-primary">
                <Minus className="mr-2 h-5 w-5 text-primary/80" /> Horizontal Rules
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pl-2">
                <p>Create a horizontal rule (thematic break) using three or more hyphens (---), asterisks (***), or underscores (___) on a line by themselves. You can also include spaces between the characters.</p>
                <pre className="bg-muted p-3 rounded-md text-sm"><code>{'Line one\n\n---\n\nLine two\n\n* * *\n\nAnother line\n\n_________ \n\nEnd'}</code></pre>
                <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border">
                  <AlertTitle>Preview:</AlertTitle>
                  <AlertDescription>
                    <p>Line one</p>
                    <hr className="my-2 border-border" />
                    <p>Line two</p>
                    <hr className="my-2 border-border" />
                    <p>Another line</p>
                    <hr className="my-2 border-border" />
                    <p>End</p>
                  </AlertDescription>
                </Alert>
                 <Alert variant="default" className="mt-3 bg-blue-50 border-blue-300 dark:bg-blue-900/30 dark:border-blue-700">
                  <AlertTitle className="text-blue-700 dark:text-blue-300">Tip</AlertTitle>
                  <AlertDescription className="text-blue-600 dark:text-blue-400">
                    Horizontal rules are great for visually separating sections of your document.
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-line-breaks">
              <AccordionTrigger className="text-lg font-medium hover:text-primary">
                <Baseline className="mr-2 h-5 w-5 text-primary/80" /> Line Breaks & Spacing
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pl-2">
                 <div>
                  <h4 className="font-semibold text-md mb-1">Paragraph Breaks</h4>
                  <p>To create separate paragraphs, leave a blank line between blocks of text. This is the most common way to create vertical space.</p>
                  <pre className="bg-muted p-3 rounded-md text-sm mt-2"><code>{'First paragraph.\n\nSecond paragraph.'}</code></pre>
                  <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border mt-2">
                    <AlertTitle>Preview:</AlertTitle>
                    <AlertDescription>
                      <p>First paragraph.</p>
                      <p>Second paragraph.</p>
                    </AlertDescription>
                  </Alert>
                </div>
                <div>
                  <h4 className="font-semibold text-md mb-1 mt-4">Using <code>&lt;br/&gt;</code> for Single Line Breaks</h4>
                  <p>To force a single line break within a paragraph (a hard line break), you can use the HTML <code>&lt;br/&gt;</code> tag.</p>
                  <pre className="bg-muted p-3 rounded-md text-sm mt-2"><code>{'First line of text.<br/>\nThis text will appear directly on the next line.'}</code></pre>
                  <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border mt-2">
                    <AlertTitle>Preview:</AlertTitle>
                    <AlertDescription>
                      <p>First line of text.<br/>This text will appear directly on the next line.</p>
                    </AlertDescription>
                  </Alert>
                  <p className="mt-2 text-sm">Note: Using multiple <code>&lt;br/&gt;&lt;br/&gt;</code> tags in a row might not produce multiple visible blank lines in all Markdown renderers, as HTML often collapses consecutive line breaks within standard text flow. Typically, two <code>&lt;br/&gt;</code> tags will result in text on the next line, then an empty line, then text on the line after that (equivalent to a single paragraph break).</p>
                   <pre className="bg-muted p-3 rounded-md text-sm mt-2"><code>{'Line 1<br/><br/>Line 2'}</code></pre>
                   <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border mt-2">
                    <AlertTitle>Preview (Typical Behavior):</AlertTitle>
                    <AlertDescription>
                      <p>Line 1<br/><br/>Line 2</p>
                    </AlertDescription>
                  </Alert>
                </div>
                <div>
                  <h4 className="font-semibold text-md mb-1 mt-4">Using <code>&lt;pre&gt;</code> for Multiple Preserved Blank Lines</h4>
                  <p>If you need to ensure multiple blank lines are preserved exactly as you type them, you can use the HTML <code>&lt;pre&gt;</code> tag. Content inside <code>&lt;pre&gt;</code> tags is treated as preformatted text, meaning whitespace (including multiple blank lines) is respected. However, note that content inside <code>&lt;pre&gt;</code> is typically rendered in a monospace font and Markdown syntax is not processed within it.</p>
                  <pre className="bg-muted p-3 rounded-md text-sm mt-2"><code>{'Text before.\n<pre>\n\n\n</pre>\nText after.'}</code></pre>
                  <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border mt-2">
                    <AlertTitle>Preview:</AlertTitle>
                    <AlertDescription>
                      <p>Text before.</p>
                      <pre className="whitespace-pre-wrap my-0 py-0">{"\n\n\n"}</pre>
                      <p>Text after.</p>
                    </AlertDescription>
                  </Alert>
                </div>

                <div>
                  <h4 className="font-semibold text-md mb-1 mt-4">Using <code>&amp;nbsp;</code> for Blank Lines</h4>
                  <p>You can use the HTML entity <code>&amp;nbsp;</code> (non-breaking space) to create blank lines. Each <code>&amp;nbsp;</code> on its own line effectively creates an empty line with a non-collapsible space.</p>
                  <pre className="bg-muted p-3 rounded-md text-sm mt-2"><code>{'Line 1\n&nbsp;\n&nbsp;\nLine 2'}</code></pre>
                  <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border mt-2">
                    <AlertTitle>Preview:</AlertTitle>
                    <AlertDescription>
                      <p>Line 1</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <p>Line 2</p>
                    </AlertDescription>
                  </Alert>
                  <p className="mt-2 text-sm">Note: While this works in many Markdown renderers, some (like Bitbucket) might not interpret <code>&amp;nbsp;</code> on its own line as a full blank line for spacing purposes. Support can vary.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-md mb-1 mt-4">Using Backslashes (<code>\\</code>) for Line Breaks</h4>
                  <p>A backslash at the end of a line tells the Markdown parser to insert a hard line break (like <code>&lt;br/&gt;</code>).</p>
                  <pre className="bg-muted p-3 rounded-md text-sm mt-2"><code>{'Line 1\\\\\nLine 2\\\\\n\\\\\nLine 3'}</code></pre>
                  <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border mt-2">
                    <AlertTitle>Preview:</AlertTitle>
                    <AlertDescription>
                      <p>Line 1<br/>Line 2<br/><br/>Line 3</p>
                    </AlertDescription>
                  </Alert>
                  <p className="mt-2 text-sm">This is useful for poems or addresses where line breaks are significant.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-md mb-1 mt-4">Using Two Trailing Spaces for Line Breaks</h4>
                  <p>A common Markdown way to create a hard line break is to end a line with two or more spaces and then press Enter. Many editors will make these trailing spaces hard to see, so be careful.</p>
                  <pre className="bg-muted p-3 rounded-md text-sm mt-2 whitespace-pre-wrap"><code>{'Line one  \nLine two\n\n(Note: There are two spaces after "Line one")'}</code></pre>
                  <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border mt-2">
                    <AlertTitle>Preview:</AlertTitle>
                    <AlertDescription>
                      <p>Line one<br/>Line two</p>
                      <p>(Note: There are two spaces after "Line one")</p>
                    </AlertDescription>
                  </Alert>
                </div>

                <Alert variant="default" className="mt-3 bg-blue-50 border-blue-300 dark:bg-blue-900/30 dark:border-blue-700">
                  <AlertTitle className="text-blue-700 dark:text-blue-300">General Note on Line Breaks & Spacing</AlertTitle>
                  <AlertDescription className="text-blue-600 dark:text-blue-400">
                    For standard paragraph breaks (which create a visual space between blocks of text), simply leave an empty line in your Markdown source. Use methods like <code>&lt;br/&gt;</code>, backslashes, or two trailing spaces for more specific control over line breaks within paragraphs or when precise line formatting is needed. <code>&lt;pre&gt;</code> and <code>&amp;nbsp;</code> offer ways to control blank lines, but their support and rendering can vary.
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-comments">
              <AccordionTrigger className="text-lg font-medium hover:text-primary">
                <MessageSquareOff className="mr-2 h-5 w-5 text-primary/80" /> Comments
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pl-2">
                <p>You can add comments to your Markdown that will not be visible in the preview. Use the syntax <code>{'{::comment}'}</code> to start a comment and <code>{'{:/comment}'}</code> to end it.</p>
                <pre className="bg-muted p-3 rounded-md text-sm">
                  <code>
                    {'This text will be visible.\n\n{::comment}\nThis is a comment block.\nIt can span multiple lines.\nNone of this will appear in the preview.\n{:/comment}\n\nThis text is also visible.\n\nAn inline comment: Visible text {::comment}hidden comment{:/comment} more visible text.'}
                  </code>
                </pre>
                <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border">
                  <AlertTitle>Preview:</AlertTitle>
                  <AlertDescription>
                    <p>This text will be visible.</p>
                    <p>This text is also visible.</p>
                    <p>An inline comment: Visible text  more visible text.</p>
                  </AlertDescription>
                </Alert>
                 <Alert variant="default" className="mt-3 bg-blue-50 border-blue-300 dark:bg-blue-900/30 dark:border-blue-700">
                  <AlertTitle className="text-blue-700 dark:text-blue-300">Note</AlertTitle>
                  <AlertDescription className="text-blue-600 dark:text-blue-400">
                    Comments are useful for leaving notes to yourself or collaborators directly within the Markdown document without affecting the final output.
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </TutorialSection>

        <TutorialSection title="Markdown Tables (and a note on Slack)" icon={<Table2 className="h-6 w-6" />}>
          <p>
            Slack, a popular instant messaging application for team collaboration, has its own formatting conventions which are similar to Markdown but not identical. While full Markdown might not be supported everywhere in Slack, many basic constructs, including a way to represent tabular data, can be used in messages and posts.
          </p>
          <p className="mt-2">
            Markdown tables allow you to organize data into rows and columns. Headers are created using a minimum of three hyphens (`---`) under each header name, and columns of data or headers are separated by the pipe symbol (`|`).
          </p>

          <h4 className="font-semibold text-lg mb-2 mt-6">Basic Table Syntax</h4>
          <p>Here’s how you can create a simple table:</p>
          <pre className="bg-muted p-3 rounded-md text-sm mt-2"><code>
{`|Header1 |Header2  | Header3|
|--- | --- | ---|
|data1|data2|data3|
|data11|data12|data13|`}
          </code></pre>
          
          <h5 className="font-medium text-md mb-1 mt-4">Generated HTML:</h5>
          <pre className="bg-muted p-3 rounded-md text-sm mt-2"><code>
{`<table>
  <thead>
    <tr>
      <th>Header1</th>
      <th>Header2</th>
      <th>Header3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data1</td>
      <td>data2</td>
      <td>data3</td>
    </tr>
    <tr>
      <td>data11</td>
      <td>data12</td>
      <td>data13</td>
    </tr>
  </tbody>
</table>`}
          </code></pre>

          <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border mt-4">
            <AlertTitle>Preview:</AlertTitle>
            <AlertDescription>
              <table className="w-full my-2 border-collapse border border-border">
                <thead>
                  <tr>
                    <th className="border border-border px-2 py-1 text-left bg-muted">Header1</th>
                    <th className="border border-border px-2 py-1 text-left bg-muted">Header2</th>
                    <th className="border border-border px-2 py-1 text-left bg-muted">Header3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-2 py-1">data1</td>
                    <td className="border border-border px-2 py-1">data2</td>
                    <td className="border border-border px-2 py-1">data3</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-2 py-1">data11</td>
                    <td className="border border-border px-2 py-1">data12</td>
                    <td className="border border-border px-2 py-1">data13</td>
                  </tr>
                </tbody>
              </table>
            </AlertDescription>
          </Alert>

          <h4 className="font-semibold text-lg mb-2 mt-6">Rules for Markdown Tables</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Headers are separated by pipes (`|`).</li>
            <li>Tables without headers are not supported in the core Markdown specification.</li>
            <li>A minimum of 3 dashes (`---`) under each header name is required; you can declare more.</li>
            <li>Using pipe symbols at the start and end of rows is optional but improves readability.</li>
            <li>Use a pipe symbol to separate each column of row data.</li>
            <li>Table cell data can include simple text or other inline Markdown content.</li>
            <li>If cell content needs to include pipe (`|`) or backtick (`) symbols, these symbols must be escaped (e.g., `\\|`, `\\\``).</li>
          </ul>

          <h4 className="font-semibold text-lg mb-2 mt-6">Formatting Content Within Tables</h4>
          <p>You can use inline Markdown styles within table cells:</p>
          <pre className="bg-muted p-3 rounded-md text-sm mt-2"><code>
{`|Header1 |Header2  | Header3|
|--- | --- | ---|
|**bold style**| \`code block\`|*italic*|
|\\|escape pipe|\\\`backtick|data13|`}
          </code></pre>
          <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border mt-4">
            <AlertTitle>Preview:</AlertTitle>
            <AlertDescription>
              <table className="w-full my-2 border-collapse border border-border">
                <thead>
                  <tr>
                    <th className="border border-border px-2 py-1 text-left bg-muted">Header1</th>
                    <th className="border border-border px-2 py-1 text-left bg-muted">Header2</th>
                    <th className="border border-border px-2 py-1 text-left bg-muted">Header3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-2 py-1"><strong>bold style</strong></td>
                    <td className="border border-border px-2 py-1"><code className="bg-muted-foreground/20 text-sm px-1 py-0.5 rounded-sm font-mono">code block</code></td>
                    <td className="border border-border px-2 py-1"><em>italic</em></td>
                  </tr>
                  <tr>
                    <td className="border border-border px-2 py-1">|escape pipe</td>
                    <td className="border border-border px-2 py-1">\`backtick</td>
                    <td className="border border-border px-2 py-1">data13</td>
                  </tr>
                </tbody>
              </table>
            </AlertDescription>
          </Alert>

          <h4 className="font-semibold text-lg mb-2 mt-6">Aligning Cell Data</h4>
          <p>You can align content within columns to the left, right, or center using colons (`:`) in the header separator line:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Align left: `:---` (this is the default if no colons are used)</li>
            <li>Align right: `---:`</li>
            <li>Align center: `:---:`</li>
          </ul>
          <pre className="bg-muted p-3 rounded-md text-sm mt-2"><code>
{`|Header1 (Left) | Header2 (Right) | Header3 (Center)|
|:--- | ---:| :---:|
|Align left| Align right|center text|
|cell data1|cell data2|cell data3|`}
          </code></pre>
           <Alert variant="default" className="bg-secondary border-border dark:bg-muted/50 dark:border-border mt-4">
            <AlertTitle>Preview:</AlertTitle>
            <AlertDescription>
              <table className="w-full my-2 border-collapse border border-border">
                <thead>
                  <tr>
                    <th className="border border-border px-2 py-1 text-left bg-muted">Header1 (Left)</th>
                    <th className="border border-border px-2 py-1 text-right bg-muted">Header2 (Right)</th>
                    <th className="border border-border px-2 py-1 text-center bg-muted">Header3 (Center)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-2 py-1 text-left">Align left</td>
                    <td className="border border-border px-2 py-1 text-right">Align right</td>
                    <td className="border border-border px-2 py-1 text-center">center text</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-2 py-1 text-left">cell data1</td>
                    <td className="border border-border px-2 py-1 text-right">cell data2</td>
                    <td className="border border-border px-2 py-1 text-center">cell data3</td>
                  </tr>
                </tbody>
              </table>
            </AlertDescription>
          </Alert>
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
            <li><strong>Delete Boilerplate:</strong> Click the delete icon (trash can) next to a boilerplate. Confirm the deletion when prompted by typing "delete".</li>
          </ol>
          <p className="mt-2">
            Boilerplates are stored in your browser's local storage, so they'll be available next time you use Markdown Maverick on the same browser.
          </p>
        </TutorialSection>
         <Alert variant="default" className="mt-10 bg-primary/10 border-primary/30 dark:bg-primary/20 dark:border-primary/40">
          <AlertTitle className="text-primary font-semibold flex items-center gap-2"><HelpCircle />Need More Help?</AlertTitle>
          <AlertDescription className="text-primary/90 dark:text-primary/80">
            If you have any questions or run into issues, feel free to explore or experiment. Happy writing!
          </AlertDescription>
        </Alert>
      </main>
      <footer className="py-4 text-center text-sm text-muted-foreground border-t">
        Markdown Maverick © {new Date().getFullYear()}
      </footer>
    </div>
  );
}


    