import fs from 'fs';
import path from 'path';

export const getObjects = (filesFolder, query, pagination) => {
  const directory = path.join(process.cwd(), 'content/' + filesFolder);
  const fileNames = fs.readdirSync(directory);

  const data = {};

  data.results = fileNames.map(el => {
    const fullPath = path.join(directory, el);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
  });

  if (pagination) {
    const { page = 1, limit = 10 } = pagination;
    data.pagination = {
      page,
      count: Math.ceil(data.results.length / limit),
    };
    data.results = data.results.slice(page * limit - limit, page * limit);
  }

  if (query) {
    data.results.forEach((el, index) => {
      query.forEach(prop => (data[index] = { ...data[index], [prop]: el[prop] }));
    });
  }

  return data;
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
