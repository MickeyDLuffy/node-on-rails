const path = require('path');

let imageType = ['.png'];

function  isImage(filename) {
    let fileType = path.extname(filename);

    if(imageType.includes(fileType)) {
      console.log('corect file format')
    } else {
        console.log('wrong format')
    }
}

isImage('picture.ext');