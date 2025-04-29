"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Bold, Italic, Heading1, Heading2, Heading3, 
  ImageIcon, LinkIcon, Undo2, Redo2, Table as TableIcon, 
  AlignJustify,
  AlignRight,
  AlignCenter,
  AlignLeft
} from "lucide-react";
import { useEffect, useRef } from "react";
import TextAlign from '@tiptap/extension-text-align'

export const DEFAULT_VIETNAMESE_CONTENT = `
<h1>Hướng dẫn biên soạn nội dung kỹ thuật</h1>
<p>Chào mừng bạn đến với hệ thống biên tập nội dung. Hãy sử dụng các công cụ định dạng phía trên để tối ưu hóa bài viết của bạn, đảm bảo tính chuyên nghiệp và dễ tiếp cận cho người đọc trong lĩnh vực công nghệ.</p>

<h2>Các chức năng chính</h2>
<ul>
  <li><strong>Định dạng văn bản:</strong> Sử dụng các nút để làm <strong>đậm</strong>, <em>nghiêng</em>, hoặc <u>gạch chân</u> nội dung nhằm nhấn mạnh các điểm quan trọng.</li>
  <li><strong>Tạo cấu trúc bài viết:</strong> Sử dụng các thẻ tiêu đề (H1, H2, H3) để phân chia nội dung thành các phần rõ ràng, dễ theo dõi.</li>
  <li><strong>Chèn hình ảnh và video:</strong> Minh họa ý tưởng hoặc giới thiệu sản phẩm/dịch vụ bằng hình ảnh hoặc video trực quan.</li>
  <li><strong>Chèn liên kết:</strong> Liên kết tới các tài liệu, bài viết, hoặc nguồn tham khảo hữu ích để tăng giá trị nội dung.</li>
  <li><strong>Tạo bảng dữ liệu:</strong> Trình bày thông tin so sánh, thông số kỹ thuật hoặc dữ liệu phân tích một cách mạch lạc và khoa học.</li>
  <li><strong>Thêm mã nguồn (Code snippets):</strong> Chèn các đoạn mã lập trình có định dạng đẹp mắt, dễ đọc cho tài liệu kỹ thuật hoặc hướng dẫn lập trình.</li>
</ul>

<h2>Tiêu chuẩn nội dung dành cho website công nghệ</h2>
<ul>
  <li>Thông tin phải chính xác, cập nhật và có trích dẫn nguồn tin cậy nếu cần.</li>
  <li>Ngôn ngữ sử dụng nên chuyên nghiệp, rõ ràng nhưng vẫn gần gũi với người đọc.</li>
  <li>Ưu tiên trình bày ngắn gọn, súc tích; tránh những câu dài dòng gây khó hiểu.</li>
  <li>Hướng dẫn kỹ thuật nên đi kèm ví dụ minh họa thực tế, hình ảnh hoặc video demo.</li>
  <li>Đảm bảo nội dung tối ưu SEO bằng cách sử dụng từ khóa phù hợp trong tiêu đề, đoạn mô tả và thân bài.</li>
</ul>

<h3>Lưu ý quan trọng khi biên soạn</h3>
<p>Trước khi xuất bản nội dung, hãy kiểm tra lại:</p>
<ul>
  <li>Chính tả và ngữ pháp tiếng Việt.</li>
  <li>Cấu trúc bài viết có logic, rõ ràng và dễ theo dõi.</li>
  <li>Hình ảnh hoặc video được chèn có chất lượng cao, kích thước tối ưu cho web.</li>
  <li>Liên kết nội bộ (internal link) và liên kết ngoài (external link) hoạt động đúng cách.</li>
</ul>

<p>Hãy luôn đặt trải nghiệm người dùng lên hàng đầu. Một bài viết kỹ thuật tốt không chỉ truyền đạt thông tin chính xác mà còn giúp người đọc hiểu và ứng dụng vào thực tế dễ dàng hơn.</p>
`;


interface RTFEditorProps {
  initialContent?: string;
  onUpdate?: (content: string) => void;
  className?: string;
}


