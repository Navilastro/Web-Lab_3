# Web-Lab_3:    Management System.

## File Organization
- `models.js`: In this file, I created the `Student` class. It has properties and methods for students. I also used `Object.defineProperty()` here to make the student ID read-only.
- `database.js`: This file acts like a fake server. I used `setTimeout` and callbacks to simulate downloading data from a database.
- `analytics.js`: I put my calculation functions here. I used array methods like `.reduce()` and `.filter()` to find the best student and calculate course averages.
- `main.js`: This is the main file. It imports everything, gets the data, and shows the results in the console.

## Challenges Faced
- The hardest part for me was making the student ID unchangeable. I didn't know much about `Object.defineProperty()`, so I had to research it a bit to understand how it works.
- Using callbacks was also tricky. Normally I like using promises or `async/await` because they are easier, but the homework wanted us to use callbacks, so I had to change my code.
- Using `.reduce()` to find the top student was a bit confusing at first, but I practiced and finally made it work.
