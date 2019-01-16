var otherLoopCount = 2;

(function($) {
  "use strict";

  // jQuery Easing plugin
  $('a.nav-link').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle:visible').click();
  });

})(jQuery);

$(document).ready(function(){

  createSkillCard();
  createCertification();

});

/** 
 ** skills card生成 
 **/
function createSkillCard() {

  /** frontend card生成 */
  var frontend_tbody = $("#frontend");
  insertSkillCard(frontend_tbody, frontend);

  /** backend card生成 */
  var backend_tbody = $("#backend");
  insertSkillCard(backend_tbody, backend);
  
  /** DB・Server card生成 */
  var server_tbody = $("#server");
  insertSkillCard(server_tbody, server);

  /** Infrastructure・Middleware card生成 */
  var infra_tbody = $("#infra");
  insertSkillCard(infra_tbody, infra);

  /** Other card生成 */
  var other_tbody = $("#other");
  insertOtherCard(other_tbody, other);

}

/** 
 ** card内table用タグ生成 
 **/
function insertSkillCard(body, skillList) {

  for (var i=0; i<skillList.length; i++) {
    var cardTag = "<tr>";
    cardTag = cardTag + '<td><strong>'+skillList[i]['title']+'</strong></td>';
    cardTag = cardTag + '<td>'+skillList[i]['experiment']+'</td>';
    cardTag = cardTag + '<td>'+skillList[i]['proficiency']+'</td>';
    cardTag = cardTag + '</tr>';
    body.append(cardTag);
  }

}

/** 
 ** その他cardタグ生成 
 **/
function insertOtherCard(body, skillList) {

  var cardTag;

  for (var i=0; i<skillList.length; i++) {
    if (i == 0 || (i % otherLoopCount) == 0) {
      cardTag = "<tr>";
    }
    cardTag = cardTag + '<td><strong>'+skillList[i]['title']+'</strong></td>';
    if (i != 0 && ((i-1) % otherLoopCount) == 0) {
      cardTag = cardTag + "</tr>"
      body.append(cardTag);
    }
  }

}



function createCertification() {

  var cert = $('#certification');

  for (var i=0; i<certification.length; i++) {
    var cardTag = "<tr>";
    cardTag = cardTag + '<td>'+certification[i]['title']+'</td>';
    cardTag = cardTag + '<td>'+certification[i]['date']+'</td>';
    cardTag = cardTag + '</tr>';
    cert.append(cardTag);
  }
}

/**
* アナリティクスでアウトバウンド リンクのクリックをトラッキングする関数。
* この関数では有効な URL 文字列を引数として受け取り、その URL 文字列を
* イベントのラベルとして使用する。transport メソッドを 'beacon' に設定すると
* 対応ブラウザでは 'navigator.sendBeacon' を使ってヒットが送信される。
*/
function trackOutboundLink(url) {
  gtag('event', 'click', {
    'event_category': 'outbound',
    'event_label': url,
    'transport_type': 'beacon',
    'event_callback': function(){document.location = url;}
  });
}
