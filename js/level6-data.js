/* ============================================
   Level 6: 財務諸表と帳簿
   ============================================ */
const LEVEL6_DATA = {
    id: 6,
    title: "財務諸表と帳簿",
    icon: "📄",
    description: "財務諸表の作成と帳簿組織を学ぶ",
    modules: [
        // ============================================
        // Module 601: 貸借対照表の作成
        // ============================================
        {
            id: 601,
            title: "貸借対照表の作成",
            duration: "20分",
            content: `
<h2>📄 貸借対照表（B/S）の作成</h2>

<div class="info-box tip">
    <strong>💡 このモジュールのゴール</strong><br>
    精算表から正式な貸借対照表（B/S）を作成できるようになること。<br>
    簿記3級の第3問で頻出のテーマです！
</div>

<h3>📌 貸借対照表とは？</h3>
<p>貸借対照表（たいしゃくたいしょうひょう）は、<strong>ある一時点</strong>における企業の<strong>財政状態</strong>を示す財務諸表です。英語では <strong>Balance Sheet（B/S）</strong> と呼びます。</p>

<div class="visual-box">
    <h4>貸借対照表の基本構造</h4>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border:2px solid #1a73e8;border-radius:8px;overflow:hidden;">
        <div style="background:#e3f2fd;padding:16px;border-right:2px solid #1a73e8;">
            <div style="text-align:center;font-weight:bold;color:#1a73e8;font-size:1.1rem;margin-bottom:8px;">【借方】資産の部</div>
            <div style="font-size:0.9rem;color:#555;">
                企業が持っているもの<br>
                （現金、商品、建物など）
            </div>
        </div>
        <div>
            <div style="background:#fff3e0;padding:16px;border-bottom:2px solid #1a73e8;">
                <div style="text-align:center;font-weight:bold;color:#e65100;font-size:1.1rem;margin-bottom:8px;">【貸方】負債の部</div>
                <div style="font-size:0.9rem;color:#555;">
                    他人から借りているもの<br>
                    （借入金、買掛金など）
                </div>
            </div>
            <div style="background:#e8f5e9;padding:16px;">
                <div style="text-align:center;font-weight:bold;color:#2e7d32;font-size:1.1rem;margin-bottom:8px;">【貸方】純資産の部</div>
                <div style="font-size:0.9rem;color:#555;">
                    自分のお金<br>
                    （資本金、繰越利益剰余金）
                </div>
            </div>
        </div>
    </div>
    <p style="text-align:center;margin-top:12px;font-weight:bold;color:#1a73e8;">
        資産 ＝ 負債 ＋ 純資産 （これが常に成り立つ！）
    </p>
</div>

<h3>📌 報告式の貸借対照表</h3>
<p>簿記3級では<strong>報告式</strong>（上から下に順番に書く形式）が出題されます。以下の順番で並べます。</p>

<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <strong>資産の部</strong>：流動資産 → 固定資産の順に記載
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <strong>負債の部</strong>：流動負債 → 固定負債の順に記載
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <strong>純資産の部</strong>：資本金 → 繰越利益剰余金の順に記載
        </div>
    </div>
</div>

<h3>📌 資産の部の配列</h3>
<div class="compare-grid">
    <div class="compare-card">
        <h4>流動資産（すぐ現金になるもの）</h4>
        <table>
            <tr><td>現金</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>当座預金</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>普通預金</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>受取手形</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>売掛金</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>　貸倒引当金（△）</td><td style="text-align:right;">△xxx</td></tr>
            <tr><td>繰越商品（商品）</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>前払費用</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>未収収益</td><td style="text-align:right;">xxx</td></tr>
        </table>
    </div>
    <div class="compare-card">
        <h4>固定資産（長期間使うもの）</h4>
        <table>
            <tr><td>建物</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>　減価償却累計額（△）</td><td style="text-align:right;">△xxx</td></tr>
            <tr><td>備品</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>　減価償却累計額（△）</td><td style="text-align:right;">△xxx</td></tr>
            <tr><td>車両運搬具</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>　減価償却累計額（△）</td><td style="text-align:right;">△xxx</td></tr>
            <tr><td>土地</td><td style="text-align:right;">xxx</td></tr>
        </table>
    </div>
</div>

<div class="info-box warning">
    <strong>⚠️ 注意ポイント</strong><br>
    ・貸倒引当金は売掛金・受取手形の下に<strong>控除形式</strong>（マイナス）で表示<br>
    ・減価償却累計額は各固定資産の下に<strong>控除形式</strong>で表示<br>
    ・「繰越商品」は B/S では「<strong>商品</strong>」と表示されることが多い
</div>

<h3>📌 負債の部と純資産の部</h3>
<div class="compare-grid">
    <div class="compare-card">
        <h4>負債の部</h4>
        <p><strong>流動負債</strong></p>
        <table>
            <tr><td>支払手形</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>買掛金</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>未払費用</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>前受収益</td><td style="text-align:right;">xxx</td></tr>
        </table>
        <p style="margin-top:8px;"><strong>固定負債</strong></p>
        <table>
            <tr><td>借入金（長期）</td><td style="text-align:right;">xxx</td></tr>
        </table>
    </div>
    <div class="compare-card">
        <h4>純資産の部</h4>
        <table>
            <tr><td>資本金</td><td style="text-align:right;">xxx</td></tr>
            <tr><td>繰越利益剰余金</td><td style="text-align:right;">xxx</td></tr>
        </table>
        <div class="info-box tip" style="margin-top:12px;">
            繰越利益剰余金 ＝<br>
            期首の繰越利益剰余金 ＋ 当期純利益
        </div>
    </div>
</div>

<h3>📌 精算表からB/Sへの転記</h3>
<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <strong>精算表の「貸借対照表」欄</strong>の数値をそのまま転記する
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <strong>貸倒引当金・減価償却累計額</strong>は控除形式で表示する
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <strong>繰越利益剰余金</strong>は期首残高＋当期純利益で計算する
        </div>
    </div>
    <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
            <strong>資産合計 ＝ 負債合計 ＋ 純資産合計</strong>になるか確認する
        </div>
    </div>
</div>

<h3>📌 完成した貸借対照表の例</h3>
<div class="visual-box">
    <h4 style="text-align:center;">貸 借 対 照 表</h4>
    <p style="text-align:center;font-size:0.85rem;color:#666;">令和X年3月31日現在</p>
    <table style="width:100%;border-collapse:collapse;">
        <thead>
            <tr style="background:#1a73e8;color:white;">
                <th style="padding:8px;text-align:left;" colspan="2">資産の部</th>
                <th style="padding:8px;text-align:right;">金額（円）</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background:#e3f2fd;font-weight:bold;"><td colspan="2" style="padding:6px;">【流動資産】</td><td></td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 20px;">現金</td><td style="text-align:right;padding:4px 6px;">150,000</td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 20px;">当座預金</td><td style="text-align:right;padding:4px 6px;">500,000</td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 20px;">売掛金</td><td style="text-align:right;padding:4px 6px;">300,000</td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 30px;">貸倒引当金</td><td style="text-align:right;padding:4px 6px;color:red;">△6,000</td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 20px;">商品</td><td style="text-align:right;padding:4px 6px;">200,000</td></tr>
            <tr style="border-top:1px solid #ddd;"><td colspan="2" style="padding:4px 6px 4px 20px;font-weight:bold;">流動資産合計</td><td style="text-align:right;padding:4px 6px;font-weight:bold;">1,144,000</td></tr>

            <tr style="background:#e3f2fd;font-weight:bold;"><td colspan="2" style="padding:6px;">【固定資産】</td><td></td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 20px;">建物</td><td style="text-align:right;padding:4px 6px;">1,000,000</td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 30px;">減価償却累計額</td><td style="text-align:right;padding:4px 6px;color:red;">△200,000</td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 20px;">備品</td><td style="text-align:right;padding:4px 6px;">300,000</td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 30px;">減価償却累計額</td><td style="text-align:right;padding:4px 6px;color:red;">△60,000</td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 20px;">土地</td><td style="text-align:right;padding:4px 6px;">2,000,000</td></tr>
            <tr style="border-top:1px solid #ddd;"><td colspan="2" style="padding:4px 6px 4px 20px;font-weight:bold;">固定資産合計</td><td style="text-align:right;padding:4px 6px;font-weight:bold;">3,040,000</td></tr>

            <tr style="background:#1a73e8;color:white;font-weight:bold;"><td colspan="2" style="padding:8px;">資産合計</td><td style="text-align:right;padding:8px;">4,184,000</td></tr>
        </tbody>
    </table>

    <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        <thead>
            <tr style="background:#e65100;color:white;">
                <th style="padding:8px;text-align:left;" colspan="2">負債の部</th>
                <th style="padding:8px;text-align:right;">金額（円）</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background:#fff3e0;font-weight:bold;"><td colspan="2" style="padding:6px;">【流動負債】</td><td></td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 20px;">買掛金</td><td style="text-align:right;padding:4px 6px;">400,000</td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 20px;">未払費用</td><td style="text-align:right;padding:4px 6px;">50,000</td></tr>
            <tr style="border-top:1px solid #ddd;"><td colspan="2" style="padding:4px 6px 4px 20px;font-weight:bold;">流動負債合計</td><td style="text-align:right;padding:4px 6px;font-weight:bold;">450,000</td></tr>
            <tr style="background:#fff3e0;font-weight:bold;"><td colspan="2" style="padding:6px;">【固定負債】</td><td></td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 20px;">借入金</td><td style="text-align:right;padding:4px 6px;">500,000</td></tr>
            <tr style="border-top:1px solid #ddd;"><td colspan="2" style="padding:4px 6px 4px 20px;font-weight:bold;">固定負債合計</td><td style="text-align:right;padding:4px 6px;font-weight:bold;">500,000</td></tr>
            <tr style="background:#e65100;color:white;font-weight:bold;"><td colspan="2" style="padding:8px;">負債合計</td><td style="text-align:right;padding:8px;">950,000</td></tr>
        </tbody>
    </table>

    <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        <thead>
            <tr style="background:#2e7d32;color:white;">
                <th style="padding:8px;text-align:left;" colspan="2">純資産の部</th>
                <th style="padding:8px;text-align:right;">金額（円）</th>
            </tr>
        </thead>
        <tbody>
            <tr><td colspan="2" style="padding:4px 6px 4px 20px;">資本金</td><td style="text-align:right;padding:4px 6px;">2,000,000</td></tr>
            <tr><td colspan="2" style="padding:4px 6px 4px 20px;">繰越利益剰余金</td><td style="text-align:right;padding:4px 6px;">1,234,000</td></tr>
            <tr style="background:#2e7d32;color:white;font-weight:bold;"><td colspan="2" style="padding:8px;">純資産合計</td><td style="text-align:right;padding:8px;">3,234,000</td></tr>
        </tbody>
    </table>

    <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        <tr style="background:#333;color:white;font-weight:bold;font-size:1.1rem;">
            <td style="padding:10px;">負債・純資産合計</td>
            <td style="text-align:right;padding:10px;">4,184,000</td>
        </tr>
    </table>
    <p style="text-align:center;margin-top:8px;color:#2e7d32;font-weight:bold;">
        資産合計 4,184,000 ＝ 負債・純資産合計 4,184,000 ✓ 一致！
    </p>
</div>

<div class="info-box success">
    <strong>✅ B/S作成のまとめ</strong><br>
    ・流動 → 固定の順に配列する<br>
    ・貸倒引当金・減価償却累計額は<strong>控除形式</strong>で記載<br>
    ・繰越利益剰余金に当期純利益を加算する<br>
    ・最後に<strong>資産合計 ＝ 負債＋純資産合計</strong>を確認
</div>
`,
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "貸借対照表の資産の部において、正しい配列順序はどれですか？",
                    options: [
                        "流動資産 → 固定資産",
                        "固定資産 → 流動資産",
                        "有形資産 → 無形資産",
                        "配列順序に決まりはない"
                    ],
                    answer: 0,
                    explanation: "貸借対照表では「流動性配列法」により、流動資産を先に、固定資産を後に記載します。これは換金性の高いものから順に並べるという考え方です。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "売掛金300,000円に対して貸倒引当金6,000円が設定されている場合、貸借対照表上の表示として正しいものはどれですか？",
                    options: [
                        "売掛金 294,000円のみ表示",
                        "売掛金 300,000円の下に貸倒引当金 △6,000円を表示",
                        "売掛金 300,000円と貸倒引当金 6,000円を別々の場所に表示",
                        "貸倒引当金は表示しない"
                    ],
                    answer: 1,
                    explanation: "貸倒引当金は、売掛金や受取手形の直下に控除形式（△マイナス表示）で記載します。これにより、債権の総額と回収不能見積額の両方がわかります。"
                },
                {
                    id: "q601_3",
                    type: "fill",
                    question: "貸借対照表の等式「資産 ＝ ○○ ＋ 純資産」の○○に入る言葉を漢字2文字で答えてください。",
                    answer: "負債",
                    explanation: "貸借対照表等式は「資産 ＝ 負債 ＋ 純資産」です。この等式は常に成り立ち、左側（借方）と右側（貸方）が必ず一致します。"
                },
                {
                    id: "q601_4",
                    type: "choice",
                    question: "繰越利益剰余金の期末残高の計算として正しいものはどれですか？",
                    options: [
                        "期首残高 × 当期純利益",
                        "期首残高 ＋ 当期純利益",
                        "期首残高 － 当期純利益",
                        "当期純利益のみ"
                    ],
                    answer: 1,
                    explanation: "繰越利益剰余金の期末残高は「期首残高 ＋ 当期純利益」で計算します。当期純損失の場合は「期首残高 − 当期純損失」となります。"
                },
                {
                    id: "q601_5",
                    type: "choice",
                    question: "建物の取得原価1,000,000円、減価償却累計額200,000円の場合、貸借対照表上の固定資産の表示として正しいものはどれですか？",
                    options: [
                        "建物 800,000円のみ表示",
                        "建物 1,000,000円の下に減価償却累計額 △200,000円を表示",
                        "建物 200,000円と表示",
                        "建物 1,200,000円と表示"
                    ],
                    answer: 1,
                    explanation: "固定資産は取得原価で表示し、その下に減価償却累計額を控除形式（△マイナス表示）で記載します。帳簿価額（簿価）は1,000,000−200,000＝800,000円ですが、B/Sでは両方の金額を表示します。"
                }
            ]
        },

        // ============================================
        // Module 602: 損益計算書の作成
        // ============================================
        {
            id: 602,
            title: "損益計算書の作成",
            duration: "20分",
            content: `
<h2>📊 損益計算書（P/L）の作成</h2>

<div class="info-box tip">
    <strong>💡 このモジュールのゴール</strong><br>
    精算表から正式な損益計算書（P/L）を作成できるようになること。<br>
    売上高から当期純利益までの段階的な利益計算を理解しましょう。
</div>

<h3>📌 損益計算書とは？</h3>
<p>損益計算書（そんえきけいさんしょ）は、<strong>一定期間</strong>における企業の<strong>経営成績</strong>を示す財務諸表です。英語では <strong>Profit and Loss Statement（P/L）</strong> と呼びます。</p>

<div class="visual-box">
    <h4>B/SとP/Lの違い</h4>
    <div class="compare-grid">
        <div class="compare-card">
            <h4>貸借対照表（B/S）</h4>
            <p><strong>ある一時点</strong>の財政状態</p>
            <p>例：「3月31日現在」</p>
            <p>→ 写真のイメージ（一瞬を切り取る）</p>
        </div>
        <div class="compare-card">
            <h4>損益計算書（P/L）</h4>
            <p><strong>一定期間</strong>の経営成績</p>
            <p>例：「4月1日〜3月31日」</p>
            <p>→ 動画のイメージ（期間の動きを記録）</p>
        </div>
    </div>
</div>

<h3>📌 報告式の損益計算書 ── 段階的利益計算</h3>
<p>P/Lは<strong>段階的に利益を計算</strong>していくのが特徴です。</p>

<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <strong>売上総利益（粗利）</strong><br>
            売上高 − 売上原価 ＝ 売上総利益
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <strong>営業利益</strong><br>
            売上総利益 − 販売費及び一般管理費 ＝ 営業利益
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <strong>経常利益</strong><br>
            営業利益 ＋ 営業外収益 − 営業外費用 ＝ 経常利益
        </div>
    </div>
    <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
            <strong>当期純利益</strong><br>
            簿記3級では経常利益 ＝ 当期純利益（特別損益は範囲外）
        </div>
    </div>
</div>

<h3>📌 売上原価の表示方法</h3>
<div class="info-box warning">
    <strong>⚠️ 超重要！売上原価の計算式</strong><br>
    <div style="font-size:1.1rem;margin:8px 0;">
        売上原価 ＝ 期首商品棚卸高 ＋ 当期商品仕入高 − 期末商品棚卸高
    </div>
    この「し・くり・くり・し」で計算した結果をP/Lに記載します。
</div>

<p>P/Lでの売上原価の表示には2つの方法があります。</p>

<div class="compare-grid">
    <div class="compare-card">
        <h4>方法1：内訳を表示する形式</h4>
        <table style="width:100%;">
            <tr><td>売上原価</td><td></td></tr>
            <tr><td style="padding-left:16px;">期首商品棚卸高</td><td style="text-align:right;">100,000</td></tr>
            <tr><td style="padding-left:16px;">当期商品仕入高</td><td style="text-align:right;">800,000</td></tr>
            <tr style="border-top:1px solid #ddd;"><td style="padding-left:24px;">合計</td><td style="text-align:right;">900,000</td></tr>
            <tr><td style="padding-left:16px;">期末商品棚卸高</td><td style="text-align:right;">△150,000</td></tr>
            <tr style="border-top:2px solid #333;font-weight:bold;"><td style="padding-left:24px;">売上原価</td><td style="text-align:right;">750,000</td></tr>
        </table>
    </div>
    <div class="compare-card">
        <h4>方法2：合計額のみ表示</h4>
        <table style="width:100%;">
            <tr style="font-weight:bold;"><td>売上原価</td><td style="text-align:right;">750,000</td></tr>
        </table>
        <p style="margin-top:12px;font-size:0.85rem;color:#666;">
            ※ 簿記3級の試験では方法1（内訳表示）が多く出題されます
        </p>
    </div>
</div>

<h3>📌 販売費及び一般管理費の内訳</h3>
<p>P/Lで記載される主な販管費項目は以下の通りです。</p>
<table style="width:100%;border-collapse:collapse;">
    <thead>
        <tr style="background:#f5f5f5;"><th style="padding:8px;text-align:left;">勘定科目</th><th style="padding:8px;text-align:left;">内容</th></tr>
    </thead>
    <tbody>
        <tr><td style="padding:6px;">給料</td><td style="padding:6px;">従業員への給与</td></tr>
        <tr style="background:#fafafa;"><td style="padding:6px;">広告宣伝費</td><td style="padding:6px;">広告・宣伝にかかった費用</td></tr>
        <tr><td style="padding:6px;">旅費交通費</td><td style="padding:6px;">出張費・交通費</td></tr>
        <tr style="background:#fafafa;"><td style="padding:6px;">通信費</td><td style="padding:6px;">電話・郵便などの費用</td></tr>
        <tr><td style="padding:6px;">消耗品費</td><td style="padding:6px;">文具・事務用品など</td></tr>
        <tr style="background:#fafafa;"><td style="padding:6px;">水道光熱費</td><td style="padding:6px;">水道・電気・ガス代</td></tr>
        <tr><td style="padding:6px;">支払家賃</td><td style="padding:6px;">事務所の家賃</td></tr>
        <tr style="background:#fafafa;"><td style="padding:6px;">保険料</td><td style="padding:6px;">火災保険など</td></tr>
        <tr><td style="padding:6px;">減価償却費</td><td style="padding:6px;">固定資産の償却費</td></tr>
        <tr style="background:#fafafa;"><td style="padding:6px;">貸倒引当金繰入</td><td style="padding:6px;">貸倒引当金の設定額</td></tr>
        <tr><td style="padding:6px;">租税公課</td><td style="padding:6px;">固定資産税・印紙税など</td></tr>
    </tbody>
</table>

<h3>📌 営業外収益・営業外費用</h3>
<div class="compare-grid">
    <div class="compare-card">
        <h4>営業外収益（本業以外の収益）</h4>
        <ul>
            <li>受取利息</li>
            <li>受取配当金</li>
            <li>雑益（雑収入）</li>
            <li>固定資産売却益</li>
        </ul>
    </div>
    <div class="compare-card">
        <h4>営業外費用（本業以外の費用）</h4>
        <ul>
            <li>支払利息</li>
            <li>雑損（雑損失）</li>
            <li>固定資産売却損</li>
        </ul>
    </div>
</div>

<h3>📌 完成した損益計算書の例</h3>
<div class="visual-box">
    <h4 style="text-align:center;">損 益 計 算 書</h4>
    <p style="text-align:center;font-size:0.85rem;color:#666;">自 令和X年4月1日 至 令和X年3月31日</p>
    <table style="width:100%;border-collapse:collapse;">
        <thead>
            <tr style="background:#1a73e8;color:white;">
                <th style="padding:8px;text-align:left;" colspan="2">科目</th>
                <th style="padding:8px;text-align:right;">金額（円）</th>
            </tr>
        </thead>
        <tbody>
            <tr style="font-weight:bold;background:#e3f2fd;"><td colspan="2" style="padding:8px;">売上高</td><td style="text-align:right;padding:8px;">2,000,000</td></tr>
            <tr style="font-weight:bold;background:#f5f5f5;"><td colspan="2" style="padding:8px;">売上原価</td><td></td></tr>
            <tr><td style="padding:4px 8px 4px 24px;" colspan="2">期首商品棚卸高</td><td style="text-align:right;padding:4px 8px;">100,000</td></tr>
            <tr><td style="padding:4px 8px 4px 24px;" colspan="2">当期商品仕入高</td><td style="text-align:right;padding:4px 8px;">800,000</td></tr>
            <tr><td style="padding:4px 8px 4px 32px;" colspan="2">合計</td><td style="text-align:right;padding:4px 8px;">900,000</td></tr>
            <tr><td style="padding:4px 8px 4px 24px;" colspan="2">期末商品棚卸高</td><td style="text-align:right;padding:4px 8px;">150,000</td></tr>
            <tr style="border-top:2px solid #333;font-weight:bold;"><td style="padding:4px 8px 4px 32px;" colspan="2">売上原価</td><td style="text-align:right;padding:4px 8px;">750,000</td></tr>

            <tr style="background:#e8f5e9;font-weight:bold;font-size:1.05rem;border-top:2px solid #2e7d32;">
                <td colspan="2" style="padding:8px;">売上総利益</td>
                <td style="text-align:right;padding:8px;">1,250,000</td>
            </tr>

            <tr style="font-weight:bold;background:#f5f5f5;"><td colspan="2" style="padding:8px;">販売費及び一般管理費</td><td></td></tr>
            <tr><td style="padding:4px 8px 4px 24px;" colspan="2">給料</td><td style="text-align:right;padding:4px 8px;">400,000</td></tr>
            <tr><td style="padding:4px 8px 4px 24px;" colspan="2">広告宣伝費</td><td style="text-align:right;padding:4px 8px;">50,000</td></tr>
            <tr><td style="padding:4px 8px 4px 24px;" colspan="2">支払家賃</td><td style="text-align:right;padding:4px 8px;">240,000</td></tr>
            <tr><td style="padding:4px 8px 4px 24px;" colspan="2">水道光熱費</td><td style="text-align:right;padding:4px 8px;">60,000</td></tr>
            <tr><td style="padding:4px 8px 4px 24px;" colspan="2">減価償却費</td><td style="text-align:right;padding:4px 8px;">80,000</td></tr>
            <tr><td style="padding:4px 8px 4px 24px;" colspan="2">貸倒引当金繰入</td><td style="text-align:right;padding:4px 8px;">6,000</td></tr>
            <tr style="border-top:1px solid #ddd;font-weight:bold;"><td style="padding:4px 8px 4px 32px;" colspan="2">販管費合計</td><td style="text-align:right;padding:4px 8px;">836,000</td></tr>

            <tr style="background:#e8f5e9;font-weight:bold;font-size:1.05rem;border-top:2px solid #2e7d32;">
                <td colspan="2" style="padding:8px;">営業利益</td>
                <td style="text-align:right;padding:8px;">414,000</td>
            </tr>

            <tr style="font-weight:bold;background:#f5f5f5;"><td colspan="2" style="padding:8px;">営業外収益</td><td></td></tr>
            <tr><td style="padding:4px 8px 4px 24px;" colspan="2">受取利息</td><td style="text-align:right;padding:4px 8px;">5,000</td></tr>
            <tr style="font-weight:bold;background:#f5f5f5;"><td colspan="2" style="padding:8px;">営業外費用</td><td></td></tr>
            <tr><td style="padding:4px 8px 4px 24px;" colspan="2">支払利息</td><td style="text-align:right;padding:4px 8px;">15,000</td></tr>

            <tr style="background:#ffeb3b;font-weight:bold;font-size:1.1rem;border-top:3px solid #333;">
                <td colspan="2" style="padding:10px;">当期純利益</td>
                <td style="text-align:right;padding:10px;">404,000</td>
            </tr>
        </tbody>
    </table>
    <p style="text-align:center;margin-top:8px;font-size:0.9rem;color:#555;">
        売上高 2,000,000 − 売上原価 750,000 ＝ 売上総利益 1,250,000<br>
        売上総利益 1,250,000 − 販管費 836,000 ＝ 営業利益 414,000<br>
        営業利益 414,000 ＋ 受取利息 5,000 − 支払利息 15,000 ＝ 当期純利益 404,000
    </p>
</div>

<h3>📌 精算表からP/Lへの転記方法</h3>
<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            精算表の「損益計算書」欄の<strong>貸方</strong>にある収益科目を転記
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            精算表の「損益計算書」欄の<strong>借方</strong>にある費用科目を転記
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            売上原価は「しくりくりし」の結果を<strong>内訳表示</strong>で記載
        </div>
    </div>
    <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
            段階的に利益を計算して<strong>当期純利益</strong>を算出
        </div>
    </div>
</div>

<div class="info-box success">
    <strong>✅ P/L作成のまとめ</strong><br>
    ・売上高 → 売上原価 → 売上総利益 → 販管費 → 営業利益 → 当期純利益の順で段階的に計算<br>
    ・売上原価は「期首 ＋ 仕入 − 期末」で計算して内訳表示<br>
    ・P/Lの当期純利益はB/Sの繰越利益剰余金に加算される
</div>
`,
            quiz: [
                {
                    id: "q602_1",
                    type: "choice",
                    question: "損益計算書における利益の計算順序として正しいものはどれですか？",
                    options: [
                        "当期純利益 → 営業利益 → 売上総利益",
                        "売上総利益 → 当期純利益 → 営業利益",
                        "売上総利益 → 営業利益 → 当期純利益",
                        "営業利益 → 売上総利益 → 当期純利益"
                    ],
                    answer: 2,
                    explanation: "P/Lの利益は「売上総利益 → 営業利益 → 当期純利益」の順に段階的に計算します。売上高から売上原価を引いて売上総利益、販管費を引いて営業利益、営業外損益を加減して当期純利益を求めます。"
                },
                {
                    id: "q602_2",
                    type: "fill",
                    question: "売上原価の計算式：期首商品棚卸高 ＋ 当期商品仕入高 − ○○○○○○○ ＝ 売上原価。○に入る言葉を答えてください。",
                    answer: "期末商品棚卸高",
                    explanation: "売上原価 ＝ 期首商品棚卸高 ＋ 当期商品仕入高 − 期末商品棚卸高 です。期首にあった商品と当期に仕入れた商品の合計から、期末に残っている商品を引くことで、実際に売れた商品の原価がわかります。"
                },
                {
                    id: "q602_3",
                    type: "choice",
                    question: "期首商品棚卸高100,000円、当期商品仕入高800,000円、期末商品棚卸高150,000円のとき、売上原価はいくらですか？",
                    options: [
                        "650,000円",
                        "700,000円",
                        "750,000円",
                        "850,000円"
                    ],
                    answer: 2,
                    explanation: "売上原価 ＝ 期首100,000 ＋ 仕入800,000 − 期末150,000 ＝ 750,000円です。「しくりくりし」の仕訳結果と一致する金額になります。"
                },
                {
                    id: "q602_4",
                    type: "choice",
                    question: "「受取利息」は損益計算書のどの区分に表示されますか？",
                    options: [
                        "売上高",
                        "販売費及び一般管理費",
                        "営業外収益",
                        "営業外費用"
                    ],
                    answer: 2,
                    explanation: "受取利息は本業（商品売買）以外から得た収益なので「営業外収益」に分類されます。同様に、受取配当金なども営業外収益です。"
                },
                {
                    id: "q602_5",
                    type: "fill",
                    question: "売上総利益から販売費及び一般管理費を差し引いた利益を何といいますか？漢字4文字で答えてください。",
                    answer: "営業利益",
                    explanation: "売上総利益 − 販売費及び一般管理費 ＝ 営業利益です。営業利益は「本業でどれだけ稼いだか」を示す重要な指標です。"
                }
            ]
        },

        // ============================================
        // Module 603: 主要簿と補助簿
        // ============================================
        {
            id: 603,
            title: "主要簿と補助簿",
            duration: "20分",
            content: `
<h2>📚 主要簿と補助簿</h2>

<div class="info-box tip">
    <strong>💡 このモジュールのゴール</strong><br>
    主要簿と補助簿の種類・役割を理解し、取引ごとにどの帳簿に記入するかを判断できるようになること。<br>
    簿記3級の第2問で頻出です！
</div>

<h3>📌 帳簿の全体像</h3>

<div class="visual-box">
    <h4>帳簿体系の全体図</h4>
    <div style="text-align:center;padding:16px;">
        <div style="background:#1a73e8;color:white;padding:12px;border-radius:8px;font-size:1.2rem;font-weight:bold;max-width:300px;margin:0 auto 16px;">帳簿</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;max-width:600px;margin:0 auto;">
            <div>
                <div style="background:#e65100;color:white;padding:10px;border-radius:8px;font-weight:bold;margin-bottom:8px;">主要簿</div>
                <div style="background:#fff3e0;padding:8px;border-radius:4px;margin-bottom:4px;">仕訳帳</div>
                <div style="background:#fff3e0;padding:8px;border-radius:4px;">総勘定元帳</div>
            </div>
            <div>
                <div style="background:#2e7d32;color:white;padding:10px;border-radius:8px;font-weight:bold;margin-bottom:8px;">補助簿</div>
                <div style="background:#e8f5e9;padding:8px;border-radius:4px;margin-bottom:4px;">補助記入帳</div>
                <div style="background:#e8f5e9;padding:8px;border-radius:4px;">補助元帳</div>
            </div>
        </div>
    </div>
</div>

<h3>📌 主要簿（すべての取引を記録）</h3>

<div class="compare-grid">
    <div class="compare-card">
        <h4>仕訳帳（しわけちょう）</h4>
        <p><strong>役割</strong>：すべての取引を<strong>日付順</strong>に仕訳形式で記録</p>
        <table style="width:100%;font-size:0.85rem;">
            <thead>
                <tr style="background:#f5f5f5;"><th>日付</th><th>借方科目</th><th>金額</th><th>貸方科目</th><th>金額</th></tr>
            </thead>
            <tbody>
                <tr><td>4/1</td><td>仕入</td><td>50,000</td><td>買掛金</td><td>50,000</td></tr>
                <tr><td>4/3</td><td>売掛金</td><td>80,000</td><td>売上</td><td>80,000</td></tr>
            </tbody>
        </table>
        <p style="font-size:0.85rem;color:#666;margin-top:8px;">→ 取引を<strong>発生順</strong>に記録する帳簿</p>
    </div>
    <div class="compare-card">
        <h4>総勘定元帳（そうかんじょうもとちょう）</h4>
        <p><strong>役割</strong>：仕訳帳から<strong>勘定科目ごと</strong>に転記して記録</p>
        <table style="width:100%;font-size:0.85rem;">
            <thead>
                <tr style="background:#f5f5f5;"><th colspan="2">売掛金</th></tr>
                <tr><th>借方</th><th>貸方</th></tr>
            </thead>
            <tbody>
                <tr><td>4/3 売上 80,000</td><td></td></tr>
            </tbody>
        </table>
        <p style="font-size:0.85rem;color:#666;margin-top:8px;">→ 科目ごとの<strong>残高</strong>がわかる帳簿</p>
    </div>
</div>

<h3>📌 補助簿の種類</h3>
<p>補助簿は<strong>補助記入帳</strong>と<strong>補助元帳</strong>に分かれます。</p>

<div class="visual-box">
    <h4>補助簿の分類</h4>
    <table style="width:100%;border-collapse:collapse;">
        <thead>
            <tr style="background:#2e7d32;color:white;">
                <th style="padding:8px;">分類</th>
                <th style="padding:8px;">帳簿名</th>
                <th style="padding:8px;">記録する内容</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background:#e8f5e9;font-weight:bold;"><td colspan="3" style="padding:6px;">補助記入帳（特定の取引を詳しく記録）</td></tr>
            <tr><td style="padding:6px;" rowspan="6"></td><td style="padding:6px;">現金出納帳</td><td style="padding:6px;">現金の収入・支出</td></tr>
            <tr style="background:#fafafa;"><td style="padding:6px;">当座預金出納帳</td><td style="padding:6px;">当座預金の預入・引出</td></tr>
            <tr><td style="padding:6px;">仕入帳</td><td style="padding:6px;">商品の仕入取引</td></tr>
            <tr style="background:#fafafa;"><td style="padding:6px;">売上帳</td><td style="padding:6px;">商品の売上取引</td></tr>
            <tr><td style="padding:6px;">受取手形記入帳</td><td style="padding:6px;">受取手形の明細</td></tr>
            <tr style="background:#fafafa;"><td style="padding:6px;">支払手形記入帳</td><td style="padding:6px;">支払手形の明細</td></tr>

            <tr style="background:#e8f5e9;font-weight:bold;"><td colspan="3" style="padding:6px;">補助元帳（特定の勘定の内訳を記録）</td></tr>
            <tr><td style="padding:6px;" rowspan="4"></td><td style="padding:6px;">売掛金元帳（得意先元帳）</td><td style="padding:6px;">得意先ごとの売掛金残高</td></tr>
            <tr style="background:#fafafa;"><td style="padding:6px;">買掛金元帳（仕入先元帳）</td><td style="padding:6px;">仕入先ごとの買掛金残高</td></tr>
            <tr><td style="padding:6px;">商品有高帳</td><td style="padding:6px;">商品の種類ごとの在庫</td></tr>
            <tr style="background:#fafafa;"><td style="padding:6px;">固定資産台帳</td><td style="padding:6px;">固定資産の明細・償却状況</td></tr>
        </tbody>
    </table>
</div>

<h3>📌 現金出納帳の記入方法</h3>
<div class="visual-box">
    <h4>現金出納帳の例</h4>
    <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
        <thead>
            <tr style="background:#1a73e8;color:white;">
                <th style="padding:6px;">日付</th><th style="padding:6px;">摘要</th><th style="padding:6px;">収入</th><th style="padding:6px;">支出</th><th style="padding:6px;">残高</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding:4px;">4/1</td><td style="padding:4px;">前月繰越</td><td style="text-align:right;padding:4px;"></td><td style="text-align:right;padding:4px;"></td><td style="text-align:right;padding:4px;">100,000</td></tr>
            <tr style="background:#fafafa;"><td style="padding:4px;">4/5</td><td style="padding:4px;">売掛金回収（A商店）</td><td style="text-align:right;padding:4px;">50,000</td><td style="text-align:right;padding:4px;"></td><td style="text-align:right;padding:4px;">150,000</td></tr>
            <tr><td style="padding:4px;">4/10</td><td style="padding:4px;">消耗品購入</td><td style="text-align:right;padding:4px;"></td><td style="text-align:right;padding:4px;">3,000</td><td style="text-align:right;padding:4px;">147,000</td></tr>
            <tr style="background:#fafafa;"><td style="padding:4px;">4/30</td><td style="padding:4px;">次月繰越</td><td style="text-align:right;padding:4px;"></td><td style="text-align:right;padding:4px;"></td><td style="text-align:right;padding:4px;">147,000</td></tr>
        </tbody>
    </table>
</div>

<h3>📌 商品有高帳（先入先出法と移動平均法）</h3>
<p>商品有高帳は商品の受入・払出・残高を記録する帳簿です。払出単価の計算方法に2種類あります。</p>

<div class="compare-grid">
    <div class="compare-card">
        <h4>先入先出法（FIFO）</h4>
        <p><strong>考え方</strong>：先に仕入れた商品から先に売れたと仮定</p>
        <div style="background:#e3f2fd;padding:12px;border-radius:8px;margin-top:8px;">
            <p>例：</p>
            <p>① @100 × 10個 仕入</p>
            <p>② @120 × 10個 仕入</p>
            <p>③ 15個を売上</p>
            <p style="font-weight:bold;margin-top:8px;">
                → 払出：@100×10個 + @120×5個<br>
                = 1,000 + 600 = 1,600円
            </p>
        </div>
    </div>
    <div class="compare-card">
        <h4>移動平均法</h4>
        <p><strong>考え方</strong>：仕入のたびに平均単価を計算し直す</p>
        <div style="background:#e3f2fd;padding:12px;border-radius:8px;margin-top:8px;">
            <p>例：</p>
            <p>① @100 × 10個 仕入（残10個）</p>
            <p>② @120 × 10個 仕入（残20個）</p>
            <p>→ 平均単価 = (1,000+1,200)÷20 = @110</p>
            <p>③ 15個を売上</p>
            <p style="font-weight:bold;margin-top:8px;">
                → 払出：@110×15個 = 1,650円
            </p>
        </div>
    </div>
</div>

<h3>📌 取引と帳簿の組み合わせ</h3>
<div class="info-box warning">
    <strong>⚠️ 試験で頻出！取引と関連帳簿</strong>
</div>

<table style="width:100%;border-collapse:collapse;">
    <thead>
        <tr style="background:#1a73e8;color:white;">
            <th style="padding:8px;text-align:left;">取引例</th>
            <th style="padding:8px;text-align:left;">関連する帳簿</th>
        </tr>
    </thead>
    <tbody>
        <tr><td style="padding:6px;">商品を掛けで仕入れた</td><td style="padding:6px;">仕訳帳、総勘定元帳、仕入帳、買掛金元帳</td></tr>
        <tr style="background:#fafafa;"><td style="padding:6px;">商品を現金で売り上げた</td><td style="padding:6px;">仕訳帳、総勘定元帳、売上帳、現金出納帳</td></tr>
        <tr><td style="padding:6px;">掛代金を小切手で受け取った</td><td style="padding:6px;">仕訳帳、総勘定元帳、売掛金元帳、当座預金出納帳</td></tr>
        <tr style="background:#fafafa;"><td style="padding:6px;">約束手形を振り出して支払った</td><td style="padding:6px;">仕訳帳、総勘定元帳、支払手形記入帳、買掛金元帳</td></tr>
        <tr><td style="padding:6px;">備品を現金で購入した</td><td style="padding:6px;">仕訳帳、総勘定元帳、現金出納帳、固定資産台帳</td></tr>
    </tbody>
</table>

<div class="info-box tip">
    <strong>💡 覚え方のコツ</strong><br>
    ・<strong>主要簿（仕訳帳・総勘定元帳）は全ての取引で必ず記入</strong><br>
    ・現金が動く → 現金出納帳<br>
    ・当座預金が動く → 当座預金出納帳<br>
    ・商品を仕入れた → 仕入帳<br>
    ・商品を売り上げた → 売上帳<br>
    ・売掛金が動く → 売掛金元帳<br>
    ・買掛金が動く → 買掛金元帳
</div>

<div class="info-box success">
    <strong>✅ まとめ</strong><br>
    ・帳簿は<strong>主要簿</strong>（仕訳帳・総勘定元帳）と<strong>補助簿</strong>に分かれる<br>
    ・補助簿はさらに<strong>補助記入帳</strong>と<strong>補助元帳</strong>に分かれる<br>
    ・商品有高帳は<strong>先入先出法</strong>と<strong>移動平均法</strong>の2つの計算方法がある<br>
    ・取引内容から関連する帳簿を正しく判断できることが重要
</div>
`,
            quiz: [
                {
                    id: "q603_1",
                    type: "choice",
                    question: "すべての取引について必ず記入しなければならない帳簿はどれですか？",
                    options: [
                        "現金出納帳と当座預金出納帳",
                        "仕訳帳と総勘定元帳",
                        "売掛金元帳と買掛金元帳",
                        "仕入帳と売上帳"
                    ],
                    answer: 1,
                    explanation: "仕訳帳と総勘定元帳は「主要簿」と呼ばれ、すべての取引を記録する帳簿です。補助簿は特定の取引だけを記録します。"
                },
                {
                    id: "q603_2",
                    type: "choice",
                    question: "「商品を掛けで仕入れた」取引に関連する補助簿として、正しい組み合わせはどれですか？",
                    options: [
                        "売上帳・売掛金元帳",
                        "仕入帳・買掛金元帳",
                        "仕入帳・現金出納帳",
                        "買掛金元帳・現金出納帳"
                    ],
                    answer: 1,
                    explanation: "掛けで仕入れたので、商品の仕入を記録する「仕入帳」と、仕入先ごとの買掛金を管理する「買掛金元帳」に記入します。現金は動いていないので現金出納帳は不要です。"
                },
                {
                    id: "q603_3",
                    type: "fill",
                    question: "得意先ごとの売掛金残高を管理する補助元帳を何といいますか？（漢字5文字）",
                    answer: "売掛金元帳",
                    explanation: "売掛金元帳（得意先元帳ともいう）は、得意先ごとに売掛金の増減と残高を記録する補助元帳です。同様に、仕入先ごとの買掛金を管理するのが買掛金元帳です。"
                },
                {
                    id: "q603_4",
                    type: "choice",
                    question: "先入先出法で次の取引の払出単価を計算してください。4/1 @100×10個仕入、4/5 @120×10個仕入、4/10 8個売上。売上原価はいくらですか？",
                    options: [
                        "800円",
                        "880円",
                        "960円",
                        "1,000円"
                    ],
                    answer: 0,
                    explanation: "先入先出法では先に仕入れた商品から先に売れたと仮定します。4/10に8個売上 → @100の商品から8個払出 → @100×8個＝800円が売上原価です。"
                },
                {
                    id: "q603_5",
                    type: "choice",
                    question: "移動平均法で次の平均単価を計算してください。在庫：@100×10個、追加仕入：@140×10個。新しい平均単価はいくらですか？",
                    options: [
                        "@100",
                        "@110",
                        "@120",
                        "@140"
                    ],
                    answer: 2,
                    explanation: "移動平均法の平均単価 ＝（既存の在庫金額＋新規仕入金額）÷ 合計数量 ＝（100×10＋140×10）÷（10＋10）＝（1,000＋1,400）÷20 ＝ 2,400÷20 ＝ @120 です。"
                }
            ]
        },

        // ============================================
        // Module 604: 伝票制度
        // ============================================
        {
            id: 604,
            title: "伝票制度",
            duration: "15分",
            content: `
<h2>📝 伝票制度</h2>

<div class="info-box tip">
    <strong>💡 このモジュールのゴール</strong><br>
    3伝票制の仕組みを理解し、各伝票の記入方法と一部現金取引の処理方法をマスターすること。<br>
    仕訳日計表の作成もできるようになりましょう。
</div>

<h3>📌 伝票とは？</h3>
<p>伝票（でんぴょう）は、<strong>仕訳帳の代わり</strong>に取引を記録するための用紙です。仕訳帳に1件ずつ記入する代わりに、取引ごとに伝票を作成し、後でまとめて転記する方法です。</p>

<div class="info-box tip">
    <strong>💡 なぜ伝票を使うの？</strong><br>
    ・複数の担当者が<strong>同時に</strong>取引を記録できる<br>
    ・仕訳帳は1冊しかないが、伝票は何枚でも同時に書ける<br>
    ・取引の<strong>分類・整理</strong>がしやすい
</div>

<h3>📌 3伝票制</h3>
<p>簿記3級で学ぶのは<strong>3伝票制</strong>です。取引を3種類の伝票で記録します。</p>

<div class="visual-box">
    <h4>3種類の伝票</h4>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
        <div style="background:#e3f2fd;padding:16px;border-radius:8px;border-top:4px solid #1a73e8;">
            <h4 style="color:#1a73e8;margin-bottom:8px;">入金伝票</h4>
            <p style="font-size:0.9rem;">現金が<strong>入ってくる</strong>取引</p>
            <p style="font-size:0.85rem;color:#555;margin-top:8px;">
                借方は必ず「現金」<br>
                → 貸方科目と金額だけ記入
            </p>
        </div>
        <div style="background:#fff3e0;padding:16px;border-radius:8px;border-top:4px solid #e65100;">
            <h4 style="color:#e65100;margin-bottom:8px;">出金伝票</h4>
            <p style="font-size:0.9rem;">現金が<strong>出ていく</strong>取引</p>
            <p style="font-size:0.85rem;color:#555;margin-top:8px;">
                貸方は必ず「現金」<br>
                → 借方科目と金額だけ記入
            </p>
        </div>
        <div style="background:#e8f5e9;padding:16px;border-radius:8px;border-top:4px solid #2e7d32;">
            <h4 style="color:#2e7d32;margin-bottom:8px;">振替伝票</h4>
            <p style="font-size:0.9rem;">現金が<strong>動かない</strong>取引</p>
            <p style="font-size:0.85rem;color:#555;margin-top:8px;">
                借方・貸方の両方を記入<br>
                → 通常の仕訳と同じ形式
            </p>
        </div>
    </div>
</div>

<h3>📌 各伝票の記入例</h3>

<div class="compare-grid">
    <div class="compare-card">
        <h4 style="color:#1a73e8;">入金伝票の例</h4>
        <p style="font-size:0.85rem;color:#666;">取引：売掛金50,000円を現金で回収</p>
        <table style="width:100%;border:2px solid #1a73e8;">
            <tr style="background:#1a73e8;color:white;"><th colspan="2" style="padding:6px;">入金伝票　No.001</th></tr>
            <tr style="background:#e3f2fd;"><td style="padding:4px;">日付</td><td style="padding:4px;">4月5日</td></tr>
            <tr><td style="padding:4px;">科目（貸方）</td><td style="padding:4px;">売掛金</td></tr>
            <tr style="background:#e3f2fd;"><td style="padding:4px;">金額</td><td style="padding:4px;">50,000</td></tr>
        </table>
        <p style="font-size:0.8rem;color:#555;margin-top:4px;">
            仕訳：(借) 現金 50,000 / (貸) 売掛金 50,000
        </p>
    </div>
    <div class="compare-card">
        <h4 style="color:#e65100;">出金伝票の例</h4>
        <p style="font-size:0.85rem;color:#666;">取引：消耗品3,000円を現金で購入</p>
        <table style="width:100%;border:2px solid #e65100;">
            <tr style="background:#e65100;color:white;"><th colspan="2" style="padding:6px;">出金伝票　No.002</th></tr>
            <tr style="background:#fff3e0;"><td style="padding:4px;">日付</td><td style="padding:4px;">4月10日</td></tr>
            <tr><td style="padding:4px;">科目（借方）</td><td style="padding:4px;">消耗品費</td></tr>
            <tr style="background:#fff3e0;"><td style="padding:4px;">金額</td><td style="padding:4px;">3,000</td></tr>
        </table>
        <p style="font-size:0.8rem;color:#555;margin-top:4px;">
            仕訳：(借) 消耗品費 3,000 / (貸) 現金 3,000
        </p>
    </div>
</div>

<div class="visual-box">
    <h4 style="color:#2e7d32;">振替伝票の例</h4>
    <p style="font-size:0.85rem;color:#666;">取引：商品80,000円を掛けで売り上げた</p>
    <table style="width:80%;margin:0 auto;border:2px solid #2e7d32;">
        <tr style="background:#2e7d32;color:white;"><th colspan="4" style="padding:6px;">振替伝票　No.003　　日付：4月15日</th></tr>
        <tr style="background:#e8f5e9;font-weight:bold;"><th style="padding:4px;" colspan="2">借方</th><th style="padding:4px;" colspan="2">貸方</th></tr>
        <tr><td style="padding:4px;">売掛金</td><td style="text-align:right;padding:4px;">80,000</td><td style="padding:4px;">売上</td><td style="text-align:right;padding:4px;">80,000</td></tr>
    </table>
</div>

<h3>📌 一部現金取引の処理</h3>
<p>「商品100,000円を仕入れ、代金のうち30,000円を現金で支払い、残額は掛けとした」のように、<strong>一部だけ現金が動く取引</strong>を「一部現金取引」といいます。</p>

<div class="info-box warning">
    <strong>⚠️ 超重要！2つの処理方法</strong><br>
    一部現金取引は<strong>取引分解法</strong>と<strong>擬制法</strong>の2つの方法で処理できます。
</div>

<div class="compare-grid">
    <div class="compare-card">
        <h4>取引分解法</h4>
        <p>取引を「現金取引」と「掛取引」に<strong>分解</strong>する方法</p>
        <div style="background:#e3f2fd;padding:12px;border-radius:8px;margin-top:8px;">
            <p style="font-weight:bold;">出金伝票（現金部分）</p>
            <p>科目：仕入　金額：30,000</p>
            <p style="font-size:0.8rem;color:#555;">仕訳：(借) 仕入 30,000 / (貸) 現金 30,000</p>
        </div>
        <div style="background:#e8f5e9;padding:12px;border-radius:8px;margin-top:8px;">
            <p style="font-weight:bold;">振替伝票（掛け部分）</p>
            <p>借方：仕入 70,000 / 貸方：買掛金 70,000</p>
        </div>
    </div>
    <div class="compare-card">
        <h4>擬制法（ぎせいほう）</h4>
        <p>全額をいったん掛取引と<strong>みなして</strong>、現金支払い分を別に起票する方法</p>
        <div style="background:#e8f5e9;padding:12px;border-radius:8px;margin-top:8px;">
            <p style="font-weight:bold;">振替伝票（全額を掛け）</p>
            <p>借方：仕入 100,000 / 貸方：買掛金 100,000</p>
        </div>
        <div style="background:#fff3e0;padding:12px;border-radius:8px;margin-top:8px;">
            <p style="font-weight:bold;">出金伝票（掛け代金を現金で支払い）</p>
            <p>科目：買掛金　金額：30,000</p>
            <p style="font-size:0.8rem;color:#555;">仕訳：(借) 買掛金 30,000 / (貸) 現金 30,000</p>
        </div>
    </div>
</div>

<div class="info-box tip">
    <strong>💡 見分け方のコツ</strong><br>
    ・<strong>取引分解法</strong>：仕入が30,000と70,000に分かれる（出金伝票に「仕入」が出る）<br>
    ・<strong>擬制法</strong>：仕入は100,000のまま（出金伝票に「買掛金」が出る）<br>
    試験問題で「出金伝票に記入される科目は？」と聞かれたら、どちらの方法かで答えが変わります！
</div>

<h3>📌 仕訳日計表の作成</h3>
<p>仕訳日計表は、1日分の伝票をまとめて<strong>勘定科目ごとに集計</strong>した表です。</p>

<div class="visual-box">
    <h4>仕訳日計表の例</h4>
    <p style="font-size:0.85rem;color:#666;text-align:center;">令和X年4月5日</p>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
        <thead>
            <tr style="background:#1a73e8;color:white;">
                <th style="padding:6px;">勘定科目</th>
                <th style="padding:6px;text-align:right;">借方</th>
                <th style="padding:6px;text-align:right;">貸方</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding:4px;">現金</td><td style="text-align:right;padding:4px;">50,000</td><td style="text-align:right;padding:4px;">3,000</td></tr>
            <tr style="background:#fafafa;"><td style="padding:4px;">売掛金</td><td style="text-align:right;padding:4px;">80,000</td><td style="text-align:right;padding:4px;">50,000</td></tr>
            <tr><td style="padding:4px;">仕入</td><td style="text-align:right;padding:4px;">100,000</td><td style="text-align:right;padding:4px;"></td></tr>
            <tr style="background:#fafafa;"><td style="padding:4px;">買掛金</td><td style="text-align:right;padding:4px;"></td><td style="text-align:right;padding:4px;">100,000</td></tr>
            <tr><td style="padding:4px;">売上</td><td style="text-align:right;padding:4px;"></td><td style="text-align:right;padding:4px;">80,000</td></tr>
            <tr style="background:#fafafa;"><td style="padding:4px;">消耗品費</td><td style="text-align:right;padding:4px;">3,000</td><td style="text-align:right;padding:4px;"></td></tr>
            <tr style="background:#e3f2fd;font-weight:bold;border-top:2px solid #333;">
                <td style="padding:6px;">合計</td>
                <td style="text-align:right;padding:6px;">233,000</td>
                <td style="text-align:right;padding:6px;">233,000</td>
            </tr>
        </tbody>
    </table>
    <p style="text-align:center;margin-top:8px;color:#2e7d32;font-weight:bold;">
        借方合計 233,000 ＝ 貸方合計 233,000 ✓ 一致！
    </p>
</div>

<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            入金伝票 → 借方に「現金」、貸方に記載された科目を集計
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            出金伝票 → 貸方に「現金」、借方に記載された科目を集計
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            振替伝票 → 借方・貸方それぞれの科目と金額を集計
        </div>
    </div>
    <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
            同じ科目は合算し、<strong>借方合計 ＝ 貸方合計</strong>を確認
        </div>
    </div>
</div>

<div class="info-box success">
    <strong>✅ 伝票制度のまとめ</strong><br>
    ・3伝票制は<strong>入金伝票・出金伝票・振替伝票</strong>の3種類<br>
    ・入金伝票の借方は必ず「現金」、出金伝票の貸方は必ず「現金」<br>
    ・一部現金取引は<strong>取引分解法</strong>と<strong>擬制法</strong>の2つの方法がある<br>
    ・仕訳日計表では<strong>借方合計＝貸方合計</strong>になることを確認
</div>
`,
            quiz: [
                {
                    id: "q604_1",
                    type: "choice",
                    question: "3伝票制において、現金が動かない取引を記録する伝票はどれですか？",
                    options: [
                        "入金伝票",
                        "出金伝票",
                        "振替伝票",
                        "仕訳伝票"
                    ],
                    answer: 2,
                    explanation: "現金が動かない取引（例：掛け仕入、掛け売上）は振替伝票に記入します。入金伝票は現金の入金取引、出金伝票は現金の出金取引に使用します。"
                },
                {
                    id: "q604_2",
                    type: "fill",
                    question: "入金伝票の借方科目は必ず何ですか？漢字2文字で答えてください。",
                    answer: "現金",
                    explanation: "入金伝票は現金が入ってくる取引を記録するため、借方は必ず「現金」です。そのため、入金伝票には貸方の科目と金額だけを記入すれば済みます。"
                },
                {
                    id: "q604_3",
                    type: "choice",
                    question: "商品80,000円を仕入れ、20,000円を現金で支払い、残額は掛けとした。擬制法による出金伝票の科目と金額として正しいものはどれですか？",
                    options: [
                        "仕入 20,000",
                        "買掛金 20,000",
                        "仕入 80,000",
                        "買掛金 60,000"
                    ],
                    answer: 1,
                    explanation: "擬制法では、まず全額を掛け取引とみなし（振替伝票：仕入80,000/買掛金80,000）、次に現金支払い分の出金伝票を起票します（買掛金20,000）。出金伝票の科目は「買掛金」になります。"
                },
                {
                    id: "q604_4",
                    type: "choice",
                    question: "仕訳日計表について正しい記述はどれですか？",
                    options: [
                        "1ヶ月分の伝票をまとめた表である",
                        "伝票の記入ミスを見つけるための表である",
                        "1日分の伝票を勘定科目ごとに集計した表である",
                        "精算表と同じ目的で作成する表である"
                    ],
                    answer: 2,
                    explanation: "仕訳日計表は1日分の伝票を勘定科目ごとに集計した表です。この表を作成した後、総勘定元帳に転記します。借方合計と貸方合計は必ず一致します。"
                },
                {
                    id: "q604_5",
                    type: "choice",
                    question: "同じ一部現金取引を処理する場合、取引分解法と擬制法の結果として正しいものはどれですか？",
                    options: [
                        "最終的な仕訳の結果は同じになる",
                        "取引分解法の方が正確な結果になる",
                        "擬制法の方が正確な結果になる",
                        "最終的な仕訳の結果は異なる"
                    ],
                    answer: 0,
                    explanation: "取引分解法と擬制法は伝票の記入方法が異なりますが、最終的に総勘定元帳に転記される仕訳の結果は同じになります。どちらの方法でも正しい処理ができます。"
                }
            ]
        },

        // ============================================
        // Module 605: 簿記3級 総合対策
        // ============================================
        {
            id: 605,
            title: "簿記3級 総合対策",
            duration: "15分",
            content: `
<h2>🎯 簿記3級 総合対策</h2>

<div class="info-box tip">
    <strong>💡 このモジュールのゴール</strong><br>
    日商簿記3級試験に合格するための総合的な対策を行います。<br>
    出題傾向、時間配分、頻出パターン、よくあるミスを確認しましょう！
</div>

<h3>📌 試験の基本情報</h3>
<div class="visual-box">
    <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px;font-weight:bold;background:#e3f2fd;width:30%;">試験方式</td><td style="padding:8px;">ネット試験（CBT）/ 統一試験（ペーパー）</td></tr>
        <tr style="background:#fafafa;"><td style="padding:8px;font-weight:bold;background:#e3f2fd;">試験時間</td><td style="padding:8px;">60分</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#e3f2fd;">合格点</td><td style="padding:8px;">70点以上（100点満点）</td></tr>
        <tr style="background:#fafafa;"><td style="padding:8px;font-weight:bold;background:#e3f2fd;">受験料</td><td style="padding:8px;">2,850円（税込）</td></tr>
    </table>
</div>

<h3>📌 出題構成と配点</h3>
<div class="visual-box">
    <h4>3問構成の試験</h4>
    <table style="width:100%;border-collapse:collapse;">
        <thead>
            <tr style="background:#1a73e8;color:white;">
                <th style="padding:8px;">大問</th>
                <th style="padding:8px;">内容</th>
                <th style="padding:8px;">配点</th>
                <th style="padding:8px;">目標時間</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background:#e3f2fd;">
                <td style="padding:8px;font-weight:bold;text-align:center;">第1問</td>
                <td style="padding:8px;"><strong>仕訳問題</strong>（15問）</td>
                <td style="padding:8px;text-align:center;">45点</td>
                <td style="padding:8px;text-align:center;">15〜20分</td>
            </tr>
            <tr>
                <td style="padding:8px;font-weight:bold;text-align:center;">第2問</td>
                <td style="padding:8px;"><strong>帳簿・伝票・勘定記入</strong></td>
                <td style="padding:8px;text-align:center;">20点</td>
                <td style="padding:8px;text-align:center;">15〜20分</td>
            </tr>
            <tr style="background:#e3f2fd;">
                <td style="padding:8px;font-weight:bold;text-align:center;">第3問</td>
                <td style="padding:8px;"><strong>精算表 or 財務諸表作成</strong></td>
                <td style="padding:8px;text-align:center;">35点</td>
                <td style="padding:8px;text-align:center;">20〜25分</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="info-box warning">
    <strong>⚠️ 合格戦略の鍵</strong><br>
    ・第1問（45点）で<strong>最低36点（12問以上正解）</strong>を目指す<br>
    ・第3問（35点）で<strong>最低21点</strong>を目指す<br>
    ・第2問は部分点狙いで<strong>13点以上</strong>取れれば合格圏内<br>
    → 合計70点以上で合格！
</div>

<h3>📌 頻出仕訳パターンTOP10</h3>
<div class="visual-box">
    <h4>第1問で何度も出題される仕訳パターン</h4>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
        <thead>
            <tr style="background:#e65100;color:white;">
                <th style="padding:6px;">順位</th>
                <th style="padding:6px;">取引パターン</th>
                <th style="padding:6px;">仕訳</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding:6px;text-align:center;font-weight:bold;">1</td>
                <td style="padding:6px;">商品の掛け仕入</td>
                <td style="padding:6px;">(借) 仕入 /(貸) 買掛金</td>
            </tr>
            <tr style="background:#fafafa;">
                <td style="padding:6px;text-align:center;font-weight:bold;">2</td>
                <td style="padding:6px;">商品の掛け売上</td>
                <td style="padding:6px;">(借) 売掛金 /(貸) 売上</td>
            </tr>
            <tr>
                <td style="padding:6px;text-align:center;font-weight:bold;">3</td>
                <td style="padding:6px;">給料の支払い（源泉徴収あり）</td>
                <td style="padding:6px;">(借) 給料 /(貸) 預り金・現金</td>
            </tr>
            <tr style="background:#fafafa;">
                <td style="padding:6px;text-align:center;font-weight:bold;">4</td>
                <td style="padding:6px;">固定資産の購入</td>
                <td style="padding:6px;">(借) 備品等 /(貸) 現金・未払金</td>
            </tr>
            <tr>
                <td style="padding:6px;text-align:center;font-weight:bold;">5</td>
                <td style="padding:6px;">減価償却費の計上</td>
                <td style="padding:6px;">(借) 減価償却費 /(貸) 減価償却累計額</td>
            </tr>
            <tr style="background:#fafafa;">
                <td style="padding:6px;text-align:center;font-weight:bold;">6</td>
                <td style="padding:6px;">貸倒引当金の設定</td>
                <td style="padding:6px;">(借) 貸倒引当金繰入 /(貸) 貸倒引当金</td>
            </tr>
            <tr>
                <td style="padding:6px;text-align:center;font-weight:bold;">7</td>
                <td style="padding:6px;">費用の前払い（決算整理）</td>
                <td style="padding:6px;">(借) 前払○○ /(貸) ○○費</td>
            </tr>
            <tr style="background:#fafafa;">
                <td style="padding:6px;text-align:center;font-weight:bold;">8</td>
                <td style="padding:6px;">収益の前受け（決算整理）</td>
                <td style="padding:6px;">(借) ○○収益 /(貸) 前受○○</td>
            </tr>
            <tr>
                <td style="padding:6px;text-align:center;font-weight:bold;">9</td>
                <td style="padding:6px;">現金過不足の処理</td>
                <td style="padding:6px;">(借) 雑損等 /(貸) 現金過不足</td>
            </tr>
            <tr style="background:#fafafa;">
                <td style="padding:6px;text-align:center;font-weight:bold;">10</td>
                <td style="padding:6px;">しくりくりし（売上原価算定）</td>
                <td style="padding:6px;">(借) 仕入 /(貸) 繰越商品 + 逆仕訳</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>📌 よくある間違いTOP5</h3>
<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <strong>借方と貸方の逆転</strong><br>
            収益は貸方、費用は借方。「増える方」に記入する基本を忘れない！<br>
            <span style="color:#d32f2f;">特に「仮受金」「預り金」は負債（貸方）であることに注意</span>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <strong>勘定科目の選択ミス</strong><br>
            「消耗品」と「消耗品費」の使い分け（資産 vs 費用）<br>
            「前払保険料」と「保険料」の使い分け
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <strong>減価償却の計算ミス</strong><br>
            月割計算を忘れる。「取得日が期中の場合」は月数に注意！<br>
            <span style="color:#d32f2f;">例：10月1日取得、3月31日決算 → 6ヶ月分</span>
        </div>
    </div>
    <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
            <strong>経過勘定の混同</strong><br>
            前払費用・未払費用・前受収益・未収収益の区別を整理！<br>
            「払いすぎ→前払」「まだ払ってない→未払」と覚える
        </div>
    </div>
    <div class="step">
        <div class="step-num">5</div>
        <div class="step-content">
            <strong>精算表の転記ミス</strong><br>
            修正記入欄の借方・貸方を逆に書いてしまう<br>
            <span style="color:#d32f2f;">試算表の残高 ± 修正記入 → P/L or B/S欄へ正しく転記</span>
        </div>
    </div>
</div>

<h3>📌 時間配分のコツ</h3>

<div class="visual-box">
    <h4>60分の使い方（推奨モデル）</h4>
    <div style="display:grid;grid-template-columns:1fr;gap:8px;">
        <div style="display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
            <div style="background:#1a73e8;color:white;padding:8px 16px;border-radius:8px;font-weight:bold;text-align:center;min-width:80px;">0〜20分</div>
            <div>
                <strong>第1問（仕訳15問）</strong><br>
                <span style="font-size:0.9rem;">1問あたり約80秒。わからない問題は飛ばして後で戻る。</span>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
            <div style="background:#e65100;color:white;padding:8px 16px;border-radius:8px;font-weight:bold;text-align:center;min-width:80px;">20〜45分</div>
            <div>
                <strong>第3問（精算表/財務諸表）</strong><br>
                <span style="font-size:0.9rem;">配点が高い！先に第3問に取り組むのも有効な戦略。</span>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
            <div style="background:#2e7d32;color:white;padding:8px 16px;border-radius:8px;font-weight:bold;text-align:center;min-width:80px;">45〜55分</div>
            <div>
                <strong>第2問（帳簿・伝票）</strong><br>
                <span style="font-size:0.9rem;">部分点を狙う。完璧を目指さなくてOK。</span>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
            <div style="background:#333;color:white;padding:8px 16px;border-radius:8px;font-weight:bold;text-align:center;min-width:80px;">55〜60分</div>
            <div>
                <strong>見直し</strong><br>
                <span style="font-size:0.9rem;">第1問の飛ばした問題の再挑戦。計算の検算。</span>
            </div>
        </div>
    </div>
</div>

<div class="info-box tip">
    <strong>💡 時間配分の黄金ルール</strong><br>
    ・第1問と第3問で<strong>合計50分以内</strong>に収める<br>
    ・難しい問題に時間をかけすぎない（<strong>1問2分以上考えたら飛ばす</strong>）<br>
    ・第1問は配点が高い（1問3点×15問＝45点）ので確実に取る<br>
    ・電卓の打ち間違いに注意（大きな数字は2回計算して確認）
</div>

<h3>📌 合格のための最終チェックリスト</h3>

<div class="visual-box">
    <h4>試験前に確認すべき10項目</h4>
    <table style="width:100%;border-collapse:collapse;">
        <tbody>
            <tr><td style="padding:8px;width:30px;">☐</td><td style="padding:8px;"><strong>仕訳の基本ルール</strong>を暗記しているか</td></tr>
            <tr style="background:#fafafa;"><td style="padding:8px;">☐</td><td style="padding:8px;"><strong>5つの要素</strong>（資産・負債・純資産・収益・費用）の増減方向を即答できるか</td></tr>
            <tr><td style="padding:8px;">☐</td><td style="padding:8px;"><strong>しくりくりし</strong>（売上原価の算定仕訳）を正確に書けるか</td></tr>
            <tr style="background:#fafafa;"><td style="padding:8px;">☐</td><td style="padding:8px;"><strong>減価償却</strong>の計算（定額法・月割計算）ができるか</td></tr>
            <tr><td style="padding:8px;">☐</td><td style="padding:8px;"><strong>貸倒引当金</strong>の設定・差額補充法を理解しているか</td></tr>
            <tr style="background:#fafafa;"><td style="padding:8px;">☐</td><td style="padding:8px;"><strong>経過勘定</strong>（前払・未払・前受・未収）の仕訳ができるか</td></tr>
            <tr><td style="padding:8px;">☐</td><td style="padding:8px;"><strong>精算表</strong>の完成手順を理解しているか</td></tr>
            <tr style="background:#fafafa;"><td style="padding:8px;">☐</td><td style="padding:8px;"><strong>損益計算書</strong>の段階的利益計算ができるか</td></tr>
            <tr><td style="padding:8px;">☐</td><td style="padding:8px;"><strong>貸借対照表</strong>の配列（流動→固定）を覚えているか</td></tr>
            <tr style="background:#fafafa;"><td style="padding:8px;">☐</td><td style="padding:8px;"><strong>電卓操作</strong>に慣れているか（特にメモリー機能）</td></tr>
        </tbody>
    </table>
</div>

<h3>📌 第1問対策：仕訳攻略のフレームワーク</h3>
<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <strong>取引の内容を読み取る</strong><br>
            何が増えて、何が減ったか？を把握する
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <strong>勘定科目を決める</strong><br>
            問題文の勘定科目一覧から適切なものを選ぶ
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <strong>5要素のどれか判断</strong><br>
            資産・負債・純資産・収益・費用のどれに該当するか
        </div>
    </div>
    <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
            <strong>増減方向を確認</strong><br>
            資産の増加→借方、負債の増加→貸方、のように判断
        </div>
    </div>
    <div class="step">
        <div class="step-num">5</div>
        <div class="step-content">
            <strong>金額を計算して記入</strong><br>
            借方合計＝貸方合計になっているか最終確認
        </div>
    </div>
</div>

<h3>📌 第3問対策：精算表・財務諸表のポイント</h3>
<div class="compare-grid">
    <div class="compare-card">
        <h4>精算表が出た場合</h4>
        <ol style="font-size:0.9rem;">
            <li>決算整理仕訳を修正記入欄に記入</li>
            <li>試算表 ± 修正 → P/LまたはB/S欄へ</li>
            <li>P/Lの貸借差額 ＝ 当期純利益（損失）</li>
            <li>B/Sの貸借差額も同額になるか確認</li>
        </ol>
        <p style="font-size:0.85rem;color:#d32f2f;margin-top:8px;">
            ※ 1箇所間違えると連鎖的にずれるので慎重に！
        </p>
    </div>
    <div class="compare-card">
        <h4>財務諸表が出た場合</h4>
        <ol style="font-size:0.9rem;">
            <li>決算整理仕訳を下書きする</li>
            <li>勘定科目ごとに金額を集計</li>
            <li>P/Lを先に完成 → 当期純利益を算出</li>
            <li>B/Sに転記し、繰越利益剰余金に利益を加算</li>
        </ol>
        <p style="font-size:0.85rem;color:#2e7d32;margin-top:8px;">
            ※ P/Lを先に作る方が効率的！
        </p>
    </div>
</div>

<div class="info-box success">
    <strong>✅ 合格に向けた最終メッセージ</strong><br>
    ・簿記3級の合格率は約40〜50%。しっかり対策すれば<strong>必ず合格できる</strong>試験です<br>
    ・第1問の仕訳は<strong>繰り返し練習</strong>することが最も効果的<br>
    ・本番では<strong>落ち着いて</strong>、まず全体を見渡してから解き始めましょう<br>
    ・<strong>70点で合格</strong>なので、完璧を目指す必要はありません。取れる問題を確実に！<br>
    ・このアカデミーで学んだ内容を活かして、自信を持って試験に臨んでください！
</div>
`,
            quiz: [
                {
                    id: "q605_1",
                    type: "choice",
                    question: "日商簿記3級の試験において、第1問（仕訳問題）の配点は何点ですか？",
                    options: [
                        "20点",
                        "35点",
                        "45点",
                        "50点"
                    ],
                    answer: 2,
                    explanation: "第1問は仕訳問題15問で45点（1問3点×15問）です。全体の45%を占める最も配点が高い大問なので、ここで確実に得点することが合格の鍵です。"
                },
                {
                    id: "q605_2",
                    type: "fill",
                    question: "日商簿記3級の合格点は100点満点中、何点以上ですか？数字だけで答えてください。",
                    answer: "70",
                    explanation: "日商簿記3級の合格点は70点以上です。100点を取る必要はなく、70点を超えれば合格です。第1問で36点、第2問で13点、第3問で21点を取れば合計70点で合格できます。"
                },
                {
                    id: "q605_3",
                    type: "choice",
                    question: "減価償却の計算でよくあるミスはどれですか？",
                    options: [
                        "定額法の計算式を間違える",
                        "期中取得の場合に月割計算を忘れる",
                        "建物に定率法を適用してしまう",
                        "残存価額を引き忘れる"
                    ],
                    answer: 1,
                    explanation: "簿記3級でよくあるミスは、期中（例：10月1日）に取得した固定資産の減価償却で月割計算を忘れることです。10月取得・3月決算なら6ヶ月分（6/12）を掛ける必要があります。"
                },
                {
                    id: "q605_4",
                    type: "choice",
                    question: "試験の時間配分として、最も効率的な解答順序はどれですか？",
                    options: [
                        "第1問 → 第2問 → 第3問の順に解く",
                        "第3問 → 第2問 → 第1問の順に解く",
                        "第1問 → 第3問 → 第2問の順に解く",
                        "第2問 → 第1問 → 第3問の順に解く"
                    ],
                    answer: 2,
                    explanation: "推奨される順序は「第1問 → 第3問 → 第2問」です。第1問（45点）と第3問（35点）は配点が高いので優先的に解き、第2問（20点）は残り時間で部分点を狙うのが効率的です。"
                },
                {
                    id: "q605_5",
                    type: "choice",
                    question: "精算表問題で1箇所間違えた場合に起こりやすい問題はどれですか？",
                    options: [
                        "他の箇所には影響しない",
                        "修正記入欄だけ影響を受ける",
                        "連鎖的に他の箇所もずれてしまう",
                        "合計金額だけが影響を受ける"
                    ],
                    answer: 2,
                    explanation: "精算表は試算表の金額に修正記入を加減してP/LやB/S欄に転記するため、1箇所のミスが連鎖的に他の箇所に影響します。特に当期純利益の金額がP/LとB/Sの両方に影響するため、慎重に計算することが大切です。"
                }
            ]
        }
    ]
};
