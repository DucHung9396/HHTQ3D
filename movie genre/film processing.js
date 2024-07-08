// Tạo hàm BỎ DẤU cho "movie title"
function unmarkedHandling(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f/]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

// Them thẻ "a" và gán link cho từng phim
var listImg = document.querySelectorAll(".moicapnhat .title-img");
listImg.forEach((item) => {
  var createA = document.createElement("a");
  item.insertBefore(createA, item.firstChild);
  var div = item.querySelectorAll("div");
  div.forEach((div) => {
    createA.appendChild(div);
  });
  var o = item.querySelector(".movieTitle").textContent;
  var i = o.split(" ");
  var u = i.join("-").trim();
  var t = u.toLowerCase();
  var d = unmarkedHandling(t);
  var p = item.querySelector("a");
  p.href = "https://hoathinh3d.vip/" + d;
});

/* Thêm thuộc tính title (Attribute) vào thẻ img */
window.onload = function () {
  var titleImage = document.querySelectorAll(".title-img");
  titleImage.forEach((div) => {
    var titleElement = div.querySelector(".movieTitle");
    div.title = titleElement.innerText;
  });
};

// Set class "activeButton" chuyển màu cho button

function setActiveButton(number) {
  var button = document.querySelectorAll(".pagination button");
  button.forEach((item) => {
    item.classList.remove("activeButton");
  });
  var selectedButton = document.querySelector(
    ".pagination .button:nth-child(" + number + ") button"
  );
  selectedButton.classList.add("activeButton");
}

// Tạo phân trang
// var pageTotal = 60;
var numberOfPageElement = 60;

function showPage(page) {
  var numbers = document.querySelectorAll(".moicapnhat div");

  var startIndex = (page - 1) * numberOfPageElement;
  var endIndex = startIndex + numberOfPageElement;
  for (var i = 0; i < numbers.length; i++) {
    if (i >= startIndex && i < endIndex) {
      numbers[i].style.display = "block";
    } else {
      numbers[i].style.display = "none";
    }
  }
}
showPage(1);
// Tạo nút pagination (phân trang)
function pagination() {
  var numbers = document.querySelector(".moicapnhat").querySelectorAll("div");
  var pagination = document.querySelector(".pagination");
  var paginationPerPage = 4;
  var totalPagination = Math.ceil(numbers.length / numberOfPageElement);
  for (var i = 1; i <= totalPagination; i++) {
    var createButton = document.createElement("button");
    createButton.textContent = i;
    pagination.appendChild(createButton);
  }
  var buttonOfPagination = document.querySelector(".pagination button");
  buttonOfPagination.classList.add("activeButton");
}
pagination();
// click phân trang
var paginationButton = document.querySelectorAll(".pagination button");
paginationButton.forEach((item) => {
  item.addEventListener("click", () => {
    showPage(item.textContent);
  });
});
/* 3>> Tạo màu sác cho nút button-phân trang */
var clickTheButton = document.querySelectorAll(".pagination button");
clickTheButton.forEach((button) => {
  button.addEventListener("click", function (item) {
    clickTheButton.forEach((remove) => {
      remove.classList.remove("activeButton");
    });
    var selectButton = document.querySelector(
      ".pagination button:nth-of-type(" + item.target.textContent + ")"
    );
    selectButton.classList.add("activeButton");
  });
});
// Tạo event click cho "mũi tên" trong class ".pagination" để chuyển tiếp "pagination button"
// event click for "right arrow"
var createElementI = document.createElement("i");
var createElementI2 = document.createElement("i");
createElementI.classList.add("bx-chevron-left");
createElementI.classList.add("bx");
createElementI2.classList.add("bx-chevron-right");
createElementI2.classList.add("bx");
var pagination = document.querySelector(".pagination");
pagination.insertAdjacentElement("afterbegin", createElementI);
pagination.insertAdjacentElement("afterbegin", createElementI2);
var rightArrow = document.querySelector(".pagination .bx-chevron-right");
var leftArrow = document.querySelector(".pagination .bx-chevron-left");
var n = 1;
rightArrow.addEventListener("click", () => {
  leftArrow.style.opacity = "1";
  n++;
  var paginationButtonLength = document.querySelectorAll(".pagination button");
  if (n >= Math.ceil(paginationButtonLength.length / 4)) {
    rightArrow.style.opacity = "0";
    n = Math.ceil(paginationButtonLength.length / 4);
  }
  totalPagination(n);
});
// event click "left arrow"
leftArrow.addEventListener("click", () => {
  n--;
  var paginationButtonLength = document.querySelectorAll(".pagination button");
  if (n <= 1) {
    leftArrow.style.opacity = "0";
    n = 1;
  }
  rightArrow.style.opacity = "1";
  totalPagination(n);
});

