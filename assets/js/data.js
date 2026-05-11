// data.js — Mock data dùng chung cho toàn project

// Danh sách VIA (tài khoản Facebook cá nhân quản trị)
const VIA = [
  {
    id: 'VIA001',
    ten: 'VIA_nguyen',
    fbUserId: 'fb_001',
    trangThai: 'active',
    tokenHetHan: '2026-05-20',
    soTaiSan: 12,
    soHuuBoi: 'Nguyễn Minh Leader',
    ngayThem: '2026-04-01 09:00'
  },
  {
    id: 'VIA002',
    ten: 'VIA_tran',
    fbUserId: 'fb_002',
    trangThai: 'active',
    tokenHetHan: '2026-06-15',
    soTaiSan: 8,
    soHuuBoi: 'Nguyễn Minh Leader',
    ngayThem: '2026-04-05 14:30'
  },
  {
    id: 'VIA003',
    ten: 'VIA_le',
    fbUserId: 'fb_003',
    trangThai: 'disabled',
    tokenHetHan: '2026-04-01',
    soTaiSan: 5,
    soHuuBoi: 'Nguyễn Minh Leader',
    ngayThem: '2026-03-20 11:00'
  },
  {
    id: 'VIA004',
    ten: 'VIA_pham',
    fbUserId: 'fb_004',
    trangThai: 'active',
    tokenHetHan: '2026-07-10',
    soTaiSan: 15,
    soHuuBoi: 'Nguyễn Minh Leader',
    ngayThem: '2026-04-10 08:45'
  },
  {
    id: 'VIA005',
    ten: 'VIA_hoang',
    fbUserId: 'fb_005',
    trangThai: 'active',
    tokenHetHan: '2026-05-25',
    soTaiSan: 9,
    soHuuBoi: 'Nguyễn Minh Leader',
    ngayThem: '2026-04-15 16:20'
  }
];

// Danh sách Tài khoản quảng cáo
const TKQC = [
  {
    id: 'TKQC001',
    ten: 'TKQC_001',
    maKH: 'KH001',
    trangThai: 'active',
    soVIA: 5,
    hanMuc: 50000000,
    chiTieu: 32000000,
    ngayBatDauThue: '2026-03-01'
  },
  {
    id: 'TKQC002',
    ten: 'TKQC_002',
    maKH: 'KH001',
    trangThai: 'active',
    soVIA: 4,
    hanMuc: 30000000,
    chiTieu: 28000000,
    ngayBatDauThue: '2026-03-01'
  },
  {
    id: 'TKQC003',
    ten: 'TKQC_003',
    maKH: 'KH002',
    trangThai: 'disabled',
    soVIA: 2,
    hanMuc: 20000000,
    chiTieu: 0,
    ngayBatDauThue: '2026-02-15'
  },
  {
    id: 'TKQC004',
    ten: 'TKQC_004',
    maKH: 'KH002',
    trangThai: 'active',
    soVIA: 3,
    hanMuc: 40000000,
    chiTieu: 15000000,
    ngayBatDauThue: '2026-03-10'
  },
  {
    id: 'TKQC005',
    ten: 'TKQC_005',
    maKH: 'KH003',
    trangThai: 'active',
    soVIA: 1,
    hanMuc: 25000000,
    chiTieu: 10000000,
    ngayBatDauThue: '2026-04-01'
  },
  {
    id: 'TKQC006',
    ten: 'TKQC_006',
    maKH: 'KH003',
    trangThai: 'active',
    soVIA: 6,
    hanMuc: 60000000,
    chiTieu: 45000000,
    ngayBatDauThue: '2026-04-01'
  },
  {
    id: 'TKQC007',
    ten: 'TKQC_007',
    maKH: 'KH004',
    trangThai: 'active',
    soVIA: 4,
    hanMuc: 35000000,
    chiTieu: 20000000,
    ngayBatDauThue: '2026-03-20'
  },
  {
    id: 'TKQC008',
    ten: 'TKQC_008',
    maKH: 'KH005',
    trangThai: 'active',
    soVIA: 2,
    hanMuc: 15000000,
    chiTieu: 8000000,
    ngayBatDauThue: '2026-04-10'
  },
  // TKQC trống — chưa gán cho KH nào (hiển thị trong phần "Gán thêm")
  {
    id: 'TKQC009',
    ten: 'TKQC_009',
    maKH: null,
    trangThai: 'active',
    soVIA: 3,
    hanMuc: 40000000,
    chiTieu: 0,
    ngayBatDauThue: null
  },
  {
    id: 'TKQC010',
    ten: 'TKQC_010',
    maKH: null,
    trangThai: 'active',
    soVIA: 4,
    hanMuc: 60000000,
    chiTieu: 0,
    ngayBatDauThue: null
  },
  {
    id: 'TKQC011',
    ten: 'TKQC_011',
    maKH: null,
    trangThai: 'active',
    soVIA: 2,
    hanMuc: 20000000,
    chiTieu: 0,
    ngayBatDauThue: null
  },
  {
    id: 'TKQC012',
    ten: 'TKQC_012',
    maKH: null,
    trangThai: 'disabled',
    soVIA: 1,
    hanMuc: 10000000,
    chiTieu: 0,
    ngayBatDauThue: null
  }
];

