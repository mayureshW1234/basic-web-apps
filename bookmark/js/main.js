//Listen for form to submit
var myForm=document.getElementById('myForm');
//Add Event listner on submit
myForm.addEventListener('submit',saveBookmark);
//SaveBookMark Function
function saveBookmark(e) {


    //To prevent default behaviour of form
    e.preventDefault();


    //get siteName
    var siteName=document.getElementById("siteName").value;
    var siteUrl=document.getElementById("urlName").value;

   

    var bookMark={
       name:siteName,
       url:siteUrl
   }
    if (!formValidation(siteName,siteUrl)) {
    return false;
}

   
    


   //To test if bookmark is null
   if(localStorage.getItem('bookmarks')===null){
       //Init array
       var bookmarks=[];
       //push it into an array
       bookmarks.push(bookMark);
       //set to localStorage
       localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
   }
   else{
       //get bookmarks from localstorage
       var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
       //Add bookmark to an array
       bookmarks.push(bookMark);
       //reset back to localstorage
       localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   }

//    //local storage test
//    localStorage.setItem('test','Hello World'); //To set item to local storage
//    console.log(localStorage.getItem('test')); //To get item from local storage
//    localStorage.removeItem('test'); //To remove item fromlocal storage
//     console.log(localStorage.getItem('test'));

    //clear after submit
    myForm.reset();
    fetchBookmark();

}
function fetchBookmark() {
    //get bookmarks from localstorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //get output id
    var bookmarkResult = document.getElementById("bookmarkResult");
    //Build output
    bookmarkResult.innerHTML='';
    for(var i=0;i<bookmarks.length;i++){
        var name=bookmarks[i].name;
        var url=bookmarks[i].url;
        bookmarkResult.innerHTML += '<div class="well">'+
                                    '<h3>'+name+
                                    ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'+
                                    ' <a class="btn btn-danger" onclick="removeUrl(\''+url+'\')">Delete</a>'
                                    '</h3>'+
                                    '</div>';
        
    }
}
function removeUrl(url) {
    //get bookmarks from localstorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //loop through bookmarks
    for(var i=0;i<bookmarks.length;i++){
        if(bookmarks[i].url==url){
            //remove url
            bookmarks.splice(i,1);
        }
    }
    //reset back to localstorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmark();
}

//Validation
function formValidation(siteName,siteUrl) {
    if (!siteName || !siteUrl) {
        alert("Please fill in the form");
        return false;
    }
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert('Please use a valid URL');
        return false;
    }

    return true;
}