// Tạo tổng "pagination button (Nút phân trang)" trong 1 page
function totalPagination(current) {
  var total = 4;
  var start = (current - 1) * total;
  var end = start + total;
  var paginationButtonLength = document.querySelectorAll(".pagination button");
  for (var i = 0; i < paginationButtonLength.length; i++) {
    if (i >= start && i < end) {
      paginationButton[i].style.display = "block";
    } else {
      paginationButton[i].style.display = "none";
    }
    if (i > 4) {
      rightArrow.style.opacity = "1";
    } else {
      rightArrow.style.opacity = "0";
    }
  }
}
totalPagination(1);
// Tạo event "scroll" cho nút cuộn trang
var scrollThePage = document.querySelector(".crollPage");
window.addEventListener("scroll", function () {
  if (window.scrollY > 255) {
    scrollThePage.style.display = "block";
  } else {
    scrollThePage.style.display = "none";
  }
});

scrollThePage.addEventListener("click", () => {
  var flag = document.querySelector("html");
  var a = flag.offsetTop;
  window.scrollTo({ top: a, behavior: "smooth" });
  // document.documentElement.scrollTop -= 10 // cách document.documentElement.scrollTop phải có setInterval
});

// Bỏ đuôi ".html" cho trang web
// if (location.href.endsWith(".html")) {
//   var newUrl = location.href.slice(0, -5);
//   history.replaceState(null, null, newUrl);
// }

// 12>> set kết quả tìm kiếm cho input "search" kết quả phim
// Thêm 2 thẻ div để làm ô "Tìm Kiếm" phim
var createAllMovies = document.createElement("div");
createAllMovies.classList.add("all-movies");
var createHienThi = document.createElement("div");
createHienThi.classList.add("hienthi");
var getElementNodeHeader = document.querySelector(".header");
document
  .querySelector("body")
  .insertBefore(createAllMovies, getElementNodeHeader);
document
  .querySelector("body")
  .insertBefore(createHienThi, getElementNodeHeader);
//thêm thẻ div "notification" trước thẻ thẻ input "Tìm kiếm"
var createNotification = document.createElement("div");
createNotification.classList.add("notification");
createNotification.innerHTML = "Không tìm thấy kết quả";
var input = document.querySelector(".form_search input");
input.autocomplete = "off"; // Thêm thuộc tính "autocomplete(ẩn gợi ý tìm kiếm)" thẻ "input"
input.insertAdjacentElement("afterend", createNotification); // thêm thẻ div ".notification" trước thẻ "input"
var allMovies = document.querySelector(".all-movies");
var lishMoicapnhat = document.querySelectorAll(".moicapnhat .title-img");
var hienthi = document.querySelector(".hienthi");
lishMoicapnhat.forEach((item) => {
  var hien = allMovies.appendChild(item.cloneNode(true));
  hien.style.display = "block";
});
var allMovies12 = document.querySelector(".all-movies .title-img div");
var ko = document.querySelectorAll(".all-movies .title-img");
input.addEventListener("input", function () {
  var inputtext = unmarkedHandling(this.value).toLowerCase();
  var testCommand = false; // Đặt lệnh kiểm tra cho kết quả tìm kiếm
  hienthi.innerHTML = "";
  for (var i = 0; i < ko.length; i++) {
    var name = unmarkedHandling(ko[i].textContent).trim().toLowerCase();
    if (name.includes(inputtext) && inputtext.length >= 2) {
      var o = ko[i].cloneNode(true);
      o.style.display = "block";
      hienthi.appendChild(o);
      hienthi.style.display = "block";
      var p = document.querySelectorAll(".hienthi .title-img div");
      p.forEach((item) => {
        item.style.display = "block";
      });
      testCommand = true;
    }
    if (!testCommand || inputtext.length <= 1) {
      hienthi.style.display = "none";
    }
    var notification = document.querySelector(".notification");
    if (!testCommand && inputtext.length >= 2) {
      notification.style.display = "block";
      notification.style.position = "relative";
    } else {
      notification.style.display = "none";
    }
  }
});

