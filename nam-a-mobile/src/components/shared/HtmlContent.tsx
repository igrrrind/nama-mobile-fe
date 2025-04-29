'use client';
import { useState } from 'react';
import { Button } from '../ui/button';

interface HtmlContentProps {
  content: string;
  className?: string;
}

export const HtmlContent = ({ content, className = '' }: HtmlContentProps) => {
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const isLongContent = content.length > 300;

  return (
    <div className={`relative ${className}`}>
      <div
        className={`prose prose-sm custom-editor-content ProseMirror max-w-none transition-all duration-300 ease-in-out ${
          isContentExpanded || !isLongContent ? '' : 'max-h-[300px] overflow-hidden'
        }`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {isLongContent && (
        <div className={`flex absolute  left-0 right-0 justify-center bg-gradient-to-b from-transparent to-white ${isContentExpanded ? 'py-0 -bottom-9' : 'py-4 bottom-0'}`}>
        <Button
          onClick={() => setIsContentExpanded(!isContentExpanded)}
          className="px-3 py-1 rounded-md shadow hover:underline"
        >
          {isContentExpanded ? 'Thu gọn' : 'Xem thêm'}
        </Button>
      </div>
      
      )}
    </div>
  );
};
