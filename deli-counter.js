// 1. Write your functions here

const katzDeli = ["Ada", "Grace", "Kent"];

function line(katzDeli) {
  const deliLine = katzDeli.map(function (customer, index) {
    return `${index + 1}. ${customer}`;
  });
  if (deliLine) {
    console.log(`The line is currently: ` + deliLine.join(" "));
  } else {
    console.log(`The line is currently empty.`);
  }
}

function takeANumber(katzDeli, newCustomer) {
  katzDeli.push(newCustomer);
  console.log(
    `Welcome, ${newCustomer}. You are number ${katzDeli.length} in line.`
  );
}

function nowServing() {
  let firstPerson = katzDeli.shift();
  if (firstPerson) {
    console.log(`Currently serving ${firstPerson}.`);
  } else {
    console.log(`There is nobody waiting to be served!`);
  }
}

// 2. Example Usage

// const katzDeli = [];

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli); //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli); //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"
