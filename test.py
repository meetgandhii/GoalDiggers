# list1 = [[0,0,0,0], [0,0,0,0,0], [0,0,0], [0,0,0,0],[0,0,0,0,0]]
# for i in range(len(list1)):
#     for j in range(len(list1[i])):
#         list1[i][j]=1
# def printTheArray(arr, n):

#     for i in range(0, n):
#         print(arr[i], end = " ")

#     print()

# # Function to generate all binary strings
# def generateAllBinaryStrings(n, arr, i):

#     if i == n:
#         printTheArray(arr, n)
#         return

#     # First assign "0" at ith position
#     # and try for all other permutations
#     # for remaining positions
#     arr[i] = 0
#     generateAllBinaryStrings(n, arr, i + 1)

#     # And then assign "1" at ith position
#     # and try for all other permutations
#     # for remaining positions
#     arr[i] = 1
#     generateAllBinaryStrings(n, arr, i + 1)

# n = len(listfin)
# arr = [None] * n

#     # Print all binary strings
# generateAllBinaryStrings(n, arr, 0)


import itertools

from matplotlib.cbook import flatten
list12 = [['Eating certain foods', 'Travel or motion'],
 ['Intermittent or episodic',
  'Recent (hours to days)',
  'Sudden (minutes to hours)',
  'Within the first two months of life'],
 ['Abdominal bloating or swelling',
  'Abdominal pain, discomfort or cramps',
  "Abdominal pain that's severe and progressive",
  'Constipation',
  'Cough',
  'Diarrhea',
  'Dizziness',
  'Failure to thrive or gain weight (infant)',
  'Fever',
  'Fussiness or irritability',
  'Hives or rash',
  'Swelling or tingling of lips, face and tongue',
  'Wet burps or spit up',
  'Wheezing']]

a = list12[0]
b = list12[1]
c = list12[2]

a1 = []
b1 = []
c1 = []
for i in range(len(a)):
    a1.append(0)
for i in range(len(b)):
    b1.append(0)
for i in range(len(c)):
    c1.append(0)
listfin = [a1, b1, c1]
print("[")
for i in range(len(a1)):
    listfin[0][i] = 1
    for j in range(len(b1)):
        listfin[1][j] = 1
        for k in range(len(c1)):
            listfin[2][k] = 1
            
            print(f"{listfin},")
            listfin[2][k]=0
        listfin[1][j]=0
    listfin[0][i]=0
print("]")


