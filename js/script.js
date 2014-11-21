$(document).ready(function(){
  $('h1, h2, h3').wordBreakKeepAll({OffForIE: true});
  google_analytics();
  kakaotalk();  
});

function kakaotalk(){
  // 사용할 앱의 Javascript 키를 설정해 주세요.
    Kakao.init('2828a8532522e98eae00aa5adccbd89a');

    // 카카오톡 링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
    Kakao.Link.createTalkLinkButton({
      container: '.kakaotalk',
      label: $('title').text(),
      webButton: {
        text: $('title').text(),
        url: location.href // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
      }
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