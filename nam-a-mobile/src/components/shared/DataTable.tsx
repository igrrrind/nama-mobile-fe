"use client"

import { useState } from "react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
  type ExpandedState,
} from "@tanstack/react-table";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DataTableProps<TData extends object, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export interface ExpandableRow {
  expandedComponent?: React.ReactNode;
}

// Type-safe expander column
const createExpanderColumn = <TData extends object, TValue>(): ColumnDef<TData, TValue> => ({
  id: "expander",
  header: () => null,
  cell: ({ row }) => {
    const canExpand = row.getCanExpand();
    if (!canExpand) return null;

    return (
      <Button
        variant="ghost"
        onClick={(e) => {
          e.stopPropagation();
          row.toggleExpanded();
        }}
        size="sm"
        className="p-0 h-8 w-8"
        aria-label={row.getIsExpanded() ? "Collapse row" : "Expand row"}
      >
        {row.getIsExpanded() ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </Button>
    );
  },
});

export function DataTable<TData extends object, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const finalColumns: ColumnDef<TData, TValue>[] = [
    createExpanderColumn<TData, TValue>(),
    ...columns,
  ];

  const table = useReactTable({
    data,
    columns: finalColumns,
    state: { expanded },
    onExpandedChange: setExpanded,
    getRowCanExpand: (row) =>
      "expandedComponent" in row.original && !!row.original.expandedComponent,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table className="w-full">
        <TableHeader className="sticky top-0 bg-neutral-100 z-10 shadow">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={cn(header.column.columnDef.meta, "whitespace-nowrap")}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <>
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={row.getCanExpand() ? "cursor-pointer hover:bg-muted/50" : ""}
                  onClick={() => row.getCanExpand() && row.toggleExpanded()}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="whitespace-nowrap">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
                {row.getIsExpanded() && (
                  <TableRow>
                    <TableCell colSpan={row.getVisibleCells().length} className="p-0 border-t-0">
                      <div className="p-4 bg-muted/30">
                        {(row.original as ExpandableRow).expandedComponent}
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length + 1} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}