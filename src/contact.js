export default function contact(){
    let content = document.querySelector("#content");
    let container = document.createElement("div");
    container.classList.add("contact-container");
    content.appendChild(container);
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
    container.appendChild(header);
  }
  headerinit();
  function wrapperinit(){
    let wrapper = document.createElement("div");
    wrapper.classList.add("contact-wrapper");
    for(let i = 0 ; i<2;i++){
        let card = document.createElement("div");
        card.classList.add("contact-card");
        let img = document.createElement("img");
        let p = document.createElement("p");
        if(i == 0){
            img.setAttribute("src","./photo/contact/male.svg");
            p.innerHTML = "Yum Yum!<br> Look! its a wild yum yum !"
        }
        else if (i==1){
            img.setAttribute("src","./photo/contact/female.svg");
            p.innerHTML = "Yummy Yummy!<br> Look! its a wild yummy yummy !"
        }
        card.appendChild(img);
        card.appendChild(p);
        wrapper.appendChild(card);
    }
    container.appendChild(wrapper);
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
    container.appendChild(footer);
  }
  footerinit();
}