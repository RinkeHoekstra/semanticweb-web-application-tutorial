# Recommended Tools

## 1. Introduction

This handout is meant as a guide for installing some of the tools that you will (most likely) want to use during the course.

## 2. Important Stuff
### 2.1 A Programming Editor
A good **programming editor**, such as [Atom](http://atom.io), [Sublime](http://sublimetext.com), [TextMate](http://macromates.com) (Mac only), [Notepad++](https://notepad-plus-plus.org) (Windows only) or one of your own choice, is essential. It helps if it supports syntax highlighting for **Turtle** and/or **SPARQL**.

### 2.2 Java
Make sure that you have Java, and your Java version is up to date.

Check your version of Java by running `java -version` in a Terminal or Command Prompt window.

If you have Java, then you are probably fine. **Only install a new version of Java if it is really necessary**.

If you plan on installing Stardog, this should be Java 1.7 64bit at a minimum (1.8 preferred). Stardog does not run on 32bit systems. It is also safest to install the JDK rather than a JRE.

* Windows users should download Java from: <http://java.com>
* Linux users should use the package manager of their system (e.g. `sudo apt-get install openjdk-8-jdk` on debian-style systems)
* MacOS comes shipped with a sufficiently recent java version.

### 2.3 Python
A working version of **Python**, preferably somewhat close to 2.7.10 (but not 3.x) for your platform of choice.

* Check what version you have by running `python --version` in a terminal (or command prompt) window

If needed:

* Windows users can go to <https://www.python.org> to download it.  
  **NB**: make sure to enable the 'Add Python.exe to path' option during installation.
* Linux users should use the package manager of their system (e.g. `sudo apt-get install python`)
* MacOS comes with a pre-installed version, but you may consider using [Homebrew](http://brew.sh) to install a clean and up-to-date version.
  - Start the Terminal application
  - Run `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` from the terminal
  - Then run `brew update` and `brew doctor`
  - Run `brew install python`

## 3. An RDF and OWL Editor

There are several RDF and OWL editors that you could use (apart from your favourite text-based editor). The main contenders are [TopBraid Composer](http://www.topquadrant.com/downloads/topbraid-composer-install/) and [Protégé](http://protege.stanford.edu).

* **TopBraid** is an Eclipse plugin, and is closer to the RDF data model than Protégé;
  * you can view and edit the definitions of OWL axioms within the editor using an abstract syntax (Manchester Syntax), but you can also check the representation in Turtle or RDF/XML.
  * It has a built-in SPARQL client that you can use to query the currently loaded files, and you can run OWL2-RL inference rules on the ontology.
  * A drawback of TopBraid is that the workspace is sometimes out of sync with the file system (a common issue in Eclipse-based editors).
* **Protégé** is a stand-alone editor that is very much tailored towards OWL ontology editing.
  * It allows you to define OWL axioms using the same abstract syntax as TopBraid,
  * but it is less transparent if you're interested in knowing what the syntactic RDF representation looks like. This may lead to confusing situations where it is unclear e.g. in what namespace you have defined your classes, instances, etc.  
  * Protégé does support all major OWL2 DL reasoners (Fact++, Hermit and Pellet) and is thus more powerful with respect to inferencing.
  * You may decide to edit your ontology files in TopBraid, and check inferencing using Protégé.

### 3.1 TopBraid Composer

* Download TopBraid Free Edition from <http://www.topquadrant.com/downloads/topbraid-composer-install/>.
* The Standard and Maestro Editions can be evaluated for a limited period.
* Unzip the downloaded file, and move the folder it creates to a location of your choice (e.g. `/Applications` on MacOS, or `C:\Program Files` on Windows systems).
* To run it: double click the `TopBraid Composer` executable file inside the folder.
* It will ask you for a 'Workspace' directory: this should be an existing directory which will be the **parent** directory of any RDF/OWL projects you are planning to start.
* After TopBraid has started, you can get started by creating a new project by right-clicking in the "Navigator" panel (bottom right, by default).
* Make sure to synchronise the workspace after you make any changes to the files inside your project form outside of the Eclipse environment.


### 3.2 Protégé
The **Protégé** ontology editor

* Download the editor from <http://protege.stanford.edu> and install it  
(by registering you will help them get funding to continue support).
* If you experience a slow download, get the "platform independent" version from <https://www.dropbox.com/s/eiyy6qwnd1zwv4h/Protege-5.0.0-beta-17.zip?dl=0>
* To run it:
  * The Windows installer should produce an icon for you, otherwise you will need to run the `run.bat` (or similar) script in the Protégé directory.
  * On Linux, you should run the `run.sh` script in the Protégé directory
  * On MacOS, you should run the `run.command` script in the Protégé directory
* Download the **Pellet** reasoner from <https://github.com/Complexible/pellet/archive/master.zip> and place the `com.clarkparsia.protege.plugin.pellet.jar` file (from `pellet/protege/plugin/`) in the `plugins` directory of your **Protégé** installation.
* Make sure that the **Pellet** reasoner can be seen in the **Reasoner** menu of the Protégé application window.

## 4. The KR on the Web Tutorial

* Open up a Terminal or a Command Prompt window
* Change directory to e.g. your Documents directory (on Mac/Linux: `cd ~/Documents`, on Windows `cd C:\Users\YOURUSERNAME\Documents`)
* Then we "clone" the source code from Github. Type: `git clone https://github.com/KRontheWeb/web-application.git`
* Change directory to the newly created folder: `cd web-application`

More details on how to run the tutorial can be found in the readme file on the GitHub page of the tutorial: <https://github.com/KRontheWeb/web-application>.


## 5. Optional but Recommended Tools

### 5.1 curl
`curl` is a simple command line utility for (amongst others) sending HTTP requests. You may need it for testing e.g. whether content negotiation works for your dataset.

* Windows users can download `curl` directly from <http://dl.uxnr.de/mirror/curl/curl-7.33.0-win64-ssl-sspi.zip>.  
  **NB**: curl is an executable (`.exe` file) that you should explicitly call on the **command prompt**. Double clicking in an explorer window will just briefly flash a command prompt window.  
  * Create a folder called 'curl' in the `C:\Program Files` directory,
  * copy `curl.exe` from the unzipped file to the `C:\Program Files\curl` directory,
  * then add the `C:\Program Files\curl` directory to the `PATH` system environment variable (in Control Panel, search for `environment variable`).
  * Edit the variable value, different directory names should be separated by a semicolon (`;`)
  * Start the Command Prompt (in Win 8/10 use the search) and type `curl.exe` to see whether it does anything.
* Linux typically comes shipped with `curl`, but you may need to use the package manager of their distribution (e.g. `sudo apt-get install curl`)
* MacOS comes shipped with `curl`

You can test whether it works by going to a Terminal window, or to the Command Prompt and executing: `curl -L -H "Accept: text/turtle" "http://dbpedia.org/resource/Inside_Out_(2015_film)"`

Did you see any triples?

### 5.2 IPython Notebook (Jupyter)

Interactive notebooks are simple and effective tools for testing small bits of your code before you integrate it in a larger application.

Run `pip install jupyter` in a Terminal or the Command Prompt.

Jupyter documentation is here:  <http://jupyter.readthedocs.org>.

### 5.3 Virtualenv
If you don't yet have it, it may be a good idea to install the `virtualenv` package. The advantage of using `virtualenv` is that this creates a nicely self-contained Python environment in which you can install the packages needed for your application. This way your global environment does not get clogged, and you avoid potential incompatibilities between different Python projects.

Run `pip install virtualenv` in a Terminal or the Command Prompt.

Have a look at the `virtualenv` page at the [Hitchhikers Guide to Python](http://docs.python-guide.org/en/latest/dev/virtualenvs/) for a good description of how you should work with virtual environments.

* `pip` is shipped with Python. If Windows complains that it cannot find it, you should add the folder `C:\Python27\Scripts` to the system wide `PATH` environment variable, see above.
* If, when installing `virtualenv`, your system complains that a directory is not writable, try running `sudo pip install virtualenv` (on Windows: right click the Command Prompt icon, and select `Run as Administrator`, then run `pip install virtualenv`)

### 5.4 Git
The **git** version control system for your platform of choice. Version control is very important when collaboratively developing code. You could also use Dropbox or equivalent, but these systems do not prevent conflicting copies. Git is the most modern version control mechanism that is currently in use by millions of developers, and [GitHub](http://github.com) is the online cloud service of choice.

Try and learn [here](http://try.github.io) why and how you should use it.

* Windows users can go to <https://git-scm.com> to download it
* Linux users should use the package manager of their system (e.g. `sudo apt-get install git`)
* MacOS users can most easily install it with Homebrew (`brew install git`) or download it from <https://git-scm.com>
* Note: it makes sense to also install a UI-based application, such as [SourceTree](https://www.sourcetreeapp.com).

### 5.5 Stardog 4.0
We have a course-provided Stardog instance ready for you, but you may also want to experiment with the software yourself.

The **Stardog** triple store (version 4 or higher):

* Apply for Community Edition license at <http://stardog.com> (or a 30-day evaluation)
* You will receive an email with a link to the download, and a license file.
* **NB**: Stardog may require a Java JDK to be installed on your system (not just a JRE, otherwise it will probably not work). Try getting it working without first installing Java. If it complains about it, install a recent JDK from Java.com

Official installation instructions can be found at <http://docs.stardog.com/#_quick_start_guide>

##### 5.5.1 Windows
One way to get it running:

* Move or copy the unzipped directory `stardog-3.1.4` to your `Documents` folder. You now have a directory called `C:\Users\YOURUSERNAME\Documents\stardog-3.1.4`
* Create a `data` directory inside it, this is now `C:\Users\YOURUSERNAME\Documents\stardog-3.1.4\data`
* Copy the `stardog-license.bin` file to `C:\Users\YOURUSERNAME\Documents\stardog-3.1.4\data`
* Go to the Control Panel, and search again for `environment variables`.
	* Create a system-wide variable called `STARDOG_HOME` and give it the value `C:\Users\YOURUSERNAME\Documents\stardog-3.1.4\data`.
	* Update the system-wide `PATH` variable by adding `C:\Users\YOURUSERNAME\Documents\stardog-3.1.4\bin`
* Start the Command Prompt, and type `stardog-admin.bat server start --disable-security` to start Stardog (you need to do this every time you have rebooted your system. If you want to manually stop the service, type `stardog-admin.bat server stop`)
* Open your browser, and go to <http://localhost:5820> the login details are `admin` and `admin`
* Whee!

Alternative installation instructions can be found at <http://docs.stardog.com/#_quick_start_guide>

##### 5.5.2 Linux/Mac
One way to get it running:

* Move or copy the unzipped directory `stardog-3.1.4` to your `Documents` folder. You now have a directory called `/Users/YOURUSERNAME/Documents/stardog-3.1.4`
* Create a `data` directory inside it, this is now `/Users/YOURUSERNAME/Documents/stardog-3.1.4/data`
* Copy the `stardog-license.bin` to `/Users/YOURUSERNAME/Documents/stardog-3.1.4/data`
* Open up a Terminal window, and type `open ~/.bash_profile`, this opens a TextEdit window.
* Add the following lines anywhere in the file:

```
export STARDOG_HOME=/Users/YOURUSERNAME/Documents/stardog-3.1.4/data
export PATH=$PATH:/Users/YOURUSERNAME/Documents/stardog-3.1.4/bin
```
* Close the Terminal window, and open a new one
* Run the Stardog server via `stardog-admin server start --disable-security` (you need to do this every time you have rebooted your system. If you want to manually stop the service, type `stardog-admin server stop`)
* Open your browser, and go to <http://localhost:5820> the login details are `admin` and `admin`
* Whee!


##### 5.5.3 All Platforms
* Go to <http://localhost:5820>, create a new Database
* Make sure to set reasoning to `SL` and "SameAs reasoning" to `FULL` otherwise leave the settings unchanged.
* Done!
