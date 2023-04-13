function fun() 
{ 
    let textId = document.getElementById("textId").value; 
    let p = document.getElementById("p").innerHTML = textId.split('').reverse().join('') 
}