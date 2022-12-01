const fs = require('fs')

let elfs = []

let data = fs.readFileSync('input.txt', 'utf8')

let lines = data.split('\n')

console.log(lines)

let currentCalories = 0

for (let line of lines) {
    if (line != '') {
        currentCalories += parseInt(line)
    } else {
        elfs.push(currentCalories)
        currentCalories = 0
    }
}
//last elf
elfs.push(currentCalories)

let mostCalories = 0
for (let elf of elfs) {
    if (elf > mostCalories) {
        mostCalories = elf
    }
}

console.log(mostCalories)
