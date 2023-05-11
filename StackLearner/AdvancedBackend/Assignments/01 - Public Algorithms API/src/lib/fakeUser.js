import { faker } from "@faker-js/faker";

const map = {
  name: generateFakeName,
  email: generateFakeEmail,
  age: generateFakeAge,
};

/**
 * Generate a fake user.
 *
 * @param {Array<string>} fields
 */
export function fakeUser(fields) {
  if (!fields) {
    const person = {};
    for (const key in map) person[key] = map[key]();
    return person;
  }

  const person = {};
  for (const field of fields) person[field] = map[field]();
  return person;
}

function generateFakeName() {
  return faker.name.fullName();
}

function generateFakeEmail() {
  return faker.internet.email();
}

function generateFakeAge() {
  return faker.commerce.price(16, 78, 0);
}
