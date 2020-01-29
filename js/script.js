

$(function(){

	//drawer
	var checkArea = $("#drawer-checkbox");//チェック判断するラジオボタン
	var tap = $("#drawer-icon");//ドロワーメニュー
	var gNaviArea = $("#gNavi");
	var pageLink = $("#gNavi ul li a");//ページ内リンク
	var closeArea = $("#drawer-close");//クローズエリア
	
	//タップしたらクラスつけて目印をつける
	$(tap).on("click",function(){
		$(tap).toggleClass('active');
		$(gNaviArea).toggleClass('tap');
		$(closeArea).toggleClass('tap');
	});
	
	//ページ内リンクをクリックした時の動作
	$(pageLink).on("click",function(){
		if($(gNaviArea).hasClass('tap')){
			$(gNaviArea).removeClass('tap');
			$(tap).removeClass('active');
			$(closeArea).removeClass('tap');
			$(checkArea).prop('checked',false);
		   }
	});
	
	//ページ内リンクをクリックした時の動作
	$(closeArea).on("click",function(){
		if($(gNaviArea).hasClass('tap')){
			$(gNaviArea).removeClass('tap');
			$(tap).removeClass('active');
			$(closeArea).removeClass('tap');
			$(checkArea).prop('checked',false);
			return false;
		   }
	});
	
	
	
	//pagetop
	$('[href="#top"]').click(function(){
		$("body,html").animate({scrollTop:0},800);
		return false;
	});
	
	
	$(window).scroll(function(){
		if($(this).scrollTop()>300){
		   $("#pageTop").fadeIn();
		} else {
		   $("#pageTop").fadeOut();
		}
	});
});