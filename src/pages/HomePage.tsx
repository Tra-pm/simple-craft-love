
import { NhileLayout } from "@/components/NhileLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <NhileLayout>
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Chào mừng đến với Hệ thống NhiLe!</h1>
          <p className="text-lg text-muted-foreground">
            Nền tảng toàn diện cho việc cộng tác nhóm, chia sẻ kiến thức và quản lý dự án.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Bảng Tin Nhóm</CardTitle>
              <CardDescription>Cập nhật tin tức mới nhất từ nhóm</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Luôn cập nhật với thông báo, thành tựu và thông tin quan trọng.</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Trung Tâm Tài Nguyên</CardTitle>
              <CardDescription>Truy cập tất cả tài liệu học tập</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Tìm tài liệu, hướng dẫn, mẫu và các tài nguyên khác cho công việc của bạn.</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Theo Dõi Thời Gian</CardTitle>
              <CardDescription>Ghi lại đóng góp của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Ghi lại giờ làm việc và theo dõi phân bổ thời gian dự án.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </NhileLayout>
  );
}
