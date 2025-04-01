
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Lỗi 404: Người dùng cố gắng truy cập vào đường dẫn không tồn tại:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-craft-cream">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-craft-terracotta">404</h1>
        <p className="mb-6 text-xl text-craft-brown">
          Rất tiếc! Không thể tìm thấy trang này
        </p>
        <Button 
          asChild
          className="bg-craft-terracotta hover:bg-craft-clay"
        >
          <a href="/">Quay lại Trang Chủ</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