// Danh sách khách hàng
const KHACH_HANG = [
  {
    id: 'KH001',
    ten: 'Công ty ABC',
    nhanSuPhuTrach: 'nhansu@agency.com',
    soTKQC: 2,
    soFanpage: 5,
    trangThai: 'active'
  },
  {
    id: 'KH002',
    ten: 'Startup XYZ',
    nhanSuPhuTrach: 'nhansu@agency.com',
    soTKQC: 2,
    soFanpage: 2,
    trangThai: 'active'
  },
  {
    id: 'KH003',
    ten: 'Shop DEF',
    nhanSuPhuTrach: 'nhansu@agency.com',
    soTKQC: 2,
    soFanpage: 1,
    trangThai: 'active'
  },
  {
    id: 'KH004',
    ten: 'Agency GHI',
    nhanSuPhuTrach: 'nhansu@agency.com',
    soTKQC: 1,
    soFanpage: 2,
    trangThai: 'active'
  },
  {
    id: 'KH005',
    ten: 'Cty JKL',
    nhanSuPhuTrach: 'nhansu@agency.com',
    soTKQC: 1,
    soFanpage: 1,
    trangThai: 'active'
  }
];

// Danh sách Fanpage
const FANPAGE = [
  { id: 'FP001', ten: 'Page Công ty ABC',  maKH: 'KH001', maBM: 'BM001', soVIA: 5, trangThai: 'active',     followers: 12500, dongBoLanCuoi: '15 phút trước' },
  { id: 'FP002', ten: 'Page Shop ABC',     maKH: 'KH001', maBM: 'BM001', soVIA: 4, trangThai: 'active',     followers: 8300,  dongBoLanCuoi: '15 phút trước' },
  { id: 'FP003', ten: 'Page Startup XYZ',  maKH: 'KH002', maBM: 'BM002', soVIA: 3, trangThai: 'active',     followers: 5200,  dongBoLanCuoi: '15 phút trước' },
  { id: 'FP004', ten: 'Page XYZ Official', maKH: 'KH002', maBM: 'BM002', soVIA: 2, trangThai: 'restricted', followers: 3100,  dongBoLanCuoi: '1 giờ trước' },
  { id: 'FP005', ten: 'Page Shop DEF',     maKH: 'KH003', maBM: 'BM001', soVIA: 1, trangThai: 'active',     followers: 7800,  dongBoLanCuoi: '15 phút trước' },
  { id: 'FP006', ten: 'Page Agency GHI',   maKH: 'KH004', maBM: 'BM002', soVIA: 4, trangThai: 'active',     followers: 15000, dongBoLanCuoi: '15 phút trước' },
  { id: 'FP007', ten: 'Page GHI Brand',    maKH: 'KH004', maBM: 'BM003', soVIA: 3, trangThai: 'active',     followers: 9200,  dongBoLanCuoi: '15 phút trước' },
  { id: 'FP008', ten: 'Page Cty JKL',      maKH: 'KH005', maBM: 'BM003', soVIA: 2, trangThai: 'active',     followers: 4500,  dongBoLanCuoi: '15 phút trước' },
  { id: 'FP009', ten: 'Page JKL Store',    maKH: 'KH005', maBM: 'BM003', soVIA: 1, trangThai: 'active',     followers: 2800,  dongBoLanCuoi: '2 giờ trước' },
  { id: 'FP010', ten: 'Page ABC Marketing', maKH: 'KH001', maBM: 'BM001', soVIA: 4, trangThai: 'active',     followers: 18200, dongBoLanCuoi: '10 phút trước' },
  { id: 'FP011', ten: 'Page ABC Official',  maKH: 'KH001', maBM: 'BM002', soVIA: 3, trangThai: 'active',     followers: 9600,  dongBoLanCuoi: '10 phút trước' }
];

