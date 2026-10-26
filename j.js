const nome = document.querySelector("#no");
const Editar = document.querySelector("#edit"); 
const sair = document.querySelector("#sair"); 
const cida = document.querySelector("#cid");

Editar.addEventListener("click", function() {
    const novonome = prompt("Digite seu nome:");
    
    if (novonome !== null && novonome.trim() !== "") {
        nome.textContent = novonome.trim(); 

    }})
Editar.addEventListener("click", function() {
    const novacid = prompt("digite sua cidade:");

     if (novacid !== null && novacid.trim() !== "") {
        cida.textContent = novacid.trim(); 
    }
});
sair.addEventListener("click", function(){
    const resposta = confirm("deseja sair do perfil")
    if(resposta){
        alert("Vc saiu");
    }
})
