function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

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
