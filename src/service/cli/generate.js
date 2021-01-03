"use strict";

const chalk = require(`chalk`);
const fs = require(`fs`);

const {getRandomInt, getRandomDate} = require(`../utils`);
const {
  DEFAULT_COUNT,
  FILE_NAME,
  titles,
  sentences,
  categories,
} = require(`../mocks`);

const generateAds = (count) =>
  Array(count)
    .fill({})
    .map(() => ({
      title: titles[getRandomInt(0, titles.length)],
      createdDate: getRandomDate(),
      // Временно. Потом сделаю полноценную генерацию моков
      announce: sentences[getRandomInt(0, sentences.length)],
      fullText: sentences[0] + sentences[1],
      сategory: categories,
    }));

module.exports = {
  name: `--generate`,
  run(args) {
    let [count] = args;
    count = Number.parseInt(count, 10) || DEFAULT_COUNT;

    const content = JSON.stringify(generateAds(count));

    fs.writeFile(FILE_NAME, content, (err) => {
      if (err) {
        return console.error(chalk.red(`Can't write data to file...`));
      }

      return console.info(chalk.green(`Operation success. File created.`));
    });
  },
};