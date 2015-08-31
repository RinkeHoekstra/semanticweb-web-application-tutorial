#Tutorial for the Semantic Web course
### @VU University Amsterdam
#### Rinke Hoekstra (<rinke.hoekstra@vu.nl>)

This tutorial shows the basics for building a Semantic Web-based application by guiding you through some of the typical steps involved. This means:

* Styling your webpage using CSS
* Using client side scripting for manipulating the webpage
* Using server side scripting for mediating between your own triple store and others
* Posting information to your triple store
* Using reasoning facilities of your triple store

### Requirements

To get this thing up and running on a local machine, you need the following:

* Python 2.7
* Virtualenv (`pip install virtualenv`)
* Setup the virtualenv in the directory of this repository (`virtualenv .`)
* Activate the virtualenv (`source bin/activate` on linux-like systems)
* Install the necessary packages (install using `pip install -r requirements.txt`)
* A recent Stardog installation
	* The script assumes a Stardog database with the name 'tutorial' running at <http://localhost:5820/tutorial> (security disabled).
	* The database should have resoning enabled, and "SameAs" reasoning should be set to "Full".
	* If you want to use a different name or location (i.e. not running on localhost, port 5820) you need to set the `TUTORIAL_REPOSITORY` variable in `src/tutorial.py`

Once everything is ready:

* start your Stardog server with `stardog-admin server start --disable-security`,
* change dir into the `src` directory, and
* run `python tutorial.py`.

The tutorial is then running at <http://localhost:5000> .
