for i in range(1, 1001):
    for n in range(1, i):
        if(i % n == 0):
            print(f'{i} is not a prime number')
            break
    else:
        print(f'{i} is a prime number')
