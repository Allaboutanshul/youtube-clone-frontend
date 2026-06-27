/* =============================================
   YOUTUBE CLONE - SCRIPT.JS
   ============================================= */

'use strict';

// =============================================
// VIDEO DATA
// =============================================

const CHANNEL_COLORS = [
  'linear-gradient(135deg,#ff6b6b,#ee5a24)',
  'linear-gradient(135deg,#a29bfe,#6c5ce7)',
  'linear-gradient(135deg,#55efc4,#00b894)',
  'linear-gradient(135deg,#fd79a8,#e84393)',
  'linear-gradient(135deg,#fdcb6e,#e17055)',
  'linear-gradient(135deg,#74b9ff,#0984e3)',
  'linear-gradient(135deg,#00cec9,#00b894)',
  'linear-gradient(135deg,#e17055,#d63031)',
  'linear-gradient(135deg,#b2bec3,#636e72)',
  'linear-gradient(135deg,#ffeaa7,#fdcb6e)',
];

// Thumbnail gradient palettes
const THUMB_PALETTES = [
  ['#0f0c29','#302b63','#24243e'],
  ['#1a1a2e','#16213e','#0f3460'],
  ['#004e92','#000428'],
  ['#141e30','#243b55'],
  ['#0f2027','#203a43','#2c5364'],
  ['#373b44','#4286f4'],
  ['#1f4037','#99f2c8'],
  ['#16222a','#3a6186'],
  ['#4b6cb7','#182848'],
  ['#200122','#6f0000'],
  ['#434343','#000000'],
  ['#3e1f47','#7b4397'],
  ['#005c97','#363795'],
  ['#1c92d2','#f2fcfe'],
  ['#4facfe','#00f2fe'],
  ['#43e97b','#38f9d7'],
  ['#f093fb','#f5576c'],
  ['#4481eb','#04befe'],
  ['#f7971e','#ffd200'],
  ['#f953c6','#b91d73'],
];

const THUMB_OVERLAYS = [
  // Tech / AI
  { emoji: '🤖', label: 'AI', textColor: '#00f5ff' },
  // Travel
  { emoji: '🏔️', label: 'TRAVEL', textColor: '#ffd200' },
  // Code
  { emoji: '💻', label: 'CODE', textColor: '#43e97b' },
  // Gaming
  { emoji: '🎮', label: 'GAMING', textColor: '#f093fb' },
  // Music
  { emoji: '🎵', label: 'MUSIC', textColor: '#4facfe' },
  // Food
  { emoji: '🍕', label: 'FOOD', textColor: '#f7971e' },
  // Science
  { emoji: '🔬', label: 'SCIENCE', textColor: '#00cec9' },
  // Fitness
  { emoji: '💪', label: 'FITNESS', textColor: '#fd79a8' },
  // Photography
  { emoji: '📸', label: 'PHOTO', textColor: '#fdcb6e' },
  // Space
  { emoji: '🚀', label: 'SPACE', textColor: '#74b9ff' },
];

