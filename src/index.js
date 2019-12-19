import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Welcome to Brain Games! Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name}!`);

  const content = (count = 0) => {
    if (count == 3) {
      return console.log('Congratulations, ' + name + '!');
    }
    const randNum = Math.floor(Math.random(0, 1000) * 100);
    console.log('Question: ' + randNum)
    const answer = readlineSync.question("Your answer: ");

    if (answer !== 'yes' && answer !== 'no') {
      console.log('Is wrong answer!');
      return content(count);
    }

    if (answer == "no" && randNum % 2 !== 0) {
      console.log('Correct!');
      return content(count += 1);
    }
    if (answer == "no" && randNum % 2 == 0) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, " + name + "! ")
      return content(count);
    }
    if (answer == "yes" && randNum % 2 == 0) {
      console.log('Correct!');
      return content(count += 1);
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, " + name + "! ")
      return content(count);
    }
  }

  content();
}

export default evenGame;
