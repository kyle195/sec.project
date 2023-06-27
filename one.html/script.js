// JavaScript code for functionality

// Example: Display an alert when the sidebar item is clicked
const sidebarItems = document.querySelectorAll('.sidebar li');

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    alert(`You clicked: ${item.innerText}`);
  });
});
