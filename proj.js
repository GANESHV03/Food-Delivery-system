const bucket = document.querySelector(".bucket");
const cart = document.querySelector(".cart");
const close = document.querySelector(".close");
// console.log(close, cart);

bucket.addEventListener("click", () => {
  cart.classList.add("cart-active".0  ` 
  `);
});
close.addEventListener("click", () => {
  cart.classList.remove("cart-active");
});

document.addEventListener("DOMContentLoaded", hello);

function hello() { 
  main();
}
function main() {
  // changing quant
  let change = document.querySelectorAll(".cart-quantity");
  change.forEach((inp) => {
    inp.addEventListener("change", changequant);
  });

  // product add
  let addcart = document.querySelectorAll(".add-cart");
  addcart.forEach((btn) => {
    btn.addEventListener("click", addca);
  });
  // removing prouct
  let remover = document.querySelectorAll(".cart-remove");
  console.log(remover);
  remover.forEach((each) => {
    each.addEventListener("click", cartrem);
  });
}
  
function cartrem() {
  if (confirm("are you sure")) {
    let title = this.parentElement.querySelector(".food-title");
    arritem=arritem.filter(e=>e.head !=title);
    this.parentElement.remove();
  }
}
// function changequant(){
//     if(isNaN(this.value) || this.value<1){
//         this.value=1;
//  }
// product  add
let arritem=[];
function addca() {  
  let food = this.parentElement;
  let foo = food.parentElement;
  let jii = foo.parentElement;
  let head = jii.querySelector(".food-head").innerHTML;
  let price = jii.querySelector(".food-price").innerHTML;
  let imagesrc = jii.querySelector(".food-img").src;

  let newit = {head,price,imagesrc};
  if (arritem.find(el=>el.head == newit.head)){
    alert("Sorry item alredy avil in cart");
    return;
  }else{
    arritem.push(newit);
  }
  
  console.log(head, price, imagesrc);
  console.log(arritem);
  let addprod = createone(head, price, imagesrc);
  let content = document.querySelector(".content");
  let newele = document.createElement("div");
  newele.innerHTML = addprod;
  content.append(newele);
}
function createone(head, price, image) {
  return `
            <div class="cart-box">
              <img src="${image}" alt="" style="width: 50px; height: 50px;" class="cart-image">
              <div class="detail-box">
                <div class='food-title'>${head}</div>
                <div class="price-box">
                  <div class="cart-price">${price}</div>
                  <div class="cart-amt">${price}</div>
                </div>
                <div> 
                  <input type="text" class="cart-quantity" style="width:40px">
                </div>
              </div>
              <i class="cart-remove ri-delete-bin-line"></i>
            </div>`;  
}
