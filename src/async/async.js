const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do Something Async"), 3000)
      : reject(new Error("Test Error "));
  });
};

const resolver = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.log(error);
  }
};

console.log("before");
// resolver();
anotherFunction();
console.log("after");
