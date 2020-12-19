window.onload = test;


function test(){

    let modals = document.getElementsByClassName("modal_bg");
    let triggers = document.getElementsByClassName("trigger");
    let buttons = document.getElementsByClassName("btn");

    //HTMLCollectionをjsの配列に直す。
    modals = Array.from(modals);
    triggers = Array.from(triggers);
    buttons = Array.from(buttons);
    
    function setEvent(){ 
        modals[this.name].classList.toggle("modal_hidden");
        
    }

    let count = 0;
    triggers.forEach(trigger => {
        trigger.addEventListener("click",　{name: count, handleEvent: setEvent});
        count++;
    });

    count=0;
    buttons.forEach(button => {
        button.addEventListener("click",{name: count, handleEvent: setEvent});
        count++;
    });

    let barger = document.getElementById("barger_trigger");
    let nav = document.getElementById("changeNav");
    barger.addEventListener("click",changeNav);

    function changeNav(){
        nav.classList.toggle("scrollin");
    }
 
    // アニメーションさせる要素をHTMLCollectionの形で取得
    let featureList = document.getElementsByClassName("feature");
    let graph_innerList = document.getElementsByClassName("graph_inner");

    //HTMLCollectionをjsの配列に直す。
    graph_innerList = Array.from(graph_innerList);
    featureList = Array.from(featureList);

    // 要素の絶対位置を返す関数
    function calcBottomPosition(element) {
        return element.getBoundingClientRect().bottom + window.pageYOffset;
    }

    // スクロールされた時に動く関数（feature）
    window.onscroll = function() {
        // 現在のスクロール量を計算
        const scrollPosition = window.pageYOffset +  window.innerHeight;
        // IDのリストをそれぞれ計算
        featureList.forEach(item => {
            const bottom = calcBottomPosition(item);
            // スクロールが要素の位置より下なら、クラスを追加する       
            if(bottom < scrollPosition + 500) {
                item.classList.add("scrollin");
            }
        });

        //スクロールされた時に動く関数（graph）
        graph_innerList.forEach(item => {
            const bottom = calcBottomPosition(item);
            // スクロールが要素の位置より下なら、クラスを追加する       
            if(bottom < scrollPosition) {
                item.classList.add("scrollin");
            }
        });
    }
 }