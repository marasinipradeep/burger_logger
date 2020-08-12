![License badge](https://img.shields.io/badge/license-MIT-green)

# Burger Logger

This is a burger logger application made with MySQL, Node, Express, Handlebars and a self written ORM. It also follows the MVC design pattern.Node and MySQL is used to query and route data in the app, and Handlebars is used for  generating HTML.

## Table of Content
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#Licence)
4. [Contribution](#Contribution)
5. [Tests](#Tests)
6. [Questions](#Questions)
7. [StartBy](#StartBy)
8. [VideoLink](#VideoLink)

## Installation
[MySQL](https://www.npmjs.com/package/mysql) for database.
[express](https://expressjs.com/) for routes.
[handlebars](https://handlebarsjs.com/) for HTML templating engine.
 Install the packages/dependencies by hitting following command on your terminal console:-
```
npm install

```

### Usage

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* This app will store every burger in a database, whether devoured or not.

## License

```
This is MIT license

```

## Contribution

```
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owner of this repository before making a change.
```

## Tests
Since, there is no need of automatic testing.Just manual check on database weather user input data is stored and updated witout any error.


## Questions
 <a href="https://github.com/marasinipradeep">Github Url : https://github.com/marasinipradeep</a>

 <a href="marasinipradeep@gmail.com">Email : marasinipradeep@gmail.com</a>




## StartBy Instructions

Download or clone the project:-

1. Install the packages  by running `npm install` from the command line of code.

#### DB Setup

1. In the `db` folder, there is a file named `schema.sql`.Copy and paste on workbech which will do following things:

   * Creates the `burgers_db`.
   * Switches to use the `burgers_db`.
   * Creates a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.

2. In the `db` folder, there is  a `seeds.sql` file.This will help you to  insert queries to populate the `burgers` table with at least some  entries.


#### Config Setup

1. Inside your `burger` directory, there is  a folder named `config`.

2. Edit on  a `connection.js` file inside `config` directory.

   * Provide your Username, Password and databse name.

#### Directory structure

The folder structures looks as below:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
      └── main.handlebars
      └── partials
        └── burgers
            └── burger-block.handlebars
            └── devoured-block.handlebars
```

## Demo Video Link 
<a href= "https://www.youtube.com/watch?v=xbQRDVe8lrk&feature=youtu.be">Click here for demo video link</a>

## Heroku Live Link 
<a href= "https://burgerloggerusinghandlebars.herokuapp.com/">Click here for live application link</a>
