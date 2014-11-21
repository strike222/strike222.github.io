$(document).ready(function(){
  $('h1, h2, h3').wordBreakKeepAll({OffForIE: true});
  google_analytics();
  kakaotalk();
  // kakaostory();
});

function kakaotalk(){
	Kakao.init('2828a8532522e98eae00aa5adccbd89a');
	$('.kakaotalk').click(function(e){
		e.preventDefault();
		Kakao.Link.sendTalkLink({
			label: $('title').text() + ' ' + location.href
		});
	});
}

function google_analytics(){
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-56980141-1', 'auto');
  ga('send', 'pageview');
}