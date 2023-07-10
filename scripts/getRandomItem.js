function getRandomItem(array) {
    
    if (!Array.isArray(array) || array.length === 0) {
        return undefined; // Return undefined for empty or non-array inputs
      }

    var randomIndex = Math.floor(Math.random() * array.length);
    var randomItem = array[randomIndex];
    return randomItem;
}