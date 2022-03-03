import { returnLowestPrice } from "./lessPrice";

export function sortBooksByPrice(books) {
    books.forEach((book, index) => {
        let lowestPrice = returnLowestPrice(books, index);
        const lowestBookPrice = books[lowestPrice]

        books[index] = lowestBookPrice
        books[lowestPrice] = book 

    });

    return books;
}