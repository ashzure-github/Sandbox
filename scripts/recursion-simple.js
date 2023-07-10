// function add(numba1, numba2) {
//     return numba1 + numba2;
// }

function add(numba1, numba2) {
    if (numba2 === 0)
        return numba1;

    return add(numba1 + 1, numba2 - 1);
}

// add(5, 3)
    // add(6, 2)
        // add(7, 1)
            // add(8, 0)
        //
    //
//