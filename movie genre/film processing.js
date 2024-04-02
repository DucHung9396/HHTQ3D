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
totalPagination(1);
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
  }
}
// Tạo event click cho "mũi tên" trong class ".pagination" để chuyển tiếp "pagination button"
// event click for "right arrow"
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
// B1) thêm 2 "element" cha vào trước thẻ body
var getBody = document.querySelector("body");
var createDiv1 = document.createElement("div");
createDiv1.classList.add("dark-mode");
var createDiv2 = document.createElement("div");
createDiv2.classList.add("login-form");
var createH2 = document.createElement("h2");
createH2.textContent = "Login to your account";
var createLabel = document.createElement("label");
getBody.insertAdjacentElement("afterbegin", createDiv2);
getBody.insertAdjacentElement("afterbegin", createDiv1);
var getLoginForm = document.querySelector("body .login-form");
getLoginForm.appendChild(createH2);
getLoginForm.appendChild(createLabel);
var createBr = document.createElement("br");
getLoginForm.appendChild(createBr);
getLoginForm.appendChild(createLabel.cloneNode(true));
getLoginForm.appendChild(createBr.cloneNode(true));
var createSpan = document.createElement("span");
createSpan.textContent = "User name:";
var createInput = document.createElement("input");
var getLabel1 = document.querySelector("body .login-form label");
getLabel1.appendChild(createSpan);
getLabel1.appendChild(createInput);
var getLabel2 = document.querySelector("body .login-form label:nth-of-type(2");
getLabel2.appendChild(createSpan.cloneNode(true));
getLabel2.appendChild(createInput.cloneNode(true));
var getSpanChildLabel2 = document.querySelector(
  "body .login-form label:nth-of-type(2) span"
);
getSpanChildLabel2.textContent = "Pass word:";
var createButton = document.createElement("button");
createButton.textContent = "Login";
getLoginForm.appendChild(createButton);
getLoginForm.appendChild(createBr.cloneNode(true));
getLoginForm.appendChild(createButton.cloneNode(true));
var getButton2 = document.querySelector(
  "body .login-form button:nth-of-type(2"
);
getButton2.textContent = "Register";
getButton2.classList.add("register-loginform");
var getButton = document.querySelector(".login-form button");
getButton.classList.add("login-button");
getButton2.appendChild(createDiv1.cloneNode(true));
var getDivChildButton2 = document.querySelector(
  "body .login-form button:nth-of-type(2) div"
);
getDivChildButton2.removeAttribute("class");
getDivChildButton2.textContent = "Có tài khoản chưa mà đòi đăng nhập";
// Set "Attribute" cho các "Element" "newly created (Mới tạo)"
getLabel1.setAttribute("for", "user");
getLabel2.setAttribute("for", "password");
var getInput1 = document.querySelector(".login-form label input");
getInput1.setAttribute("id", "user");
getInput1.setAttribute("type", "text");
getInput1.setAttribute("placeholder", "Nhập tên đăng nhập...");
var getInput2 = document.querySelector(
  ".login-form label:nth-of-type(2) input"
);
getInput2.setAttribute("id", "password");
getInput2.setAttribute("type", "password");
getInput2.setAttribute("placeholder", "Nhập password...");
//Tạo event click "login (đăng nhập)" user
var loginButton = document.querySelector(".login");
var loginForm = document.querySelector(".login-form");
var darkMode = document.querySelector(".dark-mode");
loginButton.addEventListener("click", function () {
  loginForm.style.display = "block";
  darkMode.classList.add("show");
  darkMode.style.transition = "opacity 0.5s ease";
  document.body.classList.add("overflow");
});
loginForm.addEventListener("click", function () {
  event.stopPropagation();
  return;
});
document.body.addEventListener("click", (event) => {
  if (!darkMode.contains(event.target)) {
    return;
  }
  loginForm.style.display = "none";
  darkMode.classList.remove("show");
  document.body.classList.remove("overflow");
});

