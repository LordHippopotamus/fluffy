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
    query.forEach(prop => (requestedData[index] = { ...requestedData[index], [prop]: el[prop] }));
  });

  return requestedData;
};

export const getObject = (file, query) => {
  const filePath = path.join(process.cwd(), 'content/' + file + '.json');
  const allDataContent = fs.readFileSync(filePath, 'utf8');
  const allData = JSON.parse(allDataContent);

  if (!query) return allData;

  const requestedData = {};

  query.forEach(prop => (requestedData[prop] = allData[prop]));

  return requestedData;
};
