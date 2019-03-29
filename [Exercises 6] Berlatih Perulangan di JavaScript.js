console.log('==========================================');
console.log('1. Melakukan Looping Menggunakan While');
console.log('==========================================');

var i=0;
var j=20;

console.log("LOOPING PERTAMA");
while (i<=20){
  console.log(i+ ' - I love coding');
  i+=2;
}
console.log("LOOPING KEDUA");
while (j>0){
  console.log(j+' - I will become fullstack developer');
  j-=2;
}

console.log('');
console.log('==========================================');
console.log('2. Melakukan Looping Menggunakan For');
console.log('==========================================');
console.log("LOOPING PERTAMA");
for (var i=1; i<=20; i++){
  console.log(i+' - I love coding');
}
console.log("LOOPING KEDUA");
for (var i=20; i>0; i--){
  console.log(i+' - I love coding');
}

console.log('');
console.log('==========================================');
console.log('3. Angka Ganjil dan Genap');
console.log('==========================================');
console.log('a. contoh - ganjil genap');
console.log('------------------------------');
for (var i=1; i<=100; i++){
  console.log('counter sekarang = '+i)
  if(i%2 != 0){
    console.log('GANJIL');
  } else {
    console.log('GENAP');
  }
}
console.log('');
console.log('PERTAMBAHAN COUNTER 2 DENGAN KELIPATAN 3');
console.log('------------------------------');
for (var i=1; i<=100; i+=2){
  console.log('counter sekarang = '+i);
  if (i%3 == 0){
    console.log(i+' Kelipatan 3')
  }
}
console.log('');
console.log('PERTAMBAHAN COUNTER 5 DENGAN KELIPATAN 6');
console.log('------------------------------');
for (var i=1; i<=100; i+=5){
  console.log('counter sekarang = '+i);
  if (i%6 == 0){
    console.log(i+' Kelipatan 6')
  }
}
console.log('');
console.log('PERTAMBAHAN COUNTER 9 DENGAN KELIPATAN 10');
console.log('------------------------------');
for (var i=1; i<=100; i+=9){
  console.log('counter sekarang = '+i);
  if (i%10 == 0){
    console.log(i+' Kelipatan 10')
  }
}