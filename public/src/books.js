//search authors array for matching author id
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

//search books array for matching book id
function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

//create two empty resulting arrays
//loop through books and check if one of the borrows.returned = false
//if false, add to checkedOut array, if not add to returned array
//return array containing both resulting arrays
function partitionBooksByBorrowedStatus(books) {
  let checkedOut = [];
  let returned =[];
  for (let i=0; i<books.length; i++){
   if (books[i].borrows.some((borrow) => borrow.returned === false)){
     checkedOut.push(books[i]);
   }
   else{
     returned.push(books[i]);
   }
  }
  return [checkedOut, returned]
}

//create empty result array
//loop through book's borrows array and find id borrowed
//find matching account in accounts array
//add "returned" key to account object
//add account object to result array but only for the first 10 indexes of borrows
function getBorrowersForBook(book, accounts) {
  let accountsBorrowed = [];
  for (i=0; i < book.borrows.length; i++){
    const borrowedId = book.borrows[i].id;
    let matchingAccount = accounts.find((account) => account.id === borrowedId);
    matchingAccount.returned = book.borrows[i].returned;
    if( i < 10 ) {
      accountsBorrowed.push(matchingAccount);
    }
  }
  return accountsBorrowed;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
