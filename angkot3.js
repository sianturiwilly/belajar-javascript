var jlmAngkot = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jlmAngkot; noAngkot++) {

    if(noAngkot <= 6) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}