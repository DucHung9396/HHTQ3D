let btn_r = document.querySelector(".btn-right");
let btn_l = document.querySelector(".btn-left");

// let handleSlide = () => {
//   if (current == length_list_img - 5) {
//     current = 0;
//     let width = the_img[0].offsetWidth;
//     var double_width = width * 2;
//     classname_img.style.transform = `translateX(${double_width * current}px)`;
//     document.querySelector(".active").classList.remove("active");
//     var b = document
//       .querySelector(".index-item-" + current)
//       .classList.add("active");
//   } else {
//     current++;
//     let width = the_img[0].offsetWidth;
//     var double_width = width * 2;
//     classname_img.style.transform = `translateX(${
//       double_width * -1 * current
//     }px)`;
//     document.querySelector(".active").classList.remove("active");
//     var b = document
//       .querySelector(".index-item-" + current)
//       .classList.add("active");
//   }
// };
// btn_r.addEventListener("click", () => {
//   clearInterval(handleChangeSlide);
//   handleSlide();
//   handleChangeSlide = setInterval(handleSlide, 5000);
// });
// btn_l.addEventListener("click", () => {
//   clearInterval(handleChangeSlide);
//   if (current == 0) {
//     current = length_list_img - 5;
//     let width = the_img.offsetWidth;
//     var double_width = width * 2;
//     classname_img.style.transform = `translateX(${
//       double_width * -1 * current
//     }px)`;
//     console.log(current);
//     document.querySelector(".active").classList.remove("active");
//     document.querySelector(".index-item-" + current).classList.add("active");
//   } else {
//     current--;
//     let width = the_img[0].offsetWidth;
//     var double_width = width * 2;
//     classname_img.style.transform = `translateX(${
//       double_width * -1 * current
//     }px)`;
//     document.querySelector(".active").classList.remove("active");
//     document.querySelector(".index-item-" + current).classList.add("active");
//   }
//   handleChangeSlide = setInterval(handleSlide, 5000);
// });
// var handleChangeSlide = setInterval(handleSlide, 5000);

// Cách 2 làm show slide

var listElement = document.querySelectorAll(".list-img .img");
var currentBanner = 0;
function showSlides() {
  var lengthElement = listElement[0].offsetWidth;
  listElement.forEach((element) => {
    element.style.transform = `translateX(${
      lengthElement * -1 * currentBanner
    }px)`;
  });
  currentBanner++;
  var removeActive = document.querySelector(".container-index-items .active");
  removeActive.classList.remove("active");
  var setActive = document.querySelector(
    ".index-item:nth-child(" + currentBanner + ")"
  );
  setActive.classList.add("active");
  if (currentBanner >= listElement.length) {
    currentBanner = 0;
  }
}
var handleSetInterval = setInterval(showSlides, 5000);

// 9>> Set event "mũi tên phải" click chuyển slide cho banner
btn_r.addEventListener("click", function () {
  showSlides();
});

// 8>> Set event "mũi tên trái" click chuyển slide cho banner
btn_l.addEventListener("click", () => {
  clearInterval(handleSetInterval);
  var lengthElement = listElement[0].offsetWidth;
  var removeActive = document.querySelector(".container-index-items .active");
  removeActive.classList.remove("active");
  if (currentBanner < 1) {
    currentBanner = listElement.length;
  }
  var setActive = document.querySelector(
    ".index-item:nth-child(" + currentBanner + ")"
  );
  listElement.forEach((element) => {
    element.style.transform = `translateX(${
      lengthElement * -1 * (currentBanner - 1)
    }px)`;
  });
  setActive.classList.add("active");
  currentBanner--;
  handleSetInterval = setInterval(showSlides, 5000);
});

// 10>> Set event hover vào "Mũi tên banner" sẽ clear setInterval
function hoverArrow() {
  btn_r.addEventListener("mouseenter", () => {
    clearInterval(handleSetInterval);
  });
  btn_r.addEventListener("mouseleave", () => {
    handleSetInterval = setInterval(showSlides, 5000);
  });
}
hoverArrow();

