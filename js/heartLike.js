const api = axios.create({
    baseURL: 'https://catharsys.staging.f4dev.me/'
})

let box = document.querySelector(".messages__inner-blocks"),
        id = box.dataset.thoughtId,
        lsKey = `reacted-${id}`;

if(localStorage.getItem(lsKey)) {
    box.querySelector('.messages__inner-blocks-block-reactions-heart img').addEventListener('click', heart)
    box.querySelector('.messages__inner-blocks-block-reactions-like img').addEventListener('click', like)
}

const removeListeners = () => {
    box.querySelector('.messages__inner-blocks-block-reactions-heart img').addEventListener('click', heart)
    box.querySelector('.messages__inner-blocks-block-reactions-like img').removeEventListener('click', like)
}

const heart = () => {
    if(!localStorage.getItem(lsKey)) {
        api.post(`/thoughts/${id}/hugs`).then((r) => {
            if(!r.error) {
                localStorage.setItem(lsKey, 'hug');
                box.querySelector('.messages__inner-blocks-block-reactions-heart-counter').innerHTML = r.data.hugs;
                box.querySelector('.messages__inner-blocks-block-reactions-heart img').src = 'img/heart-red.png';
            }
        })
    }
}

const like = () => {
    if(!localStorage.getItem(lsKey)) {
        api.post(`/thoughts/${id}/relatables`).then((r) => {
            if(!r.error) {
                localStorage.setItem(lsKey, 'relatable');
                box.querySelector('.messages__inner-blocks-block-reactions-like-counter').innerHTML = r.data.relatables;
                box.querySelector('.messages__inner-blocks-block-reactions-like img').src = 'img/like-blue.png';
            }
        })
    }
}
