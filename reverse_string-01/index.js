/**The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay 
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 
2 seconds before reversing the string. The reversed string should then be printed as output. */


let input = "Saurav Kumar"

function reverseString(input){
    let reversedInput = input.split("").reverse().join("");
    setTimeout(()=>{
        console.log(reversedInput)
    },2000)
}
reverseString("good is always good")