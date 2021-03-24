window.addEventListener('load', () => {
    var focus = document.querySelector('.focus');
    var leftArrow = document.querySelector('.arrow-l');
    var rightArrow = document.querySelector('.arrow-r')
    console.log(focus)
    focus.addEventListener('mouseenter', () => {
        leftArrow.style.display = 'block'
        rightArrow.style.display = 'block'
    })
    focus.addEventListener('mouseleave', () => {
        leftArrow.style.display = 'none'
        rightArrow.style.display = 'none'
    })
})