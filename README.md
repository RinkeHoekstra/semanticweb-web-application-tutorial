#Tutorial for the Intelligent Web Applications course 
### @VU University Amsterdam
#### Rinke Hoekstra (<rinke.hoekstra@vu.nl>)

This tutorial shows the basics for building an Intelligent Web Application by guiding you through some of the typical steps you need to go through. This involves:

* Styling your webpage using CSS
* Using client side scripting for manipulating the webpage
* Using server side scripting for mediating between your own triple store, and others

### Requirements

To get this thing up and running on a local machine, you need the following:

* Python 2.7
* Virtualenv (`pip install virtualenv`)
* Setup the virtualenv in the directory of this repository (`virtualenv .`)
* Activate the virtualenv (`source bin/activate` on linux-like systems)
* Install the necessary packages (install using `pip install -r requirements.txt`)
* A recent Apache Tomcat install with deployed Sesame/OWLIM Lite (or GraphDB)
* An OWLIM-Lite/GraphDB repository with (at a minimum) the OWL2 RL ruleset, and the name `tutorial`. 
	* The script assumes an adequate Sesame-style triple store is running at <http://localhost:8080/openrdf-sesame/repositories/tutorial>  (i.e. 
	* If you want to use a different name or location (i.e. not running on localhost, port 8080) you need to set the `TUTORIAL_REPOSITORY` variable in `src/tutorial.py`, and change the appropriate GET requests in the tutorial javascript file.

Once everything is ready:

* start your Tomcat server, 
* change dir into the `src` directory, and 
* run `python tutorial.py`.

The tutorial is then running at <http://localhost:5000> .