// Danh sách Business Manager (BM)
const BM = [
  { id: 'BM001', ten: 'BM Agency Chính', soVIA: 5, soTKQC: 4, soFanpage: 3, trangThai: 'active', ngayThem: '2026-03-15 10:00' },
  { id: 'BM002', ten: 'BM Agency Phụ',   soVIA: 3, soTKQC: 3, soFanpage: 3, trangThai: 'active', ngayThem: '2026-03-20 14:00' },
  { id: 'BM003', ten: 'BM Backup',       soVIA: 2, soTKQC: 1, soFanpage: 3, trangThai: 'active', ngayThem: '2026-04-01 09:30' }
];

// Danh sách Nhân sự
const NHAN_SU = [
  { id: 'NS001', ten: 'Trần Thị Nhân Sự', email: 'nhansu@agency.com', soKhachHang: 5, trangThai: 'active' }
];

// Danh sách cảnh báo hệ thống
const CANH_BAO = [
  {
    id: 'CB001',
    taiSan: 'TKQC_001',
    loai: 'Token hết hạn',
    mucDo: 'cao',
    thoiGian: '10 phút trước',
    trangThai: 'chua_xu_ly'
  },
  {
    id: 'CB002',
    taiSan: 'VIA_nguyen',
    loai: 'Tài khoản bị vô hiệu hóa',
    mucDo: 'cao',
    thoiGian: '1 giờ trước',
    trangThai: 'chua_xu_ly'
  },
  {
    id: 'CB003',
    taiSan: 'TKQC_005',
    loai: 'Thiếu VIA backup',
    mucDo: 'trung_binh',
    thoiGian: '3 giờ trước',
    trangThai: 'chua_xu_ly'
  },
  {
    id: 'CB004',
    taiSan: 'Page_abc',
    loai: 'Token sắp hết hạn',
    mucDo: 'thap',
    thoiGian: '5 giờ trước',
    trangThai: 'da_xu_ly'
  },
  {
    id: 'CB005',
    taiSan: 'BM_main',
    loai: 'Thiếu VIA backup',
    mucDo: 'trung_binh',
    thoiGian: '1 ngày trước',
    trangThai: 'da_xu_ly'
  }
];

