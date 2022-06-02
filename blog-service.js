
//fs module provides an API for interacting with the file system
const fs = require("fs");

var posts = [];
var categories = [];

//------------------------------------------------------------------------------------------
// FUNCTION INITIALIZE
// loads JSON data into global arrays
//------------------------------------------------------------------------------------------
module.exports.initialize = function () {

    var promise = new Promise((resolve, reject) => {
       
        try {

            fs.readFile('./data/posts.json', (err, data) => {
                if (err) throw err;

                posts = JSON.parse(data);
                console.log("INITIALIZE - load posts.");
            })

            fs.readFile('./data/categories.json', (err, data) => {
                if (err) throw err;

                departments = JSON.parse(data);
                console.log("INITIALIZE - load categories.");
            })

        } catch (ex) {
                      console.log("INITIALIZE - FAILURE.");
                      reject("INITIALIZE - FAILURE.");
                     }
        console.log("INITIALIZE - SUCCESS.");
        resolve("INITIALIZE - SUCCESS.");
    })

    return promise;
};

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
           if (posts[i].isManager == true) {
           published.push(posts[i]);
           }
       }

       if(published.length === 0) {
        var err = "getManagers() does not have any data.";
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