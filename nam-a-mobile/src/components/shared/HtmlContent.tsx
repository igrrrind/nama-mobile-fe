interface HtmlContentProps {
  content: string;
  className?: string;
}

export const HtmlContent = ({ content, className = '' }: HtmlContentProps) => {
  return (
    <div
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}; 