const button = document.querySelector("button")
const input1 = document.getElementById("qprodutos")
const input2 = document.getElementById("vprodutos")
const input3 = document.getElementById("dinheiro")
const paragrafoResultado = document.getElementById("resultado")
const paragrafoTotal = document.getElementById("total")
const paragrafoTroco = document.getElementById("troco")
const paragrafoerro = document.getElementById("erro")


button.onclick = function () {

  if (input1.value === "") {
    alert("Digite um valor correto.")
    return
  }

  if (input2.value === "") {
    alert("Digite um valor correto.")
    return
  }

  if (input3.value === "") {
    alert("Digite um valor correto.")
    return
  }

    const qprodutos = Number(input1.value)
    const vprodutos = Number(input2.value)
    const dinheiro = Number(input3.value)

const total = qprodutos * vprodutos
const troco = Number(input3.value) - total
if (troco < total) {
  paragrafoerro.innerHTML = `<p>faltam ${(-troco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}.</p>`
  return
}
else{

const trocoFormatado = troco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
const totalFormatado = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

paragrafoResultado.innerHTML = `<p>O valor total da compra é: <div id="corzinha"> ${totalFormatado} </div></p>`
paragrafoTroco.innerHTML = `<p>O troco é: ${trocoFormatado}</p>`
}}