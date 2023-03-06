function showAdvice(adviceId, adviceText) {

    const textParagraph = document.getElementById('advice-text')
    textParagraph.textContent = ''
    textParagraph.textContent += adviceText

    const idParagraph = document.getElementById('advice-id')
    idParagraph.textContent = ''
    idParagraph.textContent += "ADVICE #" + adviceId
}

async function createAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const result = await response.json()

    advice = result["slip"]
    adviceId = advice.id
    adviceText = advice.advice

    showAdvice(adviceId, adviceText)
}

createAdvice()