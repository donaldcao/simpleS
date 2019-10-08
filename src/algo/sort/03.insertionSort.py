def insertionSort(arr):
    for i in range(len(arr)):
        preIndex = i -1
        current = arr[i]
        while preIndex >= 0 and arr[preIndex] > current:
            arr[preIndex+1] = arr[preIndex]
            preIndex -= 1
        arr[preIndex + 1] = current


arr = [10,17,19,37,99,211,80,11]
insertionSort(arr)
print(arr)