// ================= 数据：四分化健身计划 =================
// 周一~周四训练，周五~周日休息/恢复（练四休三循环）
const weekPlan = [
  {
    day: '周一',
    type: '训练日',
    muscle: '胸 + 三头肌',
    icon: '💪',
    recTime: '上午 9:00 - 10:30',
    equipment: [
      { name: '平板杠铃卧推', icon: '🏋️', sets: 4, reps: '8-10', rest: '90秒' },
      { name: '上斜哑铃飞鸟', icon: '🪶', sets: 4, reps: '10-12', rest: '60秒' },
      { name: '双杠臂屈伸', icon: '🤸', sets: 3, reps: '力竭', rest: '90秒' },
      { name: '绳索下压（三头）', icon: '🔗', sets: 4, reps: '12-15', rest: '60秒' },
      { name: '仰卧臂屈伸（EZ杆）', icon: '💪', sets: 3, reps: '10-12', rest: '60秒' }
    ],
    meals: {
      breakfast: { time: '7:30', items: ['全麦面包 2 片', '水煮蛋 3 个', '牛奶 250ml', '香蕉 1 根'] },
      lunch: { time: '12:00', items: ['糙米饭 1 碗', '鸡胸肉 150g', '西兰花', '牛油果半个'] },
      dinner: { time: '18:30', items: ['三文鱼 150g', '红薯 1 个', '菠菜沙拉', '坚果一小把'] }
    },
    tip: '胸肌训练优先做大重量复合动作（卧推），三头放在胸之后，利用预疲劳原理让三头获得更好刺激。注意卧推时肩胛骨收紧，避免肩部代偿。'
  },
  {
    day: '周二',
    type: '训练日',
    muscle: '背 + 二头肌',
    icon: '🦾',
    recTime: '上午 9:00 - 10:30',
    equipment: [
      { name: '引体向上', icon: '🧗', sets: 4, reps: '力竭', rest: '120秒' },
      { name: '高位下拉', icon: '⬇️', sets: 4, reps: '10-12', rest: '90秒' },
      { name: '坐姿划船', icon: '🚣', sets: 4, reps: '10-12', rest: '90秒' },
      { name: '杠铃弯举', icon: '💪', sets: 4, reps: '10-12', rest: '60秒' },
      { name: '锤式弯举', icon: '🔨', sets: 3, reps: '12', rest: '60秒' }
    ],
    meals: {
      breakfast: { time: '7:30', items: ['燕麦粥 1 碗', '蛋白粉 1 勺', '蓝莓适量'] },
      lunch: { time: '12:00', items: ['藜麦饭 1 碗', '牛肉 150g', '芦笋', '橄榄油调味'] },
      dinner: { time: '18:30', items: ['虾仁 150g', '紫薯 1 个', '绿叶蔬菜', '番茄汤'] }
    },
    tip: '背部训练强调"意念集中"，用背阔肌发力而非手臂。下拉时想象"把把手拉向胸前"，顶峰收缩1-2秒。二头弯举保持大臂不动，只动前臂。'
  },
  {
    day: '周三',
    type: '训练日',
    muscle: '肩 + 腹',
    icon: '🙆',
    recTime: '下午 16:00 - 17:30',
    equipment: [
      { name: '坐姿哑铃推肩', icon: '🏋️', sets: 4, reps: '10-12', rest: '90秒' },
      { name: '哑铃侧平举', icon: '✋', sets: 4, reps: '12-15', rest: '60秒' },
      { name: '俯身飞鸟', icon: '🐦', sets: 3, reps: '12', rest: '60秒' },
      { name: '卷腹', icon: '🌀', sets: 4, reps: '20', rest: '45秒' },
      { name: '悬垂举腿', icon: '🦵', sets: 3, reps: '15', rest: '60秒' }
    ],
    meals: {
      breakfast: { time: '7:30', items: ['全麦吐司 2 片', '鸡蛋 2 个', '希腊酸奶 1 杯'] },
      lunch: { time: '12:00', items: ['全麦意面 1 份', '金枪鱼罐头', '番茄', '生菜'] },
      dinner: { time: '18:30', items: ['鸡胸肉 150g', '糙米饭半碗', '黄瓜', '紫菜蛋花汤'] }
    },
    tip: '肩部训练注意三角肌前中后束均衡，侧平举是练宽肩的关键，重量不宜过大，注重离心控制。腹肌训练每组都要做到力竭，感受腹部收缩。'
  },
  {
    day: '周四',
    type: '训练日',
    muscle: '腿 + 臀',
    icon: '🦵',
    recTime: '上午 9:00 - 11:00',
    equipment: [
      { name: '杠铃深蹲', icon: '🏋️', sets: 4, reps: '8-10', rest: '120秒' },
      { name: '腿举机', icon: '🦵', sets: 4, reps: '10-12', rest: '90秒' },
      { name: '罗马尼亚硬拉', icon: '🎯', sets: 4, reps: '8-10', rest: '120秒' },
      { name: '坐姿腿屈伸', icon: '🦵', sets: 3, reps: '12-15', rest: '60秒' },
      { name: '臀推（臀桥）', icon: '🍑', sets: 3, reps: '12', rest: '60秒' }
    ],
    meals: {
      breakfast: { time: '7:30', items: ['燕麦 1 碗', '鸡蛋 2 个', '香蕉 1 根', '花生酱 1 勺'] },
      lunch: { time: '12:00', items: ['米饭 1 碗', '去皮鸡腿肉 150g', '土豆', '胡萝卜'] },
      dinner: { time: '18:30', items: ['牛肉 150g', '全麦意面', '西兰花', '蘑菇汤'] }
    },
    tip: '腿训是全身训练量最大的一天，务必充分热身。深蹲注意膝盖与脚尖方向一致，不要内扣。罗马尼亚硬拉重点拉伸腘绳肌，感受臀部发力。训练后保证碳水补充。'
  },
  {
    day: '周五',
    type: '休息日',
    muscle: '主动恢复',
    icon: '🧘',
    recTime: '自由安排',
    equipment: [
      { name: '快走 / 慢跑', icon: '🏃', sets: 1, reps: '30分钟', rest: '-' },
      { name: '泡沫轴放松', icon: '🧴', sets: 1, reps: '15分钟', rest: '-' },
      { name: '全身拉伸', icon: '🤸', sets: 1, reps: '20分钟', rest: '-' }
    ],
    meals: {
      breakfast: { time: '8:00', items: ['全麦面包 2 片', '鸡蛋 1 个', '牛奶 250ml', '苹果 1 个'] },
      lunch: { time: '12:30', items: ['杂粮饭 1 碗', '鱼肉 150g', '炒时蔬', '豆腐汤'] },
      dinner: { time: '18:30', items: ['鸡胸肉沙拉', '玉米 1 根', '酸奶 1 杯'] }
    },
    tip: '休息日不是完全不动，主动恢复能促进血液循环、加速乳酸代谢。重点放松训练过的肌肉群，尤其是大腿和背部。保证 7-8 小时睡眠。'
  },
  {
    day: '周六',
    type: '休息日',
    muscle: '完全休息',
    icon: '😴',
    recTime: '充分休息',
    equipment: [
      { name: '散步', icon: '🚶', sets: 1, reps: '20-30分钟', rest: '-' },
      { name: '颈部/肩部放松', icon: '💆', sets: 1, reps: '10分钟', rest: '-' },
      { name: '深呼吸冥想', icon: '🧘', sets: 1, reps: '15分钟', rest: '-' }
    ],
    meals: {
      breakfast: { time: '8:30', items: ['燕麦粥', '鸡蛋 1 个', '坚果一小把'] },
      lunch: { time: '12:30', items: ['米饭', '瘦肉 100g', '蔬菜', '紫菜汤'] },
      dinner: { time: '18:30', items: ['清蒸鱼', '红薯', '绿叶蔬菜'] }
    },
    tip: '今天让身体彻底恢复。可以做一些轻度活动如散步，但不要剧烈运动。多喝水，保持营养均衡，为下周的训练储备能量。'
  },
  {
    day: '周日',
    type: '休息日',
    muscle: '恢复 + 准备',
    icon: '📋',
    recTime: '准备下周训练',
    equipment: [
      { name: '全身动态拉伸', icon: '🤸', sets: 1, reps: '15分钟', rest: '-' },
      { name: '核心激活训练', icon: '🔥', sets: 2, reps: '15次/组', rest: '45秒' },
      { name: '整理训练装备', icon: '🎒', sets: 1, reps: '-', rest: '-' }
    ],
    meals: {
      breakfast: { time: '8:00', items: ['全麦吐司', '鸡蛋 2 个', '牛奶', '蓝莓'] },
      lunch: { time: '12:00', items: ['藜麦饭', '鸡胸肉 150g', '西兰花', '牛油果'] },
      dinner: { time: '18:30', items: ['三文鱼', '糙米', '菠菜', '坚果'] }
    },
    tip: '明天开始新一轮训练，今天可以提前准备好训练装备和补给。做一些动态拉伸和核心激活，让身体提前进入状态。回顾本周训练记录，调整下周计划。'
  }
];

