$(function () {
	$('#pagetop').hide();
	// スクロールした場合のアクションが記されています
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#pagetop').fadeIn();
			// スクロール位置が200px以下の場合は「ページトップへ戻るボタン」を消しておく（フェードアウトで消える）
		} else {
			$('#pagetop').fadeOut();
		}
	})
});

//「ページトップへ戻るボタン」をクリックした場合のページトップへ戻るスピードの速さが記されています
$('#pagetop').click(function () {
	$('html,body').animate({
		scrollTop: 0
	}, 1000);
	return false;
});

// checkactionハンバーガーアニメーション
$(function(){
	$('.btn-trigger').on('click', function() {
		$(this).toggleClass('active');
		return false;
		});
	});
	
	// nav　スライド
	$(function() {
		$(function () {
			$('#hamburger-nav').on('click', function() {
				$('body').toggleClass('open');
			});
		});
	});
	

