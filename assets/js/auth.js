// auth.js — Xử lý đăng nhập, role và session

// Danh sách tài khoản demo (hardcode)
const DEMO_USERS = [
  {
    email: 'leader@agency.com',
    password: 'password123',
    role: 'leader',
    name: 'Nguyễn Minh Leader'
  },
  {
    email: 'nhansu@agency.com',
    password: 'password123',
    role: 'nhansu',
    name: 'Trần Thị Nhân Sự'
  },
  {
    email: 'kh@agency.com',
    password: 'password123',
    role: 'khachhang',
    name: 'Công ty ABC'
  }
];

// Bảng đường dẫn dashboard theo role (đường dẫn tuyệt đối từ root project)
const ROLE_REDIRECT = {
  leader: 'pages/leader/dashboard.html',
  nhansu: 'pages/nhansu/dashboard.html',
  khachhang: 'pages/khachhang/dashboard.html'
};

const STORAGE_KEY = 'tnmanager_user';

/**
 * Đăng nhập — kiểm tra tài khoản trong danh sách demo
 * Trả về { success, message, redirect }
 */
function login(email, password) {
  const user = DEMO_USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return {
      success: false,
      message: 'Email hoặc mật khẩu không đúng. Vui lòng thử lại.'
    };
  }

  // Lưu session vào localStorage (không lưu password)
  const sessionData = {
    email: user.email,
    role: user.role,
    name: user.name
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionData));

  return {
    success: true,
    redirect: ROLE_REDIRECT[user.role]
  };
}

/**
 * Đăng xuất — xóa session và redirect về trang login
 */
function logout() {
  localStorage.removeItem(STORAGE_KEY);
  // Tìm đường dẫn về index.html dựa theo cấp thư mục hiện tại
  const path = window.location.pathname;
  if (path.includes('/pages/')) {
    window.location.href = '../../index.html';
  } else {
    window.location.href = 'index.html';
  }
}

/**
 * Lấy user hiện tại từ localStorage
 * Trả về object hoặc null
 */
function getCurrentUser() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

/**
 * Kiểm tra quyền truy cập trang — gọi ở đầu mỗi page
 * @param {string} requiredRole - role được phép vào page hiện tại
 */
function checkAuth(requiredRole) {
  const user = getCurrentUser();
  // Đường dẫn tới index.html từ pages/<role>/<file>.html
  const loginUrl = '../../index.html';

  if (!user) {
    window.location.href = loginUrl;
    return;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Sai role → đẩy về dashboard đúng của họ
    window.location.href = '../' + user.role + '/dashboard.html';
  }
}
