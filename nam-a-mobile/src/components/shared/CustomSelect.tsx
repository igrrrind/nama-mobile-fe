"use client";

import * as React from "react";
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  options: SelectOption[];
  disabled?: boolean;
  className?: string;
}

export function CustomSelect({
  value,
  onChange,
  placeholder = "Chọn một giá trị...",
  options,
  disabled = false,
  className,
}: SelectProps) {
  return (
    <ShadcnSelect
      onValueChange={onChange}
      value={value || ""}
      disabled={disabled}
    >
      <SelectTrigger
        className={cn(
          "w-full shadow-sm",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadcnSelect>
  );
}