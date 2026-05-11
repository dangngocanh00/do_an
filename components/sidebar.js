// sidebar.js — Render sidebar theo role + toggle collapse/expand + Lucide icons

// === Menu cho từng role (icon là tên Lucide) ===
const SIDEBAR_MENUS = {
  leader: [
    { label: 'Dashboard',        href: 'dashboard.html', icon: 'layout-dashboard' },
    { label: 'Quản lý VIA',     href: 'via.html',        icon: 'user-circle' },
    { label: 'Quản lý TKQC',    href: 'tkqc.html',       icon: 'credit-card' },
    { label: 'Quản lý Fanpage', href: 'fanpage.html',    icon: 'flag' },
    { label: 'Quản lý BM',      href: 'bm.html',         icon: 'building-2' },
    { label: 'Quản lý Khách hàng', href: 'khachhang.html',  icon: 'briefcase' },
    { label: 'Nhật ký',         href: 'nhatky.html',     icon: 'scroll-text' },
    { label: 'Cài đặt',         href: 'caidat.html',     icon: 'settings' }
  ],
  nhansu: [
    { label: 'Dashboard',           href: 'dashboard.html', icon: 'layout-dashboard' },
    { label: 'Quản lý TKQC',       href: 'tkqc.html',       icon: 'credit-card' },
    { label: 'Quản lý Fanpage',    href: 'fanpage.html',    icon: 'flag' },
    { label: 'Quản lý khách hàng', href: 'khachhang.html',  icon: 'briefcase' }
  ],
  khachhang: [
    { label: 'Dashboard',          href: 'dashboard.html', icon: 'layout-dashboard' }
  ]
};

const ROLE_LABELS = {
  leader: 'Leader',
  nhansu: 'Nhân sự',
  khachhang: 'Khách hàng'
};

// === Quản lý trạng thái thu/mở sidebar trong localStorage ===
const SIDEBAR_STORAGE_KEY = 'tnmanager_sidebar';
const SIDEBAR_COLLAPSED = 'collapsed';
const SIDEBAR_EXPANDED = 'expanded';

function getSidebarState() {
  return localStorage.getItem(SIDEBAR_STORAGE_KEY) === SIDEBAR_COLLAPSED
    ? SIDEBAR_COLLAPSED
    : SIDEBAR_EXPANDED;
}

function setSidebarState(state) {
  localStorage.setItem(SIDEBAR_STORAGE_KEY, state);
}

/**
 * Render sidebar theo role và inject vào element #sidebar.
 * Đồng thời cập nhật offset của <main> + <header> theo state hiện tại.
 */
