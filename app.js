let maindiv = document.querySelector("#maindiv");
let searchBar = document.querySelector("#searchBar");

async function searchShow() {
    
    maindiv.innerHTML = "";
    
  
  let search = searchBar.value;
  searchBar.value = null;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${search}`
  );
  console.log(res.data);
  createElements(res.data);
}
const createElements = (shows) => {
  for (result of shows) {
    let showDiv = document.createElement("div");
    let img = document.createElement("img");

    let showSummary = document.createElement("p");

    let showTitle = document.createElement("h1");

    let showGenres = document.createElement('p');



    showTitle.innerText = result.show.name;
    showSummary.innerHTML = result.show.summary;
    img.src = result.show.image.medium;

    showGenres.innerText = `Genres: ${result.show.genres}`;

    showDiv.setAttribute('class','showDiv');
    showGenres.setAttribute('class', 'showGenres');
    img.setAttribute('class', 'showImgs');

    showSummary.setAttribute('class', 'summarys');

    showTitle.setAttribute('class', 'showTitles');



    maindiv.append(showDiv);
    showDiv.append(img);
    showDiv.append(showTitle);
    showDiv.append(showGenres)
    showDiv.append(showSummary);
  }
};
