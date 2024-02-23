
const role = prompt("masukan role admin");

if (role === "admin" || role === "spv") {
    console.log("boleh mengaksesnya");
} else {
    console.log("akses ditolak");
}
const balonku = prompt("input warna balon");
switch(balonku) {
    case "merah" : 
    console.log("balon saya");
    break;
    case "hijau" :
        console.log("dor") ;
        break;
    default:
        console.log("bukan balon saya");

}
let peserta = [ "gundul pacul","my love" ]