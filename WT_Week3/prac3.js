function fun() { 
    var i = limit1; 
    var j = limit2; 
    limit1 = document.getElementById('limit1').value;  
    limit2 = document.getElementById('limit2').value; 
    for (i = limit1; i <= limit2; i++) 
    {  
        count = 0; 
        for (j = 1; j <= i; j++)  
        {  
            if (i % j == 0) { 
            count++; } 
        } 
        if(count==2){     
            document.getElementById("result").insertAdjacentHTML('beforeend',i + '<br>'); 
        } 
    } 
}