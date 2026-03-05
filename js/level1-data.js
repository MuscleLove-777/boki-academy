/* ============================================
   簿記3級アカデミー - Level 1: 簿記の基礎
   ============================================ */

const LEVEL1_DATA = {
    id: 1,
    title: "簿記の基礎",
    icon: "📚",
    description: "簿記の基本概念を図解で理解する",
    modules: [

        // =============================================
        // Module 101: 簿記とは何か
        // =============================================
        {
            id: 101,
            title: "簿記とは何か",
            duration: "10分",
            content: `
<h2>📚 簿記とは何か</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>「簿記」とは<strong>「帳簿記入」</strong>の略です。企業のお金やモノの動きを、ルールに従って帳簿に記録する技術のことです。</p>
</div>

<h3>🏠 身近な例から理解しよう</h3>

<div class="visual-box">
<div class="visual-box-title">図解：家計簿と簿記の関係</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<tr>
<td style="border:2px solid #4A90D9; padding:20px; text-align:center; width:45%; background:#EBF5FF; border-radius:8px;">
<div style="font-size:1.5rem; margin-bottom:8px;">🏠 家計簿</div>
<div style="font-size:0.95rem; text-align:left; padding:0 10px;">
・今月の収入<br>
・今月の支出<br>
・残高がいくらか
</div>
<div style="margin-top:10px; font-size:0.85rem; color:#666;">→ 個人のお金の管理</div>
</td>
<td style="text-align:center; font-size:2rem; padding:0 10px;">➡️</td>
<td style="border:2px solid #E8913A; padding:20px; text-align:center; width:45%; background:#FFF5EB; border-radius:8px;">
<div style="font-size:1.5rem; margin-bottom:8px;">🏢 簿記</div>
<div style="font-size:0.95rem; text-align:left; padding:0 10px;">
・企業の収入（収益）<br>
・企業の支出（費用）<br>
・財産や借金の状況
</div>
<div style="margin-top:10px; font-size:0.85rem; color:#666;">→ 企業のお金の管理</div>
</td>
</tr>
</table>
<p style="text-align:center; margin-top:10px; font-size:0.9rem; color:#666;">家計簿を「企業版」にしてルール化したものが簿記です！</p>
</div>

<h3>📝 簿記の目的</h3>

<div class="compare-grid">
<div class="compare-card">
<h4>📊 目的①：記録する</h4>
<p>日々の取引（お金やモノの動き）を正確に帳簿に記録すること。</p>
<p style="font-size:0.85rem; color:#888;">例：「商品を仕入れた」「代金を受け取った」</p>
</div>
<div class="compare-card">
<h4>📋 目的②：報告する</h4>
<p>一定期間の経営成績や、ある時点の財政状態を報告書にまとめること。</p>
<p style="font-size:0.85rem; color:#888;">例：貸借対照表（B/S）、損益計算書（P/L）</p>
</div>
</div>

<h3>🔄 企業活動と簿記の関係</h3>

<div class="visual-box">
<div class="visual-box-title">図解：企業活動のサイクルと簿記</div>
<div style="display:flex; flex-wrap:wrap; justify-content:center; gap:10px; padding:15px 0;">
<div style="background:#E3F2FD; border:2px solid #1976D2; border-radius:50%; width:110px; height:110px; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
<div style="font-size:1.3rem;">💰</div>
<div style="font-size:0.8rem; font-weight:bold;">資金調達</div>
<div style="font-size:0.7rem; color:#555;">お金を集める</div>
</div>
<div style="display:flex; align-items:center; font-size:1.5rem;">→</div>
<div style="background:#FFF3E0; border:2px solid #F57C00; border-radius:50%; width:110px; height:110px; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
<div style="font-size:1.3rem;">🛒</div>
<div style="font-size:0.8rem; font-weight:bold;">仕入・購入</div>
<div style="font-size:0.7rem; color:#555;">モノを買う</div>
</div>
<div style="display:flex; align-items:center; font-size:1.5rem;">→</div>
<div style="background:#E8F5E9; border:2px solid #388E3C; border-radius:50%; width:110px; height:110px; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
<div style="font-size:1.3rem;">🏷️</div>
<div style="font-size:0.8rem; font-weight:bold;">販売</div>
<div style="font-size:0.7rem; color:#555;">商品を売る</div>
</div>
<div style="display:flex; align-items:center; font-size:1.5rem;">→</div>
<div style="background:#F3E5F5; border:2px solid #7B1FA2; border-radius:50%; width:110px; height:110px; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
<div style="font-size:1.3rem;">📊</div>
<div style="font-size:0.8rem; font-weight:bold;">報告</div>
<div style="font-size:0.7rem; color:#555;">結果をまとめる</div>
</div>
</div>
<p style="text-align:center; font-size:0.9rem; color:#555; margin-top:8px;">これらすべてのお金の動きを<strong>記録する</strong>のが簿記の役割です</p>
</div>

<h3>📖 簿記の種類</h3>

<div class="compare-grid">
<div class="compare-card">
<h4>📝 単式簿記</h4>
<p><strong>お小遣い帳のイメージ</strong></p>
<table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.85rem;">
<tr style="background:#f0f0f0;"><th style="border:1px solid #ccc; padding:6px;">日付</th><th style="border:1px solid #ccc; padding:6px;">内容</th><th style="border:1px solid #ccc; padding:6px;">金額</th></tr>
<tr><td style="border:1px solid #ccc; padding:6px;">4/1</td><td style="border:1px solid #ccc; padding:6px;">お給料</td><td style="border:1px solid #ccc; padding:6px;">+200,000</td></tr>
<tr><td style="border:1px solid #ccc; padding:6px;">4/3</td><td style="border:1px solid #ccc; padding:6px;">家賃</td><td style="border:1px solid #ccc; padding:6px;">-60,000</td></tr>
</table>
<p style="font-size:0.85rem; color:#888;">✅ 簡単だが情報が少ない</p>
</div>
<div class="compare-card">
<h4>📒 複式簿記</h4>
<p><strong>簿記3級で学ぶのはこちら！</strong></p>
<table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.85rem;">
<tr style="background:#f0f0f0;"><th style="border:1px solid #ccc; padding:6px;">日付</th><th style="border:1px solid #ccc; padding:6px;">借方</th><th style="border:1px solid #ccc; padding:6px;">貸方</th></tr>
<tr><td style="border:1px solid #ccc; padding:6px;">4/1</td><td style="border:1px solid #ccc; padding:6px;">現金 200,000</td><td style="border:1px solid #ccc; padding:6px;">給料 200,000</td></tr>
<tr><td style="border:1px solid #ccc; padding:6px;">4/3</td><td style="border:1px solid #ccc; padding:6px;">家賃 60,000</td><td style="border:1px solid #ccc; padding:6px;">現金 60,000</td></tr>
</table>
<p style="font-size:0.85rem; color:#888;">✅ 1つの取引を2面から記録</p>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 試験のポイント</div>
<p>日商簿記3級では<strong>「複式簿記」</strong>を学びます。1つの取引を必ず<strong>借方（左側）</strong>と<strong>貸方（右側）</strong>の2つに分けて記録するのが最大の特徴です。</p>
</div>

<h3>📝 日商簿記3級の試験概要</h3>

<div class="visual-box">
<div class="visual-box-title">試験情報まとめ</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<tr style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); color:white;">
<th style="border:1px solid #ddd; padding:10px; width:35%;">項目</th>
<th style="border:1px solid #ddd; padding:10px;">内容</th>
</tr>
<tr style="background:#f9f9f9;"><td style="border:1px solid #ddd; padding:10px; font-weight:bold;">試験方式</td><td style="border:1px solid #ddd; padding:10px;">ネット試験（CBT）/ 統一試験</td></tr>
<tr><td style="border:1px solid #ddd; padding:10px; font-weight:bold;">試験時間</td><td style="border:1px solid #ddd; padding:10px;">60分</td></tr>
<tr style="background:#f9f9f9;"><td style="border:1px solid #ddd; padding:10px; font-weight:bold;">合格点</td><td style="border:1px solid #ddd; padding:10px;">70点以上（100点満点）</td></tr>
<tr><td style="border:1px solid #ddd; padding:10px; font-weight:bold;">出題範囲</td><td style="border:1px solid #ddd; padding:10px;">商業簿記（個人商店レベル）</td></tr>
<tr style="background:#f9f9f9;"><td style="border:1px solid #ddd; padding:10px; font-weight:bold;">出題形式</td><td style="border:1px solid #ddd; padding:10px;">第1問：仕訳（45点）<br>第2問：補助簿等（20点）<br>第3問：決算（35点）</td></tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<ul>
<li>簿記 =「帳簿記入」の略。企業のお金の動きを記録する技術</li>
<li>簿記3級では<strong>複式簿記</strong>（取引を2面から記録する方法）を学ぶ</li>
<li>最終目標は<strong>貸借対照表（B/S）</strong>と<strong>損益計算書（P/L）</strong>を作成すること</li>
<li>試験は60分、70点以上で合格</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q101_1",
                    type: "choice",
                    question: "「簿記」とは何の略称ですか？",
                    options: ["帳簿記入", "簿冊記録", "帳簿記録", "簿記会計"],
                    answer: 0,
                    explanation: "「簿記」は「帳簿記入（ちょうぼきにゅう）」の略です。企業のお金やモノの動きを帳簿に記入する技術のことを指します。"
                },
                {
                    id: "q101_2",
                    type: "choice",
                    question: "日商簿記3級で学ぶ簿記の種類はどれですか？",
                    options: ["単式簿記", "複式簿記", "三式簿記", "管理簿記"],
                    answer: 1,
                    explanation: "日商簿記3級では「複式簿記」を学びます。複式簿記は1つの取引を借方（左側）と貸方（右側）の2面から記録する方法です。単式簿記はお小遣い帳のような簡易的な記録方法です。"
                },
                {
                    id: "q101_3",
                    type: "fill",
                    question: "日商簿記3級の試験時間は何分ですか？数字のみ入力してください。",
                    answer: "60",
                    explanation: "日商簿記3級の試験時間は60分です。100点満点中70点以上で合格となります。ネット試験（CBT方式）では随時受験が可能です。"
                },
                {
                    id: "q101_4",
                    type: "choice",
                    question: "簿記の最終的な目的として作成する書類はどれですか？",
                    options: [
                        "請求書と領収書",
                        "貸借対照表と損益計算書",
                        "見積書と納品書",
                        "契約書と注文書"
                    ],
                    answer: 1,
                    explanation: "簿記の最終的な目的は、企業の財政状態を示す「貸借対照表（B/S）」と、経営成績を示す「損益計算書（P/L）」を作成することです。これらを財務諸表と呼びます。"
                },
                {
                    id: "q101_5",
                    type: "fill",
                    question: "日商簿記3級の合格点は何点以上ですか？数字のみ入力してください。",
                    answer: "70",
                    explanation: "日商簿記3級の合格点は100点満点中70点以上です。第1問（仕訳45点）・第2問（補助簿等20点）・第3問（決算35点）の3問構成で、合計70点以上を目指しましょう。"
                }
            ]
        },

        // =============================================
        // Module 102: 資産・負債・純資産
        // =============================================
        {
            id: 102,
            title: "資産・負債・純資産",
            duration: "15分",
            content: `
<h2>📊 資産・負債・純資産</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>企業の「財政状態」（どれだけの財産があり、どれだけの借金があるか）を表す書類が<strong>貸借対照表（たいしゃくたいしょうひょう）</strong>です。英語では <strong>Balance Sheet（B/S）</strong> と呼びます。</p>
</div>

<h3>🏗️ 貸借対照表（B/S）の基本構造</h3>

<div class="visual-box">
<div class="visual-box-title">図解：貸借対照表（B/S）のボックス図</div>
<table style="width:100%; border-collapse:collapse; margin:15px 0; font-size:0.95rem;">
<tr>
<td colspan="2" style="text-align:center; padding:10px; font-weight:bold; font-size:1.1rem; background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); color:white; border-radius:8px 8px 0 0;">
貸借対照表（B/S）
</td>
</tr>
<tr>
<td style="text-align:center; padding:5px; font-weight:bold; background:#e8e8e8; border:2px solid #999; width:50%;">借方（左側）</td>
<td style="text-align:center; padding:5px; font-weight:bold; background:#e8e8e8; border:2px solid #999; width:50%;">貸方（右側）</td>
</tr>
<tr>
<td style="border:2px solid #999; padding:0; vertical-align:top;" rowspan="2">
<div style="background:#E3F2FD; padding:20px; text-align:center; height:100%; min-height:160px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
<div style="font-size:1.8rem; margin-bottom:8px;">💰</div>
<div style="font-size:1.2rem; font-weight:bold; color:#1565C0;">資　産</div>
<div style="font-size:0.85rem; color:#555; margin-top:8px;">持っているもの<br>受け取る権利</div>
<div style="font-size:0.8rem; color:#888; margin-top:8px;">（例）現金、建物、売掛金</div>
</div>
</td>
<td style="border:2px solid #999; border-bottom:1px dashed #999; padding:0; vertical-align:top;">
<div style="background:#FFEBEE; padding:15px; text-align:center; min-height:80px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
<div style="font-size:1.3rem; margin-bottom:5px;">📋</div>
<div style="font-size:1.1rem; font-weight:bold; color:#C62828;">負　債</div>
<div style="font-size:0.8rem; color:#555; margin-top:5px;">借りているもの・返す義務</div>
<div style="font-size:0.75rem; color:#888; margin-top:3px;">（例）借入金、買掛金</div>
</div>
</td>
</tr>
<tr>
<td style="border:2px solid #999; border-top:1px dashed #999; padding:0; vertical-align:top;">
<div style="background:#E8F5E9; padding:15px; text-align:center; min-height:80px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
<div style="font-size:1.3rem; margin-bottom:5px;">🏦</div>
<div style="font-size:1.1rem; font-weight:bold; color:#2E7D32;">純資産</div>
<div style="font-size:0.8rem; color:#555; margin-top:5px;">自分のお金（元手）</div>
<div style="font-size:0.75rem; color:#888; margin-top:3px;">（例）資本金、繰越利益剰余金</div>
</div>
</td>
</tr>
</table>
<p style="text-align:center; font-size:0.9rem; color:#555;">左側（借方）の合計 ＝ 右側（貸方）の合計 → <strong>必ずバランスする！</strong></p>
</div>

<h3>💰 資産とは</h3>

<div class="info-box formula">
<div class="info-box-title">📐 定義</div>
<p><strong>資産</strong>＝企業が<strong>持っているもの</strong>や<strong>受け取る権利</strong></p>
</div>

<div class="visual-box">
<div class="visual-box-title">資産の具体例</div>
<div class="compare-grid">
<div class="compare-card">
<h4>💵 すぐ使えるもの</h4>
<ul>
<li><strong>現金</strong>：紙幣・硬貨</li>
<li><strong>普通預金</strong>：銀行のお金</li>
<li><strong>売掛金</strong>：後で受け取るお金</li>
</ul>
</div>
<div class="compare-card">
<h4>🏢 長く使うもの</h4>
<ul>
<li><strong>建物</strong>：お店や事務所</li>
<li><strong>備品</strong>：机・パソコン</li>
<li><strong>土地</strong>：お店の土地</li>
</ul>
</div>
</div>
</div>

<h3>📋 負債とは</h3>

<div class="info-box formula">
<div class="info-box-title">📐 定義</div>
<p><strong>負債</strong>＝企業が<strong>借りているもの</strong>や<strong>支払う義務</strong></p>
</div>

<div class="visual-box">
<div class="visual-box-title">負債の具体例</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem;">
<tr style="background:#FFCDD2;"><th style="border:1px solid #ccc; padding:8px;">勘定科目</th><th style="border:1px solid #ccc; padding:8px;">意味</th><th style="border:1px solid #ccc; padding:8px;">身近な例</th></tr>
<tr style="background:#fff;"><td style="border:1px solid #ccc; padding:8px; font-weight:bold;">買掛金</td><td style="border:1px solid #ccc; padding:8px;">仕入代金の未払い</td><td style="border:1px solid #ccc; padding:8px;">ツケで買い物</td></tr>
<tr style="background:#f9f9f9;"><td style="border:1px solid #ccc; padding:8px; font-weight:bold;">借入金</td><td style="border:1px solid #ccc; padding:8px;">銀行からの借金</td><td style="border:1px solid #ccc; padding:8px;">住宅ローン</td></tr>
<tr style="background:#fff;"><td style="border:1px solid #ccc; padding:8px; font-weight:bold;">未払金</td><td style="border:1px solid #ccc; padding:8px;">代金の未払い分</td><td style="border:1px solid #ccc; padding:8px;">クレジットカードの請求</td></tr>
</table>
</div>

<h3>🏦 純資産とは</h3>

<div class="info-box formula">
<div class="info-box-title">📐 定義</div>
<p><strong>純資産</strong>＝<strong>資産 − 負債</strong>＝企業の<strong>正味の財産</strong>（返済義務のないお金）</p>
</div>

<div class="visual-box">
<div class="visual-box-title">図解：純資産のイメージ</div>
<div style="display:flex; align-items:center; justify-content:center; gap:15px; flex-wrap:wrap; padding:15px 0;">
<div style="background:#E3F2FD; border:2px solid #1565C0; border-radius:12px; padding:20px; text-align:center; min-width:120px;">
<div style="font-size:1.5rem;">💰</div>
<div style="font-weight:bold;">資産</div>
<div style="font-size:1.3rem; color:#1565C0; font-weight:bold;">500万円</div>
</div>
<div style="font-size:1.8rem; font-weight:bold;">−</div>
<div style="background:#FFEBEE; border:2px solid #C62828; border-radius:12px; padding:20px; text-align:center; min-width:120px;">
<div style="font-size:1.5rem;">📋</div>
<div style="font-weight:bold;">負債</div>
<div style="font-size:1.3rem; color:#C62828; font-weight:bold;">200万円</div>
</div>
<div style="font-size:1.8rem; font-weight:bold;">＝</div>
<div style="background:#E8F5E9; border:2px solid #2E7D32; border-radius:12px; padding:20px; text-align:center; min-width:120px;">
<div style="font-size:1.5rem;">🏦</div>
<div style="font-weight:bold;">純資産</div>
<div style="font-size:1.3rem; color:#2E7D32; font-weight:bold;">300万円</div>
</div>
</div>
</div>

<h3>⚖️ 貸借対照表の等式</h3>

<div class="info-box formula">
<div class="info-box-title">📐 最重要公式</div>
<p style="font-size:1.3rem; text-align:center; font-weight:bold; color:#333;">
資産 ＝ 負債 ＋ 純資産
</p>
<p style="text-align:center; font-size:0.9rem; color:#666;">この等式は<strong>いつでも必ず成り立ちます</strong>。これが「バランスシート」と呼ばれる理由です。</p>
</div>

<div class="visual-box">
<div class="visual-box-title">具体例で確認</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem;">
<tr style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); color:white;">
<th style="border:1px solid #ddd; padding:10px;" colspan="2">山田商店の貸借対照表</th>
</tr>
<tr>
<td style="border:2px solid #999; padding:0; width:50%; vertical-align:top;">
<div style="background:#E3F2FD; padding:8px; text-align:center; font-weight:bold; border-bottom:1px solid #999;">【資産の部】</div>
<div style="padding:10px; font-size:0.9rem;">
現金　　　　100,000<br>
売掛金　　　 50,000<br>
建物　　　　200,000<br>
<div style="border-top:1px solid #ccc; margin-top:5px; padding-top:5px; font-weight:bold;">合計　　　　350,000</div>
</div>
</td>
<td style="border:2px solid #999; padding:0; width:50%; vertical-align:top;">
<div style="background:#FFEBEE; padding:8px; text-align:center; font-weight:bold; border-bottom:1px solid #999;">【負債の部】</div>
<div style="padding:10px 10px 5px; font-size:0.9rem;">
買掛金　　　 80,000<br>
借入金　　　120,000<br>
<div style="border-top:1px solid #ccc; margin-top:5px; padding-top:5px; font-weight:bold;">合計　　　　200,000</div>
</div>
<div style="background:#E8F5E9; padding:8px; text-align:center; font-weight:bold; border-bottom:1px solid #999; border-top:1px solid #999;">【純資産の部】</div>
<div style="padding:10px; font-size:0.9rem;">
資本金　　　150,000<br>
<div style="border-top:1px solid #ccc; margin-top:5px; padding-top:5px; font-weight:bold;">合計　　　　150,000</div>
</div>
</td>
</tr>
<tr>
<td style="border:2px solid #999; padding:8px; text-align:center; font-weight:bold; background:#f0f0f0;">
350,000
</td>
<td style="border:2px solid #999; padding:8px; text-align:center; font-weight:bold; background:#f0f0f0;">
200,000 + 150,000 = 350,000
</td>
</tr>
</table>
<p style="text-align:center; color:#2E7D32; font-weight:bold;">✅ 左右が一致！（バランスしている）</p>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<ul>
<li><strong>資産</strong>＝持っているもの、受け取る権利（B/Sの左側）</li>
<li><strong>負債</strong>＝借りているもの、支払う義務（B/Sの右上）</li>
<li><strong>純資産</strong>＝資産 − 負債 ＝ 正味の財産（B/Sの右下）</li>
<li>等式：<strong>資産 ＝ 負債 ＋ 純資産</strong>（常に成立）</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q102_1",
                    type: "choice",
                    question: "貸借対照表（B/S）の等式として正しいものはどれですか？",
                    options: [
                        "資産 ＝ 負債 − 純資産",
                        "資産 ＝ 負債 ＋ 純資産",
                        "資産 ＋ 負債 ＝ 純資産",
                        "負債 ＝ 資産 ＋ 純資産"
                    ],
                    answer: 1,
                    explanation: "貸借対照表の基本等式は「資産 ＝ 負債 ＋ 純資産」です。企業が持っている財産（資産）は、他人から借りたお金（負債）と自分のお金（純資産）の合計で成り立っています。"
                },
                {
                    id: "q102_2",
                    type: "choice",
                    question: "次のうち「資産」に分類されるものはどれですか？",
                    options: ["借入金", "売掛金", "買掛金", "資本金"],
                    answer: 1,
                    explanation: "売掛金は「後でお金を受け取る権利」なので資産です。借入金・買掛金は負債、資本金は純資産に分類されます。"
                },
                {
                    id: "q102_3",
                    type: "fill",
                    question: "資産が800万円、負債が300万円のとき、純資産はいくらですか？「○万円」の形式で入力してください。",
                    answer: "500万円",
                    explanation: "純資産 ＝ 資産 − 負債 ＝ 800万円 − 300万円 ＝ 500万円です。貸借対照表の等式「資産＝負債＋純資産」を変形すると「純資産＝資産−負債」になります。"
                },
                {
                    id: "q102_4",
                    type: "choice",
                    question: "貸借対照表で「負債」が表すものとして正しいのはどれですか？",
                    options: [
                        "企業が持っている財産",
                        "企業の儲け",
                        "将来支払う義務",
                        "株主が出したお金"
                    ],
                    answer: 2,
                    explanation: "負債とは企業が将来支払わなければならない義務のことです。銀行からの借入金や、仕入先への買掛金などが該当します。「借りているもの・返す義務」と覚えましょう。"
                },
                {
                    id: "q102_5",
                    type: "choice",
                    question: "貸借対照表（B/S）で、「資産」はどこに記載されますか？",
                    options: [
                        "借方（左側）",
                        "貸方（右側）",
                        "上部",
                        "下部"
                    ],
                    answer: 0,
                    explanation: "貸借対照表では、資産は借方（左側）に記載されます。貸方（右側）には負債と純資産が記載されます。「資産は左、負債と純資産は右」と覚えましょう。"
                }
            ]
        },

        // =============================================
        // Module 103: 収益と費用
        // =============================================
        {
            id: 103,
            title: "収益と費用",
            duration: "15分",
            content: `
<h2>📈 収益と費用</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>企業の「経営成績」（いくら稼いで、いくら使い、いくら儲かったか）を表す書類が<strong>損益計算書（そんえきけいさんしょ）</strong>です。英語では <strong>Profit and Loss Statement（P/L）</strong> と呼びます。</p>
</div>

<h3>📋 損益計算書（P/L）の基本構造</h3>

<div class="visual-box">
<div class="visual-box-title">図解：損益計算書（P/L）のボックス図</div>
<table style="width:100%; border-collapse:collapse; margin:15px 0; font-size:0.95rem;">
<tr>
<td colspan="2" style="text-align:center; padding:10px; font-weight:bold; font-size:1.1rem; background:linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color:white; border-radius:8px 8px 0 0;">
損益計算書（P/L）
</td>
</tr>
<tr>
<td style="text-align:center; padding:5px; font-weight:bold; background:#e8e8e8; border:2px solid #999; width:50%;">借方（左側）</td>
<td style="text-align:center; padding:5px; font-weight:bold; background:#e8e8e8; border:2px solid #999; width:50%;">貸方（右側）</td>
</tr>
<tr>
<td style="border:2px solid #999; padding:0; vertical-align:top;" rowspan="2">
<div style="background:#FFF3E0; padding:20px; text-align:center; min-height:100px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
<div style="font-size:1.8rem; margin-bottom:8px;">💸</div>
<div style="font-size:1.2rem; font-weight:bold; color:#E65100;">費　用</div>
<div style="font-size:0.85rem; color:#555; margin-top:8px;">稼ぐために使ったお金</div>
<div style="font-size:0.8rem; color:#888; margin-top:5px;">（例）仕入、給料、家賃</div>
</div>
<div style="background:#E8F5E9; padding:15px; text-align:center; border-top:2px dashed #999; display:flex; flex-direction:column; justify-content:center; align-items:center;">
<div style="font-size:1rem; margin-bottom:3px;">✨</div>
<div style="font-size:1rem; font-weight:bold; color:#2E7D32;">当期純利益</div>
<div style="font-size:0.75rem; color:#555;">（収益 ＞ 費用のとき）</div>
</div>
</td>
<td style="border:2px solid #999; padding:0; vertical-align:top;">
<div style="background:#E3F2FD; padding:20px; text-align:center; min-height:160px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
<div style="font-size:1.8rem; margin-bottom:8px;">💵</div>
<div style="font-size:1.2rem; font-weight:bold; color:#1565C0;">収　益</div>
<div style="font-size:0.85rem; color:#555; margin-top:8px;">稼いだお金</div>
<div style="font-size:0.8rem; color:#888; margin-top:5px;">（例）売上、受取利息</div>
</div>
</td>
</tr>
</table>
<p style="text-align:center; font-size:0.9rem; color:#555; margin-top:5px;">費用＋利益 ＝ 収益 → <strong>左右が必ずバランスする</strong></p>
</div>

<h3>💵 収益とは</h3>

<div class="info-box formula">
<div class="info-box-title">📐 定義</div>
<p><strong>収益</strong>＝企業が<strong>稼いだお金</strong>（企業に入ってくるお金の原因）</p>
</div>

<div class="visual-box">
<div class="visual-box-title">主な収益の勘定科目</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem;">
<tr style="background:#BBDEFB;"><th style="border:1px solid #ccc; padding:8px;">勘定科目</th><th style="border:1px solid #ccc; padding:8px;">意味</th><th style="border:1px solid #ccc; padding:8px;">身近な例</th></tr>
<tr style="background:#fff;"><td style="border:1px solid #ccc; padding:8px; font-weight:bold;">売上</td><td style="border:1px solid #ccc; padding:8px;">商品を売った収入</td><td style="border:1px solid #ccc; padding:8px;">お店で商品が売れた</td></tr>
<tr style="background:#f9f9f9;"><td style="border:1px solid #ccc; padding:8px; font-weight:bold;">受取利息</td><td style="border:1px solid #ccc; padding:8px;">預金の利子</td><td style="border:1px solid #ccc; padding:8px;">銀行からもらう利息</td></tr>
<tr style="background:#fff;"><td style="border:1px solid #ccc; padding:8px; font-weight:bold;">受取手数料</td><td style="border:1px solid #ccc; padding:8px;">サービスの対価</td><td style="border:1px solid #ccc; padding:8px;">仲介手数料を受け取った</td></tr>
</table>
</div>

<h3>💸 費用とは</h3>

<div class="info-box formula">
<div class="info-box-title">📐 定義</div>
<p><strong>費用</strong>＝企業が収益を得るために<strong>使ったお金</strong>（企業からお金が出ていく原因）</p>
</div>

<div class="visual-box">
<div class="visual-box-title">主な費用の勘定科目</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem;">
<tr style="background:#FFE0B2;"><th style="border:1px solid #ccc; padding:8px;">勘定科目</th><th style="border:1px solid #ccc; padding:8px;">意味</th><th style="border:1px solid #ccc; padding:8px;">身近な例</th></tr>
<tr style="background:#fff;"><td style="border:1px solid #ccc; padding:8px; font-weight:bold;">仕入</td><td style="border:1px solid #ccc; padding:8px;">商品の購入代金</td><td style="border:1px solid #ccc; padding:8px;">お店の商品を仕入れた</td></tr>
<tr style="background:#f9f9f9;"><td style="border:1px solid #ccc; padding:8px; font-weight:bold;">給料</td><td style="border:1px solid #ccc; padding:8px;">従業員への支払い</td><td style="border:1px solid #ccc; padding:8px;">アルバイト代を払った</td></tr>
<tr style="background:#fff;"><td style="border:1px solid #ccc; padding:8px; font-weight:bold;">支払家賃</td><td style="border:1px solid #ccc; padding:8px;">建物の借り賃</td><td style="border:1px solid #ccc; padding:8px;">お店の家賃を払った</td></tr>
<tr style="background:#f9f9f9;"><td style="border:1px solid #ccc; padding:8px; font-weight:bold;">水道光熱費</td><td style="border:1px solid #ccc; padding:8px;">電気・ガス・水道代</td><td style="border:1px solid #ccc; padding:8px;">電気代を払った</td></tr>
<tr style="background:#fff;"><td style="border:1px solid #ccc; padding:8px; font-weight:bold;">通信費</td><td style="border:1px solid #ccc; padding:8px;">電話・インターネット代</td><td style="border:1px solid #ccc; padding:8px;">携帯料金を払った</td></tr>
</table>
</div>

<h3>✨ 利益の計算</h3>

<div class="info-box formula">
<div class="info-box-title">📐 利益の公式</div>
<p style="font-size:1.3rem; text-align:center; font-weight:bold; color:#333;">
利益（当期純利益）＝ 収益 − 費用
</p>
<p style="text-align:center; font-size:0.9rem; color:#666;">収益 ＞ 費用 → <strong style="color:#2E7D32;">黒字（利益）</strong>　/　収益 ＜ 費用 → <strong style="color:#C62828;">赤字（損失）</strong></p>
</div>

<div class="visual-box">
<div class="visual-box-title">具体例：山田商店の損益計算書</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem;">
<tr style="background:linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color:white;">
<th style="border:1px solid #ddd; padding:10px;" colspan="2">山田商店　損益計算書</th>
</tr>
<tr>
<td style="border:2px solid #999; padding:0; width:50%; vertical-align:top;">
<div style="background:#FFF3E0; padding:8px; text-align:center; font-weight:bold; border-bottom:1px solid #999;">【費用の部】</div>
<div style="padding:10px; font-size:0.9rem;">
仕入　　　　300,000<br>
給料　　　　100,000<br>
支払家賃　　 50,000<br>
水道光熱費　 20,000<br>
<div style="border-top:1px solid #ccc; margin-top:5px; padding-top:5px;">費用合計　　470,000</div>
</div>
<div style="background:#E8F5E9; padding:10px; text-align:center; border-top:1px solid #999; font-size:0.9rem;">
<strong>当期純利益　130,000</strong>
</div>
</td>
<td style="border:2px solid #999; padding:0; width:50%; vertical-align:top;">
<div style="background:#E3F2FD; padding:8px; text-align:center; font-weight:bold; border-bottom:1px solid #999;">【収益の部】</div>
<div style="padding:10px; font-size:0.9rem;">
売上　　　　580,000<br>
受取利息　　 20,000<br>
<div style="border-top:1px solid #ccc; margin-top:5px; padding-top:5px;">収益合計　　600,000</div>
</div>
</td>
</tr>
<tr>
<td style="border:2px solid #999; padding:8px; text-align:center; font-weight:bold; background:#f0f0f0;">
470,000 + 130,000 = 600,000
</td>
<td style="border:2px solid #999; padding:8px; text-align:center; font-weight:bold; background:#f0f0f0;">
600,000
</td>
</tr>
</table>
<p style="text-align:center; font-size:0.9rem; color:#2E7D32; font-weight:bold;">利益 = 600,000 − 470,000 = 130,000円 → 黒字！</p>
</div>

<h3>🔗 B/SとP/Lの関係</h3>

<div class="visual-box">
<div class="visual-box-title">図解：B/SとP/Lのつながり</div>
<div style="display:flex; flex-wrap:wrap; justify-content:center; gap:20px; padding:15px 0;">
<div style="border:3px solid #764ba2; border-radius:12px; padding:15px; min-width:200px; max-width:280px; text-align:center;">
<div style="font-weight:bold; color:#764ba2; font-size:1.1rem; margin-bottom:10px;">貸借対照表（B/S）</div>
<div style="font-size:0.85rem; color:#555;">ある<strong>一時点</strong>の財政状態</div>
<div style="font-size:0.8rem; color:#888; margin-top:5px;">（例）3月31日時点の財産</div>
<div style="margin-top:10px; font-size:0.85rem;">
<span style="color:#1565C0;">資産</span> ＝ <span style="color:#C62828;">負債</span> ＋ <span style="color:#2E7D32;">純資産</span>
</div>
</div>
<div style="display:flex; align-items:center;">
<div style="text-align:center;">
<div style="font-size:1.5rem;">🔗</div>
<div style="font-size:0.75rem; color:#555; max-width:80px;">P/Lの利益がB/Sの純資産を増やす</div>
</div>
</div>
<div style="border:3px solid #f5576c; border-radius:12px; padding:15px; min-width:200px; max-width:280px; text-align:center;">
<div style="font-weight:bold; color:#f5576c; font-size:1.1rem; margin-bottom:10px;">損益計算書（P/L）</div>
<div style="font-size:0.85rem; color:#555;"><strong>一定期間</strong>の経営成績</div>
<div style="font-size:0.8rem; color:#888; margin-top:5px;">（例）4月1日〜3月31日の成績</div>
<div style="margin-top:10px; font-size:0.85rem;">
<span style="color:#2E7D32;">利益</span> ＝ <span style="color:#1565C0;">収益</span> − <span style="color:#E65100;">費用</span>
</div>
</div>
</div>
<p style="text-align:center; font-size:0.9rem; color:#555; margin-top:10px;">
P/Lで計算された<strong>当期純利益</strong>は、B/Sの<strong>純資産</strong>（繰越利益剰余金）に加算されます。<br>
つまり、利益を上げると会社の純資産が増えるのです！
</p>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 試験のポイント</div>
<ul>
<li>B/Sは<strong>「一時点」</strong>の状態（写真のイメージ）</li>
<li>P/Lは<strong>「一定期間」</strong>の成績（動画のイメージ）</li>
<li>この違いは試験でよく出題されます！</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<ul>
<li><strong>収益</strong>＝稼いだお金（P/Lの右側）例：売上、受取利息</li>
<li><strong>費用</strong>＝使ったお金（P/Lの左側）例：仕入、給料、家賃</li>
<li><strong>利益 ＝ 収益 − 費用</strong></li>
<li>B/Sは「一時点」の財政状態、P/Lは「一定期間」の経営成績</li>
<li>P/Lの当期純利益 → B/Sの純資産に反映される</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q103_1",
                    type: "choice",
                    question: "損益計算書（P/L）で「費用」が記載されるのはどちら側ですか？",
                    options: [
                        "借方（左側）",
                        "貸方（右側）",
                        "上部",
                        "下部"
                    ],
                    answer: 0,
                    explanation: "損益計算書では、費用は借方（左側）に、収益は貸方（右側）に記載されます。利益が出た場合は、費用の下に「当期純利益」が借方に記載され、左右がバランスします。"
                },
                {
                    id: "q103_2",
                    type: "fill",
                    question: "利益を求める公式を完成させてください。「利益 ＝ ○○ − 費用」の○○に入る言葉を入力してください。",
                    answer: "収益",
                    explanation: "利益 ＝ 収益 − 費用 です。収益（稼いだお金）から費用（使ったお金）を引いたものが利益（当期純利益）になります。"
                },
                {
                    id: "q103_3",
                    type: "choice",
                    question: "次のうち「費用」に分類されるものはどれですか？",
                    options: ["売上", "受取利息", "給料", "売掛金"],
                    answer: 2,
                    explanation: "給料（従業員への支払い）は費用です。売上・受取利息は収益、売掛金は資産に分類されます。費用は「収益を得るために使ったお金」と覚えましょう。"
                },
                {
                    id: "q103_4",
                    type: "choice",
                    question: "貸借対照表（B/S）と損益計算書（P/L）の説明として正しいものはどれですか？",
                    options: [
                        "B/Sは一定期間の成績、P/Lは一時点の状態を表す",
                        "B/Sは一時点の財政状態、P/Lは一定期間の経営成績を表す",
                        "B/SもP/Lも一定期間の成績を表す",
                        "B/SもP/Lも一時点の状態を表す"
                    ],
                    answer: 1,
                    explanation: "B/S（貸借対照表）は「ある一時点」の財政状態（写真のイメージ）を表し、P/L（損益計算書）は「一定期間」の経営成績（動画のイメージ）を表します。"
                },
                {
                    id: "q103_5",
                    type: "fill",
                    question: "収益が750,000円、費用が500,000円のとき、当期純利益はいくらですか？数字のみ入力してください。",
                    answer: "250000",
                    explanation: "当期純利益 ＝ 収益 − 費用 ＝ 750,000 − 500,000 ＝ 250,000円です。収益が費用を上回っているので黒字（利益が出ている）状態です。"
                }
            ]
        },

        // =============================================
        // Module 104: 取引と仕訳の基本
        // =============================================
        {
            id: 104,
            title: "取引と仕訳の基本",
            duration: "20分",
            content: `
<h2>📝 取引と仕訳の基本</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>簿記では、企業のお金やモノの動き（＝取引）を「<strong>仕訳（しわけ）</strong>」というルールで記録します。仕訳は簿記の最も重要な技術です。日商簿記3級の第1問（45点）は仕訳問題です！</p>
</div>

<h3>📌 簿記上の「取引」とは</h3>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意：日常の「取引」と簿記の「取引」は違う！</div>
<p>簿記上の取引とは、<strong>資産・負債・純資産・収益・費用のいずれかが変動する出来事</strong>のことです。</p>
</div>

<div class="compare-grid">
<div class="compare-card">
<h4>⭕ 簿記上の取引になるもの</h4>
<ul>
<li>商品を現金で仕入れた</li>
<li>銀行からお金を借りた</li>
<li>火災で建物が焼失した</li>
<li>従業員に給料を支払った</li>
</ul>
<p style="font-size:0.8rem; color:#2E7D32;">→ 資産・負債・費用などが変動する</p>
</div>
<div class="compare-card">
<h4>❌ 簿記上の取引にならないもの</h4>
<ul>
<li>商品の注文を受けた（まだ届けていない）</li>
<li>契約を結んだ（まだお金は動いていない）</li>
<li>従業員を採用した</li>
<li>商談・打ち合わせをした</li>
</ul>
<p style="font-size:0.8rem; color:#C62828;">→ 資産・負債などが変動しない</p>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 覚え方</div>
<p>「火災で建物が焼失」は日常的には取引と言いませんが、簿記では<strong>建物（資産）が減る</strong>ので取引になります。逆に「契約を結ぶ」は日常的には取引ですが、簿記では<strong>まだお金やモノが動かない</strong>ので取引になりません。</p>
</div>

<h3>📖 仕訳のルール：借方と貸方</h3>

<div class="visual-box">
<div class="visual-box-title">図解：仕訳の基本形</div>
<table style="width:100%; border-collapse:collapse; margin:15px 0; font-size:1rem;">
<tr>
<td style="text-align:center; padding:10px; font-weight:bold; font-size:1.1rem; background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); color:white; border-radius:8px 8px 0 0;" colspan="2">
仕訳のフォーマット
</td>
</tr>
<tr>
<td style="border:2px solid #667eea; padding:15px; text-align:center; width:50%; background:#EBF5FF;">
<div style="font-weight:bold; font-size:1.1rem; color:#667eea; margin-bottom:8px;">借方（かりかた）</div>
<div style="font-size:2rem;">⬅️ 左側</div>
</td>
<td style="border:2px solid #764ba2; padding:15px; text-align:center; width:50%; background:#F3E5F5;">
<div style="font-weight:bold; font-size:1.1rem; color:#764ba2; margin-bottom:8px;">貸方（かしかた）</div>
<div style="font-size:2rem;">➡️ 右側</div>
</td>
</tr>
</table>
<p style="text-align:center; font-size:0.9rem; color:#555;">借方の金額合計 ＝ 貸方の金額合計 → <strong>必ず一致！</strong></p>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 「借方」「貸方」の覚え方</div>
<p>「か<strong>り</strong>かた」→ 「<strong>り</strong>」は左に払う文字 → <strong>左側</strong><br>
「か<strong>し</strong>かた」→ 「<strong>し</strong>」は右に払う文字 → <strong>右側</strong></p>
<p style="font-size:0.85rem; color:#888;">※ 「り」のはらいは左方向、「し」のはらいは右方向で覚えましょう！</p>
</div>

<h3>📊 5つの要素の増減ルール</h3>

<div class="visual-box">
<div class="visual-box-title">図解：仕訳の増減ルール表（最重要！）</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.95rem;">
<tr style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); color:white;">
<th style="border:1px solid #ddd; padding:10px;">要素</th>
<th style="border:1px solid #ddd; padding:10px;">増加（＋）</th>
<th style="border:1px solid #ddd; padding:10px;">減少（−）</th>
<th style="border:1px solid #ddd; padding:10px;">B/S or P/L</th>
</tr>
<tr style="background:#E3F2FD;">
<td style="border:1px solid #ccc; padding:10px; font-weight:bold;">💰 資産</td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;"><strong style="color:#1565C0; font-size:1.1rem;">借方（左）</strong></td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;">貸方（右）</td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;">B/S</td>
</tr>
<tr style="background:#FFEBEE;">
<td style="border:1px solid #ccc; padding:10px; font-weight:bold;">📋 負債</td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;"><strong style="color:#C62828; font-size:1.1rem;">貸方（右）</strong></td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;">借方（左）</td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;">B/S</td>
</tr>
<tr style="background:#E8F5E9;">
<td style="border:1px solid #ccc; padding:10px; font-weight:bold;">🏦 純資産</td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;"><strong style="color:#2E7D32; font-size:1.1rem;">貸方（右）</strong></td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;">借方（左）</td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;">B/S</td>
</tr>
<tr style="background:#E3F2FD;">
<td style="border:1px solid #ccc; padding:10px; font-weight:bold;">💵 収益</td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;"><strong style="color:#1565C0; font-size:1.1rem;">貸方（右）</strong></td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;">借方（左）</td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;">P/L</td>
</tr>
<tr style="background:#FFF3E0;">
<td style="border:1px solid #ccc; padding:10px; font-weight:bold;">💸 費用</td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;"><strong style="color:#E65100; font-size:1.1rem;">借方（左）</strong></td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;">貸方（右）</td>
<td style="border:1px solid #ccc; padding:10px; text-align:center;">P/L</td>
</tr>
</table>
</div>

