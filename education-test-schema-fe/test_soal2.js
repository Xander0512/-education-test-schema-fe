var input = "hallo anggun selamat datang!";
thereIsNumber = input.match(/\d+/g)
if(thereIsNumber){
    err = thereIsNumber.toString()
    console.log("Sistem kami menolak untuk inputan berisi angka", err)
} else{
    console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan", input);
}