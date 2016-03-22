#Tutorial for the KR on the Web course
### @VU University Amsterdam and University of Amsterdam
#### Rinke Hoekstra (<rinke.hoekstra@vu.nl>/<hoekstra@uva.nl>)

This tutorial shows the basics for building a Semantic Web-based application by guiding you through some of the typical steps involved. This means:

* Styling your webpage using CSS
* Using client side scripting for manipulating the webpage
* Using server side scripting for mediating between your own triple store and others
* Posting information to your triple store
* Using reasoning facilities of your triple store

### Requirements

To get this thing up and running on a local machine, you need the following:

* Python 2.7
* **OPTIONAL** Virtualenv (`pip install virtualenv`) [^1]
* **OPTIONAL** Setup the virtualenv in the directory of this repository (`virtualenv .`)
* **OPTIONAL** Activate the virtualenv (`source bin/activate` on linux-like systems) [^2]
* Install the necessary packages (install using `pip install -r requirements.txt`)
* A recent Stardog installation
	* The script assumes a Stardog database with the name 'tutorial' running at <http://localhost:5820/tutorial> (security disabled).
	* The database should have resoning enabled, and "SameAs" reasoning should be set to "Full".
	* If you want to use a different name or location (i.e. not running on localhost, port 5820) you need to set the `TUTORIAL_REPOSITORY` variable in `src/tutorial.py`

[^1]: The advantage of using `virtualenv` is that this creates a nicely self-contained Python environment in which you can install the packages needed for your application. This way your global environment does not get clogged, and you avoid potential incompatibilities between different Python projects. 
[^2]: You need to activate the virtual environment every time you want to start your application from a new terminal session.

Once everything is ready:

* **ONLY WHEN WORKING LOCALLY** start your Stardog server with `stardog-admin server start --disable-security` [^3]
* change dir into the `src` directory, and
* run `python tutorial.py`.

The tutorial is then running at <http://localhost:5000> .

[^3]: The tutorial can be run against the course-provided Stardog instance (recommended) or a local installation of Stardog. For a step-by-step guide on installing stardog and other useful tools for the course, see ...
