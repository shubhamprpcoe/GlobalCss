const fs = require('fs');
const path = require('path');
// import fs from 'fs'
// import path from 'path'


const srcPath = path.join(__dirname, 'src');
const stylesPath = path.join(srcPath, 'styles');

// Check if 'styles' directory exists, if not, create it
if (!fs.existsSync(stylesPath)) {
  fs.mkdirSync(stylesPath);
  console.log('styles directory created');
}

// Generate Global.css file with import statements
const globalCssContent = `
/* Import variables */
@import './variable.css';

/* Import styles/sm.css */
@import './sm.css';
/* Import styles/md.css */
@import './md.css';
/* Import styles/lg.css */
@import './lg.css';
/* Import styles/xl.css */
@import './xl.css';
/* Global styles */
/* Your global styles here */
`;
const globalCssPath = path.join(stylesPath, 'Global.css');
fs.writeFileSync(globalCssPath, globalCssContent);
console.log('Global.css file created');
// Generate variable.css file

const variableCssContent = `:root {
    --main-color: #ff0000; /* Define a variable named --main-color with a value of red */
  }
  /* You can now use the variable --main-color */
  .element {
    color: var(--main-color); /* Use the variable --main-color as the value for the color property */
  }`;
const variableCssPath = path.join(stylesPath, 'variable.css');
fs.writeFileSync(variableCssPath, variableCssContent);
console.log('variable.css file created');

// Generate sm.css file
const smCssContent = `/* Small devices (phones, 576px and up) */
@media (min-width: 576px) {
  /* Styles for small devices */
  /* Add sm:<className> */
}
`;
const smCssPath = path.join(stylesPath, 'sm.css');
fs.writeFileSync(smCssPath, smCssContent);
console.log('sm.css file created');

// Generate md.css file
const mdCssContent = `/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  /* Styles for medium devices */
  /* Add md:<className> */
}`;
const mdCssPath = path.join(stylesPath, 'md.css');
fs.writeFileSync(mdCssPath, mdCssContent);
console.log('md.css file created');

// Generate lg.css file
const lgCssContent = `/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  /* Styles for large devices */
  /* Add lg:<className> */
}
`;
const lgCssPath = path.join(stylesPath, 'lg.css');
fs.writeFileSync(lgCssPath, lgCssContent);
console.log('lg.css file created');

// Generate xl.css file
const xlCssContent = `/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  /* Styles for extra large devices */
  /* Add xl:<className> */
}`;
const xlCssPath = path.join(stylesPath, 'xl.css');
fs.writeFileSync(xlCssPath, xlCssContent);
console.log('xl.css file created');
