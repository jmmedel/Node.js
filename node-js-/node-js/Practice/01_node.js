console.log("Hello Saif, You are learning Node.js!");
console.log("Hello world this is nodejs")

setTimeout(function(){

    console.log("Three seconds \n have passed!");

},3000);


setTimeout

setTimeout(function(){
    console.log("3seconds");

},3000);

setTimeout

//get the dirname 
console.log(__dirname);
// get the name of fule
console.log(__filename);

//this is function time 
var time = 0;
var timer =  setInterval(function(){
    time += 2;
    console.log(time + "Second have passed");
    if(time > 5){
        clearInterval(timer);
    }
},2000);
setTimeout


