
// let cartListItems = []

const state = {
  items: [
    {
  id: 1,
  name: 'beetroot',
  price: 1 ,
  quantity: 0
},
{
  id: 2,
  name: 'carrot',
  price: 2,
  quantity: 0
},
{
  id: 3,
  name: 'apple',
  price: 3,
  quantity: 0
},
{
  id: 4,
  name: 'apricot',
  price: 1,
  quantity: 0
},
{
  id : 5,
  name: 'avocado',
  price: 1,
  quantity: 0
},
{
  id: 6,
  name: 'bananas',
  price: 1,
  quantity: 0
},
{
  id: 7,
  name: 'bell-pepper',
  price: 1,
  quantity: 0
},
{
  id: 8,
  name: 'berry',
  price: 1,
  quantity: 0
},
{
  id : 9,
  name: 'blueberry',
  price: 1,
  quantity: 0
},
{
id : 10, 
name: 'eggplant',
price: 1,
quantity: 0
}
],

  cartListItems: []
}


function addproduct(item){
  for(const cartItems of state.cartListItems){
    if(item.name === cartItems.name){
      cartItems.quantity++
    }
  }
  state.cartListItems.push(item)
  item.quantity++
}

function addZeros(number) {
  const str = "" + number;
  const pad = "000";
  return pad.substring(0, pad.length - str.length) + str;
}
const totalProductSum = document.querySelector('.total-number')

function getSum(){
  let  sum = 0
  for(const element of state.cartListItems){
  sum += element.price * element.quantity
  }
  totalProductSum.textContent = `£${sum}`

}


function increaseQuantity (item){
 item.quantity++
}


function decreaseQuantity (item){
  if(item.quantity > 0)
  item.quantity--
}




//* <ul class="item-list store--item-list"> */
function storeItemList(){
  const itemListUlEl = document.querySelector('.item-list.store--item-list')
  itemListUlEl.innerHTML = ``
for(const item of state.items){
  const storeLiEl = document.createElement('li')

const storedivIconEl = document.createElement('div')
storedivIconEl.setAttribute('class', 'store--item-icon')

const storeimgEl = document.createElement('img')
storeimgEl.setAttribute('src', `assets/icons/${addZeros(item.id)}-${item.name}.svg`)
storeimgEl.setAttribute('alt', `${item.name}`)

const storeBnEl = document.createElement('button')
storeBnEl.textContent = 'Add to cart'
storeBnEl.addEventListener('click', function(){
  addproduct(item)
  render()
})

storedivIconEl.append(storeimgEl)
storeLiEl.append(storedivIconEl,storeBnEl)
itemListUlEl.append(storeLiEl)
}
}

//* <ul class="item-list cart--item-list"> */
function cartItmelList(item){
  const itemListUlEl = document.querySelector('main .item-list')
  itemListUlEl.innerHTML = ``
  for(const item of state.cartListItems){
const cartLiEl = document.createElement('li')

const imgCartEl = document.createElement('img')
imgCartEl.setAttribute('class', 'cart--item-icon')
imgCartEl.setAttribute('src', `assets/icons/${addZeros(item.id)}-${item.name}.svg`)
imgCartEl.setAttribute('alt', `${item.name}`)

const pEl = document.createElement  ('p')
pEl.textContent =`${item.name}`

const CartremoveBTnEl = document.createElement ('button')
CartremoveBTnEl.setAttribute('class', 'quantity-btn remove-btn center')
CartremoveBTnEl.textContent = '-'

const CartSpanEl = document.createElement('span')
CartSpanEl.setAttribute('class', 'quantity-text center')
CartSpanEl.textContent = item.quantity

const CartraddBTnEl = document.createElement ('button')
CartraddBTnEl.setAttribute('class', 'quantity-btn add-btn center')
CartraddBTnEl.textContent = '+'


cartLiEl.append(imgCartEl, pEl, CartremoveBTnEl, CartSpanEl, CartraddBTnEl )
itemListUlEl.append(cartLiEl)
  
CartremoveBTnEl.addEventListener('click', function(){
  let spanNr = Number(CartSpanEl.textContent)
  CartSpanEl.textContent = spanNr
  if (spanNr === 0){
    cartLiEl.remove()
  }
  decreaseQuantity (item)
  render()
})
CartraddBTnEl.addEventListener('click', function(){
  increaseQuantity (item)
  render()
})
}
}



function render(){
  storeItemList()
  cartItmelList()
  getSum()

}
render()
