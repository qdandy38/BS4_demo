$(document).ready(function() {
    //navbar-link
    $('.nav-link').click(function(e) {
        $(this).parent().siblings().find('.nav-link').removeClass('active');
    });
    //rectangle-link
    $('.rectangle-link').click(function(e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().find('.rectangle-link').removeClass('active');
    });
    // 購物車愛心
    $('.heart-btn').click(function(e) {
        e.preventDefault();
        var target = e.target;
        $(target).toggleClass("far")
        $(target).toggleClass("fas")
    });
    //換頁按鈕
    $('.btn-page').click(function(e) {
        e.preventDefault();
        $('body').find('.btn-page').removeClass('active');
    });
    // 登入 註冊Modal切換
    $('a[data-dismiss="modal"][data-toggle="modal"]').on('click', function() {
        var target = $(this).data('target');
        $(target).on('shown.bs.modal', function() {
            $('body').addClass('modal-open');
        });
    });

    // 關閉Modal後 navbar樣式
    $('#loginModal').on('hidden.bs.modal', function() {
        var page = $(this).find('.closeModal').data('page');
        $('body').find(page).addClass('active');
        var loginBtn = $('#login');
        setTimeout(function() {
            loginBtn.blur();
        }, 0)

    });






    // checkout Collapse小視窗時預設收闔，大視窗預設開啟
    $(window).resize(function() {
        var width = $(window).width();
        if (width < 768) {
            $('#collapse-bill').removeClass('show');
            $('#collapse-item').removeClass('show');
        } else {
            $('#collapse-bill').addClass('show');
            $('#collapse-item').addClass('show');
        }
    });
    //結帳流程切換
    $('.btn-check').click(function(e) {
        e.preventDefault();
        $('body').find('.btn-check').removeClass('active');
    });
    //發票形式切換
    $('.btn-invoice').click(function(e) {
        $(this).addClass('active');
        $(this).parent().siblings().find('.btn-invoice').removeClass('active');
    });

});