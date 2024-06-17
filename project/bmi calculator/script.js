const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result');
    const category=document.querySelector('#category')

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`Please enter a valid height, height cannot be ${height}`
    }else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML= `Please enter a valid weight, weight cannot be ${weight}`
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`
        if(bmi<18.6){
            category.innerHTML='Under Weight'
        }else if(bmi>=18.6 && bmi<=24.9){
            category.innerHTML='Normal Weight'
        }else{
            category.innerHTML='Over Weight'
        }
    }

    
})