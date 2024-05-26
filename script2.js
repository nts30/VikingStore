let basketTovar;
if(localStorage.getItem("basketTovar")){
    
    basketTovar = JSON.parse(localStorage.getItem("basketTovar"));
    console.log(basketTovar)
    openBasket()
}
else{
    document.getElementById("spisokTovarov").innerHTML = "Ваша корзина пуста";
}

function openBasket(){
    document.getElementById("spisokTovarov").innerHTML = "";
    for(let i=0; i<basketTovar.length;i++){
        document.getElementById("spisokTovarov").innerHTML = document.getElementById("spisokTovarov").innerHTML +"<br>"+basketTovar[i];
        document.getElementById("costTovarov").innerHTML = localStorage.getItem("summaChek");
    }
}