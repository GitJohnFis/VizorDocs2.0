"use client";

import { useState, useEffect } from "react";
import type { Boilerplate } from "@/types/boilerplate";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface BoilerplateFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (boilerplate: Boilerplate) => void;
  boilerplateToEdit?: Boilerplate | null;
}

export function BoilerplateFormDialog({
  isOpen,
  onClose,
  onSave,
  boilerplateToEdit,
}: BoilerplateFormDialogProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (boilerplateToEdit) {
      setTitle(boilerplateToEdit.title);
      setContent(boilerplateToEdit.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [boilerplateToEdit, isOpen]);

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Validation Error",
        description: "Title and content cannot be empty.",
        variant: "destructive",
      });
      return;
    }

    const newBoilerplate: Boilerplate = {
      id: boilerplateToEdit ? boilerplateToEdit.id : crypto.randomUUID(),
      title,
      content,
    };
    onSave(newBoilerplate);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>
            {boilerplateToEdit ? "Edit Boilerplate" : "Add New Boilerplate"}
          </DialogTitle>
          <DialogDescription>
            {boilerplateToEdit ? "Update the details of your boilerplate." : "Create a reusable Markdown snippet."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
              placeholder="e.g., Meeting Notes Template"
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="content" className="text-right pt-2">
              Content
            </Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="col-span-3 min-h-[150px]"
              placeholder="Enter Markdown content..."
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleSubmit}>
            Save Boilerplate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
