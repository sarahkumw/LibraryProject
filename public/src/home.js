function getTotalBooksCount(books) {
  return books.reduce((acc, book) => acc + 1, 0)
}

function getTotalAccountsCount(accounts) {
  return accounts.reduce((acc, account) => acc + 1, 0)
}

function getBooksBorrowedCount(books) {
  let checkedOut = [];
  for (let i=0; i<books.length; i++){
   if (books[i].borrows.some((borrow) => borrow.returned === false)){
     checkedOut.push(books[i]);
   }
  }
  return checkedOut.length
}

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

  topGenres.sort((genreA, genreB) => genreA.count > genreB.count ? -1 : 1)
  var [a, b, c, d, e, ...theRest] = topGenres
  return [a, b, c, d, e]
}

function getMostPopularBooks(books) {
  let topBooks = [];
  for (i=0; i<books.length; i++){
    topBooks.push({"name": books[i].title, "count": books[i].borrows.length}) 
  }
  topBooks.sort((bookA, bookB) => bookA.count > bookB.count ? -1 : 1)
  var [a, b, c, d, e, ...theRest] = topBooks
  return [a, b, c, d, e]
}

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
  topAuthors.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1)
  var [a, b, c, d, e, ...theRest] = topAuthors
  return [a, b, c, d, e]
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
