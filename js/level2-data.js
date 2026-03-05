/* ============================================
   簿記3級アカデミー - Level 2: 仕訳と転記
   ============================================ */

const LEVEL2_DATA = {
    id: 2,
    title: "仕訳と転記",
    icon: "✏️",
    description: "仕訳のルールと勘定口座への転記をマスター",
    modules: [

        /* ==========================================
           Module 201: 仕訳のルール詳解
           ========================================== */
        {
            id: 201,
            title: "仕訳のルール詳解",
            duration: "20分",
            content: `
<h2>仕訳のルール詳解</h2>
<p>簿記の中心は<strong>仕訳（しわけ）</strong>です。すべての取引を「借方（左）」と「貸方（右）」に分けて記録するのが仕訳の基本。ここでは、5つの要素の増減と借方・貸方の対応関係を完全にマスターしましょう！</p>

<div class="info-box tip">
<div class="info-box-title">最重要ポイント</div>
仕訳のルールは簿記3級の全範囲の土台です。この対応表を完璧に覚えることが合格への最短ルートです！
</div>

<h3>5要素の増減と借方・貸方の対応表</h3>
<p>簿記の5要素（資産・負債・純資産・収益・費用）には、それぞれ<strong>ホームポジション</strong>があります。増加するときはホームポジション側、減少するときは反対側に記入します。</p>

<div class="visual-box">
<div class="visual-box-title">仕訳の超重要ルール 対応表</div>
<table style="width:100%;border-collapse:collapse;margin:0;">
<tr>
<th style="background:#2563eb;color:white;padding:12px;text-align:center;width:50%;border:2px solid #1d4ed8;">借方（左側）</th>
<th style="background:#dc2626;color:white;padding:12px;text-align:center;width:50%;border:2px solid #b91c1c;">貸方（右側）</th>
</tr>
<tr>
<td style="padding:14px;text-align:center;background:#dbeafe;border:2px solid #93c5fd;font-weight:700;font-size:1.1rem;">資産の増加 (+)</td>
<td style="padding:14px;text-align:center;background:#fee2e2;border:2px solid #fca5a5;font-weight:700;font-size:1.1rem;">資産の減少 (-)</td>
</tr>
<tr>
<td style="padding:14px;text-align:center;background:#fee2e2;border:2px solid #fca5a5;font-weight:700;font-size:1.1rem;">負債の減少 (-)</td>
<td style="padding:14px;text-align:center;background:#dbeafe;border:2px solid #93c5fd;font-weight:700;font-size:1.1rem;">負債の増加 (+)</td>
</tr>
<tr>
<td style="padding:14px;text-align:center;background:#fee2e2;border:2px solid #fca5a5;font-weight:700;font-size:1.1rem;">純資産の減少 (-)</td>
<td style="padding:14px;text-align:center;background:#dbeafe;border:2px solid #93c5fd;font-weight:700;font-size:1.1rem;">純資産の増加 (+)</td>
</tr>
<tr>
<td style="padding:14px;text-align:center;background:#dbeafe;border:2px solid #93c5fd;font-weight:700;font-size:1.1rem;">費用の発生</td>
<td style="padding:14px;text-align:center;background:#dbeafe;border:2px solid #93c5fd;font-weight:700;font-size:1.1rem;">収益の発生</td>
</tr>
</table>
</div>

<h3>覚え方のコツ：ホームポジションで考える</h3>
<p>貸借対照表と損益計算書を思い出してください。</p>

<div class="visual-box">
<div class="visual-box-title">貸借対照表のホームポジション</div>
<table style="width:100%;border-collapse:collapse;">
<tr>
<td style="width:50%;padding:20px;text-align:center;background:#dbeafe;border:3px solid #2563eb;font-weight:700;font-size:1.1rem;">
【借方（左）】<br><br>
<span style="font-size:1.3rem;">資産</span><br>
<span style="font-size:0.85rem;color:#64748b;">現金、売掛金、建物など</span>
</td>
<td style="width:50%;padding:20px;text-align:center;background:#fee2e2;border:3px solid #dc2626;font-weight:700;font-size:1.1rem;">
【貸方（右）】<br><br>
<span style="font-size:1.3rem;">負債</span><br>
<span style="font-size:0.85rem;color:#64748b;">買掛金、借入金など</span><br><br>
<span style="font-size:1.3rem;">純資産</span><br>
<span style="font-size:0.85rem;color:#64748b;">資本金など</span>
</td>
</tr>
</table>
</div>

<div class="visual-box">
<div class="visual-box-title">損益計算書のホームポジション</div>
<table style="width:100%;border-collapse:collapse;">
<tr>
<td style="width:50%;padding:20px;text-align:center;background:#fef3c7;border:3px solid #f59e0b;font-weight:700;font-size:1.1rem;">
【借方（左）】<br><br>
<span style="font-size:1.3rem;">費用</span><br>
<span style="font-size:0.85rem;color:#64748b;">仕入、給料、家賃など</span>
</td>
<td style="width:50%;padding:20px;text-align:center;background:#d1fae5;border:3px solid #10b981;font-weight:700;font-size:1.1rem;">
【貸方（右）】<br><br>
<span style="font-size:1.3rem;">収益</span><br>
<span style="font-size:0.85rem;color:#64748b;">売上、受取利息など</span>
</td>
</tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">暗記のポイント</div>
<strong>「くまのしっぽ（く・ま・の・し・っぽ）」</strong>で覚えよう！<br>
借方のホームポジション：<strong>く</strong>（＝費用「く」ろう）→ 費用、<strong>し</strong>（＝資産）→ 資産<br>
貸方のホームポジション：<strong>ま</strong>（＝負債「ま」け）→ 負債、<strong>の</strong>（＝純資産）→ 純資産、<strong>っぽ</strong>（＝収益）→ 収益<br>
…覚え方は自分なりにアレンジしてOK！大事なのは<strong>ホームポジション</strong>を確実に覚えることです。
</div>

<h3>仕訳の手順（ステップバイステップ）</h3>
<p>実際の取引を仕訳するときは、次の3ステップで考えましょう。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>取引の内容を読み取る</strong>
何が増えた？何が減った？どの勘定科目に該当する？を考えます。<br>
例：「現金100円で商品を仕入れた」→ 仕入（費用）が発生、現金（資産）が減少
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>借方・貸方を決める</strong>
ルール表に従って、各勘定科目を借方か貸方に配置します。<br>
例：費用の発生 → 借方、資産の減少 → 貸方
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>金額を記入する</strong>
借方合計 ＝ 貸方合計 になることを確認して、仕訳を完成させます。<br>
例：（借方）仕入 100 ／（貸方）現金 100
</div>
</div>
</div>

<h3>具体例で練習</h3>
<p><strong>取引：「銀行から現金500,000円を借り入れた」</strong></p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>取引を読み取る</strong>
現金（資産）が500,000円増えた。借入金（負債）が500,000円増えた。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>借方・貸方を決める</strong>
資産の増加 → 借方、負債の増加 → 貸方
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>仕訳を完成</strong>
</div>
</div>
</div>

<div class="visual-box">
<div class="visual-box-title">仕訳の結果</div>
<table style="width:100%;border-collapse:collapse;">
<tr>
<th style="background:#2563eb;color:white;padding:10px;text-align:center;border:1px solid #1d4ed8;">借方（左）</th>
<th style="background:#2563eb;color:white;padding:10px;text-align:center;border:1px solid #1d4ed8;">金額</th>
<th style="background:#dc2626;color:white;padding:10px;text-align:center;border:1px solid #b91c1c;">貸方（右）</th>
<th style="background:#dc2626;color:white;padding:10px;text-align:center;border:1px solid #b91c1c;">金額</th>
</tr>
<tr>
<td style="padding:12px;text-align:center;border:1px solid var(--border);font-weight:700;">現金</td>
<td style="padding:12px;text-align:center;border:1px solid var(--border);">500,000</td>
<td style="padding:12px;text-align:center;border:1px solid var(--border);font-weight:700;">借入金</td>
<td style="padding:12px;text-align:center;border:1px solid var(--border);">500,000</td>
</tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">試験でよくある間違い</div>
「借入金」は負債です。「お金を借りた → 借方？」と勘違いしがちですが、借入金は<strong>負債の増加 → 貸方</strong>です！名前に惑わされないように注意しましょう。
</div>
            `,
            quiz: [
                {
                    id: "q201_1",
                    type: "choice",
                    question: "資産が増加した場合、仕訳ではどちらに記入しますか？",
                    options: ["借方（左側）", "貸方（右側）", "どちらでもよい", "記入しない"],
                    answer: 0,
                    explanation: "資産のホームポジションは借方（左側）です。資産が増加するとき、借方に記入します。例えば現金が増えたら「（借方）現金 ○○」と記入します。"
                },
                {
                    id: "q201_2",
                    type: "choice",
                    question: "負債が増加した場合、仕訳ではどちらに記入しますか？",
                    options: ["借方（左側）", "貸方（右側）", "借方と貸方の両方", "損益計算書に記入"],
                    answer: 1,
                    explanation: "負債のホームポジションは貸方（右側）です。負債が増加するときは貸方に記入します。例えば買掛金が増えたら「（貸方）買掛金 ○○」です。"
                },
                {
                    id: "q201_3",
                    type: "fill",
                    question: "費用が発生した場合、仕訳では「＿＿方」に記入します。（漢字1文字で）",
                    answer: "借",
                    explanation: "費用のホームポジションは借方（左側）です。費用が発生したときは借方に記入します。例：（借方）給料 100,000 ／（貸方）現金 100,000"
                },
                {
                    id: "q201_4",
                    type: "choice",
                    question: "「銀行から現金300,000円を借り入れた」の仕訳で、貸方に来る勘定科目はどれですか？",
                    options: ["現金", "借入金", "貸付金", "当座預金"],
                    answer: 1,
                    explanation: "借入金は負債です。銀行からお金を借りると負債が増加するので、借入金は貸方に記入します。現金（資産の増加）は借方に来ます。（借方）現金 300,000 ／（貸方）借入金 300,000"
                },
                {
                    id: "q201_5",
                    type: "choice",
                    question: "収益が発生した場合の正しい記入先はどれですか？",
                    options: ["借方に記入", "貸方に記入", "借方と貸方の両方に記入", "仕訳帳には記入しない"],
                    answer: 1,
                    explanation: "収益のホームポジションは貸方（右側）です。収益が発生したときは貸方に記入します。例えば売上が発生したら「（貸方）売上 ○○」となります。"
                }
            ]
        },

        /* ==========================================
           Module 202: 仕訳の実践練習
           ========================================== */
        {
            id: 202,
            title: "仕訳の実践練習",
            duration: "25分",
            content: `
<h2>仕訳の実践練習</h2>
<p>ここでは、簿記3級で頻出の<strong>基本仕訳パターン10選</strong>を実際に仕訳形式で確認していきます。前回学んだルールを使って、一つずつ確実に身につけましょう！</p>

<div class="info-box tip">
<div class="info-box-title">学習のコツ</div>
まずは自分で「借方は何？貸方は何？」を考えてから、答えを確認しましょう。考える→確認のサイクルが記憶定着のカギです！
</div>

<h3>パターン1：現金で商品を仕入れた</h3>
<p><strong>取引：</strong>商品200,000円を現金で仕入れた。</p>
<div class="compare-grid">
<div class="compare-card">
<h4>分析</h4>
<ul>
<li><strong>仕入（費用）</strong>が発生 → 借方</li>
<li><strong>現金（資産）</strong>が減少 → 貸方</li>
</ul>
</div>
<div class="compare-card">
<h4>仕訳</h4>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#2563eb;color:white;padding:8px;border:1px solid #1d4ed8;text-align:center;">借方</th><th style="background:#dc2626;color:white;padding:8px;border:1px solid #b91c1c;text-align:center;">貸方</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border);text-align:center;">仕入 200,000</td><td style="padding:10px;border:1px solid var(--border);text-align:center;">現金 200,000</td></tr>
</table>
</div>
</div>

<h3>パターン2：商品を現金で売り上げた</h3>
<p><strong>取引：</strong>商品300,000円を現金で売り上げた。</p>
<div class="compare-grid">
<div class="compare-card">
<h4>分析</h4>
<ul>
<li><strong>現金（資産）</strong>が増加 → 借方</li>
<li><strong>売上（収益）</strong>が発生 → 貸方</li>
</ul>
</div>
<div class="compare-card">
<h4>仕訳</h4>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#2563eb;color:white;padding:8px;border:1px solid #1d4ed8;text-align:center;">借方</th><th style="background:#dc2626;color:white;padding:8px;border:1px solid #b91c1c;text-align:center;">貸方</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border);text-align:center;">現金 300,000</td><td style="padding:10px;border:1px solid var(--border);text-align:center;">売上 300,000</td></tr>
</table>
</div>
</div>

<h3>パターン3：掛けで商品を仕入れた</h3>
<p><strong>取引：</strong>商品150,000円を掛けで仕入れた。</p>
<div class="compare-grid">
<div class="compare-card">
<h4>分析</h4>
<ul>
<li><strong>仕入（費用）</strong>が発生 → 借方</li>
<li><strong>買掛金（負債）</strong>が増加 → 貸方</li>
</ul>
</div>
<div class="compare-card">
<h4>仕訳</h4>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#2563eb;color:white;padding:8px;border:1px solid #1d4ed8;text-align:center;">借方</th><th style="background:#dc2626;color:white;padding:8px;border:1px solid #b91c1c;text-align:center;">貸方</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border);text-align:center;">仕入 150,000</td><td style="padding:10px;border:1px solid var(--border);text-align:center;">買掛金 150,000</td></tr>
</table>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">「掛け」とは？</div>
「掛け」とは代金を後払いにすること。仕入れの掛けは「買掛金」（負債）、売上の掛けは「売掛金」（資産）になります。
</div>

<h3>パターン4：掛けで商品を売り上げた</h3>
<p><strong>取引：</strong>商品250,000円を掛けで売り上げた。</p>
<div class="compare-grid">
<div class="compare-card">
<h4>分析</h4>
<ul>
<li><strong>売掛金（資産）</strong>が増加 → 借方</li>
<li><strong>売上（収益）</strong>が発生 → 貸方</li>
</ul>
</div>
<div class="compare-card">
<h4>仕訳</h4>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#2563eb;color:white;padding:8px;border:1px solid #1d4ed8;text-align:center;">借方</th><th style="background:#dc2626;color:white;padding:8px;border:1px solid #b91c1c;text-align:center;">貸方</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border);text-align:center;">売掛金 250,000</td><td style="padding:10px;border:1px solid var(--border);text-align:center;">売上 250,000</td></tr>
</table>
</div>
</div>

<h3>パターン5：銀行から借入れた</h3>
<p><strong>取引：</strong>銀行から現金1,000,000円を借り入れた。</p>
<div class="compare-grid">
<div class="compare-card">
<h4>分析</h4>
<ul>
<li><strong>現金（資産）</strong>が増加 → 借方</li>
<li><strong>借入金（負債）</strong>が増加 → 貸方</li>
</ul>
</div>
<div class="compare-card">
<h4>仕訳</h4>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#2563eb;color:white;padding:8px;border:1px solid #1d4ed8;text-align:center;">借方</th><th style="background:#dc2626;color:white;padding:8px;border:1px solid #b91c1c;text-align:center;">貸方</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border);text-align:center;">現金 1,000,000</td><td style="padding:10px;border:1px solid var(--border);text-align:center;">借入金 1,000,000</td></tr>
</table>
</div>
</div>

<h3>パターン6：借入金を返済した</h3>
<p><strong>取引：</strong>借入金500,000円を現金で返済した。</p>
<div class="compare-grid">
<div class="compare-card">
<h4>分析</h4>
<ul>
<li><strong>借入金（負債）</strong>が減少 → 借方</li>
<li><strong>現金（資産）</strong>が減少 → 貸方</li>
</ul>
</div>
<div class="compare-card">
<h4>仕訳</h4>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#2563eb;color:white;padding:8px;border:1px solid #1d4ed8;text-align:center;">借方</th><th style="background:#dc2626;color:white;padding:8px;border:1px solid #b91c1c;text-align:center;">貸方</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border);text-align:center;">借入金 500,000</td><td style="padding:10px;border:1px solid var(--border);text-align:center;">現金 500,000</td></tr>
</table>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">注意：借入金の返済</div>
借入金を返済すると<strong>負債が減少</strong>します。負債の減少は<strong>借方</strong>です。「借入金が貸方にあったものを消す＝借方に書く」とイメージしましょう。
</div>

<h3>パターン7：給料を現金で支払った</h3>
<p><strong>取引：</strong>従業員の給料350,000円を現金で支払った。</p>
<div class="compare-grid">
<div class="compare-card">
<h4>分析</h4>
<ul>
<li><strong>給料（費用）</strong>が発生 → 借方</li>
<li><strong>現金（資産）</strong>が減少 → 貸方</li>
</ul>
</div>
<div class="compare-card">
<h4>仕訳</h4>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#2563eb;color:white;padding:8px;border:1px solid #1d4ed8;text-align:center;">借方</th><th style="background:#dc2626;color:white;padding:8px;border:1px solid #b91c1c;text-align:center;">貸方</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border);text-align:center;">給料 350,000</td><td style="padding:10px;border:1px solid var(--border);text-align:center;">現金 350,000</td></tr>
</table>
</div>
</div>

<h3>パターン8：備品を現金で購入した</h3>
<p><strong>取引：</strong>パソコン（備品）180,000円を現金で購入した。</p>
<div class="compare-grid">
<div class="compare-card">
<h4>分析</h4>
<ul>
<li><strong>備品（資産）</strong>が増加 → 借方</li>
<li><strong>現金（資産）</strong>が減少 → 貸方</li>
</ul>
</div>
<div class="compare-card">
<h4>仕訳</h4>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#2563eb;color:white;padding:8px;border:1px solid #1d4ed8;text-align:center;">借方</th><th style="background:#dc2626;color:white;padding:8px;border:1px solid #b91c1c;text-align:center;">貸方</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border);text-align:center;">備品 180,000</td><td style="padding:10px;border:1px solid var(--border);text-align:center;">現金 180,000</td></tr>
</table>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">資産同士の取引</div>
この取引は「資産の増加」と「資産の減少」のパターンです。備品（資産）が増えて、現金（資産）が減ります。資産が入れ替わるイメージです。
</div>

<h3>パターン9：家賃を現金で支払った</h3>
<p><strong>取引：</strong>事務所の家賃120,000円を現金で支払った。</p>
<div class="compare-grid">
<div class="compare-card">
<h4>分析</h4>
<ul>
<li><strong>支払家賃（費用）</strong>が発生 → 借方</li>
<li><strong>現金（資産）</strong>が減少 → 貸方</li>
</ul>
</div>
<div class="compare-card">
<h4>仕訳</h4>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#2563eb;color:white;padding:8px;border:1px solid #1d4ed8;text-align:center;">借方</th><th style="background:#dc2626;color:white;padding:8px;border:1px solid #b91c1c;text-align:center;">貸方</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border);text-align:center;">支払家賃 120,000</td><td style="padding:10px;border:1px solid var(--border);text-align:center;">現金 120,000</td></tr>
</table>
</div>
</div>

<h3>パターン10：売掛金を現金で回収した</h3>
<p><strong>取引：</strong>売掛金250,000円を現金で回収した。</p>
<div class="compare-grid">
<div class="compare-card">
<h4>分析</h4>
<ul>
<li><strong>現金（資産）</strong>が増加 → 借方</li>
<li><strong>売掛金（資産）</strong>が減少 → 貸方</li>
</ul>
</div>
<div class="compare-card">
<h4>仕訳</h4>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#2563eb;color:white;padding:8px;border:1px solid #1d4ed8;text-align:center;">借方</th><th style="background:#dc2626;color:white;padding:8px;border:1px solid #b91c1c;text-align:center;">貸方</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border);text-align:center;">現金 250,000</td><td style="padding:10px;border:1px solid var(--border);text-align:center;">売掛金 250,000</td></tr>
</table>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">10パターンまとめ</div>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr><th style="background:#059669;color:white;padding:8px;border:1px solid #047857;">No.</th><th style="background:#059669;color:white;padding:8px;border:1px solid #047857;">取引</th><th style="background:#059669;color:white;padding:8px;border:1px solid #047857;">借方</th><th style="background:#059669;color:white;padding:8px;border:1px solid #047857;">貸方</th></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--border);text-align:center;">1</td><td style="padding:6px 8px;border:1px solid var(--border);">現金仕入</td><td style="padding:6px 8px;border:1px solid var(--border);">仕入</td><td style="padding:6px 8px;border:1px solid var(--border);">現金</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--border);text-align:center;">2</td><td style="padding:6px 8px;border:1px solid var(--border);">現金売上</td><td style="padding:6px 8px;border:1px solid var(--border);">現金</td><td style="padding:6px 8px;border:1px solid var(--border);">売上</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--border);text-align:center;">3</td><td style="padding:6px 8px;border:1px solid var(--border);">掛仕入</td><td style="padding:6px 8px;border:1px solid var(--border);">仕入</td><td style="padding:6px 8px;border:1px solid var(--border);">買掛金</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--border);text-align:center;">4</td><td style="padding:6px 8px;border:1px solid var(--border);">掛売上</td><td style="padding:6px 8px;border:1px solid var(--border);">売掛金</td><td style="padding:6px 8px;border:1px solid var(--border);">売上</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--border);text-align:center;">5</td><td style="padding:6px 8px;border:1px solid var(--border);">借入</td><td style="padding:6px 8px;border:1px solid var(--border);">現金</td><td style="padding:6px 8px;border:1px solid var(--border);">借入金</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--border);text-align:center;">6</td><td style="padding:6px 8px;border:1px solid var(--border);">借入返済</td><td style="padding:6px 8px;border:1px solid var(--border);">借入金</td><td style="padding:6px 8px;border:1px solid var(--border);">現金</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--border);text-align:center;">7</td><td style="padding:6px 8px;border:1px solid var(--border);">給料支払</td><td style="padding:6px 8px;border:1px solid var(--border);">給料</td><td style="padding:6px 8px;border:1px solid var(--border);">現金</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--border);text-align:center;">8</td><td style="padding:6px 8px;border:1px solid var(--border);">備品購入</td><td style="padding:6px 8px;border:1px solid var(--border);">備品</td><td style="padding:6px 8px;border:1px solid var(--border);">現金</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--border);text-align:center;">9</td><td style="padding:6px 8px;border:1px solid var(--border);">家賃支払</td><td style="padding:6px 8px;border:1px solid var(--border);">支払家賃</td><td style="padding:6px 8px;border:1px solid var(--border);">現金</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--border);text-align:center;">10</td><td style="padding:6px 8px;border:1px solid var(--border);">売掛金回収</td><td style="padding:6px 8px;border:1px solid var(--border);">現金</td><td style="padding:6px 8px;border:1px solid var(--border);">売掛金</td></tr>
</table>
</div>
            `,
            quiz: [
                {
                    id: "q202_1",
                    type: "choice",
                    question: "「商品100,000円を現金で仕入れた」の正しい仕訳はどれですか？",
                    options: [
                        "（借方）現金 100,000 ／（貸方）仕入 100,000",
                        "（借方）仕入 100,000 ／（貸方）現金 100,000",
                        "（借方）仕入 100,000 ／（貸方）買掛金 100,000",
                        "（借方）買掛金 100,000 ／（貸方）現金 100,000"
                    ],
                    answer: 1,
                    explanation: "現金で仕入れた場合、仕入（費用の発生）→ 借方、現金（資産の減少）→ 貸方です。掛けではないので買掛金は使いません。"
                },
                {
                    id: "q202_2",
                    type: "choice",
                    question: "「商品200,000円を掛けで売り上げた」の仕訳で、借方に来る勘定科目はどれですか？",
                    options: ["売上", "買掛金", "売掛金", "現金"],
                    answer: 2,
                    explanation: "掛けで売り上げた場合、代金をまだもらっていないので売掛金（資産）が増加します。資産の増加は借方です。（借方）売掛金 200,000 ／（貸方）売上 200,000"
                },
                {
                    id: "q202_3",
                    type: "fill",
                    question: "「借入金600,000円を現金で返済した」の仕訳で、借方に来る勘定科目は「＿＿＿」です。",
                    answer: "借入金",
                    explanation: "借入金を返済すると負債が減少します。負債の減少は借方です。（借方）借入金 600,000 ／（貸方）現金 600,000"
                },
                {
                    id: "q202_4",
                    type: "choice",
                    question: "「備品80,000円を現金で購入した」の仕訳はどれですか？",
                    options: [
                        "（借方）現金 80,000 ／（貸方）備品 80,000",
                        "（借方）消耗品費 80,000 ／（貸方）現金 80,000",
                        "（借方）備品 80,000 ／（貸方）現金 80,000",
                        "（借方）備品 80,000 ／（貸方）未払金 80,000"
                    ],
                    answer: 2,
                    explanation: "備品は資産です。資産の増加 → 借方。現金は資産の減少 → 貸方。現金で購入しているので、貸方は現金です。"
                },
                {
                    id: "q202_5",
                    type: "choice",
                    question: "「売掛金150,000円を現金で回収した」の仕訳で、貸方に来る勘定科目はどれですか？",
                    options: ["現金", "売掛金", "売上", "受取手形"],
                    answer: 1,
                    explanation: "売掛金を回収すると、現金（資産）が増加 → 借方、売掛金（資産）が減少 → 貸方 です。売掛金は代金を受け取る権利なので、回収すると減ります。"
                }
            ]
        },

        /* ==========================================
           Module 203: 勘定口座と転記
           ========================================== */
        {
            id: 203,
            title: "勘定口座と転記",
            duration: "20分",
            content: `
<h2>勘定口座と転記</h2>
<p>仕訳したら、次は<strong>勘定口座（T字勘定）</strong>に転記します。勘定口座は、各勘定科目ごとの「成績表」のようなものです。</p>

<h3>勘定口座（T字勘定）の構造</h3>
<p>勘定口座は<strong>T字の形</strong>をしています。上に勘定科目名、左が借方、右が貸方です。</p>

<div class="visual-box">
<div class="visual-box-title">T字勘定の基本構造</div>
<table style="width:80%;margin:0 auto;border-collapse:collapse;">
<tr>
<td colspan="2" style="text-align:center;padding:10px;font-weight:700;font-size:1.2rem;border-bottom:3px solid #1e293b;background:var(--bg);">現　金</td>
</tr>
<tr>
<td style="width:50%;padding:8px;text-align:center;border-right:3px solid #1e293b;font-weight:600;color:#2563eb;border-bottom:1px solid var(--border);">借方（左側）</td>
<td style="width:50%;padding:8px;text-align:center;font-weight:600;color:#dc2626;border-bottom:1px solid var(--border);">貸方（右側）</td>
</tr>
<tr>
<td style="padding:12px;border-right:3px solid #1e293b;vertical-align:top;min-height:80px;">
増加した金額を記入
</td>
<td style="padding:12px;vertical-align:top;min-height:80px;">
減少した金額を記入
</td>
</tr>
</table>
</div>

<div class="info-box tip">
<div class="info-box-title">T字勘定のポイント</div>
T字勘定では、<strong>その勘定科目のホームポジション側に増加</strong>を記入します。<br>
・資産（現金など）→ 借方が増加、貸方が減少<br>
・負債（買掛金など）→ 貸方が増加、借方が減少<br>
・純資産（資本金など）→ 貸方が増加、借方が減少<br>
仕訳のルールと同じです！
</div>

<h3>仕訳から勘定口座への転記方法</h3>
<p>転記とは、仕訳帳の内容を各勘定口座に書き写す作業です。次のルールに従います。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>仕訳の借方にある勘定科目</strong>
→ その勘定口座の<strong>借方（左）</strong>に金額を記入する。相手科目名と日付も書く。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>仕訳の貸方にある勘定科目</strong>
→ その勘定口座の<strong>貸方（右）</strong>に金額を記入する。相手科目名と日付も書く。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>相手勘定科目を記入</strong>
転記する際、相手の勘定科目名を記入します。「どこから来たか（または出ていったか）」がわかるようにするためです。
</div>
</div>
</div>

<h3>具体例で練習しよう</h3>
<p><strong>仕訳：</strong>4月1日、商品200,000円を現金で仕入れた。</p>

<div class="visual-box">
<div class="visual-box-title">仕訳</div>
<table style="width:100%;border-collapse:collapse;">
<tr>
<th style="background:#2563eb;color:white;padding:8px;text-align:center;border:1px solid #1d4ed8;">日付</th>
<th style="background:#2563eb;color:white;padding:8px;text-align:center;border:1px solid #1d4ed8;">借方</th>
<th style="background:#2563eb;color:white;padding:8px;text-align:center;border:1px solid #1d4ed8;">金額</th>
<th style="background:#dc2626;color:white;padding:8px;text-align:center;border:1px solid #b91c1c;">貸方</th>
<th style="background:#dc2626;color:white;padding:8px;text-align:center;border:1px solid #b91c1c;">金額</th>
</tr>
<tr>
<td style="padding:10px;text-align:center;border:1px solid var(--border);">4/1</td>
<td style="padding:10px;text-align:center;border:1px solid var(--border);font-weight:700;">仕入</td>
<td style="padding:10px;text-align:center;border:1px solid var(--border);">200,000</td>
<td style="padding:10px;text-align:center;border:1px solid var(--border);font-weight:700;">現金</td>
<td style="padding:10px;text-align:center;border:1px solid var(--border);">200,000</td>
</tr>
</table>
</div>

<p>この仕訳を「仕入」と「現金」のT字勘定に転記します。</p>

<div class="compare-grid">
<div class="compare-card">
<h4>仕入勘定（費用）</h4>
<table style="width:100%;border-collapse:collapse;">
<tr><td colspan="2" style="text-align:center;padding:8px;font-weight:700;border-bottom:3px solid #1e293b;background:var(--bg);">仕　入</td></tr>
<tr>
<td style="width:50%;padding:6px;text-align:center;border-right:3px solid #1e293b;font-size:0.8rem;color:#64748b;border-bottom:1px solid var(--border);">借方</td>
<td style="width:50%;padding:6px;text-align:center;font-size:0.8rem;color:#64748b;border-bottom:1px solid var(--border);">貸方</td>
</tr>
<tr>
<td style="padding:10px;border-right:3px solid #1e293b;background:#dbeafe;">4/1 現金 200,000</td>
<td style="padding:10px;"></td>
</tr>
</table>
<p style="font-size:0.8rem;color:#64748b;margin-top:4px;">仕訳の借方「仕入」→ 仕入勘定の借方に転記。相手科目は「現金」。</p>
</div>
<div class="compare-card">
<h4>現金勘定（資産）</h4>
<table style="width:100%;border-collapse:collapse;">
<tr><td colspan="2" style="text-align:center;padding:8px;font-weight:700;border-bottom:3px solid #1e293b;background:var(--bg);">現　金</td></tr>
<tr>
<td style="width:50%;padding:6px;text-align:center;border-right:3px solid #1e293b;font-size:0.8rem;color:#64748b;border-bottom:1px solid var(--border);">借方</td>
<td style="width:50%;padding:6px;text-align:center;font-size:0.8rem;color:#64748b;border-bottom:1px solid var(--border);">貸方</td>
</tr>
<tr>
<td style="padding:10px;border-right:3px solid #1e293b;"></td>
<td style="padding:10px;background:#fee2e2;">4/1 仕入 200,000</td>
</tr>
</table>
<p style="font-size:0.8rem;color:#64748b;margin-top:4px;">仕訳の貸方「現金」→ 現金勘定の貸方に転記。相手科目は「仕入」。</p>
</div>
</div>

<h3>複数の取引を転記してみよう</h3>
<p>次の3つの取引を現金勘定に転記します。</p>
<ol>
<li>4/1 資本金として現金500,000円を元入れした</li>
<li>4/5 商品200,000円を現金で仕入れた</li>
<li>4/10 商品を300,000円で現金売りした</li>
</ol>

<div class="visual-box">
<div class="visual-box-title">現金勘定（3取引を転記後）</div>
<table style="width:90%;margin:0 auto;border-collapse:collapse;">
<tr><td colspan="2" style="text-align:center;padding:10px;font-weight:700;font-size:1.1rem;border-bottom:3px solid #1e293b;background:var(--bg);">現　金</td></tr>
<tr>
<td style="width:50%;padding:6px;text-align:center;border-right:3px solid #1e293b;font-size:0.8rem;color:#2563eb;font-weight:600;border-bottom:1px solid var(--border);">借方</td>
<td style="width:50%;padding:6px;text-align:center;font-size:0.8rem;color:#dc2626;font-weight:600;border-bottom:1px solid var(--border);">貸方</td>
</tr>
<tr>
<td style="padding:10px;border-right:3px solid #1e293b;border-bottom:1px dashed var(--border);background:#dbeafe;">4/1 資本金 500,000</td>
<td style="padding:10px;border-bottom:1px dashed var(--border);background:#fee2e2;">4/5 仕入 200,000</td>
</tr>
<tr>
<td style="padding:10px;border-right:3px solid #1e293b;background:#dbeafe;">4/10 売上 300,000</td>
<td style="padding:10px;"></td>
</tr>
<tr>
<td style="padding:10px;border-right:3px solid #1e293b;border-top:2px solid #1e293b;font-weight:700;background:var(--bg);">合計 800,000</td>
<td style="padding:10px;border-top:2px solid #1e293b;font-weight:700;background:var(--bg);">合計 200,000</td>
</tr>
</table>
<p style="margin-top:10px;font-size:0.9rem;">残高 = 借方合計800,000 - 貸方合計200,000 = <strong>600,000円（借方残高）</strong></p>
</div>

<div class="info-box success">
<div class="info-box-title">残高の求め方</div>
T字勘定の<strong>借方合計と貸方合計の差額</strong>が残高です。<br>
・借方合計 ＞ 貸方合計 → <strong>借方残高</strong>（資産・費用に多い）<br>
・貸方合計 ＞ 借方合計 → <strong>貸方残高</strong>（負債・純資産・収益に多い）
</div>

<div class="info-box warning">
<div class="info-box-title">転記でよくあるミス</div>
・借方と貸方を逆に書いてしまう<br>
・相手勘定科目を間違える<br>
・金額の転記ミス（桁を間違えるなど）<br>
→ 転記後に仕訳帳と突き合わせて確認する習慣をつけましょう！
</div>
            `,
            quiz: [
                {
                    id: "q203_1",
                    type: "choice",
                    question: "仕訳の借方にある勘定科目は、その勘定口座のどちらに転記しますか？",
                    options: ["借方（左側）", "貸方（右側）", "残高の多い方", "どちらでもよい"],
                    answer: 0,
                    explanation: "仕訳の借方にある勘定科目は、その勘定口座の借方（左側）に転記します。仕訳と同じ側に書くのが転記のルールです。"
                },
                {
                    id: "q203_2",
                    type: "choice",
                    question: "「（借方）仕入 100,000 ／（貸方）現金 100,000」を転記するとき、現金勘定のどちらに記入しますか？",
                    options: ["借方に100,000と記入", "貸方に100,000と記入", "借方と貸方の両方に記入", "転記しない"],
                    answer: 1,
                    explanation: "現金は仕訳の貸方にあるので、現金勘定の貸方（右側）に100,000と記入します。相手勘定科目「仕入」も書きます。"
                },
                {
                    id: "q203_3",
                    type: "fill",
                    question: "T字勘定で転記するとき、金額と一緒に記入する相手の勘定科目名を何といいますか？（漢字4文字で「○○勘定」の形で）",
                    answer: "相手勘定",
                    explanation: "転記の際には日付、金額とともに「相手勘定科目」を記入します。これにより、その取引がどの科目との間で発生したかがわかります。"
                },
                {
                    id: "q203_4",
                    type: "choice",
                    question: "現金勘定の借方合計が500,000円、貸方合計が300,000円のとき、残高はいくらですか？",
                    options: ["借方残高 200,000円", "貸方残高 200,000円", "借方残高 800,000円", "残高なし"],
                    answer: 0,
                    explanation: "借方合計500,000 - 貸方合計300,000 = 200,000円。借方の方が大きいので「借方残高200,000円」です。現金は資産なので、通常は借方残高になります。"
                },
                {
                    id: "q203_5",
                    type: "choice",
                    question: "買掛金勘定の借方合計が100,000円、貸方合計が400,000円のとき、残高はいくらですか？",
                    options: ["借方残高 300,000円", "貸方残高 300,000円", "借方残高 500,000円", "貸方残高 500,000円"],
                    answer: 1,
                    explanation: "貸方合計400,000 - 借方合計100,000 = 300,000円。貸方の方が大きいので「貸方残高300,000円」です。買掛金は負債なので、通常は貸方残高になります。"
                }
            ]
        },

        /* ==========================================
           Module 204: 試算表
           ========================================== */
        {
            id: 204,
            title: "試算表",
            duration: "20分",
            content: `
<h2>試算表</h2>
<p><strong>試算表（しさんひょう）</strong>は、すべての勘定口座の金額を一覧表にまとめたものです。「借方合計＝貸方合計」になるかを検証し、転記のミスを発見するために使います。</p>

<div class="info-box tip">
<div class="info-box-title">試算表の目的</div>
仕訳帳 → 勘定口座への転記が正しく行われたかをチェックするための検証ツールです。簿記3級の試験では、試算表の作成問題が頻出です！
</div>

<h3>試算表の3つのタイプ</h3>
<p>試算表には3種類あります。それぞれの特徴を理解しましょう。</p>

<div class="compare-grid">
<div class="compare-card">
<h4>合計試算表</h4>
<p>各勘定口座の<strong>借方合計</strong>と<strong>貸方合計</strong>をそのまま集計します。</p>
<p style="font-size:0.85rem;color:var(--text-secondary);">取引の総額がわかる</p>
</div>
<div class="compare-card">
<h4>残高試算表</h4>
<p>各勘定口座の<strong>残高のみ</strong>（借方残高or貸方残高）を集計します。</p>
<p style="font-size:0.85rem;color:var(--text-secondary);">現在の財産状態がわかる</p>
</div>
</div>

<div class="visual-box">
<div class="visual-box-title">合計残高試算表</div>
<p style="margin-bottom:10px;">合計試算表と残高試算表を<strong>1つにまとめた</strong>もの。最も情報量が多く、実務でよく使われます。</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr>
<th colspan="2" style="background:#2563eb;color:white;padding:8px;text-align:center;border:1px solid #1d4ed8;">合計</th>
<th rowspan="2" style="background:#1e293b;color:white;padding:8px;text-align:center;border:1px solid #0f172a;vertical-align:middle;">勘定科目</th>
<th colspan="2" style="background:#dc2626;color:white;padding:8px;text-align:center;border:1px solid #b91c1c;">残高</th>
</tr>
<tr>
<th style="background:#3b82f6;color:white;padding:6px;text-align:center;border:1px solid #2563eb;">借方</th>
<th style="background:#3b82f6;color:white;padding:6px;text-align:center;border:1px solid #2563eb;">貸方</th>
<th style="background:#ef4444;color:white;padding:6px;text-align:center;border:1px solid #dc2626;">借方</th>
<th style="background:#ef4444;color:white;padding:6px;text-align:center;border:1px solid #dc2626;">貸方</th>
</tr>
<tr>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">借方合計額</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">貸方合計額</td>
<td style="padding:8px;text-align:center;border:1px solid var(--border);font-weight:700;">各科目名</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">借方残高</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">貸方残高</td>
</tr>
</table>
</div>

<h3>試算表の作成手順</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>すべての仕訳を勘定口座に転記する</strong>
仕訳帳の記録をT字勘定に写します。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>各勘定口座の合計・残高を計算する</strong>
借方合計、貸方合計、そして差額（残高）を求めます。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>試算表に記入する</strong>
すべての勘定科目の合計・残高を試算表に転記します。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>借方合計＝貸方合計を確認する</strong>
合計が一致すれば、転記は（基本的に）正しいと判断できます。
</div>
</div>
</div>

<h3>具体例：試算表を作ってみよう</h3>
<p>以下の取引から試算表を作成します。</p>

<div class="info-box tip">
<div class="info-box-title">取引一覧</div>
1. 現金500,000円を元入れして開業した<br>
2. 商品200,000円を現金で仕入れた<br>
3. 商品を350,000円で掛け売りした<br>
4. 給料100,000円を現金で支払った<br>
5. 売掛金のうち150,000円を現金で回収した
</div>

<p>まず各T字勘定を確認します。</p>

<div class="compare-grid">
<div class="compare-card">
<h4>現金（資産）</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr><td colspan="2" style="text-align:center;padding:6px;font-weight:700;border-bottom:3px solid #1e293b;background:var(--bg);">現　金</td></tr>
<tr><td style="width:50%;padding:4px;text-align:center;border-right:3px solid #1e293b;color:#2563eb;font-size:0.75rem;border-bottom:1px solid var(--border);">借方</td><td style="width:50%;padding:4px;text-align:center;color:#dc2626;font-size:0.75rem;border-bottom:1px solid var(--border);">貸方</td></tr>
<tr><td style="padding:6px;border-right:3px solid #1e293b;border-bottom:1px dashed var(--border);">資本金 500,000</td><td style="padding:6px;border-bottom:1px dashed var(--border);">仕入 200,000</td></tr>
<tr><td style="padding:6px;border-right:3px solid #1e293b;">売掛金 150,000</td><td style="padding:6px;">給料 100,000</td></tr>
<tr><td style="padding:6px;border-right:3px solid #1e293b;border-top:2px solid #1e293b;font-weight:700;">650,000</td><td style="padding:6px;border-top:2px solid #1e293b;font-weight:700;">300,000</td></tr>
</table>
</div>
<div class="compare-card">
<h4>売掛金（資産）</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr><td colspan="2" style="text-align:center;padding:6px;font-weight:700;border-bottom:3px solid #1e293b;background:var(--bg);">売掛金</td></tr>
<tr><td style="width:50%;padding:4px;text-align:center;border-right:3px solid #1e293b;color:#2563eb;font-size:0.75rem;border-bottom:1px solid var(--border);">借方</td><td style="width:50%;padding:4px;text-align:center;color:#dc2626;font-size:0.75rem;border-bottom:1px solid var(--border);">貸方</td></tr>
<tr><td style="padding:6px;border-right:3px solid #1e293b;">売上 350,000</td><td style="padding:6px;">現金 150,000</td></tr>
<tr><td style="padding:6px;border-right:3px solid #1e293b;border-top:2px solid #1e293b;font-weight:700;">350,000</td><td style="padding:6px;border-top:2px solid #1e293b;font-weight:700;">150,000</td></tr>
</table>
</div>
</div>

<div class="compare-grid">
<div class="compare-card">
<h4>資本金（純資産）</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr><td colspan="2" style="text-align:center;padding:6px;font-weight:700;border-bottom:3px solid #1e293b;background:var(--bg);">資本金</td></tr>
<tr><td style="width:50%;padding:4px;text-align:center;border-right:3px solid #1e293b;color:#2563eb;font-size:0.75rem;border-bottom:1px solid var(--border);">借方</td><td style="width:50%;padding:4px;text-align:center;color:#dc2626;font-size:0.75rem;border-bottom:1px solid var(--border);">貸方</td></tr>
<tr><td style="padding:6px;border-right:3px solid #1e293b;"></td><td style="padding:6px;">現金 500,000</td></tr>
<tr><td style="padding:6px;border-right:3px solid #1e293b;border-top:2px solid #1e293b;font-weight:700;">0</td><td style="padding:6px;border-top:2px solid #1e293b;font-weight:700;">500,000</td></tr>
</table>
</div>
<div class="compare-card">
<h4>売上（収益）</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr><td colspan="2" style="text-align:center;padding:6px;font-weight:700;border-bottom:3px solid #1e293b;background:var(--bg);">売　上</td></tr>
<tr><td style="width:50%;padding:4px;text-align:center;border-right:3px solid #1e293b;color:#2563eb;font-size:0.75rem;border-bottom:1px solid var(--border);">借方</td><td style="width:50%;padding:4px;text-align:center;color:#dc2626;font-size:0.75rem;border-bottom:1px solid var(--border);">貸方</td></tr>
<tr><td style="padding:6px;border-right:3px solid #1e293b;"></td><td style="padding:6px;">売掛金 350,000</td></tr>
<tr><td style="padding:6px;border-right:3px solid #1e293b;border-top:2px solid #1e293b;font-weight:700;">0</td><td style="padding:6px;border-top:2px solid #1e293b;font-weight:700;">350,000</td></tr>
</table>
</div>
</div>

<div class="compare-grid">
<div class="compare-card">
<h4>仕入（費用）</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr><td colspan="2" style="text-align:center;padding:6px;font-weight:700;border-bottom:3px solid #1e293b;background:var(--bg);">仕　入</td></tr>
<tr><td style="width:50%;padding:4px;text-align:center;border-right:3px solid #1e293b;color:#2563eb;font-size:0.75rem;border-bottom:1px solid var(--border);">借方</td><td style="width:50%;padding:4px;text-align:center;color:#dc2626;font-size:0.75rem;border-bottom:1px solid var(--border);">貸方</td></tr>
<tr><td style="padding:6px;border-right:3px solid #1e293b;">現金 200,000</td><td style="padding:6px;"></td></tr>
<tr><td style="padding:6px;border-right:3px solid #1e293b;border-top:2px solid #1e293b;font-weight:700;">200,000</td><td style="padding:6px;border-top:2px solid #1e293b;font-weight:700;">0</td></tr>
</table>
</div>
<div class="compare-card">
<h4>給料（費用）</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr><td colspan="2" style="text-align:center;padding:6px;font-weight:700;border-bottom:3px solid #1e293b;background:var(--bg);">給　料</td></tr>
<tr><td style="width:50%;padding:4px;text-align:center;border-right:3px solid #1e293b;color:#2563eb;font-size:0.75rem;border-bottom:1px solid var(--border);">借方</td><td style="width:50%;padding:4px;text-align:center;color:#dc2626;font-size:0.75rem;border-bottom:1px solid var(--border);">貸方</td></tr>
<tr><td style="padding:6px;border-right:3px solid #1e293b;">現金 100,000</td><td style="padding:6px;"></td></tr>
<tr><td style="padding:6px;border-right:3px solid #1e293b;border-top:2px solid #1e293b;font-weight:700;">100,000</td><td style="padding:6px;border-top:2px solid #1e293b;font-weight:700;">0</td></tr>
</table>
</div>
</div>

<p>これらをもとに<strong>合計残高試算表</strong>を作成します。</p>

<div class="visual-box">
<div class="visual-box-title">合計残高試算表</div>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr>
<th colspan="2" style="background:#2563eb;color:white;padding:8px;text-align:center;border:1px solid #1d4ed8;">合計</th>
<th rowspan="2" style="background:#1e293b;color:white;padding:8px;text-align:center;border:1px solid #0f172a;vertical-align:middle;">勘定科目</th>
<th colspan="2" style="background:#dc2626;color:white;padding:8px;text-align:center;border:1px solid #b91c1c;">残高</th>
</tr>
<tr>
<th style="background:#3b82f6;color:white;padding:6px;text-align:center;border:1px solid #2563eb;">借方</th>
<th style="background:#3b82f6;color:white;padding:6px;text-align:center;border:1px solid #2563eb;">貸方</th>
<th style="background:#ef4444;color:white;padding:6px;text-align:center;border:1px solid #dc2626;">借方</th>
<th style="background:#ef4444;color:white;padding:6px;text-align:center;border:1px solid #dc2626;">貸方</th>
</tr>
<tr>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">650,000</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">300,000</td>
<td style="padding:8px;text-align:center;border:1px solid var(--border);font-weight:700;">現金</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">350,000</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);"></td>
</tr>
<tr>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">350,000</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">150,000</td>
<td style="padding:8px;text-align:center;border:1px solid var(--border);font-weight:700;">売掛金</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">200,000</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);"></td>
</tr>
<tr>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">0</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">500,000</td>
<td style="padding:8px;text-align:center;border:1px solid var(--border);font-weight:700;">資本金</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);"></td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">500,000</td>
</tr>
<tr>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">0</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">350,000</td>
<td style="padding:8px;text-align:center;border:1px solid var(--border);font-weight:700;">売上</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);"></td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">350,000</td>
</tr>
<tr>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">200,000</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">0</td>
<td style="padding:8px;text-align:center;border:1px solid var(--border);font-weight:700;">仕入</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">200,000</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);"></td>
</tr>
<tr>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">100,000</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">0</td>
<td style="padding:8px;text-align:center;border:1px solid var(--border);font-weight:700;">給料</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);">100,000</td>
<td style="padding:8px;text-align:right;border:1px solid var(--border);"></td>
</tr>
<tr style="background:var(--bg);font-weight:700;">
<td style="padding:10px;text-align:right;border:2px solid #1e293b;">1,300,000</td>
<td style="padding:10px;text-align:right;border:2px solid #1e293b;">1,300,000</td>
<td style="padding:10px;text-align:center;border:2px solid #1e293b;">合　計</td>
<td style="padding:10px;text-align:right;border:2px solid #1e293b;">850,000</td>
<td style="padding:10px;text-align:right;border:2px solid #1e293b;">850,000</td>
</tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">検証完了！</div>
合計欄を見てください。<br>
・合計：借方 1,300,000 = 貸方 1,300,000 → 一致！<br>
・残高：借方 850,000 = 貸方 850,000 → 一致！<br>
両方とも一致しているので、転記は正しいと判断できます。
</div>

<h3>試算表で見つけられるエラーと見つけられないエラー</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #10b981;">
<h4 style="color:#10b981;">見つけられるエラー</h4>
<ul>
<li>片方だけ転記して、もう片方を忘れた</li>
<li>借方と貸方の金額が違う</li>
<li>計算ミス（足し算間違い）</li>
</ul>
</div>
<div class="compare-card" style="border-left:4px solid #ef4444;">
<h4 style="color:#ef4444;">見つけられないエラー</h4>
<ul>
<li>借方・貸方を逆に転記した（貸借同額ずれるので合計は合う）</li>
<li>仕訳自体を丸ごと転記し忘れた</li>
<li>勘定科目を間違えた（売掛金と買掛金を取り違えなど）</li>
<li>同じ金額で借方・貸方ともに間違えた</li>
</ul>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">試験のポイント</div>
試算表は「借方合計＝貸方合計」のチェックツールですが、<strong>合計が一致しても100%正確とは限りません</strong>。見つけられないエラーがあることを理解しておきましょう。試験ではこの知識が問われることがあります。
</div>
            `,
            quiz: [
                {
                    id: "q204_1",
                    type: "choice",
                    question: "試算表の目的として正しいものはどれですか？",
                    options: [
                        "利益を計算すること",
                        "仕訳帳から勘定口座への転記の正確性を検証すること",
                        "決算書を作成すること",
                        "税金を計算すること"
                    ],
                    answer: 1,
                    explanation: "試算表は「借方合計＝貸方合計」になるかを確認し、転記が正しく行われたかを検証するためのツールです。"
                },
                {
                    id: "q204_2",
                    type: "choice",
                    question: "各勘定口座の残高のみを集計した試算表は何ですか？",
                    options: ["合計試算表", "残高試算表", "合計残高試算表", "精算表"],
                    answer: 1,
                    explanation: "残高試算表は各勘定口座の残高（借方合計と貸方合計の差額）のみを集計します。合計試算表は合計額、合計残高試算表は両方を記載します。"
                },
                {
                    id: "q204_3",
                    type: "fill",
                    question: "試算表では、借方合計と貸方合計が＿＿しなければなりません。（漢字2文字で）",
                    answer: "一致",
                    explanation: "複式簿記では、すべての仕訳で借方と貸方が同額になるため、試算表の借方合計と貸方合計は必ず一致します。一致しない場合は転記ミスがあります。"
                },
                {
                    id: "q204_4",
                    type: "choice",
                    question: "試算表で見つけられないエラーはどれですか？",
                    options: [
                        "片方だけ転記し忘れた場合",
                        "金額の計算を間違えた場合",
                        "勘定科目を間違えて転記した場合（金額は正しい）",
                        "借方と貸方の金額が異なる場合"
                    ],
                    answer: 2,
                    explanation: "勘定科目を間違えても（例：売掛金と買掛金を取り違え）、借方と貸方の金額自体が合っていれば合計は一致してしまうため、試算表では発見できません。"
                },
                {
                    id: "q204_5",
                    type: "choice",
                    question: "合計試算表と残高試算表を1つにまとめた試算表を何といいますか？",
                    options: ["精算表", "合計残高試算表", "総勘定元帳", "決算整理表"],
                    answer: 1,
                    explanation: "合計残高試算表は、合計試算表（借方合計・貸方合計）と残高試算表（借方残高・貸方残高）を1つの表にまとめたものです。最も情報量が多い試算表です。"
                }
            ]
        },

        /* ==========================================
           Module 205: 仕訳の応用
           ========================================== */
        {
            id: 205,
            title: "仕訳の応用",
            duration: "20分",
            content: `
<h2>仕訳の応用</h2>
<p>基本の仕訳をマスターしたら、次は<strong>応用パターン</strong>を学びましょう。複合仕訳、訂正仕訳、逆仕訳など、試験でもよく出る重要なテーマです。</p>

<h3>複合仕訳（借方・貸方が複数の場合）</h3>
<p>通常の仕訳は借方1つ・貸方1つですが、<strong>複合仕訳</strong>は借方または貸方（あるいは両方）が複数の勘定科目になります。</p>

<div class="info-box tip">
<div class="info-box-title">複合仕訳のポイント</div>
複合仕訳でも<strong>借方合計＝貸方合計</strong>のルールは変わりません。金額の合計が一致しているかを必ず確認しましょう。
</div>

<p><strong>例1：商品300,000円を仕入れ、200,000円は現金で、残り100,000円は掛けとした。</strong></p>

<div class="visual-box">
<div class="visual-box-title">複合仕訳の例1（貸方が複数）</div>
<table style="width:100%;border-collapse:collapse;">
<tr>
<th style="background:#2563eb;color:white;padding:10px;text-align:center;border:1px solid #1d4ed8;">借方</th>
<th style="background:#2563eb;color:white;padding:10px;text-align:center;border:1px solid #1d4ed8;">金額</th>
<th style="background:#dc2626;color:white;padding:10px;text-align:center;border:1px solid #b91c1c;">貸方</th>
<th style="background:#dc2626;color:white;padding:10px;text-align:center;border:1px solid #b91c1c;">金額</th>
</tr>
<tr>
<td rowspan="2" style="padding:12px;text-align:center;border:1px solid var(--border);font-weight:700;vertical-align:middle;">仕入</td>
<td rowspan="2" style="padding:12px;text-align:center;border:1px solid var(--border);vertical-align:middle;">300,000</td>
<td style="padding:12px;text-align:center;border:1px solid var(--border);font-weight:700;">現金</td>
<td style="padding:12px;text-align:center;border:1px solid var(--border);">200,000</td>
</tr>
<tr>
<td style="padding:12px;text-align:center;border:1px solid var(--border);font-weight:700;">買掛金</td>
<td style="padding:12px;text-align:center;border:1px solid var(--border);">100,000</td>
</tr>
<tr style="background:var(--bg);">
<td colspan="2" style="padding:8px;text-align:center;border:1px solid var(--border);font-weight:700;">借方合計: 300,000</td>
<td colspan="2" style="padding:8px;text-align:center;border:1px solid var(--border);font-weight:700;">貸方合計: 300,000</td>
</tr>
</table>
</div>

<p><strong>例2：給料250,000円を支払い、所得税の源泉徴収分30,000円を差し引いて現金で支払った。</strong></p>

<div class="visual-box">
<div class="visual-box-title">複合仕訳の例2（貸方が複数）</div>
<table style="width:100%;border-collapse:collapse;">
<tr>
<th style="background:#2563eb;color:white;padding:10px;text-align:center;border:1px solid #1d4ed8;">借方</th>
<th style="background:#2563eb;color:white;padding:10px;text-align:center;border:1px solid #1d4ed8;">金額</th>
<th style="background:#dc2626;color:white;padding:10px;text-align:center;border:1px solid #b91c1c;">貸方</th>
<th style="background:#dc2626;color:white;padding:10px;text-align:center;border:1px solid #b91c1c;">金額</th>
</tr>
<tr>
<td rowspan="2" style="padding:12px;text-align:center;border:1px solid var(--border);font-weight:700;vertical-align:middle;">給料</td>
<td rowspan="2" style="padding:12px;text-align:center;border:1px solid var(--border);vertical-align:middle;">250,000</td>
<td style="padding:12px;text-align:center;border:1px solid var(--border);font-weight:700;">現金</td>
<td style="padding:12px;text-align:center;border:1px solid var(--border);">220,000</td>
</tr>
<tr>
<td style="padding:12px;text-align:center;border:1px solid var(--border);font-weight:700;">預り金</td>
<td style="padding:12px;text-align:center;border:1px solid var(--border);">30,000</td>
</tr>
<tr style="background:var(--bg);">
<td colspan="2" style="padding:8px;text-align:center;border:1px solid var(--border);font-weight:700;">借方合計: 250,000</td>
<td colspan="2" style="padding:8px;text-align:center;border:1px solid var(--border);font-weight:700;">貸方合計: 250,000</td>
</tr>
</table>
</div>

<p style="font-size:0.9rem;color:var(--text-secondary);">源泉徴収分は従業員から一時的に預かったお金なので「預り金」（負債）です。</p>

<h3>訂正仕訳（間違えた仕訳の直し方）</h3>
<p>仕訳を間違えてしまった場合、<strong>訂正仕訳</strong>で修正します。手順は2つのステップです。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>間違った仕訳を取り消す（逆仕訳を切る）</strong>
間違った仕訳の借方と貸方を入れ替えた仕訳を行い、影響をゼロにします。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>正しい仕訳を行う</strong>
本来あるべき正しい仕訳を記入します。
</div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">実務と試験の違い</div>
実務では訂正仕訳を2ステップに分けず、1つの仕訳にまとめることが一般的です。試験では「取消仕訳+正しい仕訳＝訂正仕訳」をまとめた形で解答を求められることが多いです。
</div>

<p><strong>例：備品100,000円を現金で購入したのに、誤って消耗品費として処理してしまった。</strong></p>

<div class="visual-box">
<div class="visual-box-title">間違った仕訳（これが記帳されてしまった）</div>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#ef4444;color:white;padding:8px;text-align:center;border:1px solid #dc2626;">借方</th><th style="background:#ef4444;color:white;padding:8px;text-align:center;border:1px solid #dc2626;">金額</th><th style="background:#ef4444;color:white;padding:8px;text-align:center;border:1px solid #dc2626;">貸方</th><th style="background:#ef4444;color:white;padding:8px;text-align:center;border:1px solid #dc2626;">金額</th></tr>
<tr><td style="padding:10px;text-align:center;border:1px solid var(--border);text-decoration:line-through;color:#ef4444;">消耗品費</td><td style="padding:10px;text-align:center;border:1px solid var(--border);text-decoration:line-through;color:#ef4444;">100,000</td><td style="padding:10px;text-align:center;border:1px solid var(--border);text-decoration:line-through;color:#ef4444;">現金</td><td style="padding:10px;text-align:center;border:1px solid var(--border);text-decoration:line-through;color:#ef4444;">100,000</td></tr>
</table>
</div>

<div class="visual-box">
<div class="visual-box-title">ステップ1：取消仕訳（逆仕訳）</div>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#f59e0b;color:white;padding:8px;text-align:center;border:1px solid #d97706;">借方</th><th style="background:#f59e0b;color:white;padding:8px;text-align:center;border:1px solid #d97706;">金額</th><th style="background:#f59e0b;color:white;padding:8px;text-align:center;border:1px solid #d97706;">貸方</th><th style="background:#f59e0b;color:white;padding:8px;text-align:center;border:1px solid #d97706;">金額</th></tr>
<tr><td style="padding:10px;text-align:center;border:1px solid var(--border);">現金</td><td style="padding:10px;text-align:center;border:1px solid var(--border);">100,000</td><td style="padding:10px;text-align:center;border:1px solid var(--border);">消耗品費</td><td style="padding:10px;text-align:center;border:1px solid var(--border);">100,000</td></tr>
</table>
<p style="margin-top:8px;font-size:0.85rem;color:var(--text-secondary);">間違った仕訳の借方と貸方を入れ替えて、影響をゼロにする</p>
</div>

<div class="visual-box">
<div class="visual-box-title">ステップ2：正しい仕訳</div>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#10b981;color:white;padding:8px;text-align:center;border:1px solid #059669;">借方</th><th style="background:#10b981;color:white;padding:8px;text-align:center;border:1px solid #059669;">金額</th><th style="background:#10b981;color:white;padding:8px;text-align:center;border:1px solid #059669;">貸方</th><th style="background:#10b981;color:white;padding:8px;text-align:center;border:1px solid #059669;">金額</th></tr>
<tr><td style="padding:10px;text-align:center;border:1px solid var(--border);">備品</td><td style="padding:10px;text-align:center;border:1px solid var(--border);">100,000</td><td style="padding:10px;text-align:center;border:1px solid var(--border);">現金</td><td style="padding:10px;text-align:center;border:1px solid var(--border);">100,000</td></tr>
</table>
</div>

<div class="visual-box">
<div class="visual-box-title">まとめた訂正仕訳（試験で求められる形）</div>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="background:#7c3aed;color:white;padding:8px;text-align:center;border:1px solid #6d28d9;">借方</th><th style="background:#7c3aed;color:white;padding:8px;text-align:center;border:1px solid #6d28d9;">金額</th><th style="background:#7c3aed;color:white;padding:8px;text-align:center;border:1px solid #6d28d9;">貸方</th><th style="background:#7c3aed;color:white;padding:8px;text-align:center;border:1px solid #6d28d9;">金額</th></tr>
<tr><td style="padding:10px;text-align:center;border:1px solid var(--border);font-weight:700;">備品</td><td style="padding:10px;text-align:center;border:1px solid var(--border);">100,000</td><td style="padding:10px;text-align:center;border:1px solid var(--border);font-weight:700;">消耗品費</td><td style="padding:10px;text-align:center;border:1px solid var(--border);">100,000</td></tr>
</table>
<p style="margin-top:8px;font-size:0.85rem;">取消と正しい仕訳で「現金」が相殺されるので、最終的に「備品 ←→ 消耗品費」の振替になります。</p>
</div>

<h3>逆仕訳とは</h3>
<p><strong>逆仕訳</strong>は、ある仕訳の借方と貸方を入れ替えた仕訳のことです。主に以下の場面で使います。</p>
<ul>
<li>訂正仕訳の第1ステップ（取消仕訳）</li>
<li>期首の再振替仕訳（決算整理の翌期首に行う）</li>
<li>取引の取消し</li>
</ul>

<div class="compare-grid">
<div class="compare-card">
<h4>元の仕訳</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr><th style="background:#2563eb;color:white;padding:6px;text-align:center;border:1px solid #1d4ed8;">借方</th><th style="background:#dc2626;color:white;padding:6px;text-align:center;border:1px solid #b91c1c;">貸方</th></tr>
<tr><td style="padding:8px;text-align:center;border:1px solid var(--border);">仕入 100,000</td><td style="padding:8px;text-align:center;border:1px solid var(--border);">現金 100,000</td></tr>
</table>
</div>
<div class="compare-card">
<h4>逆仕訳</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr><th style="background:#2563eb;color:white;padding:6px;text-align:center;border:1px solid #1d4ed8;">借方</th><th style="background:#dc2626;color:white;padding:6px;text-align:center;border:1px solid #b91c1c;">貸方</th></tr>
<tr><td style="padding:8px;text-align:center;border:1px solid var(--border);">現金 100,000</td><td style="padding:8px;text-align:center;border:1px solid var(--border);">仕入 100,000</td></tr>
</table>
</div>
</div>

<h3>よくある仕訳ミスとその対策</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>借方と貸方を逆にしてしまう</strong>
対策：必ず「何が増えた？何が減った？」を確認し、ホームポジション表に照らし合わせる。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>勘定科目の間違い</strong>
対策：似た名前の科目（売掛金と買掛金、貸付金と借入金など）は特に注意。「誰が払う？誰がもらう？」で区別する。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>金額の間違い</strong>
対策：借方合計＝貸方合計を毎回確認する習慣をつける。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>仕訳の脱落（記帳し忘れ）</strong>
対策：取引があったら即座に仕訳する。証憑（しょうひょう：領収書など）と突き合わせる。
</div>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">間違えやすい勘定科目ペア</div>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
<tr><th style="background:var(--primary);color:white;padding:8px;border:1px solid var(--primary);">間違えやすいペア</th><th style="background:var(--primary);color:white;padding:8px;border:1px solid var(--primary);">区別のコツ</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border);font-weight:600;">売掛金 vs 買掛金</td><td style="padding:8px;border:1px solid var(--border);">売掛金は「売った」相手に請求する権利（資産）、買掛金は「買った」代金を払う義務（負債）</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);font-weight:600;">貸付金 vs 借入金</td><td style="padding:8px;border:1px solid var(--border);">貸付金は「貸した」お金を返してもらう権利（資産）、借入金は「借りた」お金を返す義務（負債）</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);font-weight:600;">未収入金 vs 未払金</td><td style="padding:8px;border:1px solid var(--border);">未収入金は「まだ受け取っていない」代金（資産）、未払金は「まだ払っていない」代金（負債）</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);font-weight:600;">前払金 vs 前受金</td><td style="padding:8px;border:1px solid var(--border);">前払金は「先に払った」お金（資産）、前受金は「先にもらった」お金（負債）</td></tr>
</table>
</div>

<div class="visual-box">
<div class="visual-box-title">訂正仕訳の考え方フローチャート</div>
<table style="width:100%;border-collapse:collapse;">
<tr><td style="padding:16px;text-align:center;background:#fee2e2;border:2px solid #ef4444;border-radius:8px;font-weight:700;">間違いを発見！</td></tr>
<tr><td style="text-align:center;padding:8px;font-size:1.5rem;">↓</td></tr>
<tr><td style="padding:16px;text-align:center;background:#fef3c7;border:2px solid #f59e0b;border-radius:8px;font-weight:700;">ステップ1：間違った仕訳の逆仕訳を作る（借方⇔貸方を入替え）</td></tr>
<tr><td style="text-align:center;padding:8px;font-size:1.5rem;">↓</td></tr>
<tr><td style="padding:16px;text-align:center;background:#dbeafe;border:2px solid #2563eb;border-radius:8px;font-weight:700;">ステップ2：正しい仕訳を作る</td></tr>
<tr><td style="text-align:center;padding:8px;font-size:1.5rem;">↓</td></tr>
<tr><td style="padding:16px;text-align:center;background:#d1fae5;border:2px solid #10b981;border-radius:8px;font-weight:700;">ステップ3：ステップ1+2をまとめて相殺 → 訂正仕訳完成！</td></tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">Level 2 まとめ</div>
このレベルで学んだこと：<br>
1. <strong>仕訳のルール</strong> - 5要素の増減と借方・貸方の対応関係<br>
2. <strong>基本仕訳10パターン</strong> - 頻出取引の仕訳方法<br>
3. <strong>勘定口座と転記</strong> - T字勘定の構造と転記ルール<br>
4. <strong>試算表</strong> - 3種類の試算表と検証方法<br>
5. <strong>仕訳の応用</strong> - 複合仕訳・訂正仕訳・逆仕訳<br><br>
次のレベルでは、具体的な取引（現金・預金・商品売買など）の仕訳を詳しく学んでいきます！
</div>
            `,
            quiz: [
                {
                    id: "q205_1",
                    type: "choice",
                    question: "商品300,000円を仕入れ、200,000円を現金で支払い、残りを掛けとした。この仕訳の貸方に来る勘定科目をすべて選んでください。",
                    options: [
                        "現金200,000と買掛金100,000",
                        "現金300,000",
                        "買掛金300,000",
                        "仕入300,000"
                    ],
                    answer: 0,
                    explanation: "これは複合仕訳です。（借方）仕入 300,000 ／（貸方）現金 200,000、買掛金 100,000。貸方に現金と買掛金の2つが来ます。借方合計300,000 = 貸方合計300,000で一致します。"
                },
                {
                    id: "q205_2",
                    type: "choice",
                    question: "備品50,000円を現金で購入したが、誤って「消耗品費」として仕訳してしまった。訂正仕訳として正しいものはどれですか？",
                    options: [
                        "（借方）備品 50,000 ／（貸方）消耗品費 50,000",
                        "（借方）消耗品費 50,000 ／（貸方）備品 50,000",
                        "（借方）備品 50,000 ／（貸方）現金 50,000",
                        "（借方）現金 50,000 ／（貸方）消耗品費 50,000"
                    ],
                    answer: 0,
                    explanation: "取消仕訳で消耗品費を貸方に戻し、正しい仕訳で備品を借方に。まとめると「（借方）備品 50,000 ／（貸方）消耗品費 50,000」になります。現金は相殺されて消えます。"
                },
                {
                    id: "q205_3",
                    type: "fill",
                    question: "ある仕訳の借方と貸方を入れ替えた仕訳を「＿＿仕訳」といいます。（漢字1文字で）",
                    answer: "逆",
                    explanation: "逆仕訳は、元の仕訳の借方と貸方を入れ替えた仕訳です。訂正仕訳の第1ステップ（取消仕訳）として使われます。"
                },
                {
                    id: "q205_4",
                    type: "choice",
                    question: "複合仕訳について正しい説明はどれですか？",
                    options: [
                        "借方合計と貸方合計が異なってもよい",
                        "借方または貸方（あるいは両方）に複数の勘定科目が入る仕訳",
                        "必ず3つ以上の勘定科目が必要",
                        "訂正仕訳の別名である"
                    ],
                    answer: 1,
                    explanation: "複合仕訳は、借方または貸方（あるいは両方）に複数の勘定科目が入る仕訳です。ただし、借方合計＝貸方合計のルールは変わりません。"
                },
                {
                    id: "q205_5",
                    type: "choice",
                    question: "「売掛金」と「買掛金」の説明として正しいものはどれですか？",
                    options: [
                        "売掛金は負債、買掛金は資産",
                        "売掛金は資産、買掛金は負債",
                        "どちらも資産",
                        "どちらも負債"
                    ],
                    answer: 1,
                    explanation: "売掛金は商品を掛けで売った場合の代金を受け取る権利なので「資産」です。買掛金は商品を掛けで仕入れた場合の代金を支払う義務なので「負債」です。"
                }
            ]
        }
    ]
};
