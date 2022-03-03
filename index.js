import { returnBooks } from "./src/book";
import { insertionSort } from "./src/insertionSort";
// import { sortBooksByPrice } from "./src/selectionSort";

// let books = returnBooks();
// books = sortBooksByPrice(books);

// console.log('Book ordered by price: ');
// books.forEach((book, index) => {
//     console.log(`${index+1}:`);
//     console.log(`Tile: ${book.title}`);
//     console.log(`Price: R$${book.price}`);
//     console.log('--------------------');
// });


let books = returnBooks();
console.log(books)
books = insertionSort(books);

console.log('Book ordered by price: ');
books.forEach((book, index) => {
    console.log(`${index+1}:`);
    console.log(`Tile: ${book.title}`);
    console.log(`Price: R$${book.price}`);
    console.log('--------------------');
});