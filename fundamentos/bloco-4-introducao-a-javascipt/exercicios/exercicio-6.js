let piece = "KING"



switch(piece.toLowerCase()){
    case 'bishop': console.log("Bishop -> diagonals")
    break;
    case 'king': console.log('Any direction, but just one block per turn')
    break;
    case 'queen': console.log ( 'Any direction')
    break;
    case 'pound': console.log('Just foward, if in his first turn can walk 2 times')
    default: console.log("ERROR")

}
