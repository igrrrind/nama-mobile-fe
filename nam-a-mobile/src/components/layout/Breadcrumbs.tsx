"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import breadcrumbsMap from "@/lib/breadcrumbsMap";

interface BreadcrumbsProps {
  homeElement?: React.ReactNode;
  separator?: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeItemClasses?: string;
  inactiveItemClasses?: string;
  capitalizeLinks?: boolean;
}

export default function Breadcrumbs({
  homeElement = "Home",
  separator = <ChevronRight className="h-4 w-4 text-gray-400" />,
  containerClasses = "py-2 px-4",
  listClasses = "flex items-center space-x-2 text-sm",
  activeItemClasses = "text-gray-500 font-medium",
  inactiveItemClasses = "text-primary hover:text-primary/80 font-medium",
  capitalizeLinks = true,
}: BreadcrumbsProps) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  if (pathNames.length === 0) return

  // Function to get display name from mapping or format the link as fallback
  const getDisplayName = (segment: string): string => {
    // Check if we have a custom name in our mapping
    if (breadcrumbsMap[segment]) {
      return breadcrumbsMap[segment];
    }
    
    // Fallback to formatting the URL segment
    return capitalizeLinks 
      ? segment.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase())
      : segment.replace(/-/g, " ");
  };

  return (
    <nav className={containerClasses} aria-label="Breadcrumbs">
      <ol className={listClasses}>
        <li className="inline-flex items-center">
          <Link href="/" className={inactiveItemClasses}>
            {homeElement}
          </Link>
        </li>
        
        {pathNames.length > 0 && (
          <li className="flex items-center">{separator}</li>
        )}

        {pathNames.map((segment, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathNames.length - 1;
          const linkClass = isLast ? activeItemClasses : inactiveItemClasses;
          
          // Get the display name from our mapping or formatting function
          const displayName = getDisplayName(segment);

          return (
            <Fragment key={index}>
              <li>
                {isLast ? (
                  <span className={linkClass}>{displayName}</span>
                ) : (
                  <Link href={href} className={linkClass}>
                    {displayName}
                  </Link>
                )}
              </li>
              {!isLast && (
                <li className="flex items-center">{separator}</li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}