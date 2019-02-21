var a = 1;
var b = 2;
var sum = 0;
var temp;

while(b < 4000000){
  if(b%2==0){
    sum += b;
  }
  temp = b;
  b+=a;
  a = temp;
}

document.write(sum);
