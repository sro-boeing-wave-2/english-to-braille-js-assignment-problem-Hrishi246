# Convert Text to Braille

## Objective
The objective of this assignment is to convert the text in english to Braille using Javascript.

## Things I will be familiarized with
- Modules in JS
- Working with Arrays and Objects in JS
- Understanding Event listeners in JS

## Instructions:

1. Create a page which takes input in the english language and ouputs in Braille.
2. The conversion should happen in the most optimal way when you type in english.
3. You can use the text-to-braille mappings from the file `text-to-braille.js`.
4. You will write all your code in `index.js`

## Instructions to run the assignment

```
# Add a remote to the starter code, will be needed if there are any changes which is to be pulled from the starter code
git remote add starter https://github.com/sro-boeing-wave-2/english-to-braille-js-assignment-problem

# Install static server, can just be anything.
npm instastaticll -g node-

# Install all the dependencies of the application
npm install

# cd into the assignment folder
cd text-to-braille

# Run the static server over the port 8080
static . -p 8080
```

## Instructions to evaluate the assignment

```
# Install all the dependencies
npm install

# Run test cases
npm run test
```

## FAQ

## I see lot of other files?

Files which are of immediate concern

```
|- css
|- index.html
|- index.js
|- english-to-braille.js //contains mapping from english to braille code
```

**Note:** Changing anything in the test folder is not recommended.

Remaining files are added to facilitate us in following things:

1. Ensuring clean code practices (.eslintrc, .eslintrc.test)
2. Preserving configuration across editors (.editorconfig)
3. Auto evaluating the code. (test)
