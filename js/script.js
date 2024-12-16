let login = document.querySelector(".login")
let logedIn = document.querySelector(".logedIn")
let userName = document.getElementById("userName")
let produsts = document.querySelector(".prodcuts")
let counter = document.getElementById("counter")
let up_down = document.getElementById("up_down")
let increase = document.getElementById("increase")
let logout = document.getElementById("logout")
let cart = document.getElementById("cart")
let searchSelect = document.getElementById("search-select")
let search = document.getElementById("search")
let produtsList = document.querySelector(".prodcuts-list")
let List = document.querySelector(".prodcuts-list div")
let fillterd = []
let chosed = (localStorage.getItem("chosed")) ? JSON.parse(localStorage.getItem("chosed")) : [];
let Fav = (localStorage.getItem("Favorite")) ? JSON.parse(localStorage.getItem("Favorite")) : [];

///////////////////////////////////////////////////

/////////////////////////// Show UserName /////////////////////
if(localStorage.getItem("email")){
    login.classList.add("d-none")
    logedIn.classList.remove("d-none")
    userName.classList.remove("d-none")
    userName.innerHTML = "welcome " + localStorage.getItem("firstName") + " " + localStorage.getItem("lastName") 
}
//////////////////////////// Prodcuts List //////////////////////////
let AllProdusct = [
    {
    id : 1,
    title : "Samsung",
    image : "Images/phons/514nSB8S9pL._AC_SX679_.jpg",
    price : 10000,
    category : "Phone",
    count : 1,
    },
    {
    id : 2,
    title : "Galaxy S24 ultra",
    image : "Images/phons/71WkqFssobL.__AC_SX300_SY300_QL70_ML2_.jpg",
    price : 45000,
    category : "Phone",
    count : 1,
},

    {
    id : 3,
    title : "IPhone 15 pro",
    image : "Images/phons/iphone-15-pro-blue_titanium_5.jpg",
    price : 55000,
    category : "Phone",
    count : 1,
},
    {
    id : 4,
    title : "Poco x6 pro 5G",
    image : "Images/phons/51ClQ5sgthL._AC_SX679_.jpg",
    price : 17750,
    category : "Phone",
    count : 1,
},
    {
    id : 5,
    title : "Redmi Note 13 4G",
    image : "Images/phons/51u8LmG4fNL._AC_SX679_.jpg",
    price : 7950,
    category : "Phone",
    count : 1,
},
    {
    id : 6,
    title : "Realme 12 Pro 5G",
    image : "Images/phons/71emLVOIWdL._AC_SY879_.jpg",
    price : 13950,
    category : "Phone",
    count:1,
},
{
    id : 7,
    title : "Xiaomi Redmi Buds 4 Lite ",
    image : "Images/Mobile accessories/Xiaomi Redmi Buds 4 Lite.jpg",
    price : 1115,
    category : "Mobile accessories",
    count:1,
}
,    {
    id : 8,
    title : "Oraimo FreePods 3C",
    image : "Images/Mobile accessories/Oraimo FreePods 3C.jpg",
    price : 1105,
    category : "Mobile accessories",
    count:1,
}
,    {
    id : 9,
    title : "OnePlus Buds Pro 3",
    image : "Images/Mobile accessories/OnePlus Buds Pro 3.jpg",
    price : 7750,
    category : "Mobile accessories",
    count:1,
}
,    {
    id : 10,
    title : "Oraimo Necklace Lite OEB-311",
    image : "Images/Mobile accessories/Oraimo Necklace Lite OEB-311.jpg",
    price : 740,
    category : "Mobile accessories",
    count:1,
}
,    {
    id : 11,
    title : "HONOR Watch GS 3",
    image : "Images/Smartwatches/HONOR Watch GS 3.jpg",
    price : 3490,
    category : "Smartwatches",
    count:1,
}
,    {
    id : 12,
    title : "BlitzWolf BW-HL3 Smart Watch",
    image : "Images/Smartwatches/BlitzWolf BW-HL3 Smart Watch.jpg",
    price : 1660,
    category : "Smartwatches",
    count:1,
}
,    {
    id : 13,
    title : "Redmi Watch 5 Active Smartwatch",
    image : "Images/Smartwatches/Redmi Watch 5 Active Smartwatch.jpg",
    price : 2210,
    category : "Smartwatches",
    count:1,
}
,    {
    id : 14,
    title : "Oraimo Watch 2R Bluetooth Smart Watch",
    image : "Images/Smartwatches/Oraimo Watch 2R Bluetooth Smart Watch.jpg",
    price : 1700,
    category : "Smartwatches",
    count:1,
}
,    {
    id : 15,
    title : "Xiaomi Redmi Smart Watch 3",
    image : "Images/Smartwatches/Xiaomi Redmi Smart Watch 3.jpg",
    price : 2300,
    category : "Smartwatches",
    count:1,
}
,    {
    id : 16,
    title : "DELL G15 5530 Gaming Laptop",
    image : "Images/Laptop/DELL G15 5530 Gaming Laptop.jpg",
    price : 67250,
    category : "Laptop",
    count:1,
}
,    {
    id : 17,
    title : "HP Laptop 15s",
    image : "Images/Laptop/HP Laptop 15s.jpg",
    price : 19000,
    category : "Laptop",
    count:1,
}
,    {
    id : 18,
    title : "ASUS TUF Gaming A15",
    image : "Images/Laptop/ASUS TUF Gaming A15.jpg",
    price : 34350,
    category : "Laptop",
    count:1,
}
]
//////////////////////////////// Drawing Prodcuts in HTML //////////////////
function Draw (){
     AllProdusct.map((item)=>{
        let btnName = "Add to cart";
        let btnColor = "btn-primary";
        let heartColor = "text-secondary";
        chosed.map((prodcut)=>{
            if(item.id == prodcut.id){
                btnName = "Remove from cart";
                btnColor = "btn-danger";
            }
        })
        Fav.map((prodcut)=>{
            if(item.id == prodcut.id){
                heartColor = "text-danger";
            }
        })
        produsts.innerHTML += `
        <div class="p-3 col-sm-12 col-md-6 col-lg-4 " >
            <div class="card h-100 p-2  " >
                <img src="${item.image}" class="card-img-top p-2" alt="...">
                <div class="p-2">
                  <h6 class="card-title text-nowrap overflow-hidden">Products : ${item.title}</h6>
                  <h6>Price : ${item.price} $</h6>
                  <h6>Category : ${item.category}</h6>
                  <div class="d-flex justify-content-between">
                    <button onclick="addToCart(${item.id})" class="btn ${btnColor}">${btnName}</button>
                    <i onclick="addToFav(${item.id})" class="fa-solid fa-heart ${heartColor} fs-4"></i>
                  </div>
                </div>
              </div>
                `
    })
}
Draw()

