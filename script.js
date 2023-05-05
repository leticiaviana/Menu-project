const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        price: 15.99,
        img: "",
        desc: `I'm baby woke milkshake wolf bitters live-edge 
        blue bottle, hammok freegan copper mug whatever cold pressed`,
    },  
    {
        id: 2,
        title: "buttermilk pancakes2",
        price: 15.99,
        img: "",
        desc: `I'm baby woke milkshake wolf bitters live-edge 
        blue bottle, hammok freegan copper mug whatever cold pressed`,
    },  
    {
        id: 3,
        title: "buttermilk pancakes3",
        price: 15.99,
        img: "",
        desc: `I'm baby woke milkshake wolf bitters live-edge 
        blue bottle, hammok freegan copper mug whatever cold pressed`,
    },
    {
        id: 4,
        title: "buttermilk pancakes4",
        price: 15.99,
        img: "",
        desc: `I'm baby woke milkshake wolf bitters live-edge 
        blue bottle, hammok freegan copper mug whatever cold pressed`,
    },
    {
        id: 5,
        title: "buttermilk pancakes5",
        price: 15.99,
        img: "",
        desc: `I'm baby woke milkshake wolf bitters live-edge 
        blue bottle, hammok freegan copper mug whatever cold pressed`,
    },
];

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
})

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        // console.log(item);
        return `<article class="menu-item">
        <img src="${item.img}" class="phtoto" alt="${item.title}">
        <div class=" ">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>

        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}