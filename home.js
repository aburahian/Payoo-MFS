// add money function
document.getElementById("add-money-btn").addEventListener("click",function(e){
            e.preventDefault()
            const pin=1234;
            let totalAmount=parseInt(document.getElementById("total-amount").innerText)
            const bankNumber=document.getElementById("bank-number").value
            const amountNumber=parseInt(document.getElementById("amount-number").value)
            const pinNumber=parseInt(document.getElementById("pin-number").value)
            if (pinNumber===pin && bankNumber.length===11  && amountNumber>0) {
                document.getElementById("total-amount").innerText=totalAmount+amountNumber
                alert("Amount Added")
                document.getElementById("bank-number").value=""
                document.getElementById("amount-number").value=""
                document.getElementById("pin-number").value=""
            } else{
                alert("Invalid Input")
            }
        })


// cashout function
 document.getElementById("Withdraw-money-btn").addEventListener("click",function(e){
        e.preventDefault()
        const pin=1234;
        const agentNumber=document.getElementById("agent-number").value
        const cashoutAmountNumber=parseInt(document.getElementById("cashout-amount-number").value)
        const pinNumber=parseInt(document.getElementById("cashout-pin-number").value)
        const totalAmount=parseInt(document.getElementById("total-amount").innerText)
        if(totalAmount===0 || totalAmount<cashoutAmountNumber){
            alert("Unavailable Balance")
            return 
        }else if(pinNumber===pin && agentNumber.length===11 &&cashoutAmountNumber>0){
            document.getElementById("total-amount").innerText=totalAmount-cashoutAmountNumber
            document.getElementById("agent-number").value=""
            document.getElementById("cashout-amount-number").value=""
            document.getElementById("cashout-pin-number").value=""
            alert("Cash Out Successful")
        }
      })

// send money  function
document.getElementById("send-money-btn").addEventListener("click",function(e){
        e.preventDefault()
        const pin=1234;
        const sendagentNumber=document.getElementById("send-agent-number").value
        const sendAmountNumber=parseInt(document.getElementById("send-amount-number").value)
        const pinNumber=parseInt(document.getElementById("send-pin-number").value)
        const totalAmount=parseInt(document.getElementById("total-amount").innerText)
        if(totalAmount===0 || totalAmount<sendAmountNumber){
            alert("Unavailable Balance")
            alert(`Available Balance  ${totalAmount}`)
            return 
        }else if(pinNumber===pin && sendagentNumber.length===11 &&sendAmountNumber>0){
            document.getElementById("total-amount").innerText=totalAmount-sendAmountNumber
            document.getElementById("send-agent-number").value=""
            document.getElementById("send-amount-number").value=""
            document.getElementById("send-pin-number").value=""
            alert("Send Money Successful")
        }
      })
// toggle featured
 document.getElementById("add-money").addEventListener("click",function(){
        document.getElementById("add-money-container").style.display="block"
        document.getElementById("cashout-container").style.display="none"
         document.getElementById("send-money-container").style.display="none"
          document.getElementById("bonus-container").style.display="none"
          document.getElementById("pay-bill-container").style.display="none"
          document.getElementById("transactions-container").style.display="none"
          document.getElementById("latest-payment-container").style.display="none"
        
       })
document.getElementById("cashout").addEventListener("click",function(){
    document.getElementById("cashout-container").style.display="block"
    document.getElementById("add-money-container").style.display="none"
    document.getElementById("send-money-container").style.display="none"
     document.getElementById("bonus-container").style.display="none"
     document.getElementById("pay-bill-container").style.display="none"
     document.getElementById("transactions-container").style.display="none"
     document.getElementById("latest-payment-container").style.display="none"
})
document.getElementById("transfer-money").addEventListener("click",function(){
    document.getElementById("send-money-container").style.display="block"
    document.getElementById("cashout-container").style.display="none"
    document.getElementById("add-money-container").style.display="none"
    document.getElementById("bonus-container").style.display="none"
    document.getElementById("pay-bill-container").style.display="none"
    document.getElementById("transactions-container").style.display="none"
    document.getElementById("latest-payment-container").style.display="none"
})
document.getElementById("bonus").addEventListener("click",function(){
    document.getElementById("bonus-container").style.display="block"
    document.getElementById("send-money-container").style.display="none"
    document.getElementById("cashout-container").style.display="none"
    document.getElementById("add-money-container").style.display="none"
    document.getElementById("pay-bill-container").style.display="none"
    document.getElementById("transactions-container").style.display="none"
    document.getElementById("latest-payment-container").style.display="none"
})
document.getElementById("pay-bill").addEventListener("click",function(){
    document.getElementById("pay-bill-container").style.display="block"
    document.getElementById("bonus-container").style.display="none"
    document.getElementById("send-money-container").style.display="none"
    document.getElementById("cashout-container").style.display="none"
    document.getElementById("add-money-container").style.display="none"
    document.getElementById("transactions-container").style.display="none"
    document.getElementById("latest-payment-container").style.display="none"
})
document.getElementById("transactions").addEventListener("click",function(){
    document.getElementById("transactions-container").style.display="block"
    document.getElementById("pay-bill-container").style.display="none"
    document.getElementById("bonus-container").style.display="none"
    document.getElementById("send-money-container").style.display="none"
    document.getElementById("cashout-container").style.display="none"
    document.getElementById("add-money-container").style.display="none"
    document.getElementById("latest-payment-container").style.display="none"
})
// logout function
 document.getElementById("logout-btn").addEventListener("click",function(){
            window.location.href="./index.html"
        })