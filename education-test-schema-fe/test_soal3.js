let n = 6
let str = ''
for (i = 0; i <= n ; i++) {
    for (j = 1; j <= i; j++) {
        str += '*';
    }
    str += '\n';
}

let str2 = ''
for(i = 1; i <= n; i++){
    for(j = 1; j <= n-i; j++){
        str2 += ' ';
    }
    for(k = 1; k <= i; k++){
        str2 += '*';
    }
    str2 += "\n";
}

console.log(str);
console.log(str2);