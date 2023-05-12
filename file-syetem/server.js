const fs = require('fs');
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


// writting File

fs.writeFile(
    path.join(__dirname, 'files', 'new.txt'),
    'hello, i am writting  you',
    (err) => {
        if (err) throw err;
        console.log('write file completed successfully');

        fs.appendFile(
            path.join(__dirname, 'files', 'new.txt'),
            '\n\n I have been updated',
            (err) => {
                if (err) throw err;
                console.log('append file completed successfully');


                fs.rename(
                    path.join(__dirname, 'files', 'new.txt'),
                    path.join(__dirname, 'files', 'final.txt'),
                    (err) => {
                        if (err) throw err;
                        console.log('Rename completed successfully');
                    }
                    )
            }
        )
    }
    )

    fs.appendFile(
        path.join(__dirname, 'files', 'index.js'),
        "console.log ('hello')",
        (err) => {
            if (err) throw err;
            console.log('update finished')
        }

    )

process.on('uncaughtException', (err) => {
    console.error(`'There was an error processing the data: '${err}`);
    process.exit(1);
})