import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  // Create groups of items, with 2 items per row
  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    // Get current pair (or single item if we're at the end)
    const rowItems = items.slice(i, i + 2);
    rows.push(rowItems);
  }

  return (
    <nav className="flex md:flex-row md:items-center flex-col md:space-y-0 text-sm text-gray-600">
      {rows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex flex-wrap items-center">
          {/* Home link only on the first row */}
          {/* Items in this row */}
          {row.map((item, itemIndex) => {
            // Calculate the absolute index in the original array
            const absoluteIndex = rowIndex * 2 + itemIndex;

            return (
              <div
                key={`item-${absoluteIndex}`}
                className="flex items-center space-x-2 overflow-hidden"
              >
                {absoluteIndex === 0 && (
                  <Link
                    href="/"
                    className="hover:text-primary-dark text-primary font-bold transition-colors text-ellipsis whitespace-nowrap mr-2"
                  >
                    TRANG CHỦ
                  </Link>
                )}
                <ChevronRight className="w-4 h-4 shrink-0" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-primary-dark text-primary font-bold transition-colors truncate mr-2"
                  >
                    {item.label.toUpperCase()}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-bold truncate mr-2">
                    {item.label.toUpperCase()}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </nav>
  );
};
