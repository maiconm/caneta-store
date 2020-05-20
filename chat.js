const BOT_VALUES_CLASSES = {
    divWrapper: 'msg-bot',
    color: 'color-bot',
    name: 'Caneta Store - robô',
}

const USER_VALUES_CLASSES = {
    divWrapper: 'msg-user',
    color: 'color-user',
    name: 'Você',
}

let canRespond = true

const getUserInput = () => (document.getElementsByTagName('input')[0])
const getChat = () => (document.getElementsByClassName('messages')[0])
const createDiv = () => document.createElement('div')
const getDivWrapperClasses = (from) => (`msg ${from.divWrapper}`)
const getBubbleDivClasses = (from) => (`bubble ${from.color}`)

const createBubbleMessages = (from, message) => {
    const chatElement = getChat()
    const divWrapper = createDiv()
    divWrapper.className = getDivWrapperClasses(from)
    chatElement.appendChild(divWrapper)

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
    divWrapper.appendChild(bubbleDiv)
}

const botWelcomeMessage = () => {
    ['ola', 'deixe seu email para entrarmos em contato!'].forEach(message => {
        changeBotStatus('digitando')
        setTimeout(() => {
            renderMessage(BOT_VALUES_CLASSES, message)
            changeBotStatus('online')
        }, 1500)
    })
}

const renderMessage = (from, ...messages) => {
    messages.forEach(message => createBubbleMessages(from, message))
}

const sendMessage = () => {
    const userInput = getUserInput()
    if (userInput.value.trim()) {
        renderMessage(USER_VALUES_CLASSES, userInput.value)
        canRespond && waitBotResponse(userInput.value)
        userInput.value = ''
    }
}

const changeBotStatus = (status) => {
    const statusElement = document.getElementsByClassName('status')[0]
    statusElement.innerText = status
}

const waitBotResponse = (message) => {
    changeBotStatus('digitando')
    setTimeout(() => {
        try {
            const response = handleMessage(message)
            renderMessage(BOT_VALUES_CLASSES, response)
            changeBotStatus('offline')
        } catch (responseError) {
            renderMessage(BOT_VALUES_CLASSES, responseError)
            changeBotStatus('online')
        }
    }, 1000)
}

const handleMessage = (message) => {
    const isEmail = validateEmail(message)
    if (isEmail) {
        canRespond = false
        return 'Obrigado, entraremos em contato em breve!'
    } else {
        throw 'nao entendi'
    }
}

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email.toLowerCase())
}