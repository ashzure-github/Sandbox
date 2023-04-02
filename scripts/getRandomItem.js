function getRandomItem(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomItem = array[randomIndex];
    return randomItem;
}