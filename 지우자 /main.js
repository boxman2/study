let news = [];
let menus = document.querySelectorAll("#menu-list button");
menus.forEach((menu) =>
  menu.addEventListener("click", (event)=>getNewsByTopic(event))
);
let searchButton = document.getElementById('search-button')




const latestNewsGet = async () => {
  let url = new URL(
    "https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10"
  );
  let header = new Headers({
    "x-api-key": "f71sLMOFtBcUATh8OHLqGdKd2Qw4eDdN33XHFuqUeNI",
  });
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;

  render();
};

const getNewsByTopic = async (event) =>{
    let topic = event.target.textContent.toLowerCase()
    let url = new URL(
        `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`
      );
      let header = new Headers({
        "x-api-key": "f71sLMOFtBcUATh8OHLqGdKd2Qw4eDdN33XHFuqUeNI"
      });
      let response = await fetch(url, { headers: header });
      let data = await response.json();
      news = data.articles;
    
      render();
    }

const getNewsByKeyword = async()=>{
    let inputText = document.getElementById('input-text').value;
    let url = new URL(
        `https://api.newscatcherapi.com/v2/search?q=${inputText}&countries=KR&page_size=10`
      );
      let header = new Headers({
        "x-api-key": "f71sLMOFtBcUATh8OHLqGdKd2Qw4eDdN33XHFuqUeNI"
      });
      let response = await fetch(url, { headers: header });
      let data = await response.json();
      news = data.articles;
    
      render();
}

const render = () => {
  let newsHTML = "";
  newsHTML = news
    .map((news) => {
      return `<div class="row news">
    <div class="col-lg-4">
      <img
      class="image-size"
      src="${news.media}"
      alt=""
      />
    </div>
    <div class="col-lg-8">
      <h2>${news.title}</h2>
      <p>${
        news.summary == null || news.summary == ""
          ? "내용없음"
          : news.summary.length > 200
          ? news.summary.substring(0, 200) + "..."
          : news.summary
      }</p>
      <div>${news.rights || "no source"}*${moment(
        news.published_date
      ).fromNow()}</div>
    </div>
  </div>`;
    })
    .join("");
  document.getElementById("news-list").innerHTML = newsHTML;
};
// latestNewsGet();

let search = document.querySelector(".searching button");
search.addEventListener("click", () => {
  let hide = document.getElementById("hide-input");
  if (hide.style.display == "none") {
    hide.style.display = "inline";
  } else {
    hide.style.display = "none";
  }
});

const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
};

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
};

searchButton.addEventListener('click', getNewsByKeyword)