function redirecionarGit(){
    window.open("https://github.com/TheRealRobinho")
}

function redirecionarFb(){
    window.open("https://www.facebook.com/robsondiego.andrade")
}

function redirecionarIg(){
    window.open("https://www.instagram.com/therealrobs_/")
}

function redirecionarTt(){
    window.open("https://twitter.com/TheRealRobs__")
}

function redirecionarIn(){
    window.open("https://br.linkedin.com/in/robsondiegoandrade")
}



function clique() {
    
    if(document.getElementById('emailID').value == "" ||
    document.getElementById('fullNameID').value =='' ||
    document.getElementById('telefoneID').value =='' ||
    document.getElementById('msgID').value ==''){
        alert("Preencha todos os campos")
        return
    } 

    if(typeof document.getElementById('emailID').value !== 'string' ||
    typeof document.getElementById('fullNameID').value !== 'string' ||
    typeof Number(document.getElementById('telefoneID').value) !== 'number' ||
    typeof document.getElementById('msgID').value !== 'string'){
        alert("Preencha CORRETAMENTE todos os campos")
        return
    } else {
        alert ("Enviado!")    

        const email = document.getElementById('emailID').value; 
        const fullName = document.getElementById('fullNameID').value;
        const telefone = document.getElementById('telefoneID').value;
        const mensagem = document.getElementById('msgID').value;  

        const objForm = {
          email: email,
          nome: fullName,
          telefone: telefone,
          mensagem: mensagem
        }

        objForm["data"] = new Date()
        
        //fazer una confirmação de dados
        console.log(objForm)

        document.getElementById('emailID').value='';
        document.getElementById('fullNameID').value='';
        document.getElementById('telefoneID').value='';
        document.getElementById('msgID').value='';

    }
}

//Fazer um objeto pra cada preenchimento de formulario e mostrar na tela, fazer uma mini tela dentro da pagina como se fosse uma confirmação de dados. 
//Caso a pessoa colocar parenteses, criar algo que retire ao enviar o formulario







//Apenas com array se usa tais coisas aabaixo
//todos passam por todos os itens

//push
//inclui algo na array

//map
//manipular cada item do array, posso mexer em cada campo, mas nao posso adicionar nada (EX: se eu quiser colocar todas as letras do nome maiuscula eu uso map, pois ele pode manipula)

//reduce
//

//foreach
//loop que executa uma função qualquer para cada item, que nao necessariamente precisa alterar o valor de algo(EX: quero que envie um email pro usuario para cada campo que ele envio. OBS: nao estou alterando nada, sou estou fazendo algo)

//Array diferente de objeto, nao se tem keys e sim itens, keys podem ser identificaveis, item nao
//exemplo: var objCar = {
//   marca: "a";
//   modelo: "z";
//   ano: 2003
// }
//o valor a da pra ser identifacado como marca, ou vice e versa
//const array = [fruta, carro, pneu]
//da para saber na array apenas o valor, mas nao se identifica nada
//video  8 min 50 seg

//Pensar e usar isto para alguma coisa

// var arvores = new Array("pau-brasil","loureiro","cedro","carvalho", "sicomoro")
// 0 in arvores;   //retorna true pq existe o indice 0
// 3 in arvores;   //retorna true pq existe o indice 3
// 6 in arvores;   //retorna false pq não existe o indice 6
// console.log("cedro" in arvores)  //retorna false (deve-se especificar o numero do indice, ou seja, o numero em que esta localizado o item, nao o valor naquele indice)
// const find = arvores.find(element => element == "cedro") // caso eu queira achar o valor que esta numa array, use isto.
// console.log(find)
// "length" in arvores;    //retorna true (length é uma propriedade de Array e string, ou seja, ambos tem lenght)

//tentar adicionar cada conceito abaixo da linha 1021 neste cod