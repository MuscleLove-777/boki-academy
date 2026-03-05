/* ============================================
   簿記3級アカデミー - Level 4: その他の取引
   ============================================ */
const LEVEL4_DATA = {
    id: 4,
    title: "その他の取引",
    icon: "🏦",
    description: "貸借・固定資産・その他の重要取引",
    modules: [
        // ============================================================
        // Module 401: 貸付金・借入金
        // ============================================================
        {
            id: 401,
            title: "貸付金・借入金",
            duration: "15分",
            content: `
<h2>💰 貸付金・借入金とは？</h2>
<p>企業は資金の運用や調達のために、お金を<strong>貸したり</strong>（貸付金）<strong>借りたり</strong>（借入金）します。ここでは、それぞれの仕訳をマスターしましょう！</p>

<div class="visual-box">
    <div class="visual-box-title">貸付金と借入金のイメージ</div>
    <div style="display:flex;justify-content:center;align-items:center;gap:40px;flex-wrap:wrap;">
        <div style="background:#dbeafe;padding:20px 28px;border-radius:12px;text-align:center;">
            <div style="font-size:2rem;">🏢</div>
            <div style="font-weight:700;margin-top:4px;">当社</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <div style="font-size:0.85rem;color:#2563eb;font-weight:700;">お金を貸す → 貸付金（資産）</div>
            <div style="font-size:1.5rem;">→→→</div>
            <div style="font-size:1.5rem;">←←←</div>
            <div style="font-size:0.85rem;color:#dc2626;font-weight:700;">お金を借りる → 借入金（負債）</div>
        </div>
        <div style="background:#fef3c7;padding:20px 28px;border-radius:12px;text-align:center;">
            <div style="font-size:2rem;">🏦</div>
            <div style="font-weight:700;margin-top:4px;">相手先</div>
        </div>
    </div>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 ポイント</div>
    <strong>貸付金</strong>は「お金を貸した権利」→ <strong>資産</strong>（借方に増加）<br>
    <strong>借入金</strong>は「お金を返す義務」→ <strong>負債</strong>（貸方に増加）
</div>

<h2>📝 貸付金の仕訳</h2>

<h3>① 貸付時（お金を貸した時）</h3>
<p>A社に現金¥500,000を貸し付けた。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>貸付金</td><td>500,000</td><td>現金</td><td>500,000</td></tr>
</table>

<h3>② 利息受取時</h3>
<p>A社から貸付金の利息¥5,000を現金で受け取った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>5,000</td><td>受取利息</td><td>5,000</td></tr>
</table>

<h3>③ 回収時（元金と利息を一緒に回収）</h3>
<p>A社から貸付金¥500,000と利息¥10,000を現金で回収した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>510,000</td><td>貸付金</td><td>500,000</td></tr>
    <tr><td></td><td></td><td>受取利息</td><td>10,000</td></tr>
</table>

<h2>📝 借入金の仕訳</h2>

<h3>① 借入時（お金を借りた時）</h3>
<p>銀行から¥1,000,000を借り入れ、当座預金に入金された。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>当座預金</td><td>1,000,000</td><td>借入金</td><td>1,000,000</td></tr>
</table>

<h3>② 利息支払時</h3>
<p>借入金の利息¥15,000を現金で支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>支払利息</td><td>15,000</td><td>現金</td><td>15,000</td></tr>
</table>

<h3>③ 返済時（元金と利息を一緒に返済）</h3>
<p>銀行に借入金¥1,000,000と利息¥20,000を当座預金から支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>借入金</td><td>1,000,000</td><td>当座預金</td><td>1,020,000</td></tr>
    <tr><td>支払利息</td><td>20,000</td><td></td><td></td></tr>
</table>

<h2>📄 手形貸付金・手形借入金</h2>
<p>借用証書の代わりに<strong>約束手形</strong>を使って貸し借りする場合、「手形貸付金」「手形借入金」の勘定を使います。</p>

<div class="compare-grid">
    <div class="compare-card">
        <h4>手形貸付金（資産）</h4>
        <p>約束手形を受け取って貸し付けた場合</p>
        <p>例：B社に約束手形を受け取り¥300,000を貸し付けた</p>
        <table>
            <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
            <tr><td>手形貸付金</td><td>300,000</td><td>当座預金</td><td>300,000</td></tr>
        </table>
    </div>
    <div class="compare-card">
        <h4>手形借入金（負債）</h4>
        <p>約束手形を差し入れて借り入れた場合</p>
        <p>例：約束手形を差し入れて銀行から¥300,000を借りた</p>
        <table>
            <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
            <tr><td>当座預金</td><td>300,000</td><td>手形借入金</td><td>300,000</td></tr>
        </table>
    </div>
</div>

<h2>🔢 利息の計算方法</h2>

<div class="info-box formula">
    <div class="info-box-title">📐 利息計算の公式</div>
    <div style="font-size:1.2rem;text-align:center;padding:8px 0;font-weight:700;">
        利息 ＝ 元金 × 年利率 × 期間（月数）÷ 12
    </div>
</div>

<div class="steps">
    <div class="step">
        <div class="step-num">例</div>
        <div class="step-content">
            <strong>元金¥600,000、年利率3%、期間8ヶ月の場合</strong>
            利息 ＝ ¥600,000 × 3% × 8/12<br>
            ＝ ¥600,000 × 0.03 × 8/12<br>
            ＝ <strong>¥12,000</strong>
        </div>
    </div>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ 試験でよく出るパターン</div>
    利率が「月割」で指定される場合もあります。<br>
    例：「年利率6%、借入期間3ヶ月」→ 利息 = 元金 × 6% × 3/12<br>
    <strong>日割計算</strong>の場合は「÷365」を使います：利息 = 元金 × 年利率 × 日数 ÷ 365
</div>

<h2>🎯 まとめ</h2>
<table>
    <tr><th>取引</th><th>借方</th><th>貸方</th></tr>
    <tr><td>お金を貸した</td><td>貸付金（資産↑）</td><td>現金等（資産↓）</td></tr>
    <tr><td>貸付金を回収</td><td>現金等（資産↑）</td><td>貸付金（資産↓）</td></tr>
    <tr><td>利息を受け取った</td><td>現金等（資産↑）</td><td>受取利息（収益↑）</td></tr>
    <tr><td>お金を借りた</td><td>現金等（資産↑）</td><td>借入金（負債↑）</td></tr>
    <tr><td>借入金を返済</td><td>借入金（負債↓）</td><td>現金等（資産↓）</td></tr>
    <tr><td>利息を支払った</td><td>支払利息（費用↑）</td><td>現金等（資産↓）</td></tr>
</table>
`,
            quiz: [
                {
                    id: "q401_1",
                    type: "choice",
                    question: "A社に現金¥200,000を貸し付けた場合の仕訳で、借方科目は何ですか？",
                    options: ["現金", "貸付金", "借入金", "受取利息"],
                    answer: 1,
                    explanation: "お金を貸した場合、「貸付金」（資産）が増加するため、借方に貸付金を記入します。貸方には減少した現金を記入します。"
                },
                {
                    id: "q401_2",
                    type: "choice",
                    question: "銀行から¥500,000を借り入れ、当座預金に入金された場合の仕訳はどれですか？",
                    options: [
                        "（借方）借入金 500,000 ／（貸方）当座預金 500,000",
                        "（借方）当座預金 500,000 ／（貸方）借入金 500,000",
                        "（借方）当座預金 500,000 ／（貸方）貸付金 500,000",
                        "（借方）現金 500,000 ／（貸方）借入金 500,000"
                    ],
                    answer: 1,
                    explanation: "お金を借りた場合、当座預金（資産）が増加して借方に、借入金（負債）が増加して貸方に記入します。"
                },
                {
                    id: "q401_3",
                    type: "fill",
                    question: "元金¥400,000、年利率6%、期間4ヶ月の場合、利息はいくらですか？（数字のみ入力）",
                    answer: "8000",
                    explanation: "利息 = 元金 × 年利率 × 期間/12 = ¥400,000 × 6% × 4/12 = ¥400,000 × 0.06 × 4/12 = ¥8,000"
                },
                {
                    id: "q401_4",
                    type: "choice",
                    question: "約束手形を受け取ってお金を貸し付けた場合に使う勘定科目はどれですか？",
                    options: ["貸付金", "手形貸付金", "受取手形", "手形借入金"],
                    answer: 1,
                    explanation: "約束手形を受け取って貸し付けた場合は「手形貸付金」（資産）を使います。通常の借用証書による貸付は「貸付金」を使います。"
                },
                {
                    id: "q401_5",
                    type: "choice",
                    question: "貸付金¥300,000を利息¥6,000とともに現金で回収した場合、貸方に記入する科目と金額の組み合わせとして正しいのはどれですか？",
                    options: [
                        "貸付金 306,000",
                        "貸付金 300,000 と 支払利息 6,000",
                        "貸付金 300,000 と 受取利息 6,000",
                        "受取利息 306,000"
                    ],
                    answer: 2,
                    explanation: "貸付金の回収では、貸方に貸付金（資産の減少）¥300,000と受取利息（収益の発生）¥6,000を記入します。借方には現金¥306,000が入ります。"
                }
            ]
        },

        // ============================================================
        // Module 402: 未収・未払・前払・前受
        // ============================================================
        {
            id: 402,
            title: "未収・未払・前払・前受",
            duration: "20分",
            content: `
<h2>🔄 商品以外の取引と前払い・前受け</h2>
<p>簿記3級では、商品売買以外の取引や、代金の前払い・前受けに関する勘定科目がよく出題されます。ここでは<strong>6つの重要勘定科目</strong>を整理しましょう！</p>

<div class="visual-box">
    <div class="visual-box-title">6つの勘定科目の全体マップ</div>
    <table>
        <tr><th></th><th style="background:#2563eb;">まだ受け取っていない / 先に払った</th><th style="background:#dc2626;">まだ払っていない / 先に受け取った</th></tr>
        <tr><td style="font-weight:700;background:#f1f5f9;">商品以外の売買</td><td style="background:#dbeafe;">未収入金（資産）</td><td style="background:#fee2e2;">未払金（負債）</td></tr>
        <tr><td style="font-weight:700;background:#f1f5f9;">商品の内金・手付金</td><td style="background:#dbeafe;">前払金（資産）</td><td style="background:#fee2e2;">前受金（負債）</td></tr>
        <tr><td style="font-weight:700;background:#f1f5f9;">金額・内容が未確定</td><td style="background:#dbeafe;">仮払金（資産）</td><td style="background:#fee2e2;">仮受金（負債）</td></tr>
    </table>
</div>

<h2>📝 未収入金・未払金</h2>
<p><strong>商品以外</strong>のモノを売買して、代金が未決済の場合に使います。</p>

<div class="info-box tip">
    <div class="info-box-title">💡 売掛金・買掛金との違い</div>
    <strong>売掛金・買掛金</strong> → 「<strong>商品</strong>」の掛け取引<br>
    <strong>未収入金・未払金</strong> → 「<strong>商品以外</strong>」（備品、土地、建物など）の未決済取引
</div>

<h3>未収入金の仕訳例</h3>
<p>不要になった備品（帳簿価額¥200,000）を¥200,000で売却し、代金は後日受け取ることにした。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>未収入金</td><td>200,000</td><td>備品</td><td>200,000</td></tr>
</table>
<p>後日、上記の代金¥200,000を現金で受け取った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>200,000</td><td>未収入金</td><td>200,000</td></tr>
</table>

<h3>未払金の仕訳例</h3>
<p>備品¥150,000を購入し、代金は後日支払うことにした。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>備品</td><td>150,000</td><td>未払金</td><td>150,000</td></tr>
</table>
<p>後日、未払金¥150,000を現金で支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>未払金</td><td>150,000</td><td>現金</td><td>150,000</td></tr>
</table>

<h2>📝 前払金・前受金</h2>
<p><strong>商品</strong>の代金を前もって支払ったり受け取ったりした場合に使います（内金・手付金）。</p>

<div class="compare-grid">
    <div class="compare-card">
        <h4>前払金（資産）</h4>
        <p>商品を注文し、内金として代金の一部を<strong>先に支払った</strong>場合</p>
        <p style="font-size:0.85rem;color:var(--text-secondary);">「前もって払った金」→ 将来商品を受け取る権利</p>
    </div>
    <div class="compare-card">
        <h4>前受金（負債）</h4>
        <p>商品の注文を受け、内金として代金の一部を<strong>先に受け取った</strong>場合</p>
        <p style="font-size:0.85rem;color:var(--text-secondary);">「前もって受けた金」→ 将来商品を引き渡す義務</p>
    </div>
</div>

<h3>前払金の仕訳例</h3>
<p>商品¥100,000を注文し、内金¥30,000を現金で支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>前払金</td><td>30,000</td><td>現金</td><td>30,000</td></tr>
</table>
<p>商品¥100,000が届き、残額¥70,000を現金で支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>仕入</td><td>100,000</td><td>前払金</td><td>30,000</td></tr>
    <tr><td></td><td></td><td>現金</td><td>70,000</td></tr>
</table>

<h3>前受金の仕訳例</h3>
<p>商品¥80,000の注文を受け、内金¥20,000を現金で受け取った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>20,000</td><td>前受金</td><td>20,000</td></tr>
</table>
<p>商品¥80,000を引き渡し、残額¥60,000を現金で受け取った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>前受金</td><td>20,000</td><td>売上</td><td>80,000</td></tr>
    <tr><td>現金</td><td>60,000</td><td></td><td></td></tr>
</table>

<h2>📝 仮払金・仮受金</h2>
<p>金額や内容が<strong>確定していない</strong>場合に、一時的に使う勘定科目です。</p>

<div class="info-box warning">
    <div class="info-box-title">⚠️ 仮払金・仮受金は「仮の勘定」</div>
    内容や金額が確定したら、必ず正しい勘定科目に<strong>振り替える</strong>必要があります。決算まで残しておくことはできません。
</div>

<h3>仮払金の仕訳例</h3>
<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <strong>出張時：内容・金額未確定で支出</strong>
            従業員の出張にあたり、旅費の概算額¥50,000を現金で渡した。
            <table>
                <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
                <tr><td>仮払金</td><td>50,000</td><td>現金</td><td>50,000</td></tr>
            </table>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <strong>帰社時：内容確定で振替</strong>
            従業員が帰社し、旅費交通費¥42,000と報告。残額¥8,000は現金で返金を受けた。
            <table>
                <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
                <tr><td>旅費交通費</td><td>42,000</td><td>仮払金</td><td>50,000</td></tr>
                <tr><td>現金</td><td>8,000</td><td></td><td></td></tr>
            </table>
        </div>
    </div>
</div>

<h3>仮受金の仕訳例</h3>
<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <strong>入金時：内容不明の入金</strong>
            当座預金に¥100,000の入金があったが、内容が不明である。
            <table>
                <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
                <tr><td>当座預金</td><td>100,000</td><td>仮受金</td><td>100,000</td></tr>
            </table>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <strong>判明時：売掛金の回収と判明</strong>
            上記入金は、得意先C社からの売掛金の回収と判明した。
            <table>
                <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
                <tr><td>仮受金</td><td>100,000</td><td>売掛金</td><td>100,000</td></tr>
            </table>
        </div>
    </div>
</div>

<h2>🎯 4つの違いを比較表で整理</h2>
<table>
    <tr><th>勘定科目</th><th>分類</th><th>使うタイミング</th><th>具体例</th></tr>
    <tr><td><strong>未収入金</strong></td><td>資産</td><td>商品以外を売却して代金が未回収</td><td>備品・土地の売却の未収分</td></tr>
    <tr><td><strong>未払金</strong></td><td>負債</td><td>商品以外を購入して代金が未払い</td><td>備品・車両の購入の未払分</td></tr>
    <tr><td><strong>前払金</strong></td><td>資産</td><td>商品の内金・手付金を支払った</td><td>商品の注文時に支払った内金</td></tr>
    <tr><td><strong>前受金</strong></td><td>負債</td><td>商品の内金・手付金を受け取った</td><td>商品の注文を受けた時の内金</td></tr>
    <tr><td><strong>仮払金</strong></td><td>資産</td><td>金額・内容が未確定の支出</td><td>出張旅費の概算払い</td></tr>
    <tr><td><strong>仮受金</strong></td><td>負債</td><td>金額・内容が未確定の入金</td><td>原因不明の当座預金入金</td></tr>
</table>

<div class="info-box success">
    <div class="info-box-title">✅ 覚え方のコツ</div>
    <strong>「未」</strong>がつく → 商品<strong>以外</strong>の売買の未決済<br>
    <strong>「前」</strong>がつく → <strong>商品</strong>の代金を先に払った／受けた<br>
    <strong>「仮」</strong>がつく → 内容・金額が<strong>未確定</strong>（一時的な勘定）
</div>
`,
            quiz: [
                {
                    id: "q402_1",
                    type: "choice",
                    question: "備品¥300,000を売却し、代金は後日受け取ることにした。借方に記入する勘定科目はどれですか？",
                    options: ["売掛金", "未収入金", "前受金", "仮受金"],
                    answer: 1,
                    explanation: "商品以外（備品）の売却代金が未回収の場合は「未収入金」（資産）を使います。「売掛金」は商品の掛け売りに使う科目です。"
                },
                {
                    id: "q402_2",
                    type: "choice",
                    question: "商品¥50,000を注文し、内金¥10,000を現金で支払った場合の仕訳はどれですか？",
                    options: [
                        "（借方）仕入 10,000 ／（貸方）現金 10,000",
                        "（借方）前払金 10,000 ／（貸方）現金 10,000",
                        "（借方）仮払金 10,000 ／（貸方）現金 10,000",
                        "（借方）未払金 10,000 ／（貸方）現金 10,000"
                    ],
                    answer: 1,
                    explanation: "商品の注文時に内金（手付金）を支払った場合は「前払金」（資産）を使います。商品の到着時に「仕入」に振り替えます。"
                },
                {
                    id: "q402_3",
                    type: "fill",
                    question: "当座預金に内容不明の入金¥80,000があった場合、貸方に記入する勘定科目は何ですか？（漢字で入力）",
                    answer: "仮受金",
                    explanation: "内容が不明な入金は一時的に「仮受金」（負債）で処理します。内容が判明したら正しい勘定科目に振り替えます。"
                },
                {
                    id: "q402_4",
                    type: "choice",
                    question: "従業員が出張から帰社し、仮払金¥30,000のうち旅費交通費¥25,000と報告し、残額を現金で返金した。正しい仕訳はどれですか？",
                    options: [
                        "（借方）旅費交通費 25,000・現金 5,000 ／（貸方）仮払金 30,000",
                        "（借方）仮払金 30,000 ／（貸方）旅費交通費 25,000・現金 5,000",
                        "（借方）旅費交通費 30,000 ／（貸方）仮払金 30,000",
                        "（借方）旅費交通費 25,000 ／（貸方）仮払金 25,000"
                    ],
                    answer: 0,
                    explanation: "仮払金¥30,000を取り崩し（貸方）、旅費交通費¥25,000（借方）を計上し、残額¥5,000を現金（借方）で返金を受けます。"
                },
                {
                    id: "q402_5",
                    type: "choice",
                    question: "次のうち「負債」に分類される勘定科目の組み合わせはどれですか？",
                    options: [
                        "未収入金・前払金",
                        "未払金・前受金",
                        "前払金・仮受金",
                        "未収入金・仮払金"
                    ],
                    answer: 1,
                    explanation: "未払金（商品以外の代金未払い）と前受金（商品の代金を先に受け取った義務）はどちらも負債です。未収入金・前払金・仮払金は資産です。"
                }
            ]
        },

        // ============================================================
        // Module 403: 固定資産
        // ============================================================
        {
            id: 403,
            title: "固定資産",
            duration: "20分",
            content: `
<h2>🏗️ 固定資産とは？</h2>
<p>固定資産とは、企業が<strong>長期間にわたって使用する</strong>ために保有する資産です。販売目的ではなく、営業活動のために使います。</p>

<div class="visual-box">
    <div class="visual-box-title">簿記3級で出題される固定資産</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;text-align:center;">
        <div style="background:#dbeafe;padding:16px;border-radius:10px;">
            <div style="font-size:2rem;">🏢</div>
            <div style="font-weight:700;margin-top:4px;">建物</div>
            <div style="font-size:0.8rem;color:#64748b;">事務所・店舗・倉庫</div>
        </div>
        <div style="background:#d1fae5;padding:16px;border-radius:10px;">
            <div style="font-size:2rem;">💻</div>
            <div style="font-weight:700;margin-top:4px;">備品</div>
            <div style="font-size:0.8rem;color:#64748b;">机・パソコン・棚</div>
        </div>
        <div style="background:#fef3c7;padding:16px;border-radius:10px;">
            <div style="font-size:2rem;">🚗</div>
            <div style="font-weight:700;margin-top:4px;">車両運搬具</div>
            <div style="font-size:0.8rem;color:#64748b;">トラック・営業車</div>
        </div>
        <div style="background:#ede9fe;padding:16px;border-radius:10px;">
            <div style="font-size:2rem;">🏞️</div>
            <div style="font-weight:700;margin-top:4px;">土地</div>
            <div style="font-size:0.8rem;color:#64748b;">事業用の土地</div>
        </div>
    </div>
</div>

<h2>🛒 固定資産の取得</h2>
<p>固定資産の取得原価には、<strong>購入代金</strong>に加えて<strong>付随費用</strong>（使えるようにするまでの費用）も含めます。</p>

<div class="info-box formula">
    <div class="info-box-title">📐 取得原価の計算</div>
    <div style="font-size:1.1rem;text-align:center;padding:8px 0;font-weight:700;">
        取得原価 ＝ 購入代金 ＋ 付随費用（仲介手数料・運送費・据付費など）
    </div>
</div>

<h3>仕訳例：備品の購入</h3>
<p>パソコン¥250,000を購入し、設置費用¥10,000とともに現金で支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>備品</td><td>260,000</td><td>現金</td><td>260,000</td></tr>
</table>

<div class="info-box tip">
    <div class="info-box-title">💡 付随費用は取得原価に含める！</div>
    購入代金¥250,000 + 設置費用¥10,000 = 取得原価<strong>¥260,000</strong><br>
    付随費用を別の費用科目で処理しないよう注意！
</div>

<h3>仕訳例：建物の購入</h3>
<p>建物¥5,000,000を購入し、仲介手数料¥200,000とともに小切手を振り出して支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>建物</td><td>5,200,000</td><td>当座預金</td><td>5,200,000</td></tr>
</table>

<h2>📉 減価償却の考え方</h2>
<p>建物や備品などの固定資産は、使用や時間の経過とともに<strong>価値が減少</strong>していきます。この価値の減少を費用として計上する手続きを<strong>減価償却</strong>といいます。</p>

<div class="visual-box">
    <div class="visual-box-title">減価償却のイメージ</div>
    <div style="max-width:500px;margin:0 auto;">
        <div style="display:flex;align-items:end;justify-content:space-around;height:200px;gap:4px;padding:0 10px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                <div style="font-size:0.7rem;font-weight:700;">取得時</div>
                <div style="width:50px;background:linear-gradient(to top,#2563eb,#60a5fa);border-radius:4px 4px 0 0;height:180px;"></div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                <div style="font-size:0.7rem;">1年後</div>
                <div style="width:50px;background:linear-gradient(to top,#2563eb,#60a5fa);border-radius:4px 4px 0 0;height:144px;"></div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                <div style="font-size:0.7rem;">2年後</div>
                <div style="width:50px;background:linear-gradient(to top,#2563eb,#60a5fa);border-radius:4px 4px 0 0;height:108px;"></div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                <div style="font-size:0.7rem;">3年後</div>
                <div style="width:50px;background:linear-gradient(to top,#2563eb,#60a5fa);border-radius:4px 4px 0 0;height:72px;"></div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                <div style="font-size:0.7rem;">4年後</div>
                <div style="width:50px;background:linear-gradient(to top,#2563eb,#60a5fa);border-radius:4px 4px 0 0;height:36px;"></div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                <div style="font-size:0.7rem;font-weight:700;">5年後</div>
                <div style="width:50px;background:linear-gradient(to top,#94a3b8,#cbd5e1);border-radius:4px 4px 0 0;height:4px;"></div>
            </div>
        </div>
        <div style="border-top:2px solid #334155;margin-top:4px;padding-top:4px;text-align:center;font-size:0.8rem;color:#64748b;">
            時間の経過とともに帳簿価額が減少 → 減少分を「減価償却費」として計上
        </div>
    </div>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ 土地は減価償却しない！</div>
    土地は時間が経っても価値が減少しないと考えるため、<strong>減価償却の対象外</strong>です。
</div>

<h2>🔢 定額法の計算</h2>
<p>簿記3級では<strong>定額法</strong>（毎年同じ額を償却する方法）のみが出題されます。</p>

<div class="info-box formula">
    <div class="info-box-title">📐 定額法の計算式</div>
    <div style="font-size:1.1rem;text-align:center;padding:8px 0;font-weight:700;">
        減価償却費 ＝（取得原価 − 残存価額）÷ 耐用年数
    </div>
</div>

<div class="steps">
    <div class="step">
        <div class="step-num">例</div>
        <div class="step-content">
            <strong>取得原価¥500,000、残存価額ゼロ、耐用年数5年の場合</strong>
            減価償却費 ＝（¥500,000 − ¥0）÷ 5年 ＝ <strong>¥100,000／年</strong>
        </div>
    </div>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 最近の試験傾向</div>
    現在の簿記3級では<strong>残存価額はゼロ</strong>が主流です。以前は「取得原価の10%」とされていましたが、現在は基本的にゼロで出題されます。
</div>

<h2>📝 減価償却の仕訳（直接法と間接法）</h2>

<div class="compare-grid">
    <div class="compare-card">
        <h4>直接法</h4>
        <p>固定資産の金額を<strong>直接減らす</strong>方法</p>
        <table>
            <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
            <tr><td>減価償却費</td><td>100,000</td><td>備品</td><td>100,000</td></tr>
        </table>
        <p style="font-size:0.85rem;color:var(--text-secondary);">備品の残高が直接減る → 取得原価がわからなくなる</p>
    </div>
    <div class="compare-card">
        <h4>間接法（主流）</h4>
        <p><strong>減価償却累計額</strong>を使って間接的に減らす方法</p>
        <table>
            <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
            <tr><td>減価償却費</td><td>100,000</td><td>備品減価償却累計額</td><td>100,000</td></tr>
        </table>
        <p style="font-size:0.85rem;color:var(--text-secondary);">備品の取得原価はそのまま残る → 情報量が多い</p>
    </div>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 帳簿価額の計算（間接法の場合）</div>
    <div style="font-size:1rem;text-align:center;padding:4px 0;font-weight:700;">
        帳簿価額 ＝ 取得原価 − 減価償却累計額
    </div>
    例：取得原価¥500,000 − 累計額¥200,000 ＝ 帳簿価額<strong>¥300,000</strong>
</div>

<h2>💸 固定資産の売却</h2>
<p>固定資産を売却したとき、<strong>帳簿価額と売却価額の差額</strong>で売却益・売却損が出ます。</p>

<div class="visual-box">
    <div class="visual-box-title">売却損益のパターン</div>
    <div style="display:flex;justify-content:center;gap:30px;flex-wrap:wrap;">
        <div style="background:#d1fae5;padding:16px 24px;border-radius:10px;text-align:center;">
            <div style="font-weight:700;color:#059669;">売却価額 ＞ 帳簿価額</div>
            <div style="font-size:1.5rem;margin:8px 0;">📈</div>
            <div style="font-weight:700;">固定資産売却益（収益）</div>
        </div>
        <div style="background:#fee2e2;padding:16px 24px;border-radius:10px;text-align:center;">
            <div style="font-weight:700;color:#dc2626;">売却価額 ＜ 帳簿価額</div>
            <div style="font-size:1.5rem;margin:8px 0;">📉</div>
            <div style="font-weight:700;">固定資産売却損（費用）</div>
        </div>
    </div>
</div>

<h3>仕訳例：売却益が出る場合（間接法）</h3>
<p>備品（取得原価¥500,000、減価償却累計額¥300,000）を¥250,000で売却し、代金は現金で受け取った。</p>
<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <strong>帳簿価額を計算</strong>
            ¥500,000 − ¥300,000 ＝ <strong>¥200,000</strong>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <strong>売却損益を計算</strong>
            売却価額¥250,000 − 帳簿価額¥200,000 ＝ <strong>売却益¥50,000</strong>
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <strong>仕訳</strong>
            <table>
                <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
                <tr><td>現金</td><td>250,000</td><td>備品</td><td>500,000</td></tr>
                <tr><td>備品減価償却累計額</td><td>300,000</td><td>固定資産売却益</td><td>50,000</td></tr>
            </table>
        </div>
    </div>
</div>

<h3>仕訳例：売却損が出る場合（間接法）</h3>
<p>車両（取得原価¥800,000、減価償却累計額¥500,000）を¥200,000で売却し、代金は月末に受け取る。</p>
<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <strong>帳簿価額を計算</strong>
            ¥800,000 − ¥500,000 ＝ <strong>¥300,000</strong>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <strong>売却損益を計算</strong>
            売却価額¥200,000 − 帳簿価額¥300,000 ＝ <strong>売却損¥100,000</strong>
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <strong>仕訳</strong>
            <table>
                <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
                <tr><td>未収入金</td><td>200,000</td><td>車両運搬具</td><td>800,000</td></tr>
                <tr><td>車両運搬具減価償却累計額</td><td>500,000</td><td></td><td></td></tr>
                <tr><td>固定資産売却損</td><td>100,000</td><td></td><td></td></tr>
            </table>
        </div>
    </div>
</div>
`,
            quiz: [
                {
                    id: "q403_1",
                    type: "choice",
                    question: "備品¥400,000を購入し、運送費¥20,000とともに現金で支払った。備品の取得原価はいくらですか？",
                    options: ["¥400,000", "¥420,000", "¥380,000", "¥20,000"],
                    answer: 1,
                    explanation: "固定資産の取得原価 = 購入代金 + 付随費用 = ¥400,000 + ¥20,000 = ¥420,000。運送費などの付随費用は取得原価に含めます。"
                },
                {
                    id: "q403_2",
                    type: "fill",
                    question: "取得原価¥600,000、残存価額ゼロ、耐用年数6年の備品の1年あたりの減価償却費はいくらですか？（数字のみ入力）",
                    answer: "100000",
                    explanation: "定額法の減価償却費 =（取得原価 − 残存価額）÷ 耐用年数 =（¥600,000 − ¥0）÷ 6 = ¥100,000"
                },
                {
                    id: "q403_3",
                    type: "choice",
                    question: "減価償却を間接法で記帳する場合、貸方に記入する勘定科目はどれですか？",
                    options: ["減価償却費", "備品", "備品減価償却累計額", "減価償却引当金"],
                    answer: 2,
                    explanation: "間接法では、固定資産の帳簿価額を直接減らさず、「○○減価償却累計額」（評価勘定）を貸方に記入します。直接法では固定資産科目そのものを貸方に記入します。"
                },
                {
                    id: "q403_4",
                    type: "choice",
                    question: "次のうち、減価償却を行わない固定資産はどれですか？",
                    options: ["建物", "備品", "車両運搬具", "土地"],
                    answer: 3,
                    explanation: "土地は時間の経過によって価値が減少しないと考えるため、減価償却の対象外です。建物・備品・車両運搬具は減価償却を行います。"
                },
                {
                    id: "q403_5",
                    type: "choice",
                    question: "備品（取得原価¥300,000、減価償却累計額¥180,000）を¥100,000で現金売却した場合、売却損益はいくらですか？",
                    options: [
                        "売却益¥100,000",
                        "売却損¥20,000",
                        "売却益¥20,000",
                        "売却損¥200,000"
                    ],
                    answer: 1,
                    explanation: "帳簿価額 = ¥300,000 − ¥180,000 = ¥120,000。売却価額¥100,000 − 帳簿価額¥120,000 = △¥20,000（売却損）となります。"
                }
            ]
        },

        // ============================================================
        // Module 404: 税金と給料
        // ============================================================
        {
            id: 404,
            title: "税金と給料",
            duration: "15分",
            content: `
<h2>🏛️ 租税公課</h2>
<p>企業が納める税金のうち、<strong>費用として計上する</strong>ものを「租税公課」といいます。</p>

<div class="visual-box">
    <div class="visual-box-title">租税公課に含まれる税金の例</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;text-align:center;">
        <div style="background:#dbeafe;padding:14px;border-radius:8px;">
            <div style="font-size:1.5rem;">🏢</div>
            <div style="font-weight:700;font-size:0.9rem;">固定資産税</div>
            <div style="font-size:0.8rem;color:#64748b;">土地・建物にかかる税金</div>
        </div>
        <div style="background:#d1fae5;padding:14px;border-radius:8px;">
            <div style="font-size:1.5rem;">📄</div>
            <div style="font-weight:700;font-size:0.9rem;">印紙税</div>
            <div style="font-size:0.8rem;color:#64748b;">収入印紙を貼って納める</div>
        </div>
        <div style="background:#fef3c7;padding:14px;border-radius:8px;">
            <div style="font-size:1.5rem;">🚗</div>
            <div style="font-weight:700;font-size:0.9rem;">自動車税</div>
            <div style="font-size:0.8rem;color:#64748b;">事業用車両にかかる税金</div>
        </div>
    </div>
</div>

<h3>仕訳例：租税公課</h3>
<p>固定資産税¥120,000を現金で納付した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>租税公課</td><td>120,000</td><td>現金</td><td>120,000</td></tr>
</table>
<p>収入印紙¥4,000を購入し、直ちに使用した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>租税公課</td><td>4,000</td><td>現金</td><td>4,000</td></tr>
</table>

<div class="info-box warning">
    <div class="info-box-title">⚠️ 法人税等は租税公課ではない！</div>
    法人税・住民税・事業税（法人税等）は「租税公課」ではなく、<strong>「法人税、住民税及び事業税」</strong>として別の科目で処理します。簿記3級では出題範囲外ですが、混同しないよう注意！
</div>

<h2>💴 消費税の処理（税抜方式）</h2>
<p>簿記3級では<strong>税抜方式</strong>で消費税を処理します。商品の本体価格と消費税を分けて記帳します。</p>

<div class="visual-box">
    <div class="visual-box-title">消費税の流れ（税抜方式）</div>
    <div style="display:flex;justify-content:center;align-items:center;gap:20px;flex-wrap:wrap;">
        <div style="background:#dbeafe;padding:16px;border-radius:10px;text-align:center;min-width:160px;">
            <div style="font-weight:700;color:#2563eb;">仕入時</div>
            <div style="font-size:0.85rem;margin-top:6px;">消費税を払う</div>
            <div style="font-weight:700;margin-top:4px;">仮払消費税</div>
            <div style="font-size:0.8rem;color:#64748b;">（資産）</div>
        </div>
        <div style="font-size:1.5rem;">→</div>
        <div style="background:#fef3c7;padding:16px;border-radius:10px;text-align:center;min-width:160px;">
            <div style="font-weight:700;color:#d97706;">売上時</div>
            <div style="font-size:0.85rem;margin-top:6px;">消費税を預かる</div>
            <div style="font-weight:700;margin-top:4px;">仮受消費税</div>
            <div style="font-size:0.8rem;color:#64748b;">（負債）</div>
        </div>
        <div style="font-size:1.5rem;">→</div>
        <div style="background:#fee2e2;padding:16px;border-radius:10px;text-align:center;min-width:160px;">
            <div style="font-weight:700;color:#dc2626;">決算時</div>
            <div style="font-size:0.85rem;margin-top:6px;">差額を計算</div>
            <div style="font-weight:700;margin-top:4px;">未払消費税</div>
            <div style="font-size:0.8rem;color:#64748b;">（負債）</div>
        </div>
    </div>
</div>

<h3>① 仕入時の仕訳</h3>
<p>商品¥100,000（税抜）を仕入れ、消費税¥10,000とともに現金で支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>仕入</td><td>100,000</td><td>現金</td><td>110,000</td></tr>
    <tr><td>仮払消費税</td><td>10,000</td><td></td><td></td></tr>
</table>

<h3>② 売上時の仕訳</h3>
<p>商品¥200,000（税抜）を売り上げ、消費税¥20,000とともに現金で受け取った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>220,000</td><td>売上</td><td>200,000</td></tr>
    <tr><td></td><td></td><td>仮受消費税</td><td>20,000</td></tr>
</table>

<h3>③ 決算時の仕訳</h3>
<p>決算にあたり、仮受消費税¥20,000と仮払消費税¥10,000を相殺し、差額を未払消費税とする。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>仮受消費税</td><td>20,000</td><td>仮払消費税</td><td>10,000</td></tr>
    <tr><td></td><td></td><td>未払消費税</td><td>10,000</td></tr>
</table>

<div class="info-box formula">
    <div class="info-box-title">📐 未払消費税の計算</div>
    <div style="font-size:1.1rem;text-align:center;padding:8px 0;font-weight:700;">
        未払消費税 ＝ 仮受消費税 − 仮払消費税
    </div>
</div>

<h2>👨‍💼 給料の処理</h2>
<p>従業員に給料を支払う際、会社は<strong>源泉徴収</strong>（税金や社会保険料を差し引く）を行います。</p>

<div class="visual-box">
    <div class="visual-box-title">給料支払いの仕組み</div>
    <div style="max-width:440px;margin:0 auto;text-align:left;">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#dbeafe;border-radius:8px 8px 0 0;font-weight:700;">
            <span>給料（総支給額）</span><span>¥300,000</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 16px;background:#fee2e2;font-size:0.9rem;">
            <span>　− 所得税（源泉徴収）</span><span>△¥15,000</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 16px;background:#fee2e2;font-size:0.9rem;">
            <span>　− 社会保険料（従業員負担分）</span><span>△¥30,000</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#d1fae5;border-radius:0 0 8px 8px;font-weight:700;">
            <span>差引手取額（振込額）</span><span>¥255,000</span>
        </div>
    </div>
</div>

<h3>仕訳例：給料の支払い</h3>
<p>給料¥300,000から所得税¥15,000と社会保険料¥30,000を差し引き、残額を普通預金から振り込んだ。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>給料</td><td>300,000</td><td>所得税預り金</td><td>15,000</td></tr>
    <tr><td></td><td></td><td>社会保険料預り金</td><td>30,000</td></tr>
    <tr><td></td><td></td><td>普通預金</td><td>255,000</td></tr>
</table>

<div class="info-box tip">
    <div class="info-box-title">💡 ポイント</div>
    <strong>給料（費用）</strong>は<strong>総支給額</strong>（手取りではなく総額）で計上します。<br>
    差し引いた税金や保険料は<strong>預り金（負債）</strong>として処理します。<br>
    （問題文によっては「預り金」とまとめて表記される場合もあります。）
</div>

<h3>仕訳例：預り金の納付</h3>
<p>源泉所得税の預り金¥15,000を税務署に現金で納付した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>所得税預り金</td><td>15,000</td><td>現金</td><td>15,000</td></tr>
</table>

<h2>🏥 法定福利費</h2>
<p>社会保険料の<strong>会社負担分</strong>は「法定福利費」（費用）で処理します。</p>

<h3>仕訳例</h3>
<p>社会保険料の会社負担分¥30,000と従業員負担分の預り金¥30,000を合わせて、現金で納付した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>法定福利費</td><td>30,000</td><td>現金</td><td>60,000</td></tr>
    <tr><td>社会保険料預り金</td><td>30,000</td><td></td><td></td></tr>
</table>

<div class="info-box success">
    <div class="info-box-title">✅ まとめ</div>
    <table>
        <tr><th>項目</th><th>勘定科目</th><th>分類</th></tr>
        <tr><td>固定資産税・印紙税・自動車税</td><td>租税公課</td><td>費用</td></tr>
        <tr><td>仕入時の消費税</td><td>仮払消費税</td><td>資産</td></tr>
        <tr><td>売上時の消費税</td><td>仮受消費税</td><td>負債</td></tr>
        <tr><td>決算時の消費税差額</td><td>未払消費税</td><td>負債</td></tr>
        <tr><td>従業員への給料</td><td>給料</td><td>費用</td></tr>
        <tr><td>差し引いた税金・保険料</td><td>預り金</td><td>負債</td></tr>
        <tr><td>社会保険料の会社負担分</td><td>法定福利費</td><td>費用</td></tr>
    </table>
</div>
`,
            quiz: [
                {
                    id: "q404_1",
                    type: "choice",
                    question: "固定資産税¥80,000を現金で納付した場合の借方科目はどれですか？",
                    options: ["固定資産税", "租税公課", "未払金", "支払手数料"],
                    answer: 1,
                    explanation: "固定資産税・印紙税・自動車税などの税金は「租税公課」（費用）で処理します。「固定資産税」という勘定科目は使いません。"
                },
                {
                    id: "q404_2",
                    type: "choice",
                    question: "商品¥50,000（税抜）を仕入れ、消費税¥5,000とともに現金で支払った場合の仕訳はどれですか？",
                    options: [
                        "（借方）仕入 55,000 ／（貸方）現金 55,000",
                        "（借方）仕入 50,000・仮払消費税 5,000 ／（貸方）現金 55,000",
                        "（借方）仕入 50,000・仮受消費税 5,000 ／（貸方）現金 55,000",
                        "（借方）仕入 50,000 ／（貸方）現金 50,000"
                    ],
                    answer: 1,
                    explanation: "税抜方式では、仕入（本体価格）と仮払消費税（支払った消費税）を分けて記帳します。仮受消費税は売上時に使う科目です。"
                },
                {
                    id: "q404_3",
                    type: "fill",
                    question: "決算時、仮受消費税¥50,000と仮払消費税¥30,000を相殺した場合の未払消費税はいくらですか？（数字のみ入力）",
                    answer: "20000",
                    explanation: "未払消費税 = 仮受消費税 − 仮払消費税 = ¥50,000 − ¥30,000 = ¥20,000。この金額を後日税務署に納付します。"
                },
                {
                    id: "q404_4",
                    type: "choice",
                    question: "給料¥250,000から所得税¥10,000を差し引いて普通預金から振り込んだ。給料（費用）の金額はいくらで計上しますか？",
                    options: ["¥240,000", "¥250,000", "¥260,000", "¥10,000"],
                    answer: 1,
                    explanation: "給料（費用）は差し引く前の総支給額¥250,000で計上します。差し引いた所得税は預り金（負債）として処理します。"
                },
                {
                    id: "q404_5",
                    type: "choice",
                    question: "社会保険料について、会社負担分を処理する勘定科目はどれですか？",
                    options: ["給料", "預り金", "法定福利費", "租税公課"],
                    answer: 2,
                    explanation: "社会保険料の会社負担分は「法定福利費」（費用）で処理します。従業員負担分は「預り金」（負債）で処理します。"
                }
            ]
        },

        // ============================================================
        // Module 405: その他の取引
        // ============================================================
        {
            id: 405,
            title: "その他の取引",
            duration: "15分",
            content: `
<h2>📦 貯蔵品</h2>
<p>切手や収入印紙を購入した時、通常は<strong>通信費</strong>や<strong>租税公課</strong>として費用処理します。しかし、決算時に<strong>未使用分が残っている</strong>場合は「貯蔵品」（資産）に振り替えます。</p>

<div class="visual-box">
    <div class="visual-box-title">貯蔵品の流れ</div>
    <div style="display:flex;justify-content:center;align-items:center;gap:16px;flex-wrap:wrap;">
        <div style="background:#dbeafe;padding:14px 20px;border-radius:10px;text-align:center;">
            <div style="font-size:1.3rem;">📮</div>
            <div style="font-weight:700;font-size:0.9rem;">購入時</div>
            <div style="font-size:0.8rem;">通信費（費用）で処理</div>
        </div>
        <div style="font-size:1.2rem;">→</div>
        <div style="background:#fef3c7;padding:14px 20px;border-radius:10px;text-align:center;">
            <div style="font-size:1.3rem;">📋</div>
            <div style="font-weight:700;font-size:0.9rem;">決算時</div>
            <div style="font-size:0.8rem;">未使用分を確認</div>
        </div>
        <div style="font-size:1.2rem;">→</div>
        <div style="background:#d1fae5;padding:14px 20px;border-radius:10px;text-align:center;">
            <div style="font-size:1.3rem;">📦</div>
            <div style="font-weight:700;font-size:0.9rem;">振替</div>
            <div style="font-size:0.8rem;">貯蔵品（資産）へ</div>
        </div>
    </div>
</div>

<h3>仕訳例：切手の購入と決算整理</h3>
<p>郵便切手¥10,000を現金で購入した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>通信費</td><td>10,000</td><td>現金</td><td>10,000</td></tr>
</table>
<p>決算時、切手の未使用分が¥3,000あった。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>貯蔵品</td><td>3,000</td><td>通信費</td><td>3,000</td></tr>
</table>

<h3>仕訳例：収入印紙の場合</h3>
<p>収入印紙¥6,000を現金で購入した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>租税公課</td><td>6,000</td><td>現金</td><td>6,000</td></tr>
</table>
<p>決算時、収入印紙の未使用分が¥2,000あった。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>貯蔵品</td><td>2,000</td><td>租税公課</td><td>2,000</td></tr>
</table>

<div class="info-box tip">
    <div class="info-box-title">💡 ポイント</div>
    切手 → <strong>通信費</strong>から貯蔵品へ振替<br>
    収入印紙 → <strong>租税公課</strong>から貯蔵品へ振替<br>
    翌期首には<strong>再振替仕訳</strong>（逆仕訳）を行います。
</div>

<h2>🔑 差入保証金</h2>
<p>店舗や事務所を借りる際に支払う<strong>敷金・保証金</strong>は「差入保証金」（資産）として処理します。退去時に返還されるため、費用ではありません。</p>

<h3>仕訳例</h3>
<p>事務所を賃借し、敷金¥200,000を現金で支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>差入保証金</td><td>200,000</td><td>現金</td><td>200,000</td></tr>
</table>
<p>退去にあたり、敷金¥200,000が普通預金に返還された。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>普通預金</td><td>200,000</td><td>差入保証金</td><td>200,000</td></tr>
</table>

<div class="info-box warning">
    <div class="info-box-title">⚠️ 支払家賃との違い</div>
    <strong>支払家賃</strong>（費用）→ 毎月の家賃（返ってこない）<br>
    <strong>差入保証金</strong>（資産）→ 敷金・保証金（将来返還される）
</div>

<h2>💳 立替金・預り金</h2>

<div class="compare-grid">
    <div class="compare-card">
        <h4>立替金（資産）</h4>
        <p>他者が負担すべきお金を<strong>一時的に立て替えて支払った</strong>場合</p>
        <p style="font-size:0.85rem;color:var(--text-secondary);">将来、立て替えた分を返してもらう権利</p>
    </div>
    <div class="compare-card">
        <h4>預り金（負債）</h4>
        <p>他者のお金を<strong>一時的に預かっている</strong>場合</p>
        <p style="font-size:0.85rem;color:var(--text-secondary);">将来、預かった分を納付・返還する義務</p>
    </div>
</div>

<h3>立替金の仕訳例</h3>
<p>従業員の個人的な保険料¥5,000を現金で立て替えて支払った。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>立替金</td><td>5,000</td><td>現金</td><td>5,000</td></tr>
</table>
<p>後日、立替金¥5,000を従業員から現金で回収した。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>現金</td><td>5,000</td><td>立替金</td><td>5,000</td></tr>
</table>

<h2>✏️ 訂正仕訳の実践</h2>
<p>仕訳を間違えた場合、<strong>訂正仕訳</strong>を行って正しい状態にします。</p>

<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <strong>誤った仕訳を確認する</strong>
            通信費¥5,000を消耗品費¥5,000と誤って記帳していた。<br>
            <span style="color:#dc2626;">【誤】消耗品費 5,000 ／ 現金 5,000</span>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <strong>誤った仕訳の逆仕訳を書く</strong>
            <table>
                <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
                <tr><td>現金</td><td>5,000</td><td>消耗品費</td><td>5,000</td></tr>
            </table>
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <strong>正しい仕訳を書く</strong>
            <table>
                <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
                <tr><td>通信費</td><td>5,000</td><td>現金</td><td>5,000</td></tr>
            </table>
        </div>
    </div>
    <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
            <strong>②と③を合算して訂正仕訳を作る</strong>
            現金が借方・貸方に¥5,000ずつあるので相殺！
            <table>
                <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
                <tr><td>通信費</td><td>5,000</td><td>消耗品費</td><td>5,000</td></tr>
            </table>
        </div>
    </div>
</div>

<div class="info-box success">
    <div class="info-box-title">✅ 訂正仕訳のコツ</div>
    ① 誤った仕訳の<strong>逆仕訳</strong>を作る<br>
    ② 正しい仕訳を作る<br>
    ③ ①と②を<strong>合算</strong>して、同じ科目を<strong>相殺</strong>する<br>
    → 残ったものが訂正仕訳！
</div>

<h2>🏢 株式の発行</h2>
<p>株式会社が株式を発行して出資を受けた場合、<strong>資本金</strong>（純資産）が増加します。</p>

<h3>仕訳例</h3>
<p>会社設立にあたり、株式を発行し、払込金¥5,000,000が当座預金に入金された。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>当座預金</td><td>5,000,000</td><td>資本金</td><td>5,000,000</td></tr>
</table>

<p>増資のため株式を追加発行し、払込金¥2,000,000が普通預金に入金された。</p>
<table>
    <tr><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
    <tr><td>普通預金</td><td>2,000,000</td><td>資本金</td><td>2,000,000</td></tr>
</table>

<div class="info-box tip">
    <div class="info-box-title">💡 ポイント</div>
    株式の発行 → <strong>資本金（純資産）の増加</strong><br>
    簿記3級では、払込金の全額を資本金とする処理が基本です。
</div>

<h2>🎯 このモジュールのまとめ</h2>
<table>
    <tr><th>取引</th><th>勘定科目</th><th>分類</th></tr>
    <tr><td>未使用の切手・印紙</td><td>貯蔵品</td><td>資産</td></tr>
    <tr><td>敷金・保証金の支払い</td><td>差入保証金</td><td>資産</td></tr>
    <tr><td>他者の費用を立て替えた</td><td>立替金</td><td>資産</td></tr>
    <tr><td>他者のお金を一時的に預かった</td><td>預り金</td><td>負債</td></tr>
    <tr><td>株式発行による出資受入</td><td>資本金</td><td>純資産</td></tr>
</table>
`,
            quiz: [
                {
                    id: "q405_1",
                    type: "choice",
                    question: "決算時に切手の未使用分¥4,000を振り替える仕訳はどれですか？",
                    options: [
                        "（借方）通信費 4,000 ／（貸方）貯蔵品 4,000",
                        "（借方）貯蔵品 4,000 ／（貸方）通信費 4,000",
                        "（借方）貯蔵品 4,000 ／（貸方）現金 4,000",
                        "（借方）消耗品費 4,000 ／（貸方）通信費 4,000"
                    ],
                    answer: 1,
                    explanation: "切手の未使用分は、費用（通信費）から資産（貯蔵品）に振り替えます。貯蔵品（借方）が増加し、通信費（貸方）が減少します。"
                },
                {
                    id: "q405_2",
                    type: "fill",
                    question: "事務所の賃借時に支払う敷金を処理する勘定科目は何ですか？（漢字で入力）",
                    answer: "差入保証金",
                    explanation: "敷金・保証金は将来返還されるため、費用ではなく「差入保証金」（資産）として処理します。毎月の家賃は「支払家賃」（費用）です。"
                },
                {
                    id: "q405_3",
                    type: "choice",
                    question: "通信費¥8,000を旅費交通費¥8,000と誤って記帳した場合の訂正仕訳はどれですか？",
                    options: [
                        "（借方）旅費交通費 8,000 ／（貸方）通信費 8,000",
                        "（借方）通信費 8,000 ／（貸方）現金 8,000",
                        "（借方）通信費 8,000 ／（貸方）旅費交通費 8,000",
                        "（借方）現金 8,000 ／（貸方）旅費交通費 8,000"
                    ],
                    answer: 2,
                    explanation: "誤った仕訳の逆仕訳（旅費交通費を取り消す）と正しい仕訳（通信費を計上）を合算すると、（借方）通信費 8,000 ／（貸方）旅費交通費 8,000 となります。"
                },
                {
                    id: "q405_4",
                    type: "choice",
                    question: "株式を発行し、払込金¥3,000,000が当座預金に入金された場合の貸方科目はどれですか？",
                    options: ["当座預金", "借入金", "資本金", "利益剰余金"],
                    answer: 2,
                    explanation: "株式発行による払込金は「資本金」（純資産）の増加として、貸方に記入します。借入金（負債）とは全く異なります。"
                },
                {
                    id: "q405_5",
                    type: "choice",
                    question: "従業員が負担すべき保険料¥7,000を会社が現金で立て替えた場合の借方科目はどれですか？",
                    options: ["保険料", "預り金", "立替金", "仮払金"],
                    answer: 2,
                    explanation: "他者が負担すべき支出を一時的に立て替えた場合は「立替金」（資産）を使います。保険料（費用）として計上するのは会社負担分のみです。仮払金は金額・内容が未確定の場合に使います。"
                }
            ]
        }
    ]
};
