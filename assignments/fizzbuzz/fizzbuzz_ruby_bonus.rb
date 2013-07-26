# Done in JS? Now do it in Ruby.
for i in 1..100
  if i%3 == 0
    if i%5 == 0
      puts "Fizz Buzz"
    else
      puts "Fizz"
    end
  elsif i%5 == 0
    puts "Buzz"
  else
    puts i
  end
end