import { blogs } from "@/constants/adminData";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { BlogTable } from "@/components/admin/tables/BlogTable";
import BlogModal from "@/components/admin/modals/BlogModal";

export default function BlogManagementPage() {
  // In a real app, this would be an API call or database query
  const data = blogs;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Quản lý bài viết</h1>
      <BlogTable data={data}>
        <BlogModal>
          <Button className="flex items-center gap-2 bg-primary text-white">
            <PlusCircle className="w-5 h-5" />
            Thêm bài viết mới
          </Button>
        </BlogModal>
      </BlogTable>
    </div>
  );
}