// Nhật ký hoạt động (15 bản ghi, format datetime tuyệt đối)
const NHAT_KY = [
  { id: 'NK001', nguoi: 'Nguyễn Văn A',         loai: 'gan_tai_nguyen',  hanhDong: 'đã gán TKQC_001 cho Công ty ABC',                          thoiGian: '2026-05-10 09:20', doiTuong: 'TKQC_001' },
  { id: 'NK002', nguoi: 'System',                loai: 'canh_bao',        hanhDong: 'phát hiện token VIA_nguyen hết hạn',                       thoiGian: '2026-05-10 08:30', doiTuong: 'VIA_nguyen' },
  { id: 'NK003', nguoi: 'Trần Thị B',           loai: 'dang_nhap_via',   hanhDong: 'đã đăng nhập VIA mới vào hệ thống',                        thoiGian: '2026-05-10 07:45', doiTuong: 'VIA_moi' },
  { id: 'NK004', nguoi: 'Lê Văn C',             loai: 'xu_ly_canh_bao',  hanhDong: 'đã xử lý cảnh báo TKQC_001',                               thoiGian: '2026-05-10 07:00', doiTuong: 'TKQC_001' },
  { id: 'NK005', nguoi: 'System',                loai: 'dong_bo',         hanhDong: 'đã đồng bộ 5 tài sản mới',                                 thoiGian: '2026-05-10 06:00', doiTuong: 'System' },
  { id: 'NK006', nguoi: 'Nguyễn Minh Leader',   loai: 'gan_tai_nguyen',  hanhDong: 'đã gán Fanpage Shop DEF cho Shop DEF',                     thoiGian: '2026-05-09 17:30', doiTuong: 'FP005' },
  { id: 'NK007', nguoi: 'System',                loai: 'dong_bo',         hanhDong: 'đã đồng bộ định kỳ — phát hiện 1 cảnh báo mới',           thoiGian: '2026-05-09 16:00', doiTuong: 'System' },
  { id: 'NK008', nguoi: 'Nguyễn Minh Leader',   loai: 'thu_hoi',         hanhDong: 'đã thu hồi TKQC_003 khỏi Startup XYZ',                     thoiGian: '2026-05-09 15:00', doiTuong: 'TKQC_003' },
  { id: 'NK009', nguoi: 'System',                loai: 'canh_bao',        hanhDong: 'phát hiện TKQC_005 thiếu VIA backup',                      thoiGian: '2026-05-09 14:00', doiTuong: 'TKQC_005' },
  { id: 'NK010', nguoi: 'Trần Thị B',           loai: 'gan_tai_nguyen',  hanhDong: 'đã gán TKQC_004 cho Startup XYZ',                          thoiGian: '2026-05-09 13:00', doiTuong: 'TKQC_004' },
  { id: 'NK011', nguoi: 'System',                loai: 'dong_bo',         hanhDong: 'đã đồng bộ VIA_pham — 15 tài sản',                         thoiGian: '2026-05-09 12:00', doiTuong: 'VIA_pham' },
  { id: 'NK012', nguoi: 'Nguyễn Minh Leader',   loai: 'dang_nhap_via',   hanhDong: 'đã đăng nhập VIA_hoang vào hệ thống',                      thoiGian: '2026-05-09 11:00', doiTuong: 'VIA_hoang' },
  { id: 'NK013', nguoi: 'System',                loai: 'canh_bao',        hanhDong: 'phát hiện BM_main thiếu VIA backup',                       thoiGian: '2026-05-09 10:00', doiTuong: 'BM001' },
  { id: 'NK014', nguoi: 'Lê Văn C',             loai: 'xu_ly_canh_bao',  hanhDong: 'đã đánh dấu xử lý cảnh báo BM_main',                       thoiGian: '2026-05-09 09:30', doiTuong: 'BM001' },
  { id: 'NK015', nguoi: 'System',                loai: 'dong_bo',         hanhDong: 'đã đồng bộ định kỳ — tất cả tài sản bình thường',         thoiGian: '2026-05-09 06:00', doiTuong: 'System' }
];

// === Bảng liên kết many-to-many ===

// Liên kết VIA ↔ TKQC (1 TKQC có nhiều VIA cầm quyền, 1 VIA có thể cầm nhiều TKQC)
const VIA_TKQC = [
  { maVIA: 'VIA001', maTKQC: 'TKQC001' },
  { maVIA: 'VIA002', maTKQC: 'TKQC001' },
  { maVIA: 'VIA003', maTKQC: 'TKQC001' },
  { maVIA: 'VIA004', maTKQC: 'TKQC001' },
  { maVIA: 'VIA005', maTKQC: 'TKQC001' },
  { maVIA: 'VIA001', maTKQC: 'TKQC002' },
  { maVIA: 'VIA002', maTKQC: 'TKQC002' },
  { maVIA: 'VIA004', maTKQC: 'TKQC002' },
  { maVIA: 'VIA005', maTKQC: 'TKQC002' },
  { maVIA: 'VIA001', maTKQC: 'TKQC003' },
  { maVIA: 'VIA003', maTKQC: 'TKQC003' },
  { maVIA: 'VIA001', maTKQC: 'TKQC004' },
  { maVIA: 'VIA002', maTKQC: 'TKQC004' },
  { maVIA: 'VIA004', maTKQC: 'TKQC004' },
  { maVIA: 'VIA001', maTKQC: 'TKQC005' },
  { maVIA: 'VIA001', maTKQC: 'TKQC006' },
  { maVIA: 'VIA002', maTKQC: 'TKQC006' },
  { maVIA: 'VIA003', maTKQC: 'TKQC006' },
  { maVIA: 'VIA004', maTKQC: 'TKQC006' },
  { maVIA: 'VIA005', maTKQC: 'TKQC006' },
  { maVIA: 'VIA001', maTKQC: 'TKQC007' },
  { maVIA: 'VIA002', maTKQC: 'TKQC007' },
  { maVIA: 'VIA004', maTKQC: 'TKQC007' },
  { maVIA: 'VIA005', maTKQC: 'TKQC007' },
  { maVIA: 'VIA001', maTKQC: 'TKQC008' },
  { maVIA: 'VIA002', maTKQC: 'TKQC008' }
];

