import React from "react";
import { Link } from "react-router-dom";

export const blogs = {
  1: {
    title: "Công nghệ AI đang thay đổi thế giới",
    description:
      "Khám phá cách trí tuệ nhân tạo đang được ứng dụng trong các lĩnh vực khác nhau như y tế, giáo dục và công nghiệp.",
  },
  2: {
    title: "Khởi nghiệp tại Việt Nam năm 2025",
    description:
      "Phân tích xu hướng khởi nghiệp và các ngành nghề tiềm năng trong những năm tới.",
  },
  3: {
    title: "Bí quyết học lập trình hiệu quả",
    description:
      "Chia sẻ những phương pháp học lập trình giúp bạn tiến bộ nhanh và vững chắc.",
  },
  4: {
    title: "Thị trường tiền điện tử hôm nay",
    description:
      "Cập nhật những biến động mới nhất trên thị trường crypto và những nhận định từ chuyên gia.",
  },
  5: {
    title: "Lối sống xanh: Từ thói quen nhỏ đến thay đổi lớn",
    description:
      "Hướng dẫn cách bắt đầu lối sống thân thiện với môi trường từ những việc đơn giản nhất.",
  },
};

const BlogList = () => {
  return (
    <div className="p-5">
        <div className="flex flex-col gap-y-1">
          {Object.entries(blogs).map(([key, value]) => (
            <Link
              key={key}
              to={`/blog/${key}`}
              className="flex flex-col gap-y-1 border p-2"
            >
              <h2 className="text-lg font-bold">{value.title}</h2>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default BlogList;
