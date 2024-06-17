const body=document.querySelector('body')
const button=document.querySelector('button')

button.forEach(function(button) {
   button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id==='grey'){
        body.style.background=e.target.id;
    }

    if(e.target.id==='white'){
        body.style.background=e.target.id;
    }

    if(e.target.id==='greenyellow'){
        body.style.background=e.target.id;
    }

    if(e.target.id==='Yellow'){
        body.style.background=e.target.id;
    }
}) 
});
