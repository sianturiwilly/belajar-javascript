var item = prompt('Masukkan nama makanan / minuman : \n (contoh: nasi, daging, susu, hamburger, softdrink)');

switch(item) {
    case 'nasi':
    case 'daging':
    case 'susu':
    case 'roti':
    case 'jeruk':
        alert('Makanan / minuman sehat.');
        break;
    case 'hamburger':
    case 'softdrink':
    case 'pizza':
    case 'kentang goreng':
        alert('Makanan / minuman tidak sehat.');
    default:
        alert('Anda memasukkan makanan / minuman yang salah.');
        break;
}