// ================= 10 句健身鼓励语 =================
const quotes = [
  '每一次举起，都是对软弱的告别。',
  '汗水不会辜负你，肌肉会记住你的努力。',
  '今天多做一组，明天多一分自信。',
  '没有借口，只有结果。',
  '痛苦是暂时的，放弃是永久的。',
  '你流下的每一滴汗，都在塑造更好的自己。',
  '杠铃不会说谎，你的努力它都看得见。',
  '坚持不是因为容易，而是因为值得。',
  '比昨天的自己更强，就是最大的胜利。',
  '健身不是为了取悦谁，而是为了成为更好的自己。'
];

// ================= 工具函数 =================
function getTodayIndex() {
  // JS: 0=周日, 1=周一 ... 6=周六
  const jsDay = new Date().getDay();
  // 转换为我们的数组索引：周一=0...周日=6
  return (jsDay + 6) % 7;
}

function formatDate() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}年${pad(d.getMonth() + 1)}月${pad(d.getDate())}日`;
}

function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

// ================= 渲染 =================
let currentQuote = 0;

function renderToday() {
  const idx = getTodayIndex();
  const plan = weekPlan[idx];

  document.getElementById('todayDate').textContent = formatDate();
  document.getElementById('dayTag').textContent = plan.day;

  document.getElementById('muscleIcon').textContent = plan.icon;
  document.getElementById('muscleGroup').textContent = plan.muscle;
  document.getElementById('trainType').textContent = plan.type;
  document.getElementById('recTime').textContent = plan.recTime;

  // 器械列表
  const equipHtml = plan.equipment.map(e => `
    <div class="equip-card">
      <div class="equip-header">
        <div class="equip-icon">${e.icon}</div>
        <div class="equip-name">${escapeHtml(e.name)}</div>
      </div>
      <div class="equip-stats">
        <div class="stat-box">
          <div class="stat-label">组数</div>
          <div class="stat-value">${e.sets}</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">每组次数</div>
          <div class="stat-value">${escapeHtml(String(e.reps))}</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">组间歇</div>
          <div class="stat-value">${escapeHtml(e.rest)}</div>
        </div>
      </div>
    </div>
  `).join('');
  document.getElementById('equipmentList').innerHTML = equipHtml;

  // 三餐饮食
  const meals = plan.meals;
  const mealHtml = [
    { key: 'breakfast', title: '早餐', emoji: '🌅', color: '#fbbf24' },
    { key: 'lunch', title: '午餐', emoji: '☀️', color: '#fb923c' },
    { key: 'dinner', title: '晚餐', emoji: '🌙', color: '#7c5cff' }
  ].map(m => {
    const meal = meals[m.key];
    return `
      <div class="meal-card">
        <div class="meal-header">
          <div class="meal-emoji">${m.emoji}</div>
          <div>
            <div class="meal-title">${m.title}</div>
            <div class="meal-time">建议 ${meal.time}</div>
          </div>
        </div>
        <ul class="meal-items">
          ${meal.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
        </ul>
      </div>
    `;
  }).join('');
  document.getElementById('mealGrid').innerHTML = mealHtml;

  // 小贴士
  document.getElementById('tipsCard').innerHTML = `<strong>今日要点：</strong>${escapeHtml(plan.tip)}`;

  // 一周总览
  const todayIdx = getTodayIndex();
  const weekHtml = weekPlan.map((p, i) => `
    <div class="day-cell ${i === todayIdx ? 'today' : ''}">
      <div class="day-name">${p.day}</div>
      <div class="day-emoji">${p.icon}</div>
      <div class="day-muscle">${escapeHtml(p.muscle)}</div>
    </div>
  `).join('');
  document.getElementById('weekGrid').innerHTML = weekHtml;
}

function renderQuote() {
  const track = document.getElementById('quoteTrack');
  track.innerHTML = `<div class="quote-item">${escapeHtml(quotes[currentQuote])}</div>`;
  requestAnimationFrame(() => {
    track.querySelector('.quote-item').classList.add('active');
  });
}

function nextQuote() {
  let next;
  do { next = Math.floor(Math.random() * quotes.length); }
  while (quotes.length > 1 && next === currentQuote);
  currentQuote = next;
  renderQuote();
}

// ================= 初始化 =================
document.addEventListener('DOMContentLoaded', () => {
  renderToday();
  renderQuote();

  // 每 8 秒自动切换鼓励语
  setInterval(nextQuote, 8000);

  // 手动切换按钮
  document.getElementById('quoteShuffle').addEventListener('click', nextQuote);
});
