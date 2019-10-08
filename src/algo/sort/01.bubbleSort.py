
def bubbleSort(arr):
    length = len(arr)
    for i in range(1, length):
        flag = True
        for j in range(0, length - i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                flag = False
        if(flag):
            break
    return arr

arr = [1,3,20,9,60,49,78,200]
bubbleSort(arr)
print(arr)
