
/**
  Problem Statement#
  Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous    subarray of size ‘k’.

  Example 1:
  Input: [2, 1, 5, 1, 3, 2], k=3 

  what are they asking for ?
    they want to know what is the maximum possible sum with only k numbers.
    
    
    
**/


export function max_sub_array_of_size_k(arr: number[], k: number){
  let maxsum = 0;
  let sum =0;
  let windowstart = 0;
  for(let windowend = 0; windowend < arr.length; windowend++){
    sum += arr[windowend];
    if(windowend >= k -1){
      if(sum > maxsum) maxsum = sum;
      sum -= arr[windowstart];
      windowstart++
    }
  }
  return maxsum;
}