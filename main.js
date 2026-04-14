(() => {
  // <stdin>
  var menuItems = document.querySelectorAll("#sidebar-menu li.isParent > a");
  var isTouchDevice = "ontouchstart" in window;
  function findParent(current, expected) {
    while (current !== expected) {
      current = current.parentNode;
    }
    return current;
  }
  function showExpandIcon(icon) {
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
  }
  function showCollapseIcon(icon) {
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-up");
  }
  menuItems.forEach((e) => {
    const icon = e.querySelector("i.fa");
    if (e.parentElement.classList.contains("active") || e.parentElement.classList.contains("parent")) {
      showCollapseIcon(icon);
    } else {
      showExpandIcon(icon);
    }
    e.addEventListener("click", (event) => {
      if (event.target.classList.contains("fa")) {
        event.preventDefault();
        $(e.parentElement.querySelector(":scope > ul")).slideToggle();
        if (e.parentElement.classList.contains("parent") && !e.parentElement.classList.contains("active")) {
          e.parentElement.classList.remove("parent");
          showExpandIcon(icon);
        } else {
          if (e.parentElement.classList.contains("parent")) {
            e.parentElement.classList.toggle("parent");
          }
          e.parentElement.classList.toggle("active");
          e.parentElement.classList.toggle("visited");
          if (e.parentElement.classList.contains("active")) {
            showCollapseIcon(icon);
          } else {
            showExpandIcon(icon);
          }
        }
      }
    });
  });
  if (isTouchDevice) {
    document.querySelectorAll(".version-selector").forEach((el) => {
      el.addEventListener("click", (e) => {
        const target = findParent(e.target, el);
        target.classList.toggle("hover");
      });
    });
  }
})();