// console.log(navbarColor);
/*  Cách 2 - mũi tên chuyển ảnh
var aaa = the_img.length;
var index = 1;
function handleClick(n) {
  if (n > the_img.length) {
    index = 1;
  }
  if (n < 1) {
    index = the_img.length;
  }
  for (var i = 0; i < the_img.length; i++) {
    the_img[i].style.display = "none";
  }
  the_img[index - 1].style.display = "block";
}
function chuyenhuong(m) {
  handleClick((index += m));
}
handleClick(index); */

/* 2>> JS màu hiển thị danh sách phim cho các ngày */
function setColorForShowTimes(day) {
  var allMovieShowTimes = document.querySelectorAll(".container-date");
  allMovieShowTimes.forEach((current) => {
    current.classList.remove("active-date");
  });
  var selectedDate = document.querySelector(
    ".container-date:nth-child(" + day + ")"
  );
  selectedDate.classList.add("active-date");
}

function showtimes(ngay) {
  var array = [];
  var element_images = document.querySelector(".moicapnhat");
  element_images.innerHTML = "";
  var removePagination = document.querySelector(".pagination");
  removePagination.style.display = "none";
  var title = document.querySelector(".title");
  title.style.display = "none";
  if (ngay == "moicapnhat") {
    function duongdan(a) {
      window.location.href = a;
    }
    duongdan("./index.html");
  }
  if (ngay === "thu2") {
    array.push(
      { title: "Độc Bộ Tiêu Dao", img: "./image/doc-bo-tieu-dao-300x450.webp" },
      {
        title: "Cửu Thiên Huyền Đế Quyết Phần 3",
        img: "./image/cuu-thien-huyen-de-quyet-3-300x450.jpg",
      },
      {
        title: "Vạn Cổ Thần Thoại Phần 1",
        img: "./image/van-co-than-thoai-1-300x450.jpg",
      },
      { title: "Tiên Nghịch", img: "./image/tien-nghich--300x450.webp" },
      {
        title: "Nghịch Thiên Chí Tôn",
        img: "./image/nghich-thien-chi-ton-300x450.jpg",
      },
      {
        title: "Vạn Giói Tiên Tung",
        img: "./image/van-gioi-tien-tung-300x450.webp",
      },
      {
        title: "Kiếm Vực Phong Vân (SS2)",
        img: "./image/kiem-vuc-phong-van-ss-2-300x450.jpg",
      },
      { title: "Đại Vũ Trụ Thời Đại", img: "./image/IMG_0200.jpeg" },
      { title: "Vạn Cổ Cuồng Đế", img: "./image/Van-Co-Cuong-De-300x449.webp" },
      {
        title: "Bắt Đầu Từ Trăng Đỏ Phần 1",
        img: "./image/bat-dau-tu-trang-do-1-300x450.webp",
      },
      {
        title: "Ma Trang Truyền Thuyết",
        img: "./image/ma-trang-truyen-thuyet-300x450.jpg",
      },
      {
        title: "Vô Thượng Thần Đế",
        img: "./image/vo-thuong-than-de-300x450.jpg",
      }
    );
  }
  if (ngay == "thu3") {
    array.push(
      {
        title: "Luyện Khí 10 Vạn Năm",
        img: "./image/image2/Luyen-Khi-Muoi-Van-Nam-300x449.jpg",
      },
      { title: "Linh Kiếm Tôn", img: "./image/linh-kiem-ton-300x450.jpg" },
      { title: "Độc Bộ Vân Cô", img: "./image/doc-bo-van-co.webp" },
      {
        title: "Vạn Giới Độc Tôn",
        img: "./image/image2/van-gioi-doc-ton-phan-2-300x449.jpg",
      },
      { title: "Đan Đạo Chí Tôn", img: "./image/IMG_0188.jpeg" },
      {
        title: "Thôn Phệ Tinh Không",
        img: "./image/image2/Thon-Phe-Tinh-Khong-300x449.jpg",
      },
      {
        title: "Võ Thần Chúa Tể",
        img: "./image/image2/Vo-Than-Chua-Te-300x449.jpg",
      },
      { title: "Thánh Tổ", img: "./image/image2/Thanh-To-300x449.jpg" },
      {
        title: "Thần Long Tinh Chủ",
        img: "./image/image2/Than-Long-Tinh-Chu-300x449.jpg",
      },
      {
        title: "Thái Nhất Kiếm Tiên Truyện",
        img: "./image/image2/Thai-Nhat-Kiem-Tien-Truyen-300x449.jpg",
      },
      {
        title: "Chẩm Đao Ca Phần 2",
        img: "./image/image2/Cham-Dao-Ca-300x449.jpg",
      }
    );
  }
  if (ngay == "thu4") {
    array.push(
      { title: "Già Thiên", img: "./image/IMG_0204-300x450.jpeg" },
      {
        title: "Tuyệt Thế Võ Hồn",
        img: "./image/image2/Tuyet-The-Vo-Hon-300x449.jpg",
      },
      {
        title: "Chân Võ Đỉnh Phong",
        img: "./image/image2/Chan-Vo-Dinh-Phong-300x449.jpg",
      },
      {
        title: "Hồng Hoang Linh Tôn",
        img: "./image/image2/Hong-Hoang-Linh-Ton-300x449.jpg",
      },
      {
        title: "Tây Hành Kỷ - Ám Ảnh Ma Thành",
        img: "./image/image2/tay-hanh-ky-am-anh-ma-thanh-300x450.jpg",
      },
      {
        title: "Thiếu Niên Ca Hành Phần 3",
        img: "./image/image2/Thieu-Nien-Ca-Hanh-3-300x449.jpg",
      },
      {
        title: "Dị Nhân Quân Mạc Tà",
        img: "./image/image2/Di-Nhan-Quan-Mac-Ta-300x449.jpg",
      }
    );
  }
  if (ngay == "thu5") {
    array.push(
      {
        title: "Vạn Giới Chí Tôn",
        img: "./image/van-gioi-chi-ton-1825-300x450.jpg",
      },
      {
        title: "Bất Tử Bất Diệt",
        img: "./image/image2/Bat-Tu-Bat-Diet-300x449.jpg",
      },
      {
        title: "Sư Huynh A Sư Huynh",
        img: "./image/su-huynh-a-su-huynh-300x450.webp",
      },
      {
        title: "Thần Ấn Vương Tọa",
        img: "./image/than-an-vuong-toa-2-300x450.webp",
      },
      { title: "Thái Cổ Tinh Thần Quyết", img: "./image/IMG_0206.jpeg" },
      {
        title: "Vạn Giới Tiên Tung",
        img: "./image/van-gioi-tien-tung-300x450.webp",
      },
      {
        title: "Vạn Cổ Thần Thoại",
        img: "./image/van-co-than-thoai-1-300x450.jpg",
      },
      { title: "Độc Bộ Tiêu Dao", img: "./image/doc-bo-tieu-dao-300x450.webp" },
      {
        title: "Kiếm Vực Phong Vân (SS2) ",
        img: "./image/kiem-vuc-phong-van-ss-2-300x450.jpg",
      }
    );
  }

  if (ngay == "thu6") {
    array.push(
      { title: "Độc Bộ Vân Cô", img: "./image/doc-bo-van-co.webp" },
      {
        title: "Thần Long Tinh Chủ",
        img: "./image/image2/Than-Long-Tinh-Chu-300x449.jpg",
      },
      { title: "Linh Kiếm Tôn", img: "./image/linh-kiem-ton-300x450.jpg" },
      { title: "Tiên Nghịch", img: "./image/tien-nghich--300x450.webp" },
      {
        title: "Nghịch Thiên Chí Tôn",
        img: "./image/nghich-thien-chi-ton-300x450.jpg",
      },
      {
        title: "Thế Giới Hoàn Mỹ",
        img: "./image/the-gioi-hoan-my-poster-3-300x450.jpg",
      },
      { title: "Đại Chúa Tể", img: "./image/dai-chua-te-300x450.webp" },
      {
        title: "Vô Thượng Thần Đế",
        img: "./image/vo-thuong-than-de-300x450.jpg",
      },
      {
        title: "Bách Luyện Thành Thần Phần 2",
        img: "./image/bach-luyen-thanh-than-2-300x450.jpg",
      },
      {
        title: "Thập Phương Võ Thành",
        img: "./image/80227bceb2b1c9d720816ef0fc2d53082b2a7c08-300x450.jpg",
      },
      {
        title: "Ác Ma Pháp Tắc",
        img: "./image/image2/Ac-Ma-Phap-Tac-300x449.jpg",
      },
      {
        title: "Cửu Thiên Huyền Đế Quyết Phần 3",
        img: "./image/cuu-thien-huyen-de-quyet-3-300x450.jpg",
      }
    );
  }

  if (ngay == "thu7") {
    array.push(
      {
        title: "Vạn Giới Độc Tôn",
        img: "./image/image2/van-gioi-doc-ton-phan-2-300x449.jpg",
      },
      {
        title: "Luyện Khí 10 Vạn Năm",
        img: "./image/image2/Luyen-Khi-Muoi-Van-Nam-300x449.jpg",
      },
      {
        title: "Thần Long Tinh Chủ",
        img: "./image/image2/Than-Long-Tinh-Chu-300x449.jpg",
      },
      {
        title: "Đấu La Đại Lục 2 - Tuyệt Thế Đường Môn",
        img: "./image/dau-la-dai-luc-p2-300x450.jpg",
      },
      {
        title: "Phàm Nhân Tu Tiên",
        img: "./image/pham-nhan-tu-tien-phan-3-1-300x450.png",
      },
      {
        title: "Nghịch Thiên Tà Thần",
        img: "./image/Nghich-Thien-Ta-Than-300x449-1.webp",
      },
      {
        title: "Băng Hỏa Ma Trù",
        img: "./image/bang-hoa-ma-tru-1-300x450.jpg",
      },
      {
        title: "Chân Võ Đỉnh Phong",
        img: "./image/image2/Chan-Vo-Dinh-Phong-300x449.jpg",
      }
    );
  }
  if (ngay == "chunhat") {
    array.push(
      {
        title: "Võ Thần Chúa Tể",
        img: "./image/image2/Vo-Than-Chua-Te-300x449.jpg",
      },
      {
        title: "Đấu Phá Thương Khung",
        img: "./image/dau-pha-thuong-khung-phan-5-gia-nam-hoc-vien-3-300x450.webp",
      },
      {
        title: "Tiên Võ Đế Tôn",
        img: "./image/tien-vo-de-ton-p2-300x450.webp",
      },
      {
        title: "Tuyệt Thế Võ Hồn",
        img: "./image/image2/Tuyet-The-Vo-Hon-300x449.jpg",
      },
      {
        title: "Vạn Giới Chí Tôn",
        img: "./image/van-gioi-chi-ton-1825-300x450.jpg",
      },
      {
        title: "Thái Cổ Tinh Thần Quyết",
        img: "./image/image2/Thai-Co-Tinh-Than-Quyet-300x449.jpg",
      },
      {
        title: "Hồng Hoang Linh Tôn",
        img: "./image/image2/Hong-Hoang-Linh-Ton-300x449.jpg",
      }
    );
  }
  for (var i = 0; i < array.length; i++) {
    var titleMovie = document.querySelectorAll(".title-img");
    titleMovie.forEach((attribute) => {
      var u = attribute.querySelector(".movieTitle");
      attribute.title = u.textContent;
    });
    var createA = document.createElement("a");
    var divlon = document.createElement("div");
    var img1 = document.createElement("img");
    var div1 = document.createElement("div");
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    img1.src = array[i].img;
    div1.appendChild(img1);
    div2.textContent = array[i].title;
    createA.appendChild(div1);
    createA.appendChild(div);
    createA.appendChild(div2);
    divlon.appendChild(createA);
    divlon.classList.add("title-img");
    div.classList.add("blurredBackground");
    div2.classList.add("movieTitle");
    element_images.appendChild(divlon);
    var divlon = document.querySelectorAll(".title-img");
    divlon.forEach((item) => {
      var o = item.querySelector(".movieTitle").textContent;
      var i = o.split(" ");
      var u = i.join("-").trim();
      var t = u.toLowerCase();
      var d = unmarkedHandling(t);
      var p = item.querySelector("a");
      p.href = "https://hoathinh3d.vip/" + d;
    });
  }
}

