const menu = [
    {
        id: 1,
        title: "French Fries",
        price: 3.99,
        category:"fries",
        img: "./images/item-1.jpeg",
        desc: `Crispy golden fries, lightly salted to perfection.`,
    },  
    {
        id: 2,
        title: "Classic Cheeseburger",
        price: 8.99,
        category:"Burguer",
        img: "./images/item-2.jpg",
        desc: `Juicy beef patty with melted cheddar cheese, topped with lettuce, tomato, 
        and pickles. Served on a toasted bun.`,
    },  
    {
        id: 3,
        title: "Bacon Cheeseburger",
        price: 10.99,
        category:"Burguer",
        img: "/images/item-3.jpg",
        desc: `Savory beef patty with crispy bacon and melted cheddar cheese, topped with lettuce, 
        tomato, and pickles. Served on a toasted bun.`,
    },
    {
        id: 4,
        title: "Australian double cheese",
        price: 12.99,
        category:"Burguer",
        img: "/images/item-4.webp",
        desc: `Two juicy beef patties with melted cheddar cheese, topped with lettuce, 
        tomato, and pickles, served on a toasted Australian-style bun. `,
    },
    {
        id: 5,
        title: "Australian Double Cheese Combo",
        category:"Combos",
        price: 14.99,
        img: "/images/item-5.jpg",
        desc: `Two juicy beef patties with melted cheddar cheese, topped with lettuce, 
        tomato, and pickles, served on a toasted Australian-style bun. Comes with a side of fries and a drink of your choice.`,
    },
    {
        id: 6,
        title: "Cheeseburger Combo",
        category:"Combos",
        price: 9.99,
        img: "/images/item-6.jpg",
        desc: `Juicy beef patty with melted cheddar cheese, topped with lettuce, 
        tomato, and pickles. Served on a toasted bun with a side of fries and a drink of your choice.`,
    },
    {
        id: 7,
        title: "Calabreza Pizza",
        category:"Pizza",
        price: 14.99,
        img: "/images/item-7.jpg",
        desc: `Thin-crust pizza with tomato sauce, mozzarella cheese,
         spicy Calabrian salami, sliced red onions, and black olives.`,
    },
    {
        id: 8,
        title: "Mozzarella Pizza",
        category:"Pizza",
        price: 10.99,
        img: "/images/item-8.jpg",
        desc: `Traditional thin-crust pizza with tomato sauce and mozzarella cheese.`,
    },
    {
        id: 9,
        title: "Strawberry Milk Shake",
        category:"shakes",
        price: 5.99,
        img: "/images/item-9.jpeg",
        desc: `Creamy vanilla ice cream blended with sweet, ripe strawberries, topped with whipped cream and a cherry on top.`,
    },
    {
        id: 10,
        title: "Chocolate Milk Shake",
        category:"shakes",
        price: 5.99,
        img: "/images/item-10.webp",
        desc: `Rich and creamy vanilla ice cream blended with smooth, chocolate syrup, topped with whipped cream and a cherry on top.`,
    },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    displayMenuButtons();
    
});


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}">
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

function displayMenuButtons(){
    const categories = menu.reduce((values, item) =>{
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values
    },["all"]);
    const categoryBtns = categories.map((category) =>{
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');


    filterBtns.forEach(function(btn){
        btn.addEventListener("click",function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    return menuItem;
                }
            });
            if(category === 'all'){
                displayMenuItems(menu)
            } else{
                displayMenuItems(menuCategory)
            }
        });
    });

}