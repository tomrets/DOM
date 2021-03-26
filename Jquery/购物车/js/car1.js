$(function() {
    $('.checkall').change(function() {
        var status = $(this).prop('checked');
        $('.j-checkbox ,.checkall').prop('checked', status);

    })
    $('.j-checkbox').change(function() {
        if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
    })

    //模块2 增加商品数量
    $('.increment').click(function() {
        var n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);
        //模块三小计模块
        var p = $(this).parent().parent().siblings('.p-price').html();
        var p = p.substr(1);
        // console.log(n);
        //小计模块
        $(this).parents('.p-num').siblings('.p-sum').html('$' + p * n);
        console.log($(this).parent().parent('.p-sum'));
    })
    $('.decrement').click(function() {
        var n = $(this).siblings('.itxt').val();

        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings('.itxt').val(n);

        var p = $(this).parents('.p-num').siblings('.p-price').html();
        var p = p.substr(1);
        // console.log(n);
        //小计模块
        $(this).parents('.p-num').siblings('.p-sum').html('$' + p * n);
    })
    $('.itxt').change(function() {
        //先得到文本框里面的值 乘商品单价
        //下面都是cv上面 过来的 
        var n = $(this).val();
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        var p = p.substr(1); //去人民币符号
        $(this).parents('.p-num').siblings('.p-sum').html('$' + p * n); //更改值


    })

})