// Tạo event login trong form đăng nhập cho người dùng
//Thêm thẻ div class = "login-form-user" vào ".childHeader"
var childHeader = document.querySelector(".header .childHeader");
var createDivInChildHeader = document.createElement("div");
createDivInChildHeader.innerHTML = "<i class='bx bxs-user'></i>";
var createSpanInLoggedInUser = document.createElement("span");
createDivInChildHeader.appendChild(createSpanInLoggedInUser);
createDivInChildHeader.classList.add("logged-in-user");
childHeader.insertAdjacentElement("beforeend", createDivInChildHeader);
var loginButton = document.querySelector(".login-form .login-button");
loginButton.addEventListener("click", () => {
  var passWordLoginForm = document.querySelector(".login-form #password").value;
  var userLoginForm = document.querySelector(".login-form #user").value;
  // Lấy dữ liệu từ localStorage cho userLoginForm
  var userData = localStorage.getItem(userLoginForm);
  // Kiểm tra nếu userData không tồn tại hoặc password không khớp
  if (!userData || JSON.parse(userData).Password != passWordLoginForm) {
    if (userLoginForm == "") {
      alert("Bạn chưa nhập 'User name'");
    } else if (userLoginForm.length <= 5) {
      alert("'User name' phải có ít nhất 6 ký tự !");
    } else if (passWordLoginForm == "") {
      alert("Bạn chưa nhập 'Password' !");
    } else if (passWordLoginForm.length <= 5) {
      alert("'Password phải có ít nhất 6 ký tự'");
    } else {
      alert("'User name' hoặc 'Password' không chính xác");
    }
    return;
  }
  // Nếu tới đây, đăng nhập thành công
  alert("Chúc mừng bạn đăng nhập thành công");
  var loginForm = document.querySelector(".login-form");
  var darkMode = document.querySelector(".dark-mode");
  loginForm.style.display = "none";
  darkMode.classList.remove("show");
  var loginDangNhap = document.querySelector(".login");
  var loggedInUser = document.querySelector(".logged-in-user");
  var spanOfLoggedInUser = document.querySelector(".logged-in-user span");
  spanOfLoggedInUser.textContent = userLoginForm;
  loggedInUser.style.display = "block";
  loginDangNhap.style.display = "none";
  var a = localStorage.setItem("loggedInUser", userLoginForm);
});

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

// Tạo sự kiện hiện thông tin khi user đăng nhập
document.addEventListener("DOMContentLoaded", () => {
  var currentlyLoggedInUserData = localStorage.getItem("loggedInUser");
  var loggedInUserName = document.querySelector(".logged-in-user span");
  var loggedInUser = document.querySelector(".logged-in-user");
  var login = document.querySelector(".login");
  loggedInUserName.insertAdjacentText("beforeend", currentlyLoggedInUserData);
  if (currentlyLoggedInUserData == null || currentlyLoggedInUserData == "") {
    loggedInUser.style.display = "none";
    login.style.display = "block";
  } else {
    login.style.display = "none";
    loggedInUser.style.display = "block";
  }
});

// Processing registration form (Xử lý form đăng ký)
function registerAnAcount() {
  var user = document.querySelector(".register-form #user").value;
  var password = document.querySelector(".register-form #password").value;
  var email = document.querySelector(".register-form #email").value;
  var retypeEmail = document.querySelector(
    ".register-form #retype-email"
  ).value;
  if (user == "") {
    alert("Mời bạn nhập 'User name' !");
  } else if (user.length <= 5) {
    alert("'User name' phải có ít nhất 6 ký tự !");
  } else if (!/[a-zA-z]/.test(user)) {
    alert("'User' phải có ít nhất 1 ký tự là chữ viêt");
  } else if (password == "") {
    alert("Mời bạn nhập 'Pass word' !");
  } else if (password.length <= 5) {
    alert("'Pass word' phải có ít nhất 6 ký tự !");
  } else if (!/[a-zA-z]/.test(password)) {
    alert("'Pass word' phải có ít nhất 1 ký tự viết hoa !'");
  } else if (email == "") {
    alert("Mời bạn nhập 'Email' !");
  } else if (!/@gmail\.com$/.test(email)) {
    alert("Mời bạn hãy nhập đúng cú pháp '@gmail.com' !");
  } else if (retypeEmail == "") {
    alert("Mời bạn nhập lại 'Email' !");
  } else if (!/[a-zA-z]/.test(email)) {
    alert("'Email' phải có it nhất 1 ký tự !");
  } else if (retypeEmail != email) {
    alert("Nhập lại 'Email' không trùng khớp !");
  } else {
    var userData = { User: user, Password: password, Email: email };
    var jsonStringData = JSON.stringify(userData);
    var savaData = localStorage.setItem(user, jsonStringData);
    alert("Bạn đã đăng ký tài khoản thành công !");
    var registerForm = document.querySelector(".register-form");
    var darkMode = document.querySelector(".dark-mode");
    registerForm.style.transform = "translateY(-999px)";
    darkMode.classList.remove("show");
  }
}

// 14>> Tạo event click cho "register"
var registerLoginForm = document.querySelector(".register-loginform");
var registerForm = document.querySelector(".register-form");
registerLoginForm.addEventListener("click", () => {
  registerForm.style.transform = "translateY(0px)";
  registerForm.style.transition = "transform 0.5s ease";
  loginForm.style.display = "none";
});

// 15>> Tạo sự kiện khi click vào "Register form" sẽ không bị ảnh hưởng của bởi event "document.body.addEventListener("click")"
registerForm.addEventListener("click", () => {
  event.stopPropagation();
  return;
});
// 16>> Tạo event ẩn cho "Register form"
document.body.addEventListener("click", (item) => {
  registerForm.style.transform = "translateY(-999px)";
});
