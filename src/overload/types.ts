/**
 * Multiply parameter one by 1
 * 
 * @param x 
 */

function times (x: number): number;


/**
  * Multiply parameter one by parameter two.
  * 
  * @param x 
  * @param y 
  */
 
function times (x: number, y: number): number;

function times (x: number, y?: number) {
  return y === undefined ? x*1 : x*y;
}

export {
  times
}
