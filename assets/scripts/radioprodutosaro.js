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
  imgPrincipalUm.src = "assets/img/produtos/aromatizantes/orq1.jpg";
  imgPrincipalDois.src = "assets/img/produtos/aromatizantes/orq2.jpg";
  imgPrincipalTres.src = "assets/img/produtos/aromatizantes/orq3.jpg";
  imgSlideUm.src = "assets/img/produtos/aromatizantes/orq1.jpg";
  imgSlideDois.src = "assets/img/produtos/aromatizantes/orq2.jpg";
  imgSlideTres.src = "assets/img/produtos/aromatizantes/orq3.jpg";
  produtoTempo.innerHTML =
    "Ideal para manter qualquer ambiente perfumado por longos períodos de forma consistente.";
  produtoAroma.innerHTML =
    "Blend de flores que traz notas das orquídeas chocolate,sapatinho,olho de boneca,barco entre outras.";
  btnComprar.href =
    "https://www.magazineluiza.com.br/difusor-de-varetas-orquideas-bonina-aromas/p/bjghgg25d7/me/difa/?seller_id=coboninaesf";
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
  imgPrincipalUm.src = "assets/img/produtos/aromatizantes/folha1.jpg";
  imgPrincipalDois.src = "assets/img/produtos/aromatizantes/folha2.jpg";
  imgPrincipalTres.src = "assets/img/produtos/aromatizantes/folha3.jpg";
  imgSlideUm.src = "assets/img/produtos/aromatizantes/folha1.jpg";
  imgSlideDois.src = "assets/img/produtos/aromatizantes/folha2.jpg";
  imgSlideTres.src = "assets/img/produtos/aromatizantes/folha3.jpg";
  produtoTempo.innerHTML =
    "Ideal para manter qualquer ambiente perfumado por longos períodos de forma consistente.";
  produtoAroma.innerHTML =
    "Aroma capim limão e outras ervas, sendo assim, ideal para perfumar ambientes areijados. ";
  btnComprar.href =
    "https://www.magazineluiza.com.br/difusor-de-varetas-folhas-bonina-aromas/p/ak465f1eek/me/difa/?seller_id=coboninaesf";
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
  imgPrincipalUm.src = "assets/img/produtos/aromatizantes/raiz1.jpg";
  imgPrincipalDois.src = "assets/img/produtos/aromatizantes/raiz2.jpg";
  imgPrincipalTres.src = "assets/img/produtos/aromatizantes/raiz3.jpg";
  imgSlideUm.src = "assets/img/produtos/aromatizantes/raiz1.jpg";
  imgSlideDois.src = "assets/img/produtos/aromatizantes/raiz2.jpg";
  imgSlideTres.src = "assets/img/produtos/aromatizantes/raiz3.jpg";
  produtoTempo.innerHTML =
    "Ideal para manter qualquer ambiente perfumado por longos períodos de forma consistente.";
  produtoAroma.innerHTML =
    "Bases de sândalo e âmbar, ótimo para ambientes onde você vai passar bastante tempo, seu cheiro é aconchegante como um abraço.";
  btnComprar.href =
    "https://www.magazineluiza.com.br/difusor-de-varetas-raizes-boniana-aromas/p/bj49ce0jbj/rc/rcnm/?seller_id=coboninaesf";
}

btnProdutoOrq.addEventListener("click", toggleOrq);
btnProdutoOrq.addEventListener("touchstart", toggleOrq);

btnProdutoRaiz.addEventListener("click", toggleRaiz);
btnProdutoRaiz.addEventListener("touchstart", toggleRaiz);

btnProdutoFolha.addEventListener("click", toggleFolha);
btnProdutoFolha.addEventListener("touchstart", toggleFolha);
