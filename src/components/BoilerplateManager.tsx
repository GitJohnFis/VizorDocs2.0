
"use client";

import { useState, useEffect, useCallback } from "react";
import type { Boilerplate } from "@/types/boilerplate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Added import
import { PlusCircle, FileText, Inbox } from "lucide-react";
import { BoilerplateFormDialog } from "./BoilerplateFormDialog";
import { BoilerplateItem } from "./BoilerplateItem";
import { getFromLocalStorage, saveToLocalStorage } from "@/lib/localStorageUtils";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


interface BoilerplateManagerProps {
  onInsertBoilerplate: (content: string) => void;
}

const LOCAL_STORAGE_KEY = "markdownMaverickBoilerplates";

const defaultBoilerplates: Boilerplate[] = [
  {
    id: 'default-basic-markdown',
    title: 'Basic Markdown Structure',
    content: `
# Document Title

## Section 1

Some introductory text.

- Item 1
- Item 2
  - Sub-item 2.1

### Subsection 1.1

> A blockquote for emphasis.

## Section 2

Another section with some \`inline code\`.

\`\`\`javascript
// A code block
function example() {
  console.log("Hello, Markdown!");
}
\`\`\`

---

[A link to somewhere](https://example.com)
`
  },
  {
    id: 'default-saucy-pitch',
    title: 'Saucy Sales Pitch',
    content: `
# 🔥 Skyrocket Your Productivity with... The Thingamajig 5000! 🔥

_Are you tired of mundane tasks? Do you dream of a world where your to-do list magically completes itself?_

Well, dream no more! The **Thingamajig 5000** is here to revolutionize your workflow!

## ✨ Why It's a Game-Changer ✨

- **Blazing Fast Performance:** So fast, it'll make your old tools look like they're wading through molasses.
- **Intuitive Interface:** Easier to use than a buttered slide!
- **Unparalleled Features:**
  1. Does X (and does it _well_!)
  2. Does Y (like a pro!)
  3. _Secret Feature Z_ (You won't believe it!)

> "This Thingamajig 5000 changed my life! I now have 10 extra hours a week to ponder the universe... or watch cat videos." - A Very Satisfied Customer

## 🚀 Get Yours Today! 🚀

Don't be the last one to the party! Click here to [Order Now!](https://example.com/order) and get a **FREE** digital high-five!

---

_Warning: May cause extreme efficiency and an uncontrollable urge to tell everyone about it._
`
  }
];


export function BoilerplateManager({ onInsertBoilerplate }: BoilerplateManagerProps) {
  const [boilerplates, setBoilerplates] = useState<Boilerplate[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [boilerplateToEdit, setBoilerplateToEdit] = useState<Boilerplate | null>(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [boilerplateToDeleteId, setBoilerplateToDeleteId] = useState<string | null>(null);
  const [deleteInputText, setDeleteInputText] = useState(""); // For delete confirmation input

  const { toast } = useToast();

  useEffect(() => {
    let storedBoilerplates = getFromLocalStorage<Boilerplate[] | null>(LOCAL_STORAGE_KEY, null);
    if (storedBoilerplates === null) { // If null, it's the first load or storage was cleared
      saveToLocalStorage(LOCAL_STORAGE_KEY, defaultBoilerplates);
      setBoilerplates(defaultBoilerplates);
    } else {
      setBoilerplates(storedBoilerplates);
    }
  }, []); // Run only on mount

  const saveBoilerplates = useCallback((updatedBoilerplates: Boilerplate[]) => {
    setBoilerplates(updatedBoilerplates);
    saveToLocalStorage(LOCAL_STORAGE_KEY, updatedBoilerplates);
  }, []);

  const handleAddBoilerplate = () => {
    setBoilerplateToEdit(null);
    setIsFormOpen(true);
  };

  const handleEditBoilerplate = (boilerplate: Boilerplate) => {
    setBoilerplateToEdit(boilerplate);
    setIsFormOpen(true);
  };

  const handleDeleteBoilerplate = (id: string) => {
    setBoilerplateToDeleteId(id);
    setDeleteInputText(""); // Reset input text when opening dialog
    setDeleteConfirmationOpen(true);
  };

  const confirmDelete = () => {
    if (deleteInputText.toLowerCase() !== "delete") {
      toast({
        title: "Deletion Not Confirmed",
        description: 'Please type "delete" in the text field to confirm.',
        variant: "destructive",
      });
      setDeleteInputText(""); // Clear input even on failure
      return;
    }

    if (boilerplateToDeleteId) {
      const updatedBoilerplates = boilerplates.filter((b) => b.id !== boilerplateToDeleteId);
      saveBoilerplates(updatedBoilerplates);
      toast({
        title: "Boilerplate Deleted",
        description: "The boilerplate has been removed.",
      });
    }
    setDeleteInputText(""); // Clear input
    setDeleteConfirmationOpen(false);
    setBoilerplateToDeleteId(null);
  };


  const handleSaveBoilerplate = (boilerplate: Boilerplate) => {
    const existingIndex = boilerplates.findIndex((b) => b.id === boilerplate.id);
    let updatedBoilerplates;
    if (existingIndex > -1) {
      updatedBoilerplates = [...boilerplates];
      updatedBoilerplates[existingIndex] = boilerplate;
       toast({ title: "Boilerplate Updated", description: "Your changes have been saved.", className: "bg-accent text-accent-foreground" });
    } else {
      updatedBoilerplates = [...boilerplates, boilerplate];
      toast({ title: "Boilerplate Added", description: "New boilerplate saved successfully.", className: "bg-accent text-accent-foreground" });
    }
    saveBoilerplates(updatedBoilerplates);
  };

  const handleInsert = (content: string) => {
    onInsertBoilerplate(content);
    toast({
      title: "Boilerplate Inserted",
      description: "Content added to the editor.",
    });
  };

  return (
    <Card className="shadow-md h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-xl">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Boilerplates
          </div>
          <Button variant="outline" size="sm" onClick={handleAddBoilerplate}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </CardTitle>
        <CardDescription>
          Manage your reusable Markdown snippets.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full pr-3">
          {boilerplates.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              <Inbox className="mx-auto h-12 w-12 mb-2" />
              <p>No boilerplates yet.</p>
              <p>Click "Add New" to create one.</p>
            </div>
          ) : (
            boilerplates.map((bp) => (
              <BoilerplateItem
                key={bp.id}
                boilerplate={bp}
                onInsert={handleInsert}
                onEdit={handleEditBoilerplate}
                onDelete={handleDeleteBoilerplate}
              />
            ))
          )}
        </ScrollArea>
      </CardContent>

      <BoilerplateFormDialog
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSaveBoilerplate}
        boilerplateToEdit={boilerplateToEdit}
      />

      <AlertDialog open={deleteConfirmationOpen} onOpenChange={setDeleteConfirmationOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the boilerplate titled{" "}
              <strong>{boilerplates.find(bp => bp.id === boilerplateToDeleteId)?.title || ''}</strong>.
              <br />
              Please type "<strong>delete</strong>" below to confirm.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Input
            type="text"
            value={deleteInputText}
            onChange={(e) => setDeleteInputText(e.target.value)}
            placeholder='Type "delete" to confirm'
            className="mt-2"
            aria-label="Confirm deletion by typing delete"
          />
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel onClick={() => { setBoilerplateToDeleteId(null); setDeleteInputText(""); }}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete} 
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              disabled={deleteInputText.toLowerCase() !== "delete"} // Disable button if input doesn't match
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}

