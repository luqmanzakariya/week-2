console.log('=================================');
console.log('1. Menyusun Barisan Bintang');
console.log('=================================');

var rows1 =5; // input the number of rows

// do loops to display asterisks in the console.

for (var i=0; i<rows1; i++){
    console.log('*');
}

console.log('')
console.log('=================================');
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping');
console.log('=================================');

var rows2 = 5; // input the number of rows


// do loops to display asterisks in the console.

for (var i=0; i<rows2; i++){
    var bintang ='';
    for (var j=0; j<rows2; j++){
        bintang +='*';
    }
    console.log(bintang);
}

console.log('')
console.log('=================================');
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
console.log('=================================');

var rows3 = 5; // input the number of rows

// do loops to display asterisks in the console.

for (var i=0; i<rows3; i++){
    bintang = '';
    for (var j=0; j<i+1; j++){
        bintang += '*';
    }
    console.log(bintang);
    
}