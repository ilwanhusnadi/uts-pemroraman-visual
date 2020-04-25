var lamapinjam;
var totalbayar;

function jumlah() {
    lamapinjam = parseFloat(document.getElementById("lama").value);
    totalbayar = lamapinjam * 500000;
    document.getElementById('total').value = totalbayar;
}