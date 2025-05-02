let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "It is never too late to be what you might have been. - George Eliot",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Life isn’t about finding yourself. Life is about creating yourself. - George Bernard Shaw",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson"
  ];

  let quote = document.getElementById("quote")
  let button = document.getElementById("btn")

  btn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * quotes.length)
    quote.innerHTML = quotes[randomNumber]
  });