/* 8>> Tạo thanh navbar di chuyển theo trang */
var navbar = document.querySelector(".navigation");
var navbar_position = navbar.offsetTop;
function handle_navbar() {
  if (window.scrollY > navbar_position) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// Gắn hàm vào sự kiện cuộn trang của cửa sổ
window.addEventListener("scroll", handle_navbar);

/* Tạo phân trang cách 1*/
// var containsImage = [];
// var elementContainsImage = document.querySelector(".moicapnhat");
// var elementImage = elementContainsImage.getElementsByTagName("img");
// for (var i = 0; i < elementImage.length; i++) {
//   var url = elementImage[i].src;
//   var img = { src: url };
//   containsImage.push(img);
// }
// elementContainsImage.innerHTML = "";
// var numberOfPageElement = 10;
// function showImage(page) {
//   var starIndex = (page - 1) * numberOfPageElement;
//   var endIndex = starIndex + numberOfPageElement;
//   var pageContent = containsImage.slice(starIndex, endIndex);
//   pageContent.forEach((item) => {
//     var creatPhotoFolder = document.createElement("img");
//     creatPhotoFolder.src = item.src;
//     elementContainsImage.appendChild(creatPhotoFolder);
//   });
// }
// showImage(1);
/* function renderPagination() {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginationElement = document.getElementById('pagination');
  paginationElement.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement('a');
      pageLink.href = '#';
      pageLink.textContent = i;
      pageLink.addEventListener('click', () => {
          renderPage(i);
      });
      paginationElement.appendChild(pageLink);
  }
} */
// showImage(1);

/* 7>> Tạo phân trang cách 2*/
var numberOfPageElement = 60;
function showPage(page) {
  var numbers = document.querySelector(".moicapnhat").querySelectorAll("div");
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

/* 3>> Tạo màu sác cho nút button-phân trang */
function activeButton(current) {
  var pageButton = document.querySelectorAll(".pagination button");
  pageButton.forEach((button) => {
    button.classList.remove("activeButton");
  });
  var selectButton = document.querySelector(
    ".pagination div:nth-child(" + current + ") button"
  );
  selectButton.classList.add("activeButton");
}

/* 4>> Thêm thuộc tính title (Attribute) vào thẻ img */
window.onload = function () {
  var titleImage = document.querySelectorAll(".title-img");
  titleImage.forEach((div) => {
    var titleElement = div.querySelector(".movieTitle");
    div.title = titleElement.innerText;
  });
};

// 5>> Tạo sự kiện cuộn trang Scroll
var crollPage = document.querySelector(".crollPage");
window.onscroll = function showCrollPage() {
  if (window.scrollY > 350) {
    crollPage.style.display = "block";
  } else {
    crollPage.style.display = "none";
  }
};
crollPage.addEventListener("click", function crollPage() {
  var croll = setInterval(function scrollTop() {
    // document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    document.documentElement.scrollTop -= 10;
    if (document.documentElement.scrollTop <= 0) {
      clearInterval(croll);
    }
  }, 0);
});

// 6>> Thêm sự kiện click cho các phần tử chỉ mục ".index-item" cho banner
let currentIndexItem = 0;
let listBaner = document.querySelectorAll(".img");
document.querySelectorAll(".index-item").forEach((item, index) => {
  item.addEventListener("click", () => {
    clearInterval(handleSetInterval);
    currentIndexItem = index;
    let width = listBaner[0].offsetWidth;
    listBaner.forEach((banner) => {
      banner.style.transform = `translateX(${width * -1 * currentIndexItem}px)`;
    });
    document.querySelectorAll(".index-item").forEach((item) => {
      item.classList.remove("active");
    });
    // Thêm lớp "active" cho phần tử được click
    item.classList.add("active");
    handleSetInterval = setInterval(showSlides, 5000);
  });
});
// Tạo hàm BỎ DẤU cho "movie title"
function unmarkedHandling(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f/]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "Đ");
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

// Tạo event scroll cho nut scroll
window.onload = function () {
  var tag = document.querySelector("html");
  var vitri = tag.offsetTop;
  setTimeout(() => {
    // setTimeout cho scrollTo để không scrollTo không chạy quá nhanh dẫn tới bị lỗi
    window.scrollTo({ top: vitri, behavior: "smooth" });
  }, 0);
};

// Loại bỏ đuôi ".html" của thanh địa chỉ
// if (location.href.endsWith(".html")) {
//   var newUrl = location.href.slice(0, -5); // Loại bỏ đuôi .html
//   history.replaceState(null, null, newUrl); // Thay đổi URL
// }

// Tạo tút qua bài mp3
// Next song cách 1
// function nextSong() {
//   var theNextSong = currentSongIndex + 1;
//   console.log(currentSongIndex);
//   if (theNextSong >= songs.length) {
//     theNextSong = 0;
//   }
//   console.log(theNextSong);
//   audio.src = songs[theNextSong];
//   audio.play();
//   currentSongIndex = theNextSong; // Cập nhật lại biên currentSongIndex = 0 để biên "theNextSong" = 0 sẽ quay lại bài hát đầu tiên()
// }

// "Next Song" cách 2
var audio = document.querySelector(".mp3 audio");
var songTitle = document.querySelector(".songTitle");
var songs = [
  { src: "./mp3/kissing.mp3", title: "Kissing" },
  {
    src: "./mp3/y2mate.com - EM ỔN KHÔNG 你 好不好 周興哲  HOÀNG DUYÊN COVER_320kbps.mp3",
    title: "Em Ổn Không",
  },
  {
    src: "./mp3/CoDonDaQuaBinhThuong-MiuLe-12071536.mp3",
    title: "Cô Đơn Đã Quá Bình Thường",
  },
  { src: "./mp3/Do__ - Bi__nh Gold [320kbps_MP3].mp3", title: "Đớ" },
  { src: "./mp3/nhi.mp3", title: "Bảo Nhi" },
  { src: "./mp3/Shhhhhhh-WEANtlinh-11885420.mp3", title: "No title" },
  {
    src: "./mp3/y2mate.com - Cuối Cùng Thì  Jack J97 x ZeapleeLofi Version by 1 9 6 7 Official Lyrics Video.mp3",
    title: "Cuối Cùng Thì",
  },
  {
    src: "./mp3/y2mate.com - Houses On The Hill feat Emmi  Just Do It Lyric Video.mp3",
    title: "House On The Hill",
  },
  {
    src: "./mp3/y2mate.com - PHẢI LÒNG   Phong Max remix  BAE TĂNG DUY TÂN .mp3",
    title: "Phải Lòng",
  },
  {
    src: "./mp3/y2mate.com - Still thinking of you LYRICS Loving caliber feat Johanna Dahl.mp3",
    title: "Still thinking of you",
  },
  {
    src: "./mp3/y2mate.com - Wildflowers feat Cara Dee  All Those Things We Did Back Then.mp3",
    title: "Wild Flowers",
  },
];
var currentSongIndex = 0;
audio.src = songs[currentSongIndex].src; // Gán đường dẫn cho thẻ audio(phải gán trước mới phát nhạc được)
songTitle.textContent = songs[currentSongIndex].title; // Gán 'song title' cho bài hát thẻ audio(Để hiện thị "song title" bài hát đầu tiên)
function nextSong() {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }
  audio.src = songs[currentSongIndex].src;
  songTitle.textContent = songs[currentSongIndex].title;
  audio.autoplay();
}