// //////////////////////// Search function //////////////////////////
searchSelect.onchange = function(){
    if(searchSelect.value == "name"){
        search.setAttribute("placeholder","Search By Name")
    }else{
        search.setAttribute("placeholder","Search By Category")
    }
}
search.onkeyup = function(){
    produsts.innerHTML = "";
    if(searchSelect.value == "name"){
        fillterd = AllProdusct.filter((item)=>{
            return item.title.toLowerCase().includes(search.value.toLowerCase())
        })

    fillterd.map((item)=>{
        let btnName = "Add to cart";
        let btnColor = "btn-primary";
        let heartColor = "text-secondary";
            chosed.map((prodcut)=>{
            if(item.id == prodcut.id){
                btnName = "Remove from cart";
                btnColor = "btn-danger";
            }
        })
    Fav.map((prodcut)=>{
            if(item.id == prodcut.id){
                heartColor = "text-danger"
            }
        })
        produsts.innerHTML += `
          <div class="p-3 col-sm-12 col-md-6 col-lg-4 " >
            <div class="card h-100 p-2  " >
                <img src="${item.image}" class="card-img-top p-2" alt="...">
                <div class="p-2">
                  <h6 class="card-title text-nowrap overflow-hidden">Products : ${item.title}</h6>
                  <h6>Price : ${item.price} $</h6>
                  <h6>Category : ${item.category}</h6>
                  <div class="d-flex justify-content-between">
                    <button onclick="addToCart(${item.id})" class="btn ${btnColor}">${btnName}</button>
                    <i onclick="addToFav(${item.id})" class="fa-solid fa-heart ${heartColor} fs-4"></i>
                  </div>
                </div>
              </div>
        `
    })
    }else{
    fillterd = AllProdusct.filter((item)=>{
        return item.category.toLowerCase().includes(search.value.toLowerCase())
    })
        fillterd.map((item)=>{
            let btnName = "Add to cart";
            let btnColor = "btn-primary";
            let heartColor = "text-secondary";
            chosed.map((prodcut)=>{
            if(item.id == prodcut.id){
                btnName = "Remove from cart";
                btnColor = "btn-danger";
            }
        })
        Fav.map((prodcut)=>{
            if(item.id == prodcut.id){
                heartColor = "text-danger"
            }
        })
        produsts.innerHTML += `
          <div class="p-3 col-sm-12 col-md-6 col-lg-4 " >
            <div class="card h-100 p-2  " >
                <img src="${item.image}" class="card-img-top p-2" alt="...">
                <div class="p-2">
                  <h6 class="card-title text-nowrap overflow-hidden">Products : ${item.title}</h6>
                  <h6>Price : ${item.price} $</h6>
                  <h6>Category : ${item.category}</h6>
                  <div class="d-flex justify-content-between">
                    <button onclick="addToCart(${item.id})" class="btn ${btnColor}">${btnName}</button>
                    <i onclick="addToFav(${item.id})" class="fa-solid fa-heart ${heartColor} fs-4"></i>
                  </div>
                </div>
              </div>
        `
    })
    }
}
///////////////////////////// Add to cart function //////////////////////
if(chosed){
    chosed.map((item)=>{
        List.innerHTML += ` 
        <div class="d-flex justify-content-between bg-light rounded p-2 mt-2 align-items-center">
             <p class="text-primary m-0 text-wrap" style="width: 65%;">${item.title}</p> <div><span id="prodcutCount${item.id}" class="text-primary">${item.count}</span> <i id="increase" onClick="Increase(${item.id})" class="fa-solid fa-plus text-success px-2"></i> <i id="decrease" onClick="Decrease(${item.id})" class="fa-solid fa-minus text-danger"></i></div>
        </div>
        `  
        AllProdusct.map((prodcut)=>{
            if(prodcut.title == item.title){
                produsts.getElementsByTagName("button")[(item.id)-1].innerHTML = "Remove from cart";
                produsts.getElementsByTagName("button")[(item.id)-1].classList.replace("btn-primary" , "btn-danger");
            }
        })
    })
    let produtsNum = document.querySelectorAll(".prodcuts-list .d-flex")
    counter.innerHTML = produtsNum.length
}
let count = 1;
function addToCart(id){
    let itemIndex = id-1
    if(fillterd.length > 0){
        itemIndex = fillterd.findIndex((item)=>{
        return item.id == id
    })}
    if(userName.classList.contains("d-none")){
        window.location = "login.html"
    }else{
        if(produsts.getElementsByTagName("button")[itemIndex].innerHTML == "Add to cart"){
            produsts.getElementsByTagName("button")[itemIndex].innerHTML = "Remove from cart";
            produsts.getElementsByTagName("button")[itemIndex].classList.replace("btn-primary" , "btn-danger");
            let ChosenProdcuts = AllProdusct.find((item)=>{
                return item.id == id
            });
            chosed = [...chosed , ChosenProdcuts]
            let choseen = JSON.stringify(chosed)
            localStorage.setItem("chosed",choseen)
            List.innerHTML += ` 
                    <div class="d-flex justify-content-between bg-light rounded p-2 mt-2 align-items-center">
                         <p class="text-primary m-0 text-wrap" style="width: 65%;">${ChosenProdcuts.title}</p> <div><span id="prodcutCount${ChosenProdcuts.id}" class="text-primary">${ChosenProdcuts.count}</span> <i id="increase" onClick="Increase(${ChosenProdcuts.id})" class="fa-solid fa-plus text-success px-2"></i> <i id="decrease" onClick="Decrease(${ChosenProdcuts.id})" class="fa-solid fa-minus text-danger"></i></div>
                    </div>
            `
            let produtsNum = document.querySelectorAll(".prodcuts-list .d-flex")
            counter.innerHTML = produtsNum.length
        }else{
            produsts.getElementsByTagName("button")[itemIndex].innerHTML = "Add to cart";
            produsts.getElementsByTagName("button")[itemIndex].classList.replace("btn-danger" , "btn-primary");
            let ChosenProdcuts = AllProdusct.find((item)=>{
                return item.id == id
            });
            let indexDelet = chosed.findIndex((index)=>{
                return index.id == id
            })
            chosed.splice(indexDelet,1)
            let NewChosed = JSON.stringify(chosed)
            localStorage.setItem("chosed",NewChosed)
            let index ;
            for( i=0 ; i < List.children.length ; i++){
                if(List.children[i].innerText.includes(ChosenProdcuts.title)){
                    index = i
                }
            }
            List.removeChild(List.children[index]);
            let produtsNum = document.querySelectorAll(".prodcuts-list .d-flex")
            counter.innerHTML = produtsNum.length;
            if(counter.innerHTML == "0"){
                counter.innerHTML = ""
            }
        }
    }
}
///////////////////////////// Favourite function //////////////////////

