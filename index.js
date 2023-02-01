const BtnNode = document.querySelector('.js-btn')
const InputNode = document.querySelector('.js-input')

function isEmpty(str) {
    if (str.value >= '11')
        return alert('Введіть число від 1 до 10');

    if (str.value <= '0')
        return alert('Введіть число від 1 до 10');

    if (str.value == '') 
        return alert('Введіть число');

        alert('Дякуємо за відовідь, Ваш голос дуже важливий для нас!')
    }

BtnNode.addEventListener('click', function() {
    isEmpty(InputNode)
})