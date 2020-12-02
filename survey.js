"use strict";

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What"s your name? Nicknames are also acceptable ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question("What's an activity you like doing? " , (answer2) => {
    rl.question("What do you listen to while doing that? " , (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc. " , (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? " , (answer5) => {
          rl.question("Which sport is your absolute favourite? " , (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! " , (answer7) => {
              let sentence = `Hi ${answer}. A fun activity is ${answer2} while listening to ${answer3}. My favourite meal is ${answer4}. I like to eat ${answer5}. My favourite sport is ${answer6}. My superpower is ${answer7}.`
              console.log(sentence);
              rl.close();
            });
          });
        });
      });
    });
  });
});
