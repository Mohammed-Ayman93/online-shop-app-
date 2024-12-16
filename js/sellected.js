let prodcuts = document.querySelector(".prodcuts")
let chosedProdcuts = JSON.parse(localStorage.getItem("chosed"))
let favProdcuts = JSON.parse(localStorage.getItem("Favorite"))
let logout = document.getElementById("logout")
let totalPriceDiv = document.getElementById("total-price")
let userCart = document.getElementById("userCart")
let favProdcutsDiv = document.querySelector(".fav-prodcuts")

// ///////////////////owl carousel ////////////////////
$(document).ready(function() {
    $("#owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
    });
});
userCart.innerHTML = localStorage.getItem("firstName")
////////////////////////// Draw sellected prodcuts function //////////////
function Draw (){
    chosedProdcuts.map((item)=>{
        prodcuts.innerHTML +=
        `<div class=" col-lg-6 col-md-12 p-3" >
           <div class="card mb-3 rounded bg-body-secondary rounded-5 border-0" >
               <div class="row g-0 px-4">
                 <div class="col-md-6 py-4 text-center">
                   <img src="${item.image}" class="img-fluid rounded-start" alt="...">
                 </div>
                 <div class="col-md-6 py-4">
                   <div class="card-body h-100 p-0">
                       <h6 class="card-title">Products : ${item.title}</h6>
                       <h6>Category : ${item.category}</h6>
                       <h6>Price : ${item.price} $</h6>
                       <div class="d-flex justify-content-between">
                       <div class="fs-4"><span id="prodcutCount${item.id}" class="">${item.count}</span> <i  onclick="Increase(${item.id})" class="fa-solid fa-plus text-success px-2"></i> <i onclick="Decrease(${item.id})" class="fa-solid fa-minus text-danger"></i></div>
                       <button onclick="RemoveFromCart(${item.id})" class="btn btn-danger">Remove</button>
                       </div>
                   </div>
                 </div>
               </div>
           </div> 
          </div> 

       `
    })
    }
Draw()
// ///////////////////// Delet prodcuts function ////////////////////
function RemoveFromCart(id){
  let index = chosedProdcuts.findIndex((item)=>{
    return item.id == id
  })
  chosedProdcuts.splice(index,1)
  if(chosedProdcuts.length == 0){
    totalPriceDiv.innerHTML = "0"
  }
  prodcuts.innerHTML = ""
  let updated = JSON.stringify(chosedProdcuts);
  localStorage.setItem("chosed", updated)
  totalPrice()
  Draw()
}
///////////////////////////// increase & decrease function //////////////////////
function Increase(id) {
  let plus = chosedProdcuts.filter((item)=>{
      return item.id == id
  })
  plus[0].count += 1
  document.getElementById("prodcutCount"+id).innerHTML = plus[0].count
  let increased = JSON.stringify(chosedProdcuts)
  localStorage.setItem("chosed",increased)
  totalPrice()
}
function Decrease(id) {
  let plus = chosedProdcuts.filter((item)=>{
      return item.id == id
  })
  plus[0].count -= 1
  document.getElementById("prodcutCount"+id).innerHTML = plus[0].count
  let increased = JSON.stringify(chosedProdcuts)
  localStorage.setItem("chosed",increased)
  if( plus[0].count == 0 ){
      document.getElementById("prodcutCount"+id).parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
      let indexDelet = chosedProdcuts.findIndex((index)=>{
          return index.id == id
      })
      chosedProdcuts.splice(indexDelet,1)
      let NewChosed = JSON.stringify(chosedProdcuts)
      localStorage.setItem("chosed",NewChosed)
  }
  totalPrice()
  if(chosedProdcuts.length == 0){
    totalPriceDiv.innerHTML = "0"
  }
}
// ////////////////// Total price function ////////////////////////
function totalPrice(){
  let finallPrice = 0
  chosedProdcuts.map((item)=>{
    let Total = item.price * item.count
    finallPrice = finallPrice + Total
    totalPriceDiv.innerHTML = finallPrice
  })
}
totalPrice()
// ////////////////// Fav Draw Function ////////////////////////////
function favDraw(){
  favProdcuts.map((item)=>{
    favProdcutsDiv.innerHTML += `
            <div class="item fav">
          <div class="card bg-body-secondary p-4 rounded-5">
            <div class="text-center">
              <img src="${item.image}" class="img-fluid rounded-start" alt="...">
            </div>
              <div class="card-body pt-4">
                  <h6 class="card-title text-nowrap overflow-hidden">Products :  ${item.title}</h6>
                  <div class="d-flex justify-content-between">
                    <h6 class="card-title text-nowrap overflow-hidden"style="width: 80%;"  >Category :  ${item.category}</h6>
                    <i onclick="favourite(${item.id})" class="fa-solid fa-heart text-danger fs-3"></i>
                </div>
              </div>
            </div>
        </div>    
    `
  })
}
favDraw()
// //////////////// Unfavourite prodcut function //////////////////
function favourite(id){
  let favIndex = favProdcuts.findIndex((item)=>{
    return item.id == id
  })
  favProdcuts.splice(favIndex,1)
  let updatedfav = JSON.stringify(favProdcuts)
  localStorage.setItem("Favorite",updatedfav)
  document.getElementsByClassName("fav")[favIndex].remove()
}
///////////////////////////// logout function //////////////////////
logout.onclick = function(e){
  e.preventDefault()
  localStorage.clear()
  window.location = "index.html"
}