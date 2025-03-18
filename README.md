Cắt Web HillBrookState

Tổng Quan

Dự án này bao gồm việc cắt toàn bộ bố cục và animation của trang web HillBrookState.

Cấu Trúc Thư Mục

Thư Mục Chính src/:

&nbsp;&nbsp;components/: Chứa các component có thể tái sử dụng, bao gồm cả icon từ thư viện bên ngoài.

&nbsp;&nbsp;layout/: Chứa các layout và component tái sử dụng cho trang web, bao gồm header, footer, slide ảnh, hộp chứa nội dung, form, và thanh điều hướng.

&nbsp;&nbsp;pages/: Chứa các trang hiển thị cho trang web.

&nbsp;&nbsp;scss/: Chứa các file SCSS cấu hình cho dự án, bao gồm biến, breakpoint, và frame.

Bên trong layout/

&nbsp;&nbsp;Chứa thư mục components/, nơi lưu các component được tái sử dụng.

Mỗi component bao gồm:

&nbsp;&nbsp;Một file .jsx để xử lý logic và cấu trúc.

&nbsp;&nbsp;Một file .scss để định dạng giao diện.

Mô Tả Các Component

ContentWrapper

&nbsp;Tạo một bố cục chứa hình ảnh và nội dung với vị trí và chữ có thể tùy chỉnh.

&nbsp;Thuộc tính:

&nbsp;&nbsp;text, textHighlight, detail, option, image, moreImage, rotate, flexEnd, textPosition

&nbsp;&nbsp;&nbsp;textHighlight: Xác định các từ cần làm nổi bật trong text.

&nbsp;&nbsp;&nbsp;moreImage: Hiển thị hình ảnh bổ sung trong block.

&nbsp;&nbsp;&nbsp;rotate: Đảo ngược vị trí nội dung.

f&nbsp;&nbsp;&nbsp;lexEnd: Căn chỉnh block về phía đầu hoặc cuối.

ScrollViewImage

&nbsp;Tạo hiệu ứng parallax cho hình ảnh với nội dung và chữ có thể tùy chỉnh.

&nbsp;Thuộc tính:
&nbsp;&nbsp;text, textHightLight, images, listPosition, option

&nbsp;&nbsp;&nbsp;textHightLight: Xác định các từ cần làm nổi bật trong text.

&nbsp;&nbsp;&nbsp;images: danh sách image hiển thị

&nbsp;&nbsp;&nbsp;listPosition: vị trí mà ảnh tương ứng sẽ hiển thị

ImageHover

&nbsp;Hiển thị hình ảnh khi người dùng di chuột qua đoạn văn bản tương ứng.

&nbsp;Thuộc tính:

&nbsp;&nbsp;&nbsp; Một mảng text và image.

&nbsp;&nbsp;&nbsp;Ánh xạ từng đoạn văn bản với một hình ảnh, hiển thị khi hover.

DropDown

&nbsp;Hiển thị nội dung có thể mở rộng.

&nbsp;Thuộc tính:

&nbsp;&nbsp;Mảng nội dung chính.

&nbsp;&nbsp;Mảng nội dung phụ chứa câu hỏi và câu trả lời.

&nbsp;&nbsp;Nhấn vào nút để hiển thị thêm nội dung nếu có.

GalleryImage

&nbsp;Tạo danh sách ảnh thay đổi dựa trên nội dung được chọn.

&nbsp;&nbsp;Thuộc tính:

&nbsp;&nbsp;&nbsp;list (mảng nội dung và hình ảnh)

&nbsp;&nbsp;&nbsp;gridPosition (số lượng ảnh trong một hàng)

&nbsp;&nbsp;&nbsp;position (true/false - xác định ảnh có nội dung hay không)

&nbsp;&nbsp;Nếu ảnh không có nội dung, chúng sẽ được sắp xếp ngẫu nhiên dựa trên số lượng ảnh.

&nbsp;&nbsp;Nếu ảnh có nội dung, chúng sẽ được hiển thị theo bố cục dạng lưới.

&nbsp;&nbsp;Mảng list cần có các thuộc tính như name, detail, và tags.

MapMarker

&nbsp;Tạo các điểm đánh dấu trên bản đồ, hiển thị nội dung khi nhấp vào.

ImageShowScroll

&nbsp;Hiển thị danh sách hình ảnh, cho phép người dùng nhấp vào để xem ở chế độ toàn màn hình.

ImageScroll

&nbsp;Tạo slide ảnh với nội dung hiển thị theo hiệu ứng cuộn trang.

&nbsp;Sử dụng GSAP để xử lý animation cuộn trang.



Các component khác được sử dụng để tạo bố cục form cho nội dung hiển thị.