// Liên kết BM ↔ TKQC
const BM_TKQC = [
  { maBM: 'BM001', maTKQC: 'TKQC001' },
  { maBM: 'BM002', maTKQC: 'TKQC001' },
  { maBM: 'BM001', maTKQC: 'TKQC002' },
  { maBM: 'BM001', maTKQC: 'TKQC003' },
  { maBM: 'BM002', maTKQC: 'TKQC003' },
  { maBM: 'BM002', maTKQC: 'TKQC004' },
  { maBM: 'BM001', maTKQC: 'TKQC005' },
  { maBM: 'BM001', maTKQC: 'TKQC006' },
  { maBM: 'BM003', maTKQC: 'TKQC007' },
  { maBM: 'BM003', maTKQC: 'TKQC008' }
];

// Liên kết VIA ↔ Fanpage
const VIA_FANPAGE = [
  { maVIA: 'VIA001', maFP: 'FP001' },
  { maVIA: 'VIA002', maFP: 'FP001' },
  { maVIA: 'VIA003', maFP: 'FP001' },
  { maVIA: 'VIA004', maFP: 'FP001' },
  { maVIA: 'VIA005', maFP: 'FP001' },
  { maVIA: 'VIA001', maFP: 'FP002' },
  { maVIA: 'VIA002', maFP: 'FP002' },
  { maVIA: 'VIA004', maFP: 'FP002' },
  { maVIA: 'VIA005', maFP: 'FP002' },
  { maVIA: 'VIA001', maFP: 'FP003' },
  { maVIA: 'VIA002', maFP: 'FP003' },
  { maVIA: 'VIA004', maFP: 'FP003' },
  { maVIA: 'VIA003', maFP: 'FP004' },
  { maVIA: 'VIA004', maFP: 'FP004' },
  { maVIA: 'VIA005', maFP: 'FP005' },
  { maVIA: 'VIA001', maFP: 'FP006' },
  { maVIA: 'VIA002', maFP: 'FP006' },
  { maVIA: 'VIA004', maFP: 'FP006' },
  { maVIA: 'VIA005', maFP: 'FP006' },
  { maVIA: 'VIA001', maFP: 'FP007' },
  { maVIA: 'VIA002', maFP: 'FP007' },
  { maVIA: 'VIA004', maFP: 'FP007' },
  { maVIA: 'VIA003', maFP: 'FP008' },
  { maVIA: 'VIA004', maFP: 'FP008' },
  { maVIA: 'VIA005', maFP: 'FP009' },
  { maVIA: 'VIA001', maFP: 'FP010' },
  { maVIA: 'VIA002', maFP: 'FP010' },
  { maVIA: 'VIA004', maFP: 'FP010' },
  { maVIA: 'VIA005', maFP: 'FP010' },
  { maVIA: 'VIA001', maFP: 'FP011' },
  { maVIA: 'VIA002', maFP: 'FP011' },
  { maVIA: 'VIA004', maFP: 'FP011' }
];

