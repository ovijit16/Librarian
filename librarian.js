var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" }
  /* Task 2 */
];

/* Task 1 */
function getBookTitle( index ){
  return library[index].title;
}

console.log(getBookTitle(4));

 //Task 3 
function addBook( book ){
  library.push(book);
  return library;
}

var newBook = {title: "Origin", year: "2017", author: "Dan Brown", publisher: " Doubleday, Arnoldo Mondadori Editore"};
console.log(addBook(newBook));
//console.log(getBookTitle(5));

// Task 4 
function bookByAuthor(a,b){
  
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;

}
   console.log(library.sort(bookByAuthor));


/* Task 5 */
function findByTitle(name){
  var value,n;
  var found=[];

  for (var i= 0; i<library.length; i++){
    value = library[i].title;
    n = value.toLowerCase().includes(name);
    if (n) found.push(library[i]);
  }
  return found;
  //add code
}

console.log(findByTitle("man"));
console.log(findByTitle("myth"));
