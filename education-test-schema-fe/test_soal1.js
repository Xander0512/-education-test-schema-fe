var data1 = [1,1,2,2,4,1,1]
var temp = new Array(data1.length - 1).fill(0)

for (indeks = 0 ; indeks < data1.length - 1 ; indeks++){
    for (indeks_2 = 0 ; indeks_2 < data1.length ; indeks_2++){
      if (data1[indeks] == data1[indeks_2]){
        temp[indeks] += 1
      }
    }
  }

var indeks_max = 0;
var max = 0

temp.forEach(function(val,indeks){
    if(val > max){
        indeks_max = indeks
        max = val
    }
})

console.log("total data paling banyak keluar adalah " + data1[indeks_max] + " dengan jumlah " + max)