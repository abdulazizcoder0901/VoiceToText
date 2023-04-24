let input = document.querySelector('#convert-text')
let btn = document.querySelector('#click-to__convert').addEventListener('click', (e) =>{
    let speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', (e) =>{
        const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        input.innerHTML = transcript;
    })

    if(speech == true){
        recognition.start()
    }
})