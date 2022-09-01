var asd;
var nDePessoas = 10;
var sair = true;

clearInterval(asd);
asd = setInterval(()=>{
    var n = parseInt(document.getElementsByClassName("uGOf1d")[0].innerHTML);
    
    console.log(n+" - "+nDePessoas+"-"+(n<nDePessoas));

    if(n<nDePessoas){
        console.log(document.getElementsByClassName("sdfgyjnbvftyu")[0].click);
        console.log("pouca gente!");
        if(sair) document.getElementsByClassName("sdfgyjnbvftyu")[0].click();
    }
},1000);