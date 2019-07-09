# Minion Family Chore Battle
*A keep them in line chore app*

This is an application for a family to make doing chores and keeping the home nice and tidy, fun for everyone.  Enter the Minion Family Chore Battle and everyone is in a race getting points for completing chores.  Every family can set points objectives for dinner out, night bowling, or personal reward.   

## Developers
 Jim Gallagher, Nena Gardner, Justin Bregenzer

## Table of contents
  * [Live](#live)
  * [About this project](#about-this-project)
  * [Getting started](#getting-started)
  * [Structure of the project](#structure-of-project)
  * [Screenshots](#screenshots)
  * [Technologies used to create app](#technologies-used)
  	* [Backend technologies](#Backend)
  	* [Frontend technologies](#Frontend)
  * [Design improvements](#design-improvements)
  * [Acknowledgments](#Acknowledgments)
  * [Issues](#Issues)

## <a name="live"></a>Live
   enter the heroku released app here https://projecttwo072019.herokuapp.com

## <a name="about-this-project"></a> About this project

  * [How the app works](#how-app-works)
  * [How the app is built](#how-the-app-is-built)
  * [MVC design pattern](#about-mvc)
 
### <a name="how-app-works"></a> How the app works
*You will be able to *

### <a name="how-the-app-is-built"></a> How the app is built
This project uses MySQL, Node, Express, Handlebars, ORM (Object Relational Mapper). Node and MySQL are used to query and route data in the application. Express is the backend web framework used for this application, and Handlebars is a templating language that is used to generate the HTML.

### <a name="about-mvc"></a> MVC design pattern
This project also follows the MVC (Model-View-Controller) design pattern. The MVC design pattern assigns objects in the application one of three roles (model, view, or controller) and defines the way the different parts of the application communicate with one another.

  * <b>View object:</b>
  A view object is an object in the application that is visible (in the user interface) to the end user of the application. The view displays data from the application's model and learns about any changes to the model data via the controller. For example, in this application, the user enters a burger name in a text field. The view communicates the user input via the controller to the model.

  * <b>Controller object:</b>
  A controller object controls the flow of data between the view and the model (that is, the controller is an intermediary between the two). The controller interprets any user changes made in the view and communicates the changed data to the model. Also, if the model were to change, the controller is what communicates the updated data to the view so that the user can see the updated data in the user interface.

  * <b>Model object:</b>
  A model object manages the data. When data is created or changed by the user in the view (for example, a user devours or throws away a burger), that change is communicated via the controller to the model. Also, when data is created or changed in the model, the model communicates that change via the controller to the view, and the view displays the updated data to the user.

For more information about the MVC design pattern, check out the following resources:
  * https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
  * https://docs.microsoft.com/en-us/aspnet/core/mvc/overview

## <a name="getting-started"></a> Getting started
The following section will take you through the steps of setting up this application and getting it running locally on your computer.

To set up this application locally on your computer, perform the following steps:
  1. [Clone the repository](#clone-repository)
  2. [Install Node.js](#install-node)
  3. [Install the dependencies](#dependencies)
  4. [Install MySQL Workbench](#install-mysql)
  5. [Set up a development database](#database-setup)
  6. [Create a .env file to store your MySQL Password](#create-env)
  7. [Verify database connection information](#db-connect)
  8. [Start the server](#start-server)

### <a name="clone-repository"></a> Clone the repository and run locally
The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:
<pre>
  git clone git@github.com:UnicornBear/projectTwo.git
  cd projectTwo
</pre>

## <a name="screenshots"></a> Screenshots

### Welcome to Our Project #2
<img src="https://github.com/UnicornBear/projectTwo/blob/master/public/images/readMe_One.PNG?raw=true">
<br>
<br>
<img src="https://github.com/UnicornBear/projectTwo/blob/master/public/images/readMe_Two.PNG?raw=true">


## <a name="technologies-used"></a> Technologies used to build app
* [Backend technologies](#Backend)
* [Frontend technologies](#Frontend)

### <a name ="Backend"></a> Backend technologies
* Node.js (https://nodejs.org/en/)
* MySQL (https://www.mysql.com/)
* Express (http://expressjs.com/)
* ORM - Object Relational Mapping (https://en.wikipedia.org/wiki/Object-relational_mapping)

### <a name="Frontend"></a> Frontend technologies
* HTML
* CSS
* Materialize (http://materialize.com/)
* Javascript
* jQuery (https://jquery.com/)
* Handlebars (http://handlebarsjs.com/)


## <a name="design-improvements"></a> Design improvements
The application will be upgraded to have User accounts that are password protected.  This will allow us to have set accounts that will replace the keycode current function.  Having a set account, a running points total will be stored for the user.   We also thought about having a prize screen so the Parents can set prizes that can be won when they store enough points from completed chores.   

## <a name="Acknowledgments"></a> Acknowledgments 
We would like to give thanks to Adam, Abe and Gabe for all their support and hard work.  

## <a name ="Issues"></a> Issues
