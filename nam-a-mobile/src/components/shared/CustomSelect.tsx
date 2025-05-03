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
  options?: SelectOption[];
  disabled?: boolean;
  className?: string;
}

export function CustomSelect({
  value,
  onChange,
  placeholder = "Chọn một giá trị...",
  options = [],
  disabled = false,
  className,
}: SelectProps) {
  const hasOptions = Array.isArray(options) && options.length > 0;
  const isDisabled = disabled || !hasOptions;

  return (
    <ShadcnSelect
      onValueChange={onChange}
      value={value || ""}
      disabled={isDisabled}
    >
      <SelectTrigger
        className={cn(
          "w-full shadow-sm",
          isDisabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <SelectValue placeholder={hasOptions ? placeholder : "Không có tùy chọn"} />
      </SelectTrigger>
      {hasOptions && (
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      )}
    </ShadcnSelect>
  );
}
