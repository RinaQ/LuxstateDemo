
// ------------------ Hamburger ---------------
function hamburger() {
    let btn = document.querySelector('.hamburger')
    let nav = document.querySelector('.nav')
    btn.addEventListener('click', function (event) {
            btn.classList.toggle('clicked')
            
            nav.classList.toggle('active')
        });
    window.addEventListener('resize', function(event) {
        btn.classList.remove('clicked')
        nav.classList.remove('active')
    })
}
hamburger()



// ------------------ Box yellow ---------------
function hanndleClickBox(){
    let list = document.querySelectorAll('.howitwork .howitwork__list .howitwork__list-item')
    function removeActiveMenu() {
        list.forEach(function (element, index) {
            element.classList.remove('--yellow')
        })
    }
    list.forEach(function (element, index) {
        element.addEventListener('click', function (event) {
            event.preventDefault();

            removeActiveMenu()
            element.classList.add('--yellow')
        })
    })
}
hanndleClickBox()
// ------------------ Slide meet our agent ---------------
function handleAgent() {
    let blog = document.querySelector('.agent .agent__list .thumbnail-list');
    if (document.contains(blog)) {
        var flktyBlog = new Flickity(blog, {
            // options
            cellAlign: 'center',
            contain: true,
            freeScroll: true,
            wrapAround: true,
            groupCells: 3,
            prevNextButtons: false,
            pageDots: false,
        });
    }

}
handleAgent()

function handleRadioBox() {
    let boxs = document.querySelectorAll('form .tickbox .radiowrap .radio')
    boxs.forEach(function(element, index){
        element.addEventListener('click', function (event){
            // element.preventDefault();
            element.classList.toggle('clicked')
        })
    })
}
handleRadioBox()

function handleCheckBox() {
    let boxs = document.querySelectorAll('form .tickbox .checkboxwrap input')
    function removeClicked() {
        boxs.forEach(function (element, index) {
            element.classList.remove('clicked')
        })
    }
    boxs.forEach(function (element, index) {
        element.addEventListener('click', function (event) {
            // element.preventDefault();
            removeClicked()
            element.classList.toggle('clicked')
        })
    })
}
handleCheckBox()