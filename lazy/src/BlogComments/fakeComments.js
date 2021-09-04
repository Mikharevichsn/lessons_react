import faker from 'faker';
import dayjs from 'dayjs';

const comments = [];

for (let i = 0; i < 15; i += 1) {
  const comment = {
    id: faker.datatype.uuid(),
    author: faker.name.findName(),
    date: dayjs(faker.date.past()).format('DD.MM.YYYY HH:MM'),
    text: faker.lorem.words(10),
  };

  comments.push(comment);
}

export default comments;