if(Fav){
    Fav.map((item)=>{
        AllProdusct.map((produst)=>{
            if(item.id == produst.id){
                produsts.getElementsByClassName("fa-heart")[item.id-1].classList.replace("text-secondary" , "text-danger")
            }
        })
    })
}
function addToFav(id){
    let itemIndex = id-1
    if(fillterd.length > 0){
        itemIndex = fillterd.findIndex((item)=>{
        return item.id == id
    })}
    if(userName.classList.contains("d-none")){
        window.location = "login.html"
        console.log("done")
    }else{
        if(produsts.getElementsByClassName("fa-heart")[itemIndex].classList.contains("text-secondary")){
            produsts.getElementsByClassName("fa-heart")[itemIndex].classList.replace("text-secondary" , "text-danger")
            let FavProdcuts = AllProdusct.find((item)=>{
                return item.id == id
            });
            Fav = [...Fav , FavProdcuts]
            let Favorite = JSON.stringify(Fav)
            localStorage.setItem("Favorite",Favorite)
        }else{
            produsts.getElementsByClassName("fa-heart")[itemIndex].classList.replace( "text-danger" , "text-secondary")
            let indexDelet = Fav.findIndex((index)=>{
                return index.id == id
            })
            Fav.splice(indexDelet,1)
            let NewFav = JSON.stringify(Fav)
            localStorage.setItem("Favorite",NewFav)
    
        }
    }
    
}
///////////////////////////// prodcuts list show-hide //////////////////////

