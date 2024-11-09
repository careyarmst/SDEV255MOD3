const fs = require('fs')


// reading files
//fs.readFile('./random.txt', (err, data) => {
  //  if (err) {
    //    console.log(err)
      //  }
    //console.log(data.toString()) 
//})

//console.log('last line')

// writing files
//fs.writeFile('./random.txt', 'ohmytexthello world is boring', () => {
  //  console.log('file was written')
//})

//fs.writeFile('./random2.txt', 'there is a cat on the floor', () => {
 //   console.log('file was written')
//})


// directories
if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder created') 
})
} else {
   fs.rmdir('./assets', (err)=>{
    if (err){
        console.log(err)
    }
    console.log('folder deleted')
   })
}

//deleting files
if (fs.existsSync('./deleteme.txt')) {
    fs.unlink('./deleteme.txt', (err) => {
        if (err) {
            console.log(err)
       } console.log('file deleted')
    })
}