// 11> set "Tự Động Qua bài" cho songs
document.addEventListener("DOMContentLoaded", function () {
  audio.addEventListener("ended", function () {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
      currentSongIndex = 0;
    }
    audio.src = songs[currentSongIndex].src;
    songTitle.textContent = songs[currentSongIndex].title;
    audio.play();
  });
});

// 12>> set kết quả tìm kiếm cho input "search" kết quả phim
var input = document.querySelector(".form_search input");
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

// 13>> Tạo event "login - register" user
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

// 14>> Tạo event click cho "register"
var registerLoginForm = document.querySelector(".register-loginform");
var registerform = document.querySelector(".register-form");
registerLoginForm.addEventListener("click", () => {
  registerform.style.transform = "translateY(0px)";
  registerform.style.transition = "transform 0.5s ease";
  loginForm.style.display = "none";
});

// 15>> Tạo sự kiện khi click vào "Register form" sẽ không bị ảnh hưởng của bởi event "document.body.addEventListener("click")"
registerform.addEventListener("click", () => {
  event.stopPropagation();
  return;
});
// 15>> Tạo event ẩn cho "Register form"
document.body.addEventListener("click", (item) => {
  registerform.style.transform = "translateY(-999px)";
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
    alert("Mời bạn hãy nhập cú pháp 'Gmail'");
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
  }
}