const VIDEOS = [
  {
    id: 1, category: 'tech',
    title: 'Top 10 AI Tools That Will Change Your Life in 2025',
    channel: 'TechWorld', channelColor: CHANNEL_COLORS[0],
    views: '3.2M', timeAgo: '2 days ago', duration: '14:32',
    subscribers: '8.4M', verified: true,
    description: 'In this video, we explore the top 10 AI tools that are revolutionizing the way we work, create, and think. From productivity boosters to creative powerhouses, these tools will blow your mind. Subscribe and hit the bell!',
    likes: '124K',
    paletteIdx: 0, overlayIdx: 0
  },
  {
    id: 2, category: 'travel',
    title: 'Hiking the Swiss Alps - Full Vlog | Breathtaking Views',
    channel: 'WanderEarth', channelColor: CHANNEL_COLORS[1],
    views: '1.8M', timeAgo: '5 days ago', duration: '22:10',
    subscribers: '2.1M', verified: true,
    description: 'Join me on an epic adventure through the Swiss Alps. We hike the famous Eiger trail, camp under the stars, and experience the most breathtaking views on Earth. This is the trip of a lifetime.',
    likes: '87K',
    paletteIdx: 1, overlayIdx: 1
  },
  {
    id: 3, category: 'education',
    title: 'JavaScript Mastery: Build 5 Projects in 1 Hour',
    channel: 'CodeWithMe', channelColor: CHANNEL_COLORS[2],
    views: '5.6M', timeAgo: '1 week ago', duration: '58:44',
    subscribers: '4.3M', verified: true,
    description: 'This is the ultimate JavaScript crash course for beginners and intermediate developers. We build 5 complete projects from scratch covering all core JavaScript concepts including DOM manipulation, APIs, and more.',
    likes: '231K',
    paletteIdx: 2, overlayIdx: 2
  },
  {
    id: 4, category: 'gaming',
    title: 'My Ultimate 2025 Gaming Setup Tour - $15,000 Build',
    channel: 'GamingPro', channelColor: CHANNEL_COLORS[3],
    views: '4.1M', timeAgo: '3 days ago', duration: '18:55',
    subscribers: '12.3M', verified: true,
    description: 'Welcome to my brand new gaming setup! I spent $15,000 building the ultimate battlestation with triple 4K monitors, a custom water-cooled PC, and the best peripherals money can buy.',
    likes: '198K',
    paletteIdx: 3, overlayIdx: 3
  },
  {
    id: 5, category: 'cooking',
    title: 'Gordon Ramsay Style Pasta Carbonara at Home',
    channel: 'FoodieCorner', channelColor: CHANNEL_COLORS[4],
    views: '2.9M', timeAgo: '6 days ago', duration: '12:20',
    subscribers: '3.7M', verified: false,
    description: 'Learn how to make a perfect, restaurant-quality pasta carbonara right at home. Using simple ingredients and professional techniques, this dish will impress anyone. Full recipe in the description below!',
    likes: '115K',
    paletteIdx: 5, overlayIdx: 5
  },
  {
    id: 6, category: 'music',
    title: 'Live at Madison Square Garden - Full Concert 4K',
    channel: 'MusicVibes', channelColor: CHANNEL_COLORS[5],
    views: '8.7M', timeAgo: '2 weeks ago', duration: '1:42:18',
    subscribers: '22.1M', verified: true,
    description: 'Experience the full live concert at Madison Square Garden in stunning 4K quality. An unforgettable night with the best songs, incredible production, and tens of thousands of fans.',
    likes: '402K',
    paletteIdx: 4, overlayIdx: 4
  },
  {
    id: 7, category: 'tech',
    title: 'I Built an AI That Codes Better Than Most Developers',
    channel: 'DevHacker', channelColor: CHANNEL_COLORS[6],
    views: '1.2M', timeAgo: '4 days ago', duration: '26:14',
    subscribers: '980K', verified: false,
    description: 'I trained a custom AI coding assistant using open-source models and it genuinely writes cleaner code than I do. In this video I show you exactly how I built it, step by step.',
    likes: '67K',
    paletteIdx: 6, overlayIdx: 6
  },
  {
    id: 8, category: 'fitness',
    title: '30-Day Transformation Challenge | Real Results',
    channel: 'FitLife Pro', channelColor: CHANNEL_COLORS[7],
    views: '3.5M', timeAgo: '1 month ago', duration: '15:08',
    subscribers: '5.6M', verified: true,
    description: 'I did a 30-day fitness challenge and the results shocked me. No gym required - just bodyweight exercises, a clean diet, and consistency. Follow along for the full workout plan.',
    likes: '143K',
    paletteIdx: 7, overlayIdx: 7
  },
  {
    id: 9, category: 'tech',
    title: 'iPhone 17 Pro Review - The Most INSANE Upgrade Yet',
    channel: 'TechReviewer', channelColor: CHANNEL_COLORS[8],
    views: '11.3M', timeAgo: '1 week ago', duration: '19:47',
    subscribers: '18.9M', verified: true,
    description: 'The iPhone 17 Pro is Apple\'s most ambitious phone ever. The camera system is unbelievable, the new A19 chip is insanely fast, and the design is gorgeous. But is it worth the upgrade?',
    likes: '534K',
    paletteIdx: 8, overlayIdx: 0
  },
  {
    id: 10, category: 'travel',
    title: 'Tokyo Street Food Tour 2025 - Every Neighborhood!',
    channel: 'GlobeTrekker', channelColor: CHANNEL_COLORS[9],
    views: '2.4M', timeAgo: '3 weeks ago', duration: '34:52',
    subscribers: '1.8M', verified: false,
    description: 'We spent an entire day eating our way through Tokyo - from ramen in Shinjuku to fresh sushi in Tsukiji to the most amazing yakitori in Shibuya. This city is an absolute food paradise.',
    likes: '98K',
    paletteIdx: 9, overlayIdx: 1
  },
  {
    id: 11, category: 'education',
    title: 'How Black Holes Actually Work - Mind-Blowing Physics',
    channel: 'ScienceZone', channelColor: CHANNEL_COLORS[0],
    views: '6.8M', timeAgo: '2 months ago', duration: '28:33',
    subscribers: '9.2M', verified: true,
    description: 'Black holes are among the most mysterious objects in the universe. In this video we explore exactly how they form, what happens at the event horizon, and whether anything can escape.',
    likes: '287K',
    paletteIdx: 10, overlayIdx: 6
  },
  {
    id: 12, category: 'gaming',
    title: 'GTA 6 Graphics Comparison - Real Life vs Game',
    channel: 'GamersUnite', channelColor: CHANNEL_COLORS[1],
    views: '9.1M', timeAgo: '3 days ago', duration: '11:28',
    subscribers: '7.4M', verified: true,
    description: 'GTA 6 looks absolutely insane! We compare in-game footage with real-life locations to show just how realistic Rockstar\'s new engine is. The detail is absolutely unbelievable.',
    likes: '421K',
    paletteIdx: 11, overlayIdx: 3
  },
  {
    id: 13, category: 'music',
    title: 'Lofi Hip Hop 24/7 - Study/Relax/Chill Beats',
    channel: 'ChillBeats', channelColor: CHANNEL_COLORS[2],
    views: '45.2M', timeAgo: 'Live now',  duration: 'LIVE',
    subscribers: '3.4M', verified: false,
    description: 'The best lofi hip hop beats to help you study, relax, and focus. Playing 24/7 - always chill, always vibing. Drop a 💙 if this is your study soundtrack!',
    likes: '1.2M',
    paletteIdx: 12, overlayIdx: 4
  },
  {
    id: 14, category: 'cooking',
    title: '10 Breakfast Ideas to Make Every Morning Exciting',
    channel: 'ChefSecrets', channelColor: CHANNEL_COLORS[3],
    views: '4.7M', timeAgo: '5 days ago', duration: '16:40',
    subscribers: '2.9M', verified: true,
    description: 'Tired of the same boring breakfast? Here are 10 delicious, healthy, and quick breakfast ideas that will transform your mornings. Each recipe takes under 15 minutes and tastes amazing!',
    likes: '189K',
    paletteIdx: 13, overlayIdx: 5
  },
  {
    id: 15, category: 'fitness',
    title: 'The Science of Getting Abs - What Really Works',
    channel: 'BodyScience', channelColor: CHANNEL_COLORS[4],
    views: '7.3M', timeAgo: '2 weeks ago', duration: '21:15',
    subscribers: '4.1M', verified: true,
    description: 'Getting visible abs is 80% diet and 20% exercise - but the details matter enormously. In this video we cover the exact science of fat loss, caloric deficit, and which ab exercises actually matter.',
    likes: '312K',
    paletteIdx: 14, overlayIdx: 7
  },
  {
    id: 16, category: 'tech',
    title: 'React vs Next.js in 2025 - Which Should You Choose?',
    channel: 'WebDevPro', channelColor: CHANNEL_COLORS[5],
    views: '890K', timeAgo: '1 week ago', duration: '23:08',
    subscribers: '1.1M', verified: false,
    description: 'The debate between React and Next.js continues in 2025. In this video, I break down exactly when to use each framework, the pros and cons, and what the industry is actually hiring for right now.',
    likes: '43K',
    paletteIdx: 15, overlayIdx: 2
  },
  {
    id: 17, category: 'travel',
    title: 'Living in Bali for 30 Days on $50/Day - Full Guide',
    channel: 'DigitalNomad', channelColor: CHANNEL_COLORS[6],
    views: '3.8M', timeAgo: '1 month ago', duration: '41:22',
    subscribers: '1.5M', verified: false,
    description: 'Is it actually possible to live in Bali on just $50 per day? I spent an entire month finding out - covering accommodation, food, coworking spaces, transport, and everything else you need to know.',
    likes: '162K',
    paletteIdx: 16, overlayIdx: 1
  },
  {
    id: 18, category: 'education',
    title: 'Quantum Computing Explained for Beginners',
    channel: 'QuantumLearn', channelColor: CHANNEL_COLORS[7],
    views: '2.1M', timeAgo: '3 weeks ago', duration: '32:45',
    subscribers: '780K', verified: false,
    description: 'Quantum computing sounds impossibly complex, but in this video we break it down step by step using simple analogies and visuals. No physics degree required - just curiosity!',
    likes: '78K',
    paletteIdx: 17, overlayIdx: 6
  },
];

