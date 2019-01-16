//JavaScript 


// const button=document.querySelector('.btn');
// const sidebar=document.querySelector(".sidebar");
// button.addEventListener('click',function(){
//     sidebar.classList.toggle("is-hidden");
// });


//jQuery

$(function() {
    $('.btn').on('click',function() {
        $('.sidebar').toggleClass('is-hidden')
    })
});