// 13>> Thêm thẻ "div" vào ".login" đăng nhập
var getLogin = document.querySelector(".login");
var createDiv = document.createElement("div");
createDiv.textContent = "Đăng Nhập";
getLogin.innerHTML = "";
getLogin.appendChild(createDiv);

// Tạo event "click" cho nút "login (Đăng Nhập)"
getLogin.addEventListener(
  "click",
  () => (location.href = "../login_page.html")
);

// Tạo sự kiện hiện thông tin khi user đăng nhập
var currentlyLoggedInUserData = localStorage.getItem("loggedInUser");
var loggedInUserName = document.querySelector(".logged-in-user span");
var loggedInUser = document.querySelector(".logged-in-user");
var login = document.querySelector(".login");
loggedInUserName.insertAdjacentText("beforeend", currentlyLoggedInUserData);
if (currentlyLoggedInUserData == null || currentlyLoggedInUserData == "") {
  loggedInUser.style.display = "none";
  login.style.display = "block";
} else {
  loggedInUserName.textContent = currentlyLoggedInUserData;
  login.style.display = "none";
  loggedInUser.style.display = "block";
}

// Sự kiện click thoat khỏi chế độ đăng nhập của class "logged-in-user"
var loggedInUser = document.querySelector(".logged-in-user");
loggedInUser.addEventListener("click", () => {
  var logOut = localStorage.setItem("loggedInUser", "");
  if (logOut === "" || logOut == null) {
    var login = document.querySelector(".login");
    login.style.display = "block";
    loggedInUser.style.display = "none";
  }
});

// Processing registration form (Xử lý form đăng ký)
// function registerAnAcount() {
//   var user = document.querySelector(".register-form #user").value;
//   var password = document.querySelector(".register-form #password").value;
//   var email = document.querySelector(".register-form #email").value;
//   var retypeEmail = document.querySelector(
//     ".register-form #retype-email"
//   ).value;
//   if (user == "") {
//     alert("Mời bạn nhập 'User name' !");
//   } else if (user.length <= 5) {
//     alert("'User name' phải có ít nhất 6 ký tự !");
//   } else if (!/[a-zA-z]/.test(user)) {
//     alert("'User' phải có ít nhất 1 ký tự là chữ viêt");
//   } else if (password == "") {
//     alert("Mời bạn nhập 'Pass word' !");
//   } else if (password.length <= 5) {
//     alert("'Pass word' phải có ít nhất 6 ký tự !");
//   } else if (!/[a-zA-z]/.test(password)) {
//     alert("'Pass word' phải có ít nhất 1 ký tự viết hoa !'");
//   } else if (email == "") {
//     alert("Mời bạn nhập 'Email' !");
//   } else if (!/@gmail\.com$/.test(email)) {
//     alert("Mời bạn hãy nhập đúng cú pháp '@gmail.com' !");
//   } else if (retypeEmail == "") {
//     alert("Mời bạn nhập lại 'Email' !");
//   } else if (!/[a-zA-z]/.test(email)) {
//     alert("'Email' phải có it nhất 1 ký tự !");
//   } else if (retypeEmail != email) {
//     alert("Nhập lại 'Email' không trùng khớp !");
//   } else {
//     var userData = { User: user, Password: password, Email: email };
//     var jsonStringData = JSON.stringify(userData);
//     var savaData = localStorage.setItem(user, jsonStringData);
//     alert("Bạn đã đăng ký tài khoản thành công !");
//     var registerForm = document.querySelector(".register-form");
//     var darkMode = document.querySelector(".dark-mode");
//     registerForm.style.transform = "translateY(-999px)";
//     darkMode.classList.remove("show");
//   }
// }

// Thểm page css "all-style"
var head = document.querySelector("head");
var createLink = document.createElement("link");
createLink.setAttribute("rel", "stylesheet");
createLink.setAttribute("href", "all-style.css");
head.appendChild(createLink);

