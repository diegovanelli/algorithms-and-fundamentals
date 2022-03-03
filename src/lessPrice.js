export function returnLowestPrice(books, position) {
    let cheapest = position;
    for (let current = cheapest; current < books.length; current++) {
        if (books[current].price < books[cheapest].price) {
            cheapest = current;
        }
        
    }
    return cheapest;
}