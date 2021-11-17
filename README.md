# JVH styleguide
A guide for designing and coding projects for 💥JVH💥 


## Setup
### Installation
1. Clone the repo.
2. run `npm install`.
3. You might need to install Gulp. You can do this by `npm install -g gulp`.

### Run
To start the styleguide just run `gulp dev`. This will compile the styleguide and start a local server on `http://localhost:8090`.

### Build
If you only want to compile/build the css you can run `gulp build`. This will only compile all of the sass and copies the images to the dist folder without starting the local server and generating the styleguide.

### Basic structure
After you `npm install` and run `gulp dev` for the first time, you'll have a folder structure like this.
- **root**
	- node_modules
	- **dist** - where your compiled and autoprefixed styles will go.
	- **src** - Contains all of the style.
		- **images** - Contains all of our images/icons we use. These get copied to the dist folder when compiling the css.
		- **fonts** - Contains all of our local fonts we use. These get copied to the dist folder when compiling the css.
		- **css** - where your style files go.
	- **styleguide** - where your styleguide is generated.
	
