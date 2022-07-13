const $question = document.getElementById('js-question');
const $button = document.getElementsByTagName('button');
const hai = [1, 2, 3];
let quizIndex;

//P65
const quiz = [
    {
        question: "デバイスドライバの説明として、適切なものはどれか",
        answer: ["ア.  PCに接続された周辺機器を制御するソフトウェア",
            "イ.  アプリケーションプログラムをPCに導入するソフトウェア",
            "ウ.  キーボードなどの操作手順を登録して、その操作を自動化するソフトウェア",
            "エ.  他のPCに入り込んで不利益をもたらすソフトウェア"],
        collect: "ア.  PCに接続された周辺機器を制御するソフトウェア"
    }, {
        question: "OSIによるオープンソースソフトウェアの定義に従うときのオープンソースソフトウェアに対する取り扱いとして、適切なものはどれか",
        answer: ["ア.  ある特定の業界向けに作成されたオープンソフトウェアは、ソースコードを公開する範囲をその業界に限定することができる",
            "イ.  オープンソフトウェアを改変して再配布する場合、元のソフトウェアと同じ配布条件になるように、同じライセンスを適用して配布する必要がある",
            "ウ.  オープンソフトウェアを第三者が製品として再配布する場合、オープンソフトウェアの開発者は第三者に対してライセンス費を請求することができる",
            "エ.  社内でのりようなどのようにオープンソフトウェアを改変しても再配布しない場合、改変部分のソースコードを公開しなくても良い"],
        collect: "エ.  社内でのりようなどのようにオープンソフトウェアを改変しても再配布しない場合、改変部分のソースコードを公開しなくても良い"
    }, {
        question: "内部割込みに分類されるものはどれか",
        answer: ["ア.  商用電源の瞬時停電などの電源異常による割り込み",
            "イ.  ゼロで除算を実行したことによる割り込み",
            "ウ.  入出力が完了したことによる割り込み",
            "エ.  メモリパリティエラーが発生したことによる割り込み"],
        collect: "イ.  ゼロで除算を実行したことによる割り込み"

    }];
//問題文と選択肢をセットする
function set() {
    $question.innerText = '問題：' + quiz[quizIndex].question;
    for (let i = 0; i < $button.length; i++) {
        $button[i].textContent = quiz[quizIndex].answer[i];
    }
}

//出題
function rand() {
    quizIndex = Math.floor(Math.random() * 3);
}

rand();
set(quizIndex);

//クリックした要素のidがボタンだったら、正解と一致しているか検証する
addEventListener('click', function (e) {
    if (e.target.id.match(/button/)) {
        if (e.target.textContent === quiz[quizIndex].collect) {
            alert('正解！');
            rand();
            set();
        }　else {
            alert('残念！不正解です！');
        }
    }
});

// set: () => {
//     $question.innerText = '問題：' + quiz.question;
//     for (let i = 0; i < $button.length; i++) {
//         $button[i].textContent = quiz.answer[i];
//     }
// }

// //P65
// const group2 = {

//     run: (question) => {
//         for (let i = 0; i < $button.length; i++) {
//             $button[i].textContent = group2.answer[i];
//         }
//     }
// }

// //P72
// const group3 = {
//     
//     run: (question) => {
//         $question.innerText = '問題：' + group3.question;
//         for (let i = 0; i < $button.length; i++) {
//             $button[i].textContent = group3.answer[i];
//         }
//     }
// }
// group1.run();
// group2.run();
// group3.run();