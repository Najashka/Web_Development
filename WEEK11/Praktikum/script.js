// Array untuk menyimpan data mahasiswa

let dataMahasiswa = [];



// Function simpan data

function simpanData(){


    let nama = 
    document.getElementById("nama").value;


    let nilai = 
    document.getElementById("nilai").value;



    // Validasi input

    if(nama == "" || nilai == ""){


        alert("Data tidak boleh kosong");

        return;


    }



    // Memasukkan data ke array

    dataMahasiswa.push({

        nama:nama,

        nilai:nilai

    });



    alert("Data berhasil disimpan");



    document.getElementById("nama").value="";

    document.getElementById("nilai").value="";


}




// Function tampilkan data

function tampilkanData(){



    let hasil = "";



    // perulangan array

    for(let i = 0; i < dataMahasiswa.length; i++){



        hasil += `

        <tr>

            <td>
            ${i+1}
            </td>


            <td>
            ${dataMahasiswa[i].nama}
            </td>


            <td>
            ${dataMahasiswa[i].nilai}
            </td>


        </tr>


        `;



    }



    // Manipulasi DOM

    document.getElementById("tabelData")
    .innerHTML = hasil;



}