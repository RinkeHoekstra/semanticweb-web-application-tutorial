## Tutorial for the KR on the Web course
### @VU University Amsterdam and University of Amsterdam
#### Rinke Hoekstra (<rinke.hoekstra@vu.nl>/<hoekstra@uva.nl>)

This tutorial shows the basics for building a Semantic Web-based application by guiding you through some of the typical steps involved. This means:

* Styling your webpage using CSS
* Using client side scripting for manipulating the webpage
* Using server side scripting for mediating between your own triple store and others
* Posting information to your triple store
* Using reasoning facilities of your triple store

The code is documented and explains each of these steps. Feel free to reuse the code in your own projects (perhaps even fork this GitHub repository, that would be cool)

### Requirements

To get this thing up and running on a local machine, you need the following:

* Python 2.7
* (**OPTIONAL**) Virtualenv (`pip install virtualenv`) <sup>1</sup>
* (**OPTIONAL**) Setup the virtualenv in the directory of this repository (`virtualenv .`)
* (**OPTIONAL**) Activate the virtualenv (`source bin/activate` on linux-like systems) <sup>2</sup>
* Install the necessary packages (install using `pip install -r requirements.txt`)
* Use the course-provided Stardog endpoint for your group, by changing the `TUTORIAL_REPOSITORY` variable in `src/tutorial.py`.  
* (**OPTIONAL**) local install:<sup>3</sup>
	* By default, the script assumes a Stardog database with the name 'tutorial' running at <http://localhost:5820/tutorial> (security disabled).
	* The database should have reasoning enabled, and "SameAs" reasoning should be set to "Full".
	* If you want to use a different name or location (i.e. not running on localhost, port 5820) you need to set the `TUTORIAL_REPOSITORY` variable in `src/tutorial.py`
	* Start your Stardog server with `stardog-admin server start --disable-security` <sup>3</sup>

### Starting the Tutorial

Once everything is ready:

* change dir into the `src` directory, and
* run `python tutorial.py`.

The tutorial is then running at <http://localhost:5000> .

<sup>1</sup> The advantage of using `virtualenv` is that this creates a nicely self-contained Python environment in which you can install the packages needed for your application. This way your global environment does not get clogged, and you avoid potential incompatibilities between different Python projects.

<sup>2</sup> You need to activate the virtual environment every time you want to start your application from a new terminal session.

<sup>3</sup> The tutorial can be run against the course-provided Stardog instance (**recommended**) or a local installation of Stardog. For a step-by-step guide on installing stardog and other useful tools for the course, see ...
