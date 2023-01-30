//Instructions: create a hamburger menu in html and hide it in css.
// create an active nav in media queries


// Navigation bar //

const nav = document.getElementById('nav-bar');
const close = document.getElementById('close');
const bar = document.getElementById('bar');

//click the bar

if(bar){

    bar.addEventListener('click', () =>{
    nav.classList.add('active'); 
    })
    }

// close the bar
    
if(close){

    close.addEventListener('click', () =>{
    nav.classList.remove('active'); 
    })
    }

    // End of Navigation //

    
