import _ from 'lodash';

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const brainEven = () => {
  const randomNumber = _.random(1, 100);
  const trueAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, trueAnswer];
};
