const person={
    name:heba,
    age:24
}

const personJson=JSON.stringify(person)
console.log(personJson)

const fs=require('fs')
fs.writeFileSync('txt.json',personJson)
const dataBuffer=fs.readFileSync(txt.json).toString()
console.log(dataBuffer)

const personObject=JSON.parse(personJson)
console.log(personObject)
