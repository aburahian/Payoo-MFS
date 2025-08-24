// share function
function getValue(id){
    const value= parseInt(document.getElementById(id).value)
    return value;
}
function clearInputField(id){
    document.getElementById(id).value=""
    return
}
const transactionsData=[]
function getData(id){
     const data={
                name:id,
                time:new Date().toLocaleTimeString() ,
                data:new Date().toLocaleDateString() 
            }
            transactionsData.push(data)
            return
}
// add money function
document.getElementById("add-money-btn").addEventListener("click",function(e){
            e.preventDefault()
            const pin=1234;
            let totalAmount=parseInt(document.getElementById("total-amount").innerText)
            const bankNumber=document.getElementById("bank-number").value
            const amountNumber=getValue("amount-number")
            const pinNumber=getValue("pin-number")
            if (pinNumber===pin && bankNumber.length===11  && amountNumber>0) {
                document.getElementById("total-amount").innerText=totalAmount+amountNumber
                alert("Amount Added")
                clearInputField("bank-number")
               clearInputField("amount-number")
               clearInputField("pin-number")
               
            } else{
                alert("Invalid Input")
            }
            getData("Add Money");
        })


// cashout function
 document.getElementById("Withdraw-money-btn").addEventListener("click",function(e){
        e.preventDefault()
        const pin=1234;
        const agentNumber=document.getElementById("agent-number").value
        const cashoutAmountNumber=getValue("cashout-amount-number")
        const pinNumber=getValue("cashout-pin-number")
        const totalAmount=parseInt(document.getElementById("total-amount").innerText)
        if(totalAmount===0 || totalAmount<cashoutAmountNumber){
            alert("Unavailable Balance")
            return 
        }else if(pinNumber===pin && agentNumber.length===11 &&cashoutAmountNumber>0){
            document.getElementById("total-amount").innerText=totalAmount-cashoutAmountNumber
            clearInputField("agent-number")
            clearInputField("cashout-amount-number")
            clearInputField("cashout-pin-number")
            alert("Cash Out Successful")
        }
        getData("Withdraw Money");
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
            clearInputField("send-agent-number")
            clearInputField("send-amount-number")
            clearInputField("send-pin-number")
            
            alert("Send Money Successful")
        }
        getData("Send Money");
      })


      document.getElementById("transactions").addEventListener("click",function(){
        const transactionsContainer= document.getElementById("transactions-container")
         transactionsContainer.innerHTML=""
        for(const data of transactionsData){
            const div=document.createElement("div")
            div.innerHTML=` <div class="flex justify-between items-center bg-white p-5 mt-6 rounded-2xl">
            <div class="flex ">
                <div class="p-3 bg-[#f4f5f7] rounded-[100%] ">
                    <img src="./assets/wallet1.png" alt="">
                </div>
                <div class="ml-4">
                    <h1 class="font-semibold">${data.name}</h1>
                    <p class="text-[#494848]">${data.time} ${data.data}</p>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-ellipsis rotate-90"></i>
            </div>
        </div>` 
        transactionsContainer.appendChild(div)
        
        
        }      
      })
// toggle featured
function toggler(id){
    const toggleContainers=document.getElementsByClassName("togglar")
        for(const container of toggleContainers){
            container.style.display="none"
        }
        document.getElementById(id).style.display="block"
        return
}
function togglarSlector(id){
    const btns=document.getElementsByClassName("fetured-btn")
        for(const btn of btns){
            btn.classList.remove("bg-[#0874f20d]","border-[#0874f2]")
            btn.classList.add("border-gray-300") 
        }   
        document.getElementById(id).classList.add("bg-[#0874f20d]","border-[#0874f2]")
         document.getElementById(id).classList.remove("border-gray-300")
}


 document.getElementById("add-money").addEventListener("click",function(){
        toggler("add-money-container")
        togglarSlector("add-money")
       })
document.getElementById("cashout").addEventListener("click",function(){
    toggler("cashout-container")
    togglarSlector("cashout")
})
document.getElementById("transfer-money").addEventListener("click",function(){
   toggler("send-money-container")
   togglarSlector("transfer-money")
})
document.getElementById("bonus").addEventListener("click",function(){
    toggler("bonus-container")
    togglarSlector("bonus")
})
document.getElementById("pay-bill").addEventListener("click",function(){
    toggler("pay-bill-container")
    togglarSlector("pay-bill")
})
document.getElementById("transactions").addEventListener("click",function(){
   toggler("transactions-container")
   togglarSlector("transactions")

})
// logout function
 document.getElementById("logout-btn").addEventListener("click",function(){
            window.location.href="./index.html"
        })