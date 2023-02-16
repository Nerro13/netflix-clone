const openQBtn = document.querySelectorAll(".open-q");
// console.log(openQBtn)
openQBtn.forEach(function(btn){
    //runs for each + icon
    btn.addEventListener("click", function(event){
        //opens the answer 
        //console.log(event.target)//event bubbling and event capturing
        // console.log("button clicked");
        closeOpenAnswers();
        event.target.parentElement.nextElementSibling.style.display = "block";
        // event.target.parentElement.addEventListener("click", function
    });
});
function closeOpenAnswers(){
    openQBtn.forEach((btn) => {
        btn.parentElement.nextElementSibling.style.display = "none";
    })
    // document.querySelectorAll(".answer").forEach((answer) => {
        // answer.style.display = "none";
    // })
}
// console.log("working")
//event  loop
