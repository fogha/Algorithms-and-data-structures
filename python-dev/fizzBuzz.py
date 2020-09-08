for i in range(1, 101):
    if(i % 3 == 0 and i % 5 == 0):
        print('fizz buzz')
        continue
    if(i % 3 == 0):
        print('fizz')
        continue
    if(i % 5 == 0):
        print('Buzz')
        continue

    else:
        print(i)
