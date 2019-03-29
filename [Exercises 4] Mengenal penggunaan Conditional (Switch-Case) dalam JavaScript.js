var tanggal = 31;
var bulan = 12;
var tahun = 2200;


switch(bulan){
  case 1: {var bulan = "Januari";} break;
  case 2: {var bulan = "Februari";} break;
  case 3: {var bulan = "Maret";} break;
  case 4: {var bulan = "April";} break;
  case 5: {var bulan = "Mei";} break;
  case 6: {var bulan = "Juni";} break;
  case 7: {var bulan = "Juli";} break;
  case 8: {var bulan = "Agustus";} break;
  case 9: {var bulan = "September";} break;
  case 10: {var bulan = "Oktober";} break;
  case 11: {var bulan = "November";} break;
  case 12: {var bulan = "Desember";} break;
}

if (tanggal<1 || tanggal > 31){
  console.log("Tanggal Harus Berada Di Kisaran 1-31");
  console.log("Mohon Ubah Tanggal");
}
else if (bulan < 1 || bulan > 12){
  console.log("Bulan Harus Berada Di Kisaran 1-12");
  console.log("Mohon Ubah Bulan");
}
else if (tahun < 1900 || tahun > 2200){
  console.log("Tahun Harus Berada Di Kisaran 1900-2200");
  console.log("Mohon Ubah Tahun");
}
else {
  console.log(tanggal+' '+bulan+' '+tahun);
}


/*
Soal
var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
*/