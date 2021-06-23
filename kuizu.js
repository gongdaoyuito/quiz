//modal
$(function(){
 
  //テキストリンクをクリックしたら
 $("#iti").click(function(){
      //body内の最後に<div id="modal-bg"></div>を挿入
     $("body").append('<div id="modal-bg"></div>');
 
    //画面中央を計算する関数を実行
    modalResize();
 
    //モーダルウィンドウを表示
        function sound()
        {
          // [ID:sound-file]の音声ファイルを再生[play()]する
          $( '#sound-file' ).get(0).play() ;
        }
        $("#modal-bg,#modal-main").fadeIn("slow");
 
    //画面のどこかをクリックしたらモーダルを閉じる
      $("#modal-bg,#modal-main").click(function(){
          $("#modal-main,#modal-bg").fadeOut("slow",function(){
         //挿入した<div id="modal-bg"></div>を削除
              $('#modal-bg').remove() ;
         });
 
        });
 
    //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
     $(window).resize(modalResize);
      function modalResize(){
 
            var w = $(window).width();
          var h = $(window).height();
 
            var cw = $("#modal-main").outerWidth();
           var ch = $("#modal-main").outerHeight();
 
        //取得した値をcssに追加する
            $("#modal-main").css({
                "left": ((w - cw)/2) + "px",
                "top": ((h - ch)/2) + "px"
          });
     }
   });
});

//modal
$(function(){
 
  //テキストリンクをクリックしたら
 $("#ni").click(function(){
      //body内の最後に<div id="modal-bg"></div>を挿入
     $("body").append('<div id="modal-bg"></div>');
 
    //画面中央を計算する関数を実行
    modalResize();
 
    //モーダルウィンドウを表示
        $("#modal-bg,#modal-main2").fadeIn("slow");
 
    //画面のどこかをクリックしたらモーダルを閉じる
      $("#modal-bg,#modal-main2").click(function(){
          $("#modal-main2,#modal-bg").fadeOut("slow",function(){
         //挿入した<div id="modal-bg"></div>を削除
              $('#modal-bg').remove() ;
         });
 
        });
 
    //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
     $(window).resize(modalResize);
      function modalResize(){
 
            var w = $(window).width();
          var h = $(window).height();
 
            var cw = $("#modal-main2").outerWidth();
           var ch = $("#modal-main2").outerHeight();
 
        //取得した値をcssに追加する
            $("#modal-main2").css({
                "left": ((w - cw)/2) + "px",
                "top": ((h - ch)/2) + "px"
          });
     }
   });
});

//modal
$(function(){
 
  //テキストリンクをクリックしたら
 $("#san").click(function(){
      //body内の最後に<div id="modal-bg"></div>を挿入
     $("body").append('<div id="modal-bg"></div>');
 
    //画面中央を計算する関数を実行
    modalResize();
 
    //モーダルウィンドウを表示
        $("#modal-bg,#modal-main").fadeIn("slow");
 
    //画面のどこかをクリックしたらモーダルを閉じる
      $("#modal-bg,#modal-main").click(function(){
          $("#modal-main,#modal-bg").fadeOut("slow",function(){
         //挿入した<div id="modal-bg"></div>を削除
              $('#modal-bg').remove() ;
         });
 
        });
 
    //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
     $(window).resize(modalResize);
      function modalResize(){
 
            var w = $(window).width();
          var h = $(window).height();
 
            var cw = $("#modal-main").outerWidth();
           var ch = $("#modal-main").outerHeight();
 
        //取得した値をcssに追加する
            $("#modal-main").css({
                "left": ((w - cw)/2) + "px",
                "top": ((h - ch)/2) + "px"
          });
     }
   });
});

//modal
$(function(){
 
  //テキストリンクをクリックしたら
 $("#yon").click(function(){
      //body内の最後に<div id="modal-bg"></div>を挿入
     $("body").append('<div id="modal-bg"></div>');
 
    //画面中央を計算する関数を実行
    modalResize();
 
    //モーダルウィンドウを表示
        $("#modal-bg,#modal-main").fadeIn("slow");
 
    //画面のどこかをクリックしたらモーダルを閉じる
      $("#modal-bg,#modal-main").click(function(){
          $("#modal-main,#modal-bg").fadeOut("slow",function(){
         //挿入した<div id="modal-bg"></div>を削除
              $('#modal-bg').remove() ;
         });
 
        });
 
    //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
     $(window).resize(modalResize);
      function modalResize(){
 
            var w = $(window).width();
          var h = $(window).height();
 
            var cw = $("#modal-main").outerWidth();
           var ch = $("#modal-main").outerHeight();
 
        //取得した値をcssに追加する
            $("#modal-main").css({
                "left": ((w - cw)/2) + "px",
                "top": ((h - ch)/2) + "px"
          });
     }
   });
});

console.log(document.getElementsByTagName("div"))

function sound(){
  setTimeout(function(){
        {
          // [ID:sound-file]の音声ファイルを再生[play()]する
          $( '#sound-file' ).get(0).play() ;
        }
},400);
}
        


function sound2(){
  setTimeout(function(){
          {
          // [ID:sound-file]の音声ファイルを再生[play()]する
          $( '#sound-file2' ).get(0).play() ;
          }
  },400);          
  
}
