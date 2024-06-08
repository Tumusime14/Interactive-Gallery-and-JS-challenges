# Interactive-Gallery-and-JS-challenges

## Overview
This project contains an interactive photo gallery and two JavaScript challenges
along with solving two JavaScript coding challenges.


This project includes two main Features:

1. Interactive Gallery: A gallery of images that reacts to mouse hover events, applying visual filters and animations.
2. JavaScript Challengs: A JavaScript functions that transforms a string based on its length and the presence of alphanumeric characters and spaces.

## FEATURES

Interactive Gallery

- Hover Effects: Images blur, dim, and grayscale when hovered over, while the accompanying text moves and a span element becomes visible.
- Responsive Design: The gallery layout adapts to different screen sizes (mobile phones, tablets, and desktops).

### String Transformation Function

- Validation: it ensures the input string contains only alphanumeric characters and spaces, and its length is between 1 and 1000.
- Transformation Rules**:
  - If the string length is divisible by 3, reverse the string.
  - If the string length is divisible by 5, convert each character to its ASCII code.
  - If the string length is divisible by 15, reverse the string and convert each character to its ASCII code.
  - If none of the above conditions are met, return `false`.

## SETTUP AND RUNNING PROJECT.

Prerequisites

- A modern and updated web browser (Chrome, Firefox, Safari, Edge).
- A text editor or IDE for editing code (e.g., VS Code, Sublime Text).
- Basic knowledge of HTML, CSS, and JavaScript.

### Instructions

1. Clone the Repository

   ```bash
   [REPOSITORY](https://github.com/Tumusime14/Interactive-Photo-GalleryCoA)
   ```

2. File Structure

   Ensure your project directory has the following structure:
    Interactive-Gallery-and-JS-challenges
            └── gallery
                    └── css
                    |     └── styles.css
                    ├── img
                        └── common_brown_baboon.jpg
                            fannec_fox.jpg
                            humpback_whale.jpg
                            spotted_deer.jpg
                    ├── js
                        └── script.js
                    └── index.html
                └── JavaScriptChallenges
                                └── arrayMap.js
                                    stringTransform.js
                └── README.md    
                         
   

3. **Running the Project**

   - Open the `index.html` file in a web browser to see the interactive gallery in action.
   - The console will display outputs from the `transformString` and `subArraySum` functions.

### Examples of Usage

#### String Transformation Function

```javascript
console.log(transformString('Hamburger')); // Output: regubraH
console.log(transformString('Pizza')); // Output: 80 105 122 122 97
console.log(transformString('Chocolate Chip Cookie')); // Output: 101 107 111 111 67 32 80 105 104 67 32 101 116 97 108 111 99 111 104 67
console.log(transformString('Chocolate Chip bvCookie')); // Output: Not match
console.log(transformString('ValidString123')); // Output: Not match
console.log(transformString('!InvalidString')); // Invalid input: String contains non-alphanumeric characters or spaces
```

#### Subarray Sum Function

```javascript
console.log(subArraySum([4, 2, 7, 1, 9, 5], 17)); // Output: true
console.log(subArraySum([1, 7, 10, 5], 9)); // Output: false
```

### File Descriptions

- index.html: The main HTML file containing the structure of the interactive gallery.
- css/styles.css: The CSS file defining the styles for the gallery and its responsive behavior.
- js/script.js: The JavaScript file implementing interactiveness like the hover effects
for the gallery and containing the string transformation and subarray sum functions.
- img/: The directory containing the images used in the gallery.

For any concern reach me
via email: **tumusimedavid14@gmail.com**