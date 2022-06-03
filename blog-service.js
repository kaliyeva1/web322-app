
//fs module provides an API for interacting with the file system
const fs = require("fs");

var posts = [];
var categories = [];
const res = require('express/lib/response');

const { resolve } = require('path');
var exports = module.exports = {};

//------------------------------------------------------------------------------------------
// FUNCTION INITIALIZE
// loads JSON data into global arrays
//------------------------------------------------------------------------------------------

module.exports.initialize = () => {
    var promise = new Promise((resolve, reject) => {
    try
    {
    fs.readFile('./data/categories.json', (error, data) => {
    if (error) throw error;
   
    categories = JSON.parse(data);
    resolve("Successful");
    });
    fs.readFile('./data/posts.json', (error, data) => {
    if (error) throw error;
    posts = JSON.parse(data);
    resolve("Successful");
   
    });
    }
    catch(error){
    reject('Unable to open file');
    }
    });
    return promise;
   }
   

//------------------------------------------------------------------------------------------
// FUNCTION GETALLEMPLOYEES
// passes the array of employees
//------------------------------------------------------------------------------------------
module.exports.getAllPosts = function () {

    var promise = new Promise((resolve, reject) => {
        
       //posts = [];
       if(posts.length === 0) {
        var err = "getAllPosts() does not have any data.";
        reject({message: err});
       }  

    resolve (posts);
    })
    return promise;
};

//------------------------------------------------------------------------------------------
// FUNCTION GETMANAGERS
// passes the array of managers
//------------------------------------------------------------------------------------------
module.exports.getPublishedPosts = function () {

    var published = [];
    var promise = new Promise((resolve, reject) => {
      
       for (var i=0; i < posts.length; i++){
           if (posts[i].isPosts == true) {
           published.push(posts[i]);
           }
       }

       if(published.length === 0) {
        var err = "getPublishedPosts() does not have any data.";
        reject({message: err});
       }  

    resolve (published);
    })
    return promise;
};

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
module.exports.getCategories = function () {

    var promise = new Promise((resolve, reject) => {
        //ctegories = []; //to test errors
        if(categories.length === 0) {
         var err = "getCategories() does not have any data.";
         reject({message: err});
        }  
 
     resolve (categories);
     })
     return promise;
};