// =============================================
// STATE
// =============================================

const state = {
  isDark: true,
  isSidebarMini: false,
  isMobileSidebarOpen: false,
  isModalOpen: false,
  activeChip: 'all',
  isPlaying: false,
  isMuted: false,
  volume: 80,
  progress: 0,
  progressInterval: null,
  isLiked: false,
  isSubscribed: false,
  currentVideo: null,
};

// =============================================
// DOM ELEMENTS
// =============================================

const DOM = {
  body: document.body,
  layout: document.getElementById('layout'),
  sidebar: document.getElementById('sidebar'),
  mainContent: document.getElementById('main-content'),
  menuToggle: document.getElementById('menu-toggle'),
  themeToggle: document.getElementById('theme-toggle'),
  themeIcon: document.getElementById('theme-icon'),
  videoGrid: document.getElementById('video-grid'),
  skeletonGrid: document.getElementById('skeleton-grid'),
  filterChips: document.querySelectorAll('.chip'),
  videoModal: document.getElementById('video-modal'),
  videoModalOverlay: document.getElementById('video-modal-overlay'),
  modalClose: document.getElementById('modal-close'),
  modalTitle: document.getElementById('modal-title'),
  modalViews: document.getElementById('modal-views'),
  modalDate: document.getElementById('modal-date'),
  modalDescription: document.getElementById('modal-description'),
  playerThumbnail: document.getElementById('player-thumbnail'),
  playerScreen: document.getElementById('player-screen'),
  playOverlay: document.getElementById('play-overlay'),
  bigPlayBtn: document.getElementById('big-play-btn'),
  progressBarBg: document.getElementById('progress-bar-bg'),
  progressBarFill: document.getElementById('progress-bar-fill'),
  progressThumb: document.getElementById('progress-thumb'),
  progressBarWrapper: document.getElementById('progress-bar-wrapper'),
  ctrlPlay: document.getElementById('ctrl-play'),
  ctrlPlayIcon: document.getElementById('ctrl-play-icon'),
  ctrlVolume: document.getElementById('ctrl-volume'),
  ctrlVolumeIcon: document.getElementById('ctrl-volume-icon'),
  volumeSlider: document.getElementById('volume-slider'),
  timeDisplay: document.getElementById('time-display'),
  likeBtn: document.getElementById('like-btn'),
  likeCount: document.getElementById('like-count'),
  subscribeBtn: document.getElementById('subscribe-btn'),
  channelAvatarModal: document.getElementById('channel-avatar-modal'),
  channelNameModal: document.getElementById('channel-name-modal'),
  channelSubsModal: document.getElementById('channel-subs-modal'),
  toast: document.getElementById('toast'),
  searchForm: document.getElementById('search-form'),
  searchInput: document.getElementById('search-input'),
};

