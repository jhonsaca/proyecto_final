//Variables
let text_user = "";
let resultado= "";
let user_word ="";
let total_char =0;
let word= [];
let letter="";
let result= document.querySelector("#texto_resul");
let btn_copiar = document.querySelector(".btn_copy");
let img_doll = document.querySelector(".img_dec");

//Funciones

begin();

function push_desencriptar(){
    text_user= document.querySelector("#user_input").value;
    resultado = desencriptar(text_user);
    result.value= resultado;
    document.querySelector("#user_input").value= "";
    activa_btn();
}

function push_encriptar() {
    encriptar();
    activa_btn();
}

function encriptar(){
    text_user= document.querySelector("#user_input").value;
    if(text_user!=""){
    text_user.toLowerCase();
    total_char = text_user.length;
    //console.log(total_char);
    //console.log(text_user);
    for(var i=0; i<total_char; i++){
        user_word = text_user.charAt(i);
        switch (user_word) {
            case "a":
                user_word="ai";
                break;
            case "e":
                user_word="enter";
                break;
            case "i":
                user_word="imes";
                break;
            case "o":
                user_word="ober";
                break;
            case "u":
                user_word="ufat";
                break;
            default:
                break;
        }
        word.push(user_word);
        letter = user_word;
        resultado +=letter;
    }
    result.value = resultado;
    document.querySelector("#user_input").value="";
    activa_btn();
    }else{
        alert("Ingrese un texto");
        begin();
    }
}

function desencriptar(texto_usuario) {
    if(texto_usuario!=""){
    let keys_encripta = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    texto_usuario=texto_usuario.toLowerCase();
    console.table(keys_encripta);
    for(var i =0; i<keys_encripta.length;i++){
        if(texto_usuario.includes(keys_encripta[i][0])){
            texto_usuario = texto_usuario.replaceAll(keys_encripta[i][0], keys_encripta[i][1]);
        }
    }
    resultado = texto_usuario;
    }else{
        alert("Ingrese un texto");
        begin();
    }
    
    return texto_usuario;
}

function copiar() {
    try {
        navigator.clipboard.writeText(result.value);
    alert("Contenido copiado en el portapeles");
    } catch (err) {
        console.error("Error al copiar" +err);
    }
    result.value=string_original+"Ningun texto fue encontrado. \n Ingresa el texto que desees encriptar o desencriptar";
}

function activa_btn(){
    btn_copiar.style.display = "";
    img_doll.style.display = "none";
}

function arreglar_iu() {
    let element = document.querySelector("resultado");
    element.style.gap="409px";
}

function begin() {
    btn_copiar.style.display="none";
}