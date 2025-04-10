# HillBrookState Web - Layout & Animation Cut

## 📌 Tổng Quan

Dự án này bao gồm việc **cắt toàn bộ bố cục và animation** của trang web **HillBrookState**, với các component được tối ưu để tái sử dụng, cùng hiệu ứng tương tác nâng cao.

---

## 🗂 Cấu Trúc Thư Mục

### Thư Mục Chính `src/`

- **components/**  
  Chứa các component tái sử dụng, bao gồm cả icon từ thư viện bên ngoài.

- **layout/**  
  Gồm các layout chính như `header`, `footer`, `slider`, `form`, `navigation`, và các block bố cục nội dung.

- **pages/**  
  Chứa các trang hiển thị đầy đủ nội dung website.

- **scss/**  
  Bao gồm các file SCSS cấu hình toàn cục:
  - Biến (`variables`)
  - Điểm gãy (`breakpoints`)
  - Frame & hiệu ứng (`frames`)

#### Bên trong `layout/`

- **components/**  
  Chứa các component tái sử dụng trong layout.

> Mỗi component bao gồm:
> - `*.jsx`: Xử lý logic và cấu trúc hiển thị.
> - `*.scss`: Định dạng giao diện và hiệu ứng.

---

## 🧩 Mô Tả Các Component Chính

### `ContentWrapper`
- Tạo bố cục chứa hình ảnh và nội dung.
- **Props:**
  - `text`, `textHighlight`, `detail`
  - `option`, `image`, `moreImage`
  - `rotate`, `flexEnd`, `textPosition`

> `textHighlight`: làm nổi bật từ khóa  
> `rotate`: đảo vị trí hình ảnh và nội dung  
> `moreImage`: hiển thị thêm ảnh minh họa  

---

### `ScrollViewImage`
- Hiệu ứng **parallax** cho hình ảnh và nội dung.
- **Props:**
  - `text`, `textHighlight`, `images`
  - `listPosition`, `option`

---

### `ImageHover`
- Hiển thị ảnh khi người dùng **hover** vào văn bản.
- **Props:**
  - Mảng `{ text, image }` để ánh xạ giữa văn bản và ảnh.

---

### `DropDown`
- Hiển thị các **câu hỏi - câu trả lời** hoặc nội dung mở rộng.
- **Props:**
  - Mảng nội dung chính.
  - Mảng câu hỏi - câu trả lời phụ.

---

### `GalleryImage`
- Hiển thị ảnh dạng **grid có filter nội dung** hoặc **ngẫu nhiên**.
- **Props:**
  - `list`: Mảng `{ name, detail, tags }`
  - `gridPosition`: Số ảnh mỗi hàng
  - `position`: Bật/tắt hiển thị nội dung ảnh

---

### `MapMarker`
- Hiển thị các điểm đánh dấu trên bản đồ.
- **Tính năng:** Nhấp vào marker để xem thông tin chi tiết.

---

### `ImageShowScroll`
- Slide ảnh có thể **phóng to toàn màn hình** khi click.

---

### `ImageScroll`
- Slide ảnh kết hợp với **hiệu ứng cuộn GSAP**.
- **Tính năng:** Đồng bộ chuyển động nội dung và hình ảnh theo scroll.

---

## ✨ Các Component Khác

- Dùng để dựng bố cục form, hộp nội dung, xử lý tương tác nâng cao,...
- Các hiệu ứng chính được xây dựng bằng **GSAP** và các thư viện scroll animation hiện đại.

---

> Nếu bạn cần mình tạo thêm mục hướng dẫn cài đặt, phát triển hoặc đóng góp (Contribution Guide), mình có thể thêm vào file này.
