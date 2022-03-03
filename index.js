import { returnBooks } from "./src/book";
import { insertionSort } from "./src/insertionSort";
import { selectionSort } from "./src/selectionSort";

let books = returnBooks();
books = selectionSort(books);

console.log('Book ordered by price selection: ');
books.forEach((book, index) => {
    console.log(`${index+1}:`);
    console.log(`Tile: ${book.title}`);
    console.log(`Price: R$${book.price}`);
    console.log('--------------------');
});


// books = returnBooks();
// console.log(books)
// books = insertionSort(books);

// console.log('Book ordered by price insertion: ');
// books.forEach((book, index) => {
//     console.log(`${index+1}:`);
//     console.log(`Tile: ${book.title}`);
//     console.log(`Price: R$${book.price}`);
//     console.log('--------------------');
// });