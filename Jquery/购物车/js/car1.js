$(function() {
    // var sum = 0;
    $('.checkall').change(function() {
        var status = $(this).prop('checked');
        $('.j-checkbox ,.checkall').prop('checked', status);
        if ($(this).prop('checked')) {
            //所有商品添加 check-cart-item 类名
            $('.cart-item').addClass('check-cart-item')
        } else {
            $('.cart-item').removeClass('check-cart-item') //移除check-cart-item
        }

    })
    $('.j-checkbox').change(function() {
        if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
        if ($(this).prop('checked')) {
            //让当前的商品添加 check-cart-item 类名
            $(this).parents('.cart-item').addClass('check-cart-item')
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item') //移除check-cart-item
        }
    })

    //模块2 增加商品数量
    $('.increment').click(function() {
        var n = $(this).siblings('.itxt').val();
        n++;
        // sum = n;
        $(this).siblings('.itxt').val(n);
        //模块三小计模块
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        var p = p.substr(1);
        // console.log(n);
        //小计模块
        var price = (p * n).toFixed(2)
        $(this).parents('.p-num').siblings('.p-sum').html('$' + price);
        // console.log($(this).parent().parent('.p-sum'));
        // console.log('sum:', sum);
        getSum();
    })
    $('.decrement').click(function() {
        var n = $(this).siblings('.itxt').val();

        if (n == 1) {
            return false;
        }
        n--;
        // sum = n;
        $(this).siblings('.itxt').val(n);

        var p = $(this).parents('.p-num').siblings('.p-price').html();
        var p = p.substr(1);
        // console.log(n);
        //小计模块
        var price = (p * n).toFixed(2)
        $(this).parents('.p-num').siblings('.p-sum').html('$' + price);
        console.log('sum:', sum);
        getSum();
    })
    $('.itxt').change(function() {
        //先得到文本框里面的值 乘商品单价
        //下面都是cv上面 过来的 
        var n = $(this).val();
        // sum = n;
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        var p = p.substr(1); //去人民币符号
        var price = (p * n).toFixed(2)
        $(this).parents('.p-num').siblings('.p-sum').html('$' + p); //更改值
        //5.计算总计和总额模块
        // console.log('sum:', sum);
        getSum();

    })

    getSum(); //第一次调用 
    //5.计算总计和总额模块
    function getSum() {
        //？为什么不能全局变量 sum
        var count = 0; //计算总件数
        var money = 0; //计算总金额
        $('.itxt').each(function(i, ele) {
                count += parseInt($(ele).val());
                $('.amount-sum em').text(count);
            })
            // console.log('sum', $('.p-sum'));
        $('.p-sum').each(function(i, ele) {
            // console.log('this', $(ele));

            money += parseFloat($(ele).text().substr(1));
            $('.price-sum em').text('$' + money);
            // console.log(money);
        })
    }
    //6.删除当前商品
    //删除按钮
    $('.p-action a').click(function() {
        $(this).parents('.cart-item').remove();
    })
    getSum();
    //复选框删除

    $('.remove-batch').click(function() {
        // console.log($('.j-checkbox:checked').parents('.cart-item'));
        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSum();

    })
    $('.clear-all').click(function() {
        $('.cart-item').remove();
        getSum();

    })
})