
const state = {
  items: [
    {
  id: 1,
  name: 'beetroot',
  price: 1 , 
},
{
  id: 2,
  name: 'carrot',
  price: 1
},
{
  id: 3,
  name: 'apple',
  price: 1
},
{
  id: 4,
  name: 'apricot',
  price: 1
},
{
  id : 5,
  name: 'avocado',
  price: 1
},
{
  id: 6,
  name: 'bananas',
  price: 1
},
{
  id: 7,
  name: 'bell-pepper',
  price: 1
},
{
  id: 8,
  name: 'berry',
  price: 1
},
{
  id : 9,
  name: 'blueberry',
  price: 1
},
{
id : 10, 
name: 'eggplant',
price: 1
}
]
}



function addZeros(number) {
  const str = "" + number;
  const pad = "000";
  return pad.substring(0, pad.length - str.length) + str;
}


function addToCart(item){
  state.items.filter(function (addItemsToCart){
   return addItemsToCart.name === item.name
  })
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
  addToCart(item);
  render()
})

storedivIconEl.append(storeimgEl)
storeLiEl.append(storedivIconEl,storeBnEl)
itemListUlEl.append(storeLiEl)
}
}

//* <ul class="item-list cart--item-list"> */
function cartItmelList(){
  // for(const item of state.items){
   const item = state.items 
const itemListUlEl = document.querySelector('main .item-list')
const cartLiEl = document.createElement('li')

const imgCartEl = document.createElement('img')
imgCartEl.setAttribute('class', 'cart--item-icon')
imgCartEl.setAttribute('src', `assets/icons/${addZeros(item.id)}-${item.name}.svg`)
imgCartEl.setAttribute('alt', `${item.name}`)

const pEl = document.createElement  ('p')

const CartremoveBTnEl = document.createElement ('button')
CartremoveBTnEl.setAttribute('class', 'quantity-btn remove-btn center')
CartremoveBTnEl.textContent = '-'

const CartSpanEl = document.createElement('span')
CartSpanEl.setAttribute('class', 'quantity-text center')
CartSpanEl.textContent = '1'

const CartraddBTnEl = document.createElement ('button')
CartraddBTnEl.setAttribute('class', 'quantity-btn add-btn center')
CartraddBTnEl.textContent = '+'

cartLiEl.append(imgCartEl, pEl, CartremoveBTnEl, CartSpanEl, CartraddBTnEl )
itemListUlEl.append(cartLiEl)
  
}
// }

function render(){
  storeItemList()
  cartItmelList()
}
render()
