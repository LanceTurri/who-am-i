const findNextInArray = (item: string, itemArray: string[]): number => {
    let itemIndex = itemArray.indexOf(item);

    if (itemIndex === itemArray.length - 1) {
        // The item passed in was the last in the array.
        // Return 0 to restart at the beginning.
        return 0;
    }

    itemIndex++;
    return itemIndex;
};

export { findNextInArray };
