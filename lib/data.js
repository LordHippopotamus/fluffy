import fs from 'fs';
import path from 'path';

export const getObjects = (filesFolder, query) => {
  const directory = path.join(process.cwd(), 'content/' + filesFolder);
  const fileNames = fs.readdirSync(directory);

  const allData = fileNames.map(el => {
    const fullPath = path.join(directory, el);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
  });

  if (!query) return allData;

  const requestedData = [];

  allData.forEach((el, index) => {
    requestedData[index] = {};
    query.forEach(prop => (requestedData[index][prop] = el[prop]));
  });

  return requestedData;
};
