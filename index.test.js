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

test("Getting from an empty array list returns undefined", () => {
  // ARRANGE
  const arrayList = new ArrayList();

  // ACT
  const item1 = arrayList.get(-1);
  const item2 = arrayList.get(0);
  const item3 = arrayList.get(1);

  // ASSERT
  assert.isUndefined(item1);
  assert.isUndefined(item2);
  assert.isUndefined(item3);
});

test("Calling get by passing a non integer parameter throws a TypeError", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("foo");
  arrayList.push("bar");

  // ACT
  try {
    arrayList.get("not an integer....");
  } catch (error) {
    assert.exists(error);
    assert.instanceOf(error, TypeError);
    return;
  }

  throw new Error("Should not reach here");
});

test("Calling pop on an empty array returns undefined", () => {
  // ARRANGE
  const arrayList = new ArrayList();

  // ACT
  const item = arrayList.pop();

  // ASSERT
  assert.isUndefined(item);
  assert.strictEqual(arrayList.length, 0);
});

test("Calling pop removes only the last item in the array", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("item");
  arrayList.push(true);
  arrayList.push(13);

  // ACT
  const item = arrayList.pop();

  // ASSERT
  assert.strictEqual(item, 13);
  assert.strictEqual(arrayList.length, 2);
  assert.strictEqual(arrayList.get(0), "item");
  assert.strictEqual(arrayList.get(1), true);
  assert.isUndefined(arrayList.get(2));
});

test("Deleting item with index less than zero does nothing", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("item");
  arrayList.push(true);
  arrayList.push(13);

  // ACT
  const result = arrayList.delete(-1);

  // ASSERT
  assert.isUndefined(result);

  assert.strictEqual(arrayList.length, 3);
  assert.strictEqual(arrayList.get(0), "item");
  assert.strictEqual(arrayList.get(1), true);
  assert.strictEqual(arrayList.get(2), 13);
});

test("Deleting item with index equal to length does nothing", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("item");
  arrayList.push(true);
  arrayList.push(13);

  // ACT
  const result = arrayList.delete(3);

  // ASSERT
  assert.isUndefined(result);

  assert.strictEqual(arrayList.length, 3);
  assert.strictEqual(arrayList.get(0), "item");
  assert.strictEqual(arrayList.get(1), true);
  assert.strictEqual(arrayList.get(2), 13);
});

test("Deleting item with index greater than length does nothing", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("item");
  arrayList.push(true);
  arrayList.push(13);

  // ACT
  const result = arrayList.delete(4);

  // ASSERT
  assert.isUndefined(result);

  assert.strictEqual(arrayList.length, 3);
  assert.strictEqual(arrayList.get(0), "item");
  assert.strictEqual(arrayList.get(1), true);
  assert.strictEqual(arrayList.get(2), 13);
});

test("Deleting the only item in one item array empties the array", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("item");

  // ACT
  const result = arrayList.delete(0);

  // ASSERT
  assert.strictEqual(result, "item");

  assert.strictEqual(arrayList.length, 0);
  assert.isUndefined(arrayList.get(0));
});

test("It is possible to delete the first item", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("item");
  arrayList.push(true);
  arrayList.push(13);

  // ACT
  const result = arrayList.delete(0);

  // ASSERT
  assert.strictEqual(result, "item");

  assert.strictEqual(arrayList.length, 2);
  assert.strictEqual(arrayList.get(0), true);
  assert.strictEqual(arrayList.get(1), 13);
  assert.isUndefined(arrayList.get(2));
});

test("It is possible to delete the last item", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("item");
  arrayList.push(true);
  arrayList.push(13);

  // ACT
  const result = arrayList.delete(2);

  // ASSERT
  assert.strictEqual(result, 13);

  assert.strictEqual(arrayList.length, 2);
  assert.strictEqual(arrayList.get(0), "item");
  assert.strictEqual(arrayList.get(1), true);
  assert.isUndefined(arrayList.get(2));
});

test("It is possible to delete an item in the middle", () => {
  // ARRANGE
  const arrayList = new ArrayList();
  arrayList.push("item");
  arrayList.push(true);
  arrayList.push(13);
  arrayList.push("bar");

  // ACT
  const result = arrayList.delete(1);

  // ASSERT
  assert.strictEqual(result, true);

  assert.strictEqual(arrayList.length, 3);
  assert.strictEqual(arrayList.get(0), "item");
  assert.strictEqual(arrayList.get(1), 13);
  assert.strictEqual(arrayList.get(2), "bar");
  assert.isUndefined(arrayList.get(3));
});
