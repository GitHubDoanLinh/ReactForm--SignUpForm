Mục tiêu
Tạo được dự án React JS
Thao tác với state thông qua event
Thực hành validate form
Mô tả bài toán

Viết chương trình cho phép sign up

/*Mục tiêu
Tạo được dự án React JS
Thao tác với state thông qua event
Thực hành validate form

Viet chuong trinh cho phep signup

Người dùng nhập thông tin vào các trường, sau đó nhấn “Submit”
Nếu các trường có nội dung, hiển thị alert “Sign up successfully!!!”
Nếu một trong các trường không có nội dung, hiển thị alert “Please fill out all the fields!!!”

Bước 1: Tạo dự án React JS
Bước 2: File App.css
    Style theo ý thích của bạn
Bước 3: Tạo file App.js
    Import file App.css vào App.js
    Import React, { useState } from ‘react’;
    Tạo function App và trả về làm giá trị mặc định của component
    Khai báo biến form và setForm bằng hàm useState(), giá trị khởi tạo bằng {}
    Khởi tạo hàm handleChange nhận event làm param truyền vào, hàm này sẽ cập nhật lại giá trị mới cho form thông qua hàm setForm
    Khởi tạo hàm handleSubmit
        Khai báo biến isValid mang giá trị bằng form.username && form.email && form.password && form.confirmPassword,
        biến này sẽ quyết định thông báo được đưa ra
        Sử dụng hàm alert để đưa ra thông báo phù hợp
        Nếu isValid bằng true thì thông báo đăng ký thành công
        Nếu isValid bằng false thì thông báo người dùng điền đầy đủ thông tin
    Tạo hàm return, trả về là element JSX thể hiện các element của form Sign in
Buớc 4: File index.js
    Import file App.js vào index.js
    Render component App
Buớc 5: Khởi chạy dự án

*/