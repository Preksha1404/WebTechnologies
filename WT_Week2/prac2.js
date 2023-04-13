function func()
        {
                let n1=parseFloat(prompt("Enter number 1:"));
                let op=prompt("Select Operation: + - * / %");
                let n2=parseFloat(prompt("Enter number 2:"));
                if(op==='+')
                {
                    console.log(n1+n2);
                    document.getElementById("opId").innerText=(n1+n2);
                }
                else if(op==='-')
                {
                    document.getElementById("opId").innerText=(n1-n2);
                }
                else if(op==='/')
                {
                    document.getElementById("opId").innerText=(n1/n2);
                }
                else if(op==='*')
                {
                    document.getElementById("opId").innerText=(n1*n2);
                }
                else if(op==='%')
                {
                    document.getElementById("opId").innerText=(n1%n2);
                }
                else 
                {
                    alert("Operation not allowed");
                }
        }