<div class="info-box formula">
<div class="info-box-title">📐 覚え方のコツ</div>
<p><strong>借方（左側）に来るのは</strong>：資産の増加、負債の減少、純資産の減少、費用の発生</p>
<p><strong>貸方（右側）に来るのは</strong>：資産の減少、負債の増加、純資産の増加、収益の発生</p>
<p style="font-size:0.85rem; color:#888; margin-top:8px;">覚え方：B/Sの配置を思い出そう！資産は左（借方）、負債・純資産は右（貸方）。増加はホームポジション側！</p>
</div>

<h3>✍️ 仕訳の書き方</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>取引の内容を読み取る</strong><br>
「何が増えて、何が減ったか」を考える
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>勘定科目を決める</strong><br>
それぞれ適切な勘定科目名を選ぶ
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>5つの要素のどれか判断する</strong><br>
その勘定科目が資産・負債・純資産・収益・費用のどれかを判断する
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>増減ルールに従って借方・貸方を決める</strong><br>
増加なのか減少なのかで、借方・貸方のどちらに書くかが決まる
</div>
</div>
</div>

<h3>📝 具体例で練習しよう</h3>

<div class="visual-box">
<div class="visual-box-title">例題①：現金で商品100,000円を仕入れた</div>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>取引の分析</strong><br>
商品を仕入れた → <strong>仕入（費用）が発生</strong><br>
現金で支払った → <strong>現金（資産）が減少</strong>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>増減ルールの適用</strong><br>
費用の発生 → <strong>借方（左）</strong><br>
資産の減少 → <strong>貸方（右）</strong>
</div>
</div>
</div>
<table style="width:90%; margin:15px auto; border-collapse:collapse; font-size:1rem;">
<tr style="background:#f0f0f0;">
<th style="border:2px solid #333; padding:10px; width:50%; text-align:center;">借方（左）</th>
<th style="border:2px solid #333; padding:10px; width:50%; text-align:center;">貸方（右）</th>
</tr>
<tr>
<td style="border:2px solid #333; padding:12px; background:#FFF3E0; text-align:center;">
<strong>仕入　100,000</strong><br>
<span style="font-size:0.8rem; color:#888;">（費用の発生）</span>
</td>
<td style="border:2px solid #333; padding:12px; background:#E3F2FD; text-align:center;">
<strong>現金　100,000</strong><br>
<span style="font-size:0.8rem; color:#888;">（資産の減少）</span>
</td>
</tr>
</table>
</div>

