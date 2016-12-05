"use strict";

app.controller('bookCtrl', ($scope, BookStorage) => {
  $scope.title = "Angular Book List";

  $scope.books = [];

  BookStorage.loadBooks()
  .then((data)=>{
    setBooks(data);
    // $scope.books = data;
    $scope.$apply();
  });

  let setBooks = (bookArr) => {
    $scope.books = bookArr.guides;
  };

});