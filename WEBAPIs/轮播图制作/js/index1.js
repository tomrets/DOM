window.addEventListener('load', () => {
    // 1.1.获取元素
    var focus = document.querySelector('.focus');
    var leftArrow = document.querySelector('.arrow-l');
    var rightArrow = document.querySelector('.arrow-r');

    // 1.2.鼠标经过 focus 显示隐藏左右按钮
    focus.addEventListener('mouseenter', () => {
        leftArrow.style.display = 'block'
        rightArrow.style.display = 'block'
    })
    focus.addEventListener('mouseleave', () => {
            leftArrow.style.display = 'none'
            rightArrow.style.display = 'none'
        })
        //1.3动态生成小圆圈
    var lis = focus.querySelector('ul').querySelectorAll('li');
    var ol = focus.querySelector('ol')
    for (var i = 0; i < lis.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
    }
})