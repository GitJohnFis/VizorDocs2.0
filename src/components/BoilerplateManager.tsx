"use client";

import { useState, useEffect, useCallback } from "react";
import type { Boilerplate } from "@/types/boilerplate";
import { Button } from "@/components/ui/button";
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

export function BoilerplateManager({ onInsertBoilerplate }: BoilerplateManagerProps) {
  const [boilerplates, setBoilerplates] = useState<Boilerplate[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [boilerplateToEdit, setBoilerplateToEdit] = useState<Boilerplate | null>(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [boilerplateToDeleteId, setBoilerplateToDeleteId] = useState<string | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    setBoilerplates(getFromLocalStorage<Boilerplate[]>(LOCAL_STORAGE_KEY, []));
  }, []);

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
    setDeleteConfirmationOpen(true);
  };

  const confirmDelete = () => {
    if (boilerplateToDeleteId) {
      const updatedBoilerplates = boilerplates.filter((b) => b.id !== boilerplateToDeleteId);
      saveBoilerplates(updatedBoilerplates);
      toast({
        title: "Boilerplate Deleted",
        description: "The boilerplate has been removed.",
      });
    }
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
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the boilerplate.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setBoilerplateToDeleteId(null)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
