// const fsPromise = require('fs').promises;
const fsPromises = require("fs/promises");

const path = require("path");

const fsOperation = async () => {
  try {
    // Read the file
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      {
        encoding: "utf8",
      }
    );
    console.log(data);
      // Write the file
    const newData = await fsPromises.writeFile(
      path.join(__dirname, "new-file", "write.txt"),
      data
    );
    console.log(newData);
    // Update the file
    const newUpdate = await fsPromises.appendFile(
      path.join(__dirname, "new-file", "write.txt"),
      "\n\nHello, I have been updated"
    );

    console.log(newUpdate);

    //rename the file
    const renameFile = await fsPromises.rename(
        path.join(__dirname, "new-file", "write.txt"),
        path.join(__dirname, "files", "new-write.txt"),
    )

    console.log(renameFile);
        

    //delete the file
    const del = await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"))
    console.log(del);

   
  } catch (error) {
    console.log(error);
  }
};

fsOperation();
