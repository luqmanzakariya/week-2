function konversiMenit(menit) {
  // you can only write your code here!
  var min = 0;
  var sec = 0;
  
  min = Math.floor(menit/60);
  sec = menit%60;

  if(sec.toString().length == 1){
      sec = "0"+sec;
  }
  return min+':'+sec;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00