// Responsive navigation_bar (Respoonsive cho thanh điều hướng)
function setResponsiveNavigationBar() {
  var navigationBar = document.querySelector("body .responsive-navigation_bar");
  // var navigationBarLength = navigationBar.scrollHeight;
  var responsiveNavigation = document.querySelector(
    ".navigation .responsive-navigation"
  );
  responsiveNavigation.addEventListener("click", () => {
    var navigationBarLength2 = navigationBar.offsetHeight;
    if (navigationBarLength2 == 0) {
      navigationBar.style.height = "340px";
    }
    if (navigationBarLength2 != 0) {
      navigationBar.style.height = 0;
    }
  });
}
setResponsiveNavigationBar();

// set click cho .navigation .responsive-form_search
var searchButton = document.querySelector(
  ".navigation .responsive-form_search .fa-solid"
);
searchButton.addEventListener("click", () => {
  var formSearch = document.querySelector(".form_search2 #searchMovie2");
  if (formSearch.style.opacity == 0) {
    formSearch.style.opacity = "1";
  } else {
    formSearch.style.opacity = 0;
  }
  formSearch.style.transition = "opacity 0.5s ease";
});

// thêm ".abc" vào ".responsive-theloai a li" để css padding
var abc = document.querySelector(".responsive-theloai a:nth-of-type(1) li");
abc.classList.add("abc");

// Set click trang phim đang hoạt động cho ".responsive-theloai"
var movieGenre_list = document.querySelectorAll(".responsive-theloai a");
var movieGenre_list2 = document.querySelectorAll(".responsive-theloai a li");
movieGenre_list2.forEach((item) => {
  item.addEventListener("click", function (event) {
    // event.preventDefault();
    var indexItem = Array.from(movieGenre_list2).indexOf(item);
    var saveAction_movieGenre = localStorage.setItem("movie-genre", indexItem);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  var get_movieGenre = localStorage.getItem("movie-genre");
  movieGenre_list2[get_movieGenre].classList.add("color-action-movie_genre");
  // movieGenre_list.forEach((item) => {
  //   // var hrefItem = event.currentTarget.getAttribute("href");
  // });
  var a = window.location.href;
  var b = document.querySelector(".responsive-theloai").textContent;
  var d = a.substring(a.lastIndexOf("/") + 1);
  var e = d.replace(".html", "");
  function loaibodau(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/Đ/g, "D")
      .replace(/đ/g, "d");
  }
  var z = loaibodau(b);
  var i = new RegExp(e, "i");
  var o = new RegExp(z.replace(/\s/g, ""), "i");
  // console.log(c);
  if (i.test(o)) {
    movieGenre_list2[get_movieGenre].classList.add("color-action-movie_genre");
  } else {
    movieGenre_list2[get_movieGenre].classList.remove(
      "color-action-movie_genre"
    );
  }
});

var a = document.querySelector(".responsive-theloai");
var p = document.querySelector(
  ".responsive-navigation_bar .responsive-theloai ul"
);
var k = document.querySelector(".responsive-theloai");
p.style.display = "none";
if (window.matchMedia("(max-width:1099px)").matches) {
  a.addEventListener("click", () => {
    if (p.style.display == "none") {
      // k.style.content = "url(./image/image2/caret-up-regular-24.png)";
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}
document.addEventListener("click", (event) => {
  if (!a.contains(event.target) & !p.contains(event.target)) {
    p.style.display = "none";
  }
});

/* Tạo thanh navbar di chuyển theo trang */
var navbar = document.querySelector(".navigation");
var navbar_position = navbar.offsetTop;
function handle_navbar() {
  if (window.scrollY > navbar_position) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = handle_navbar;

// Set event cho thanh "menu bar" di chuyển theo trang khi scroll cho ".body .responsive-navigation_bar"
function scrollMenuBar() {
  var responsiveNavigation = document.querySelector(
    ".navigation .responsive-navigation"
  );
  var responsiveNavagation_position = responsiveNavigation.offsetTop;
  var menuBar = document.querySelector("body .responsive-navigation_bar");
  var z = window.scrollY;
  if (z > responsiveNavagation_position) {
    menuBar.classList.add("sticky1");
  } else {
    menuBar.classList.remove("sticky1");
  }
}
window.addEventListener("scroll", scrollMenuBar);
