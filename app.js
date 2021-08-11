// const fss=require('fs')
// fss.writeFileSync('notes.txt','helloooo in node js')
// console.log(fss.readFileSync('notes.txt').toString())
// fss.appendFileSync('notes.txt','   hebaaaaaaaaaaa   saeeddddddd')
// console.log(fss.readFileSync('notes.txt').toString())

// const x=require('./data')
// console.log(x)
// console.log(x(5,6))

// const validator = require('validator')
// console.log(validator.isEmail('h@gmail.com'))

// const chalk = require('chalk');

// console.log(chalk.green('Heba saeed'));


// console.log(process.argv)

// const command=process.argv[1]
// console.log(command)
// if (command==='add')
// console.log('add items')
// if (command==='delete')
// console.log('delete item')

//////11////////

const notes=require('./node')

const yargs=require('yargs')
const { readNode } = require('./node')

yargs.command({
    command:'list',
    describe:'list notes',
    handler:()=>{
        console.log('list note')
    }
})
// console.log(yargs.argv)
// yargs.parse()   not repeat
//////////22222////////


yargs.command({
    command:'delete',
    describe:'delete notes',
    describe:'add notes',
    builder:{
        title:{
            describe:'this is discribe title',
            demandOption:true,
            type:'string'
        }
    },
    handler:()=>{
        console.log('delete note')
    }
})
// console.log(yargs.argv)    //not repeat
// yargs.parse()
///////////333//////////


yargs.command({
    command:'add',
    describe:'add notes',
    builder:{
        title:{
            describe:'this is discribe title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'this is discribe body',
            demandOption:true,
            type:'string'

        }
    },
    handler:(argv)=>{
        // console.log('adddd note')
        notes.add(argv.title,argv.body)

    }
})
yargs.command({
    command:'read',
    describe:'read notes',
    builder:{
        title:{
            describe:'this is discribe title',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        // console.log('read note')
        // notes.readNode('adding notes title' ,readNode)
        notes.readNote(argv.title)
        
    

    }
})

 console.log(yargs.argv)
//yargs.parse()