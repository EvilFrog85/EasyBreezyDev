# Local web development environment using TypeScript and SCSS
  
You have come to right repo if you are new to JavaScript development or are looking for a local dev TypeScript/SCSS boilerplate project.

### Getting started
  
1. (Optional - Windows user) Install Node Version Manager (NVM) for windows: [link](https://github.com/coreybutler/nvm-windows)
1. (Optional - other OS) Install Node Version Manager (NVM): [link](https://github.com/nvm-sh/nvm)
2. Install any newer version (LTS recommended) of NodeJS using NVM: [link](https://nodejs.org/en/)
3. Clone this repo using GIT or download it as a zip-file
4. In the root folder of this project run `npm install` using any terminal
  
  
### Develop code - run on localhost
  
Run `npm start`in root folder to:
- Start server running at localhost:3000
- Compile TS to JS and add a sourceMap (logged errors have references to TS-file instead of compiled JS-file)
- Compile SCSS to CSS
- Copy all HTML-files and all files in folders/subfolders of /assets and /js to /public
  
  
### Produce production files - to place on web server
  
Run `npm run build` in root folder to:
- Compile TS to JS
- Compile SCSS to CSS
- Autoprefix and minimize CSS
- Copy all HTML-files and all files in folders/subfolders of /assets and /js to /public
  
  
### What's included
  
- Two demo HTML-files to get a sense of how to reference JS- and CSS-files.
- One TS-file with some demo code. When project is built or served, look at the compiled JS-code inside /public/js.
- One JS-file, to illustrate how JS-libs can be included and automaticly exported to /public/js.
- Some demo assets, to illustrate how the files are automaticly exported to /public/assets while keeping folder structure.
- A few files of my favorite SCSS boilerplate and vanilla CSS variables.
- One file called _page2.scss to illustrate how view specific SCSS can be included into a single CSS output file. To create a separate CSS-file for views, remove the underscore _ in the file name and remember to add refernce to it in the HTML-file.
  
  
  
This is a modified version of Kevin Powells implementation of Stephanie Eckles base script.
