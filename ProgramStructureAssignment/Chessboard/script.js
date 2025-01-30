function createChessboard() {
    let chessboard = '';

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            // Alternate between space and "#" depending on row and column parity
            if ((row + col) % 2 === 0) {
                chessboard += ' ';
            } else {
                chessboard += '#';
            }
        }
        chessboard += '\n'; // Add a newline after each row
    }

    return chessboard;
}

console.log(createChessboard());

function createChessboard2(size) {
    let chessboard = '';

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            // Alternate between space and "#" depending on row and column parity
            if ((row + col) % 2 === 0) {
                chessboard += ' ';
            } else {
                chessboard += '#';
            }
        }
        chessboard += '\n'; // Add a newline after each row
    }

    return chessboard;
}

// Define the size of the grid
let size = 11; // You can change this value to any size you want

console.log(createChessboard2(size));