cart.addEventListener("click",Show)
function Show(e){
    e.preventDefault()
    produtsList.classList.toggle("d-none")
    if(up_down.classList.contains("fa-caret-down")){
        up_down.classList.replace("fa-caret-down" , "fa-caret-up")
    }else{
        up_down.classList.replace("fa-caret-up" , "fa-caret-down" )
    }
}
///////////////////////////// increase & decrease function //////////////////////

function Increase(id) {
    let plus = chosed.filter((item)=>{
        return item.id == id
    })
    plus[0].count += 1
    document.getElementById("prodcutCount"+id).innerHTML = plus[0].count
    let increased = JSON.stringify(chosed)
    localStorage.setItem("chosed",increased)
}
function Decrease(id) {
    let plus = chosed.filter((item)=>{
        return item.id == id
    })
    plus[0].count -= 1
    document.getElementById("prodcutCount"+id).innerHTML = plus[0].count
    let increased = JSON.stringify(chosed)
    localStorage.setItem("chosed",increased)
    if( plus[0].count == 0 ){
        produsts.getElementsByTagName("button")[id-1].innerHTML = "Add to cart";
        produsts.getElementsByTagName("button")[id-1].classList.replace("btn-danger" , "btn-primary");
        document.getElementById("prodcutCount"+id).parentElement.parentElement.remove()
        let produtsNum = document.querySelectorAll(".prodcuts-list .d-flex")
        counter.innerHTML = produtsNum.length;
        if(counter.innerHTML == "0"){
            counter.innerHTML = ""
        }
        let indexDelet = chosed.findIndex((index)=>{
            return index.id == id
        })
        chosed.splice(indexDelet,1)
        let NewChosed = JSON.stringify(chosed)
        localStorage.setItem("chosed",NewChosed)
    }
}
///////////////////////////// logout function //////////////////////

logout.onclick = function(e){
    e.preventDefault()
    localStorage.clear()
    window.location = "index.html"
}
