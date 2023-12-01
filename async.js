// asynchronous javascript

// callback function
function mainF(callback) {
  console.log("log from main function. after that callback will execute");
  callback();
}

function callbackF(callback) {
  console.log(
    "this is callback function and it will execute after main function"
  );
  callback();
}

function anotherCBF() {
  console.log(
    "this is another callback function and it will execute after callbackF"
  );
}

mainF(function () {
  callbackF(function () {
    anotherCBF();
  });
});

// Promise
const done = false;
function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = "message";
      if (done) {
        resolve(data);
      } else {
        reject(new Error("Error message"));
      }
    }, 1000);
  });
}

fetchData()
  .then(function (result) {
    console.log(result);
    const myMessage = "This is my " + result;
    return myMessage;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error.message);
  });

// fetch data with promise
function fetchData() {
  return new Promise(function (resolve, reject) {
    resolve(fetch("https://jsonplaceholder.typicode.com/posts/1"));
  });
}

fetchData()
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error.message);
  });

function fetchUser() {
  return new Promise(function (resolve, reject) {
    resolve(fetch("https://jsonplaceholder.typicode.com/users/1"));
  });
}

//Promise.all
function fetchPost() {
  return new Promise(function (resolve, reject) {
    resolve(fetch("https://jsonplaceholder.typicode.com/posts/1"));
  });
}

const promise1 = fetchUser();
const promise2 = fetchPost();

Promise.all([promise1, promise2])
  .then(function ([user, post]) {
    const promise1 = user.json();
    const promise2 = post.json();
    return Promise.all([promise1, promise2]);
  })
  .then(function ([user, post]) {
    console.log(user);
    console.log(post);
  })
  .catch(function (error) {
    console.log(error.message);
  });

// async await to fetch data
async function fetchData() {
  try {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await userResponse.json();
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const post = await postResponse.json();
    console.log(user);
    console.log(post);
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();

// callback function with promise version
function firstF() {
  return "this is first function";
}

function secondF() {
  return "this is second function";
}

function thirdF() {
  return "this is third function";
}

function mainF() {
  return new Promise(function (resolve, reject) {
    resolve(firstF());
  });
}

mainF()
  .then(function (result) {
    console.log(result);
    return secondF();
  })
  .then(function (result) {
    console.log(result);
    return thirdF();
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error.message);
  });
