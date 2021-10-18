const  playButton = document.getElementById('play-button')
const pauseButton=document.getElementById('pause-button')
const stopButon=document.getElementById('stop-button')
const textInput=document.getElementById('text')
const speedInput=document.getElementById('speed')

const newInput=document.getElementById('num')


let currentCharacter






playButton.addEventListener('click', ()=>{ 
    playText(textInput.value)
    
    })

    
    function playText( text){


        if(speechSynthesis.paused && speechSynthesis.speaking){ 
            return speechSynthesis.resume()
        
        }



        utterance.rate =speedInput.value || 0.5

        utterance.text=text
        textInput.disabled = true
        speechSynthesis.speak(utterance)
    }




pauseButton.addEventListener('click',pauseText)

function pauseText() {
    
if(speechSynthesis.speaking)speechSynthesis.pause()


}

stopButon.addEventListener('click', stopText)




function stopText(){
    speechSynthesis.resume()
speechSynthesis.cancel()

}








const utterance = new SpeechSynthesisUtterance(text)


utterance.addEventListener('end',()=>{ 
    textInput.disabled= false
})

utterance.addEventListener('boundary', e =>{
    currentCharacter= e.charIndex
})


speedInput.addEventListener('input',syncSppdInput,()=>{
    stopText()
    playText(utterance.text.substring(currentCharacter))
})


newInput.addEventListener('input',syncSppdInput)
function syncSppdInput(e){

    const value=e.target.value
    speedInput.value=value
    newInput.value=value
}