// Manipulasi Array

// 1. Menambah isi Array
// var arr = [];
// arr[0] = "Willi";
// arr[1] = 'Sianturi';
// arr[2] = 'Nike';
// arr[6] = 'Ardilla';

// console.log(arr);

// 2. Menghapus isi Array
// var arr = ['Willi', 'Sianturi', 'Nike'];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ['Willi', 'Sianturi', 'Nike'];

// for(var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + i + ' : ' + arr[i]);
// }

// Method pada array
// 1. Join
// console.log(arr.join(' - '));

// 2. Push & Pop
// arr.push('Ardilla', 'Darwis');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. Unshift & Shift
// arr.unshift('Darwis');
// arr.shift();
// console.log(arr.join(' - '));

// 4. Splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(1, 2, 'Ardilla', 'Darwis');
// console.log(arr.join(' - '));

// 5. Slice
// slice(awal,akhir);
var arr = ['Willi', 'Sianturi', 'Nike', 'Darwis', 'Reisa'];
var arr2 = arr.slice(1,4);
console.log(arr.join(' - '));
console.log(arr2.join(' - '));