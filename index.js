const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordEl =document.getElementById("password-el")
let password2El =document.getElementById("password2-el")
let copy1El =document.getElementById("copy1-el")
let copy2El =document.getElementById("copy2-el")
let password1 = generatePassword()
let password2 = generatePassword()
//console.log(characters.length);

function generatePassword() {
    let pass = ""
    for(let i  = 0; i < 16; i++) {
        let x  = Math.floor(Math.random()*characters.length)
        pass += characters[x]
    }
    return pass
}


function displayPass(){
    generatePassword()
    passwordEl.textContent = password1
    password2El.textContent = password2

}


copy1El.addEventListener("click",function(){
    
    navigator.clipboard.writeText(password1)
     alert("Copied the text: " + password1);
})

copy2El.addEventListener("click",function(){
    navigator.clipboard.writeText(password2)
     alert("Copied the text: " + password2);

})