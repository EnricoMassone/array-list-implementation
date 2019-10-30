const { ArrayList } = require("./index");
const { assert } = require("chai");

test("It is possible to create new instances", () => {
  // ACT
  const arrayList = new ArrayList();

  // ASSERT
  assert.exists(arrayList);
});

test("Newly created instance has length 0", () => {
  // ACT
  const arrayList = new ArrayList();

  // ASSERT
  assert.strictEqual(arrayList.length, 0);
});

test("It is possible to push item in empty array", () => {
  // ARRANGE
  const arrayList = new ArrayList();

  // ACT
  arrayList.push("foo");

  // ASSERT
  assert.strictEqual(arrayList.length, 1);
});

test("It is possible to push item in non empty array", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("foo");

  // ACT
  arrayList.push("bar");

  // ASSERT
  assert.strictEqual(arrayList.length, 2);
});

test("It is possible to read array items", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("foo");
  arrayList.push("bar");
  arrayList.push(45);

  // ACT
  const item1 = arrayList.get(0);
  const item2 = arrayList.get(1);
  const item3 = arrayList.get(2);

  // ASSERT
  assert.strictEqual("foo", item1);
  assert.strictEqual("bar", item2);
  assert.strictEqual(45, item3);
});

test("Reading an item having an index less than zero returns undefined", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("foo");
  arrayList.push("bar");
  arrayList.push(45);

  // ACT
  const item = arrayList.get(-1);

  // ASSERT
  assert.isUndefined(item);
});

test("Reading an item having an index equal to length returns undefined", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("foo");
  arrayList.push("bar");
  arrayList.push(45);

  // ACT
  const item = arrayList.get(3);

  // ASSERT
  assert.isUndefined(item);
});

test("Reading an item having an index greater than length returns undefined", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("foo");
  arrayList.push("bar");
  arrayList.push(45);

  // ACT
  const item = arrayList.get(4);

  // ASSERT
  assert.isUndefined(item);
});
