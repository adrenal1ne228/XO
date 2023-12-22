let stringifyBoard = function(board){
    return board[0].join(' ') +
    '\n' +
    board[1].join(' ') +
    '\n' +
    board[2].join(' ');
}

let haxtanak = function(board, player){
    //row
    if(board[0][0]  === player && board[0][1]  === player && board[0][2]  === player){
        return true
    }
    if(board[1][0]  === player && board[1][1]  === player && board[1][2]  === player){
        return true
    }
    if(board[2][0]  === player && board[2][1]  === player && board[2][2]  === player){
        return true
    }
    //column
    if(board[0][0]  === player && board[1][0]  === player && board[2][0]  === player){
        return true
    }
    if(board[0][1]  === player && board[1][1]  === player && board[2][1]  === player){
        return true
    }
    if(board[0][2]  === player && board[1][2]  === player && board[2][2]  === player){
        return true
    }

    //diagonal
    if(board[0][0]  === player && board[1][1]  === player && board[2][2]  === player){
        return true
    }
    if(board[2][2]  === player && board[1][1]  === player && board[0][0]  === player){
        return true
    }
    return(false);
}

let haxtecinq = haxtanak(board,player);

if(haxtecinq){
    alert('Haxtecinq');
}

let board = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
]

let player = 'x';

while(true){
    let boardStr = stringifyBoard(board);
    let row = +prompt('value row \n \n \n' +boardStr)
    let column = +prompt('value column \n \n \n' +boardStr)

    if(board[row][column] !== '-'){
        alert('Partvecinq');
        break;
    }
    board[row][column] = player;
}

if(player === 'x'){
    player === '0'
}
else{
    player ==='x'
}