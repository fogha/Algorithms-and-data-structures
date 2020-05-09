array = [1,2,3,4,5]

def square(arr) 
  new_array = []
  arr.each do |num|
    num *= 2
    new_array.push(num)
  end

  return new_array

end

puts square(array)