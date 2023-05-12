const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.join(__dirname, 'files', 'folder'))) {
    fs.mkdir(path.join(__dirname, 'files', 'folder'), (err) =>{
        if (err) throw err;
        console.log('directory successfully created')
    })
}else {
    console.log('directory already exists')
}

if (fs.existsSync(path.join(__dirname, 'files', 'folder'))) {
    fs.rmdir(path.join(__dirname, 'files', 'folder'), (err) =>{
        if (err) throw err;
        console.log('directory successfully created')
    })
    
}

