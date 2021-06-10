const fs = require('fs');

const text = 'Vanderi vandera a a a';

// write file all at once
fs.open('demo.txt', 'a', (err, fd) => {
    if(err) throw err;

    fs.write(fd, text, (err, bytes) => {
        if(err) throw err;
        console.log(`Bytes ${bytes}`);
    });


})

// write to file one line at a time;

const text2 = `Ullamco dolor sit excepteur duis dolor quis velit fugiat anim. 
Irure officia consequat elit reprehenderit culpa deserunt. Cillum esse proident c
ommodo sit officia laborum duis.THe lord is the rock;
  In him i hide, shelter in the time of storm
`;
// writefile clears content of file and add new text
/*fs.writeFile('demo.txt', text2, (err) => {
    if(err) throw err;

    console.log('File written succesfully');

    fs.readFile('demo.txt', (err, data) => {
        if(err) throw err;

        console.log(data);
    })
})*/

// appends the new text to end of file
fs.appendFile('demo.txt', text2, (err) => {
    if(err) throw err;

    console.log('File written succesfully');

    fs.readFile('demo.txt', (err, data) => {
        if(err) throw err;

        console.log(data);
    })
})