import { changeIndex } from "./change";
import { returnLowestPrice } from "./lessPrice";

export function selectionSort(products) {
    products.forEach((product, index) => {
        let lowestPrice = returnLowestPrice(products, index);
        const lowestProductPrice = products[lowestPrice];

        products[index] = lowestProductPrice;
        products[lowestPrice] = product;
    });

    return products;
}