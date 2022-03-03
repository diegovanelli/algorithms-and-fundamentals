export function changeIndex(list, index) {
    const indexItem = list[index];

    list[index] = list[index - 1];
    list[index - 1] = indexItem;
}