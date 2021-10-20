
//loop through books and add 1 to accumulator for each one
function getTotalBooksCount(books) {
  return books.reduce((acc, book) => acc + 1, 0)
}

//loop through accounts and add 1 to accumulator for each 1
function getTotalAccountsCount(accounts) {
  return accounts.reduce((acc, account) => acc + 1, 0)
}

//filter through books array to create result array
//in each book, look through borrows array to see if it contains returned "false"
//count the filtered result array
function getBooksBorrowedCount(books) {
  let checkedOut = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false))
  return checkedOut.length
}

//helper function:
//sort arraky in descending order
//deconstruct array and only return first 5 indexes
function topFive (array) {
  array.sort((num1, num2) => num1.count > num2.count ? -1 : 1);
  var [a, b, c, d, e, ...theRest] = array
  return [a, b, c, d, e] 
}

//create empty result array
//create array containing all the genres to each book
//loop through genres array and check if genre is already in result array
//if it is, add 1 to that genres count
//if not, create object to add to result array with genre "name" and "count"
//return topFive indexes of result array
function getMostCommonGenres(books) {
  let topGenres = [];
  const allGenres = books.map((book) => book.genre)

  for (i=0; i<allGenres.length; i++){
    let found = topGenres.find((genre) => genre.name === allGenres[i]);
    if (found){
      found.count += 1;  
    }
    else {
      topGenres.push({"name": allGenres[i], "count": 1})
    }
  }
  return topFive(topGenres)
}

//create empty result array
//loop through books and create an object with "title" "count" - how many times borrowed
//add objects to result array
//return topFive indexes of result array
function getMostPopularBooks(books) {
  let topBooks = [];
  for (i=0; i<books.length; i++){
    topBooks.push({"name": books[i].title, "count": books[i].borrows.length}) 
  }
  return topFive(topBooks)
}

//create empty result array
//loop through books array
//find matching author in authors array
//add matching author object as author key to each book
//loop through books array
//check if books author is already in result array
//if it is add books amount of borrows to objects count
//if not, create object with "name" and "count" - number of books borrowed, and add to resulting array
//return topFive indexes of result array
function getMostPopularAuthors(books, authors) {
  let topAuthors = [];
  for (i=0; i<books.length; i++){
    let author = authors.find((author) => author.id === books[i].authorId)
    books[i].author = author;
  }
  for (j=0; j<books.length; j++){
    let authorName = `${books[j].author.name.first} ${books[j].author.name.last}`
    let found = topAuthors.find((author) => author.name === authorName)
    if (found) {
      found.count += books[j].borrows.length;
    }
    else {
      topAuthors.push({"name": authorName, "count": books[j].borrows.length});
    }
  }
  return topFive(topAuthors)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
