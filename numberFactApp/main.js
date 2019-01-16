    let fact=document.querySelector("#fact");
    let factText=document.querySelector("#factText");
    let numberInput=document.querySelector("#numberInput");
    numberInput.addEventListener('input',getFactFetch);
    let factyear=document.querySelector("#factYear");
    let factYtext=document.querySelector("#factYtext");
    let yearInput=document.querySelector("#yearInput");
    yearInput.addEventListener('input',getFactYear);
    //     AJAX

    // function getFactAjax() {
    //     let number=numberInput.value;
       
    
    //     let xhr=new XMLHttpRequest();
    //     xhr.open('GET','http://numbersapi.com/'+number);


    //     xhr.onload=function(){
    //         if(this.status==200 && number!=''){
    //             fact.style.display="block";
    //             factText.innerHTML=this.responseText;
    //         }
    //     }
    //     xhr.send();
    // }

//     FETCH 

    function getFactFetch() {
        let number=numberInput.value;
        fetch('http://numbersapi.com/' + number)
        .then(res=>res.text())
        .then(data=>{
            if(number!=''){
                fact.style.display = "block";
                factText.innerHTML=data;
            }
            else{
                fact.style.display = "none";
            }
        })
        .catch(err=>{console.log(err)});
    }
    function getFactYear() {
        let year=yearInput.value;
        fetch('http://numbersapi.com/'+year+'/year')
            .then(res => res.text())
            .then(data => {
                if (year != '') {
                    factyear.style.display = "block";
                    factYtext.innerHTML = data;
                }
                else {
                    factyear.style.display = "none";
                }
            })
            .catch(err => { console.log(err) });
    }