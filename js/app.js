function alterarStatus(valor){
    switch(valor){
        case 1:
            let ativador = document.querySelector("#game-1 .dashboard__item__button");
            console.log(ativador)
            if(ativador.classList.contains("dashboard__item__button--return")){
                ativador.classList.remove("dashboard__item__button--return");
                ativador.classList.add("dashboard__item__button");
                ativador.innerHTML = "Alugar"
            }else{
                ativador.classList.add("dashboard__item__button","dashboard__item__button--return");
                ativador.innerHTML = "Devolver"
            }
            break
        case 2:
            let ativador1 = document.querySelector("#game-2 .dashboard__item__button");
            console.log(ativador1)
            if(ativador1.classList.contains("dashboard__item__button--return")){
                ativador1.classList.remove("dashboard__item__button--return");
                ativador1.classList.add("dashboard__item__button");
                ativador1.innerHTML = "Alugar"
            }else{
                ativador1.classList.add("dashboard__item__button","dashboard__item__button--return");
                ativador1.innerHTML = "Devolver"
            }
            break
        case 3:
            let ativador2 = document.querySelector("#game-3 .dashboard__item__button");
            console.log(ativador2)
            if(ativador2.classList.contains("dashboard__item__button--return")){
                ativador2.classList.remove("dashboard__item__button--return");
                ativador2.classList.add("dashboard__item__button");
                ativador2.innerHTML = "Alugar"
            }else{
                ativador2.classList.add("dashboard__item__button","dashboard__item__button--return");
                ativador2.innerHTML = "Devolver"
            }
            break
            
    }
}