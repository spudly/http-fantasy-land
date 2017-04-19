import db from 'mime-db';

const getMimeTypesByExtension = () => {
  const types = {};

  Object.keys(db).forEach(type => {
    const typeData = db[type];
    if (typeData.extensions) {
      typeData.extensions.forEach(ext => {
        types[ext] = type;
      });
    }
  });

  return types;
};

export default getMimeTypesByExtension();
