Simple Application Spring MVC and Angular JS
=================================================
The application that expose a REST service that returns a list of People. This application use Spring MVC, Maven and Angular JS.

Install project dependencies
-----------------------------

Install JDK with [Homebrew](http://brew.sh/) <code>brew install java</code> or [Manual Install](http://docs.oracle.com/javase/7/docs/webnotes/install/).

Install Maven with [Homebrew](http://brew.sh/) <code>brew install maven</code> or [Manual Install](https://maven.apache.org/install.html).

Run project
-----------------------------------
After you sucessfully installed everything, just open a command and run:

    mvn clean package

To run, either call Java or run Maven

    java -jar target/people-rest.war

or

    mvn spring-boot:run

This service can be reached using the following URL:

    http://localhost:8090/rest/people