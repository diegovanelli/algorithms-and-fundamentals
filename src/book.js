export class Book {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

export const returnBooks = () => {
    let books = [];
    books.push(new Book('JavaScript', 25));
    books.push(new Book('PHP', 15));
    books.push(new Book('Java', 30));
    books.push(new Book('Elixir', 50));
    books.push(new Book('Go', 45));
    books.push(new Book('Python', 20));
    return books;
}