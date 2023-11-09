// Trocando opções de Naves no Technology

const tabNumber = document.querySelectorAll(".js-tabmenu div");
const tabInfo = document.querySelectorAll(".js-tabinfo section");

function activeTab(index) {
  tabInfo.forEach((page) => {
    // Zerando configuração das classes e atribuindo configuração a classe selecionada (Conteúdo).
    page.classList.remove("active");
  });
  tabInfo[index].classList.add("active");
  // Zerando configuração das classes e atribuindo configuração a classe selecionada (Numero da paginação).
  tabNumber.forEach((number) => {
    number.classList.remove("selected");
  });
  tabNumber[index].classList.add("selected");
}

if (tabNumber.length && tabInfo.length) {
  //Mostrando o primeiro item.
  tabInfo[0].classList.add("active");
  tabNumber[0].classList.add("selected");

  // Add evento de clique para cada paginação.
  tabNumber.forEach((itemNumber, index) => {
    itemNumber.addEventListener("click", () => {
      activeTab(index);
    });
  });
}

//Trocando imagem da tecnologia no mobile
let imgTech = document.querySelectorAll(".js-tabinfo section div img");

function changeImage() {
  if ( window.innerWidth < 620) {
    document.getElementById("img-1").src = "../img/technology/image-launch-vehicle-landscape.jpg";
    document.getElementById("img-2").src = "../img/technology/image-spaceport-landscape.jpg";
    document.getElementById("img-3").src = "../img/technology/image-space-capsule-landscape.jpg";
  }
}
