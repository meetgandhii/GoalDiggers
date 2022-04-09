import pandas as pd

# Read the csv file
data = pd.read_csv('file.csv')
print(data)
data["Final"].dropna(inplace = True)

print(data)