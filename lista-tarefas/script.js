let tarefas = []

function adicionarTarefa() {

    const mensagem = document.getElementById("mensagem")

    // busca a tarefa digitada atraves do getElementById, com o id referenciado na tag de input
    let inputTarefa = document.getElementById("inputTarefa")

    // coloca a "tarefa" em uma variavel, mencionando a tarefa que contem o get com o .value
    let tarefa = inputTarefa.value.trim()

    if (tarefa != ""){

        // imprimi a mensagem de Tarefa adicionada com sucesso
        let mensagemSucesso = "A tarefa foi adicionada com sucesso!"
        mensagem.style.backgroundColor = '#28A745'
        mensagem.style.color = '#f4f0ea'
        mensagem.textContent = mensagemSucesso;
        //insere uma nova linha <li> na lista de tarefas
        tarefas.push(tarefa)    

        renderizarTarefas()

    } else {
        mensagemErro = "Você precisa informar uma tarefa para adicionar."
        mensagem.textContent = mensagemErro;
        mensagem.style.backgroundColor = '#A34743'
        mensagem.style.color = '#f4f0ea'
    }

    //zera o campo de input para o usuario continuar digitando novos valores
    inputTarefa.value=""
    
  }

function renderizarTarefas(){

  //busca lista de tarefas na lista <ul>
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    let i = 0
    for(i; i < tarefas.length; i++) {

        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        listaTarefas.appendChild(novaTarefa)   
  }
  }