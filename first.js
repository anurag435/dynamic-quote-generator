const quotes = [
    "Learning never exhausts the mind. - Leonardo da Vinci",
    "An investment in knowledge pays the best interest. - Benjamin Franklin",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
    "Education is not the filling of a pail, but the lighting of a fire. - William Butler Yeats",
    "Success is the sum of small efforts repeated day in and day out. - Robert Collier",
    "It's not about being the best. It's about being better than you were yesterday. - Unknown",
    "The expert in anything was once a beginner. - Helen Hayes",
    "Strive for progress, not perfection. - Unknown",
    "Hard work beats talent when talent doesn't work hard. - Tim Notke",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Your limitation—it's only your imagination. - Unknown",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. - Albert Einstein",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Every artist was first an amateur. - Ralph Waldo Emerson",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Think big, start small, act now. - Robin Sharma",
    "Leadership and learning are indispensable to each other. - John F. Kennedy",
    "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "Great leaders are great learners. - Unknown",
    "To add value to others, one must first value others. - John C. Maxwell",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "The future belongs to those who learn more skills and combine them in creative ways. - Robert Greene",
    "Technology is best when it brings people together. - Matt Mullenweg",
    "The only way to predict the future is to create it. - Alan Kay",
    "The best way to predict your future is to create it. - Peter Drucker",
    "Code is like humor. When you have to explain it, it's bad. - Cory House",
    "Difficulties strengthen the mind, as labor does the body. - Seneca",
    "Challenges are what make life interesting; overcoming them is what makes life meaningful. - Joshua J. Marine",
    "Fall seven times, stand up eight. - Japanese Proverb",
    "A smooth sea never made a skilled sailor. - Franklin D. Roosevelt",
    "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't. - Rikki Rogers",
    "Dream big and dare to fail. - Norman Vaughan",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau"
  ];
  
function generateQuote(){
const text = document.getElementById("quote");

const index=Math.floor(Math.random()*quotes.length);
text.textContent = quotes[index];
}

setInterval(generateQuote,2000);

//i can used either inneeHTML or textContent to manupulate the code

function getRandomColor() {
    const letters = "0123456789ABCDEF"; // All possible characters for a hexadecimal color
    let color = "#"; // Start with the hash symbol
    for (let i = 0; i < 6; i++) {
      // Loop 6 times to generate a 6-character color code
      color += letters[Math.floor(Math.random() * 16)]; 
      // Math.random() generates a number between 0 and 1.
      // Multiply by 16 (length of `letters`) and use Math.floor() to get an integer index.
      // Append the character at that index to `color`.
    }
    return color; // Return the final color string (e.g., "#3A5FCD").
  }

  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
  }

  // Change color every 2 seconds
  setInterval(changeBackgroundColor, 2000);

  // Initial background color
 // changeBackgroundColor();


 
  