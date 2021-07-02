# TẠO WEB PHISHING VỚI BACKEND NODEJS và LƯU TRỮ BẰNG MONGODB


- Giao diện: JavaScript, HTML, CSS,..
- Cơ sở dữ liệu: MongoDB, MySQL, Oracle,…
- Xử lý thông tin phía server: JavaScript (Nodejs), PHP, Java, C#,…
- Triển khai phần mền lên các dịch vụ hosting: 000webhost, Heroku,…
- Thay đổi tên miền: Freenom, Google Domains,…



XÂY DỰNG:


Bước 1: Lấy giao diện của trang web cần giả mạo thông qua View page source, sau đó chỉnh sửa lại giao diện và các thẻ sao cho hợp lý, ở đây là các trang: 


- Nhận quà liên quân.


- Đăng nhập Facebook.


- Đăng nhập Garena.


Bước 2: Sửa đổi các thông tin cần thiết như: nơi nhận thông tin mà người dùng nhập, gửi các request lên server của mình, thêm các hàm  phù hợp…


Bước 3: Tiếp nhận thông tin mà người dùng gửi lên trang web phishing như: tài khoản, mật khẩu, nơi mà người dùng đăng nhập,… Ở đây mình dùng framework Express JS để xử lý và tiếp nhận thông tin.


Bước 4: Tạo cở sở dữ liệu, các bảng (hoặc model), sau đó lưu lại thông tin của mình nhận được vào cơ sở dữ liệu. Ở đây  mình dùng MongoDB Atlas
https://www.mongodb.com/cloud/atlas/register


Bước 5: Deploy trang web lên các web hosting hay cloud,… và thay đổi tên miền của Website, ở đây mình dùng Heroku và domain tại Freenom


