// $(document).ready(function(){
//     $('.search').on('keyup',function(){
//         var searchItem=$(this).val().toLowerCase();
//         $('.table tbody tr').each(function(){
//             var lineStr=$(this).text().toLowerCase();
//             if(lineStr.indexOf(searchItem) === -1){
//                 $(this).hide();
//             }
//             else{
//                 $(this).show();
//             }
//         });
//     });
// });
// function addSomething(){  //normal function
//     var num=1;
//     var num2=2;
//     var add=num+num2;
//     alert(add);
// }
// addSomething();

// function subSomething(num1,num2){  //passing an argument to the function
//     var sub=num1-num2;
//     alert(sub);
// }
// subSomething(3,2);

// var num1=11;
// var num2=4;
// num1+=num2;
// document.write(num1);
// var mul=5*2+2;
// document.write(mul);

// var fruit="mango";
// if(fruit=="apple"){
//     document.write("Its an apple");
// }
// else if(fruit=="mango"){
//     document.write("Its a mango");
// }
// else{
//     document.write("Its something else");
// }

// var i=1;
// while(i<5){
//     document.write(i);
//     i++;
// }
// for(var j=1;j<6;j++){
//     document.write("\n");
//     document.write(j);
// }

// function batting(player,distance){
//     if(distance<=350){
//         document.write(player+"Hit the ball at"+distance);
//     }
//     else if(distance>=350){
//         document.write(player+ "Hit the ball more than 350");
//     }
// }
// batting("Steve",349);
// batting("Rahul",360);

// function doSomething(x,y){
//     result=x*y;
//     return result;
// }
// var theResult=doSomething(4,5);
// document.write(theResult);

// function showSomething(){
//     var name="Ram"; //localn variable accessible only inside the function
//     name2="Raman"; //global variable accessible from anywhere in the program code
//     document.write(name);
// }
// showSomething(); //function call
// document.write(name2); //can access outside of the function

// var arr1=["abc","bcd","pqr","xyz"];
// document.write(arr1[0]);
// document.write(arr1[1]);
// arr1.push("ram");
// document.write(arr1);
// arr1[0]="raman";
// document.write(arr1);
var obj ={
    color:"green",
    height:5,
    weight:30,
    add:function(){
        document.write("Hello")
    }
};
// document.write(obj.color);
// document.write(obj.height);
// document.write(obj.weight);
// document.write(obj.add());
var addHeight=obj.height+5;
document.write(addHeight);
if(obj.color=="green"){
    obj.add();
}