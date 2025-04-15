
const products = [
    {
        title: "TOP SELLER",
        thumbnail: "../assest/bestsellers/ (1).jpg",
        link:"",
    },
    {
        title: "SELLER",
        thumbnail: "../assest/bestsellers/ (1).webp",
        link:"",
    },
    {
        title: "SELLERE",
        thumbnail: "../assest/bestsellers/ (2).jpg",
        link:"",
    },
    {
        title: "SELLER",
        thumbnail: "../assest/bestsellers/ (2).webp",
        link:"",
    },
    {
        title: "SELLER",
        thumbnail: "../assest/bestsellers/ (4).jpg",
        link:"",
    },
    
];



function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('category');


    card.innerHTML = `
       <div class="category-thambnail" onclick="window.location.href ='${product.link}';" >
            <img class="category-thambnail-image" src="${product.thumbnail}">
            <div class="category-title">
                <p>${product.title}</p>
            </div>
        </div>
        
    `;

    return card;
}

function renderProducts() {
    const productList = document.querySelector('.product-category');

    products.forEach((product) => {
        const card = createProductCard(product);
        productList.appendChild(card);
    });
    
}