function renderSidebar(role) {
  const menu = SIDEBAR_MENUS[role] || [];
  const user = (typeof getCurrentUser === 'function') ? getCurrentUser() : null;
  const currentFile = window.location.pathname.split('/').pop() || 'dashboard.html';

  const isCollapsed = getSidebarState() === SIDEBAR_COLLAPSED;

  // Class theo state — render lần đầu khớp localStorage để tránh nháy
  const widthCls   = isCollapsed ? 'w-16' : 'w-60';
  const padCls     = isCollapsed ? 'p-2' : 'p-4';
  const gapCls     = isCollapsed ? 'gap-0' : 'gap-3';
  const itemPadCls = isCollapsed ? 'px-0' : 'px-3';
  const alignCls   = isCollapsed ? 'justify-center' : '';
  const labelCls   = isCollapsed
    ? 'opacity-0 max-w-0 overflow-hidden'
    : 'opacity-100 max-w-[200px]';

  // === Menu items ===
  const menuHTML = menu.map((item) => {
    const isActive = item.href === currentFile;
    const colorCls = isActive
      ? 'bg-[#21A691] text-white'
      : 'text-[#B4B4B2] hover:bg-[#21A691]/15 hover:text-white';
    return `
      <a href="${item.href}"
         title="${item.label}"
         data-sidebar-item data-sidebar-pad
         class="flex items-center ${gapCls} ${itemPadCls} py-2.5 rounded-lg overflow-hidden transition-all duration-300 ${colorCls} ${alignCls}">
        <i data-lucide="${item.icon}" class="w-5 h-5 flex-shrink-0" stroke-width="1.5"></i>
        <span data-sidebar-label class="text-sm font-medium whitespace-nowrap transition-all duration-300 ${labelCls}">${item.label}</span>
      </a>
    `;
  }).join('');

  // === Brand block: logo TN + tên hệ thống ===
  const brandHTML = `
    <div data-sidebar-item class="flex items-center ${gapCls} px-2 py-3 mb-4 overflow-hidden ${alignCls}">
      <div class="w-9 h-9 rounded-lg bg-[#21A691] flex items-center justify-center font-bold text-white flex-shrink-0">TN</div>
      <div data-sidebar-label class="flex-1 min-w-0 transition-all duration-300 ${labelCls}">
        <div class="text-base font-semibold leading-tight text-white whitespace-nowrap">TN Manager</div>
        <div class="text-xs text-slate-300 whitespace-nowrap">Tài nguyên số</div>
      </div>
    </div>
  `;

  // === User block + nút Đăng xuất ===
  const userBlock = user ? `
    <div class="mt-auto pt-4 border-t border-white/10">
      <div data-sidebar-item class="flex items-center ${gapCls} px-2 py-2 overflow-hidden ${alignCls}">
        <div class="w-9 h-9 rounded-full bg-[#21A691] flex items-center justify-center text-white font-semibold flex-shrink-0">
          ${user.name.charAt(0)}
        </div>
        <div data-sidebar-label class="flex-1 min-w-0 transition-all duration-300 ${labelCls}">
          <div class="text-sm text-white font-medium truncate">${user.name}</div>
          <div class="text-xs text-slate-300 truncate">${ROLE_LABELS[user.role] || user.role}</div>
        </div>
      </div>
      <button onclick="logout()" type="button"
        title="Đăng xuất"
        data-sidebar-item data-sidebar-pad
        class="mt-2 w-full flex items-center ${gapCls} ${itemPadCls} py-2 text-sm text-[#B4B4B2] hover:text-white hover:bg-[#21A691]/15 rounded-lg overflow-hidden transition-all duration-300 ${alignCls}">
        <i data-lucide="log-out" class="w-5 h-5 flex-shrink-0" stroke-width="1.5"></i>
        <span data-sidebar-label class="whitespace-nowrap transition-all duration-300 ${labelCls}">Đăng xuất</span>
      </button>
    </div>
  ` : '';

  // === Toggle button — góc trên phải sidebar (tràn ra ngoài 12px) ===
  const toggleBtn = `
    <button id="sidebar-toggle" onclick="toggleSidebar()" type="button"
      class="absolute -right-3 top-6 bg-[#21A691] hover:bg-[#1A8A78] rounded-full p-1 shadow-md transition z-50"
      title="${isCollapsed ? 'Mở rộng' : 'Thu gọn'}">
      <span id="sidebar-toggle-icon"><i data-lucide="${isCollapsed ? 'chevron-right' : 'chevron-left'}" class="w-4 h-4 text-white" stroke-width="2"></i></span>
    </button>
  `;

  // Aside KHÔNG có overflow-hidden để nút toggle ở -right-3 không bị cắt.
  // Mỗi data-sidebar-item bên trong tự overflow-hidden để clip label khi thu gọn.
  const sidebarHTML = `
    <aside id="sidebar-aside" class="bg-[#27403E] ${widthCls} ${padCls} h-screen fixed top-0 left-0 flex flex-col text-white z-30 transition-all duration-300">
      ${toggleBtn}
      ${brandHTML}
      <nav class="flex flex-col gap-1 flex-1 overflow-y-auto overflow-x-hidden -mx-1 px-1">
        ${menuHTML}
      </nav>
      ${userBlock}
    </aside>
  `;

  const container = document.getElementById('sidebar');
  if (container) {
    container.innerHTML = sidebarHTML;
  }

  // Đồng bộ offset của main + header theo state
  applySidebarOffset(isCollapsed);

  // Render Lucide icons sau khi inject HTML xong
  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

/**
 * Cập nhật margin-left của <main> + left của <header> theo trạng thái sidebar.
 * Pages không có header (skeleton) sẽ tự bỏ qua phần header.
 */
function applySidebarOffset(isCollapsed) {
  const main = document.querySelector('main');
  if (main) {
    main.classList.remove('ml-60', 'ml-16');
    main.classList.add(isCollapsed ? 'ml-16' : 'ml-60');
    main.classList.add('transition-all', 'duration-300');
  }
  const header = document.querySelector('header.fixed');
  if (header) {
    header.classList.remove('left-60', 'left-16');
    header.classList.add(isCollapsed ? 'left-16' : 'left-60');
    header.classList.add('transition-all', 'duration-300');
  }
}

/**
 * Toggle thu/mở — lưu state, áp dụng class mới (không re-render).
 */
function toggleSidebar() {
  const newState = getSidebarState() === SIDEBAR_COLLAPSED ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED;
  setSidebarState(newState);
  applySidebarUI(newState === SIDEBAR_COLLAPSED);
}

/**
 * Áp dụng UI theo trạng thái mới — chỉ toggle classes để giữ smooth transition.
 */
function applySidebarUI(isCollapsed) {
  const aside = document.getElementById('sidebar-aside');
  if (!aside) return;

  // Aside: width + padding
  aside.classList.toggle('w-60', !isCollapsed);
  aside.classList.toggle('w-16', isCollapsed);
  aside.classList.toggle('p-4', !isCollapsed);
  aside.classList.toggle('p-2', isCollapsed);

  // Tất cả [data-sidebar-item]: gap + alignment
  aside.querySelectorAll('[data-sidebar-item]').forEach((el) => {
    el.classList.toggle('gap-3', !isCollapsed);
    el.classList.toggle('gap-0', isCollapsed);
    el.classList.toggle('justify-center', isCollapsed);
  });

  // Riêng menu item + logout (có data-sidebar-pad): padding ngang
  aside.querySelectorAll('[data-sidebar-pad]').forEach((el) => {
    el.classList.toggle('px-3', !isCollapsed);
    el.classList.toggle('px-0', isCollapsed);
  });

  // Labels: ẩn/hiện
  aside.querySelectorAll('[data-sidebar-label]').forEach((el) => {
    el.classList.toggle('opacity-0', isCollapsed);
    el.classList.toggle('opacity-100', !isCollapsed);
    el.classList.toggle('max-w-0', isCollapsed);
    el.classList.toggle('max-w-[200px]', !isCollapsed);
    el.classList.toggle('overflow-hidden', isCollapsed);
  });

  // Đổi icon chevron của toggle button + cập nhật title
  const toggleIcon = document.getElementById('sidebar-toggle-icon');
  if (toggleIcon) {
    toggleIcon.innerHTML = `<i data-lucide="${isCollapsed ? 'chevron-right' : 'chevron-left'}" class="w-4 h-4 text-white" stroke-width="2"></i>`;
  }
  const toggleBtn = document.getElementById('sidebar-toggle');
  if (toggleBtn) {
    toggleBtn.title = isCollapsed ? 'Mở rộng' : 'Thu gọn';
  }

  // Re-render Lucide cho chevron mới
  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }

  // Cập nhật offset main + header
  applySidebarOffset(isCollapsed);
}
