jQuery(function($){
  'use strict';

  var rand = 0;
  var time = 100;
  var enable = 0;
  var testTimer;
  var glitch;

  function startTimer(){
    testTimer=setInterval(function(){
      enable = 1;
      if (rand == 0) {
       $(".nx-lubi").html("えぬえっくすぴぃしーらぼ　うぇるかむぱーてぃ");
       rand = 1;
      } else if (rand == 1) {
       $(".nx-lubi").html("えぬえっくスぴぃしーらぼ　うぇるかむぱーてぃ");
       rand = 2;
      } else if (rand == 2) {
       $(".nx-lubi").html("えぬえっくすぴぃしーらぼ　うえるかむぱーてぃ");
       rand = 3;
      } else if (rand == 3) {
       $(".nx-lubi").html("えぬえっくすぴぃしーらぼ　うぇるかむぱぁてぃ");
       rand = 4;
      } else if (rand == 4) {
       $(".nx-lubi").html("えめえっくすぴぃしーらぼ　うぇるかむぱーてぃ");
       rand = 0;
      }
  } , time )};

  function stopTimer(){
    clearInterval(testTimer);
  }


  // Glitch
  function startGlitch(){
    glitch=setInterval(function(){
      if (rand == 0) {
       $(".nx-main-img").attr("src", "/assets/images/nx_main_g1.png");
       rand = 1;
      } else if (rand == 1) {
       $(".nx-lubi").html("えぬえっくスぴぃしーらぼ　うぇるかむぱーてぃ");
       $(".nx-main-img").attr("src", "/assets/images/nx_main.png");
       rand = 2;
      } else if (rand == 2) {
       $(".nx-main-img").attr("src", "/assets/images/nx_main_g2.png");
       rand = 0;
      } else if (rand == 3) {
       $(".nx-main-img").attr("src", "/assets/images/nx_main_g3.png");
       rand = 4;
      } else if (rand == 4) {
       $(".nx-main-img").attr("src", "/assets/images/nx_main.png");
       rand = 0;
      }
  } , time )};

  function stopGlitch(){
    clearInterval(glitch);
  }

  var ctrl_enable = 0;
  $(".ctrl").on("click", function() {
    $(".b_text").html("あ゛あ゛あ゛！");
    $(".g_text").html("う゛あ゛あ゛！");
    if (ctrl_enable == 0) {
      $(".ctrl-img").attr("src", "/assets/images/ctrl_yellow.png"); 
      ctrl_enable = 1;
      startGlitch();
      startTimer();
    } else {
      stopGlitch();
      stopTimer();
      $(".ctrl-img").attr("src", "/assets/images/ctrl.png"); 
      $(".nx-main-img").attr("src", "/assets/images/nx_main.png");
      ctrl_enable = 0;
    }

    kick_event();
    return false;
  });

  var command_enable = 0;
  $(".command").on("click", function() {

    if (command_enable == 0) {
      $(".b_text").html("ぐぎぎぎぎ！");
      $(".g_text").html("ごごごごご！");
      $('.nx-main-img').jrumble({
        x: 20,
        y: 0,
        rotation:0  
      });
      $('.nx-main-img').trigger('startRumble');

      $(".command-img").attr("src", "/assets/images/command_yellow.png"); 
      command_enable = 1;
    } else {
      $('.nx-main-img').trigger('stopRumble');
      $(".command-img").attr("src", "/assets/images/command.png"); 
      command_enable = 0;
    }

    kick_event();

    return false;
  });

  var i_enable = 0;
  $(".i").on("click", function() {
    if (i_enable == 0) {
      $(".b_text").html('<i class="uk-icon-heart"></i>');
      $(".g_text").html('<i class="uk-icon-heart"></i>');
      $(".i-img").attr("src", "/assets/images/i_yellow.png"); 
      i_enable = 1;
      kick_event("i");
    } else {
      $(".i-img").attr("src", "/assets/images/i.png"); 
      i_enable = 0;
      kick_event("in");
    }

    return false;
  });

  // Command or ctrl active
  var cc = 0;
  var kick_event = function(e) {
    if (ctrl_enable || command_enable) {
      cc = 1;
    } else {
      cc = 0;
    }

    console.log("i:" + ctrl_enable);
    console.log("command:" + command_enable);

    if (e != "i") {
      if (!cc) {
        $(".b_text").html("ふぅ...");
        $(".g_text").html("ふぅ...");
      }
    }

    console.log("kick");
    if (i_enable && command_enable && ctrl_enable) {
      console.log("special");
      stopGlitch();
      stopTimer();
      $('.nx-main-img').trigger('stopRumble');
      $(".b_text").html("ようこそ。");
      $(".g_text").html("あそぼう。");
      $(".uk-container-center").fadeOut(3000, function() {
        $("html").css("background-color", "#000");
        $(".nx-count-down").fadeIn(2000, function() {
        });
      });
    }
  };

  $('.nx-rum-title').jrumble({
    x: 20,
    y: 20,
    rotation: 4
  });

  $('.nx-rum-title').hover(function(){
    $(this).trigger('startRumble');
  }, function(){
    $(this).trigger('stopRumble');
  });

  $('.nx-act').on('click', function() {
    var target = $(this).data('target');
    console.log(target);
    if (target == "sena") {
     $('.act-img').attr("src", "/assets/images/sena.png");
     $('.act-name').html("SENA");
     $('.act-desc').html("退廃的思想家");
    } else if (target == "ueda") {
     $('.act-img').attr("src", "/assets/images/ueda.jpeg");
     $('.act-name').html("上田しんぺい");
     $('.act-desc').html("１９９２年うまれ。中学よりスティーブヴァイに憧れて早弾きに目覚め地獄のメカニカルトレーニングを全クリ。後にバンドを組むが、なぜかウィーザーのカヴァーでギターボーカルをやる。その後大学でバンドを組むのと並行し、DJやトラック作りといった個人の活動にも勤しむ。そんな自分のDJスタイルは、虹釜太郎やamephoneといった辺境ディガーからの影響を受けつつも、「やっぱりマルチネってカッコいいよなあ」という感性を持っているがゆえに「おしゃれ（笑）」なプレイ。現在はシューゲイザーバンドを組んでベースをしてたりもする。");
    } else if (target == "ohkubo") {
     $('.act-img').attr("src", "/assets/images/motoki_ohkubo.jpeg");
     $('.act-name').html("大久保雅基 Motoki Ohkubo");
     $('.act-desc').html("1988年宮城県仙台市内の病院にて誕生。その華麗な産声は、その場に居た観客全員を感動の渦に巻き込んだ。保育所の先生と手を繋いで歩いている際に、目を瞑っていたため鉄棒に頭をぶつけてしまう。その事により才能が開花することもなく、たんこぶが出来て先生や親を困らせた。あと寝てないと頻尿になる。");
    } else if (target == "scot") {
     $('.act-img').attr("src", "/assets/images/scot_allen.png");
     $('.act-name').html("Scott Allen");
     $('.act-desc').html("地黒歴28年，VJ歴6年の生成系男子．");
    } else if (target == "sugiyama") {
     $('.act-img').attr("src", "/assets/images/sena.png");
     $('.act-name').html("すぎやまゆうや");
     $('.act-desc').html("1992.11.5生まれ<br>静岡県藤枝市生まれ青春育ち、偉そうなやつとマイノリティーとは大体友達にはなれず音楽やれずに美大ミーハーフリーク卒。高校時代バンドライブ1回、DJまがい経験1回。バンドマンの知り合い多すぎてフラストレーション常にマックス、スキルはねえけど愛する音楽数知れず。軋むギター今日に明日を混ぜる毎日にグッドラック、お手柔らかに。");

    } else if (target == "umami") {
     $('.act-img').attr("src", "/assets/images/umami.jpeg");
     $('.act-name').html("(99.9%)復活⚾︎天才うまみ成分セミナー");
     $('.act-desc').html("先週家に帰ったら、ばあちゃんの認知症が進んでた。深夜の２時にばあちゃんが僕の部屋に入ってきて、その時のばあちゃんの顔がとても怖かった。でも、朝になったらいつものばあちゃんになってた。僕はばあちゃんが大好きです。");
    } else if (target == "sano") {
     $('.act-img').attr("src", "/assets/images/sano_kazuya.jpeg");
     $('.act-name').html("さのかずや");
     $('.act-desc').html('1991年生まれ、北海道遠軽町出身。東京で会う人会う人に「遠軽町ってどこなの？ｗ」と単芝で言われ続けたことに腹を立て、宗教法人"ENGARU WORLD STANDARD”を設立。遠軽町に国連本部を移転するために日夜活動中。好きな言葉はサプライズと無茶とパンクロック。研究領域はポップミュージックとパンクロックの狭間');
    }
    var modal = $.UIkit.modal(".my-id");
    modal.show();
    return false;
  });

});
