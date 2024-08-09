// Things to add in this page 
// 3. smooth scolling 
// 4. maybe add cloud icon based on climate on the client side


// change in greetings
let greetings = document.getElementById('intro')
console.log(greetings)
//greetings change based on time
    const time = new Date().getHours();
    if(time>= 6 && time <12){
        greetings.textContent = "Good Morning !!!!"
    }
    else if(time >=12 && time <18){ 
    greetings.textContent = "Good afternoon !!!"
    }
    else if(time >=18) {
        greetings.textContent = "Good evening !!"
    }
    else{
        console.log("error in changing ")
    }
    console.log(time)
