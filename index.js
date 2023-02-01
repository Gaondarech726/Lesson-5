const BtnNode = document.querySelector('.js-btn')
const InputNode = document.querySelector('.js-input')

function isEmpty(str) {

    if (str.value <= '-1')
        return alert('Введіть число');

    if (str.value == '') 
        return alert('Введіть число');

        alert('Дякуємо за відповідь!')
    }

BtnNode.addEventListener('click', function() {
    isEmpty(InputNode)
})