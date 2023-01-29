/*Reverse array*/
let ReverseArr = [1,2,3,4,5,6,7]
let newArray = []
for (let i=ReverseArr.length-1; i>=0; i--){
    newArray.push(ReverseArr[i])
}
console.log(newArray)// reversed array
/*Sum of array*/
let SumArray = [1,2,undefined,null,4,6,2,'ahmet']
let sum = 0
for (let i=0; i<SumArray.length;i++){
    if (typeof SumArray[i] == 'number'){
        sum = sum + SumArray[i]
    }}
console.log(`Сумма: ${sum}`)//15 only numbers
/*Min/Max array*/
let minMaxArray = [12,32,43,54,-1,98,-43] 
let min = minMaxArray[0]
let max = minMaxArray[0]

for (let i=0; i<minMaxArray.length; i++){
    if(minMaxArray[i]<min){
        min = minMaxArray[i]
    }
    else if(minMaxArray[i]>max){
        max = minMaxArray[i]
    }
}
console.log(`Minimum: ${min}`)//-43
console.log(`Maximum: ${max}`)//98
/*UpperCase*/
let arrayName = ["ahmet","serik","asem","aigul","assel","diana","nurasyl","nursultan"]
let newArrayName = []
for (let i=0; i<arrayName.length;i++){
    newArrayName.push(arrayName[i][0].toUpperCase() + arrayName[i].substring(1))
}
console.log(newArrayName)//['Ahmet', 'Serik', 'Asem', 'Aigul', 'Assel', 'Diana', 'Nurasyl', 'Nursultan']