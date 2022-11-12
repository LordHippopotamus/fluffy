import fs from 'fs';

export const getObjects = (filesFolder, query, pagination) => {
  const directory = './content/' + filesFolder;
  const fileNames = fs.readdirSync(directory);

  const data = {};

  data.results = fileNames.map(el => {
    const fullPath = directory + '/' + el;
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
    data.results.forEach(el => {
      const keys = Object.keys(el);
      const extraKeys = keys.filter(key => !query.includes(key));
      extraKeys.forEach(key => delete el[key]);
    });
  }

  return data;
};

export const getObject = (file, query) => {
  const filePath = './content/' + file + '.json';
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  if (query) {
    const keys = Object.keys(data);
    const extraKeys = keys.filter(key => !query.includes(key));
    extraKeys.forEach(key => delete data[key]);
  }

  return data;
};