<div class="visual-box">
<div class="visual-box-title">例題②：銀行から300,000円を借り入れ、普通預金に入金された</div>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>取引の分析</strong><br>
普通預金が増えた → <strong>普通預金（資産）が増加</strong><br>
借金が増えた → <strong>借入金（負債）が増加</strong>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>増減ルールの適用</strong><br>
資産の増加 → <strong>借方（左）</strong><br>
負債の増加 → <strong>貸方（右）</strong>
</div>
</div>
</div>
<table style="width:90%; margin:15px auto; border-collapse:collapse; font-size:1rem;">
<tr style="background:#f0f0f0;">
<th style="border:2px solid #333; padding:10px; width:50%; text-align:center;">借方（左）</th>
<th style="border:2px solid #333; padding:10px; width:50%; text-align:center;">貸方（右）</th>
</tr>
<tr>
<td style="border:2px solid #333; padding:12px; background:#E3F2FD; text-align:center;">
<strong>普通預金　300,000</strong><br>
<span style="font-size:0.8rem; color:#888;">（資産の増加）</span>
</td>
<td style="border:2px solid #333; padding:12px; background:#FFEBEE; text-align:center;">
<strong>借入金　300,000</strong><br>
<span style="font-size:0.8rem; color:#888;">（負債の増加）</span>
</td>
</tr>
</table>
</div>

