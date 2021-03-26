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
        var n = $(this).siblings('.itxt').val(n);
    })
    $('.decrement').click(function() {
        var n = $(this).siblings('.itxt').val();

        if (n == 1) {
            return false;
        }
        n--;
        var n = $(this).siblings('.itxt').val(n);
    })
})