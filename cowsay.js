const cowsay = require("cowsay");
z = require("inspirational-quotes");

console.log(cowsay.say({ text: z.getQuote().text, e: "XX" }));

console.log(cowsay.say({ text: z.getRandomQuote(), e: "XX" }));
