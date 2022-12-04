const fs = require('fs');

const folderName = './src/resolvers/';
const commonSchemaPath = './src/common.graphql';

const schemaPath = 'lib/generated/schema.graphql';

const commonSchemaContent = fs.readFileSync(commonSchemaPath, {
  encoding: 'utf-8',
});

fs.writeFileSync(schemaPath, commonSchemaContent);

fs.readdir(folderName, (err, files) => {
  files.forEach((fileName) => {
    const fileContent = fs.readFileSync(folderName + fileName, {
      encoding: 'utf-8',
    });
    fs.appendFileSync(schemaPath, fileContent);
  });
});
