// Fungsi untuk menampilkan tab utama
function showMainTab(tabName) {
  document.querySelectorAll('.main-tab').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  document.querySelector(`#${tabName}`).style.display = 'block';
  document.querySelector(`button[onclick="showMainTab('${tabName}')"]`).classList.add('active');

  // reset subtab jika ada
  if (tabName === 'kayu') {
    showSubTab('jati');
  }
}

// Fungsi untuk menampilkan sub-tab
function showSubTab(subName) {
  document.querySelectorAll('.sub-tab').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.sub-btn').forEach(btn => btn.classList.remove('active'));

  document.querySelector(`#${subName}`).style.display = 'block';
  document.querySelector(`button[onclick="showSubTab('${subName}')"]`).classList.add('active');
}