// =============================================
// THUMBNAIL CANVAS GENERATION
// =============================================

/**
 * Draws a gradient canvas thumbnail with emoji + label overlay
 */
function drawThumbnail(canvas, paletteIdx, overlayIdx, isLive = false) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  const palette = THUMB_PALETTES[paletteIdx % THUMB_PALETTES.length];
  const overlay = THUMB_OVERLAYS[overlayIdx % THUMB_OVERLAYS.length];

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, w, h);
  palette.forEach((color, i) => {
    grad.addColorStop(i / Math.max(palette.length - 1, 1), color);
  });
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Grid lines (subtle)
  ctx.strokeStyle = 'rgba(255,255,255,0.04)';
  ctx.lineWidth = 1;
  const step = 40;
  for (let x = 0; x <= w; x += step) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y <= h; y += step) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Radial glow
  const radGrad = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.55);
  radGrad.addColorStop(0, 'rgba(255,255,255,0.12)');
  radGrad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = radGrad;
  ctx.fillRect(0, 0, w, h);

  // Emoji
  ctx.font = `${h * 0.35}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.shadowBlur = 18;
  ctx.fillText(overlay.emoji, w * 0.5, h * 0.44);
  ctx.shadowBlur = 0;

  // Label
  ctx.font = `bold ${h * 0.14}px 'Roboto', Arial, sans-serif`;
  ctx.fillStyle = overlay.textColor;
  ctx.shadowColor = 'rgba(0,0,0,0.8)';
  ctx.shadowBlur = 10;
  ctx.fillText(overlay.label, w * 0.5, h * 0.82);
  ctx.shadowBlur = 0;

  // LIVE badge
  if (isLive) {
    const bw = 54, bh = 22, bx = w - bw - 10, by = 10;
    ctx.fillStyle = '#ff0000';
    roundRect(ctx, bx, by, bw, bh, 4);
    ctx.fill();
    ctx.font = 'bold 12px Roboto, Arial, sans-serif';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('● LIVE', bx + bw / 2, by + bh / 2);
  }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

// =============================================
// SKELETON LOADER
// =============================================

function showSkeletons(count = 8) {
  DOM.skeletonGrid.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const card = document.createElement('div');
    card.className = 'skeleton-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="skeleton-thumb"></div>
      <div class="skeleton-info">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-lines">
          <div class="skeleton-line"></div>
          <div class="skeleton-line short"></div>
          <div class="skeleton-line shorter"></div>
        </div>
      </div>
    `;
    DOM.skeletonGrid.appendChild(card);
  }
  DOM.skeletonGrid.style.display = 'grid';
  DOM.videoGrid.style.display = 'none';
}

