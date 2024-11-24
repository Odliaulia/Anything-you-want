import sys
import time


def run_lirik():
    lirik =  [
("The same song", 0.1),
 ("on repeat...", 0.1),
("You can call me anything you want,", 0.1),
("It's fine, ", 0.1),
 ("by me...", 0.1),
("Number two, ", 0.1), 
 ("out of three...", 0.1),
("He says that it's his favourite...", 0.1), 
("and I can't ", 0.1),
("disagree :( ", 0.1),
    ]

    delay = [1.8, 1.5 ,1.8 ,1.6 ,1.7 ,1.8 ,1.9, 1.1, 2.0, 2.0]

    for i, (row_song, delay_str) in enumerate(lirik):
        for szChar in row_song:
            print(szChar, end='')
            sys.stdout.flush()
            time.sleep(delay_str)
        time.sleep(delay[i])
        print('')
    print("// hiksss")


run_lirik()


