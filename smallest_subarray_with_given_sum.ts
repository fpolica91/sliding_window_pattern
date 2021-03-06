/***
  Given an array of positive numbers and a positive number āS,ā find the length of the smallest     
  contiguous subarray whose sum is greater than or equal to āSā. 
  Return 0 if no such subarray exists.

  Example 1:
  Input: [2, 1, 5, 2, 3, 2], S=7 
  Output: 2
  Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

  what do they want? 
  we are given a list and a number and we need to find the subarray that adds to greater or equal to s
  and find the one that requires the least number of elements, return length. 
**/


export function smallest_subarray_with_given_sum(arr: number[], s: number){
    let shortest = Infinity;
    let sum = 0;
    let windowstart = 0;

    for(let windowend = 0; windowend < arr.length; windowend++){
      sum += arr[windowend];
      while(sum >= s){
        shortest = Math.min(shortest, windowend - windowstart +1);
        sum -= arr[windowstart];
        windowstart++;
      }
    }

  return shortest;
    
}