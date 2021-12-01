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
  name: 'beetroot',
  price: 1 , 
  photo: `<svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m281.6 113.1-8.4-6.2-9.6 28.5-7.9-59.8-6.5-49.6-30.9 12.1 8.7 40.7h10.9l18.1 84.9 11.6 1.3 8.1-24.1 8.8-25.8z" fill="#97c447"/><path d="m283.6 51.3v61.8l-8.4-6.2-11.1 32.8-8.4-64.1v-24.3z" fill="#a5ce4a"/><path d="m283.2 112.8.4.3v-1.5z" fill="#619329"/><path d="m265.7 75.6v-24.3h-10v24.3l8.4 64.1 7.2-21.3z" fill="#71a52f"/><path d="m249.6 29.7-.5-3.7-30.8 12.1 8.6 40.7h10l-8.6-40.7z" fill="#6c9b2f"/><path d="m256 163.7 8.1-24 11.1-32.8 8.4 6.2 9.3 6.9-15.5 55.7-.4 1.5s-1 15.8-22.9 15.8c-21.1 0-22.9-15.8-22.9-15.8l-.2-1-18.5-97.4h25.2z" fill="#619329"/><path d="m245 178.5-.2-1-18.5-97.4.6-1.3h-14.2l18.5 97.4.2 1s1.7 15.8 22.9 15.8c1.3 0 2.5-.1 3.7-.2-11.9-3.9-13-14.3-13-14.3z" fill="#97c447"/><path d="m326.1 195.1c0 1-.2 1.9-.7 2.8-4.8 9.7-34 17.2-69.4 17.2s-64.6-7.5-69.4-17.2c-.4-.9-.7-1.8-.7-2.8 0-8.4 18.1-15.5 43.7-18.5l1.6-.3.2 1s1.7 15.8 22.9 15.8c21.8 0 22.8-15.8 22.8-15.8l.4-1.5 2.1.6c27.1 2.6 46.5 10 46.5 18.7z" fill="#d17490"/><path d="m210.7 200.4c-.4-.9-.7-1.8-.7-2.8 0-5.9 9-11.2 23.3-14.9-1-1.7-1.6-3.6-1.9-5.5l-.2-1-1.6.3c-25.6 3-43.7 10.1-43.7 18.5 0 1 .2 1.9.7 2.8 4.2 8.6 27.8 15.4 57.7 16.9-17.9-3-30.6-8.2-33.6-14.3z" fill="#ffb0cd"/><path d="m278.4 195.5c21 0 22.7-14.6 22.8-15.7-7.1-1.7-14.3-2.8-21.5-3.5l-2.1-.6-.4 1.5s-.7 10.9-13.5 14.6c3.3 2.1 8 3.7 14.7 3.7z" fill="#c16785"/><path d="m150.8 224.1c10.1-11 22.3-19.9 35.8-26.2 4.8 9.7 34.1 17.2 69.4 17.2s64.6-7.5 69.4-17.2c34.5 16.5 57.3 45.4 57.3 80.5 0 76.7-84.6 93.5-105.6 113.7-18.3 17.6-20.7 97.4-21.1 93.8-5.3-41.7-14.3-77.2-21.1-86.3-33.6-44.7-105.6-41.4-105.6-121.2 0-20.7 7.9-39.2 21.5-54.3z" fill="#ef9ab4"/><path d="m326 356.7c-49.7-25.6-113.1 8.7-147.8-63.3-9-18.6-9.9-38.7-4.3-58.2 3.6-11.9 9.1-23.1 16.4-33.2-1.6-1.1-2.8-2.5-3.8-4.2-13.5 6.3-25.7 15.2-35.8 26.2-13.6 15.1-21.5 33.7-21.5 54.3 0 79.9 72 76.5 105.6 121.2 6.8 9.1 15.9 44.6 21.1 86.3.5 3.6 2.9-76.2 21.1-93.8 9.6-9.2 32.3-17.7 54.3-31.5-1.5-1.4-3.4-2.7-5.3-3.8z" fill="#d17490"/><path id="XMLID_7_" d="m170.7 250.9c13.4 7 29 11 42.7 11 3.3 0 6-2.7 6-6s-2.7-6-6-6c-11.7 0-25.6-3.6-37.2-9.7-10.4-5.4-17.8-12.2-19.8-18.1 0-.1 0-.1-.1-.2-.3-.9-.8-1.6-1.4-2.3-1.4 1.4-2.8 2.8-4.2 4.3-1.5 1.7-2.9 3.4-4.3 5.2 4 8 12.4 15.6 24.3 21.8z" fill="#e9e9e9"/><path id="XMLID_9_" d="m382.7 278.3c0-2-.1-4-.2-6-1.6.1-3.2.7-4.3 2-15.7 18.1-31.9 23.7-66.4 23-3.3-.1-6.1 2.6-6.1 5.9s2.6 6.1 5.9 6.1c2 0 3.9.1 5.7.1 31.3 0 49.1-5.9 65-21.8.3-3 .4-6 .4-9.3z" fill="#d17490"/></svg>`
},
{
  name: 'carrot',
  price: 1
},
{
  name: 'apple',
  price: 1
},
{
  name: 'apricon',
  price: 1
},
{
  name: 'avocado',
  price: 1
},
{
  name: 'bananas',
  price: 1
},
{
  name: 'bell pepper',
  price: 1
},
{
  name: 'berry',
  price: 1
},{
  name: 'blueberry',
  price: 1
},
{name: 'egplant',
price: 1
}

]
}



//* <ul class="item-list store--item-list"> */
function storeItemList(){
const itemListUlEl = document.querySelector('.item-list store--item-list')

const storeLiEl = document.createElement('li')

const storedivIconEl = document.createElement('div')
storedivIconEl.setAttribute('class', 'store--item-icon')

const storeimgEl = document.createElement('img')
storeimgEl.setAttribute('src', state.items.photo)
storeimgEl.setAttribute('alt', '')

const storeBnEl = document.createElement('button')
storeBnEl.textContent = 'Add to cart'

storedivIconEl.append(storeimgEl)
storeLiEl.append(storedivIconEl,storeBnEl)
itemListUlEl.append(storeLiEl)


}
//* <ul class="item-list cart--item-list"> */
storeItemList()