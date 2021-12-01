/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

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
  name: 'apricon',
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
  name: 'bell pepper',
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
name: 'egplant',
price: 1
}
]
}

function renderSvg (svgrender){
  for (const element of svgrender){
    storeItemList(element)
  }
}


//* <ul class="item-list store--item-list"> */
function storeItemList(){
const itemListUlEl = document.querySelector('header .item-list')

const storeLiEl = document.createElement('li')

const storedivIconEl = document.createElement('div')
storedivIconEl.setAttribute('class', 'store--item-icon')

const storeimgEl = document.createElement('img')
storeimgEl.setAttribute('src', 'assets/icons/001-beetroot.svg')
storeimgEl.setAttribute('alt', 'beetroot')

const storeBnEl = document.createElement('button')
storeBnEl.textContent = 'Add to cart'

storedivIconEl.append(storeimgEl)
storeLiEl.append(storedivIconEl,storeBnEl)
itemListUlEl.append(storeLiEl)


}
//* <ul class="item-list cart--item-list"> */
function cartItmelList(){
const itemListUlEl = document.querySelector('main .item-list')
const cartLiEl = document.createElement('li')

const imgCartEl = document.createElement('img')
imgCartEl.setAttribute('class', 'cart--item-icon')
imgCartEl.setAttribute('src', 'assets/icons/001-beetroot.svg')
imgCartEl.setAttribute('alt', 'beetroot')

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


function render(){
  storeItemList()
  cartItmelList()
}
render()