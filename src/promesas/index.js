const someThingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey esta correcto!!!");
    } else {
      reject("Upss paso algo!");
    }
  });
};

someThingWillHappen()
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

const someThingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("true!!!!1");
      }, 3000);
    } else {
      const error = new Error("Whoooooop!");
      reject(error);
    }
  });
};

someThingWillHappen2()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.all([someThingWillHappen(), someThingWillHappen2()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
