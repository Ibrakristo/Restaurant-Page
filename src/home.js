export default function home() {
  let content = document.querySelector("#content");
  function photoContainerinit() {
    let photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");
    let titleImg = document.createElement("div");
    titleImg.innerText = "Eater";
    titleImg.classList.add("title-img");
    photoContainer.appendChild(titleImg);
    let img = document.createElement("img");
    img.setAttribute("src", "./photo/rest.jpg");
    photoContainer.appendChild(img);
    content.appendChild(photoContainer);
  }
  photoContainerinit();
  function wrapperinit() {
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    for (let i = 0; i < 4; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      let img = document.createElement("img");
      if (i == 0) img.setAttribute("src", "./photo/food1.jpeg");
      if (i == 1) img.setAttribute("src", "./photo/food2.jpeg");
      if (i == 2) img.setAttribute("src", "./photo/food3.jpeg");
      if (i == 3) img.setAttribute("src", "./photo/food4.jpeg");
      card.appendChild(img);
      let p = document.createElement("p");
      p.innerText = "A Fabulous Food";
      card.appendChild(p);
      wrapper.appendChild(card);
    }
    content.appendChild(wrapper);
  }
  wrapperinit();
  function sayinginit() {
    let saying = document.createElement("div");
    saying.classList.add("saying");
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo augue nulla, a dignissim eros tincidunt euismod. Aliquam bibendum, mi id rhoncus ultricies, enim diam pretium eros, eu dictum velit lorem in nibh. Cras non nisi placerat, finibus erat quis, tincidunt magna. Curabitur id libero malesuada, elementum tortor et, tempor lorem. Proin non massa ac eros vehicula vestibulum. Integer elementum.`;
    div.appendChild(p);
    let p2 = document.createElement("p");
    p2.innerText = "-a stranger maybe";
    div.appendChild(p2);
    saying.appendChild(div);
    content.appendChild(saying);
  }
  sayinginit();
  function infoinit() {
    let info = document.createElement("div");
    info.classList.add("info");
    for (let i = 0; i < 3; i++) {
      let div = document.createElement("div");
      div.classList.add("icons-wrapper");
      let img = document.createElement("img");
      let p = document.createElement("p");
      if (i == 0) {
        img.setAttribute("src", "./photo/icons/time.svg");
        p.innerHTML = "Opens from 11 AM to 12PM <br> Sunday-Friday";
      }
      if (i == 1) {
        img.setAttribute("src", "./photo/icons/location.svg");
        p.innerHTML = "Near <i>That Guy</i>";
      }
      if (i == 2) {
        img.setAttribute("src", "./photo/icons/star.svg");
        p.innerHTML =
          "One of The Highest rated Restaurant in the country <i>*cause its the only thing in it :)*</i>";
      }
      div.appendChild(img);
      div.appendChild(p);
      info.appendChild(div);
    }
    content.appendChild(info);
  }
  infoinit();
  function footerinit() {
    let footer = document.createElement("div");
    footer.classList.add("footer");
    let p = document.createElement("p");
    p.innerText = "Eater Restaurant";
    footer.appendChild(p);
    let p2 = document.createElement("p");
    p2.innerText = "all credits goes to its respective owners";
    footer.appendChild(p2);
    content.appendChild(footer);
  }
  footerinit();
}
