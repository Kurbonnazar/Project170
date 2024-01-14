AFRAME.registerComponent("markerhandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("marker is found")
            this.handleMarkerFound()
        });
        this.el.addEventListener("markerLost",()=>{
            console.log("marker is lost")
            this.handleMarkerLost()
        });
    },
    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="flex"
        var orderButton=document.getElementById("order-button")
        var orderSummaryButton=document.getElementById("order-summary-button")
        orderButton.addEventListener("click",()=>{
            swal ({
                icon:"https://imgur.com/4NZ6uLY",
                title:"Thanks For Order!",
                text:"",
                timer:2000,
                buttons:false
            }) 
        })
        orderSummaryButton.addEventListener("click",()=>{
            swal ({
                icon:"WARNING",
                title:"order summary",
                text:"work in progress"
            })
        })

    },
    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="none"
    }
})