<div class="visual-box">
<div class="visual-box-title">例題③：商品200,000円を売り上げ、現金で受け取った</div>
<table style="width:90%; margin:15px auto; border-collapse:collapse; font-size:1rem;">
<tr style="background:#f0f0f0;">
<th style="border:2px solid #333; padding:10px; width:50%; text-align:center;">借方（左）</th>
<th style="border:2px solid #333; padding:10px; width:50%; text-align:center;">貸方（右）</th>
</tr>
<tr>
<td style="border:2px solid #333; padding:12px; background:#E3F2FD; text-align:center;">
<strong>現金　200,000</strong><br>
<span style="font-size:0.8rem; color:#888;">（資産の増加）</span>
</td>
<td style="border:2px solid #333; padding:12px; background:#E8F5E9; text-align:center;">
<strong>売上　200,000</strong><br>
<span style="font-size:0.8rem; color:#888;">（収益の発生）</span>
</td>
</tr>
</table>
<p style="text-align:center; font-size:0.85rem; color:#555;">現金（資産）が増加 → 借方 ／ 売上（収益）が発生 → 貸方</p>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<ul>
<li>簿記上の取引＝資産・負債・純資産・収益・費用が変動する出来事</li>
<li>仕訳は<strong>借方（左）</strong>と<strong>貸方（右）</strong>に分けて記録する</li>
<li>「か<strong>り</strong>かた→左」「か<strong>し</strong>かた→右」で覚える</li>
<li>資産↑・費用↑ → 借方（左）、負債↑・純資産↑・収益↑ → 貸方（右）</li>
<li>借方の合計金額 ＝ 貸方の合計金額（必ず一致する）</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q104_1",
                    type: "choice",
                    question: "次のうち、簿記上の「取引」に該当するものはどれですか？",
                    options: [
                        "商品の注文を受けた",
                        "従業員を採用した",
                        "火災で商品が焼失した",
                        "得意先と契約を結んだ"
                    ],
                    answer: 2,
                    explanation: "簿記上の取引は「資産・負債・純資産・収益・費用が変動する出来事」です。火災で商品が焼失すると、商品（資産）が減少するので簿記上の取引に該当します。注文・採用・契約はまだお金やモノが動いていないため、簿記上の取引にはなりません。"
                },
                {
                    id: "q104_2",
                    type: "choice",
                    question: "「現金で商品50,000円を仕入れた」の仕訳で、借方に来る勘定科目はどれですか？",
                    options: ["現金", "仕入", "売上", "買掛金"],
                    answer: 1,
                    explanation: "仕入（費用）の発生は借方に記録します。現金（資産）の減少は貸方に記録します。したがって、借方：仕入 50,000 ／ 貸方：現金 50,000 となります。"
                },
                {
                    id: "q104_3",
                    type: "fill",
                    question: "仕訳で左側を「借方」、右側を何と呼びますか？漢字2文字で入力してください。",
                    answer: "貸方",
                    explanation: "仕訳の左側を「借方（かりかた）」、右側を「貸方（かしかた）」と呼びます。覚え方：「かりかた」の「り」は左に払う→左側、「かしかた」の「し」は右に払う→右側です。"
                },
                {
                    id: "q104_4",
                    type: "choice",
                    question: "「資産が増加した」場合、仕訳ではどちら側に記入しますか？",
                    options: [
                        "借方（左側）",
                        "貸方（右側）",
                        "どちらでもよい",
                        "記入しない"
                    ],
                    answer: 0,
                    explanation: "資産の増加は借方（左側）に記入します。これはB/Sで資産が左側に位置することと同じです。増加はホームポジション側（B/Sでの配置と同じ側）と覚えましょう。"
                },
                {
                    id: "q104_5",
                    type: "choice",
                    question: "「銀行から200,000円を借り入れ、現金で受け取った」の仕訳として正しいものはどれですか？",
                    options: [
                        "借方：借入金 200,000 ／ 貸方：現金 200,000",
                        "借方：現金 200,000 ／ 貸方：借入金 200,000",
                        "借方：普通預金 200,000 ／ 貸方：現金 200,000",
                        "借方：現金 200,000 ／ 貸方：普通預金 200,000"
                    ],
                    answer: 1,
                    explanation: "現金（資産）が増加→借方、借入金（負債）が増加→貸方です。資産の増加は借方、負債の増加は貸方に記入するのがルールです。正解は「借方：現金 200,000 ／ 貸方：借入金 200,000」です。"
                }
            ]
        },

        // =============================================
        // Module 105: 勘定科目の基礎
        // =============================================
        {
            id: 105,
            title: "勘定科目の基礎",
            duration: "15分",
            content: `
<h2>📋 勘定科目の基礎</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p><strong>勘定科目（かんじょうかもく）</strong>とは、取引の内容を分類するための「名前」です。例えば「現金」「売上」「仕入」などが勘定科目です。簿記3級で使う勘定科目をしっかり覚えましょう！</p>
</div>

<h3>🏷️ 勘定科目とは</h3>

<div class="visual-box">
<div class="visual-box-title">図解：勘定科目のイメージ</div>
<div style="text-align:center; padding:15px 0;">
<div style="display:inline-block; margin:10px; text-align:center;">
<div style="font-size:2rem;">🛒</div>
<div style="font-size:0.85rem;">商品を買った</div>
<div style="font-size:1.5rem; margin:5px 0;">⬇️</div>
<div style="background:#FFF3E0; border:2px solid #E65100; border-radius:8px; padding:8px 20px; font-weight:bold; color:#E65100;">仕入</div>
</div>
<div style="display:inline-block; margin:10px; text-align:center;">
<div style="font-size:2rem;">💵</div>
<div style="font-size:0.85rem;">お金を受け取った</div>
<div style="font-size:1.5rem; margin:5px 0;">⬇️</div>
<div style="background:#E3F2FD; border:2px solid #1565C0; border-radius:8px; padding:8px 20px; font-weight:bold; color:#1565C0;">現金</div>
</div>
<div style="display:inline-block; margin:10px; text-align:center;">
<div style="font-size:2rem;">🏠</div>
<div style="font-size:0.85rem;">家賃を払った</div>
<div style="font-size:1.5rem; margin:5px 0;">⬇️</div>
<div style="background:#FFF3E0; border:2px solid #E65100; border-radius:8px; padding:8px 20px; font-weight:bold; color:#E65100;">支払家賃</div>
</div>
<div style="display:inline-block; margin:10px; text-align:center;">
<div style="font-size:2rem;">🏷️</div>
<div style="font-size:0.85rem;">商品が売れた</div>
<div style="font-size:1.5rem; margin:5px 0;">⬇️</div>
<div style="background:#E3F2FD; border:2px solid #1565C0; border-radius:8px; padding:8px 20px; font-weight:bold; color:#1565C0;">売上</div>
</div>
</div>
<p style="text-align:center; font-size:0.9rem; color:#555;">取引の内容に合った「名前」をつけるのが勘定科目です</p>
</div>

<h3>📊 勘定科目の5分類</h3>

<div class="visual-box">
<div class="visual-box-title">図解：5つの要素と勘定科目の分類</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem;">
<tr style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); color:white;">
<th style="border:1px solid #ddd; padding:10px; width:15%;">要素</th>
<th style="border:1px solid #ddd; padding:10px; width:15%;">B/S/P/L</th>
<th style="border:1px solid #ddd; padding:10px; width:15%;">増加側</th>
<th style="border:1px solid #ddd; padding:10px;">意味</th>
</tr>
<tr style="background:#E3F2FD;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">💰 資産</td>
<td style="border:1px solid #ccc; padding:8px; text-align:center;">B/S（左）</td>
<td style="border:1px solid #ccc; padding:8px; text-align:center;">借方</td>
<td style="border:1px solid #ccc; padding:8px;">会社が持っている財産・権利</td>
</tr>
<tr style="background:#FFEBEE;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">📋 負債</td>
<td style="border:1px solid #ccc; padding:8px; text-align:center;">B/S（右上）</td>
<td style="border:1px solid #ccc; padding:8px; text-align:center;">貸方</td>
<td style="border:1px solid #ccc; padding:8px;">将来支払う義務・借金</td>
</tr>
<tr style="background:#E8F5E9;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">🏦 純資産</td>
<td style="border:1px solid #ccc; padding:8px; text-align:center;">B/S（右下）</td>
<td style="border:1px solid #ccc; padding:8px; text-align:center;">貸方</td>
<td style="border:1px solid #ccc; padding:8px;">自分のお金・元手</td>
</tr>
<tr style="background:#E3F2FD;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">💵 収益</td>
<td style="border:1px solid #ccc; padding:8px; text-align:center;">P/L（右）</td>
<td style="border:1px solid #ccc; padding:8px; text-align:center;">貸方</td>
<td style="border:1px solid #ccc; padding:8px;">稼いだお金</td>
</tr>
<tr style="background:#FFF3E0;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">💸 費用</td>
<td style="border:1px solid #ccc; padding:8px; text-align:center;">P/L（左）</td>
<td style="border:1px solid #ccc; padding:8px; text-align:center;">借方</td>
<td style="border:1px solid #ccc; padding:8px;">使ったお金</td>
</tr>
</table>
</div>

<h3>💰 資産の勘定科目</h3>

<div class="visual-box">
<div class="visual-box-title">資産の主な勘定科目一覧</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.88rem;">
<tr style="background:#1565C0; color:white;">
<th style="border:1px solid #ddd; padding:8px;">勘定科目</th>
<th style="border:1px solid #ddd; padding:8px;">意味</th>
<th style="border:1px solid #ddd; padding:8px;">具体例</th>
</tr>
<tr style="background:#E3F2FD;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">現金</td>
<td style="border:1px solid #ccc; padding:8px;">紙幣・硬貨・通貨代用証券</td>
<td style="border:1px solid #ccc; padding:8px;">お札、小切手（他人振出）</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">普通預金</td>
<td style="border:1px solid #ccc; padding:8px;">銀行の普通預金口座</td>
<td style="border:1px solid #ccc; padding:8px;">銀行口座の残高</td>
</tr>
<tr style="background:#E3F2FD;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">当座預金</td>
<td style="border:1px solid #ccc; padding:8px;">小切手用の銀行口座</td>
<td style="border:1px solid #ccc; padding:8px;">小切手を振り出すための口座</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">売掛金</td>
<td style="border:1px solid #ccc; padding:8px;">商品を売った代金の未回収分</td>
<td style="border:1px solid #ccc; padding:8px;">ツケで売った分</td>
</tr>
<tr style="background:#E3F2FD;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">受取手形</td>
<td style="border:1px solid #ccc; padding:8px;">手形で受け取った代金</td>
<td style="border:1px solid #ccc; padding:8px;">約束手形を受け取った</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">商品</td>
<td style="border:1px solid #ccc; padding:8px;">販売目的で保有する商品</td>
<td style="border:1px solid #ccc; padding:8px;">店の在庫商品</td>
</tr>
<tr style="background:#E3F2FD;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">建物</td>
<td style="border:1px solid #ccc; padding:8px;">事業用の建物</td>
<td style="border:1px solid #ccc; padding:8px;">店舗、事務所、倉庫</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">備品</td>
<td style="border:1px solid #ccc; padding:8px;">事業用の備品</td>
<td style="border:1px solid #ccc; padding:8px;">パソコン、机、椅子</td>
</tr>
<tr style="background:#E3F2FD;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">土地</td>
<td style="border:1px solid #ccc; padding:8px;">事業用の土地</td>
<td style="border:1px solid #ccc; padding:8px;">店舗の敷地</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">車両運搬具</td>
<td style="border:1px solid #ccc; padding:8px;">事業用の車両</td>
<td style="border:1px solid #ccc; padding:8px;">配達用トラック、社用車</td>
</tr>
</table>
</div>

<h3>📋 負債の勘定科目</h3>

<div class="visual-box">
<div class="visual-box-title">負債の主な勘定科目一覧</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.88rem;">
<tr style="background:#C62828; color:white;">
<th style="border:1px solid #ddd; padding:8px;">勘定科目</th>
<th style="border:1px solid #ddd; padding:8px;">意味</th>
<th style="border:1px solid #ddd; padding:8px;">具体例</th>
</tr>
<tr style="background:#FFEBEE;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">買掛金</td>
<td style="border:1px solid #ccc; padding:8px;">商品を買った代金の未払い分</td>
<td style="border:1px solid #ccc; padding:8px;">ツケで買った分</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">支払手形</td>
<td style="border:1px solid #ccc; padding:8px;">手形で支払う代金</td>
<td style="border:1px solid #ccc; padding:8px;">約束手形を振り出した</td>
</tr>
<tr style="background:#FFEBEE;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">借入金</td>
<td style="border:1px solid #ccc; padding:8px;">銀行などからの借金</td>
<td style="border:1px solid #ccc; padding:8px;">銀行からお金を借りた</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">未払金</td>
<td style="border:1px solid #ccc; padding:8px;">商品以外の代金の未払い</td>
<td style="border:1px solid #ccc; padding:8px;">備品を買ってまだ払ってない</td>
</tr>
<tr style="background:#FFEBEE;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">前受金</td>
<td style="border:1px solid #ccc; padding:8px;">商品を渡す前に受け取った代金</td>
<td style="border:1px solid #ccc; padding:8px;">手付金・内金を受け取った</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">預り金</td>
<td style="border:1px solid #ccc; padding:8px;">一時的に預かったお金</td>
<td style="border:1px solid #ccc; padding:8px;">従業員の源泉所得税</td>
</tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 試験頻出！売掛金と買掛金の違い</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem;">
<tr style="background:#f0f0f0;">
<th style="border:1px solid #ccc; padding:8px;"></th>
<th style="border:1px solid #ccc; padding:8px;">売掛金</th>
<th style="border:1px solid #ccc; padding:8px;">買掛金</th>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">分類</td>
<td style="border:1px solid #ccc; padding:8px; color:#1565C0; font-weight:bold;">資産</td>
<td style="border:1px solid #ccc; padding:8px; color:#C62828; font-weight:bold;">負債</td>
</tr>
<tr style="background:#f9f9f9;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">意味</td>
<td style="border:1px solid #ccc; padding:8px;">後でお金を<strong>もらえる</strong>権利</td>
<td style="border:1px solid #ccc; padding:8px;">後でお金を<strong>払う</strong>義務</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">場面</td>
<td style="border:1px solid #ccc; padding:8px;">商品を<strong>売った</strong>とき</td>
<td style="border:1px solid #ccc; padding:8px;">商品を<strong>買った</strong>とき</td>
</tr>
</table>
</div>

<h3>🏦 純資産の勘定科目</h3>

<div class="visual-box">
<div class="visual-box-title">純資産の主な勘定科目</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.88rem;">
<tr style="background:#2E7D32; color:white;">
<th style="border:1px solid #ddd; padding:8px;">勘定科目</th>
<th style="border:1px solid #ddd; padding:8px;">意味</th>
<th style="border:1px solid #ddd; padding:8px;">具体例</th>
</tr>
<tr style="background:#E8F5E9;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">資本金</td>
<td style="border:1px solid #ccc; padding:8px;">事業開始時の元手</td>
<td style="border:1px solid #ccc; padding:8px;">開業のために出したお金</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">繰越利益剰余金</td>
<td style="border:1px solid #ccc; padding:8px;">過去の利益の蓄積</td>
<td style="border:1px solid #ccc; padding:8px;">今までの儲けの累計</td>
</tr>
</table>
</div>

<h3>💵 収益の勘定科目</h3>

<div class="visual-box">
<div class="visual-box-title">収益の主な勘定科目</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.88rem;">
<tr style="background:#1565C0; color:white;">
<th style="border:1px solid #ddd; padding:8px;">勘定科目</th>
<th style="border:1px solid #ddd; padding:8px;">意味</th>
</tr>
<tr style="background:#E3F2FD;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">売上</td>
<td style="border:1px solid #ccc; padding:8px;">商品を販売して得た収入（主たる営業活動）</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">受取利息</td>
<td style="border:1px solid #ccc; padding:8px;">銀行預金や貸付金の利息</td>
</tr>
<tr style="background:#E3F2FD;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">受取手数料</td>
<td style="border:1px solid #ccc; padding:8px;">サービスの提供による手数料収入</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">受取家賃</td>
<td style="border:1px solid #ccc; padding:8px;">建物を貸して受け取る家賃</td>
</tr>
<tr style="background:#E3F2FD;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">雑益</td>
<td style="border:1px solid #ccc; padding:8px;">他のどれにも当てはまらない少額の収益</td>
</tr>
</table>
</div>

<h3>💸 費用の勘定科目</h3>

<div class="visual-box">
<div class="visual-box-title">費用の主な勘定科目</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.88rem;">
<tr style="background:#E65100; color:white;">
<th style="border:1px solid #ddd; padding:8px;">勘定科目</th>
<th style="border:1px solid #ddd; padding:8px;">意味</th>
</tr>
<tr style="background:#FFF3E0;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">仕入</td>
<td style="border:1px solid #ccc; padding:8px;">販売するための商品の購入代金</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">給料</td>
<td style="border:1px solid #ccc; padding:8px;">従業員に支払う給与</td>
</tr>
<tr style="background:#FFF3E0;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">支払家賃</td>
<td style="border:1px solid #ccc; padding:8px;">建物を借りて支払う家賃</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">水道光熱費</td>
<td style="border:1px solid #ccc; padding:8px;">電気・ガス・水道代</td>
</tr>
<tr style="background:#FFF3E0;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">通信費</td>
<td style="border:1px solid #ccc; padding:8px;">電話・インターネット・郵便代</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">消耗品費</td>
<td style="border:1px solid #ccc; padding:8px;">文房具など少額の消耗品</td>
</tr>
<tr style="background:#FFF3E0;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">支払利息</td>
<td style="border:1px solid #ccc; padding:8px;">借入金に対して支払う利息</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">旅費交通費</td>
<td style="border:1px solid #ccc; padding:8px;">出張費・電車代・タクシー代</td>
</tr>
<tr style="background:#FFF3E0;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">広告宣伝費</td>
<td style="border:1px solid #ccc; padding:8px;">広告・宣伝のための費用</td>
</tr>
<tr style="background:#fff;">
<td style="border:1px solid #ccc; padding:8px; font-weight:bold;">雑損</td>
<td style="border:1px solid #ccc; padding:8px;">他のどれにも当てはまらない少額の費用</td>
</tr>
</table>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 「受取〇〇」と「支払〇〇」の見分け方</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem;">
<tr style="background:#f0f0f0;">
<th style="border:1px solid #ccc; padding:8px;">パターン</th>
<th style="border:1px solid #ccc; padding:8px;">分類</th>
<th style="border:1px solid #ccc; padding:8px;">例</th>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px;"><strong>受取〇〇</strong></td>
<td style="border:1px solid #ccc; padding:8px; color:#1565C0; font-weight:bold;">収益</td>
<td style="border:1px solid #ccc; padding:8px;">受取利息、受取手数料、受取家賃</td>
</tr>
<tr style="background:#f9f9f9;">
<td style="border:1px solid #ccc; padding:8px;"><strong>支払〇〇</strong></td>
<td style="border:1px solid #ccc; padding:8px; color:#E65100; font-weight:bold;">費用</td>
<td style="border:1px solid #ccc; padding:8px;">支払利息、支払家賃</td>
</tr>
</table>
<p style="font-size:0.85rem; color:#555;">「受取」がつけば収益（もらうお金）、「支払」がつけば費用（払うお金）と覚えましょう！</p>
</div>

<h3>🗂️ 全体マップ</h3>

<div class="visual-box">
<div class="visual-box-title">図解：勘定科目の全体マップ</div>
<table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.85rem;">
<tr>
<td style="border:3px solid #1565C0; padding:0; width:50%; vertical-align:top;">
<div style="background:#1565C0; color:white; padding:8px; text-align:center; font-weight:bold;">B/S 借方（左）</div>
<div style="background:#E3F2FD; padding:10px;">
<strong>【資産】</strong><br>
現金 / 普通預金 / 当座預金<br>
売掛金 / 受取手形<br>
商品 / 建物 / 備品 / 土地 / 車両運搬具
</div>
</td>
<td style="border:3px solid #999; padding:0; width:50%; vertical-align:top;">
<div style="background:#C62828; color:white; padding:8px; text-align:center; font-weight:bold;">B/S 貸方（右）</div>
<div style="background:#FFEBEE; padding:10px; border-bottom:1px dashed #999;">
<strong>【負債】</strong><br>
買掛金 / 支払手形 / 借入金<br>
未払金 / 前受金 / 預り金
</div>
<div style="background:#E8F5E9; padding:10px;">
<strong>【純資産】</strong><br>
資本金 / 繰越利益剰余金
</div>
</td>
</tr>
</table>
<table style="width:100%; border-collapse:collapse; margin:5px 0; font-size:0.85rem;">
<tr>
<td style="border:3px solid #E65100; padding:0; width:50%; vertical-align:top;">
<div style="background:#E65100; color:white; padding:8px; text-align:center; font-weight:bold;">P/L 借方（左）</div>
<div style="background:#FFF3E0; padding:10px;">
<strong>【費用】</strong><br>
仕入 / 給料 / 支払家賃<br>
水道光熱費 / 通信費 / 消耗品費<br>
支払利息 / 旅費交通費 / 広告宣伝費 / 雑損
</div>
</td>
<td style="border:3px solid #1565C0; padding:0; width:50%; vertical-align:top;">
<div style="background:#1565C0; color:white; padding:8px; text-align:center; font-weight:bold;">P/L 貸方（右）</div>
<div style="background:#E3F2FD; padding:10px;">
<strong>【収益】</strong><br>
売上 / 受取利息<br>
受取手数料 / 受取家賃 / 雑益
</div>
</td>
</tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">✅ まとめ</div>
<ul>
<li><strong>勘定科目</strong>は取引を分類するための名前</li>
<li>5つの要素（資産・負債・純資産・収益・費用）に分類される</li>
<li><strong>資産</strong>：現金、売掛金、建物など（持っているもの・権利）</li>
<li><strong>負債</strong>：買掛金、借入金など（支払う義務）</li>
<li><strong>収益</strong>：売上、受取利息など（稼いだお金）</li>
<li><strong>費用</strong>：仕入、給料、支払家賃など（使ったお金）</li>
<li>「受取〇〇」→ 収益、「支払〇〇」→ 費用</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q105_1",
                    type: "choice",
                    question: "「買掛金」はどの要素に分類されますか？",
                    options: ["資産", "負債", "純資産", "費用"],
                    answer: 1,
                    explanation: "買掛金は「商品を買った代金のうち、まだ支払っていない分」で、将来お金を支払う義務があるため「負債」に分類されます。一方、売掛金は「後でお金を受け取る権利」なので「資産」です。"
                },
                {
                    id: "q105_2",
                    type: "choice",
                    question: "次のうち「収益」に分類される勘定科目はどれですか？",
                    options: ["支払利息", "受取利息", "給料", "消耗品費"],
                    answer: 1,
                    explanation: "受取利息は銀行預金などから受け取る利息で「収益」に分類されます。「受取〇〇」は収益、「支払〇〇」は費用と覚えましょう。支払利息・給料・消耗品費はすべて費用です。"
                },
                {
                    id: "q105_3",
                    type: "fill",
                    question: "建物を借りて支払う家賃の勘定科目名は何ですか？漢字で入力してください。",
                    answer: "支払家賃",
                    explanation: "建物を借りて支払う家賃は「支払家賃」（費用）です。反対に、建物を貸して受け取る家賃は「受取家賃」（収益）になります。「支払」がつくので費用に分類されます。"
                },
                {
                    id: "q105_4",
                    type: "choice",
                    question: "「資本金」はどの要素に分類されますか？",
                    options: ["資産", "負債", "純資産", "収益"],
                    answer: 2,
                    explanation: "資本金は事業を始めるときに出資者が出した元手のお金で、「純資産」に分類されます。他人から借りたお金（負債）ではなく、自分のお金なので純資産です。"
                },
                {
                    id: "q105_5",
                    type: "choice",
                    question: "次の勘定科目のうち、「資産」に分類されないものはどれですか？",
                    options: ["現金", "売掛金", "建物", "未払金"],
                    answer: 3,
                    explanation: "未払金は「まだ支払っていない代金」なので「負債」です。現金・売掛金・建物はすべて「資産」に分類されます。未払金は将来お金を支払う義務があるため負債になります。"
                }
            ]
        }

    ] // end modules
};
