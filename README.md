Simple Application Spring Boot and Angular JS
=================================================
The application that expose a REST service that returns a list of People. This application use Spring Boot, Maven and Angular JS.

![Project screenshot](https://github.com/tiagobarreto/simple-app-spring-mvc-angularjs/blob/master/docs/screenshot.png)

Install project dependencies
-----------------------------

Install JDK with [Homebrew](http://brew.sh/) or [manual Install](http://docs.oracle.com/javase/7/docs/webnotes/install/).

    brew install java

Install Maven with [Homebrew](http://brew.sh/) or [manual Install](https://maven.apache.org/install.html).

    brew install maven

Running project
-----------------------------------
After you sucessfully installed everything, just open a command and run:

    mvn clean package

To run, either call Java or run Maven

    java -jar target/people-rest.war

or

    mvn spring-boot:run

Now, just access the application in your browser:

    http://localhost:8090/

Project dependencies
-----------------------------------
- [bower](http://bower.io/)
  - [Angular Js](https://angularjs.org/)
  - [jQuery](https://jquery.com/)
- [gulp](http://gulpjs.com/)
  - gulp-concat
  - gulp-concat-vendor
  - gulp-uglify
  - gulp-minify-css
  - main-bower-files
  - gulp-inject
  - gulp-run-sequence
  - gulp-gzip
  - gulp-clone
  - stream-series
- [node](https://nodejs.org/)

Maven plugins
-----------------------------------
- [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin)

Project responsive
-----------------------------------
Full HD, HD and Wide VGA

API Documentation
-----------------------------------

API Service can be reached using the following URL:

    http://localhost:8090/rest/

People - GET - /<code>people</code>/
  * <b>Return</b>
    * A JSON object with the following keys and values
      * id
      * name
      * disclosableInfo
    * Example

   <pre>
        [
            {
                id: 0,
                name: "Maria Miyazaki",
                disclosableInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    </pre>

Similiar Project
-----------------------------------
[Simple Crud with Elixir, Phoenix and Brunch](https://github.com/tiagobarreto/simple-crud-phoenix)
