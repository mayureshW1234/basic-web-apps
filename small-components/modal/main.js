//Java Script Code

//Get Modal
// var modal = document.getElementById("simpleModal");
// //Get open modal button
// var button = document.getElementById("btn-click");
// //Get close button 
// var closeBtn=document.getElementById("close");

// //listen for click
// button.addEventListener('click',openModal); //open
// closeBtn.addEventListener('click',closeModal); //close
// window.addEventListener('click',outSideModal); //outside

// //function to openModal
// function openModal() {
//     modal.style.display='block';
// }
// //Close modal
// function closeModal() {
//     modal.style.display='none';
// }
// //outside of modal
// function outSideModal(e) {
//     if(e.target==modal){
//         modal.style.display = 'none';
//     }
// }



//JQuery Code//

$(function () {
    $("#btn-click").click(function () {
        $("#simpleModal").show();
    });
    $("#close").click(function(){
        $("#simpleModal").hide();
    })
})
