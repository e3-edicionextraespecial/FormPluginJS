    const send = document.getElementById("contactSend");

    
    
    send.addEventListener("click",(e)=>{
e.preventDefault()


var idClient = 1;
var fullname = document.getElementById("fullNameIDInput").value;
var mail = document.getElementById("mailIDInput").value;
var country = document.getElementById("countryIDInput").value;
var phone = document.getElementById("phoneIDInput").value;
var menssage = document.getElementById("messageIDInput").value;

const contact = {
fullname:fullname,
mail:mail,
country:country,
phone:phone,
menssage:menssage,
idClient:idClient
}
alert("Submit OK see console ID de Cliente "+ idClient)
console.log(contact)

})
    
    