function hideSkeletons() {
  DOM.skeletonGrid.style.display = 'none';
  DOM.videoGrid.style.display = 'grid';
}

// =============================================
// VIDEO GRID RENDERING
// =============================================

function getFilteredVideos(filter) {
  if (filter === 'all') return VIDEOS;
  return VIDEOS.filter(v => v.category === filter);
}

function renderVideoGrid(filter = 'all', searchQuery = '') {
  showSkeletons(8);

  setTimeout(() => {
    let videos = getFilteredVideos(filter);

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      videos = VIDEOS.filter(v =>
        v.title.toLowerCase().includes(q) ||
        v.channel.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q)
      );
    }

    DOM.videoGrid.innerHTML = '';

    if (videos.length === 0) {
      DOM.videoGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding: 80px 20px; color: var(--text-secondary)">
          <span class="material-icons" style="font-size:56px;margin-bottom:16px;display:block;opacity:0.4">search_off</span>
          <h2 style="font-size:20px;font-weight:600;margin-bottom:8px;color:var(--text-primary)">No results found</h2>
          <p>Try different keywords or explore other categories.</p>
        </div>
      `;
      hideSkeletons();
      return;
    }

    videos.forEach((video, idx) => {
      const card = createVideoCard(video, idx);
      DOM.videoGrid.appendChild(card);
    });

    hideSkeletons();
  }, 700);
}

function createVideoCard(video, idx) {
  const card = document.createElement('div');
  card.className = 'video-card';
  card.style.animationDelay = `${Math.min(idx * 0.06, 0.55)}s`;
  card.setAttribute('role', 'article');
  card.setAttribute('aria-label', video.title);

  const isLive = video.duration === 'LIVE';
  const initials = video.channel.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  card.innerHTML = `
    <div class="card-thumbnail">
      <canvas width="640" height="360" style="display:block;width:100%;height:100%;border-radius:8px;" aria-hidden="true"></canvas>
      <div class="hover-play-overlay" aria-hidden="true">
        <div class="hover-play-icon">
          <span class="material-icons">play_arrow</span>
        </div>
      </div>
      <div class="duration-badge">${isLive ? '🔴 LIVE' : video.duration}</div>
    </div>
    <div class="card-info">
      <div class="channel-avatar" style="background:${video.channelColor}" title="${video.channel}" tabindex="0" role="button" aria-label="${video.channel} channel">
        ${initials}
      </div>
      <div class="card-details">
        <div class="card-title">${video.title}</div>
        <div class="card-channel">
          ${video.channel}
          ${video.verified ? '<span class="material-icons verified-icon" title="Verified">check_circle</span>' : ''}
        </div>
        <div class="card-stats">${video.views} views • ${video.timeAgo}</div>
      </div>
      <button class="card-menu-btn" aria-label="More options" tabindex="0">
        <span class="material-icons" style="font-size:20px">more_vert</span>
      </button>
    </div>
  `;

  // Draw canvas thumbnail
  const canvas = card.querySelector('canvas');
  requestAnimationFrame(() => {
    drawThumbnail(canvas, video.paletteIdx, video.overlayIdx, isLive);
  });

  // Click to open modal
  card.addEventListener('click', (e) => {
    if (e.target.closest('.card-menu-btn') || e.target.closest('.channel-avatar')) return;
    openVideoModal(video, canvas);
  });

  // Channel avatar click
  card.querySelector('.channel-avatar').addEventListener('click', (e) => {
    e.stopPropagation();
    showToast(`📺 Opening ${video.channel}...`);
  });

  // Menu button click
  card.querySelector('.card-menu-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    showToast('More options coming soon!');
  });

  return card;
}

// =============================================
// VIDEO MODAL
// =============================================

function openVideoModal(video, sourceCanvas) {
  state.currentVideo = video;
  state.isLiked = false;
  state.isSubscribed = false;

  // Populate modal data
  DOM.modalTitle.textContent = video.title;
  DOM.modalViews.textContent = `${video.views} views`;
  DOM.modalDate.textContent = video.timeAgo === 'Live now' ? '🔴 Live now' : video.timeAgo;
  DOM.likeCount.textContent = video.likes;
  DOM.likeBtn.classList.remove('liked');
  DOM.channelNameModal.textContent = video.channel;
  DOM.channelSubsModal.textContent = `${video.subscribers} subscribers`;
  DOM.modalDescription.innerHTML = `<p>${video.description}</p>`;
  DOM.subscribeBtn.textContent = 'Subscribe';
  DOM.subscribeBtn.classList.remove('subscribed');

  // Channel avatar
  const initials = video.channel.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  DOM.channelAvatarModal.style.background = video.channelColor;
  DOM.channelAvatarModal.textContent = initials;

  // Clone canvas thumbnail into player
  DOM.playerThumbnail.innerHTML = '';
  const cloneCanvas = document.createElement('canvas');
  cloneCanvas.width = 1280;
  cloneCanvas.height = 720;
  cloneCanvas.style.width = '100%';
  cloneCanvas.style.height = '100%';
  cloneCanvas.style.objectFit = 'cover';
  DOM.playerThumbnail.appendChild(cloneCanvas);
  drawThumbnail(cloneCanvas, video.paletteIdx, video.overlayIdx, video.duration === 'LIVE');

  // Reset player state
  stopProgress();
  state.progress = 0;
  state.isPlaying = false;
  updatePlayUI();
  updateProgressUI(0);
  DOM.timeDisplay.textContent = `0:00 / ${video.duration === 'LIVE' ? '∞' : video.duration}`;
  DOM.playOverlay.style.opacity = '1';

  // Open modal
  DOM.videoModalOverlay.classList.add('open');
  state.isModalOpen = true;
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  DOM.videoModalOverlay.classList.remove('open');
  state.isModalOpen = false;
  document.body.style.overflow = '';
  stopProgress();
  state.isPlaying = false;
}

// =============================================
// PLAYER CONTROLS
// =============================================

function togglePlay() {
  state.isPlaying = !state.isPlaying;
  updatePlayUI();

  if (state.isPlaying) {
    DOM.playOverlay.style.opacity = '0';
    startProgress();
  } else {
    DOM.playOverlay.style.opacity = '1';
    stopProgress();
  }
}

function updatePlayUI() {
  DOM.ctrlPlayIcon.textContent = state.isPlaying ? 'pause' : 'play_arrow';
  DOM.bigPlayBtn.querySelector('.material-icons').textContent = state.isPlaying ? 'pause' : 'play_arrow';
}

function startProgress() {
  stopProgress();
  const video = state.currentVideo;
  if (!video || video.duration === 'LIVE') return;

  // Parse duration
  const parts = video.duration.split(':').map(Number);
  let totalSec = parts.length === 3
    ? parts[0] * 3600 + parts[1] * 60 + parts[2]
    : parts[0] * 60 + parts[1];

  if (totalSec <= 0) return;

  state.progressInterval = setInterval(() => {
    state.progress = Math.min(state.progress + (100 / totalSec / 10), 100);
    updateProgressUI(state.progress);

    const elapsed = Math.floor(state.progress / 100 * totalSec);
    DOM.timeDisplay.textContent = `${formatTime(elapsed)} / ${video.duration}`;

    if (state.progress >= 100) {
      stopProgress();
      state.isPlaying = false;
      state.progress = 0;
      updatePlayUI();
      DOM.playOverlay.style.opacity = '1';
    }
  }, 100);
}

function stopProgress() {
  if (state.progressInterval) {
    clearInterval(state.progressInterval);
    state.progressInterval = null;
  }
}

function updateProgressUI(pct) {
  DOM.progressBarFill.style.width = `${pct}%`;
  DOM.progressThumb.style.left = `${pct}%`;
}

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  return `${m}:${String(s).padStart(2,'0')}`;
}

function toggleMute() {
  state.isMuted = !state.isMuted;
  DOM.ctrlVolumeIcon.textContent = state.isMuted ? 'volume_off' : (state.volume < 50 ? 'volume_down' : 'volume_up');
  DOM.volumeSlider.value = state.isMuted ? 0 : state.volume;
}

function seekProgress(e) {
  const rect = DOM.progressBarBg.getBoundingClientRect();
  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
  state.progress = (x / rect.width) * 100;
  updateProgressUI(state.progress);

  if (state.isPlaying) {
    stopProgress();
    startProgress();
  }
}

// =============================================
// SIDEBAR
// =============================================

function toggleSidebar() {
  const isMobile = window.innerWidth <= 900;

  if (isMobile) {
    state.isMobileSidebarOpen = !state.isMobileSidebarOpen;
    DOM.sidebar.classList.toggle('mobile-open', state.isMobileSidebarOpen);
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => {
        state.isMobileSidebarOpen = false;
        DOM.sidebar.classList.remove('mobile-open');
        overlay.classList.remove('show');
      });
    }
    overlay.classList.toggle('show', state.isMobileSidebarOpen);
  } else {
    state.isSidebarMini = !state.isSidebarMini;
    DOM.sidebar.classList.toggle('mini', state.isSidebarMini);
    DOM.mainContent.classList.toggle('mini', state.isSidebarMini);
  }
}

// =============================================
// THEME TOGGLE
// =============================================

function toggleTheme() {
  state.isDark = !state.isDark;
  DOM.body.classList.toggle('dark-mode', state.isDark);
  DOM.body.classList.toggle('light-mode', !state.isDark);
  DOM.themeIcon.textContent = state.isDark ? 'light_mode' : 'dark_mode';
  showToast(state.isDark ? '🌙 Dark mode on' : '☀️ Light mode on');
}

// =============================================
// TOAST
// =============================================

let toastTimeout;
function showToast(msg) {
  DOM.toast.textContent = msg;
  DOM.toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => DOM.toast.classList.remove('show'), 2800);
}

// =============================================
// FILTER CHIPS
// =============================================

function initFilterChips() {
  DOM.filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      DOM.filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeChip = chip.dataset.chip;
      renderVideoGrid(state.activeChip);
    });
  });
}

// =============================================
// NAV ITEMS
// =============================================

function initNavItems() {
  document.querySelectorAll('.nav-item[data-filter]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      const filter = item.dataset.filter;

      // Map nav filters to chips
      const chipMap = {
        all: 'all', music: 'music', gaming: 'gaming',
        trending: 'all', library: 'all',
        history: 'all', subscriptions: 'all', shorts: 'all'
      };

      const chipFilter = chipMap[filter] || 'all';
      DOM.filterChips.forEach(c => {
        c.classList.toggle('active', c.dataset.chip === chipFilter);
      });

      renderVideoGrid(filter === 'all' || !['music','gaming','tech','cooking','travel','education','fitness'].includes(filter)
        ? 'all' : filter);

      // Close mobile sidebar
      if (window.innerWidth <= 900) {
        state.isMobileSidebarOpen = false;
        DOM.sidebar.classList.remove('mobile-open');
        const overlay = document.querySelector('.sidebar-overlay');
        if (overlay) overlay.classList.remove('show');
      }
    });
  });
}

// =============================================
// SEARCH
// =============================================

function initSearch() {
  DOM.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = DOM.searchInput.value.trim();
    if (!query) return;

    // Reset chips
    DOM.filterChips.forEach(c => c.classList.remove('active'));
    document.querySelector('[data-chip="all"]').classList.add('active');

    renderVideoGrid('all', query);

    // Pulse animation on search button
    const btn = document.getElementById('search-btn');
    btn.classList.add('search-highlight');
    setTimeout(() => btn.classList.remove('search-highlight'), 500);

    showToast(`🔍 Searching for "${query}"...`);
  });

  // Live search on input
  let searchDebounce;
  DOM.searchInput.addEventListener('input', () => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      const query = DOM.searchInput.value.trim();
      if (query.length >= 2) {
        DOM.filterChips.forEach(c => c.classList.remove('active'));
        document.querySelector('[data-chip="all"]').classList.add('active');
        renderVideoGrid('all', query);
      } else if (query.length === 0) {
        renderVideoGrid(state.activeChip);
      }
    }, 400);
  });

  document.getElementById('mic-btn').addEventListener('click', () => {
    showToast('🎙️ Voice search coming soon!');
  });
}

// =============================================
// MODAL ACTIONS
// =============================================

function initModalActions() {
  // Like button
  DOM.likeBtn.addEventListener('click', () => {
    state.isLiked = !state.isLiked;
    DOM.likeBtn.classList.toggle('liked', state.isLiked);
    DOM.likeBtn.querySelector('.material-icons').textContent = state.isLiked ? 'thumb_up' : 'thumb_up';
    showToast(state.isLiked ? '👍 Added to liked videos!' : '👋 Removed from liked videos');
  });

  // Subscribe
  DOM.subscribeBtn.addEventListener('click', () => {
    state.isSubscribed = !state.isSubscribed;
    DOM.subscribeBtn.textContent = state.isSubscribed ? 'Subscribed ✓' : 'Subscribe';
    DOM.subscribeBtn.classList.toggle('subscribed', state.isSubscribed);
    showToast(state.isSubscribed
      ? `🔔 Subscribed to ${state.currentVideo?.channel}!`
      : `Unsubscribed from ${state.currentVideo?.channel}`
    );
  });

  // Share
  document.getElementById('share-btn').addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({ title: state.currentVideo?.title, url: window.location.href });
    } else {
      showToast('🔗 Link copied to clipboard!');
    }
  });

  // Save
  document.getElementById('save-btn').addEventListener('click', () => {
    showToast('📌 Saved to Watch Later!');
  });

  // More
  document.getElementById('more-btn').addEventListener('click', () => {
    showToast('More options coming soon!');
  });

  // Dislike
  document.getElementById('dislike-btn').addEventListener('click', () => {
    showToast('👎 Thanks for your feedback');
  });

  // Create video
  document.getElementById('video-create-btn').addEventListener('click', () => {
    showToast('🎬 Video creator coming soon!');
  });

  // Notification
  document.getElementById('notif-btn').addEventListener('click', () => {
    showToast('🔔 All caught up! No new notifications');
  });

  // Avatar
  document.getElementById('avatar-btn').addEventListener('click', () => {
    showToast('👤 Profile menu coming soon!');
  });
}

// =============================================
// EVENT LISTENERS
// =============================================

function initEventListeners() {
  // Menu toggle
  DOM.menuToggle.addEventListener('click', toggleSidebar);

  // Theme toggle
  DOM.themeToggle.addEventListener('click', toggleTheme);

  // Close modal
  DOM.modalClose.addEventListener('click', closeVideoModal);
  DOM.videoModalOverlay.addEventListener('click', (e) => {
    if (e.target === DOM.videoModalOverlay) closeVideoModal();
  });

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.isModalOpen) closeVideoModal();
    if (e.key === ' ' && state.isModalOpen) { e.preventDefault(); togglePlay(); }
  });

  // Player - play/pause on screen click
  DOM.playerScreen.addEventListener('click', (e) => {
    if (!e.target.closest('.player-controls')) togglePlay();
  });

  DOM.bigPlayBtn.addEventListener('click', (e) => { e.stopPropagation(); togglePlay(); });
  DOM.ctrlPlay.addEventListener('click', togglePlay);

  // Volume
  DOM.ctrlVolume.addEventListener('click', toggleMute);
  DOM.volumeSlider.addEventListener('input', (e) => {
    state.volume = parseInt(e.target.value);
    state.isMuted = state.volume === 0;
    DOM.ctrlVolumeIcon.textContent = state.isMuted ? 'volume_off' : (state.volume < 50 ? 'volume_down' : 'volume_up');
  });

  // Progress bar seek
  DOM.progressBarWrapper.addEventListener('click', seekProgress);

  // Skip buttons
  document.getElementById('ctrl-skip-back').addEventListener('click', () => {
    state.progress = Math.max(0, state.progress - 2.77); // ~10s of a 6min video
    updateProgressUI(state.progress);
  });
  document.getElementById('ctrl-skip-fwd').addEventListener('click', () => {
    state.progress = Math.min(100, state.progress + 2.77);
    updateProgressUI(state.progress);
  });

  // Settings / Fullscreen (placeholder)
  document.getElementById('ctrl-settings').addEventListener('click', () => {
    showToast('⚙️ Settings menu coming soon!');
  });

  document.getElementById('ctrl-fullscreen').addEventListener('click', () => {
    const el = DOM.playerScreen;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen?.().catch(() => showToast('Fullscreen not available'));
    }
  });

  // Description expand
  DOM.modalDescription.addEventListener('click', () => {
    const p = DOM.modalDescription.querySelector('p');
    if (p) p.style.webkitLineClamp = p.style.webkitLineClamp ? '' : '3';
  });

  // Responsive resize
  window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 900;
    if (!isMobile) {
      DOM.sidebar.classList.remove('mobile-open');
      const overlay = document.querySelector('.sidebar-overlay');
      if (overlay) overlay.classList.remove('show');
      state.isMobileSidebarOpen = false;
    }
  });
}

// =============================================
// LOGO CLICK
// =============================================

function initLogo() {
  document.querySelector('.logo-link').addEventListener('click', (e) => {
    e.preventDefault();
    DOM.searchInput.value = '';
    DOM.filterChips.forEach(c => c.classList.remove('active'));
    document.querySelector('[data-chip="all"]').classList.add('active');
    state.activeChip = 'all';
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('nav-home').classList.add('active');
    renderVideoGrid('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =============================================
// HEADER SCROLL EFFECT
// =============================================

function initHeaderScroll() {
  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const header = document.getElementById('yt-header');
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    header.style.transition = 'transform 0.3s ease';
    lastScrollY = currentScrollY;
  }, { passive: true });
}

// =============================================
// INIT
// =============================================

function init() {
  renderVideoGrid('all');
  initFilterChips();
  initNavItems();
  initSearch();
  initModalActions();
  initEventListeners();
  initLogo();
  initHeaderScroll();

  // Welcome toast
  setTimeout(() => showToast('🎬 Welcome to YouTube!'), 800);
}

document.addEventListener('DOMContentLoaded', init);
