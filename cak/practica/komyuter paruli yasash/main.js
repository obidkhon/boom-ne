
//1
const characterAmountRange=document.getElementById('characterAmountRange')
const characterAmountNumber=document.getElementById('characterAmountNumber')





const UPPERCASE_CHAR_CODES= arrayLowToHigh(65,90)


const LOWERCASE_CHAR_CODES =arrayLowToHigh(97,122)



const NUMBER_CHAR_CODES =arrayLowToHigh(48,57)

const SYMBOL_CHAR_CODES =arrayLowToHigh(33,47).concat(
    arrayLowToHigh(58,64)
).concat( 
    arrayLowToHigh(91,96)
).concat(
    arrayLowToHigh(123,126)
)









characterAmountNumber.addEventListener('input', syncCharacterAmount)

characterAmountRange.addEventListener('input', syncCharacterAmount)


function syncCharacterAmount(e){
    const value=e.target.value
    characterAmountNumber.value=value
    characterAmountRange.value=value


}//davomi bor



const includeUppercaseElement=document.getElementById('includeUppercase')

const includeNumbersElement = document.getElementById('includeNumbers')

const includeSymbolsElement = document.getElementById('includeSymbols')



const form = document.getElementById('parol')
const  passwordDisplay =document.getElementById('passwordDisplay')



form.addEventListener('submit',e =>{
 e.preventDefault()   
 const  characterAmount = characterAmountNumber.value
 const includeUppercase = includeUppercaseElement.checked

 const includeNumbers = includeNumbersElement.checked

 const includeSymbols = includeSymbolsElement.checked

 const password= generatePassword(characterAmount, includeUppercase,includeNumbers,includeSymbols)
 
passwordDisplay.innerText = password

})
function generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols){
let charCodes=LOWERCASE_CHAR_CODES
if(includeUppercase)charCodes=charCodes.concat(UPPERCASE_CHAR_CODES)
if(includeNumbers)charCodes=charCodes.concat(NUMBER_CHAR_CODES)
if(includeSymbols)charCodes=charCodes.concat(SYMBOL_CHAR_CODES)
const passwordCharacters=[]
for(let i=0; i<characterAmount;i++){

    const characterCode=charCodes[Math.floor(Math.random() * 
        charCodes.length)]
passwordCharacters.push(String.fromCharCode(characterCode) )
}
return passwordCharacters.join(' ')
}




function arrayLowToHigh(low,high){
    const array=[]
for(let i=low; i<=high; i++){
array.push(i)
}
return array
}


