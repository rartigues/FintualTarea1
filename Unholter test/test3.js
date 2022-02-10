/*
Given a rectangular matrix, return all of the elements of the matrix in spiral order.

Example

For

matrix =
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]

the output should be
solution(matrix) = [1, 2, 3, 4, 5, 6, 7, 8, 9].

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.array.integer matrix

    A rectangular matrix.

    Guaranteed constraints:
    0 ≤ matrix.length ≤ 100,
    0 ≤ matrix[i].length ≤ 100,
    -1000 ≤ matrix[i][j] ≤ 1000.

    [output] array.integer

*/

function solution(matrix) {
    

    if (matrix=== null || matrix.length === 0) return [];
    // console.log(matrix);
    var resultado= [];
    var filas= matrix.length;
    var columnas= matrix[0].length;
    // console.log(filas, columnas);

    //! Parametros
    var fStart= 0;
    var fEnd= filas-1;
    // console.log(fStart, fEnd);
    var cStart= 0;
    var cEnd= columnas-1;
    // console.log(cStart, cEnd);
    
    while (fStart<= fEnd && cStart<= cEnd && resultado.length< filas*columnas) {
        for (var i= cStart; i<= cEnd; i++) {
            if (resultado.length< filas*columnas) resultado.push(matrix[fStart][i]);
        }
        fStart++;
        
        for (var i= fStart; i<= fEnd; i++) {
            if (resultado.length< filas*columnas) resultado.push(matrix[i][cEnd]);
        }
        cEnd--;

        
        for (var i= cEnd; i>= cStart; i--) {
            if (resultado.length< filas*columnas) resultado.push(matrix[fEnd][i]);
        }
        fEnd--;
        
        for (var i= fEnd; i>= fStart; i--) {
            if (resultado.length< filas*columnas) resultado.push(matrix[i][cStart]);
        }
        cStart++;
    }
    
    return resultado;
}

console.log(solution([[33,29,-15,-20,-41,-1,34,20,-41,44], 
    [14,-11,-27,-35,29,-14,34,-41,49,19], 
    [-12,-44,44,-43,-13,-6,40,-24,-6,8], 
    [-40,4,27,2,2,15,38,4,-13,15], 
    [-42,3,5,10,15,34,-18,-22,9,38]]));