window.addEventListener('load', () => {
    // 1.1.获取元素
    var focus = document.querySelector('.focus');
    var leftArrow = document.querySelector('.arrow-l');
    var rightArrow = document.querySelector('.arrow-r');
    var focusWidth = focus.clientWidth; //获得当前大小 这里等于图片
    var circle = 0;

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
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle')
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index', i);
        // 1.5绑定li点击事件
        li.addEventListener('click', function() {
            //排他
            circle++;
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //1.6点击圆圈移动图片
            //ul 的移动距离 就是小圆圈的索引号 注意是负值
            var index = this.getAttribute('index');
            // var focusWidth = focus.clientWidth; //获得当前大小 这里等于图片
            animate(ul, -index * focusWidth)
        })
    }
    //1.4 把ol第一个类型设置为li
    // ol.children[0].setAttribute('class', 'current');
    ol.children[0].className = 'current';

    // 7.克隆图片到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 1.6点击右侧按钮，图片滚动
    var num = 0;
    rightArrow.addEventListener('click', function() {
        if (num == ul.children.length - 1) {
            num = 0;
            ul.style.left = 0;
            animate(ul, 0);

        }
        num++;
        animate(ul, -num * focusWidth);
        circle++;
        if (circle == ol.children.length) {
            circle = 0; //复原
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }

        ol.children[circle].className = 'current'
            // 8.圆圈一起变化
    })

})