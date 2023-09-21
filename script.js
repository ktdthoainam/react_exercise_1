
let a;
let sum=0;
let evens =0;
let count=0;
function random_number(){
a = Math.floor(Math.random() * 51) + 10;
return a;
}

function check_prime(){
  for( let j=2;j<a;j++ ){
    if(a%j==0){
      return false;
    }
  }
  return true;
}
function count_prime()
{
  if(check_prime(true)){
    return count++;
  }
  return count;
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
count_prime();
 }
document.write(`<pre>mảng bao gồm 6 giá trị được tạo ngẫu nhiên trong [10,60]: Array = [${array}]`);
document.write(`<pre>số phần tử chẵn là ${evens}`);
document.write(`<pre>tổng các giá trị của chuỗi là:${sum}`)
document.write( `<pre>số nguyên tố có trong mảng : ${count}`)

