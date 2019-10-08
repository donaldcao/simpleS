def selectionSort(arr):
    for i in range(len(arr) - 1):
        minIndex = i
        for j in range(i+1, len(arr)):
            if(arr[j] < arr[minIndex]):
                minIndex = j

        if i != minIndex:
            arr[i], arr[minIndex] = arr[minIndex], arr[i]

arr = [0,3,20, 9, 18, 7,99]
selectionSort(arr)
print(arr)

