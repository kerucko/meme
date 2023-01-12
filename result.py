import random
import string

def procent(str1, str2):
    array1 = list(map(int, str1.split("_")))
    array2 = list(map(int, str2.split("_")))
    count_memes = len(array1)
    dif = [0] * count_memes
    result = 1
    for i in range(count_memes):
        dif[i] = abs(array1[i] - array2[i])
        if dif[i] == 6:
            result *= 0.4
        if dif[i] == 5:
            result *= 0.6
        if dif[i] == 4:
            result *= 0.8
        if dif[i] == 3:
            result *= 0.9
        if dif[i] == 2:
            result *= 0.95
        if dif[i] == 1:
            result *= 1
        if dif[i] == 0:
            result *= 1
    return round(result * 100)


def get_id(array_id):
    length = 10
    length_array = len(array_id)
    str_and_dig = string.ascii_letters + string.digits
    id = ''.join(random.sample(str_and_dig, length))
    for i in range(length_array):
        if (array_id[i] == id):
            id = get_id(array_id)
            break
    array_id.append(id)
    return id

