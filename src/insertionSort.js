import { changeIndex } from "./change";

export function insertionSort(products) {
    products.forEach((_, index) => {
        let currentIndex = index;
        while (currentIndex > 0 && products[currentIndex].price < products[currentIndex -1].price) {
            changeIndex(products, currentIndex);
            
            currentIndex--;
        }
    });

    return products;
}