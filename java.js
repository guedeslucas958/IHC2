const nome=document.getElementById("nome");
const idade=document.getElementById("sobr");
const genero=document.getElementById("email");
const resultado=document.getElementById("result");

let lista_pessoas=[];

function add(){
    let indi=[];
    indi.push(nome.value)
    indi.push(idade.value)
    indi.push(genero.value)
    nome.value="";
    idade.value="";
    genero.value="";
    lista_pessoas.push(indi);
}

function apresentar(){
    resultado.value=""
    for(let id=0; id<lista_pessoas.length;id++){
        let pessoa= lista_pessoas[id];
        let info="Nome: "+pessoa[0]+" , Sobrenome: "+pessoa[1]+" , E-mail: "+pessoa[2];
        let salvar= resultado.value;
        salvar = salvar+info+"\n";
        resultado.value = salvar;
    }
};