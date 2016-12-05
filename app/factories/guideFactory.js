"use strict";

app.factory("BookStorage", function () {
  
  let books = [];

  let loadBooks = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '../data/guides.json',
      })
      .done(function(results) {
        books = results;
        resolve(results);
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
    });
  };

  return {loadBooks};

});