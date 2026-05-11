# TN Manager — Hệ thống quản lý tài nguyên số

## Mô tả dự án
Web app quản lý tài nguyên số (TKQC, VIA, Fanpage, BM) cho agency Facebook Ads.
Đây là project đồ án tốt nghiệp — giao diện mockup, không có backend thật.

## Tech stack
- HTML/CSS/JS thuần, không framework
- Tailwind CSS via CDN
- Font: Inter (Google Fonts)
- Mock data trong data.js

## Màu sắc hệ thống
- Sidebar bg: #27403E
- Sidebar active: #21A691
- Sidebar hover: rgba(33,166,145,0.15)
- Header bg: #FFFFFF
- Header border: #E2E8F0
- Background: #F0F4F4
- Card / Surface: #FFFFFF
- Primary: #21A691 (teal) — hover #1A8A78
- Accent / CTA: #87DF2C (xanh lá neon) — hover #72C420
- Text primary: #060D10
- Text muted: #64748B
- Border: #E2E8F0
- Danger: #EF4444
- Warning: #F59E0B
- Success: #21A691

## Roles
- leader: toàn quyền
- nhansu: phạm vi được phân công
- khachhang: chỉ xem của mình

## Tài khoản demo
- leader@agency.com / password123
- nhansu@agency.com / password123
- kh@agency.com / password123

## Cấu trúc thư mục
- index.html: trang login
- assets/js/auth.js: xử lý login, role, session
- assets/js/data.js: mock data dùng chung
- pages/leader/: giao diện Leader
- pages/nhansu/: giao diện Nhân sự
- pages/khachhang/: giao diện Khách hàng
- components/: sidebar, header dùng chung

## Lưu ý
- Mọi page phải check role khi load, sai role redirect về login
- Sidebar render theo role
- Text toàn bộ tiếng Việt
- Comment code tiếng Việt