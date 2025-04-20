import { Metadata } from "next";
import { Calendar, User, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { HtmlContent } from "@/components/shared/HtmlContent";
import { Blog } from "@/types/blog.interface";

// (Optional) Replace this with a real fetch from your API in the future
async function getPostBySlug(slug: string): Promise<Blog> {
  return {
    title: "Cách nhận biết màn hình iPhone chính hãng",
    author: "Nam A Mobile",
    createdAt: "2024-03-20",
    // readTime: "5 phút",
    content: `
      <h2>1. Kiểm tra thông tin màn hình trong cài đặt</h2>
      <p>Đầu tiên, bạn có thể kiểm tra thông tin màn hình iPhone trong phần Cài đặt. Truy cập Cài đặt > Cài đặt chung > Giới thiệu > Màn hình. Tại đây, bạn sẽ thấy các thông tin về model màn hình, số serial...</p>

      <h2>2. Kiểm tra chất lượng hiển thị</h2>
      <p>Màn hình iPhone chính hãng có độ phân giải cao, màu sắc trung thực và góc nhìn rộng. Khi xem ở các góc độ khác nhau, màu sắc vẫn giữ nguyên độ chính xác...</p>

      <h2>3. Kiểm tra cảm ứng</h2>
      <p>Cảm ứng trên màn hình chính hãng có độ nhạy cao và đều khắp màn hình. Không có hiện tượng chậm, đơ hoặc không nhận cảm ứng ở một số vị trí...</p>

      <h2>4. Kiểm tra độ sáng</h2>
      <p>Màn hình chính hãng có độ sáng cao và điều chỉnh tự động mượt mà. Bạn có thể kiểm tra bằng cách:</p>
      <ul>
        <li>Điều chỉnh độ sáng từ 0% đến 100%</li>
        <li>Kiểm tra trong môi trường ánh sáng khác nhau</li>
        <li>Quan sát độ mượt khi thay đổi độ sáng</li>
      </ul>

      <h2>5. Kiểm tra True Tone</h2>
      <p>Màn hình chính hãng có tính năng True Tone hoạt động chính xác. Tính năng này tự động điều chỉnh màu sắc màn hình dựa trên ánh sáng môi trường...</p>

      <h2>Kết luận</h2>
      <p>Việc nhận biết màn hình iPhone chính hãng không quá khó nếu bạn biết các dấu hiệu cần kiểm tra. Hãy luôn cẩn thận và kiểm tra kỹ trước khi quyết định thay màn hình...</p>
    `,
    relatedPosts: [
      {
        title: "Top 5 lỗi màn hình iPhone thường gặp",
        slug: "top-5-loi-man-hinh-iphone-thuong-gap",
      },
      {
        title: "Cách bảo vệ màn hình iPhone hiệu quả",
        slug: "cach-bao-ve-man-hinh-iphone-hieu-qua",
      },
      {
        title: "So sánh các loại màn hình iPhone",
        slug: "so-sanh-cac-loai-man-hinh-iphone",
      },
    ],
  };
}

// Create a cache function to avoid duplicate fetches
const postCache = new Map();

async function getPostWithCache(slug: string): Promise<Blog> {
  if (!postCache.has(slug)) {
    const post = await getPostBySlug(slug);
    postCache.set(slug, post);
  }
  return postCache.get(slug);
}

// Dynamic SEO metadata
export async function generateMetadata({ params }: {params: Promise<{ slug: string }>}): Promise<Metadata> {
  const {slug} = await params
  const post = await getPostWithCache(slug);
  return {
    title: post.title,
    description: `${post.title} - bài viết hướng dẫn chi tiết từ Nam A Mobile.`,
  };
}

export default async function BlogDetailPage({ params }: {params: Promise<{ slug: string }>}) {
  const {slug} = await params
  const post = await getPostWithCache(slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title ?? "" },
        ]}
      />

      <article className="max-w-4xl mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{new Date(post.createdAt).toLocaleDateString("vi-VN")}</span>
          </div>
          {/* <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{post.readTime} đọc</span>
          </div> */}
        </div>

        <div className="aspect-video relative rounded-xl overflow-hidden bg-gray-200 mb-8">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Featured Image
          </div>
        </div>

        <HtmlContent content={post.content} />

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-bold mb-6">Bài viết liên quan</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {post.relatedPosts?.map((relatedPost, index) => (
              <a key={index} href={`/blog/${relatedPost.slug}`} className="group">
                <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-200 mb-4">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Thumbnail
                  </div>
                </div>
                <h4 className="font-semibold group-hover:text-primary transition-colors">
                  {relatedPost.title}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}