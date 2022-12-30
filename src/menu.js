export default function menu() {
  let content = document.querySelector("#content");
  function headerinit() {
    let header = document.createElement("div");
    header.classList.add("header");
    let p = document.createElement("p");
    p.innerText = "Welcome to Eater!";
    header.appendChild(p);
    let ul = document.createElement("ul");

    for (let i = 0; i < 3; i++) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      let img = document.createElement("img");
      a.setAttribute("href", "#");
      if (i == 0) img.setAttribute("src", "./photo/icons/fb.svg");
      else if (i == 1) img.setAttribute("src", "./photo/icons/tw.svg");
      else img.setAttribute("src", "./photo/icons/ins.svg");
      a.appendChild(img);
      li.appendChild(a);
      ul.appendChild(li);
    }
    header.appendChild(ul);
    content.appendChild(header);
  }
  headerinit();
  function photoContainerinit() {
    let photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");
    let titleImg = document.createElement("div");
    titleImg.innerText = "Menu";
    titleImg.classList.add("title-img");
    photoContainer.appendChild(titleImg);
    let img = document.createElement("img");
    img.setAttribute("src", "./photo/menu.jpg");
    photoContainer.appendChild(img);
    content.appendChild(photoContainer);
  }
  photoContainerinit();
  function wrapperinit() {
    let wrapper = document.createElement("div");
    wrapper.classList.add("menu-wrapper");
    for (let i = 0; i < 10; i++) {
      let card = document.createElement("div");
      card.classList.add("menu-card");
      let title = document.createElement("p");
      let div = document.createElement("div");
      div.classList.add("menu-inner");
      let img = document.createElement("img");
      let desc = document.createElement("p");
      if (i == 0) {
        img.setAttribute("src", "./photo/menu/beef.jpg");
        title.innerText = "Beef and Mushrooms";
        desc.innerHTML =
          "1 serving: 517 calories, 26g fat (12g saturated fat), 100mg cholesterol, 896mg sodium, 40g carbohydrate (5g sugars, 4g fiber), 28g protein. <br> 12$";
      } else if (i == 1) {
        img.setAttribute("src", "./photo/menu/chicken.jpg");
        title.innerText = "Broccoli-Stuffed Chicken ";
        desc.innerHTML =
          "1 stuffed chicken breast half: 324 calories, 14g fat (7g saturated fat), 123mg cholesterol, 822mg sodium, 6g carbohydrate (1g sugars, 2g fiber), 43g protein. <br> 25$";
      }
          else if (i == 2) {
        img.setAttribute("src", "./photo/menu/salmon.jpg");
        title.innerText = "Simple Salmon Chowder ";
        desc.innerHTML =
          "1 cup: 274 calories, 15g fat (8g saturated fat), 84mg cholesterol, 1095mg sodium, 18g carbohydrate (5g sugars, 2g fiber), 16g protein.<br> 4$";
      } else if (i == 3) {
        img.setAttribute("src", "./photo/menu/potluck.jpeg");
        title.innerText = "Potluck Macaroni and Cheese";
        desc.innerHTML =
          "3/4 cup: 388 calories, 28g fat (17g saturated fat), 122mg cholesterol, 652mg sodium, 16g carbohydrate (6g sugars, 0 fiber), 17g protein. <br> 8$";
      }
       else if (i == 4) {
        img.setAttribute("src", "./photo/menu/broccoli.jpeg");
        title.innerText = "Broccoli Chicken Casserole";
        desc.innerHTML =
          "1-1/3 cups: 315 calories, 13g fat (6g saturated fat), 66mg cholesterol, 1025mg sodium, 25g carbohydrate (4g sugars, 2g fiber), 23g protein. <br> 24$";
      } else if (i == 5) {
        img.setAttribute("src", "./photo/menu/meatloaf.jpg");
        title.innerText = "Meat Loaf";
        desc.innerHTML =
          "1 slice: 394 calories, 21g fat (10g saturated fat), 128mg cholesterol, 843mg sodium, 23g carbohydrate (15g sugars, 1g fiber), 28g protein. <br> 13$";
      } else if (i == 6) {
        img.setAttribute("src", "./photo/menu/creamsoup.jpg");
        title.innerText = "Cream of Celery Soup";
        desc.innerHTML =
          "1 cup: 185 calories, 7g fat (4g saturated fat), 20mg cholesterol, 989mg sodium, 22g carbohydrate (7g sugars, 3g fiber), 8g protein.<br> 7$";
      } else if (i == 7) {
        img.setAttribute("src", "./photo/menu/chickenpap.jpg");
        title.innerText = "Hungarian Chicken Paprikash";
        desc.innerHTML =
          "1 serving: 517 calories, 26g fat (12g saturated fat), 100mg cholesterol, 896mg sodium, 40g carbohydrate (5g sugars, 4g fiber), 28g protein. <br> 32$";
      } else if (i == 8) {
        img.setAttribute("src", "./photo/menu/shrimp.jpeg");
        title.innerText = "Shrimp Quesadilla";
        desc.innerHTML =
          "1 quesadilla: 523 calories, 27g fat (8g saturated fat), 163mg cholesterol, 707mg sodium, 38g carbohydrate (3g sugars, 4g fiber), 30g protein.<br> 11$";
      } else if (i == 9) {
        img.setAttribute("src", "./photo/menu/countrychicken.jpeg");
        title.innerText = "Country Chicken and Gravy";
        desc.innerHTML =
          "1 chicken breast half with 2 tablespoons gravy: 274 calories, 8g fat (3g saturated fat), 72mg cholesterol, 569mg sodium, 20g carbohydrate (6g sugars, 0 fiber), 28g protein. Diabetic Exchanges: 3 lean meat, 1 starch, 1/2 fat.<br> 12$";
      }
      div.appendChild(img);
      div.appendChild(desc);
      card.appendChild(title);
      card.appendChild(div);
      wrapper.appendChild(card);
    }
    content.appendChild(wrapper);
  }
  wrapperinit();
  function footerinit(){
    let footer = document.createElement("div");
    footer.classList.add("footer");
    let p = document.createElement("p");
    p.innerText = "Eater Restaurant";
    footer.appendChild(p);
    let p2 = document.createElement("p")
    p2.innerText= "all credits goes to its respective owners";
    footer.appendChild(p2);
    content.appendChild(footer);
  }
  footerinit();
}
