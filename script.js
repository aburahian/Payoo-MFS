document.getElementById("btn-login").addEventListener("click",function(e){
        e.preventDefault()
        const number=12345678901;
        const pin=1234; 
        const mobileNumberStr=document.getElementById("mobile-number").value
        const mobileNumber=parseInt(mobileNumberStr)
        const pinNumberStr=document.getElementById("pin-number").value
        const pinNumber=parseInt(pinNumberStr)
        if(mobileNumber===number && pinNumber===pin){
            window.location.href="./home.html"
            
        }else{
            alert("Invalid")
        }
        
    })
