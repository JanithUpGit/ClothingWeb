
const products = [
    {
        title: "WOMAN DRESSES",
        thumbnail: "../assest/woman/women/dress5.webp",
        link:"../woman/dresses.html",
    },
    {
        title: "WOMEN BOTTOMS",
        thumbnail: "../assest/woman/women/bottom.jpg",
        link:"../woman/bottoms.html",
    },
    {
        title: "WOMEN OUTWARE",
        thumbnail: "../assest/woman/women/(9).jpg",
        link:"../woman/outerwear.html",
    },
    {
        title: "WOMEN TOPS",
        thumbnail: "../assest/woman/women/(8).jpg",
        link:"../woman/tops.html",
    },
    {
        title: "WOMEN ACCESSORIES",
        thumbnail: "../assest/woman/women/accessories7.jpg",
        link:"../woman/accessories.html",
    },
    
];



function createProductCard(product, index) {
    const card = document.createElement('div');
    card.classList.add('catagory');


    card.innerHTML = `
        <div class="catagory-thambnail" onclick="window.open('${product.link}')" >
            <img class="catagory-thambnail-image" src="${product.thumbnail}">
            <div class="category-title">
                <p>${product.title}</p>
            </div>
        </div>
        
    `;

    return card;
}

function renderProducts() {
    const productList = document.querySelector('.product-catagory');

    products.forEach((product, index) => {
        const card = createProductCard(product, index);
        productList.appendChild(card);
    });
    
}


