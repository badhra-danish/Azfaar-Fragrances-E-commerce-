/* NAVBAR FOR HEADER */

let navbar = document.querySelector('#bars');
let navlist = document.querySelector('.navi');
let navclose = document.querySelector('.nav-close');
let searchclose = document.querySelector('.search-close');
let searchbar = document.querySelector('.search-box');
let searchbtns = document.querySelector('#search');
let loginclose = document.querySelector('.login-close');
let loginlist = document.querySelector('.login-box');
let loginbtns = document.querySelector('#login');
let cartclose = document.querySelector('.cart-close');
let cartlist = document.querySelector('.cart-box');
let cartbtns = document.querySelector('#cart');
if(navbar){
    navbar.addEventListener('click', () =>{
        navlist.classList.add('left-menu');
    });
};

if(navclose){

    navclose.addEventListener('click', () =>{
        navlist.classList.remove('left-menu');
    });

};

if(searchbtns){
    searchbtns.addEventListener ('click', () => {
        searchbar.classList.add('left-menu');
    });
};

if(searchclose){
    searchclose.addEventListener('click', () =>{
        searchbar.classList.remove('left-menu');
    });
};
if(loginbtns){
    loginbtns.addEventListener ('click', () => {
        loginlist.classList.add('right-menu');
    });
};

if(loginclose){
    loginclose.addEventListener('click', () =>{
     loginlist.classList.remove('right-menu');
    });
};
if(cartbtns){
    cartbtns.addEventListener ('click', () => {
        cartlist.classList.add('right-menu');
    });
};

if(cartclose){
    cartclose.addEventListener('click', () =>{
     cartlist.classList.remove('right-menu');
    });
};