export function RTFEditor({
  initialContent = DEFAULT_VIETNAMESE_CONTENT,
  onUpdate,
  className
}: RTFEditorProps) {
  const editorContainerRef = useRef<HTMLDivElement>(null);
  
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({ // Add TextAlign extension
        types: ['heading', 'paragraph'],
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      if (onUpdate) {
        onUpdate(editor.getHTML());
      }
    },
    editorProps: {
      attributes: {
        class: "outline-none w-full h-full"
      }
    }
  });

  // Update content when initialContent changes (for form reset or default values)
  useEffect(() => {
    if (editor && initialContent && editor.getHTML() !== initialContent) {
      editor.commands.setContent(initialContent);
    }
  }, [initialContent, editor]);

  // Function to handle click on the content area
  const handleContentClick = () => {
    if (editor && !editor.isFocused) {
      editor.commands.focus();
    }
  };

  if (!editor) {
    return null;
  }

  const createTable = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const rows = window.prompt("Số hàng (Rows):", "3");
    if (!rows) return;
    
    const cols = window.prompt("Số cột (Columns):", "3");
    if (!cols) return;
    
    const hasHeader = window.confirm("Thêm hàng tiêu đề?");
    
    editor.chain()
      .focus()
      .insertTable({ 
        rows: parseInt(rows, 10) || 3, 
        cols: parseInt(cols, 10) || 3, 
        withHeaderRow: hasHeader 
      })
      .run();
  };

  const isInTable = editor.isActive('table');

  return (
    <div className={`flex flex-col gap-1 w-full bg-white rounded-md shadow-sm border overflow-hidden max-h-[400px] ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 p-2 border-b sticky top-0 bg-white z-10">
        <Button
          variant="outline" 
          size="icon" 
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()} 
          className={editor.isActive('bold') ? "bg-gray-200" : ""}
        >
          <Bold className="w-4 h-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()} 
          className={editor.isActive('italic') ? "bg-gray-200" : ""}
        >
          <Italic className="w-4 h-4" />
        </Button>
        <Separator orientation="vertical" className="max-h-6" />
        
        {/* Heading buttons */}
        <Button 
          variant="outline" 
          size="icon" 
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} 
          className={editor.isActive('heading', { level: 1 }) ? "bg-gray-200" : ""}
          title="Tiêu đề 1"
        >
          <Heading1 className="w-4 h-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} 
          className={editor.isActive('heading', { level: 2 }) ? "bg-gray-200" : ""}
          title="Tiêu đề 2"
        >
          <Heading2 className="w-4 h-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} 
          className={editor.isActive('heading', { level: 3 }) ? "bg-gray-200" : ""}
          title="Tiêu đề 3"
        >
          <Heading3 className="w-4 h-4" />
        </Button>

        {/* Add alignment controls */}
        <Button
          variant="outline"
          size="icon"
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? "bg-gray-200" : ""}
          title="Căn trái"
        >
          <AlignLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? "bg-gray-200" : ""}
          title="Căn giữa"
        >
          <AlignCenter className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? "bg-gray-200" : ""}
          title="Căn phải"
        >
          <AlignRight className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={editor.isActive({ textAlign: 'justify' }) ? "bg-gray-200" : ""}
          title="Căn đều"
        >
          <AlignJustify className="w-4 h-4" />
        </Button>
        
        <Separator orientation="vertical" className="max-h-6" />
        
        <Button 
          variant="outline" 
          size="icon" 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            const url = window.prompt("Nhập URL hình ảnh");
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
          title="Chèn hình ảnh"
        >
          <ImageIcon className="w-4 h-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            const url = window.prompt("Nhập URL liên kết");
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          title="Chèn liên kết"
        >
          <LinkIcon className="w-4 h-4" />
        </Button>
        
        {/* Table button */}
        {!isInTable && <Button 
          variant="outline" 
          size="icon" 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            createTable(e);
          }}
          title="Chèn bảng"
        >
          <TableIcon className="w-4 h-4" />
        </Button>
        }
        
        <Separator orientation="vertical" className="max-h-6" />
        
        <Button 
          variant="outline" 
          size="icon" 
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          title="Hoàn tác"
        >
          <Undo2 className="w-4 h-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          title="Làm lại"
        >
          <Redo2 className="w-4 h-4" />
        </Button>

        {/* Table-specific controls that appear only when inside a table */}
        {isInTable && (
          <>
            <Button 
              variant="outline" 
              size="sm" 
              type="button"
              onClick={() => editor.chain().focus().addColumnBefore().run()}
              title="Thêm cột trước"
            >
              + Cột trước
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              type="button"
              onClick={() => editor.chain().focus().addColumnAfter().run()}
              title="Thêm cột sau"
            >
              + Cột sau
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              type="button"
              onClick={() => editor.chain().focus().deleteColumn().run()}
              title="Xóa cột"
              className="text-red-500"
            >
              - Cột
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              type="button"
              onClick={() => editor.chain().focus().addRowBefore().run()}
              title="Thêm hàng trước"
            >
              + Hàng trước
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              type="button"
              onClick={() => editor.chain().focus().addRowAfter().run()}
              title="Thêm hàng sau"
            >
              + Hàng sau
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              type="button"
              onClick={() => editor.chain().focus().deleteRow().run()}
              title="Xóa hàng"
              className="text-red-500"
            >
              - Hàng
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              type="button"
              onClick={() => editor.chain().focus().deleteTable().run()}
              title="Xóa bảng"
              className="text-red-500"
            >
              Xóa bảng
            </Button>
          </>
        )}
      </div>
      {/* Editor Content */}
      <div 
        ref={editorContainerRef}
        className="overflow-auto h-[350px] max-h-[350px] p-3 cursor-text" 
        onClick={handleContentClick}
      >
        <EditorContent editor={editor} className="prose prose-sm custom-editor-content w-full max-w-none" />
      </div>
    </div>
  );
}