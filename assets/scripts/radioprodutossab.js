const btnProdutoOrq = document.getElementById("produto__orquidea");
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
  btnProdutoFolha.classList.remove("ativo");
  const active = btnProdutoOrq.classList.contains("ativo");
  btnProdutoOrq.style.backgroundColor = "#ffffff";
  btnProdutoOrq.style.boxShadow = "0px 2px 5px rgba(28, 0, 5, 0.25)";
  btnProdutoFolha.style.backgroundColor = "#cecece";
  btnProdutoFolha.style.boxShadow = "none";
  imgPrincipalUm.src = "assets/img/produtos/sabonete/sabo1.jpg";
  imgPrincipalDois.src = "assets/img/produtos/sabonete/sabo1.jpg";
  imgPrincipalTres.src = "assets/img/produtos/sabonete/sabo1.jpg";
  imgSlideUm.src = "assets/img/produtos/sabonete/sabo1.jpg";
  imgSlideDois.src = "assets/img/produtos/sabonete/sabo1.jpg";
  imgSlideTres.src = "assets/img/produtos/sabonete/sabo1.jpg";
  produtoTempo.innerHTML =
    "Nossa linha de sabonetes hidratantes conta com combo de vitaminas A e E e extrato de leite de cabra para deixar sua pele macia, hidratada e suave";
  produtoAroma.innerHTML = "Delicioso aroma de orquídeas.";
  btnComprar.href = "index.html#contato";
}

function toggleFolha(event) {
  if (event.type === "touchstart") event.preventDefault();
  btnProdutoOrq.classList.remove("ativo");
  btnProdutoFolha.classList.add("ativo");
  const active = btnProdutoFolha.classList.contains("ativo");
  btnProdutoOrq.style.backgroundColor = "#cecece";
  btnProdutoOrq.style.boxShadow = "none";
  btnProdutoFolha.style.backgroundColor = "#ffffff";
  btnProdutoFolha.style.boxShadow = "0px 2px 5px rgba(28, 0, 5, 0.25)";
  imgPrincipalUm.src = "assets/img/produtos/sabonete/sabo1.jpg";
  imgPrincipalDois.src = "assets/img/produtos/sabonete/sabo1.jpg";
  imgPrincipalTres.src = "assets/img/produtos/sabonete/sabo1.jpg";
  imgSlideUm.src = "assets/img/produtos/sabonete/sabo1.jpg";
  imgSlideDois.src = "assets/img/produtos/sabonete/sabo1.jpg";
  imgSlideTres.src = "assets/img/produtos/sabonete/sabo1.jpg";
  produtoTempo.innerHTML =
    "Possuem ações anti sépticas e anti inflamatórias, sem você se preocupar em usa-los em lugares sensíveis, a fim de fazer uma ótima esfoliação responsável  sem perder a hidratação da pele.";
  produtoAroma.innerHTML = "Aroma de calêndula e barba timão.";
  btnComprar.href = "index.html#contato";
}

btnProdutoOrq.addEventListener("click", toggleOrq);
btnProdutoOrq.addEventListener("touchstart", toggleOrq);

btnProdutoFolha.addEventListener("click", toggleFolha);
btnProdutoFolha.addEventListener("touchstart", toggleFolha);
