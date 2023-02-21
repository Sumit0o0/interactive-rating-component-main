
let ratingBtn = document.querySelectorAll(".ratingBtn");
let submitBtn = document.querySelector(".sumbitBtn").firstChild;
let afterRatingCard = document.querySelector(".afterRatingCard");
let beforRatingCard = document.querySelector(".beforRatingCard");
let totalStarbyUser = document.getElementById("totalStarbyUser");

    let ratingBtn0 = ()=>{ 
        ratingBtn[0].style.backgroundColor = "hsl(216, 12%, 54%)"
        totalStarbyUser.innerHTML = ratingBtn[0].textContent;

        SubmitFunction();
    }
    let ratingBtn1 = ()=>{ 
        ratingBtn[0].style.backgroundColor = "hsl(216, 12%, 54%)"
        ratingBtn[1].style.backgroundColor = "hsl(216, 12%, 54%)"
        totalStarbyUser.innerHTML = ratingBtn[1].textContent;

        SubmitFunction();
    }
    let ratingBtn2 = ()=>{ 
        ratingBtn[0].style.backgroundColor = "hsl(216, 12%, 54%)"
        ratingBtn[1].style.backgroundColor = "hsl(216, 12%, 54%)"
        ratingBtn[2].style.backgroundColor = "hsl(216, 12%, 54%)"
        totalStarbyUser.innerHTML = ratingBtn[2].textContent;

        SubmitFunction();
    }
    let ratingBtn3 = ()=>{ 
        ratingBtn[0].style.backgroundColor = "hsl(216, 12%, 54%)"
        ratingBtn[1].style.backgroundColor = "hsl(216, 12%, 54%)"
        ratingBtn[2].style.backgroundColor = "hsl(216, 12%, 54%)"
        ratingBtn[3].style.backgroundColor = "hsl(216, 12%, 54%)"
        totalStarbyUser.innerHTML = ratingBtn[3].textContent;

        SubmitFunction();
    }
    let ratingBtn4 = ()=>{ 
        ratingBtn[0].style.backgroundColor = "hsl(216, 12%, 54%)"
        ratingBtn[1].style.backgroundColor = "hsl(216, 12%, 54%)"
        ratingBtn[2].style.backgroundColor = "hsl(216, 12%, 54%)"
        ratingBtn[3].style.backgroundColor = "hsl(216, 12%, 54%)"
        ratingBtn[4].style.backgroundColor = "hsl(216, 12%, 54%)"
        totalStarbyUser.innerHTML = ratingBtn[4].textContent;
        
        SubmitFunction();
    }

    ratingBtn[0].addEventListener('click', ratingBtn0);
    ratingBtn[1].addEventListener('click', ratingBtn1);
    ratingBtn[2].addEventListener('click', ratingBtn2);
    ratingBtn[3].addEventListener('click', ratingBtn3);
    ratingBtn[4].addEventListener('click', ratingBtn4);


    const SubmitFunction =  ()=>{
        submitBtn.addEventListener('click', ()=>{
            setTimeout(displaySubmit,450)
            errorTimeout()
        })
        function displaySubmit(){
            beforRatingCard.style.display = "none";
            afterRatingCard.style.display = "block";
        } 
    }


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





