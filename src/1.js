const getRandomNumber = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomBoolean = () => {
  return Math.round(Math.random()) === 1;
};

const getRandomObject = () => {
  const obj = {};
  for (let i = 0; i < 5; i++) {
    obj[`key_${i}`] = getRandomString();
  }
  return obj;
};

const getRandomArray = () => {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(getRandomNumber());
  }
  return arr;
};

const getRandomString = () => {
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < 5; i++) {
    randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return randomString;
};
