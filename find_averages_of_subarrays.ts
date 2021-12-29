// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
//Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
/**
  what is the problem asking. 
  the problem is asking to take every subarray of length k and find the average sum 
  for example 1 + 3 + 2 + 6 + (-1) / 5 => ?

  what is the input ?
   the input is a list of integers or doubles. 
  what is the output ?
    the expected output is a list of sum averages. 

    what does windowend >= k -1 ?? 
    this means that our test condition has been met 
    we need this to execute after 5 elements are reached and everytime thereafter
    1 + 3 + 2 + 6 + (-1)
    push to results 
    subtract one, let 4 be added, push to result again
*/


export function find_averages_of_subarrays(k: number, arr: number[]){
  let results: Number[] = []
  let windowstart = 0;
  let sum = 0.00;
  for(let windowend = 0; windowend < arr.length; windowend++){
    sum += arr[windowend];
    if(windowend >= k -1){
      results.push(sum/k);
      sum -= arr[windowstart];
      windowstart++;
    }
  }
  return results
}




