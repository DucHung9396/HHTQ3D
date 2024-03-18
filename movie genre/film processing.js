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
