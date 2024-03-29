import _ from 'lodash';

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export const primeGame = () => {
  const randomNumber = _.random(0, 100);
  const trueAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, trueAnswer];
};
