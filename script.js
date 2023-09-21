
let a;
let sum=0;
let evens =0;
function random_number(){
a = Math.floor(Math.random() * 51) + 10;
return a;
}

function sum_numbers(){
sum +=a;
return sum;
}

function count_evens(){
     if(a%2==0){
          evens++;
        }
  return evens;
}
let array = new Array();
for(let i=0;i<=5;i++){
random_number();
Array = array.push(a);
sum_numbers();
count_evens();
 }
document.write(`<pre>mảng bao gồm 6 giá trị được tạo ngẫu nhiên trong [10,60]: Array = [${array}]`);
document.write(`<pre>tổng các giá trị của chuỗi là:${sum}`)
document.write(`<pre>số phần tử chẵn là ${evens}`);

