let fname = document.querySelector("#fname")
let lname = document.querySelector("#lname")
let submit = document.querySelector("#btn")

submit.addEventListener('click', ()=>{
    if(fname.value === "Mohiuddin" && lname.value === 'Tuhin'){
        alert("Enter your name not my boss name..")
    }else if(fname.value === "mohiuddin" && lname.value === 'tuhin'){
        alert("Enter your name not my boss name..")
    }else if(fname.value === "tuhin" && lname.value === "mohiuddin"){
        alert("Not that smart eh")
    }else if(fname.value === "Tuhin" && lname.value === "Mohiuddin"){
        alert("Hay reh")
    }else if(fname.value === "MOHIUDDIN" && lname.value === "TUHIN"){
        alert("you clever bitch")
    }else if(fname.value === "মহিউদ্দিন" && lname.value === "তুহিন"){
        alert("Enter your name bitch")
    }else if(fname.value === "তুহিন" && lname.value === "মহিউদ্দিন"){
        alert("Sorry babe not today!")
    }
    else{
        document.write("fuck you " + fname.value +" "+ lname.value )
    }
})