// Liên kết BM ↔ Fanpage
const BM_FANPAGE = [
  { maBM: 'BM001', maFP: 'FP001' },
  { maBM: 'BM002', maFP: 'FP001' },
  { maBM: 'BM001', maFP: 'FP002' },
  { maBM: 'BM002', maFP: 'FP003' },
  { maBM: 'BM002', maFP: 'FP004' },
  { maBM: 'BM001', maFP: 'FP005' },
  { maBM: 'BM003', maFP: 'FP005' },
  { maBM: 'BM002', maFP: 'FP006' },
  { maBM: 'BM003', maFP: 'FP007' },
  { maBM: 'BM003', maFP: 'FP008' },
  { maBM: 'BM003', maFP: 'FP009' },
  { maBM: 'BM001', maFP: 'FP010' },
  { maBM: 'BM002', maFP: 'FP011' }
];

// Lịch sử đồng bộ Fanpage — chỉ 2 ketQua: success / error
const LICH_SU_DONG_BO_FANPAGE = [
  { id: 'LS001', maFanpage: 'FP001', thoiGian: '2026-05-10 09:15:00', ketQua: 'success', ghiChu: 'Đồng bộ thành công' },
  { id: 'LS002', maFanpage: 'FP001', thoiGian: '2026-05-10 08:00:00', ketQua: 'success', ghiChu: 'Đồng bộ thành công' },
  { id: 'LS003', maFanpage: 'FP001', thoiGian: '2026-05-09 15:00:00', ketQua: 'success', ghiChu: 'Đồng bộ thành công' },
  { id: 'LS004', maFanpage: 'FP001', thoiGian: '2026-05-09 09:00:00', ketQua: 'error',   ghiChu: 'Lỗi kết nối Graph API' },

  { id: 'LS005', maFanpage: 'FP002', thoiGian: '2026-05-10 09:15:00', ketQua: 'success', ghiChu: 'Đồng bộ thành công' },
  { id: 'LS006', maFanpage: 'FP002', thoiGian: '2026-05-10 08:00:00', ketQua: 'success', ghiChu: 'Đồng bộ thành công' },

  { id: 'LS007', maFanpage: 'FP003', thoiGian: '2026-05-10 09:15:00', ketQua: 'success', ghiChu: 'Đồng bộ thành công' },

  { id: 'LS008', maFanpage: 'FP004', thoiGian: '2026-05-10 08:00:00', ketQua: 'error',   ghiChu: 'Mất quyền truy cập — đồng bộ thất bại' }
];

// Lịch sử đồng bộ TKQC — chỉ 2 ketQua: success / error
const LICH_SU_DONG_BO_TKQC = [
  { id: 'LT001', maTKQC: 'TKQC001', thoiGian: '2026-05-10 09:15:00', ketQua: 'success', ghiChu: 'Đồng bộ thành công' },
  { id: 'LT002', maTKQC: 'TKQC001', thoiGian: '2026-05-10 08:00:00', ketQua: 'success', ghiChu: 'Đồng bộ thành công' },
  { id: 'LT003', maTKQC: 'TKQC001', thoiGian: '2026-05-09 21:00:00', ketQua: 'error',   ghiChu: 'Lỗi kết nối Graph API' },
  { id: 'LT004', maTKQC: 'TKQC001', thoiGian: '2026-05-09 15:00:00', ketQua: 'success', ghiChu: 'Đồng bộ thành công' },
  { id: 'LT005', maTKQC: 'TKQC002', thoiGian: '2026-05-10 09:15:00', ketQua: 'success', ghiChu: 'Đồng bộ thành công' },
  { id: 'LT006', maTKQC: 'TKQC002', thoiGian: '2026-05-09 21:00:00', ketQua: 'error',   ghiChu: 'Token hết hạn — không thể đồng bộ' },
  { id: 'LT007', maTKQC: 'TKQC003', thoiGian: '2026-05-10 09:15:00', ketQua: 'error',   ghiChu: 'Mất quyền truy cập — đồng bộ thất bại' },
  { id: 'LT008', maTKQC: 'TKQC003', thoiGian: '2026-05-09 15:00:00', ketQua: 'success', ghiChu: 'Đồng bộ thành công' },
  { id: 'LT009', maTKQC: 'TKQC004', thoiGian: '2026-05-10 09:15:00', ketQua: 'success', ghiChu: 'Đồng bộ thành công' },
  { id: 'LT010', maTKQC: 'TKQC005', thoiGian: '2026-05-10 09:15:00', ketQua: 'success', ghiChu: 'Đồng bộ thành công' }
];
