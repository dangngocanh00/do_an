// pagination.js — Helper dùng chung cho tất cả trang có bảng/card grid

/**
 * Cắt mảng theo trang (1-based).
 * Trả về thông tin pagination: items của trang, total, totalPages, from, to.
 */
function paginate(data, page, itemsPerPage) {
  const total = data.length;
  const totalPages = Math.max(1, Math.ceil(total / itemsPerPage));
  const safePage = Math.min(Math.max(1, page || 1), totalPages);
  const start = (safePage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return {
    items: data.slice(start, end),
    total,
    totalPages,
    currentPage: safePage,
    from: total === 0 ? 0 : start + 1,
    to: Math.min(end, total)
  };
}

/**
 * Render UI pagination vào element có id = containerId.
 * - Hiện text "Hiển thị X-Y trong N kết quả"
 * - Hiện nhóm nút trang khi totalPages > 1 (← 1 2 3 →, kèm "..." cho nhiều trang)
 * - Click số trang / prev / next → gọi onPageChange(newPage)
 */
function renderPagination(containerId, info, onPageChange) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const { total, totalPages, currentPage, from, to } = info;

  if (total === 0) { container.innerHTML = ''; return; }

  // Tính danh sách số trang hiển thị, tối đa 5 số + "..." khi nhiều trang
  const pages = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push('...');
    const startP = Math.max(2, currentPage - 1);
    const endP = Math.min(totalPages - 1, currentPage + 1);
    for (let i = startP; i <= endP; i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
  }

  const baseCls = 'w-8 h-8 flex items-center justify-center text-sm rounded-lg transition';
  const pageBtnsHTML = pages.map((p) => {
    if (p === '...') return `<span class="${baseCls} text-slate-400">…</span>`;
    const active = p === currentPage;
    const cls = active
      ? `${baseCls} bg-[#21A691] text-white font-medium`
      : `${baseCls} text-slate-700 hover:bg-slate-100`;
    return `<button type="button" class="${cls}" data-page-num="${p}">${p}</button>`;
  }).join('');

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;
  const navCls = (disabled) =>
    `${baseCls} text-slate-700 ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-100'}`;

  // Chỉ hiện nhóm nút khi có > 1 trang; vẫn luôn hiện text count
  const buttonsHTML = totalPages > 1 ? `
    <div class="flex items-center gap-1">
      <button type="button" data-page-prev class="${navCls(prevDisabled)}" ${prevDisabled ? 'disabled' : ''}>←</button>
      ${pageBtnsHTML}
      <button type="button" data-page-next class="${navCls(nextDisabled)}" ${nextDisabled ? 'disabled' : ''}>→</button>
    </div>
  ` : '';

  container.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-t border-slate-100">
      <div class="text-sm text-slate-500">
        Hiển thị <span class="font-medium text-[#060D10]">${from}-${to}</span> trong
        <span class="font-medium text-[#060D10]">${total}</span> kết quả
      </div>
      ${buttonsHTML}
    </div>
  `;

  // Bind handlers
  if (typeof onPageChange === 'function') {
    container.querySelectorAll('[data-page-num]').forEach((btn) => {
      btn.addEventListener('click', () => onPageChange(parseInt(btn.dataset.pageNum, 10)));
    });
    const prevBtn = container.querySelector('[data-page-prev]');
    if (prevBtn && !prevDisabled) prevBtn.addEventListener('click', () => onPageChange(currentPage - 1));
    const nextBtn = container.querySelector('[data-page-next]');
    if (nextBtn && !nextDisabled) nextBtn.addEventListener('click', () => onPageChange(currentPage + 1));
  }
}
