// Admin Panel Popup
const adminBtn = document.getElementById('adminBtn');
const adminPopup = document.getElementById('adminPopup');
const closeBtn = document.querySelector('.close');

adminBtn.addEventListener('click', () => {
    adminPopup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    adminPopup.style.display = 'none';
});

// Admin Login Form
const adminForm = document.getElementById('adminForm');
adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('userAdmin').value;
    const password = document.getElementById('passwordAdmin').value;

    if (username === 'admin' && password === 'generichcuy123') {
        window.location.href = 'admin.html';
    } else {
        alert('Invalid credentials');
    }
});
