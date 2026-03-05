/* ============================================
   簿記3級アカデミー - Main Application
   ============================================ */
const App = {
    levels: [], allModules: [], currentModuleId: null, progress: {}, quizResults: {},

    init() {
        this.levels = [LEVEL1_DATA, LEVEL2_DATA, LEVEL3_DATA, LEVEL4_DATA, LEVEL5_DATA, LEVEL6_DATA];
        this.allModules = [];
        this.levels.forEach(level => { level.modules.forEach(mod => { this.allModules.push({ ...mod, levelId: level.id, levelTitle: level.title }); }); });
        this.loadProgress(); this.buildSidebar(); this.showDashboard();
        if (localStorage.getItem('boki-darkmode') === 'true') document.documentElement.setAttribute('data-theme', 'dark');
        this.updateGlobalProgress();
        document.addEventListener('click', (e) => { const h = e.target.closest('.collapsible-header'); if (h) h.parentElement.classList.toggle('open'); });
    },

    loadProgress() {
        try { const s = localStorage.getItem('boki-progress'); if (s) this.progress = JSON.parse(s);
            const sq = localStorage.getItem('boki-quiz-results'); if (sq) this.quizResults = JSON.parse(sq);
        } catch (e) { this.progress = {}; this.quizResults = {}; }
    },

    saveProgress() { localStorage.setItem('boki-progress', JSON.stringify(this.progress)); localStorage.setItem('boki-quiz-results', JSON.stringify(this.quizResults)); },
    completeModule(id) { this.progress[id] = { completed: true, completedAt: new Date().toISOString() }; this.saveProgress(); this.buildSidebar(); this.updateGlobalProgress(); },
    saveQuizResult(id, result) { this.quizResults[id] = { ...result, attemptedAt: new Date().toISOString() }; this.saveProgress(); },
    isModuleCompleted(id) { return this.progress[id] && this.progress[id].completed; },

    updateGlobalProgress() {
        const total = this.allModules.length, completed = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        const fill = document.getElementById('globalProgressFill'), text = document.getElementById('globalProgressText');
        if (fill) fill.style.width = pct + '%'; if (text) text.textContent = `${pct}% 完了 (${completed}/${total})`;
    },

    buildSidebar() {
        const nav = document.getElementById('sidebarNav'); let html = '';
        this.levels.forEach(level => {
            const mods = level.modules, done = mods.filter(m => this.isModuleCompleted(m.id)).length;
            const isCurrent = this.currentModuleId && mods.some(m => m.id === this.currentModuleId);
            html += `<div class="sidebar-level"><div class="sidebar-level-header ${isCurrent ? 'expanded' : ''}" onclick="App.toggleLevel(this)">
                <span>${level.icon} Lv${level.id}: ${level.title}</span>
                <span style="display:flex;align-items:center;gap:8px;"><span style="font-size:0.7rem;opacity:0.7;">${done}/${mods.length}</span><span class="chevron">▶</span></span>
                </div><div class="sidebar-modules ${isCurrent ? 'expanded' : ''}">`;
            mods.forEach(mod => {
                html += `<div class="sidebar-item ${this.isModuleCompleted(mod.id)?'completed':''} ${this.currentModuleId===mod.id?'active':''}" onclick="App.showModule(${mod.id})">
                    <span class="status-dot"></span><span>${mod.title}</span></div>`;
            });
            html += '</div></div>';
        });
        nav.innerHTML = html;
    },

    toggleLevel(h) { h.classList.toggle('expanded'); h.nextElementSibling.classList.toggle('expanded'); },
    toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); },

    showDashboard() {
        this.currentModuleId = null; this.showView('dashboardView'); this.buildSidebar();
        const c = document.getElementById('dashboardView');
        const total = this.allModules.length, done = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const quizzes = Object.keys(this.quizResults).length;
        const avg = quizzes > 0 ? Math.round(Object.values(this.quizResults).reduce((s, r) => s + r.percentage, 0) / quizzes) : 0;
        let html = `<div class="fade-in"><div class="dashboard-hero"><h2>簿記3級アカデミーへようこそ</h2>
            <p>仕訳が苦手でも大丈夫！図解とイメージで日商簿記3級の全範囲を学べる総合学習プラットフォームです。</p></div>
            <div class="dashboard-grid">
                <div class="stat-card"><div class="stat-value">${done}/${total}</div><div class="stat-label">モジュール完了</div></div>
                <div class="stat-card"><div class="stat-value">${quizzes}</div><div class="stat-label">クイズ受験数</div></div>
                <div class="stat-card"><div class="stat-value">${avg}%</div><div class="stat-label">平均スコア</div></div>
                <div class="stat-card"><div class="stat-value">${this.getEstimatedTime()}</div><div class="stat-label">残り学習時間</div></div>
            </div><h2 style="margin-bottom:20px;font-size:1.3rem;">学習コース</h2><div class="dashboard-grid">`;
        this.levels.forEach(level => {
            const mods = level.modules, d = mods.filter(m => this.isModuleCompleted(m.id)).length, pct = Math.round((d / mods.length) * 100);
            html += `<div class="level-card level-${level.id}" onclick="App.showModule(${mods[0].id})">
                <div class="level-card-header"><div class="level-icon">${level.icon}</div><div><h3>Level ${level.id}: ${level.title}</h3>
                <div class="level-desc">${level.description} (${mods.length}モジュール)</div></div></div>
                <div class="level-progress"><div class="level-progress-bar"><div class="level-progress-fill" style="width:${pct}%"></div></div>
                <div class="level-progress-text">${d}/${mods.length} 完了 (${pct}%)</div></div></div>`;
        });
        html += '</div></div>'; c.innerHTML = html;
    },

    getEstimatedTime() {
        let t = 0; this.allModules.forEach(m => { if (!this.isModuleCompleted(m.id)) { const match = m.duration.match(/(\d+)/); if (match) t += parseInt(match[1]); } });
        if (t === 0) return '完了！'; const h = Math.floor(t / 60), mins = t % 60; return h > 0 ? `約${h}時間${mins}分` : `約${mins}分`;
    },

    showModule(moduleId) {
        const mod = this.allModules.find(m => m.id === moduleId); if (!mod) return;
        this.currentModuleId = moduleId; this.showView('moduleView'); this.buildSidebar();
        document.getElementById('sidebar').classList.remove('open');
        const c = document.getElementById('moduleView'), level = this.levels.find(l => l.id === mod.levelId);
        const idx = this.allModules.findIndex(m => m.id === moduleId);
        const prev = idx > 0 ? this.allModules[idx - 1] : null, next = idx < this.allModules.length - 1 ? this.allModules[idx + 1] : null;
        let html = `<div class="fade-in"><div class="module-header">
            <div class="module-breadcrumb"><a onclick="App.showDashboard()">ダッシュボード</a> / <a onclick="App.showModule(${level.modules[0].id})">Level ${level.id}: ${level.title}</a> / ${mod.title}</div>
            <h1 class="module-title">${mod.title}</h1>
            <div class="module-meta"><span>⏱ ${mod.duration}</span><span>${this.isModuleCompleted(moduleId) ? '✅ 完了済み' : '📖 未完了'}</span></div></div>
            <div class="module-body">${mod.content}</div>
            <div class="module-nav"><div>${prev ? `<button class="btn btn-outline" onclick="App.showModule(${prev.id})">← ${prev.title}</button>` : ''}</div>
            <div style="display:flex;gap:12px;">${mod.quiz && mod.quiz.length > 0
                ? `<button class="btn btn-primary btn-lg" onclick="App.startQuiz(${moduleId})">理解度チェック (${mod.quiz.length}問)</button>`
                : `<button class="btn btn-success btn-lg" onclick="App.completeModule(${moduleId}); App.goToNextModule(${moduleId});">完了して次へ</button>`}</div>
            <div>${next ? `<button class="btn btn-outline" onclick="App.showModule(${next.id})">${next.title} →</button>` : ''}</div></div></div>`;
        c.innerHTML = html; document.querySelector('.content').scrollTop = 0;
    },

    startQuiz(moduleId) { const mod = this.allModules.find(m => m.id === moduleId); if (!mod || !mod.quiz) return; this.showView('quizView'); Quiz.start(moduleId, mod.quiz); },
    goToNextModule(id) { const idx = this.allModules.findIndex(m => m.id === id); if (idx < this.allModules.length - 1) this.showModule(this.allModules[idx + 1].id); else { this.showDashboard(); this.showCompletionMessage(); } },

    showCompletionMessage() {
        document.getElementById('modalContent').innerHTML = `<h2>🎓 おめでとうございます！</h2>
            <div class="score-circle pass" style="font-size:2.5rem;">🏆</div>
            <p>全モジュール完了！<br>簿記3級の全範囲を学習しました。<br>過去問で実力を確認しましょう！</p>
            <div class="modal-actions"><button class="btn btn-primary" onclick="App.closeModal()">ダッシュボードへ</button></div>`;
        document.getElementById('modalOverlay').style.display = 'flex';
    },

    closeModal() { document.getElementById('modalOverlay').style.display = 'none'; },
    showView(viewId) { ['dashboardView','moduleView','quizView','referenceView'].forEach(id => { document.getElementById(id).style.display = id === viewId ? 'block' : 'none'; }); },
    toggleDarkMode() { const d = document.documentElement.getAttribute('data-theme') === 'dark'; if (d) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('boki-darkmode','false'); } else { document.documentElement.setAttribute('data-theme','dark'); localStorage.setItem('boki-darkmode','true'); } },
    resetProgress() { if (confirm('全ての学習進捗をリセットしますか？')) { this.progress = {}; this.quizResults = {}; localStorage.removeItem('boki-progress'); localStorage.removeItem('boki-quiz-results'); this.buildSidebar(); this.updateGlobalProgress(); this.showDashboard(); } },

    showReference() {
        this.showView('referenceView'); this.buildSidebar();
        const c = document.getElementById('referenceView');
        const sections = [
            { category: '資産', accounts: [
                { name: '現金', desc: '紙幣・硬貨・通貨代用証券' }, { name: '当座預金', desc: '当座預金口座の残高' },
                { name: '普通預金', desc: '普通預金口座の残高' }, { name: '売掛金', desc: '商品を掛けで売った代金の未回収分' },
                { name: '受取手形', desc: '手形で受け取った売上代金' }, { name: '商品', desc: '販売目的で保有する商品' },
                { name: '貸付金', desc: '他者に貸し付けた金銭' }, { name: '未収入金', desc: '商品以外の売却代金の未回収分' },
                { name: '前払金', desc: '商品の代金を前払いした分' }, { name: '仮払金', desc: '金額や用途が未確定の支出' },
                { name: '建物', desc: '事業用の建物' }, { name: '備品', desc: '事業用の備品・機器' },
                { name: '車両運搬具', desc: '事業用の車両' }, { name: '土地', desc: '事業用の土地' },
            ]},
            { category: '負債', accounts: [
                { name: '買掛金', desc: '商品を掛けで仕入れた代金の未払分' }, { name: '支払手形', desc: '手形で支払った仕入代金' },
                { name: '借入金', desc: '金融機関等から借りた金銭' }, { name: '未払金', desc: '商品以外の購入代金の未払分' },
                { name: '前受金', desc: '商品代金を前受けした分' }, { name: '仮受金', desc: '内容が未確定の入金' },
                { name: '預り金', desc: '従業員等から一時的に預かった金銭' }, { name: '当座借越', desc: '当座預金の借越額' },
            ]},
            { category: '純資産（資本）', accounts: [
                { name: '資本金', desc: '出資者が拠出した元手' }, { name: '繰越利益剰余金', desc: '過去の利益の蓄積分' },
            ]},
            { category: '収益', accounts: [
                { name: '売上', desc: '商品の販売による収入' }, { name: '受取利息', desc: '預金や貸付金の利息収入' },
                { name: '受取手数料', desc: '手数料として受け取った収入' }, { name: '受取家賃', desc: '建物等の貸付による賃料収入' },
                { name: '雑益', desc: 'その他の少額の収益' }, { name: '固定資産売却益', desc: '固定資産を帳簿価額より高く売った差額' },
            ]},
            { category: '費用', accounts: [
                { name: '仕入', desc: '商品の仕入原価' }, { name: '給料', desc: '従業員への給与' },
                { name: '広告宣伝費', desc: '広告にかかった費用' }, { name: '旅費交通費', desc: '出張や移動にかかった費用' },
                { name: '通信費', desc: '電話・郵便等の費用' }, { name: '消耗品費', desc: '少額の消耗品購入費' },
                { name: '水道光熱費', desc: '水道・電気・ガス代' }, { name: '支払家賃', desc: '建物等の賃借料' },
                { name: '保険料', desc: '保険の支払額' }, { name: '支払利息', desc: '借入金の利息支払' },
                { name: '雑損', desc: 'その他の少額の損失' }, { name: '減価償却費', desc: '固定資産の価値減少分' },
                { name: '貸倒引当金繰入', desc: '貸倒に備えた引当金の計上額' }, { name: '貸倒損失', desc: '売掛金等が回収不能になった損失' },
                { name: '固定資産売却損', desc: '固定資産を帳簿価額より安く売った差額' },
            ]}
        ];
        let html = `<div class="fade-in"><h1 style="font-size:1.6rem;margin-bottom:8px;">勘定科目リファレンス</h1>
            <p style="color:var(--text-secondary);margin-bottom:24px;">簿記3級で頻出の勘定科目一覧です。</p>
            <div class="reference-search"><input type="text" id="refSearchInput" placeholder="勘定科目名で検索..." oninput="App.filterReference()"></div>`;
        sections.forEach(s => {
            const colors = { '資産': '#2563eb', '負債': '#dc2626', '純資産（資本）': '#7c3aed', '収益': '#059669', '費用': '#d97706' };
            html += `<div class="ref-domain-section"><h2 style="font-size:1.2rem;margin:24px 0 12px;color:${colors[s.category] || '#333'}">${s.category}</h2><div style="display:grid;gap:8px;">`;
            s.accounts.forEach(a => {
                html += `<div class="ref-var-row" data-var="${a.name}" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;gap:16px;border-left:4px solid ${colors[s.category] || '#333'}">
                    <div style="min-width:120px;font-weight:700;font-size:0.95rem;">${a.name}</div><div style="font-size:0.85rem;color:var(--text-secondary)">${a.desc}</div></div>`;
            });
            html += '</div></div>';
        });
        html += '</div>'; c.innerHTML = html;
    },

    filterReference() {
        const q = document.getElementById('refSearchInput').value.toLowerCase().trim();
        document.querySelectorAll('.ref-var-row').forEach(r => { r.style.display = (!q || r.getAttribute('data-var').includes(q)) ? '' : 'none'; });
    }
};

document.addEventListener('DOMContentLoaded', () => { App.init(); });
