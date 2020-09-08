movies = []


def menu():
    user_input = input(
        "Enter 'a' to add a movie, 'l' to see your movies, 'f' to find a movie, and 'q' to quit")

    while user_input != 'q':
        if user_input == 'a':
            add_movie()
        elif user_input == 'l':
            show_movies()
        elif user_input == 'f':
            movie = input('which movie do you want to find')
            find_movie(movie)
        else:
            print('Unkwown command, please try again')

        user_input = input(
            "Enter 'a' to add a movie, 'l' to see your movies, 'f' to find a movie, and 'q' to quit")


def add_movie():
    name = input('What is the movie name')
    director = input('who is the movie director')
    year = input('In what year was the movie released')

    movies.append({
        'name': name,
        'director': director,
        'year': year
    })


def show_movies():
    for movie in movies:
        print(f"Name: {movie['name']}")
        print(f"Director: {movie['director']}")
        print(f"Release year: {movie['year']}")


def find_movie(name):
    for movie in movies:
        if movie['name'] == name:
            print(f"Name: {movie['name']}")
            print(f"Director: {movie['director']}")
            print(f"Release year: {movie['year']}")


menu()

print(movies)
