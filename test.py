# list1 = [[0,0,0,0], [0,0,0,0,0], [0,0,0], [0,0,0,0],[0,0,0,0,0]]
# for i in range(len(list1)):
#     for j in range(len(list1[i])):
#         list1[i][j]=1

from itertools import product

from matplotlib.cbook import flatten

a = ['Burning', 'Crampy', 'Dull', 'Gnawing', 'Intense', 'Intermittent or episodic',
     'Ongoing (chronic)', 'Sharp', 'Steady', 'Sudden (acute)', 'Worsening or progressing']
b = ['Abdomen but radiates to other parts of the body','Lower abdomen','Middle abdomen','One or both sides','Upper abdomen']
c = ['Coughing or other jarring movements',
     'Drinking alcohol',
     'Eating certain foods',
     'Menstrual cycle',
     'Stress']
d = ['Antacids',
     'Avoiding certain foods',
     'Changing position',
     'Drinking more water',
     'Eating certain foods',
     'Eating more fiber']
e = ['Abdominal swelling',
     'Black or bloody stools',
     'Constipation',
     'Diarrhea',
     'Fever',
     'Inability to move bowels in spite of urge',
     'Loose, watery stools',
     'Nausea or vomiting',
     'Passing gas',
     'Pulsing sensation near the navel',
     'Rash',
     'Stomach growling or rumbling',
     'Unintended weight loss',
     'Urgent need to have a bowel movement']
a1 = []
b1 = []
c1 = []
d1 = []
e1 = []
for i in range(len(a)):
    a1.append('0')
for i in range(len(b)):
    b1.append('0')
for i in range(len(c)):
    c1.append('0')
for i in range(len(d)):
    d1.append('0')
for i in range(len(e)):
    e1.append('0')
listfin = [a1,b1,c1,d1,e1]
# print(listfin)
listfin = list(flatten(listfin))
ans = []
def printTheArray(arr, n):
 
    for i in range(0, n):
        print(arr[i], end = " ")
     
    print()
 
# Function to generate all binary strings
def generateAllBinaryStrings(n, arr, i):
 
    if i == n:
        printTheArray(arr, n)
        return
     
    # First assign "0" at ith position
    # and try for all other permutations
    # for remaining positions
    arr[i] = 0
    generateAllBinaryStrings(n, arr, i + 1)
 
    # And then assign "1" at ith position
    # and try for all other permutations
    # for remaining positions
    arr[i] = 1
    generateAllBinaryStrings(n, arr, i + 1)
 
n = len(listfin)
arr = [None] * n
 
    # Print all binary strings
generateAllBinaryStrings(n, arr, 0)
 
