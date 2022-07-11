$question = document.getElementById('js-question');
$button1 = document.getElementById('button1');
$button2 = document.getElementById('button2');
$button3 = document.getElementById('button3');
$button4 = document.getElementById('button4');

//P65
const group1 = {
    question: "デバイスドライバの説明として、適切なものはどれか",
    answer: ["ア.  PCに接続された周辺機器を制御するソフトウェア",
        "イ.  アプリケーションプログラムをPCに導入するソフトウェア",
        "ウ.  キーボードなどの操作手順を登録して、その操作を自動化するソフトウェア",
        "エ.  他のPCに入り込んで不利益をもたらすソフトウェア"],
    run: (question) => {
        $question.innerText = '問題：' + group1.question;
        $button1.innerText = group1.answer[0];
        $button2.innerText = group1.answer[1];
        $button3.innerText = group1.answer[2];
        $button4.innerText = group1.answer[3];
    }
}

//P65
const group2 = {
    question: "OSIによるオープンソースソフトウェアの定義に従うときのオープンソースソフトウェアに対する取り扱いとして、適切なものはどれか",
    answer: ["ア.  ある特定の業界向けに作成されたオープンソフトウェアは、ソースコードを公開する範囲をその業界に限定することができる",
        "イ.  オープンソフトウェアを改変して再配布する場合、元のソフトウェアと同じ配布条件になるように、同じライセンスを適用して配布する必要がある",
        "ウ.  オープンソフトウェアを第三者が製品として再配布する場合、オープンソフトウェアの開発者は第三者に対してライセンス費を請求することができる",
        "エ.  社内でのりようなどのようにオープンソフトウェアを改変しても再配布しない場合、改変部分のソースコードを公開しなくても良い"],
    run: (question) => {
        $question.innerText = '問題：' + group2.question;
        $button1.innerText = group2.answer[0];
        $button2.innerText = group2.answer[1];
        $button3.innerText = group2.answer[2];
        $button4.innerText = group2.answer[3];
    }
}

//P72
const group3 = {
    question: "内部割込みに分類されるものはどれか",
    answer: ["ア.  商用電源の瞬時停電などの電源異常による割り込み",
        "イ.  ゼロで除算を実行したことによる割り込み",
        "ウ.  入出力が完了したことによる割り込み",
        "エ.  メモリパリティエラーが発生したことによる割り込み"],
    run: (question) => {
        $question.innerText = '問題：' + group3.question;
        $button1.innerText = group3.answer[0];
        $button2.innerText = group3.answer[1];
        $button3.innerText = group3.answer[2];
        $button4.innerText = group3.answer[3];
    }
}
group1.run();
group2.run();
group3.run();