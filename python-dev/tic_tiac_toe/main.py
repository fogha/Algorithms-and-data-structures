# create the board
board = ["-", "-", "-",
         "-", "-", "-",
         "-", "-", "-"]


# display the board
def display_board():
    print(board[0] + ' | ' + board[1] + ' | ' + board[2])
    print(board[3] + ' | ' + board[4] + ' | ' + board[5])
    print(board[6] + ' | ' + board[7] + ' | ' + board[8])


# game_status
game_status = 'running'

# winner
winner = None

# getting the current player
current_player = 'X'


# play game
def play_game():
    # display the inital board
    display_board()

    while game_status != 'stop':

        handle_turn(current_player)

        check_game_status()

        flip_player()

    if winner == "X" or winner == "O":
        print(winner + "  won")
    else:
        print("Tie: Its a tie!!!")


# handle a turn
def handle_turn(player):
    print(player + "'s  turn")
    position = input('Please enter position from 1-9:  ')

    valid = False
    while not valid:
        while position not in ['1', '2', '3', '4', '5', '6', '7', '8', '9', ]:
            position = input(
                'invalid postion. Please enter position from 1-9:  ')

        position = int(position) - 1

        if board[position] == '-':
            valid = True
        else:
            print('Cant go there, try agai')

    board[position] = player
    display_board()


# check game status
def check_game_status():

    # check win
    check_win()
    # check tie
    check_tie()
    return


def check_win():
    global winner

    row_winner = check_rows()
    column_winner = check_columns()
    diagonal_winner = check_diagonals()

    if row_winner:
        winner = row_winner
    elif column_winner:
        winner = column_winner
    elif diagonal_winner:
        winner = diagonal_winner
    else:
        winner = None

    return


def check_rows():
    global game_status
    row_1 = board[0] == board[1] == board[2] != '-'
    row_2 = board[3] == board[4] == board[5] != '-'
    row_3 = board[6] == board[7] == board[8] != '-'
    if row_1 or row_2 or row_3:
        game_status = 'stop'
    if row_1:
        return board[0]
    elif row_2:
        return board[3]
    elif row_3:
        return board[6]
    return


def check_columns():
    global game_status
    column_1 = board[0] == board[3] == board[6] != '-'
    column_2 = board[1] == board[4] == board[7] != '-'
    column_3 = board[2] == board[5] == board[8] != '-'
    if column_1 or column_2 or column_3:
        game_status = 'stop'
    if column_1:
        return board[0]
    elif column_2:
        return board[1]
    elif column_3:
        return board[2]
    return


def check_diagonals():
    global game_status
    dia_1 = board[0] == board[4] == board[8] != '-'
    dia_2 = board[2] == board[4] == board[6] != '-'
    if dia_1 or dia_2:
        game_status = 'stop'
    if dia_1:
        return board[0]
    elif dia_2:
        return board[2]
    return


def check_tie():
    global game_status
    if '-' not in board:
        game_status = 'stop'
        print('Its a funcking tie')
    return


def flip_player():
    global current_player
    if current_player == 'X':
        current_player = 'O'
    elif current_player == 'O':
        current_player = 'X'
    return


play_game()
