/* ============================================
   Level 3: 現金・預金・商品売買
   ============================================ */
const LEVEL3_DATA = {
    id: 3,
    title: "現金・預金・商品売買",
    icon: "💰",
    description: "日常取引の仕訳をマスターする",
    modules: [

        /* ==========================================
           Module 301: 現金と現金過不足
           ========================================== */
        {
            id: 301,
            title: "現金と現金過不足",
            duration: "20分",
            content: `
<h2>1. 簿記上の「現金」とは？</h2>

<p>日常生活での「現金」は紙幣や硬貨ですが、<strong>簿記上の「現金」はもっと広い意味</strong>を持ちます。</p>

<div class="info-box tip">
    <div class="info-box-title">重要ポイント</div>
    簿記上の現金 ＝ <strong>通貨</strong>（紙幣・硬貨）＋ <strong>通貨代用証券</strong>（すぐに換金できるもの）
</div>

<div class="visual-box">
    <div class="visual-box-title">簿記上の「現金」の範囲</div>
    <div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-top:10px;">
        <div style="background:var(--primary-light);padding:16px 24px;border-radius:var(--radius);min-width:140px;">
            <div style="font-size:1.8rem;">💴</div>
            <strong>通貨</strong><br>
            <span style="font-size:0.85rem;color:var(--text-secondary);">紙幣・硬貨</span>
        </div>
        <div style="font-size:1.5rem;display:flex;align-items:center;">＋</div>
        <div style="background:var(--success-light);padding:16px 24px;border-radius:var(--radius);min-width:140px;">
            <div style="font-size:1.8rem;">📄</div>
            <strong>通貨代用証券</strong><br>
            <span style="font-size:0.85rem;color:var(--text-secondary);">すぐ換金可能</span>
        </div>
        <div style="font-size:1.5rem;display:flex;align-items:center;">＝</div>
        <div style="background:var(--warning-light);padding:16px 24px;border-radius:var(--radius);min-width:140px;">
            <div style="font-size:1.8rem;">💰</div>
            <strong>簿記上の現金</strong>
        </div>
    </div>
</div>

<h3>通貨代用証券の種類</h3>

<p>以下のものは、簿記上「<strong>現金</strong>」として扱います。すぐに銀行等で換金できるからです。</p>

<table>
    <tr><th>種類</th><th>説明</th><th>具体例</th></tr>
    <tr><td><strong>他人振出小切手</strong></td><td>他者が振り出した小切手を受け取った場合</td><td>取引先から代金として小切手を受領</td></tr>
    <tr><td><strong>郵便為替証書</strong></td><td>郵便局で発行される為替証書</td><td>郵便局で換金可能</td></tr>
    <tr><td><strong>配当金領収証</strong></td><td>株式の配当金を受け取る証書</td><td>銀行で現金化可能</td></tr>
    <tr><td><strong>送金小切手</strong></td><td>銀行が振り出した送金用小切手</td><td>銀行で換金可能</td></tr>
    <tr><td><strong>期限到来済公社債利札</strong></td><td>期限が来た公社債の利息券</td><td>銀行で換金可能</td></tr>
</table>

<div class="info-box warning">
    <div class="info-box-title">試験での注意点</div>
    「小切手を受け取った」→ <strong>現金の増加</strong>（借方：現金）<br>
    「小切手を振り出した」→ <strong>当座預金の減少</strong>（貸方：当座預金）<br>
    この違いをしっかり区別しましょう！
</div>

<h3>仕訳例：通貨代用証券の受取</h3>

<p><strong>例1）</strong>売掛金の回収として、得意先から<strong>小切手 ¥50,000</strong> を受け取った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>50,000</td><td>売掛金</td><td>50,000</td></tr>
</table>

<p><strong>例2）</strong>所有する株式の<strong>配当金領収証 ¥8,000</strong> を受け取った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>8,000</td><td>受取配当金</td><td>8,000</td></tr>
</table>

<p><strong>例3）</strong>郵便為替証書 <strong>¥30,000</strong> を受け取った（売掛金の回収）。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>30,000</td><td>売掛金</td><td>30,000</td></tr>
</table>

<h2>2. 現金過不足の処理</h2>

<p>現金を実際に数えた金額（<strong>実際残高</strong>）と帳簿上の金額（<strong>帳簿残高</strong>）が合わないことがあります。この差額を処理するのが<strong>「現金過不足」</strong>勘定です。</p>

<div class="visual-box">
    <div class="visual-box-title">現金過不足が発生するパターン</div>
    <div class="compare-grid" style="text-align:left;">
        <div class="compare-card" style="border-top:3px solid var(--danger);">
            <h4 style="color:var(--danger);">帳簿残高 ＞ 実際残高</h4>
            <p>帳簿より実際のお金が<strong>少ない</strong></p>
            <p style="font-size:0.85rem;">→ 現金を減らし、現金過不足（借方）で処理</p>
            <div style="background:var(--danger-light);padding:8px 12px;border-radius:var(--radius);margin-top:8px;font-size:0.85rem;">
                <strong>借方：</strong>現金過不足 ／ <strong>貸方：</strong>現金
            </div>
        </div>
        <div class="compare-card" style="border-top:3px solid var(--success);">
            <h4 style="color:var(--success);">帳簿残高 ＜ 実際残高</h4>
            <p>帳簿より実際のお金が<strong>多い</strong></p>
            <p style="font-size:0.85rem;">→ 現金を増やし、現金過不足（貸方）で処理</p>
            <div style="background:var(--success-light);padding:8px 12px;border-radius:var(--radius);margin-top:8px;font-size:0.85rem;">
                <strong>借方：</strong>現金 ／ <strong>貸方：</strong>現金過不足
            </div>
        </div>
    </div>
</div>

<h3>Step 1：現金過不足の発見時</h3>

<p><strong>例4）</strong>現金の帳簿残高は ¥100,000 だが、実際に数えると ¥97,000 だった。原因は不明。</p>
<p>差額：¥100,000 − ¥97,000 = <strong>¥3,000 不足</strong></p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金過不足</td><td>3,000</td><td>現金</td><td>3,000</td></tr>
</table>

<p><strong>例5）</strong>現金の帳簿残高は ¥80,000 だが、実際に数えると ¥85,000 だった。原因は不明。</p>
<p>差額：¥85,000 − ¥80,000 = <strong>¥5,000 超過</strong></p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>5,000</td><td>現金過不足</td><td>5,000</td></tr>
</table>

<h3>Step 2：原因が判明したとき</h3>

<p>原因が分かったら、「現金過不足」勘定を正しい勘定科目に<strong>振り替え</strong>ます。</p>

<p><strong>例6）</strong>例4 の不足 ¥3,000 の原因が、通信費 ¥2,000 と旅費交通費 ¥1,000 の記帳漏れと判明。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>通信費</td><td>2,000</td><td rowspan="2">現金過不足</td><td rowspan="2">3,000</td></tr>
    <tr><td>旅費交通費</td><td>1,000</td></tr>
</table>

<p><strong>例7）</strong>例5 の超過 ¥5,000 の原因が、受取手数料 ¥5,000 の記帳漏れと判明。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金過不足</td><td>5,000</td><td>受取手数料</td><td>5,000</td></tr>
</table>

<h3>Step 3：決算時に原因不明のまま残った場合</h3>

<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <strong>現金過不足が借方に残っている場合</strong>
            → 「<strong>雑損</strong>」（費用）に振り替え
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <strong>現金過不足が貸方に残っている場合</strong>
            → 「<strong>雑益</strong>」（収益）に振り替え
        </div>
    </div>
</div>

<p><strong>例8）</strong>決算において、現金過不足（借方残高）¥1,500 の原因が不明のため適切に処理する。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>雑損</td><td>1,500</td><td>現金過不足</td><td>1,500</td></tr>
</table>

<p><strong>例9）</strong>決算において、現金過不足（貸方残高）¥2,000 の原因が不明のため適切に処理する。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金過不足</td><td>2,000</td><td>雑益</td><td>2,000</td></tr>
</table>

<div class="info-box success">
    <div class="info-box-title">まとめ：現金過不足の3ステップ</div>
    <strong>発見時</strong> → 「現金過不足」勘定で仮処理<br>
    <strong>原因判明時</strong> → 正しい勘定科目へ振替<br>
    <strong>決算時（原因不明）</strong> → 借方残高は「雑損」、貸方残高は「雑益」
</div>

<h3>例10：一部判明・一部不明のパターン</h3>

<p>現金過不足（借方残高）¥4,000 のうち、¥2,500 は水道光熱費の記帳漏れと判明。残額は原因不明のため決算で処理する。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>水道光熱費</td><td>2,500</td><td rowspan="2">現金過不足</td><td rowspan="2">4,000</td></tr>
    <tr><td>雑損</td><td>1,500</td></tr>
</table>
`,
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "次のうち、簿記上「現金」として扱われないものはどれですか？",
                    options: [
                        "他人振出小切手",
                        "配当金領収証",
                        "自己振出小切手",
                        "郵便為替証書"
                    ],
                    answer: 2,
                    explanation: "自己振出小切手（自分が振り出した小切手が戻ってきた場合）は「当座預金」の増加として処理します。他人振出小切手・配当金領収証・郵便為替証書は通貨代用証券であり、簿記上の「現金」に含まれます。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "現金の帳簿残高が ¥200,000、実際残高が ¥195,000 だった場合の仕訳で、借方科目は何ですか？",
                    options: [
                        "現金",
                        "現金過不足",
                        "雑損",
                        "雑益"
                    ],
                    answer: 1,
                    explanation: "帳簿残高 ¥200,000 > 実際残高 ¥195,000 なので、現金が ¥5,000 不足しています。現金を減らし（貸方：現金）、差額を現金過不足（借方）で処理します。原因が不明な発見時は「現金過不足」を使います。"
                },
                {
                    id: "q301_3",
                    type: "fill",
                    question: "決算において、現金過不足の貸方残高 ¥3,000 の原因が不明だった場合、振り替える勘定科目は何ですか？（漢字2文字で答えてください）",
                    answer: "雑益",
                    explanation: "現金過不足の貸方残高（現金が超過していた）が決算まで原因不明のままの場合は、「雑益」（収益）に振り替えます。逆に借方残高の場合は「雑損」（費用）です。"
                },
                {
                    id: "q301_4",
                    type: "choice",
                    question: "得意先から売掛金の回収として小切手 ¥100,000 を受け取った。正しい仕訳はどれですか？",
                    options: [
                        "（借）当座預金 100,000 ／（貸）売掛金 100,000",
                        "（借）現金 100,000 ／（貸）売掛金 100,000",
                        "（借）受取手形 100,000 ／（貸）売掛金 100,000",
                        "（借）売掛金 100,000 ／（貸）現金 100,000"
                    ],
                    answer: 1,
                    explanation: "他人振出小切手を受け取った場合、簿記上「現金」の増加として処理します。「当座預金」ではありません。（借方）現金 100,000 ／（貸方）売掛金 100,000 が正解です。"
                },
                {
                    id: "q301_5",
                    type: "choice",
                    question: "現金過不足（借方残高）¥6,000 のうち、¥4,000 は消耗品費の記帳漏れと判明した。残りは決算につき雑損で処理する。この仕訳で雑損の金額はいくらですか？",
                    options: [
                        "¥6,000",
                        "¥4,000",
                        "¥2,000",
                        "¥10,000"
                    ],
                    answer: 2,
                    explanation: "現金過不足（借方残高）¥6,000 のうち、¥4,000 は消耗品費と判明。残りの ¥6,000 − ¥4,000 = ¥2,000 が原因不明のため「雑損」で処理します。（借方）消耗品費 4,000・雑損 2,000 ／（貸方）現金過不足 6,000"
                }
            ]
        },

        /* ==========================================
           Module 302: 当座預金と小口現金
           ========================================== */
        {
            id: 302,
            title: "当座預金と小口現金",
            duration: "20分",
            content: `
<h2>1. 当座預金の仕組み</h2>

<p><strong>当座預金</strong>は、企業が銀行に開設する<strong>小切手の振り出し専用の預金口座</strong>です。普通預金と違い、利息はつきませんが、小切手で支払いができます。</p>

<div class="visual-box">
    <div class="visual-box-title">当座預金を使った取引の流れ</div>
    <div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
        <div style="background:var(--primary-light);padding:14px 20px;border-radius:var(--radius);text-align:center;">
            <div style="font-size:1.5rem;">🏢</div>
            <strong>当社</strong><br>
            <span style="font-size:0.8rem;">小切手を振り出す</span>
        </div>
        <div style="font-size:1.2rem;">→ 📄小切手 →</div>
        <div style="background:var(--success-light);padding:14px 20px;border-radius:var(--radius);text-align:center;">
            <div style="font-size:1.5rem;">🏪</div>
            <strong>取引先</strong><br>
            <span style="font-size:0.8rem;">小切手を受け取る</span>
        </div>
        <div style="font-size:1.2rem;">→ 🏦 →</div>
        <div style="background:var(--warning-light);padding:14px 20px;border-radius:var(--radius);text-align:center;">
            <div style="font-size:1.5rem;">🏦</div>
            <strong>銀行</strong><br>
            <span style="font-size:0.8rem;">当座預金から引落</span>
        </div>
    </div>
</div>

<div class="info-box tip">
    <div class="info-box-title">仕訳のポイント</div>
    <strong>小切手を振り出した</strong> → 当座預金の減少（<strong>貸方：当座預金</strong>）<br>
    <strong>当座預金に預け入れた</strong> → 当座預金の増加（<strong>借方：当座預金</strong>）
</div>

<h3>基本的な仕訳例</h3>

<p><strong>例1）</strong>買掛金 ¥150,000 を小切手を振り出して支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>買掛金</td><td>150,000</td><td>当座預金</td><td>150,000</td></tr>
</table>

<p><strong>例2）</strong>売掛金の回収として受け取った小切手 ¥80,000 を当座預金に預け入れた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>当座預金</td><td>80,000</td><td>現金</td><td>80,000</td></tr>
</table>

<h2>2. 自己振出小切手の処理</h2>

<p>自分が以前に振り出した小切手が、巡り巡って自分のところに戻ってくることがあります。これを<strong>自己振出小切手</strong>といいます。</p>

<div class="info-box warning">
    <div class="info-box-title">自己振出小切手は「現金」ではない！</div>
    他人振出小切手 → <strong>「現金」</strong>として処理<br>
    自己振出小切手 → <strong>「当座預金」の増加</strong>として処理<br>
    （自社が振り出した小切手が戻ってきた＝支払義務が消滅＝当座預金の回復）
</div>

<p><strong>例3）</strong>売掛金の回収として、かつて当社が振り出した小切手 ¥60,000 を受け取った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>当座預金</td><td>60,000</td><td>売掛金</td><td>60,000</td></tr>
</table>

<h2>3. 当座借越の処理</h2>

<p>当座預金の残高を超えて小切手を振り出すことを<strong>当座借越</strong>といいます。銀行と<strong>当座借越契約</strong>を結んでいれば、一定限度額まで借り越しができます。</p>

<div class="visual-box">
    <div class="visual-box-title">当座借越のイメージ</div>
    <div style="max-width:400px;margin:0 auto;text-align:left;font-size:0.9rem;">
        <div style="background:var(--primary-light);padding:12px;border-radius:var(--radius);margin-bottom:8px;">
            当座預金残高：<strong>¥100,000</strong>
        </div>
        <div style="background:var(--warning-light);padding:12px;border-radius:var(--radius);margin-bottom:8px;">
            振り出す小切手：<strong>¥150,000</strong>
        </div>
        <div style="background:var(--danger-light);padding:12px;border-radius:var(--radius);">
            不足分 ¥50,000 → <strong>当座借越（銀行からの借入）</strong>
        </div>
    </div>
</div>

<p><strong>例4）</strong>買掛金 ¥150,000 を小切手で支払った。当座預金残高は ¥100,000 で、借越限度額 ¥200,000 の当座借越契約を結んでいる。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>買掛金</td><td>150,000</td><td>当座預金</td><td>100,000</td></tr>
    <tr><td></td><td></td><td>当座借越</td><td>50,000</td></tr>
</table>

<p><strong>例5）</strong>当座借越 ¥50,000 がある状態で、現金 ¥200,000 を当座預金に預け入れた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>当座借越</td><td>50,000</td><td rowspan="2">現金</td><td rowspan="2">200,000</td></tr>
    <tr><td>当座預金</td><td>150,000</td></tr>
</table>

<h2>4. 小口現金とインプレストシステム</h2>

<p><strong>小口現金</strong>は、日常の少額の経費（交通費、文房具代など）を支払うために、担当者（用度係）に前渡しする現金です。</p>

<div class="visual-box">
    <div class="visual-box-title">インプレストシステム（定額資金前渡法）</div>
    <div style="max-width:500px;margin:0 auto;">
        <div class="steps">
            <div class="step">
                <div class="step-num">1</div>
                <div class="step-content">
                    <strong>前渡し</strong>
                    会計係が用度係に一定額の資金を渡す
                </div>
            </div>
            <div class="step">
                <div class="step-num">2</div>
                <div class="step-content">
                    <strong>支払い</strong>
                    用度係が日常の少額経費を支払い、記録する
                </div>
            </div>
            <div class="step">
                <div class="step-num">3</div>
                <div class="step-content">
                    <strong>報告</strong>
                    一定期間後、用度係が支払内容を会計係に報告
                </div>
            </div>
            <div class="step">
                <div class="step-num">4</div>
                <div class="step-content">
                    <strong>補給</strong>
                    会計係が使った分だけ補給 → <strong>常に一定額を保つ</strong>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="info-box tip">
    <div class="info-box-title">インプレストシステムのポイント</div>
    ・小口現金の前渡し時 → 仕訳あり<br>
    ・支払い時 → <strong>仕訳なし</strong>（用度係が記帳するだけ）<br>
    ・報告を受けた時 → <strong>費用の仕訳</strong>を行う<br>
    ・補給時 → 小口現金の補充の仕訳
</div>

<h3>仕訳パターン</h3>

<p><strong>例6）</strong>小口現金として ¥30,000 を小切手を振り出して用度係に渡した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>小口現金</td><td>30,000</td><td>当座預金</td><td>30,000</td></tr>
</table>

<p><strong>例7）</strong>用度係より、交通費 ¥5,000、消耗品費 ¥3,000、通信費 ¥2,000 を支払った旨の報告を受けた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>旅費交通費</td><td>5,000</td><td rowspan="3">小口現金</td><td rowspan="3">10,000</td></tr>
    <tr><td>消耗品費</td><td>3,000</td></tr>
    <tr><td>通信費</td><td>2,000</td></tr>
</table>

<p><strong>例8）</strong>上記報告と同時に、小切手 ¥10,000 を振り出して小口現金を補給した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>小口現金</td><td>10,000</td><td>当座預金</td><td>10,000</td></tr>
</table>

<div class="info-box success">
    <div class="info-box-title">報告と補給が同時の場合の仕訳</div>
    報告と補給が同時に行われた場合は、まとめて仕訳することもできます：<br><br>
    （借方）旅費交通費 5,000 ／ （貸方）当座預金 10,000<br>
    （借方）消耗品費 3,000<br>
    （借方）通信費 2,000<br><br>
    ※「小口現金」勘定を経由しないパターン
</div>

<h2>5. 小口現金出納帳</h2>

<p>用度係が記録する帳簿が<strong>小口現金出納帳</strong>です。受入欄と各支払科目の内訳欄があります。</p>

<table>
    <tr><th>日付</th><th>摘要</th><th>受入</th><th>支払合計</th><th>交通費</th><th>消耗品費</th><th>通信費</th><th>雑費</th></tr>
    <tr><td>4/1</td><td>前渡し</td><td>30,000</td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>4/5</td><td>バス代</td><td></td><td>500</td><td>500</td><td></td><td></td><td></td></tr>
    <tr><td>4/10</td><td>コピー用紙</td><td></td><td>2,000</td><td></td><td>2,000</td><td></td><td></td></tr>
    <tr><td>4/15</td><td>切手代</td><td></td><td>840</td><td></td><td></td><td>840</td><td></td></tr>
    <tr><td>4/30</td><td>合計</td><td></td><td>3,340</td><td>500</td><td>2,000</td><td>840</td><td></td></tr>
    <tr><td>5/1</td><td>補給</td><td>3,340</td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
`,
            quiz: [
                {
                    id: "q302_1",
                    type: "choice",
                    question: "買掛金 ¥200,000 を小切手を振り出して支払った場合の仕訳で、貸方科目は何ですか？",
                    options: [
                        "現金",
                        "小切手",
                        "当座預金",
                        "普通預金"
                    ],
                    answer: 2,
                    explanation: "小切手を振り出した場合、「当座預金」の減少として処理します。貸方に当座預金を記入します。（借方）買掛金 200,000 ／（貸方）当座預金 200,000"
                },
                {
                    id: "q302_2",
                    type: "choice",
                    question: "売掛金の回収として、かつて当社が振り出した小切手 ¥70,000 を受け取った。正しい仕訳はどれですか？",
                    options: [
                        "（借）現金 70,000 ／（貸）売掛金 70,000",
                        "（借）当座預金 70,000 ／（貸）売掛金 70,000",
                        "（借）受取手形 70,000 ／（貸）売掛金 70,000",
                        "（借）小切手 70,000 ／（貸）売掛金 70,000"
                    ],
                    answer: 1,
                    explanation: "自己振出小切手を受け取った場合は「当座預金」の増加として処理します。自分が振り出した小切手が戻ってきた＝支払義務が消滅するため、当座預金が回復します。"
                },
                {
                    id: "q302_3",
                    type: "fill",
                    question: "一定額の資金を用度係に前渡しし、使った分だけ補給する方法を何といいますか？（カタカナ9文字で答えてください）",
                    answer: "インプレストシステム",
                    explanation: "インプレストシステム（定額資金前渡法）は、小口現金の管理方法です。一定額を前渡しし、使用した分だけ補給して常に一定額を保つ仕組みです。"
                },
                {
                    id: "q302_4",
                    type: "choice",
                    question: "当座預金残高 ¥80,000 で、¥120,000 の小切手を振り出した（当座借越契約あり、限度額 ¥500,000）。当座借越の金額はいくらですか？",
                    options: [
                        "¥80,000",
                        "¥120,000",
                        "¥40,000",
                        "¥500,000"
                    ],
                    answer: 2,
                    explanation: "当座借越の金額 = 振出額 ¥120,000 − 当座預金残高 ¥80,000 = ¥40,000 です。不足分の ¥40,000 が当座借越（銀行からの借入）となります。"
                },
                {
                    id: "q302_5",
                    type: "choice",
                    question: "用度係から交通費 ¥3,000、通信費 ¥2,000 の支払報告を受けた。この仕訳の貸方科目は何ですか？",
                    options: [
                        "現金",
                        "当座預金",
                        "小口現金",
                        "仮払金"
                    ],
                    answer: 2,
                    explanation: "用度係からの支払報告を受けたときは、小口現金の減少として処理します。（借方）旅費交通費 3,000・通信費 2,000 ／（貸方）小口現金 5,000"
                }
            ]
        },

        /* ==========================================
           Module 303: 商品売買（三分法）
           ========================================== */
        {
            id: 303,
            title: "商品売買（三分法）",
            duration: "25分",
            content: `
<h2>1. 三分法とは？</h2>

<p>商品売買の記帳方法にはいくつかありますが、簿記3級で最も重要なのが<strong>三分法</strong>です。</p>

<div class="info-box tip">
    <div class="info-box-title">三分法の基本</div>
    商品売買を<strong>3つの勘定科目</strong>に分けて記帳する方法：<br>
    <strong>仕入</strong>（費用） ・ <strong>売上</strong>（収益） ・ <strong>繰越商品</strong>（資産）
</div>

<div class="visual-box">
    <div class="visual-box-title">三分法で使う3つの勘定</div>
    <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:10px;">
        <div style="background:var(--warning-light);padding:16px 24px;border-radius:var(--radius);min-width:160px;text-align:center;">
            <div style="font-size:1.5rem;">📦</div>
            <strong>仕入</strong>（費用）<br>
            <span style="font-size:0.8rem;color:var(--text-secondary);">商品を買ったとき</span>
        </div>
        <div style="background:var(--success-light);padding:16px 24px;border-radius:var(--radius);min-width:160px;text-align:center;">
            <div style="font-size:1.5rem;">🏷️</div>
            <strong>売上</strong>（収益）<br>
            <span style="font-size:0.8rem;color:var(--text-secondary);">商品を売ったとき</span>
        </div>
        <div style="background:var(--primary-light);padding:16px 24px;border-radius:var(--radius);min-width:160px;text-align:center;">
            <div style="font-size:1.5rem;">🏠</div>
            <strong>繰越商品</strong>（資産）<br>
            <span style="font-size:0.8rem;color:var(--text-secondary);">期末の在庫商品</span>
        </div>
    </div>
</div>

<div class="compare-grid">
    <div class="compare-card">
        <h4>三分法の特徴</h4>
        <ul>
            <li>仕入時：原価で「仕入」を計上</li>
            <li>売上時：売価で「売上」を計上</li>
            <li>売上時に原価は記録しない</li>
            <li>利益は決算で計算する</li>
        </ul>
    </div>
    <div class="compare-card">
        <h4>メリット</h4>
        <ul>
            <li>仕訳が簡単で実務的</li>
            <li>販売のたびに原価を調べなくてよい</li>
            <li>簿記3級の主要テーマ</li>
            <li>日本の多くの企業で採用</li>
        </ul>
    </div>
</div>

<h2>2. 仕入の仕訳</h2>

<p>商品を仕入れたときは、「<strong>仕入</strong>」勘定（費用）の借方に記入します。</p>

<p><strong>例1）</strong>商品 ¥300,000 を現金で仕入れた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>仕入</td><td>300,000</td><td>現金</td><td>300,000</td></tr>
</table>

<p><strong>例2）</strong>商品 ¥500,000 を掛けで仕入れた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>仕入</td><td>500,000</td><td>買掛金</td><td>500,000</td></tr>
</table>

<p><strong>例3）</strong>商品 ¥200,000 を仕入れ、代金は小切手を振り出して支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>仕入</td><td>200,000</td><td>当座預金</td><td>200,000</td></tr>
</table>

<h2>3. 売上の仕訳</h2>

<p>商品を売り上げたときは、「<strong>売上</strong>」勘定（収益）の貸方に記入します。</p>

<p><strong>例4）</strong>商品 ¥400,000 を現金で売り上げた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>400,000</td><td>売上</td><td>400,000</td></tr>
</table>

<p><strong>例5）</strong>商品 ¥600,000 を掛けで売り上げた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>売掛金</td><td>600,000</td><td>売上</td><td>600,000</td></tr>
</table>

<p><strong>例6）</strong>商品 ¥350,000 を売り上げ、代金は先方振出の小切手で受け取った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>350,000</td><td>売上</td><td>350,000</td></tr>
</table>

<div class="info-box warning">
    <div class="info-box-title">注意：「先方振出の小切手」</div>
    先方（相手方）が振り出した小切手 = 他人振出小切手 = <strong>「現金」</strong>で処理<br>
    「当座預金」ではないので注意しましょう！
</div>

<h2>4. 仕入返品と売上返品</h2>

<h3>仕入返品（仕入戻し）</h3>
<p>仕入れた商品に不良品があり返品する場合、<strong>仕入の逆仕訳</strong>をします。</p>

<p><strong>例7）</strong>掛けで仕入れた商品のうち、¥20,000 分を品違いのため返品した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>買掛金</td><td>20,000</td><td>仕入</td><td>20,000</td></tr>
</table>

<h3>売上返品（売上戻り）</h3>
<p>売り上げた商品が返品された場合、<strong>売上の逆仕訳</strong>をします。</p>

<p><strong>例8）</strong>掛けで売り上げた商品のうち、¥15,000 分が返品された。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>売上</td><td>15,000</td><td>売掛金</td><td>15,000</td></tr>
</table>

<div class="compare-grid">
    <div class="compare-card" style="border-top:3px solid var(--warning);">
        <h4 style="color:var(--warning);">仕入返品（仕入戻し）</h4>
        <p>仕入れた商品を返す</p>
        <p style="font-size:0.85rem;">仕入の逆仕訳：<br>（借方）買掛金 ／（貸方）<strong>仕入</strong></p>
    </div>
    <div class="compare-card" style="border-top:3px solid var(--success);">
        <h4 style="color:var(--success);">売上返品（売上戻り）</h4>
        <p>売った商品が返される</p>
        <p style="font-size:0.85rem;">売上の逆仕訳：<br>（借方）<strong>売上</strong> ／（貸方）売掛金</p>
    </div>
</div>

<h2>5. 仕入諸掛り・売上諸掛り</h2>

<p>商品の仕入や売上に伴って発生する費用（運送料、保険料など）を<strong>諸掛り</strong>といいます。</p>

<h3>仕入諸掛り（当社負担）</h3>
<p>仕入側が負担する場合は、<strong>仕入原価に含める</strong>のが原則です。</p>

<p><strong>例9）</strong>商品 ¥100,000 を掛けで仕入れ、引取運賃 ¥5,000 を現金で支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>仕入</td><td>105,000</td><td>買掛金</td><td>100,000</td></tr>
    <tr><td></td><td></td><td>現金</td><td>5,000</td></tr>
</table>

<div class="info-box tip">
    <div class="info-box-title">仕入諸掛りのポイント</div>
    当社負担の仕入諸掛り → 仕入勘定に<strong>加算</strong>する（仕入原価に含める）
</div>

<h3>売上諸掛り</h3>

<p><strong>当社負担の場合：</strong>発送費（費用）として処理</p>

<p><strong>例10）</strong>商品 ¥200,000 を掛けで売り上げ、発送運賃 ¥3,000 を現金で支払った（当社負担）。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>売掛金</td><td>200,000</td><td>売上</td><td>200,000</td></tr>
    <tr><td>発送費</td><td>3,000</td><td>現金</td><td>3,000</td></tr>
</table>

<p><strong>先方負担の場合：</strong>立替金または売掛金に加算</p>

<p><strong>例11）</strong>商品 ¥200,000 を掛けで売り上げ、先方負担の発送運賃 ¥3,000 を現金で立て替えた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>売掛金</td><td>200,000</td><td>売上</td><td>200,000</td></tr>
    <tr><td>立替金</td><td>3,000</td><td>現金</td><td>3,000</td></tr>
</table>

<div class="info-box success">
    <div class="info-box-title">諸掛りのまとめ</div>
    <strong>仕入諸掛り（当社負担）</strong>：仕入に加算<br>
    <strong>売上諸掛り（当社負担）</strong>：発送費（費用）で処理<br>
    <strong>売上諸掛り（先方負担）</strong>：立替金 or 売掛金に加算
</div>
`,
            quiz: [
                {
                    id: "q303_1",
                    type: "choice",
                    question: "三分法で使用する3つの勘定科目の組み合わせとして正しいものはどれですか？",
                    options: [
                        "仕入・売上・商品",
                        "仕入・売上・繰越商品",
                        "仕入・売上・売上原価",
                        "商品・売上・売上原価"
                    ],
                    answer: 1,
                    explanation: "三分法では「仕入」（費用）・「売上」（収益）・「繰越商品」（資産）の3つの勘定科目を使います。「商品」ではなく「繰越商品」である点に注意しましょう。"
                },
                {
                    id: "q303_2",
                    type: "choice",
                    question: "商品 ¥250,000 を掛けで仕入れ、引取運賃 ¥8,000 を現金で支払った（当社負担）。仕入勘定に記入する金額はいくらですか？",
                    options: [
                        "¥250,000",
                        "¥258,000",
                        "¥242,000",
                        "¥8,000"
                    ],
                    answer: 1,
                    explanation: "当社負担の仕入諸掛りは仕入原価に含めます。仕入 = ¥250,000 + ¥8,000 = ¥258,000 です。（借方）仕入 258,000 ／（貸方）買掛金 250,000・現金 8,000"
                },
                {
                    id: "q303_3",
                    type: "fill",
                    question: "掛けで仕入れた商品のうち、品違いのため ¥10,000 分を返品した。この仕訳の貸方科目は何ですか？（漢字2文字で答えてください）",
                    answer: "仕入",
                    explanation: "仕入返品（仕入戻し）は、仕入の逆仕訳を行います。（借方）買掛金 10,000 ／（貸方）仕入 10,000。仕入を取り消すため、貸方に「仕入」を記入します。"
                },
                {
                    id: "q303_4",
                    type: "choice",
                    question: "商品 ¥180,000 を売り上げ、代金は先方振出の小切手で受け取った。借方科目は何ですか？",
                    options: [
                        "当座預金",
                        "受取手形",
                        "現金",
                        "売掛金"
                    ],
                    answer: 2,
                    explanation: "先方振出の小切手 = 他人振出小切手 = 簿記上の「現金」です。（借方）現金 180,000 ／（貸方）売上 180,000 となります。"
                },
                {
                    id: "q303_5",
                    type: "choice",
                    question: "掛けで売り上げた商品 ¥30,000 が返品された。正しい仕訳はどれですか？",
                    options: [
                        "（借）売掛金 30,000 ／（貸）売上 30,000",
                        "（借）仕入 30,000 ／（貸）買掛金 30,000",
                        "（借）売上 30,000 ／（貸）売掛金 30,000",
                        "（借）買掛金 30,000 ／（貸）仕入 30,000"
                    ],
                    answer: 2,
                    explanation: "売上返品（売上戻り）は、売上の逆仕訳を行います。売上を取り消す（借方）とともに、売掛金も取り消します（貸方）。（借方）売上 30,000 ／（貸方）売掛金 30,000"
                }
            ]
        },

        /* ==========================================
           Module 304: 売掛金と買掛金
           ========================================== */
        {
            id: 304,
            title: "売掛金と買掛金",
            duration: "20分",
            content: `
<h2>1. 掛取引の仕組み</h2>

<p>商品の代金を後日支払う（または受け取る）約束で取引することを<strong>掛取引</strong>といいます。企業間の取引では、現金取引よりも掛取引が一般的です。</p>

<div class="visual-box">
    <div class="visual-box-title">掛取引の流れ</div>
    <div style="display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;margin-top:10px;">
        <div style="background:var(--primary-light);padding:14px 20px;border-radius:var(--radius);text-align:center;">
            <div style="font-size:1.5rem;">🏢</div>
            <strong>売主</strong><br>
            <span style="font-size:0.8rem;">売掛金が発生</span>
        </div>
        <div style="text-align:center;">
            <div>→ 商品を引渡し →</div>
            <div style="font-size:0.8rem;color:var(--text-secondary);">← 後日代金を支払い ←</div>
        </div>
        <div style="background:var(--success-light);padding:14px 20px;border-radius:var(--radius);text-align:center;">
            <div style="font-size:1.5rem;">🏪</div>
            <strong>買主</strong><br>
            <span style="font-size:0.8rem;">買掛金が発生</span>
        </div>
    </div>
</div>

<div class="compare-grid">
    <div class="compare-card" style="border-top:3px solid var(--primary);">
        <h4>売掛金（うりかけきん）</h4>
        <p><strong>資産</strong>の勘定科目</p>
        <ul>
            <li>商品を掛けで売ったときに発生</li>
            <li>代金を受け取る<strong>権利</strong></li>
            <li>回収時に消滅</li>
        </ul>
    </div>
    <div class="compare-card" style="border-top:3px solid var(--danger);">
        <h4>買掛金（かいかけきん）</h4>
        <p><strong>負債</strong>の勘定科目</p>
        <ul>
            <li>商品を掛けで買ったときに発生</li>
            <li>代金を支払う<strong>義務</strong></li>
            <li>支払時に消滅</li>
        </ul>
    </div>
</div>

<h2>2. 売掛金の発生と回収</h2>

<h3>売掛金の発生（商品を掛けで売上）</h3>

<p><strong>例1）</strong>A商店に商品 ¥300,000 を掛けで売り上げた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>売掛金</td><td>300,000</td><td>売上</td><td>300,000</td></tr>
</table>

<h3>売掛金の回収</h3>

<p><strong>例2）</strong>A商店から売掛金 ¥300,000 を現金で回収した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>300,000</td><td>売掛金</td><td>300,000</td></tr>
</table>

<p><strong>例3）</strong>A商店から売掛金 ¥300,000 が普通預金に振り込まれた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>普通預金</td><td>300,000</td><td>売掛金</td><td>300,000</td></tr>
</table>

<p><strong>例4）</strong>A商店から売掛金 ¥300,000 について、同店振出の小切手で回収した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>300,000</td><td>売掛金</td><td>300,000</td></tr>
</table>

<h2>3. 買掛金の発生と支払</h2>

<h3>買掛金の発生（商品を掛けで仕入）</h3>

<p><strong>例5）</strong>B商店から商品 ¥250,000 を掛けで仕入れた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>仕入</td><td>250,000</td><td>買掛金</td><td>250,000</td></tr>
</table>

<h3>買掛金の支払</h3>

<p><strong>例6）</strong>B商店への買掛金 ¥250,000 を現金で支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>買掛金</td><td>250,000</td><td>現金</td><td>250,000</td></tr>
</table>

<p><strong>例7）</strong>B商店への買掛金 ¥250,000 を小切手を振り出して支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>買掛金</td><td>250,000</td><td>当座預金</td><td>250,000</td></tr>
</table>

<p><strong>例8）</strong>B商店への買掛金 ¥250,000 を普通預金から振り込んだ。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>買掛金</td><td>250,000</td><td>普通預金</td><td>250,000</td></tr>
</table>

<h2>4. 売掛金元帳・買掛金元帳</h2>

<p>売掛金や買掛金は、取引先ごとに管理する必要があります。そのための帳簿が<strong>売掛金元帳</strong>（得意先元帳）と<strong>買掛金元帳</strong>（仕入先元帳）です。</p>

<div class="info-box tip">
    <div class="info-box-title">人名勘定</div>
    売掛金元帳・買掛金元帳では、取引先名を勘定科目のように使うことがあります。<br>
    例：「A商店」「B商店」など → これを<strong>人名勘定</strong>といいます。
</div>

<h3>売掛金元帳の例（A商店）</h3>
<table>
    <tr><th>日付</th><th>摘要</th><th>借方</th><th>貸方</th><th>借/貸</th><th>残高</th></tr>
    <tr><td>4/1</td><td>前月繰越</td><td></td><td></td><td>借</td><td>100,000</td></tr>
    <tr><td>4/5</td><td>売上</td><td>300,000</td><td></td><td>借</td><td>400,000</td></tr>
    <tr><td>4/15</td><td>返品</td><td></td><td>20,000</td><td>借</td><td>380,000</td></tr>
    <tr><td>4/25</td><td>現金回収</td><td></td><td>200,000</td><td>借</td><td>180,000</td></tr>
</table>

<h2>5. クレジット売掛金</h2>

<p>お客様がクレジットカードで支払った場合、通常の売掛金とは別に<strong>クレジット売掛金</strong>で処理します。クレジットカード会社に手数料を支払うため、その分を差し引きます。</p>

<div class="visual-box">
    <div class="visual-box-title">クレジット取引の流れ</div>
    <div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:10px;font-size:0.9rem;">
        <div style="background:var(--primary-light);padding:12px 16px;border-radius:var(--radius);text-align:center;">
            <strong>お客様</strong><br>
            カード払い
        </div>
        <div>→</div>
        <div style="background:var(--success-light);padding:12px 16px;border-radius:var(--radius);text-align:center;">
            <strong>当社</strong><br>
            商品引渡し
        </div>
        <div>→</div>
        <div style="background:var(--warning-light);padding:12px 16px;border-radius:var(--radius);text-align:center;">
            <strong>カード会社</strong><br>
            手数料差引後<br>入金
        </div>
    </div>
</div>

<p><strong>例9）</strong>商品 ¥50,000 をクレジットカード払いで売り上げた。クレジットカード会社への手数料は販売代金の 4% である。</p>
<p>手数料：¥50,000 x 4% = ¥2,000</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>クレジット売掛金</td><td>48,000</td><td rowspan="2">売上</td><td rowspan="2">50,000</td></tr>
    <tr><td>支払手数料</td><td>2,000</td></tr>
</table>

<p><strong>例10）</strong>クレジットカード会社から上記の ¥48,000 が普通預金に入金された。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>普通預金</td><td>48,000</td><td>クレジット売掛金</td><td>48,000</td></tr>
</table>

<div class="info-box warning">
    <div class="info-box-title">試験での注意点</div>
    クレジット売掛金は<strong>売上時に手数料を計上</strong>します。入金時ではありません！<br>
    手数料 = 販売代金 x 手数料率<br>
    クレジット売掛金 = 販売代金 − 手数料
</div>

<div class="info-box success">
    <div class="info-box-title">まとめ</div>
    <strong>売掛金</strong>：商品を掛けで売った → 資産の増加 → 回収で減少<br>
    <strong>買掛金</strong>：商品を掛けで買った → 負債の増加 → 支払で減少<br>
    <strong>クレジット売掛金</strong>：カード払い → 手数料を差引いた金額で計上
</div>
`,
            quiz: [
                {
                    id: "q304_1",
                    type: "choice",
                    question: "売掛金はどの勘定分類に属しますか？",
                    options: [
                        "費用",
                        "収益",
                        "資産",
                        "負債"
                    ],
                    answer: 2,
                    explanation: "売掛金は「資産」です。商品を掛けで売ったときに発生する、代金を受け取る権利です。資産の増加は借方、減少（回収）は貸方に記入します。"
                },
                {
                    id: "q304_2",
                    type: "choice",
                    question: "商品 ¥100,000 をクレジットカード払いで売り上げた。手数料率は 5%。クレジット売掛金の金額はいくらですか？",
                    options: [
                        "¥100,000",
                        "¥105,000",
                        "¥95,000",
                        "¥5,000"
                    ],
                    answer: 2,
                    explanation: "クレジット売掛金 = 販売代金 − 手数料 = ¥100,000 − (¥100,000 x 5%) = ¥100,000 − ¥5,000 = ¥95,000 です。手数料 ¥5,000 は「支払手数料」で処理します。"
                },
                {
                    id: "q304_3",
                    type: "fill",
                    question: "B商店への買掛金 ¥180,000 を小切手を振り出して支払った。この仕訳の貸方科目は何ですか？（漢字4文字で答えてください）",
                    answer: "当座預金",
                    explanation: "小切手を振り出して支払った場合、「当座預金」の減少として処理します。（借方）買掛金 180,000 ／（貸方）当座預金 180,000"
                },
                {
                    id: "q304_4",
                    type: "choice",
                    question: "得意先から売掛金 ¥200,000 について、同店振出の小切手で回収した。借方科目は何ですか？",
                    options: [
                        "当座預金",
                        "売掛金",
                        "現金",
                        "受取手形"
                    ],
                    answer: 2,
                    explanation: "「同店振出の小切手」＝他人振出小切手＝簿記上の「現金」です。（借方）現金 200,000 ／（貸方）売掛金 200,000。当座預金ではなく現金で処理する点に注意です。"
                },
                {
                    id: "q304_5",
                    type: "choice",
                    question: "取引先ごとに売掛金の増減を管理する帳簿を何といいますか？",
                    options: [
                        "仕訳帳",
                        "総勘定元帳",
                        "売掛金元帳（得意先元帳）",
                        "現金出納帳"
                    ],
                    answer: 2,
                    explanation: "取引先ごとに売掛金の増減と残高を管理する帳簿は「売掛金元帳」（得意先元帳）です。同様に買掛金を管理する帳簿は「買掛金元帳」（仕入先元帳）です。"
                }
            ]
        },

        /* ==========================================
           Module 305: 約束手形
           ========================================== */
        {
            id: 305,
            title: "約束手形",
            duration: "15分",
            content: `
<h2>1. 約束手形の仕組み</h2>

<p><strong>約束手形</strong>とは、「将来の一定の期日に、一定の金額を支払うことを約束する」有価証券です。</p>

<div class="visual-box">
    <div class="visual-box-title">約束手形の登場人物</div>
    <div style="display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;margin-top:10px;">
        <div style="background:var(--danger-light);padding:16px 24px;border-radius:var(--radius);text-align:center;min-width:160px;">
            <div style="font-size:1.5rem;">✍️</div>
            <strong>振出人</strong><br>
            <span style="font-size:0.8rem;color:var(--text-secondary);">手形を作成・署名する人<br>→ <strong>支払う義務</strong>がある<br>→ 「支払手形」で処理</span>
        </div>
        <div style="text-align:center;font-size:0.85rem;">
            <div style="font-size:1.2rem;">📜 手形</div>
            →→→→→
        </div>
        <div style="background:var(--success-light);padding:16px 24px;border-radius:var(--radius);text-align:center;min-width:160px;">
            <div style="font-size:1.5rem;">🤝</div>
            <strong>受取人（名宛人）</strong><br>
            <span style="font-size:0.8rem;color:var(--text-secondary);">手形を受け取る人<br>→ <strong>受け取る権利</strong>がある<br>→ 「受取手形」で処理</span>
        </div>
    </div>
</div>

<div class="compare-grid">
    <div class="compare-card" style="border-top:3px solid var(--success);">
        <h4 style="color:var(--success);">受取手形（資産）</h4>
        <p>手形を<strong>受け取った</strong>側が使用</p>
        <ul>
            <li>代金を受け取る権利</li>
            <li>手形受取時：借方に記入</li>
            <li>期日到来（入金）時：貸方に記入</li>
        </ul>
    </div>
    <div class="compare-card" style="border-top:3px solid var(--danger);">
        <h4 style="color:var(--danger);">支払手形（負債）</h4>
        <p>手形を<strong>振り出した</strong>側が使用</p>
        <ul>
            <li>代金を支払う義務</li>
            <li>手形振出時：貸方に記入</li>
            <li>期日到来（支払）時：借方に記入</li>
        </ul>
    </div>
</div>

<h2>2. 受取手形の仕訳</h2>

<h3>手形を受け取ったとき</h3>

<p><strong>例1）</strong>A商店に商品 ¥400,000 を売り上げ、代金は約束手形で受け取った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>受取手形</td><td>400,000</td><td>売上</td><td>400,000</td></tr>
</table>

<p><strong>例2）</strong>B商店に対する売掛金 ¥200,000 について、同店振出の約束手形を受け取った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>受取手形</td><td>200,000</td><td>売掛金</td><td>200,000</td></tr>
</table>

<h3>手形の期日が到来したとき（入金）</h3>

<p><strong>例3）</strong>A商店振出の約束手形 ¥400,000 が満期となり、当座預金に入金された。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>当座預金</td><td>400,000</td><td>受取手形</td><td>400,000</td></tr>
</table>

<h2>3. 支払手形の仕訳</h2>

<h3>手形を振り出したとき</h3>

<p><strong>例4）</strong>C商店から商品 ¥350,000 を仕入れ、代金は約束手形を振り出して支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>仕入</td><td>350,000</td><td>支払手形</td><td>350,000</td></tr>
</table>

<p><strong>例5）</strong>D商店に対する買掛金 ¥180,000 について、約束手形を振り出して支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>買掛金</td><td>180,000</td><td>支払手形</td><td>180,000</td></tr>
</table>

<h3>手形の期日が到来したとき（支払）</h3>

<p><strong>例6）</strong>振り出していた約束手形 ¥350,000 が満期となり、当座預金から引き落とされた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>支払手形</td><td>350,000</td><td>当座預金</td><td>350,000</td></tr>
</table>

<div class="info-box tip">
    <div class="info-box-title">手形の仕訳パターンまとめ</div>
    <table>
        <tr><th>場面</th><th>借方</th><th>貸方</th></tr>
        <tr><td>手形で売上</td><td>受取手形</td><td>売上</td></tr>
        <tr><td>売掛金を手形で回収</td><td>受取手形</td><td>売掛金</td></tr>
        <tr><td>受取手形の期日到来</td><td>当座預金</td><td>受取手形</td></tr>
        <tr><td>手形で仕入</td><td>仕入</td><td>支払手形</td></tr>
        <tr><td>買掛金を手形で支払</td><td>買掛金</td><td>支払手形</td></tr>
        <tr><td>支払手形の期日到来</td><td>支払手形</td><td>当座預金</td></tr>
    </table>
</div>

<h2>4. 手形の更改（書換え）</h2>

<p>手形の支払期日に支払いができないとき、手形の振出人が受取人にお願いして、新しい手形を振り出すことがあります。これを<strong>手形の更改</strong>といいます。</p>

<div class="info-box warning">
    <div class="info-box-title">更改のポイント</div>
    手形の更改では、支払期日の延長に伴い<strong>利息</strong>が発生することがあります。
</div>

<p><strong>例7）</strong>当社振出の約束手形 ¥200,000 について、手形の更改を行い、新たな手形を振り出した。なお、期日延長にかかる利息 ¥3,000 は新手形の金額に含めた。</p>

<p>【振出人（当社）側の仕訳】</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>支払手形（旧）</td><td>200,000</td><td rowspan="2">支払手形（新）</td><td rowspan="2">203,000</td></tr>
    <tr><td>支払利息</td><td>3,000</td></tr>
</table>

<p><strong>例8）</strong>受取手形 ¥200,000 について、振出人の依頼により手形の更改を承諾した。利息 ¥3,000 を新手形の金額に含めた。</p>

<p>【受取人側の仕訳】</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>受取手形（新）</td><td>203,000</td><td>受取手形（旧）</td><td>200,000</td></tr>
    <tr><td></td><td></td><td>受取利息</td><td>3,000</td></tr>
</table>

<h2>5. 電子記録債権・電子記録債務</h2>

<p>約束手形の電子版ともいえるのが<strong>電子記録債権・電子記録債務</strong>です。紙の手形に代わり、電子データで管理します。</p>

<div class="visual-box">
    <div class="visual-box-title">手形と電子記録債権の対応</div>
    <div class="compare-grid" style="text-align:left;">
        <div class="compare-card">
            <h4>紙の手形</h4>
            <ul>
                <li>受取手形（資産）</li>
                <li>支払手形（負債）</li>
            </ul>
        </div>
        <div class="compare-card">
            <h4>電子記録</h4>
            <ul>
                <li>電子記録債権（資産）</li>
                <li>電子記録債務（負債）</li>
            </ul>
        </div>
    </div>
</div>

<div class="info-box tip">
    <div class="info-box-title">仕訳のポイント</div>
    勘定科目が違うだけで、仕訳の考え方は受取手形・支払手形と同じです！
</div>

<p><strong>例9）</strong>商品 ¥500,000 を売り上げ、電子記録債権が発生した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>電子記録債権</td><td>500,000</td><td>売上</td><td>500,000</td></tr>
</table>

<p><strong>例10）</strong>買掛金 ¥300,000 について、電子記録債務が発生した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>買掛金</td><td>300,000</td><td>電子記録債務</td><td>300,000</td></tr>
</table>

<p><strong>例11）</strong>電子記録債権 ¥500,000 の期日が到来し、当座預金に入金された。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>当座預金</td><td>500,000</td><td>電子記録債権</td><td>500,000</td></tr>
</table>

<p><strong>例12）</strong>電子記録債務 ¥300,000 の期日が到来し、当座預金から引き落とされた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>電子記録債務</td><td>300,000</td><td>当座預金</td><td>300,000</td></tr>
</table>

<div class="info-box success">
    <div class="info-box-title">全体のまとめ</div>
    <strong>約束手形</strong>：将来の一定期日に支払う約束の証券<br>
    <strong>受取手形</strong>（資産）：手形を受け取った側の権利<br>
    <strong>支払手形</strong>（負債）：手形を振り出した側の義務<br>
    <strong>手形の更改</strong>：期日延長のための書換え（利息発生の場合あり）<br>
    <strong>電子記録債権/債務</strong>：手形の電子版、仕訳の考え方は同じ
</div>
`,
            quiz: [
                {
                    id: "q305_1",
                    type: "choice",
                    question: "約束手形を振り出した側が使う勘定科目はどれですか？",
                    options: [
                        "受取手形",
                        "支払手形",
                        "売掛金",
                        "買掛金"
                    ],
                    answer: 1,
                    explanation: "約束手形を振り出した側（支払う義務がある側）は「支払手形」（負債）を使います。受け取った側は「受取手形」（資産）です。"
                },
                {
                    id: "q305_2",
                    type: "choice",
                    question: "商品 ¥400,000 を売り上げ、代金は約束手形で受け取った。正しい仕訳はどれですか？",
                    options: [
                        "（借）支払手形 400,000 ／（貸）売上 400,000",
                        "（借）売掛金 400,000 ／（貸）売上 400,000",
                        "（借）受取手形 400,000 ／（貸）売上 400,000",
                        "（借）現金 400,000 ／（貸）売上 400,000"
                    ],
                    answer: 2,
                    explanation: "約束手形を受け取った場合は「受取手形」（資産の増加）を借方に記入します。（借方）受取手形 400,000 ／（貸方）売上 400,000"
                },
                {
                    id: "q305_3",
                    type: "fill",
                    question: "電子記録債権が発生した場合、受取手形と同様に何の勘定分類で処理しますか？（漢字2文字で答えてください）",
                    answer: "資産",
                    explanation: "電子記録債権は「資産」です。紙の受取手形と同様に、代金を受け取る権利を表します。発生時は借方、期日到来時は貸方に記入します。"
                },
                {
                    id: "q305_4",
                    type: "choice",
                    question: "受取手形 ¥300,000 が満期となり、当座預金に入金された。正しい仕訳はどれですか？",
                    options: [
                        "（借）受取手形 300,000 ／（貸）当座預金 300,000",
                        "（借）当座預金 300,000 ／（貸）受取手形 300,000",
                        "（借）当座預金 300,000 ／（貸）支払手形 300,000",
                        "（借）現金 300,000 ／（貸）受取手形 300,000"
                    ],
                    answer: 1,
                    explanation: "受取手形の期日到来（満期）で入金された場合、受取手形（資産）が減少し、当座預金（資産）が増加します。（借方）当座預金 300,000 ／（貸方）受取手形 300,000"
                },
                {
                    id: "q305_5",
                    type: "choice",
                    question: "当社振出の約束手形 ¥150,000 の更改を行い、利息 ¥2,000 を含めた新手形を振り出した。新しい支払手形の金額はいくらですか？",
                    options: [
                        "¥150,000",
                        "¥148,000",
                        "¥152,000",
                        "¥2,000"
                    ],
                    answer: 2,
                    explanation: "手形の更改では、旧手形の金額に利息を加えた金額で新手形を振り出します。新しい支払手形 = ¥150,000 + ¥2,000 = ¥152,000。（借方）支払手形（旧）150,000・支払利息 2,000 ／（貸方）支払手形（新）152,000"
                }
            ]
        }

    ]
};
