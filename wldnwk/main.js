let news = [];
let menus = document.querySelectorAll(".menus button");
let searchButton = document.getElementById("search-button");
let url;
let total_pages = 1;
let page = 1;

menus.forEach((menu) =>
  menu.addEventListener("click", (event) => getTopicNews(event))
);

const getNews = async () => {
  try {
    let header = new Headers({
      "x-api-key": "9Qo2_XtISoqE14qpx0mFO6igA960RaivNpK9NKokoF0",
    });
    url.searchParams.set("page", page);
    let response = await fetch(url, { headers: header });
    let data = await response.json();
    if (response.status == 200) {
      if (data.total_hits == 0) {
        throw new Error("검색된 결과값이 없습니다");
      }
      news = data.articles;
      page = data.page;
      total_pages = data.total_pages;
      console.log(total_pages);
      render();
      pagiNation();
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    errorRender(error.message);
  }
};

const errorRender = (a) => {
  let errorHtml = `<div class="alert alert-danger text-center" role="alert">
    ${a}
  </div>`;
  document.getElementById("news-board").innerHTML = errorHtml;
};

const getLatestNews = async () => {
  url = new URL(
    "https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=10"
  );
  getNews();
};
// getLatestNews();

const getSearchNews = async () => {
  let searchInput = document.getElementById("search-input").value;
  url = new URL(
    `https://api.newscatcherapi.com/v2/search?q=${searchInput}&countries=KR&page_size=10`
  );
  getNews();
};

const render = () => {
  let innerHtml = "";
  innerHtml = news
    .map((a) => {
      return `<div class="row news">
        <div class="col-lg-4">
          <img
          class = 'image-size'
            src="${a.media}"
            alt=""
          />
        </div>
        <div class="col-lg-8">
          <h2>${a.title}</h2>
          <p>${a.summary}</p>
          <div>${a.rights} * ${a.published_date}</div>
        </div>
      </div>`;
    })
    .join("");
  document.getElementById("news-board").innerHTML = innerHtml;
};

const getTopicNews = async (event) => {
  let topic = event.target.textContent.toLowerCase();
  url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=${topic}&page_size=10`
  );
  getNews();
};

const pagiNation = () => {
        let pageHtml = ''
         if(page!==1) {
        pageHtml = `<li class="page-item">
  <a class="page-link" onclick='movetoPage(${1})' href="#" aria-label="Previous">
    <span aria-hidden="true">&laquo;</span>
  </a>
</li>
<li class="page-item">
  <a class="page-link" onclick='movetoPage(${
    page - 1
  })' href="#" aria-label="Previous">
    <span aria-hidden="true">&lt;</span>
  </a>
</li>`;
    }
  let page_group = Math.ceil(page / 5);
  let last_page = page==page_group * 5;
  let first_page = last_page - 4;

  for (let i = first_page; i <= last_page; i++) {
    pageHtml += `<li class="page-item ${
      page == i ? "active" : ""
    }"><a class="page-link" onclick= 'movetoPage(${i})' href="#">${i}</a></li>`;
  }
  if (page !== total_pages) {
    pageHtml += `<li class="page-item">
  <a class="page-link" onclick='movetoPage(${
    page + 1
  })' href="#" aria-label="Next">
    <span aria-hidden="true">&gt;</span>
  </a>
</li>
<li class="page-item">
  <a class="page-link" onclick='movetoPage(${total_pages})' href="#" aria-label="Next">
    <span aria-hidden="true">&raquo;</span>
  </a>
</li>`;
  }
  document.querySelector(".pagination").innerHTML = pageHtml;
};

const movetoPage = (pageNum) => {
  page = pageNum;
  getNews();
};

searchButton.addEventListener("click", getSearchNews);


let user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

let myName = user.name; // 변수 myName은 string 타입이다.

user.name = 'Kim';
console.log(myName); // Lee

myName = user.name;  // 재할당
console.log(myName); // Kim