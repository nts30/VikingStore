let catalog = [
    {
        image:"https://algo.by/media_images/site/l/0/_/0_1046412.jpg",
        name:"Gigabyte GeForce RTX 4070 Ti Gaming 12G",
        articl:"GV-N407TGAMING-12GD",        
        cost:3740.97
    },
    {
        image:"image/pic_1.png",
        name:"Gigabyte GeForce RTX 4070 Ti Windforce OC 12G",
        articl:"GV-N407TWF3OC-12GD",       
        cost:3270.00
    },
    {
        image:"https://algo.by/media_images/site/l/0/_/0_1023054.jpg",
        name:"Palit GeForce RTX 4070 GamingPro OC",
        articl:"NED4070H19K9-1043A",        
        cost:2878.08
    },
    {
        image:"https://algo.by/media_images/site/l/0/_/0_1105255.jpg",
        name:"Palit GeForce RTX 4070 Ti GamingPro White",
        articl:"NED407T019K9-1043W",        
        cost:3812.45
    },
    {
        image:"https://algo.by/media_images/site/l/0/_/0_1111420.jpg",
        name:"Palit GeForce RTX 4080 GamingPro",
        articl:"NED4080019T2-1032A",        
        cost:4995.72
    },
    {
        image:"https://algo.by/media_images/site/l/0/_/0_1082827.jpg",
        name:"Gigabyte GeForce RTX 4070 Ti Gaming OC V2 12G",
        articl:"GV-N407TGAMING OCV2-12GD",        
        cost:3488.01
    },
    {
        image:"https://algo.by/media_images/site/l/1/1/11.jpg",
        name:"AMD Ryzen 5 5600X",        
        articl:"100-000000065",
        cost:462.88
    },
    {
        image:"https://algo.by/media_images/site/l/1/_/1_1083021.jpg",
        name:" Intel Core i5-12400F OEM",        
        articl:"CM8071504650609",
        cost:459.30
    },
    {
        image:"https://algo.by/media_images/site/l/1/_/1_1096572.jpg",
        name:"Intel Core i7-14700K",        
        articl:"CM8071504820721",
        cost:1607.31
    },
    {
        image:"https://algo.by/media_images/site/l/1/_/1_1031442.jpg",
        name:"AMD Ryzen 5 5600",        
        articl:"100-000000927",
        cost:369.65
    },
    {
        image:"https://algo.by/media_images/site/l/1/_/1_1083022.jpg",
        name:"Intel Core i5-13400F",        
        articl:"CM8071505093005",
        cost:653.54
    },
    {
        image:"https://algo.by/media_images/site/l/1/_/1_992940.jpg",
        name:"Intel Core i5-13600K",        
        articl:"CM8071504821005",
        cost:1072.57
    }

]

let cardName = document.getElementsByClassName("name");
let cardArticl = document.getElementsByClassName("articl");
let cardCost = document.getElementsByClassName("cost");
let searchField = document.getElementById("searchField");
let resultField = document.getElementById("textResultSearch");
let cardButton = document.getElementsByClassName("buttonAddBasket");
let summaCheck = 0;




for(let i = 0; i< catalog.length; i++){
    let newDiv = document.createElement("div")
    newDiv.className = "cardTovar";
    document.getElementById("catalog").appendChild(newDiv);
    let newIMG = document.createElement("img")
    newIMG.className="image"
    newIMG.src = catalog[i].image
    newDiv.appendChild(newIMG);
    let newH2 = document.createElement("h2")
    newH2.className="name"
    newH2.innerHTML ="Name: " + catalog[i].name
    newDiv.appendChild(newH2);
    let newP1 = document.createElement("p")
    newP1.className="articl"
    newP1.innerHTML ="Article: " + catalog[i].articl
    newDiv.appendChild(newP1);
    let newP2 = document.createElement("p")
    newP2.className="cost"
    newP2.innerHTML ="Cost: " + catalog[i].cost +"BYN"
    newDiv.appendChild(newP2);
    let newHR = document.createElement("hr");
    newDiv.appendChild(newHR);
    let newBut = document.createElement("button")
    newBut.className="buttonAddBasket"
    newBut.innerText ="Buy"
    newDiv.appendChild(newBut);
    newBut.setAttribute("onclick","addBasket('"+catalog[i].articl+"')")
}

function search(){
    
    if(searchField.value == ""){
        searchField.placeholder = "Search";
    }
    else{
        let resut = []
        document.getElementById("catalog").style.display = "none";
        for(let i = 0; i < catalog.length; i++){
            if(catalog[i].name.toLowerCase().includes(searchField.value.toLowerCase()) || catalog[i].articl.toLowerCase().includes(searchField.value.toLowerCase())){
                resut.push(catalog[i]);
            }
        }
        if(resut.length == 0){
            document.getElementById("textResultSearch").innerHTML = "Product not found";
        }
        else{
            document.getElementById("textResultSearch").style.display = "none";
            for(let i = 0; i< resut.length; i++){
                let newDiv = document.createElement("div")
                newDiv.className = "cardTovar";
                document.getElementById("resultSearch").appendChild(newDiv);
                let newIMG = document.createElement("img")
                newIMG.className="image"
                newIMG.src = catalog[i].image
                newDiv.appendChild(newIMG);
                let newH2 = document.createElement("h2")
                newH2.className="name"
                newH2.innerHTML ="Name: " + catalog[i].name
                newDiv.appendChild(newH2);
                let newP1 = document.createElement("p")
                newP1.className="articl"
                newP1.innerHTML ="Article: " + catalog[i].articl
                newDiv.appendChild(newP1);
                let newP2 = document.createElement("p")
                newP2.className="cost"
                newP2.innerHTML ="Cost: " + catalog[i].cost
                newDiv.appendChild(newP2);
                let newHR = document.createElement("hr");
                newDiv.appendChild(newHR);
                let newBut = document.createElement("button")
                newBut.className="buttonAddBasket"
                newBut.innerHTML ="Buy"
                newDiv.appendChild(newBut);
            }
        }
    }  
}

let basketTovar =[]
function addBasket(art){
    for(let i = 0; i<catalog.length; i++){
        if(catalog[i].articl == art){
            basketTovar.push(catalog[i].name + "    " + catalog[i].articl + "-----" + catalog[i].cost);
            summaCheck = summaCheck + catalog[i].cost;
            //document.getElementById("basketSumma").innerHTML = summaCheck + "  BYN"
        }
    }
    localStorage.setItem("basketTovar", JSON.stringify(basketTovar))
    localStorage.setItem("summa", summaCheck)
}


