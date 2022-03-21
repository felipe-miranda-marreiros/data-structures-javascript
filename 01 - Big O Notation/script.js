const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const large = new Array(30).fill("nemo");

function findNemo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

findNemo(large); //0(n) --> Linear Time;

const boxes = [0, 1, 2, 3, 4, 5];
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); //O(1)
  console.log(boxes[1]); //O(1)
}

logFirstTwoBoxes(boxes); //0(1) - Constant Time

function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //0(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    anotherFunction(); //O(n)
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

funChallenge(); //(O3, 4n)

function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) {
    //O(n)
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }
  for (let j = 0; j < input; j++) {
    //O(n)
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}

// anotherFunChallenge(); // 0(4), 7n

const boxxes = [1, 2, 3, 4, 5];

function logPairs(array) {
  for (let i = 1; i <= array.length; i++) {
    for (let j = 1; j <= array.length; j++) {
      console.log(i, j);
    }
  }
}

//Big O acima é de O(n*n ou n²);