
const BOT_VALUES_CLASSES = {
    divWrapper: 'msg-bot',
    color: 'color-bot',
    name: 'Caneta Store',
}

const USER_VALUES_CLASSES = {
    divWrapper: 'msg-user',
    color: 'color-user',
    name: 'você',
}

const chatMessages = []

const getUserInput = () => (document.getElementsByTagName('input')[0])
const getChat = () => (document.getElementsByClassName('messages')[0])
const createDiv = () => document.createElement('div')
const getDivWrapperClasses = (from) => (`msg ${from.divWrapper}`)
const getBubbleDivClasses = (from) => (`bubble ${from.color}`)

const createBubbleMessages = (from, message) => {
    const divWrapper = createDiv()
    divWrapper.className = getDivWrapperClasses(from)
    const bubbleDiv = createDiv()
    bubbleDiv.className = getBubbleDivClasses(from)
    divWrapper.appendChild(bubbleDiv)
    const nameDiv = createDiv()
    nameDiv.className = 'name'
    nameDiv.innerText = from.name
    
    const userMessage = createDiv()
    userMessage.className = 'text'
    userMessage.innerText = message
    
    bubbleDiv.appendChild(nameDiv)
    bubbleDiv.appendChild(userMessage)
    return divWrapper.appendChild(bubbleDiv)
}

const botWelcomeMessage = () => {
    renderMessage(BOT_VALUES_CLASSES, 'ola', 'deixe seu email para entrarmos em contato!')
}

const renderMessage = (from, ...messages) => {
    messages.forEach(message => {
        const chatElement = getChat()
        const messageElement = createBubbleMessages(from, message)
        chatElement.appendChild(messageElement)
    })
}

const sendMessage = () => {
    const userInput = getUserInput()
    renderMessage(USER_VALUES_CLASSES, userInput.value)
}