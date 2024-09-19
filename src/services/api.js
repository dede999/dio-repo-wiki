import { Faker, pt_BR } from "@faker-js/faker";

const customFaker = new Faker({
  locale: pt_BR,
});

export default function createFakeRepos(number) {
  return Array.from({ length: number }, () => ({
    name: customFaker.commerce.productName(),
    author: {
      name: customFaker.person.fullName(),
    },
  }))
}
