const fs=require('fs')
const addNotes=(title,body)=>{
    const notes=loadNotes()
    notes.push(
        {
            title:title,
        body:body
    }
    )
    saveNotes(notes)
}
const loadNotes=()=>{
    try{const data =fs.readFileSync('notes.json').toString()
return JSON.parse(data)
}
catch(e){
    return []
}

}

const saveNotes=(notes)=>{
    const saveData=JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
}


//read
const readNode=(title)=>{
    const notes= loadNotes()
    const notee=notes.find((note)=>{
        return note.title===title
    })
    if(notee){
        console.log(notee)
        console.log(notee.title)
        console.log(notee.body)

    }
}


module.exports={
    add:addNotes,
    readNode:readNode
}