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


})