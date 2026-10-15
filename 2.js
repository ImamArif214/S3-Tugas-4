var motorGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andre',
            LastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentina',
        winner: {
            firstName: 'Cal',
            LastName: 'Cruthlow',
            country: 'UK'
        }    
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            LastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andre',
            LastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

// hasil pengelompokan
var hasil = {};

// Membaca setiap event MotoGP
for (var i = 0; i < motoGP.length; i++) {
    var event = motoGP[i];

    var negara = event.winner.country;
    var nama = event.winner.fristName + ' ' + event.winner.LastName

    // Jika negara belum ada, buat kelompok baru
    if(hasil[negara] === undefined) {
        hasil[negara] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    //Masukkan data sirkuit dan pemenang ke kelompok negara
    hasil[negara].winningCircuits.push({
        name: nama,
        winLocation: event.circuit + ', '+ event.location
    });

    // Tambah jumlah kemenangan
    hasil[negara].totalWin++;
}

//HASIL
console.log(JSON.stringify(hasil,null,2));