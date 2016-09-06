## Tutorial for the Semantic Web course
### @VU University Amsterdam and University of Amsterdam
#### Rinke Hoekstra (<rinke.hoekstra@vu.nl>/<hoekstra@uva.nl>)

This tutorial shows the basics for building a Semantic Web-based application by guiding you through some of the typical steps involved. This means:

* Styling your webpage using CSS
* Using client side scripting for manipulating the webpage
* Using server side scripting for mediating between your own triple store and others
* Posting information to your triple store
* Using reasoning facilities of your triple store

The code is documented and explains each of these steps. All server-side code is in `src/tutorial.py`. The client-side code is in `src/static/js/tutorial.js`. Feel free to reuse the code in your own projects (perhaps even fork this GitHub repository, that would be cool)

### Preliminaries

If you are a student of the Semantic Web course at the VU, make sure to follow the steps in the the [tools document](tools.md) to make sure you have everything in place to make this code work.

It will also contain detailed steps for installing the tutorial itself.

### General Requirements

To get this thing up and running on a local machine, you need the following:<sup>1</sup>

* Python 2.7
* In a terminal window (command prompt on Windows) change dir to the root directory of this repository.
* (**OPTIONAL**) Virtualenv (`pip install virtualenv`) <sup>2</sup>
* (**OPTIONAL**) Setup the virtualenv in the directory of this repository (`virtualenv .`)
* (**OPTIONAL**) Activate the virtualenv (`source bin/activate` on linux-like systems) <sup>3</sup>
* Install the necessary packages (`pip install -r requirements.txt`)
* Check the Stardog SPARQL endpoint URL in the `TUTORIAL_REPOSITORY` variable in **both** `src/tutorial.py` and `src/static/js/tutorial.js`.  
* Installing Stardog:<sup>4</sup>
	* By default, the script assumes a Stardog database with the name 'tutorial' running at <http://localhost:5820/tutorial>
	* Start your Stardog server with `stardog-admin server start --disable-security` (don't forget the `--disable-security` flag!). To stop Stardog, run `stardog-admin server stop`.
	* The database should have reasoning enabled, and "SameAs" reasoning should be set to "Full".
	* If you want to use a different name or location (i.e. not running on localhost, port 5820) you need to set the `TUTORIAL_REPOSITORY` variable in `src/tutorial.py`

### Starting the Tutorial

Once everything is ready:

* change dir into the `src` directory, and
* run `python tutorial.py`.

The tutorial is then running at <http://localhost:5000> .

###### Footnotes

<sup>1</sup> This assumes you're running on a linux/mac style system. For Windows use a backslash `\` instead of a forward slash `/` for directories.

<sup>2</sup> The advantage of using `virtualenv` is that this creates a nicely self-contained Python environment in which you can install the packages needed for your application. This way your global environment does not get clogged, and you avoid potential incompatibilities between different Python projects.

<sup>3</sup> You need to activate the virtual environment every time you want to start your application from a new terminal session.

<sup>4</sup> For a step-by-step guide on installing Stardog and other useful tools for the course, see the [tools document](tools.md).
