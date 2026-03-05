// ============================================
//  簿記3級アカデミー - Level 5: 決算整理
// ============================================

const LEVEL5_DATA = {
    id: 5,
    title: "決算整理",
    icon: "📋",
    description: "決算整理仕訳と精算表を完全攻略",
    modules: [

// ============================================
// Module 501: 決算の流れ
// ============================================
{
    id: 501,
    title: "決算の流れ",
    duration: "15分",
    content: `
<h2>📋 決算の流れ</h2>

<div class="info-box tip">
<strong>💡 この章のポイント</strong><br>
決算は「1年間の成績表」を作るための手続きです。日商簿記3級では、決算整理仕訳と精算表の作成が頻出テーマです！
</div>

<h3>📌 決算とは？</h3>
<p>決算とは、<strong>一定期間（会計期間）の経営成績と財政状態を明らかにする手続き</strong>のことです。</p>

<div class="visual-box">
<table style="width:100%;text-align:center;border-collapse:collapse;">
<tr>
<td style="padding:12px;background:#e0f2fe;border-radius:8px;font-weight:bold;">期首<br>4/1</td>
<td style="padding:12px;font-size:1.5rem;">→→→</td>
<td style="padding:12px;background:#fef9c3;border-radius:8px;font-weight:bold;">会計期間<br>（1年間）<br>日常の取引を記録</td>
<td style="padding:12px;font-size:1.5rem;">→→→</td>
<td style="padding:12px;background:#fce7f3;border-radius:8px;font-weight:bold;">期末<br>3/31<br><span style="color:#dc2626;">★決算★</span></td>
</tr>
</table>
</div>

<h3>📌 会計期間の用語</h3>
<table border="1" style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:var(--bg-card);"><th style="padding:10px;border:1px solid var(--border);">用語</th><th style="padding:10px;border:1px solid var(--border);">意味</th><th style="padding:10px;border:1px solid var(--border);">例</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border);font-weight:bold;">会計期間</td><td style="padding:10px;border:1px solid var(--border);">成績を計算する期間</td><td style="padding:10px;border:1px solid var(--border);">4月1日〜3月31日（1年間）</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border);font-weight:bold;">期首（きしゅ）</td><td style="padding:10px;border:1px solid var(--border);">会計期間の最初の日</td><td style="padding:10px;border:1px solid var(--border);">4月1日</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border);font-weight:bold;">期末（きまつ）</td><td style="padding:10px;border:1px solid var(--border);">会計期間の最後の日</td><td style="padding:10px;border:1px solid var(--border);">3月31日</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border);font-weight:bold;">当期</td><td style="padding:10px;border:1px solid var(--border);">今の会計期間</td><td style="padding:10px;border:1px solid var(--border);">×2年4月1日〜×3年3月31日</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border);font-weight:bold;">前期</td><td style="padding:10px;border:1px solid var(--border);">1つ前の会計期間</td><td style="padding:10px;border:1px solid var(--border);">×1年4月1日〜×2年3月31日</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border);font-weight:bold;">翌期（次期）</td><td style="padding:10px;border:1px solid var(--border);">次の会計期間</td><td style="padding:10px;border:1px solid var(--border);">×3年4月1日〜×4年3月31日</td></tr>
</table>

<h3>📌 決算の手順（全体フロー）</h3>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>日常の仕訳・転記</strong><br>会計期間中に発生した取引を仕訳帳に記入し、総勘定元帳に転記する。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>試算表の作成</strong><br>総勘定元帳の各勘定の残高を集計し、記帳の正確性を確認する。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>決算整理仕訳</strong><br>期末に必要な修正を行う。<span style="color:#dc2626;">（ここが最重要！）</span><br>例：売上原価の算定、貸倒引当金、減価償却、経過勘定 など</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>精算表の作成</strong><br>試算表＋決算整理仕訳を1つの表にまとめる（8桁精算表）。</div></div>
<div class="step"><div class="step-num">5</div><div class="step-content"><strong>財務諸表の作成</strong><br>損益計算書（P/L）と貸借対照表（B/S）を作成する。</div></div>
<div class="step"><div class="step-num">6</div><div class="step-content"><strong>帳簿の締切</strong><br>各勘定を締め切り、次期に繰り越す。</div></div>
</div>

<h3>📌 なぜ決算整理が必要なのか？</h3>

<div class="info-box warning">
<strong>⚠️ 重要な原則</strong><br>
簿記では<strong>「発生主義」</strong>と<strong>「費用収益対応の原則」</strong>に基づいて、正しい期間の損益を計算する必要があります。
</div>

<div class="compare-grid">
<div class="compare-card">
<h4>発生主義</h4>
<p>現金の受払いに関係なく、<strong>経済的事実が発生した時点</strong>で収益・費用を認識する。</p>
<p style="font-size:0.85rem;color:var(--text-secondary);">例：12月に受けたサービスの代金を1月に払っても、費用は12月に計上する。</p>
</div>
<div class="compare-card">
<h4>費用収益対応の原則</h4>
<p>ある期間の<strong>収益に対応する費用</strong>を同じ期間に計上する。</p>
<p style="font-size:0.85rem;color:var(--text-secondary);">例：当期の売上に対応する仕入原価（売上原価）を当期の費用にする。</p>
</div>
</div>

<div class="info-box tip">
<strong>💡 決算整理の具体例</strong><br>
日常の仕訳だけでは対応できないもの：<br>
・売上原価の計算（しーくりくりしー）<br>
・貸倒引当金の設定<br>
・減価償却費の計上<br>
・経過勘定の処理（前払・未払・前受・未収）<br>
これらを <strong>決算整理仕訳</strong> で修正します！
</div>

<h3>📌 決算整理仕訳の一覧（Level 5 で学ぶ内容）</h3>
<table border="1" style="width:100%;border-collapse:collapse;margin:16px 0;">
<tr style="background:var(--bg-card);"><th style="padding:10px;border:1px solid var(--border);">決算整理事項</th><th style="padding:10px;border:1px solid var(--border);">学習モジュール</th><th style="padding:10px;border:1px solid var(--border);">重要度</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border);">売上原価の算定</td><td style="padding:10px;border:1px solid var(--border);">Module 502</td><td style="padding:10px;border:1px solid var(--border);">★★★</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border);">貸倒引当金の設定</td><td style="padding:10px;border:1px solid var(--border);">Module 502</td><td style="padding:10px;border:1px solid var(--border);">★★★</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border);">経過勘定の処理</td><td style="padding:10px;border:1px solid var(--border);">Module 503</td><td style="padding:10px;border:1px solid var(--border);">★★★</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border);">減価償却費の計上</td><td style="padding:10px;border:1px solid var(--border);">Module 504</td><td style="padding:10px;border:1px solid var(--border);">★★★</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border);">精算表の作成</td><td style="padding:10px;border:1px solid var(--border);">Module 504</td><td style="padding:10px;border:1px solid var(--border);">★★★</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border);">帳簿の締切</td><td style="padding:10px;border:1px solid var(--border);">Module 505</td><td style="padding:10px;border:1px solid var(--border);">★★☆</td></tr>
</table>

<div class="info-box success">
<strong>✅ まとめ</strong><br>
決算は「日常の仕訳→試算表→<strong>決算整理仕訳</strong>→精算表→財務諸表→帳簿の締切」の流れで行います。<br>
試験では特に<strong>決算整理仕訳と精算表</strong>が頻出です。次のモジュールから具体的な仕訳を学んでいきましょう！
</div>
`,
    quiz: [
        {
            id: "q501_1",
            type: "choice",
            question: "決算整理仕訳を行う主な目的として、最も適切なものはどれですか？",
            options: [
                "発生主義に基づいて正しい期間の損益を計算するため",
                "現金の入出金を正確に記録するため",
                "仕訳帳の記入ミスを訂正するため",
                "取引先に請求書を送るため"
            ],
            answer: 0,
            explanation: "決算整理仕訳は、発生主義と費用収益対応の原則に基づき、当期の正しい損益を計算するために行います。現金主義ではなく発生主義で処理するため、期末に調整が必要になるのです。"
        },
        {
            id: "q501_2",
            type: "choice",
            question: "決算の手順として正しい順序はどれですか？",
            options: [
                "試算表→決算整理仕訳→精算表→財務諸表",
                "決算整理仕訳→試算表→財務諸表→精算表",
                "精算表→試算表→決算整理仕訳→財務諸表",
                "財務諸表→精算表→試算表→決算整理仕訳"
            ],
            answer: 0,
            explanation: "正しい決算の手順は「試算表の作成→決算整理仕訳→精算表の作成→財務諸表の作成→帳簿の締切」です。まず試算表で日常の記録を確認し、決算整理で修正を行い、精算表にまとめてから財務諸表を完成させます。"
        },
        {
            id: "q501_3",
            type: "fill",
            question: "会計期間の最初の日を「○○」、最後の日を「○○」といいます。最初の日の用語を漢字2文字で答えてください。",
            answer: "期首",
            explanation: "会計期間の最初の日を「期首（きしゅ）」、最後の日を「期末（きまつ）」といいます。決算日は期末にあたります。"
        },
        {
            id: "q501_4",
            type: "choice",
            question: "次のうち、決算整理仕訳に該当しないものはどれですか？",
            options: [
                "商品を掛けで仕入れた",
                "売上原価の算定を行った",
                "減価償却費を計上した",
                "貸倒引当金を設定した"
            ],
            answer: 0,
            explanation: "「商品を掛けで仕入れた」は日常の取引の仕訳であり、決算整理仕訳ではありません。売上原価の算定、減価償却費の計上、貸倒引当金の設定はいずれも決算時に行う決算整理仕訳です。"
        },
        {
            id: "q501_5",
            type: "choice",
            question: "「費用収益対応の原則」の説明として正しいものはどれですか？",
            options: [
                "現金を受け取った期に収益を計上する",
                "費用は発生しないようにする原則",
                "ある期間の収益に対応する費用を同じ期間に計上する",
                "収益と費用が同額になるようにする原則"
            ],
            answer: 2,
            explanation: "費用収益対応の原則とは、ある期間の収益を獲得するために要した費用を同じ期間に計上するという原則です。これにより、当期の正しい損益（利益または損失）が計算できます。"
        }
    ]
},

// ============================================
// Module 502: 売上原価と貸倒引当金
// ============================================
{
    id: 502,
    title: "売上原価と貸倒引当金",
    duration: "25分",
    content: `
<h2>📋 売上原価と貸倒引当金</h2>

<div class="info-box tip">
<strong>💡 超重要！試験に必ず出る</strong><br>
売上原価の算定（しーくりくりしー）と貸倒引当金は、日商簿記3級の決算問題で毎回出題される最頻出テーマです！
</div>

<h3>📌 売上原価とは？</h3>
<p><strong>売上原価</strong>とは、当期に売れた商品の仕入原価のことです。当期の仕入高全額ではありません。</p>

<div class="visual-box">
<h4 style="text-align:center;margin-bottom:12px;">売上原価のボックス図</h4>
<table style="width:100%;border-collapse:collapse;text-align:center;">
<tr>
<td style="width:35%;padding:8px;">
<div style="background:#dbeafe;border:2px solid #2563eb;border-radius:8px;padding:16px;">
<strong>期首商品棚卸高</strong><br>
（前期から繰り越した商品）<br>
<span style="font-size:1.3rem;font-weight:bold;">¥100</span>
</div>
</td>
<td style="width:10%;font-size:1.5rem;font-weight:bold;">＋</td>
<td style="width:35%;padding:8px;">
<div style="background:#dcfce7;border:2px solid #16a34a;border-radius:8px;padding:16px;">
<strong>当期仕入高</strong><br>
（当期に仕入れた商品）<br>
<span style="font-size:1.3rem;font-weight:bold;">¥500</span>
</div>
</td>
<td style="width:5%;font-size:1.5rem;font-weight:bold;">＝</td>
<td style="width:15%;padding:8px;">
<div style="background:#f3e8ff;border:2px solid #7c3aed;border-radius:8px;padding:8px;font-size:0.85rem;">
合計<br>¥600
</div>
</td>
</tr>
</table>
<div style="text-align:center;margin:12px 0;font-size:1.3rem;">⬇</div>
<table style="width:100%;border-collapse:collapse;text-align:center;">
<tr>
<td style="width:55%;padding:8px;">
<div style="background:#fef3c7;border:2px solid #d97706;border-radius:8px;padding:16px;">
<strong>★ 売上原価（売れた分）</strong><br>
<span style="font-size:1.5rem;font-weight:bold;color:#dc2626;">¥600 − ¥150 = ¥450</span>
</div>
</td>
<td style="width:10%;font-size:1.5rem;font-weight:bold;">＋</td>
<td style="width:35%;padding:8px;">
<div style="background:#fce7f3;border:2px solid #db2777;border-radius:8px;padding:16px;">
<strong>期末商品棚卸高</strong><br>
（売れ残った商品）<br>
<span style="font-size:1.3rem;font-weight:bold;">¥150</span>
</div>
</td>
</tr>
</table>
</div>

<div class="info-box warning">
<strong>⚠️ 公式を暗記！</strong><br>
<span style="font-size:1.1rem;font-weight:bold;">売上原価 ＝ 期首商品棚卸高 ＋ 当期仕入高 − 期末商品棚卸高</span>
</div>

<h3>📌 しーくりくりしー（売上原価の仕訳）</h3>
<p>3級では「仕入」勘定で売上原価を計算します。決算整理仕訳は2つセットで覚えましょう。</p>

<div class="visual-box">
<h4 style="text-align:center;margin-bottom:12px;">「しーくりくりしー」の覚え方</h4>
<table style="width:100%;border-collapse:collapse;text-align:center;">
<tr>
<td style="padding:12px;">
<div style="background:#fee2e2;border:2px solid #dc2626;border-radius:12px;padding:20px;">
<div style="font-size:1.8rem;font-weight:bold;color:#dc2626;">し・くり / くり・し</div>
<div style="margin-top:8px;font-size:0.95rem;">
<strong>し</strong>＝仕入 / <strong>くり</strong>＝繰越商品
</div>
</div>
</td>
</tr>
</table>
</div>

<h4>仕訳1: 期首商品を仕入に振替（しーくり）</h4>
<table border="1" style="width:100%;border-collapse:collapse;margin:12px 0;">
<tr style="background:var(--bg-card);"><th style="padding:10px;border:1px solid var(--border);width:50%;">借方（左）</th><th style="padding:10px;border:1px solid var(--border);width:50%;">貸方（右）</th></tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);color:#2563eb;font-weight:bold;">仕入 ×××</td>
<td style="padding:10px;border:1px solid var(--border);color:#dc2626;font-weight:bold;">繰越商品 ×××</td>
</tr>
</table>
<p style="font-size:0.9rem;color:var(--text-secondary);">→ 期首の在庫（繰越商品）を仕入勘定に加える。これで仕入勘定に「期首棚卸高＋当期仕入高」が集まる。</p>

<h4>仕訳2: 期末商品を繰越商品に振替（くりしー）</h4>
<table border="1" style="width:100%;border-collapse:collapse;margin:12px 0;">
<tr style="background:var(--bg-card);"><th style="padding:10px;border:1px solid var(--border);width:50%;">借方（左）</th><th style="padding:10px;border:1px solid var(--border);width:50%;">貸方（右）</th></tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);color:#2563eb;font-weight:bold;">繰越商品 ×××</td>
<td style="padding:10px;border:1px solid var(--border);color:#dc2626;font-weight:bold;">仕入 ×××</td>
</tr>
</table>
<p style="font-size:0.9rem;color:var(--text-secondary);">→ 期末の在庫（売れ残り）を仕入勘定から差し引く。残った仕入勘定の金額が売上原価になる。</p>

<div class="steps">
<div class="step"><div class="step-num">例</div><div class="step-content">
<strong>例題</strong>：期首商品棚卸高 ¥80,000、当期仕入高 ¥500,000、期末商品棚卸高 ¥120,000<br><br>
<strong>仕訳1（しーくり）：</strong><br>
（借）仕入 80,000 ／（貸）繰越商品 80,000<br><br>
<strong>仕訳2（くりしー）：</strong><br>
（借）繰越商品 120,000 ／（貸）仕入 120,000<br><br>
<strong>売上原価</strong> = 80,000 + 500,000 − 120,000 = <strong style="color:#dc2626;">¥460,000</strong>
</div></div>
</div>

<h3 style="margin-top:32px;">📌 貸倒引当金</h3>
<p><strong>貸倒れ</strong>とは、売掛金や受取手形などの債権が回収できなくなることです。<br>
決算時に、将来の貸倒れに備えて<strong>貸倒引当金</strong>を設定します。</p>

<h4>差額補充法</h4>
<p>3級では<strong>差額補充法</strong>を使います。必要額と既存残高の差額だけを追加計上します。</p>

<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>必要な貸倒引当金を計算</strong><br>売掛金・受取手形の期末残高 × 貸倒設定率</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>差額を計算</strong><br>必要額 − 貸倒引当金の既存残高 ＝ 追加計上額</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>仕訳を行う</strong><br>（借）貸倒引当金繰入 ×××／（貸）貸倒引当金 ×××</div></div>
</div>

<h4>貸倒引当金の設定（決算整理仕訳）</h4>
<table border="1" style="width:100%;border-collapse:collapse;margin:12px 0;">
<tr style="background:var(--bg-card);"><th style="padding:10px;border:1px solid var(--border);width:50%;">借方（左）</th><th style="padding:10px;border:1px solid var(--border);width:50%;">貸方（右）</th></tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);color:#2563eb;font-weight:bold;">貸倒引当金繰入 ×××</td>
<td style="padding:10px;border:1px solid var(--border);color:#dc2626;font-weight:bold;">貸倒引当金 ×××</td>
</tr>
</table>

<div class="steps">
<div class="step"><div class="step-num">例</div><div class="step-content">
<strong>例題</strong>：期末の売掛金残高 ¥300,000、貸倒設定率 2%、貸倒引当金の既存残高 ¥2,000<br><br>
必要額：300,000 × 2% = ¥6,000<br>
追加計上額：6,000 − 2,000 = <strong>¥4,000</strong><br><br>
（借）貸倒引当金繰入 4,000 ／（貸）貸倒引当金 4,000
</div></div>
</div>

<h4>貸倒れが発生した場合の処理</h4>
<div class="compare-grid">
<div class="compare-card">
<h4>引当金がある場合</h4>
<p>まず貸倒引当金を取り崩す</p>
<table border="1" style="width:100%;border-collapse:collapse;margin:8px 0;font-size:0.9rem;">
<tr><th style="padding:6px;border:1px solid var(--border);">借方</th><th style="padding:6px;border:1px solid var(--border);">貸方</th></tr>
<tr><td style="padding:6px;border:1px solid var(--border);">貸倒引当金 ×××</td><td style="padding:6px;border:1px solid var(--border);">売掛金 ×××</td></tr>
</table>
<p style="font-size:0.85rem;">引当金を超える分は「貸倒損失」で処理</p>
</div>
<div class="compare-card">
<h4>引当金がない場合</h4>
<p>全額を貸倒損失として処理</p>
<table border="1" style="width:100%;border-collapse:collapse;margin:8px 0;font-size:0.9rem;">
<tr><th style="padding:6px;border:1px solid var(--border);">借方</th><th style="padding:6px;border:1px solid var(--border);">貸方</th></tr>
<tr><td style="padding:6px;border:1px solid var(--border);">貸倒損失 ×××</td><td style="padding:6px;border:1px solid var(--border);">売掛金 ×××</td></tr>
</table>
</div>
</div>

<div class="info-box success">
<strong>✅ まとめ</strong><br>
・売上原価＝期首棚卸高＋当期仕入高−期末棚卸高<br>
・「しーくりくりしー」は必ず覚える！<br>
・貸倒引当金は差額補充法（必要額−既存残高）で計上<br>
・貸倒発生時は引当金を取り崩し、不足分は貸倒損失
</div>
`,
    quiz: [
        {
            id: "q502_1",
            type: "choice",
            question: "期首商品棚卸高¥50,000、当期仕入高¥400,000、期末商品棚卸高¥70,000のとき、売上原価はいくらですか？",
            options: [
                "¥380,000",
                "¥420,000",
                "¥450,000",
                "¥520,000"
            ],
            answer: 0,
            explanation: "売上原価 = 期首商品棚卸高 + 当期仕入高 − 期末商品棚卸高 = 50,000 + 400,000 − 70,000 = ¥380,000 です。「しーくりくりしー」の仕訳により、仕入勘定で売上原価が計算されます。"
        },
        {
            id: "q502_2",
            type: "choice",
            question: "「しーくりくりしー」の2番目の仕訳（くりしー）として正しいものはどれですか？",
            options: [
                "（借）仕入 ／（貸）繰越商品",
                "（借）繰越商品 ／（貸）仕入",
                "（借）売上原価 ／（貸）仕入",
                "（借）繰越商品 ／（貸）売上"
            ],
            answer: 1,
            explanation: "「くりしー」は（借）繰越商品 ／（貸）仕入 です。期末の在庫を仕入勘定から差し引いて繰越商品勘定に振り替えます。1番目の「しーくり」は（借）仕入 ／（貸）繰越商品 で、期首の在庫を仕入勘定に加えます。"
        },
        {
            id: "q502_3",
            type: "fill",
            question: "売掛金の期末残高¥200,000に対して3%の貸倒引当金を設定します。貸倒引当金の既存残高が¥1,000のとき、貸倒引当金繰入の金額はいくらですか？（数字のみ回答）",
            answer: "5000",
            explanation: "必要額 = 200,000 × 3% = ¥6,000。差額補充法により、追加計上額 = 6,000 − 1,000 = ¥5,000 です。（借）貸倒引当金繰入 5,000 ／（貸）貸倒引当金 5,000"
        },
        {
            id: "q502_4",
            type: "choice",
            question: "売掛金¥50,000が貸倒れた。貸倒引当金の残高が¥30,000ある場合の仕訳として正しいものはどれですか？",
            options: [
                "（借）貸倒引当金 50,000 ／（貸）売掛金 50,000",
                "（借）貸倒引当金 30,000・貸倒損失 20,000 ／（貸）売掛金 50,000",
                "（借）貸倒損失 50,000 ／（貸）売掛金 50,000",
                "（借）貸倒引当金繰入 50,000 ／（貸）売掛金 50,000"
            ],
            answer: 1,
            explanation: "貸倒引当金の残高¥30,000をまず取り崩し、不足する¥20,000は貸倒損失として処理します。（借）貸倒引当金 30,000・貸倒損失 20,000 ／（貸）売掛金 50,000"
        },
        {
            id: "q502_5",
            type: "choice",
            question: "貸倒引当金の設定方法で、3級で学習するのはどれですか？",
            options: [
                "洗替法",
                "差額補充法",
                "個別評価法",
                "一括評価法"
            ],
            answer: 1,
            explanation: "簿記3級では差額補充法を学習します。差額補充法は、必要な貸倒引当金の金額と既存の残高の差額だけを追加計上する方法です。"
        }
    ]
},

// ============================================
// Module 503: 経過勘定
// ============================================
{
    id: 503,
    title: "経過勘定",
    duration: "25分",
    content: `
<h2>📋 経過勘定（超重要！）</h2>

<div class="info-box warning">
<strong>⚠️ 試験の最頻出テーマ！</strong><br>
経過勘定は簿記3級で最も間違えやすく、最も出題される分野です。4つのパターンを完璧に整理しましょう！
</div>

<h3>📌 経過勘定とは？</h3>
<p>経過勘定とは、<strong>費用・収益を正しい期間に帰属させるための決算整理仕訳で使う勘定科目</strong>です。<br>
「まだ払っていないけど当期の費用」「もう払ったけど来期の費用」などを調整します。</p>

<h3>📌 4つのパターン</h3>

<div class="visual-box">
<h4 style="text-align:center;margin-bottom:16px;">経過勘定 4パターン 一覧表</h4>
<table border="1" style="width:100%;border-collapse:collapse;text-align:center;">
<tr style="background:var(--bg-card);">
<th style="padding:10px;border:1px solid var(--border);"></th>
<th style="padding:10px;border:1px solid var(--border);background:#dbeafe;">費用系</th>
<th style="padding:10px;border:1px solid var(--border);background:#dcfce7;">収益系</th>
</tr>
<tr>
<th style="padding:10px;border:1px solid var(--border);background:#fef3c7;">先に支払/受取済み<br>（前払い・前受け）</th>
<td style="padding:10px;border:1px solid var(--border);background:#eff6ff;"><strong style="color:#2563eb;font-size:1.1rem;">前払費用</strong><br>（資産）<br><span style="font-size:0.85rem;">来期分を先に払った</span></td>
<td style="padding:10px;border:1px solid var(--border);background:#f0fdf4;"><strong style="color:#16a34a;font-size:1.1rem;">前受収益</strong><br>（負債）<br><span style="font-size:0.85rem;">来期分を先にもらった</span></td>
</tr>
<tr>
<th style="padding:10px;border:1px solid var(--border);background:#fef3c7;">まだ未払/未収<br>（未払い・未収）</th>
<td style="padding:10px;border:1px solid var(--border);background:#eff6ff;"><strong style="color:#2563eb;font-size:1.1rem;">未払費用</strong><br>（負債）<br><span style="font-size:0.85rem;">当期分をまだ払っていない</span></td>
<td style="padding:10px;border:1px solid var(--border);background:#f0fdf4;"><strong style="color:#16a34a;font-size:1.1rem;">未収収益</strong><br>（資産）<br><span style="font-size:0.85rem;">当期分をまだもらっていない</span></td>
</tr>
</table>
</div>

<div class="info-box tip">
<strong>💡 覚え方のコツ</strong><br>
・<strong>「前」がつく → 先に現金が動いている</strong>（前払＝払った、前受＝もらった）<br>
・<strong>「未」がつく → まだ現金が動いていない</strong>（未払＝まだ払ってない、未収＝まだもらってない）<br>
・<strong>費用系は「費用を減らす or 増やす」</strong><br>
・<strong>収益系は「収益を減らす or 増やす」</strong>
</div>

<h3>📌 パターン1：前払費用（費用の前払い）</h3>
<p>当期に支払った費用のうち、<strong>来期に属する分</strong>を当期の費用から除く。</p>

<div class="visual-box">
<h4 style="text-align:center;">タイムライン：前払費用</h4>
<table style="width:100%;text-align:center;border-collapse:collapse;">
<tr>
<td style="padding:8px;width:40%;">
<div style="background:#dbeafe;border:2px solid #2563eb;border-radius:8px;padding:12px;">
<strong>当期</strong><br>
支払日 → 期末<br>
<span style="color:#2563eb;font-weight:bold;">当期の費用 ○</span>
</div>
</td>
<td style="padding:8px;width:10%;">|<br>期末</td>
<td style="padding:8px;width:40%;">
<div style="background:#fee2e2;border:2px solid #dc2626;border-radius:8px;padding:12px;">
<strong>来期</strong><br>
期末 → 契約終了<br>
<span style="color:#dc2626;font-weight:bold;">来期の費用（→前払費用）</span>
</div>
</td>
</tr>
</table>
</div>

<h4>決算整理仕訳</h4>
<table border="1" style="width:100%;border-collapse:collapse;margin:12px 0;">
<tr style="background:var(--bg-card);"><th style="padding:10px;border:1px solid var(--border);">借方（左）</th><th style="padding:10px;border:1px solid var(--border);">貸方（右）</th></tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);color:#2563eb;font-weight:bold;">前払○○（資産↑）</td>
<td style="padding:10px;border:1px solid var(--border);color:#dc2626;font-weight:bold;">○○費（費用↓）</td>
</tr>
</table>
<p style="font-size:0.9rem;">例：前払保険料 / 保険料、前払家賃 / 支払家賃</p>

<div class="steps">
<div class="step"><div class="step-num">例</div><div class="step-content">
<strong>例題</strong>：10月1日に向こう1年分の保険料¥120,000を支払った。決算日は3月31日。<br><br>
当期分：10月〜3月＝<strong>6ヶ月分</strong><br>
来期分：4月〜9月＝<strong>6ヶ月分</strong><br>
前払額：120,000 × 6/12 = <strong>¥60,000</strong><br><br>
（借）前払保険料 60,000 ／（貸）保険料 60,000
</div></div>
</div>

<h3>📌 パターン2：未払費用（費用の未払い）</h3>
<p>当期に属する費用のうち、<strong>まだ支払っていない分</strong>を当期の費用に加える。</p>

<div class="visual-box">
<h4 style="text-align:center;">タイムライン：未払費用</h4>
<table style="width:100%;text-align:center;border-collapse:collapse;">
<tr>
<td style="padding:8px;width:40%;">
<div style="background:#dcfce7;border:2px solid #16a34a;border-radius:8px;padding:12px;">
<strong>当期</strong><br>
借入日 → 期末<br>
<span style="color:#16a34a;font-weight:bold;">当期の費用（→未払費用）</span><br>
<span style="font-size:0.85rem;">まだ払っていない！</span>
</div>
</td>
<td style="padding:8px;width:10%;">|<br>期末</td>
<td style="padding:8px;width:40%;">
<div style="background:#f3f4f6;border:2px solid #9ca3af;border-radius:8px;padding:12px;">
<strong>来期</strong><br>
支払日に精算
</div>
</td>
</tr>
</table>
</div>

<h4>決算整理仕訳</h4>
<table border="1" style="width:100%;border-collapse:collapse;margin:12px 0;">
<tr style="background:var(--bg-card);"><th style="padding:10px;border:1px solid var(--border);">借方（左）</th><th style="padding:10px;border:1px solid var(--border);">貸方（右）</th></tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);color:#2563eb;font-weight:bold;">○○費（費用↑）</td>
<td style="padding:10px;border:1px solid var(--border);color:#dc2626;font-weight:bold;">未払○○（負債↑）</td>
</tr>
</table>
<p style="font-size:0.9rem;">例：支払利息 / 未払利息</p>

<div class="steps">
<div class="step"><div class="step-num">例</div><div class="step-content">
<strong>例題</strong>：12月1日に¥600,000を年利4%で借り入れた。利息は5月31日に支払う。決算日は3月31日。<br><br>
当期分：12月〜3月＝<strong>4ヶ月分</strong><br>
未払利息：600,000 × 4% × 4/12 = <strong>¥8,000</strong><br><br>
（借）支払利息 8,000 ／（貸）未払利息 8,000
</div></div>
</div>

<h3>📌 パターン3：前受収益（収益の前受け）</h3>
<p>当期に受け取った収益のうち、<strong>来期に属する分</strong>を当期の収益から除く。</p>

<h4>決算整理仕訳</h4>
<table border="1" style="width:100%;border-collapse:collapse;margin:12px 0;">
<tr style="background:var(--bg-card);"><th style="padding:10px;border:1px solid var(--border);">借方（左）</th><th style="padding:10px;border:1px solid var(--border);">貸方（右）</th></tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);color:#2563eb;font-weight:bold;">○○収益（収益↓）</td>
<td style="padding:10px;border:1px solid var(--border);color:#dc2626;font-weight:bold;">前受○○（負債↑）</td>
</tr>
</table>

<div class="steps">
<div class="step"><div class="step-num">例</div><div class="step-content">
<strong>例題</strong>：11月1日に向こう1年分の家賃¥240,000を受け取った。決算日は3月31日。<br><br>
当期分：11月〜3月＝<strong>5ヶ月分</strong><br>
来期分：4月〜10月＝<strong>7ヶ月分</strong><br>
前受額：240,000 × 7/12 = <strong>¥140,000</strong><br><br>
（借）受取家賃 140,000 ／（貸）前受家賃 140,000
</div></div>
</div>

<h3>📌 パターン4：未収収益（収益の未収）</h3>
<p>当期に属する収益のうち、<strong>まだ受け取っていない分</strong>を当期の収益に加える。</p>

<h4>決算整理仕訳</h4>
<table border="1" style="width:100%;border-collapse:collapse;margin:12px 0;">
<tr style="background:var(--bg-card);"><th style="padding:10px;border:1px solid var(--border);">借方（左）</th><th style="padding:10px;border:1px solid var(--border);">貸方（右）</th></tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);color:#2563eb;font-weight:bold;">未収○○（資産↑）</td>
<td style="padding:10px;border:1px solid var(--border);color:#dc2626;font-weight:bold;">○○収益（収益↑）</td>
</tr>
</table>

<div class="steps">
<div class="step"><div class="step-num">例</div><div class="step-content">
<strong>例題</strong>：8月1日に¥1,000,000を年利3%で貸し付けた。利息は7月31日に受け取る。決算日は3月31日。<br><br>
当期分：8月〜3月＝<strong>8ヶ月分</strong><br>
未収利息：1,000,000 × 3% × 8/12 = <strong>¥20,000</strong><br><br>
（借）未収利息 20,000 ／（貸）受取利息 20,000
</div></div>
</div>

<h3>📌 再振替仕訳（翌期首）</h3>
<div class="info-box tip">
<strong>💡 再振替仕訳とは</strong><br>
翌期の期首に、前期末の経過勘定の仕訳を<strong>逆仕訳</strong>します。これを再振替仕訳といいます。<br>
目的：翌期の日常取引を通常通り処理できるようにするため。
</div>

<table border="1" style="width:100%;border-collapse:collapse;margin:12px 0;">
<tr style="background:var(--bg-card);"><th style="padding:10px;border:1px solid var(--border);">期末の仕訳</th><th style="padding:10px;border:1px solid var(--border);">翌期首の再振替仕訳</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border);">前払保険料 / 保険料</td><td style="padding:10px;border:1px solid var(--border);">保険料 / 前払保険料</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border);">支払利息 / 未払利息</td><td style="padding:10px;border:1px solid var(--border);">未払利息 / 支払利息</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border);">受取家賃 / 前受家賃</td><td style="padding:10px;border:1px solid var(--border);">前受家賃 / 受取家賃</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border);">未収利息 / 受取利息</td><td style="padding:10px;border:1px solid var(--border);">受取利息 / 未収利息</td></tr>
</table>

<h3>📌 4パターン完全まとめ</h3>
<div class="visual-box">
<table border="1" style="width:100%;border-collapse:collapse;text-align:center;font-size:0.9rem;">
<tr style="background:var(--bg-card);">
<th style="padding:8px;border:1px solid var(--border);">パターン</th>
<th style="padding:8px;border:1px solid var(--border);">状況</th>
<th style="padding:8px;border:1px solid var(--border);">B/S科目</th>
<th style="padding:8px;border:1px solid var(--border);">区分</th>
<th style="padding:8px;border:1px solid var(--border);">仕訳（借方/貸方）</th>
</tr>
<tr style="background:#eff6ff;"><td style="padding:8px;border:1px solid var(--border);font-weight:bold;">前払費用</td><td style="padding:8px;border:1px solid var(--border);">来期分を先に払った</td><td style="padding:8px;border:1px solid var(--border);">前払○○</td><td style="padding:8px;border:1px solid var(--border);color:#2563eb;font-weight:bold;">資産</td><td style="padding:8px;border:1px solid var(--border);">前払○○ / 費用</td></tr>
<tr style="background:#fef3c7;"><td style="padding:8px;border:1px solid var(--border);font-weight:bold;">未払費用</td><td style="padding:8px;border:1px solid var(--border);">当期分をまだ払ってない</td><td style="padding:8px;border:1px solid var(--border);">未払○○</td><td style="padding:8px;border:1px solid var(--border);color:#dc2626;font-weight:bold;">負債</td><td style="padding:8px;border:1px solid var(--border);">費用 / 未払○○</td></tr>
<tr style="background:#f0fdf4;"><td style="padding:8px;border:1px solid var(--border);font-weight:bold;">前受収益</td><td style="padding:8px;border:1px solid var(--border);">来期分を先にもらった</td><td style="padding:8px;border:1px solid var(--border);">前受○○</td><td style="padding:8px;border:1px solid var(--border);color:#dc2626;font-weight:bold;">負債</td><td style="padding:8px;border:1px solid var(--border);">収益 / 前受○○</td></tr>
<tr style="background:#fce7f3;"><td style="padding:8px;border:1px solid var(--border);font-weight:bold;">未収収益</td><td style="padding:8px;border:1px solid var(--border);">当期分をまだもらってない</td><td style="padding:8px;border:1px solid var(--border);">未収○○</td><td style="padding:8px;border:1px solid var(--border);color:#2563eb;font-weight:bold;">資産</td><td style="padding:8px;border:1px solid var(--border);">未収○○ / 収益</td></tr>
</table>
</div>

<div class="info-box success">
<strong>✅ まとめ</strong><br>
・経過勘定は4パターン：前払費用・未払費用・前受収益・未収収益<br>
・「前」＝先に現金が動いた、「未」＝まだ現金が動いていない<br>
・月割計算を正確に！何ヶ月分が当期・来期かを確認<br>
・翌期首には必ず再振替仕訳（逆仕訳）を行う
</div>
`,
    quiz: [
        {
            id: "q503_1",
            type: "choice",
            question: "10月1日に向こう1年分の家賃¥360,000を支払った。決算日3月31日における前払家賃の金額はいくらですか？",
            options: [
                "¥180,000",
                "¥210,000",
                "¥150,000",
                "¥360,000"
            ],
            answer: 0,
            explanation: "支払った1年分のうち、当期分は10月〜3月の6ヶ月分、来期分は4月〜9月の6ヶ月分です。前払家賃 = 360,000 × 6/12 = ¥180,000。（借）前払家賃 180,000 ／（貸）支払家賃 180,000"
        },
        {
            id: "q503_2",
            type: "choice",
            question: "当期に属する利息がまだ支払われていない場合、決算整理仕訳で使う経過勘定はどれですか？",
            options: [
                "前払利息",
                "前受利息",
                "未払利息",
                "未収利息"
            ],
            answer: 2,
            explanation: "当期の費用（利息）がまだ支払われていない場合は「未払費用」のパターンです。（借）支払利息 ／（貸）未払利息 の仕訳を行います。「未」＝まだ現金が動いていない、「費用」＝支払側です。"
        },
        {
            id: "q503_3",
            type: "choice",
            question: "8月1日に¥600,000を年利5%で貸し付けた。利息は7月31日に受け取る。決算日3月31日の未収利息はいくらですか？",
            options: [
                "¥10,000",
                "¥15,000",
                "¥20,000",
                "¥30,000"
            ],
            answer: 2,
            explanation: "8月1日〜3月31日 = 8ヶ月分が当期の利息です。未収利息 = 600,000 × 5% × 8/12 = ¥20,000。（借）未収利息 20,000 ／（貸）受取利息 20,000"
        },
        {
            id: "q503_4",
            type: "fill",
            question: "「前受収益」は貸借対照表上、資産・負債・純資産のどれに分類されますか？漢字2文字で答えてください。",
            answer: "負債",
            explanation: "前受収益は「来期の分を先にもらった」ので、将来サービスを提供する義務があります。したがって負債に分類されます。同様に、前払費用は資産、未払費用は負債、未収収益は資産です。"
        },
        {
            id: "q503_5",
            type: "choice",
            question: "前期末に計上した「前払保険料¥30,000」の翌期首における再振替仕訳として正しいものはどれですか？",
            options: [
                "（借）前払保険料 30,000 ／（貸）保険料 30,000",
                "（借）保険料 30,000 ／（貸）前払保険料 30,000",
                "（借）保険料 30,000 ／（貸）現金 30,000",
                "（借）前払保険料 30,000 ／（貸）現金 30,000"
            ],
            answer: 1,
            explanation: "再振替仕訳は期末の仕訳の逆仕訳です。期末に「（借）前払保険料 ／（貸）保険料」だったので、翌期首は「（借）保険料 30,000 ／（貸）前払保険料 30,000」となります。"
        }
    ]
},

// ============================================
// Module 504: 減価償却と精算表
// ============================================
{
    id: 504,
    title: "減価償却と精算表",
    duration: "25分",
    content: `
<h2>📋 減価償却と精算表</h2>

<div class="info-box tip">
<strong>💡 この章のポイント</strong><br>
減価償却の仕訳（直接法・間接法）と、精算表の作成方法を学びます。精算表は試験の大問で出題される最重要テーマです！
</div>

<h3>📌 減価償却とは？</h3>
<p>建物や備品などの固定資産は、使用するにつれて価値が減少します。この<strong>価値の減少分を毎期の費用として計上</strong>するのが減価償却です。</p>

<div class="info-box warning">
<strong>⚠️ 減価償却の計算式（定額法）</strong><br>
<span style="font-size:1.1rem;font-weight:bold;">減価償却費 ＝（取得原価 − 残存価額）÷ 耐用年数</span><br>
<span style="font-size:0.9rem;">※3級では残存価額ゼロが基本です。</span>
</div>

<h3>📌 直接法と間接法</h3>
<div class="compare-grid">
<div class="compare-card">
<h4>直接法</h4>
<p>固定資産の帳簿価額を<strong>直接減らす</strong></p>
<table border="1" style="width:100%;border-collapse:collapse;margin:8px 0;font-size:0.9rem;">
<tr><th style="padding:6px;border:1px solid var(--border);">借方</th><th style="padding:6px;border:1px solid var(--border);">貸方</th></tr>
<tr><td style="padding:6px;border:1px solid var(--border);font-weight:bold;">減価償却費 ×××</td><td style="padding:6px;border:1px solid var(--border);font-weight:bold;">備品 ×××</td></tr>
</table>
<p style="font-size:0.85rem;color:var(--text-secondary);">B/Sには減額後の金額が表示される</p>
</div>
<div class="compare-card">
<h4>間接法（3級で主流！）</h4>
<p><strong>減価償却累計額</strong>を使って間接的に減らす</p>
<table border="1" style="width:100%;border-collapse:collapse;margin:8px 0;font-size:0.9rem;">
<tr><th style="padding:6px;border:1px solid var(--border);">借方</th><th style="padding:6px;border:1px solid var(--border);">貸方</th></tr>
<tr><td style="padding:6px;border:1px solid var(--border);font-weight:bold;">減価償却費 ×××</td><td style="padding:6px;border:1px solid var(--border);font-weight:bold;">備品減価償却累計額 ×××</td></tr>
</table>
<p style="font-size:0.85rem;color:var(--text-secondary);">取得原価と累計額が別々に表示される</p>
</div>
</div>

<div class="steps">
<div class="step"><div class="step-num">例</div><div class="step-content">
<strong>例題</strong>：備品（取得原価¥300,000、残存価額ゼロ、耐用年数5年、間接法）の決算整理仕訳<br><br>
減価償却費 = 300,000 ÷ 5 = <strong>¥60,000</strong><br><br>
（借）減価償却費 60,000 ／（貸）備品減価償却累計額 60,000
</div></div>
</div>

<h3>📌 月割計算（期中取得の場合）</h3>
<div class="info-box warning">
<strong>⚠️ 期中に取得した場合は月割り！</strong><br>
当期の途中で取得した固定資産は、<strong>取得月から期末までの月数</strong>で按分します。<br>
<span style="font-size:1.05rem;font-weight:bold;">年間の減価償却費 × 使用月数 ÷ 12ヶ月</span>
</div>

<div class="steps">
<div class="step"><div class="step-num">例</div><div class="step-content">
<strong>例題</strong>：7月1日に建物¥1,200,000を取得（残存価額ゼロ、耐用年数20年、間接法）。決算日は3月31日。<br><br>
年間償却費：1,200,000 ÷ 20 = ¥60,000<br>
月割計算（7月〜3月＝9ヶ月）：60,000 × 9/12 = <strong>¥45,000</strong><br><br>
（借）減価償却費 45,000 ／（貸）建物減価償却累計額 45,000
</div></div>
</div>

<h3 style="margin-top:32px;">📌 精算表（8桁精算表）</h3>
<p>精算表は、<strong>試算表から財務諸表を作成するまでの過程を1つの表にまとめたもの</strong>です。</p>

<div class="visual-box">
<h4 style="text-align:center;margin-bottom:12px;">8桁精算表のしくみ</h4>
<table border="1" style="width:100%;border-collapse:collapse;text-align:center;font-size:0.85rem;">
<tr style="background:var(--bg-card);">
<th style="padding:8px;border:1px solid var(--border);" rowspan="2">勘定科目</th>
<th style="padding:8px;border:1px solid var(--border);background:#dbeafe;" colspan="2">残高試算表</th>
<th style="padding:8px;border:1px solid var(--border);background:#fef3c7;" colspan="2">修正記入</th>
<th style="padding:8px;border:1px solid var(--border);background:#dcfce7;" colspan="2">損益計算書</th>
<th style="padding:8px;border:1px solid var(--border);background:#fce7f3;" colspan="2">貸借対照表</th>
</tr>
<tr style="background:var(--bg-card);">
<th style="padding:6px;border:1px solid var(--border);background:#dbeafe;">借方</th><th style="padding:6px;border:1px solid var(--border);background:#dbeafe;">貸方</th>
<th style="padding:6px;border:1px solid var(--border);background:#fef3c7;">借方</th><th style="padding:6px;border:1px solid var(--border);background:#fef3c7;">貸方</th>
<th style="padding:6px;border:1px solid var(--border);background:#dcfce7;">借方</th><th style="padding:6px;border:1px solid var(--border);background:#dcfce7;">貸方</th>
<th style="padding:6px;border:1px solid var(--border);background:#fce7f3;">借方</th><th style="padding:6px;border:1px solid var(--border);background:#fce7f3;">貸方</th>
</tr>
<tr><td style="padding:6px;border:1px solid var(--border);text-align:left;font-weight:bold;">現金</td><td style="padding:6px;border:1px solid var(--border);">200</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">200</td><td style="padding:6px;border:1px solid var(--border);"></td></tr>
<tr><td style="padding:6px;border:1px solid var(--border);text-align:left;font-weight:bold;">売掛金</td><td style="padding:6px;border:1px solid var(--border);">300</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">300</td><td style="padding:6px;border:1px solid var(--border);"></td></tr>
<tr><td style="padding:6px;border:1px solid var(--border);text-align:left;font-weight:bold;">繰越商品</td><td style="padding:6px;border:1px solid var(--border);">50</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);color:#d97706;">70</td><td style="padding:6px;border:1px solid var(--border);color:#d97706;">50</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">70</td><td style="padding:6px;border:1px solid var(--border);"></td></tr>
<tr><td style="padding:6px;border:1px solid var(--border);text-align:left;font-weight:bold;">備品</td><td style="padding:6px;border:1px solid var(--border);">500</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">500</td><td style="padding:6px;border:1px solid var(--border);"></td></tr>
<tr><td style="padding:6px;border:1px solid var(--border);text-align:left;font-weight:bold;">買掛金</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">150</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">150</td></tr>
<tr><td style="padding:6px;border:1px solid var(--border);text-align:left;font-weight:bold;">備品減価償却累計額</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">100</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);color:#d97706;">50</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">150</td></tr>
<tr><td style="padding:6px;border:1px solid var(--border);text-align:left;font-weight:bold;">資本金</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">500</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">500</td></tr>
<tr><td style="padding:6px;border:1px solid var(--border);text-align:left;font-weight:bold;">売上</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">800</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">800</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td></tr>
<tr><td style="padding:6px;border:1px solid var(--border);text-align:left;font-weight:bold;">仕入</td><td style="padding:6px;border:1px solid var(--border);">400</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);color:#d97706;">50</td><td style="padding:6px;border:1px solid var(--border);color:#d97706;">70</td><td style="padding:6px;border:1px solid var(--border);">380</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td></tr>
<tr><td style="padding:6px;border:1px solid var(--border);text-align:left;font-weight:bold;">給料</td><td style="padding:6px;border:1px solid var(--border);">100</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">100</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td></tr>
<tr><td style="padding:6px;border:1px solid var(--border);text-align:left;font-weight:bold;">減価償却費</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);color:#d97706;">50</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">50</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td></tr>
<tr style="background:var(--bg-card);font-weight:bold;">
<td style="padding:6px;border:1px solid var(--border);">合計</td><td style="padding:6px;border:1px solid var(--border);">1,550</td><td style="padding:6px;border:1px solid var(--border);">1,550</td><td style="padding:6px;border:1px solid var(--border);">170</td><td style="padding:6px;border:1px solid var(--border);">170</td><td style="padding:6px;border:1px solid var(--border);">530</td><td style="padding:6px;border:1px solid var(--border);">800</td><td style="padding:6px;border:1px solid var(--border);">1,070</td><td style="padding:6px;border:1px solid var(--border);">800</td></tr>
<tr style="background:#fef3c7;font-weight:bold;">
<td style="padding:6px;border:1px solid var(--border);color:#dc2626;">当期純利益</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);color:#dc2626;">270</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);color:#dc2626;">270</td></tr>
<tr style="background:var(--bg-card);font-weight:bold;">
<td style="padding:6px;border:1px solid var(--border);">合計</td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);"></td><td style="padding:6px;border:1px solid var(--border);">800</td><td style="padding:6px;border:1px solid var(--border);">800</td><td style="padding:6px;border:1px solid var(--border);">1,070</td><td style="padding:6px;border:1px solid var(--border);">1,070</td></tr>
</table>
<p style="text-align:center;font-size:0.85rem;color:var(--text-secondary);margin-top:8px;">（金額の単位：千円）</p>
</div>

<h3>📌 精算表の作成手順</h3>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>残高試算表を記入</strong><br>各勘定の期末残高を借方・貸方に記入する。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>修正記入を記入</strong><br>決算整理仕訳を修正記入欄に記入する（しーくりくりしー、減価償却、貸倒引当金、経過勘定など）。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>損益計算書欄に収益・費用を記入</strong><br>試算表の金額 ± 修正記入の金額を計算して記入する。<br>
<span style="color:var(--text-secondary);font-size:0.9rem;">収益は貸方に、費用は借方に記入。</span></div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>貸借対照表欄に資産・負債・純資産を記入</strong><br>試算表の金額 ± 修正記入の金額を計算して記入する。<br>
<span style="color:var(--text-secondary);font-size:0.9rem;">資産は借方に、負債・純資産は貸方に記入。</span></div></div>
<div class="step"><div class="step-num">5</div><div class="step-content"><strong>当期純利益（純損失）を記入</strong><br>損益計算書欄の貸方合計 − 借方合計 ＝ 当期純利益<br>
<span style="color:#dc2626;font-weight:bold;">当期純利益は、損益計算書の借方と貸借対照表の貸方に記入！</span></div></div>
</div>

<div class="info-box tip">
<strong>💡 当期純利益の記入場所（超重要！）</strong><br>
<table border="1" style="width:100%;border-collapse:collapse;margin:8px 0;text-align:center;">
<tr style="background:var(--bg-card);"><th style="padding:8px;border:1px solid var(--border);">区分</th><th style="padding:8px;border:1px solid var(--border);">当期純利益の場合</th><th style="padding:8px;border:1px solid var(--border);">当期純損失の場合</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border);font-weight:bold;">損益計算書</td><td style="padding:8px;border:1px solid var(--border);color:#2563eb;">借方に記入</td><td style="padding:8px;border:1px solid var(--border);color:#dc2626;">貸方に記入</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);font-weight:bold;">貸借対照表</td><td style="padding:8px;border:1px solid var(--border);color:#dc2626;">貸方に記入</td><td style="padding:8px;border:1px solid var(--border);color:#2563eb;">借方に記入</td></tr>
</table>
<p style="font-size:0.9rem;">利益は「損益計算書の不足側（借方）」と「貸借対照表の不足側（貸方）」に記入して合計を一致させます。</p>
</div>

<div class="info-box success">
<strong>✅ まとめ</strong><br>
・減価償却費 =（取得原価−残存価額）÷ 耐用年数（3級は残存ゼロが基本）<br>
・間接法：（借）減価償却費 ／（貸）○○減価償却累計額<br>
・期中取得は月割計算を忘れない！<br>
・精算表は「試算表→修正記入→損益計算書→貸借対照表」の4区分<br>
・当期純利益は損益計算書の借方＆貸借対照表の貸方に記入
</div>
`,
    quiz: [
        {
            id: "q504_1",
            type: "fill",
            question: "備品（取得原価¥600,000、残存価額ゼロ、耐用年数6年）の1年間の減価償却費はいくらですか？（数字のみ回答）",
            answer: "100000",
            explanation: "減価償却費 =（取得原価 − 残存価額）÷ 耐用年数 =（600,000 − 0）÷ 6 = ¥100,000 です。"
        },
        {
            id: "q504_2",
            type: "choice",
            question: "10月1日に建物¥2,400,000を取得（残存価額ゼロ、耐用年数20年、間接法）。決算日3月31日の減価償却費はいくらですか？",
            options: [
                "¥120,000",
                "¥60,000",
                "¥80,000",
                "¥40,000"
            ],
            answer: 1,
            explanation: "年間償却費 = 2,400,000 ÷ 20 = ¥120,000。10月〜3月 = 6ヶ月なので、月割計算：120,000 × 6/12 = ¥60,000。（借）減価償却費 60,000 ／（貸）建物減価償却累計額 60,000"
        },
        {
            id: "q504_3",
            type: "choice",
            question: "精算表で「当期純利益」を記入する正しい場所はどこですか？",
            options: [
                "損益計算書の貸方と貸借対照表の借方",
                "損益計算書の借方と貸借対照表の貸方",
                "損益計算書の借方と貸借対照表の借方",
                "損益計算書の貸方と貸借対照表の貸方"
            ],
            answer: 1,
            explanation: "当期純利益は、損益計算書の借方（費用側の不足分）と貸借対照表の貸方（純資産の増加）に記入します。これにより両欄の借方合計と貸方合計がそれぞれ一致します。"
        },
        {
            id: "q504_4",
            type: "choice",
            question: "間接法による減価償却の仕訳として正しいものはどれですか？",
            options: [
                "（借）減価償却費 ／（貸）備品",
                "（借）備品減価償却累計額 ／（貸）減価償却費",
                "（借）減価償却費 ／（貸）備品減価償却累計額",
                "（借）備品 ／（貸）減価償却費"
            ],
            answer: 2,
            explanation: "間接法では（借）減価償却費 ／（貸）○○減価償却累計額 という仕訳を行います。固定資産の帳簿価額を直接減らさず、減価償却累計額という別の勘定で間接的に減額を表示します。"
        },
        {
            id: "q504_5",
            type: "choice",
            question: "精算表の修正記入欄に「しーくりくりしー」の仕訳を記入する場合、繰越商品の修正記入欄にはどう記入しますか？（期首棚卸高¥80、期末棚卸高¥120）",
            options: [
                "借方に120、貸方に80",
                "借方に80、貸方に120",
                "借方に200、貸方は空欄",
                "借方は空欄、貸方に200"
            ],
            answer: 0,
            explanation: "「しーくり」で繰越商品は貸方に期首分¥80、「くりしー」で繰越商品は借方に期末分¥120。したがって修正記入欄は借方に120、貸方に80となります。最終的に繰越商品の貸借対照表欄には期末棚卸高¥120が記入されます。"
        }
    ]
},

// ============================================
// Module 505: 帳簿の締切
// ============================================
{
    id: 505,
    title: "帳簿の締切",
    duration: "20分",
    content: `
<h2>📋 帳簿の締切</h2>

<div class="info-box tip">
<strong>💡 この章のポイント</strong><br>
決算の最後のステップ「帳簿の締切」を学びます。収益・費用勘定の損益勘定への振替、資産・負債・純資産の次期繰越の方法を理解しましょう。
</div>

<h3>📌 帳簿の締切とは？</h3>
<p>帳簿の締切とは、<strong>当期の記録を終了し、次期に繰り越すための手続き</strong>です。<br>
大きく分けて3つのステップがあります。</p>

<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>収益・費用勘定の締切</strong><br>全ての収益・費用勘定の残高を「損益」勘定に振り替える</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>損益勘定の締切</strong><br>損益勘定の差額（当期純利益 or 純損失）を「繰越利益剰余金」に振り替える</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>資産・負債・純資産勘定の締切</strong><br>各勘定に「次期繰越」と記入し、次期の期首に「前期繰越」として記入する</div></div>
</div>

<h3>📌 ステップ1：収益・費用勘定の締切</h3>
<p>全ての<strong>収益勘定</strong>と<strong>費用勘定</strong>の残高を「損益」勘定に振り替えます。</p>

<h4>費用勘定の振替</h4>
<table border="1" style="width:100%;border-collapse:collapse;margin:12px 0;">
<tr style="background:var(--bg-card);"><th style="padding:10px;border:1px solid var(--border);width:50%;">借方（左）</th><th style="padding:10px;border:1px solid var(--border);width:50%;">貸方（右）</th></tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);color:#2563eb;font-weight:bold;">損益 ×××</td>
<td style="padding:10px;border:1px solid var(--border);color:#dc2626;font-weight:bold;">仕入（費用）×××<br>給料（費用）×××<br>減価償却費（費用）×××</td>
</tr>
</table>
<p style="font-size:0.9rem;color:var(--text-secondary);">→ 費用勘定を貸方に記入してゼロにし、損益勘定の借方に集める。</p>

<h4>収益勘定の振替</h4>
<table border="1" style="width:100%;border-collapse:collapse;margin:12px 0;">
<tr style="background:var(--bg-card);"><th style="padding:10px;border:1px solid var(--border);width:50%;">借方（左）</th><th style="padding:10px;border:1px solid var(--border);width:50%;">貸方（右）</th></tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);color:#2563eb;font-weight:bold;">売上（収益）×××<br>受取利息（収益）×××</td>
<td style="padding:10px;border:1px solid var(--border);color:#dc2626;font-weight:bold;">損益 ×××</td>
</tr>
</table>
<p style="font-size:0.9rem;color:var(--text-secondary);">→ 収益勘定を借方に記入してゼロにし、損益勘定の貸方に集める。</p>

<div class="visual-box">
<h4 style="text-align:center;margin-bottom:12px;">損益勘定のイメージ</h4>
<table border="1" style="width:80%;margin:0 auto;border-collapse:collapse;text-align:center;">
<tr style="background:var(--bg-card);"><th style="padding:8px;border:1px solid var(--border);" colspan="2">損益勘定</th></tr>
<tr style="background:var(--bg-card);"><th style="padding:8px;border:1px solid var(--border);width:50%;">借方（費用の合計）</th><th style="padding:8px;border:1px solid var(--border);width:50%;">貸方（収益の合計）</th></tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);text-align:left;">
仕入　　380,000<br>
給料　　100,000<br>
減価償却費　50,000<br>
<hr style="margin:4px 0;">
<span style="color:#dc2626;font-weight:bold;">繰越利益剰余金 270,000</span><br>
<span style="font-size:0.85rem;">（当期純利益 → 振替）</span>
</td>
<td style="padding:10px;border:1px solid var(--border);text-align:left;">
売上　　800,000<br>
<br><br><br><br>
</td>
</tr>
<tr style="background:var(--bg-card);font-weight:bold;">
<td style="padding:8px;border:1px solid var(--border);">800,000</td>
<td style="padding:8px;border:1px solid var(--border);">800,000</td>
</tr>
</table>
</div>

<h3>📌 ステップ2：損益勘定の締切</h3>
<p>損益勘定の貸方合計（収益）と借方合計（費用）の差額が<strong>当期純利益（または純損失）</strong>です。<br>
この差額を<strong>繰越利益剰余金</strong>に振り替えます。</p>

<div class="compare-grid">
<div class="compare-card">
<h4>当期純利益の場合</h4>
<p>収益 ＞ 費用 → 利益</p>
<table border="1" style="width:100%;border-collapse:collapse;margin:8px 0;font-size:0.9rem;">
<tr><th style="padding:6px;border:1px solid var(--border);">借方</th><th style="padding:6px;border:1px solid var(--border);">貸方</th></tr>
<tr><td style="padding:6px;border:1px solid var(--border);font-weight:bold;">損益 ×××</td><td style="padding:6px;border:1px solid var(--border);font-weight:bold;">繰越利益剰余金 ×××</td></tr>
</table>
<p style="font-size:0.85rem;">純資産（繰越利益剰余金）が増加</p>
</div>
<div class="compare-card">
<h4>当期純損失の場合</h4>
<p>費用 ＞ 収益 → 損失</p>
<table border="1" style="width:100%;border-collapse:collapse;margin:8px 0;font-size:0.9rem;">
<tr><th style="padding:6px;border:1px solid var(--border);">借方</th><th style="padding:6px;border:1px solid var(--border);">貸方</th></tr>
<tr><td style="padding:6px;border:1px solid var(--border);font-weight:bold;">繰越利益剰余金 ×××</td><td style="padding:6px;border:1px solid var(--border);font-weight:bold;">損益 ×××</td></tr>
</table>
<p style="font-size:0.85rem;">純資産（繰越利益剰余金）が減少</p>
</div>
</div>

<h3>📌 ステップ3：資産・負債・純資産勘定の締切</h3>
<p>資産・負債・純資産の各勘定は翌期に残高を引き継ぎます。</p>

<div class="visual-box">
<h4 style="text-align:center;margin-bottom:12px;">勘定の締切の書き方（例：現金勘定）</h4>
<table border="1" style="width:80%;margin:0 auto;border-collapse:collapse;text-align:center;">
<tr style="background:var(--bg-card);"><th style="padding:8px;border:1px solid var(--border);" colspan="2">現金</th></tr>
<tr style="background:var(--bg-card);"><th style="padding:8px;border:1px solid var(--border);width:50%;">借方</th><th style="padding:8px;border:1px solid var(--border);width:50%;">貸方</th></tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);text-align:left;">
前期繰越　200,000<br>
（各取引）　xxx<br>
<br>
</td>
<td style="padding:10px;border:1px solid var(--border);text-align:left;">
（各取引）　xxx<br>
<span style="color:#dc2626;font-weight:bold;">次期繰越　200,000</span><br>
<span style="font-size:0.85rem;">（残高を貸方に記入して締切）</span>
</td>
</tr>
<tr style="background:#fef3c7;font-weight:bold;border-top:3px double #000;">
<td style="padding:8px;border:1px solid var(--border);">合計 xxx</td>
<td style="padding:8px;border:1px solid var(--border);">合計 xxx</td>
</tr>
<tr>
<td style="padding:10px;border:1px solid var(--border);text-align:left;color:#2563eb;font-weight:bold;">
前期繰越　200,000<br>
<span style="font-size:0.85rem;color:var(--text-secondary);">（翌期の期首に記入）</span>
</td>
<td style="padding:10px;border:1px solid var(--border);"></td>
</tr>
</table>
</div>

<div class="info-box tip">
<strong>💡 締切のルール</strong><br>
・<strong>資産勘定</strong>：残高を<strong>貸方</strong>に「次期繰越」と記入 → 翌期の<strong>借方</strong>に「前期繰越」<br>
・<strong>負債・純資産勘定</strong>：残高を<strong>借方</strong>に「次期繰越」と記入 → 翌期の<strong>貸方</strong>に「前期繰越」<br>
・つまり、残高の反対側に「次期繰越」を書いて帳尻を合わせる！
</div>

<h3>📌 繰越試算表</h3>
<p>帳簿を締め切った後、翌期に繰り越す残高を一覧にしたものが<strong>繰越試算表</strong>です。</p>

<table border="1" style="width:100%;border-collapse:collapse;margin:16px 0;text-align:center;">
<tr style="background:var(--bg-card);"><th style="padding:8px;border:1px solid var(--border);" colspan="3">繰越試算表</th></tr>
<tr style="background:var(--bg-card);"><th style="padding:8px;border:1px solid var(--border);">借方</th><th style="padding:8px;border:1px solid var(--border);">勘定科目</th><th style="padding:8px;border:1px solid var(--border);">貸方</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border);">200,000</td><td style="padding:8px;border:1px solid var(--border);">現金</td><td style="padding:8px;border:1px solid var(--border);"></td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);">300,000</td><td style="padding:8px;border:1px solid var(--border);">売掛金</td><td style="padding:8px;border:1px solid var(--border);"></td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);">120,000</td><td style="padding:8px;border:1px solid var(--border);">繰越商品</td><td style="padding:8px;border:1px solid var(--border);"></td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);">500,000</td><td style="padding:8px;border:1px solid var(--border);">備品</td><td style="padding:8px;border:1px solid var(--border);"></td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);"></td><td style="padding:8px;border:1px solid var(--border);">買掛金</td><td style="padding:8px;border:1px solid var(--border);">150,000</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);"></td><td style="padding:8px;border:1px solid var(--border);">備品減価償却累計額</td><td style="padding:8px;border:1px solid var(--border);">150,000</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);"></td><td style="padding:8px;border:1px solid var(--border);">資本金</td><td style="padding:8px;border:1px solid var(--border);">500,000</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);"></td><td style="padding:8px;border:1px solid var(--border);">繰越利益剰余金</td><td style="padding:8px;border:1px solid var(--border);">320,000</td></tr>
<tr style="background:var(--bg-card);font-weight:bold;"><td style="padding:8px;border:1px solid var(--border);">1,120,000</td><td style="padding:8px;border:1px solid var(--border);">合計</td><td style="padding:8px;border:1px solid var(--border);">1,120,000</td></tr>
</table>
<p style="font-size:0.9rem;color:var(--text-secondary);">※繰越試算表には収益・費用勘定は含まれません（損益勘定に振り替え済み）。</p>

<h3>📌 決算の全体フロー図</h3>
<div class="visual-box">
<table style="width:100%;text-align:center;border-collapse:collapse;">
<tr><td style="padding:10px;">
<div style="background:#dbeafe;border:2px solid #2563eb;border-radius:8px;padding:12px;display:inline-block;margin:4px;">
<strong>1. 試算表</strong><br>
<span style="font-size:0.85rem;">日常の記録の集計</span>
</div>
</td></tr>
<tr><td style="font-size:1.5rem;">⬇</td></tr>
<tr><td style="padding:10px;">
<div style="background:#fef3c7;border:2px solid #d97706;border-radius:8px;padding:12px;display:inline-block;margin:4px;">
<strong>2. 決算整理仕訳</strong><br>
<span style="font-size:0.85rem;">しーくりくりしー、減価償却、<br>貸倒引当金、経過勘定</span>
</div>
</td></tr>
<tr><td style="font-size:1.5rem;">⬇</td></tr>
<tr><td style="padding:10px;">
<div style="background:#dcfce7;border:2px solid #16a34a;border-radius:8px;padding:12px;display:inline-block;margin:4px;">
<strong>3. 精算表（8桁）</strong><br>
<span style="font-size:0.85rem;">試算表＋修正記入→P/L・B/S</span>
</div>
</td></tr>
<tr><td style="font-size:1.5rem;">⬇</td></tr>
<tr><td style="padding:10px;">
<div style="background:#f3e8ff;border:2px solid #7c3aed;border-radius:8px;padding:12px;display:inline-block;margin:4px;">
<strong>4. 財務諸表</strong><br>
<span style="font-size:0.85rem;">損益計算書（P/L）・貸借対照表（B/S）</span>
</div>
</td></tr>
<tr><td style="font-size:1.5rem;">⬇</td></tr>
<tr><td style="padding:10px;">
<div style="background:#fce7f3;border:2px solid #db2777;border-radius:8px;padding:12px;display:inline-block;margin:4px;">
<strong>5. 帳簿の締切</strong><br>
<span style="font-size:0.85rem;">収益費用→損益→繰越利益剰余金<br>資産負債純資産→次期繰越</span>
</div>
</td></tr>
<tr><td style="font-size:1.5rem;">⬇</td></tr>
<tr><td style="padding:10px;">
<div style="background:#f1f5f9;border:2px solid #64748b;border-radius:8px;padding:12px;display:inline-block;margin:4px;">
<strong>6. 繰越試算表</strong><br>
<span style="font-size:0.85rem;">翌期に繰り越す残高の一覧</span>
</div>
</td></tr>
</table>
</div>

<div class="info-box success">
<strong>✅ まとめ</strong><br>
・収益・費用は「損益」勘定に振り替えてゼロにする<br>
・損益勘定の差額（純利益 or 純損失）を「繰越利益剰余金」に振り替える<br>
・資産・負債・純資産は「次期繰越」→「前期繰越」で翌期に引き継ぐ<br>
・繰越試算表には資産・負債・純資産のみ（収益・費用は含まない）
</div>
`,
    quiz: [
        {
            id: "q505_1",
            type: "choice",
            question: "帳簿の締切で、費用勘定の残高を振り替える先の勘定科目はどれですか？",
            options: [
                "繰越利益剰余金",
                "損益",
                "資本金",
                "雑損"
            ],
            answer: 1,
            explanation: "費用勘定（仕入、給料、減価償却費など）の残高は全て「損益」勘定に振り替えます。（借）損益 ／（貸）各費用勘定。損益勘定に収益と費用を集めて当期純利益を計算します。"
        },
        {
            id: "q505_2",
            type: "choice",
            question: "当期純利益が¥150,000の場合、損益勘定から繰越利益剰余金への振替仕訳として正しいものはどれですか？",
            options: [
                "（借）繰越利益剰余金 150,000 ／（貸）損益 150,000",
                "（借）損益 150,000 ／（貸）繰越利益剰余金 150,000",
                "（借）損益 150,000 ／（貸）資本金 150,000",
                "（借）繰越利益剰余金 150,000 ／（貸）資本金 150,000"
            ],
            answer: 1,
            explanation: "当期純利益の場合は（借）損益 150,000 ／（貸）繰越利益剰余金 150,000 です。損益勘定を締め切り、利益分だけ繰越利益剰余金（純資産）を増加させます。"
        },
        {
            id: "q505_3",
            type: "fill",
            question: "資産勘定を締め切るとき、残高の反対側（貸方）に記入する文言は「○○繰越」です。○○に入る漢字2文字を答えてください。",
            answer: "次期",
            explanation: "資産勘定は通常借方に残高があるので、貸方に「次期繰越」と記入して締め切ります。翌期の期首には借方に「前期繰越」と記入して残高を引き継ぎます。"
        },
        {
            id: "q505_4",
            type: "choice",
            question: "繰越試算表に記載されない勘定科目はどれですか？",
            options: [
                "現金",
                "売掛金",
                "売上",
                "資本金"
            ],
            answer: 2,
            explanation: "繰越試算表には資産・負債・純資産の勘定科目のみが記載されます。「売上」は収益勘定なので、帳簿の締切で損益勘定に振り替え済みです。収益・費用勘定は繰越試算表には含まれません。"
        },
        {
            id: "q505_5",
            type: "choice",
            question: "帳簿の締切の正しい順序はどれですか？",
            options: [
                "損益勘定の締切→収益費用の振替→資産負債の締切",
                "資産負債の締切→収益費用の振替→損益勘定の締切",
                "収益費用の振替→損益勘定の締切→資産負債の締切",
                "収益費用の振替→資産負債の締切→損益勘定の締切"
            ],
            answer: 2,
            explanation: "正しい順序は、(1)収益・費用勘定を損益勘定に振り替え → (2)損益勘定の差額を繰越利益剰余金に振り替えて締切 → (3)資産・負債・純資産勘定を「次期繰越」で締め切る、です。"
        }
    ]
}

    ] // end of modules array
}; // end of LEVEL5_DATA
