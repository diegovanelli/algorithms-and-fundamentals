export function insertionSort(books) {
    books.forEach((_, index) => {
        let currentBookIndex = index;
        while (currentBookIndex > 0 && books[currentBookIndex].price < books[currentBookIndex -1]. price) {
            let currentBook = books[currentBookIndex];

            books[currentBookIndex] = books[currentBookIndex - 1];
            books[currentBookIndex - 1] = currentBook;
            
            currentBookIndex--;
        }
    });

    return books;
}