// Tạo event login cho người dùng
var login = document.querySelector(".login-form .login-button");
login.addEventListener("click", () => {
  var passWordLoginForm = document.querySelector(".login-form #password").value;
  var userLoginForm = document.querySelector(".login-form #user").value;
  var StoredUserInformation = localStorage.length;
  for (var i = 0; i < StoredUserInformation; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    var jsonParseData = JSON.parse(value);
    if (key == userLoginForm && jsonParseData.Password == passWordLoginForm) {
      alert("Chúc mừng bạn đăng nhập thành công");
      var loggedInUser = document.querySelector(".logged-in-user");
      loggedInUser.textContent = userLoginForm;
      loggedInUser.style.display = "block";
      console.log(loggedInUser);
    }
  }
});
var loggedInUser = document.querySelector(".logged-in-user");

// Handle event reload page sẽ lưu trữ thông tin người dùng đăng nhập
// document.addEventListener("DOMContentLoaded", function () {
//   var userData = localStorage.length;
//   var loginButton = document.querySelector(".login");
//   var loggedInUser = document.querySelector(".logged-in-user");
//   var theUserIsLoggedIn = document.querySelector(".login-form #user");

//   theUserIsLoggedIn.addEventListener("input", function (event) {
//     for (var i = 0; i < userData; i++) {
//       var key = localStorage.key(i);
//       if (theUserIsLoggedIn.value == key) {
//         loggedInUser.textContent = this.value;
//         loggedInUser.style.display = "block";
//         loginButton.style.display = "none";
//       }
//     }
//   });
//   for (var i = 0; i < userData; i++) {
//     var showUser = localStorage.key(i);
//     if (showUser) {
//       var b = localStorage.getItem(b);
//       if (b == null) {
//         // loggedInUser.textContent = b;
//         // loggedInUser.style.display = "block";
//         console.log(b);
//       }
//     }
//   }
// });
