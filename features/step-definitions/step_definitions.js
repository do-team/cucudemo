const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItFriday(today) {
  if (today === 'Friday') {
    return 'TGIF';
  } else {
    return 'Nope';
  }
}

function addition(first, second) {
  return first + second;
}

Given('today is Friday', function () {
  this.today = 'Friday';
});

Given('today is Sunday', function () {
  this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});

Given('a variable set to {int}', function (int) {
  this.variable = int;
});

When('I increment the variable by {int}', function (increment) {
  this.actualResult = addition(this.variable, increment);
});

Then('the variable should contain {int}', function (expectedResult) {
  assert.equal(this.actualResult, expectedResult);
});

When('I multiply the variable by {int}', function (multiplier) {
  this.actualResult = multiplication(this.variable, multiplier)
});
