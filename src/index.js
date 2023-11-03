import "./style.css"

function header(){
    let mainContainer = document.querySelector('.content');
    let header = document.createElement('div');
    let logo = document.createElement('p')
    let nav = document.createElement('ul')
    let navHome = document.createElement('li')
    let navMenu = document.createElement('li');
    let navContact = document.createElement('li');
    header.classList.add('header')
    header.id="header"
    logo.classList.add('logo')
    
    nav.classList.add('nav')
    nav.appendChild(navHome)
    nav.appendChild(navMenu)
    nav.appendChild(navContact)
    logo.textContent="PIZZARIAAA"
    navContact.textContent="Contact"
    navHome.textContent="Home"
    navMenu.textContent="Menu"
    


    header.appendChild(logo)
    header.appendChild(nav)
    mainContainer.appendChild(header)
    console.log(1);
}

header()


function pageControl (){
    let currentPage = "Home"


    let changePage = (newPageName) => {
                            
    }
}


function clearPage () {
    let currentPage = document.querySelector('.content').lastChild 
    while (currentPage.lastChild){
        currentPage.removeChild(currentPage.lastChild);
    }
    currentPage.remove()
}


console.log(document.querySelector('.content').lastChild.id);

