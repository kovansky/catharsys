
let api = axios.create({
    baseURL: 'https://catharsys.staging.f4dev.me/'
})


let allThoughtsArr = api.get('/thoughts/')
.then((response) => {
    if(!response.data.error) {
        const thoughts = response.data.data // An array of thought objects

        document.querySelector('.messages__inner-data-bottom-messages-counter').innerHTML = thoughts.length

        for(const thought of thoughts) {
            let messagesInnerBlocks = document.querySelector(".messages__inner-blocks")
            let messagesInnerBlocksBlock = document.createElement("div")
            messagesInnerBlocksBlock.classList.add("messages__inner-blocks-block")

            let messagesUser = document.createElement("div")
            messagesUser.classList.add("messages__inner-blocks-block-user")
            let messageText = document.createElement("div")
            messageText.classList.add("messages__inner-blocks-block-text")
            let messageReactions = document.createElement("div")
            messageReactions.classList.add("messages__inner-blocks-block-reactions")

            let messageUserImg = document.createElement("img")
            messageUserImg.src = "img/user.svg"

            let messageTextH = document.createElement("h1")
            messageTextH.innerHTML = thought.text

            let messageReactionsHeart = document.createElement("div")
            messageReactionsHeart.classList.add("messages__inner-blocks-block-reactions-heart")
            let messageReactionsHeartH = document.createElement("h1")
            messageReactionsHeartH.innerHTML = "0";
            messageReactionsHeartH.classList.add("messages__inner-blocks-block-reactions-heart-counter")
            let messageReactionsHeartImg = document.createElement("img")
            messageReactionsHeartImg.src = "img/heart.png"

            let messageReactionsLike = document.createElement("div")
            messageReactionsLike.classList.add("messages__inner-blocks-block-reactions-like")
            let messageReactionsLikeH = document.createElement("h1")
            messageReactionsLikeH.innerHTML = "0";
            messageReactionsLikeH.classList.add("messages__inner-blocks-block-reactions-like-counter")
            let messageReactionsLikeImg = document.createElement("img")
            messageReactionsLikeImg.src = "img/like.png"

            messagesInnerBlocks.prepend(messagesInnerBlocksBlock)
            messagesInnerBlocksBlock.appendChild(messagesUser)
            messagesUser.appendChild(messageUserImg)

            messagesInnerBlocksBlock.appendChild(messageText)
            messageText.appendChild(messageTextH)

            messagesInnerBlocksBlock.appendChild(messageReactions)
            messageReactions.appendChild(messageReactionsHeart)
            messageReactionsHeart.appendChild(messageReactionsHeartImg)
            messageReactionsHeart.appendChild(messageReactionsHeartH)

            messagesInnerBlocksBlock.appendChild(messageReactions)
            messageReactions.appendChild(messageReactionsLike)
            messageReactionsLike.appendChild(messageReactionsLikeImg)
            messageReactionsLike.appendChild(messageReactionsLikeH)
        }
    }
})
.catch((error) => {
    console.error(error)
})




// let messagesInnerBlocks = document.querySelector(".messages__inner-blocks")



