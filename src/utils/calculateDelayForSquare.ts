export const calculateDelayForSquares = (number: number, constantDelay: number): number=> {
  return constantDelay + (number - 1)
}