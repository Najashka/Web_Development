function tampilkanBiodata(){


    // mengambil data dari input

    let nama = 
    document.getElementById("nama").value;


    let nim = 
    document.getElementById("nim").value;



    // validasi input

    if(nama == "" || nim == ""){

        alert("Nama dan NIM wajib diisi!");

        return;

    }



    // menampilkan data menggunakan DOM

    document.getElementById("hasilNama")
    .innerHTML = 
    "Nama : " + nama;



    document.getElementById("hasilNim")
    .innerHTML = 
    "NIM : " + nim;


}