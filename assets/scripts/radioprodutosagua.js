const btnProdutoOrq = document.getElementById("produto__orquidea");
const btnProdutoRaiz = document.getElementById("produto__raiz");
const btnProdutoFolha = document.getElementById("produto__folha");

const produtoTempo = document.getElementById("produto-tempo");
const produtoAroma = document.getElementById("produto-aroma");

const imgPrincipalUm = document.getElementById("produto-img-principal-um");
const imgPrincipalDois = document.getElementById("produto-img-principal-dois");
const imgPrincipalTres = document.getElementById("produto-img-principal-tres");

const imgSlideUm = document.getElementById("produto-img-slide-um");
const imgSlideDois = document.getElementById("produto-img-slide-dois");
const imgSlideTres = document.getElementById("produto-img-slide-tres");

const btnComprar = document.getElementById("btn-comprar");

function toggleOrq(event) {
  if (event.type === "touchstart") event.preventDefault();
  btnProdutoOrq.classList.add("ativo");
  btnProdutoRaiz.classList.remove("ativo");
  btnProdutoFolha.classList.remove("ativo");
  const active = btnProdutoOrq.classList.contains("ativo");
  btnProdutoOrq.style.backgroundColor = "#ffffff";
  btnProdutoOrq.style.boxShadow = "0px 2px 5px rgba(28, 0, 5, 0.25)";
  btnProdutoRaiz.style.backgroundColor = "#cecece";
  btnProdutoRaiz.style.boxShadow = "none";
  btnProdutoFolha.style.backgroundColor = "#cecece";
  btnProdutoFolha.style.boxShadow = "none";
  imgPrincipalUm.src = "assets/img/produtos/agua/agua1.jpg";
  imgPrincipalDois.src = "assets/img/produtos/agua/agua1.jpg";
  imgPrincipalTres.src = "assets/img/produtos/agua/agua1.jpg";
  imgSlideUm.src = "assets/img/produtos/agua/agua1.jpg";
  imgSlideDois.src = "assets/img/produtos/agua/agua1.jpg";
  imgSlideTres.src = "assets/img/produtos/agua/agua1.jpg";
  produtoTempo.innerHTML =
    "Ideal para borrifar em tecidos de cama, banho e roupas, além de carpetes de carro, deixando tudo com toques florais.";
  produtoAroma.innerHTML =
    "Aroma floral e delicado, contando com tons primaveris e um extenso blend de orquídeas levemente adocicado em sua composição.";
  btnComprar.href =
    "https://www.magazineluiza.com.br/agua-perfumada-orquideas-bonina-aromas/p/jg25jdk0j7/me/aper/";
}

function toggleFolha(event) {
  if (event.type === "touchstart") event.preventDefault();
  btnProdutoOrq.classList.remove("ativo");
  btnProdutoRaiz.classList.remove("ativo");
  btnProdutoFolha.classList.add("ativo");
  const active = btnProdutoFolha.classList.contains("ativo");
  btnProdutoOrq.style.backgroundColor = "#cecece";
  btnProdutoOrq.style.boxShadow = "none";
  btnProdutoRaiz.style.backgroundColor = "#cecece";
  btnProdutoRaiz.style.boxShadow = "none";
  btnProdutoFolha.style.backgroundColor = "#ffffff";
  btnProdutoFolha.style.boxShadow = "0px 2px 5px rgba(28, 0, 5, 0.25)";
  imgPrincipalUm.src = "assets/img/produtos/agua/agua1.jpg";
  imgPrincipalDois.src = "assets/img/produtos/agua/agua1.jpg";
  imgPrincipalTres.src = "assets/img/produtos/agua/agua1.jpg";
  imgSlideUm.src = "assets/img/produtos/agua/agua1.jpg";
  imgSlideDois.src = "assets/img/produtos/agua/agua1.jpg";
  imgSlideTres.src = "assets/img/produtos/agua/agua1.jpg";
  produtoTempo.innerHTML =
    "Ideal para borrifar em tecidos de cama, banho e roupas, além de carpetes de carro, deixando tudo com toques refrescantes.";
  produtoAroma.innerHTML =
    "Com toque de capim limão e outras ervas, extremamente refrescante e herbal. ";
  btnComprar.href =
    "https://www.magazineluiza.com.br/agua-perfumada-folhas-bonina-aromas/p/ce5jhadd4c/me/aper/";
}

function toggleRaiz(event) {
  if (event.type === "touchstart") event.preventDefault();
  btnProdutoOrq.classList.remove("ativo");
  btnProdutoRaiz.classList.add("ativo");
  btnProdutoFolha.classList.remove("ativo");
  const active = btnProdutoRaiz.classList.contains("ativo");
  btnProdutoOrq.style.backgroundColor = "#cecece";
  btnProdutoOrq.style.boxShadow = "none";
  btnProdutoRaiz.style.backgroundColor = "#ffffff";
  btnProdutoRaiz.style.boxShadow = "0px 2px 5px rgba(28, 0, 5, 0.25)";
  btnProdutoFolha.style.backgroundColor = "#cecece";
  btnProdutoFolha.style.boxShadow = "none";
  imgPrincipalUm.src = "assets/img/produtos/agua/agua1.jpg";
  imgPrincipalDois.src = "assets/img/produtos/agua/agua1.jpg";
  imgPrincipalTres.src = "assets/img/produtos/agua/agua1.jpg";
  imgSlideUm.src = "assets/img/produtos/agua/agua1.jpg";
  imgSlideDois.src = "assets/img/produtos/agua/agua1.jpg";
  imgSlideTres.src = "assets/img/produtos/agua/agua1.jpg";
  produtoTempo.innerHTML =
    "Ideal para borrifar em tecidos de cama, banho e roupas, além de carpetes de carro, deixando tudo com toques aconchegantes";
  produtoAroma.innerHTML =
    "Suas bases são de sândalo e âmbar, trazendo o cheiro amadeirado com delicadeza. ";
  btnComprar.href =
    "https://www.magazineluiza.com.br/agua-perfuma-raizes-bonina-aromas/p/bjddje32hk/rc/rcnm/";
}

btnProdutoOrq.addEventListener("click", toggleOrq);
btnProdutoOrq.addEventListener("touchstart", toggleOrq);

btnProdutoRaiz.addEventListener("click", toggleRaiz);
btnProdutoRaiz.addEventListener("touchstart", toggleRaiz);

btnProdutoFolha.addEventListener("click", toggleFolha);
btnProdutoFolha.addEventListener("touchstart", toggleFolha);
