// Variabel
const kampus = "Universitas";

// Fungsi Ubah Judul
function ubahJudul(){

    const judul =
    document.getElementById("judul");

    judul.innerHTML =
    "Selamat Datang di Praktikum JavaScript";

    judul.style.color = "red";
}

// Biodata
function tampilkanBiodata(){

    let nama =
    document.getElementById("nama").value;

    if(nama === ""){

        alert("Nama wajib diisi");
        return;
    }

    document.getElementById("hasilBiodata")
    .innerHTML =
    "Halo, " + nama;
}

// Kalkulator
function jumlahkan(){

    let angka1 =
    parseInt(document.getElementById("angka1").value);

    let angka2 =
    parseInt(document.getElementById("angka2").value);

    let hasil = angka1 + angka2;

    document.getElementById("hasilHitung")
    .innerHTML =
    "Hasil Penjumlahan : " + hasil;
}

// Percabangan
function cekGrade(){

    let nilai =
    document.getElementById("nilai").value;

    let grade;

    if(nilai >= 85){
        grade = "A";
    }
    else if(nilai >= 70){
        grade = "B";
    }
    else if(nilai >= 60){
        grade = "C";
    }
    else{
        grade = "D";
    }

    document.getElementById("hasilGrade")
    .innerHTML =
    "Grade : " + grade;
}

// Perulangan
function tampilkanAngka(){

    let output = "";

    for(let i = 1; i <= 5; i++){

        output += `<li>${i}</li>`;
    }

    document.getElementById("listAngka")
    .innerHTML = output;
}