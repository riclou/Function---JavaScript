let namenav = prompt("Digite o nome da nave: ")
let velocity = 0
let menu
function menus(){
    let opcao = prompt("Digite um número de 1 a 4 \n" + 
            "1 Para acelerar \n"+
            "2 Para desacelerar \n"+ 
            "3 Para verificar as informações \n" +
            "4 Para sair do programa")

    while(opcao <1 || opcao > 4){
        opcao = prompt("Digite um número de 1 a 4 \n" + 
                "1 Para acelerar \n"+
                "2 Para desacelerar \n"+ 
                "3 Para verificar as informações \n" +
                "4 Para sair do programa")
    }
    return opcao
}

function SpeedUp(velocity){
        newvelocity = velocity + 5
        return newvelocity
   }
function SlownDown(velocity){
    if(velocity ==0){
        alert("Você já está a 0 Km/h, não tem como desacelerar mais")
    }
    else{
        newvelocity = velocity - 5
    }
    return newvelocity
}
function printmenu(){
    alert("O nome da sua nave é "+ namenav + " e a velocidade dela é de "+ velocity + " Km/h")
}
do {
    menu = menus()
    switch(menu){
        case "1":
            velocity = SpeedUp(velocity)
            break
        case "2":
            velocity = SlownDown(velocity)
            break
        case "3":
            printmenu()
            break
        default:
            alert("Encerrando programa")
    }
} while (menu != "4")
