document.addEventListener("DOMContentLoaded", function (e) {
   // menu
   const menuIcon = document.querySelector(".topbar__menu--icon");
   const menu = document.querySelector(".menu");
   menuIcon.onclick = (e) => {
      menu.classList.toggle("active__menu");
   };
   // close menu
   const iconCloseMenu = document.querySelector(".menu__icon--close");
   iconCloseMenu.onclick = (e) => {
      menu.classList.remove("active__menu");
   };
   document.onclick = (e) => {
      if (e.target.classList.contains("menu")) {
         e.target.classList.remove("active__menu");
      }
   };
   // search
   const iconSearch = document.querySelector(".topbar__search--icon");
   const formSearch = document.querySelector(".form-search");
   iconSearch.onclick = (e) => {
      let height = formSearch.scrollHeight;
      formSearch.style.height = `${height}px`;
      formSearch.classList.toggle("active__height");
      if (!formSearch.classList.contains("active__height")) {
         formSearch.style.height = "0px";
      }
   };
});
