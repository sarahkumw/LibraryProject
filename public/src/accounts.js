

// use find to search account array for id that matches given id
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

// sort array by account.name.last
function sortAccountsByLastName(accounts) {
  const sortedIds = accounts.sort((id1, id2) => 
  id1.name.last.toLowerCase() < id2.name.last.toLowerCase() ? -1 : 1 );
  return sortedIds
}

// set accumulator to 0
// loop through account array
// within each loop, loop through account.borrows array
// check if given account exists in that array
// if it exists, add 1 to accumulator
function getTotalNumberOfBorrows(account, books) {
  let borrows = 0;
  const accountId = account.id
  for (let i=0; i<books.length; i++){
    const accountsBorrowed = books[i].borrows;
    for (let j=0; j<accountsBorrowed.length; j++){
      if (accountsBorrowed[j].id === accountId){
        borrows = borrows + 1;
      }
    }
  }
  return borrows
}

// return filtered book array
//check through each book's borrows array for borrow - returned "false", matching accountid
//add author key to each book with matching author object from authors array
function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  return books.filter(function(book){
    book.author = authors.find((author) => author.id === book.authorId)
    return book.borrows.some((borrower) => borrower.returned === false && borrower.id === accountId)
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
