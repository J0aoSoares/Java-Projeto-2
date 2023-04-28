//Buscando lista de um array usando for

//declarando e chamando o id msg

let msg=document.getElementById('msg')

const usuarios=[
    {nome:"JOÃO", Idade: 18},
    {nome:"RAFAEL", Idade: 13},
    {nome:"GABRIELA", Idade: 16},
];

const users =usuarios.length;

for(let i=0; i<users;i++){

    msg.innerHTML += `<p>${usuarios[i].nome} ${usuarios[i].Idade}</p>`

}
//criando um array de imagens

var imagens=[
    'img/1.gif',
    'img/2.gif',
    'img/3.gif',
    'img/4.gif',
];
//declarando as variaveis

let Index=0;
let time=2000;

//criando uma função
function slideshow(){
    document.getElementById('image').src=imagens[Index];//pega o id e o caminho da imagem
    Index++;//incrementa
    if(Index == imagens.length){Index=0}//verifica se as imagens existem e conta quantas imagens tem
    setTimeout("slideshow()",time);//chama a funcção e define o tempo
}
//executa a função
slideshow();


