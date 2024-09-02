const toggleSidebar = document.getElementById('toggleSidebar');
const cutSidebar = document.getElementById('cutSidebar');
const sideBar = document.getElementById('SideBar');

toggleSidebar.addEventListener('click', () => {
    sideBar.classList.toggle('open');
});

cutSidebar.addEventListener('click', () => {
    sideBar.classList.remove('open');
});