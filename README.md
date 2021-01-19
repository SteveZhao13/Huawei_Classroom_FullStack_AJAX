# Huawei_Classroom_FullStack_AJAX

This repository is to learn AJAX in Huawei Classroom for Full Stack programming learning

## Chapter 1

### 1-1: Intro to AJAX

AJAX is short for Asynchronous JavaScript and XML. With AJAX, web applications can send and retrieve data from a server asynchronously and load data locally

### 1-2: Node.js

* Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
* Node.js can use JavaScript to build a web server
* Download Node.js from [Node.js website](https://nodejs.org/en/) and install it on your workstation before using it. Check its status using `node -v` and `npm -v` from command-line interface

### 1-3: Koa
* Intro to Koa framework
    * Koa is the next generation web framework for node.js
    * Install Koa using `npm install koa-generator -g` command and check its status using `koa2 -V` from command-line interface
    
* Using Koa to create a web server
    ```bash
    koa2 project_name # crate a new koa2 project
    cd project_name
    npm install # install all the required dependencies
    npm start # start the web server
    ```
    After start the web server, we can go to `localhost:3000` to visit the website
    
* Koa project directory file/folder list - codebase: [ajax_project](https://github.com/SteveZhao13/Huawei_Classroom_FullStack_JavaScript/blob/master/ajax_project)

    * `/bin`: executable file
    * `/node_modules`: installed dependencies
    * `/public`: static resources used in the web server
    * `/routes`:files used to send requests and change routers
    * `/views`: html page templates
    * `app.js`: starting code
    * `package.json`: detailed info about this project

## Chapter 2

### 2-1: AJAX XMLHttpRequest (XHR)

Web application (browser) uses `XMLHttpRequest` to send asynchronous request to the web server, it returns updated info to the browser so that the web application can update its content. `XHR` is the core to AJAX.

* XHR methods
    * `.open(method, url, async_bool)`: initial request
    * `.send()`: send the request to the server
    * `.setRequestHeader()`: add label/value pairs to the header (commonly used: Content-type)
    
* XHR properties
    * `onreadystatechange`: define a function to be called when the readyState property changes
    * `readyState`: status of the XHR object
    * `status`: return code of the request
    * `reponseText`: return the response data as a string
    
* How to use XHR object
    1. use `new` to create a XMLHttpRequest object
    2. use `open()` method to initial parameters
    3. use `send()` method to send the request to the server
    4. use `onreadystatechange` property to fetch the return data
    
// chapter 3-3