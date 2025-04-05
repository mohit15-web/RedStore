{/* <script> */}
function menutoggle() {
  const MenuItems = document.getElementById("MenuItems");
  if (MenuItems.style.maxHeight === "0px" || !MenuItems.style.maxHeight) {
    MenuItems.style.maxHeight = "400px";
    MenuItems.classList.add("show");
  } else {
    MenuItems.style.maxHeight = "0px";
    MenuItems.classList.remove("show");
  }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const MenuItems = document.getElementById("MenuItems");
  const menuIcon = document.querySelector(".menu-icon");
  
  // If menu is open and click is outside menu and not on menu icon
  if (MenuItems.classList.contains("show") && 
      !MenuItems.contains(event.target) && 
      event.target !== menuIcon) {
    MenuItems.style.maxHeight = "0px";
    MenuItems.classList.remove("show");
  }
});
// </script>