/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".topnav a").forEach(link => {
      // 🔹 remove previous active state
      link.classList.remove("active");

      // 🔹 add active to current page
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });