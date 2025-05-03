import { Calendar, User } from "lucide-react";
import { HtmlContent } from "@/components/shared/HtmlContent";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TextAlign from '@tiptap/extension-text-align';

interface BlogPreviewProps {
  title?: string;
  author?: string;
  createdAt?: string;
  imageUrl?: string;
  content?: string;
}

export default function BlogPreview({
  title,
  author,
  createdAt,
  imageUrl,
  content,
}: BlogPreviewProps) {
  return (
    <article className="max-w-4xl mx-auto mt-4">
      <h1 className="text-4xl font-bold mb-6">{title || "Tiêu đề bài viết"}</h1>
      <div className="flex items-center gap-6 text-gray-600 mb-8">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <span>{author || "Tác giả"}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <span>
            {createdAt
              ? new Date(createdAt).toLocaleDateString("vi-VN")
              : new Date().toLocaleDateString("vi-VN")}
          </span>
        </div>
      </div>
      <div className="aspect-video relative rounded-xl overflow-hidden bg-gray-200 mb-8">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Ảnh đại diện"
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Featured Image
          </div>
        )}
      </div>
      <RTFViewer content={content || "<p>Nội dung bài viết...</p>"} />
    </article>
  );
}


interface RTFViewerProps {
  content: string;
  className?: string;
}

export function RTFViewer({ content, className }: RTFViewerProps) {
  const editor = useEditor({
    editable: false,
    content, // Initial content is set here and won’t need to change
    extensions: [
      StarterKit,
      Image,
      Link.configure({ openOnClick: true }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
    ],
    editorProps: {
      attributes: {
        class: "prose max-w-none w-full outline-none",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className={className}>
      <EditorContent editor={editor} />
    </div>
  );
}
