array = Array[4,5,8,4,1,2,9];
$i = 0;
$max_num 

#this code is supposed to find the largest number in an array

def max(arr) 
  arr.sort();
  n = arr.length() - 1;
  max_num = arr[n];
  
  return max_num
end


puts max(array);