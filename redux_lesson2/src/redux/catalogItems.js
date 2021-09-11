import faker from 'faker';

// const data = faker.commerce.productName();
const data = [];

for (let i = 0; i < 48; i += 1) {
  const item = {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    description: faker.commerce.productDescription(),
  };

  data.push(item);
}

export default data;
