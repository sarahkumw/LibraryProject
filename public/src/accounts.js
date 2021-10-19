
function findAccountById(accounts, id) {
  for (let i=0; i<accounts.length; i++){
    if (accounts[i].id === id){
      result = accounts[i];
    }
  }
  return result
}

function sortAccountsByLastName(accounts) {
  const sortedIds = accounts.sort((id1, id2) => 
  id1.name.last.toLowerCase() < id2.name.last.toLowerCase() ? -1 : 1 );
  return sortedIds
}

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

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  let checkedOutBooks = [];
  for (let i=0; i<books.length; i++){
    for (let j=0; j<books[i].borrows.length; j++){
      if (books[i].borrows[j].returned === false && books[i].borrows[j].id === accountId){
        checkedOutBooks.push(books[i])
      }
    }
  }
  for (k=0; k<checkedOutBooks.length; k++){
    checkedOutBooks[k].author = authors.find((author) => author.id === checkedOutBooks[k].authorId)
  }
  return checkedOutBooks
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
