// components/shared/FormModal.tsx
"use client";

import { ReactNode, useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface FormModalProps {
  title: string;
  trigger: ReactNode;
  FormComponent: ReactNode; // Pass the full <Form /> component
  description?: string;
  open: boolean;
  setOpen: (value: boolean) => void
}

export function FormModal({ title, trigger, FormComponent, open, setOpen, description }: FormModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="pt-4">
          {FormComponent}
        </div>

        <DialogFooter className="flex gap-2">
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
