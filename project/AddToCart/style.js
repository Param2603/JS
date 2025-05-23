let iconCart = document.querySelector('.icon-cart');
let closeCart =  document.querySelector('.close');
let body = document.querySelector('body');
let listProduct = document.querySelector('.listProduct');

let listProducts = []

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

const addDataToHTML = () => {
    listProducts.innerHTML = "";
    if(listProduct.length > 0){
        listProduct.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item')
            newProduct.innerHTML = `
               <img src="$(product.image)" alt="">
                <h2>$(product.name)</h2>
                <div class="price">$(product.price)</div>
                <button class="addcart">Add To Cart</button>`;
                listProduct.appendChild(newProduct);
        })
    }

}

const initApp = () => {
    fetch('product.json')
    .then(response => response.json())
    .then(data => {
        listProduct = data;
        addDataToHTML();
    })   
}
initApp();