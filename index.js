
let ratingBtn = document.querySelectorAll(".rLabel");
let rRadio = document.querySelectorAll(".rRadio")
let submitBtn = document.querySelector(".sumbitBtn").firstChild;
let afterRatingCard = document.querySelector(".afterRatingCard");
let beforRatingCard = document.querySelector(".beforRatingCard");
let totalStarbyUser = document.getElementById("totalStarbyUser");
let finalrate = 0;

console.log(ratingBtn[2].textContent);

/*********************************************************************************/
    rRadio.forEach((rating)=>{
        rating.addEventListener("click",()=>{
            finalrate = rating.value;
            ratingBtn[finalrate-1].style.backgroundColor = "hsl(216, 12%, 54%)";
            SubmitFunction();
            
        })
    })

    
    const SubmitFunction =  ()=>{
        submitBtn.addEventListener('click', ()=>{
            setTimeout(displaySubmit,350)
            errorTimeout()
        })
        function displaySubmit(){
            beforRatingCard.style.display = "none";
            afterRatingCard.style.display = "block";
            totalStarbyUser.innerHTML = finalrate

        } 
    }
/*********************************************************************************/

    submitBtn.addEventListener('click', ()=>{
       setTimeout(errorFun, 500)
       setTimeout(errorTimeout, 3500)
    })


    function errorFun(){
        document.getElementById("submiterror").style.display = "block"
        document.getElementById("submiterror").textContent = "Please Select rating!"
    }

    function errorTimeout(){
        document.getElementById("submiterror").textContent = "";
    }





