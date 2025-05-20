"use client";

import type { Boilerplate } from "@/types/boilerplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Edit3, Trash2, ClipboardPlus, FileText } from "lucide-react";

interface BoilerplateItemProps {
  boilerplate: Boilerplate;
  onInsert: (content: string) => void;
  onEdit: (boilerplate: Boilerplate) => void;
  onDelete: (id: string) => void;
}

export function BoilerplateItem({
  boilerplate,
  onInsert,
  onEdit,
  onDelete,
}: BoilerplateItemProps) {
  return (
    <Card className="mb-3 shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-md flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              {boilerplate.title}
            </CardTitle>
          </div>
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onEdit(boilerplate)}
              aria-label={`Edit boilerplate ${boilerplate.title}`}
              className="h-7 w-7"
            >
              <Edit3 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(boilerplate.id)}
              aria-label={`Delete boilerplate ${boilerplate.title}`}
              className="h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-3">
        <CardDescription className="text-xs line-clamp-2 mb-2">{boilerplate.content}</CardDescription>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onInsert(boilerplate.content)}
          className="w-full"
          aria-label={`Insert boilerplate ${boilerplate.title}`}
        >
          <ClipboardPlus className="mr-2 h-4 w-4" />
          Insert into Editor
        </Button>
      </CardContent>
    </Card>
  );
}
