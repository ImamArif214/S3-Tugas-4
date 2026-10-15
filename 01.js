let std_score = [
    { name : "Andi",
      score : 90
    },
    { name : "Imam",
      score : 95
    },
    { name : "adit",
      score: 80
    }
];
let tertinggi = std_score [0];
for (let i = 1; i < std_score.length; i++) {
    if (std_score[1].score > tertinggi.score){
        tertinggi = std_score[i];
    }
}

console.log ("Nama = ", tertinggi.name)
console.log ("Score = ", tertinggi.score)
