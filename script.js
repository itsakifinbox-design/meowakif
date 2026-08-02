<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Birthday, Ania 🌷</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Dancing+Script:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Animated BG -->
<div class="animated-bg"></div>
<canvas id="bg-canvas"></canvas>

<!-- Custom Cursor -->
<div id="cursor"></div>
<div id="cursor-ring"></div>

<!-- Loading Screen -->
<div id="loading-screen">
  <div class="loading-tulip">🌷</div>
  <div class="loading-text">Preparing something magical…</div>
  <div class="loading-bar-wrap"><div class="loading-bar"></div></div>
</div>

<!-- Music Modal -->
<div id="music-modal">
  <div class="music-card">
    <div class="music-note">🎵</div>
    <h3>A Little Melody</h3>
    <p>Would you like to enjoy soft background music while you explore this journey made just for you?</p>
    <div class="music-btns">
      <button class="btn-primary" onclick="acceptMusic()">Yes, please 🎶</button>
      <button class="btn-ghost" onclick="declineMusic()">Not now</button>
    </div>
  </div>
</div>

<!-- Music Toggle -->
<button id="music-toggle" onclick="toggleMusic()" title="Toggle music">🎵</button>

<!-- Nav Dots -->
<div id="nav-dots">
  <div class="nav-dot active" onclick="scrollToSection(0)" title="Home"></div>
  <div class="nav-dot" onclick="scrollToSection(1)" title="Countdown"></div>
  <div class="nav-dot" onclick="scrollToSection(2)" title="You are"></div>
  <div class="nav-dot" onclick="scrollToSection(3)" title="Memories"></div>
  <div class="nav-dot" onclick="scrollToSection(4)" title="Letter"></div>
  <div class="nav-dot" onclick="scrollToSection(5)" title="Cake"></div>
  <div class="nav-dot" onclick="scrollToSection(6)" title="Gift"></div>
  <div class="nav-dot" onclick="scrollToSection(7)" title="Magazine"></div>
  <div class="nav-dot" onclick="scrollToSection(8)" title="Wish"></div>
  <div class="nav-dot" onclick="scrollToSection(9)" title="Finale"></div>
</div>

<!-- Tulip Counter (Easter Egg tracker) -->
<div id="tulip-counter">🌷 <span id="tulip-count">0</span>/5 tulips found</div>

<!-- Secret Modal -->
<div id="secret-modal">
  <div class="secret-card">
    <div style="font-size:3rem;margin-bottom:1rem;">🌟✨🌷</div>
    <h2>You found the secret!</h2>
    <p>
      <!-- SECRET MESSAGE — EDIT THIS -->
      Ania, you weren't supposed to find this so easily —
      but knowing you, I'm not surprised. You always find
      the magic in everything.

      This secret message is just for you:
      I am so incredibly proud of the person you've become.
      Every day, you make the world a little softer and
      a little kinder — just by being in it.

      I love you more than all the tulips in the world. 🌷
    </p>
    <button class="secret-close" onclick="closeSecret()">Close with love 💕</button>
  </div>
</div>

<!-- MAIN CONTENT -->
<div id="main-content">

  <!-- ===== HERO ===== -->
  <section id="hero">
    <div class="hero-eyebrow">August 4th · A Very Special Day</div>
    <h1 class="hero-title">
      Happy Birthday,
      <span>Ania</span>
    </h1>
    <p class="hero-subtitle">Today, the whole world celebrates you — and so do I.</p>
    <div class="hero-tulips">
      <span>🌷</span><span>✨</span><span>🌷</span><span>✨</span><span>🌷</span>
    </div>
    <button class="begin-btn" onclick="beginJourney()">
      Begin the Journey <span class="arrow">→</span>
    </button>
  </section>

  <!-- ===== COUNTDOWN ===== -->
  <section id="countdown-section" class="reveal">
    <div class="section-title reveal">Until Your <em>Special Day</em></div>
    <div class="section-divider reveal"><span>🌷</span></div>
    <div class="countdown-glass reveal">
      <div id="countdown-display"></div>
    </div>
  </section>

  <!-- ===== ABOUT ===== -->
  <section id="about-section">
    <div class="section-title reveal">You are so <em>wonderfully</em> you</div>
    <div class="section-divider reveal"><span>✨</span></div>
    <div class="compliment-cards">
      <div class="compliment-card reveal">
        <div class="compliment-icon">🌸</div>
        <div class="compliment-word">Endlessly Cute</div>
        <div class="compliment-desc">The kind of cute that makes everything better just by being present.</div>
      </div>
      <div class="compliment-card reveal">
        <div class="compliment-icon">😄</div>
        <div class="compliment-word">Hilariously Funny</div>
        <div class="compliment-desc">Your laugh is contagious, and your humor is one of a kind.</div>
      </div>
      <div class="compliment-card reveal">
        <div class="compliment-icon">💗</div>
        <div class="compliment-word">Deeply Kind</div>
        <div class="compliment-desc">You give your whole heart to everything and everyone you love.</div>
      </div>
      <div class="compliment-card reveal">
        <div class="compliment-icon">🦋</div>
        <div class="compliment-word">Quietly Elegant</div>
        <div class="compliment-desc">Grace isn't taught — it's just something you carry effortlessly.</div>
      </div>
      <div class="compliment-card reveal">
        <div class="compliment-icon">🌷</div>
        <div class="compliment-word">A Little Emotional</div>
        <div class="compliment-desc">And that's your superpower — you feel everything beautifully.</div>
      </div>
      <div class="compliment-card reveal">
        <div class="compliment-icon">☀️</div>
        <div class="compliment-word">Endlessly Bright</div>
        <div class="compliment-desc">You light up every corner of every room without even trying.</div>
      </div>
      <div class="compliment-card reveal">
        <div class="compliment-icon">🌙</div>
        <div class="compliment-word">Softly Dreamy</div>
        <div class="compliment-desc">There's a gentle magic about you — like you were made of moonlight.</div>
      </div>
      <div class="compliment-card reveal">
        <div class="compliment-icon">💎</div>
        <div class="compliment-word">Genuinely Rare</div>
        <div class="compliment-desc">People like you don't come along often. The world got so lucky with you.</div>
      </div>
    </div>
  </section>

  <!-- ===== GALLERY ===== -->
  <section id="gallery-section">
    <div class="section-title reveal">Your <em>Memories</em></div>
    <div class="section-divider reveal"><span>📸</span></div>
    <div class="gallery-track">
      <div class="polaroid reveal">
        <div class="polaroid-pin"></div>
        <div class="polaroid-img"><img src="img1.png" alt="Memory 1" style="width:100%;height:100%;object-fit:cover;"></div>
        <div class="polaroid-caption">adorable 🌼</div>
      </div>
      <div class="polaroid reveal">
        <div class="polaroid-pin"></div>
        <div class="polaroid-img"><img src="img2.png" alt="Memory 2" style="width:100%;height:100%;object-fit:cover;"></div>
        <div class="polaroid-caption">The tiniest Ania 🥰</div>
      </div>
      <div class="polaroid reveal">
        <div class="polaroid-pin"></div>
        <div class="polaroid-img"><img src="img3.png" alt="Memory 3" style="width:100%;height:100%;object-fit:cover;"></div>
        <div class="polaroid-caption">Always elegant ✨</div>
      </div>
      <div class="polaroid reveal">
        <div class="polaroid-pin"></div>
        <div class="polaroid-img"><img src="img4.png" alt="Memory 4" style="width:100%;height:100%;object-fit:cover;"></div>
        <div class="polaroid-caption">Little princess 🌷</div>
      </div>
      <div class="polaroid reveal">
        <div class="polaroid-pin"></div>
        <div class="polaroid-img"><img src="img5.png" alt="Memory 5" style="width:100%;height:100%;object-fit:cover;"></div>
        <div class="polaroid-caption">Born to shine 💫</div>
      </div>
    </div>
  </section>

  <!-- ===== LETTER ===== -->
  <section id="letter-section">
    <div class="section-title reveal">A Letter <em>from the Heart</em></div>
    <div class="section-divider reveal"><span>💌</span></div>
    <div class="envelope-wrapper reveal" onclick="openEnvelope()" id="envelope-wrapper">
      <div class="envelope" id="envelope">
        <div class="envelope-flap"></div>
        <div class="envelope-seal">🌷</div>
      </div>
      <p class="envelope-hint">Click to open your letter 💕</p>
    </div>
    <div id="letter-paper">
      <div class="letter-date">August 4th, 2026</div>
      <div id="letter-text"></div>
      <div class="letter-signature">— Your Brother, with all his love 🌷</div>
    </div>
  </section>

  <!-- ===== CAKE ===== -->
  <section id="cake-section">
    <div class="section-title reveal">Make a <em>Wish</em></div>
    <div class="section-divider reveal"><span>🎂</span></div>
    <div class="reveal" style="width:100%;display:flex;flex-direction:column;align-items:center;gap:1.5rem;text-align:center;">
      <div class="cake-svg-wrap">
        <svg width="300" height="280" viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg">
          <!-- Plate -->
          <ellipse cx="150" cy="258" rx="130" ry="14" fill="rgba(240,82,127,0.1)" />
          <!-- Cake base -->
          <rect x="40" y="160" width="220" height="90" rx="8" fill="#f9c6d8" />
          <rect x="40" y="160" width="220" height="20" rx="4" fill="#ffb3d1" />
          <!-- Decorative stripes -->
          <rect x="40" y="180" width="220" height="4" fill="rgba(255,255,255,0.5)" />
          <!-- Middle layer -->
          <rect x="65" y="105" width="170" height="65" rx="6" fill="#ffd6e7" />
          <rect x="65" y="105" width="170" height="18" rx="4" fill="#ffb3d1" />
          <!-- Top layer -->
          <rect x="90" y="58" width="120" height="55" rx="6" fill="#fff0f5" />
          <rect x="90" y="58" width="120" height="16" rx="4" fill="#ffd6e7" />
          <!-- Frosting drips -->
          <path d="M90,74 Q100,85 110,74 Q120,85 130,74 Q140,85 150,74 Q160,85 170,74 Q180,85 190,74 Q200,85 210,74" stroke="white" stroke-width="5" fill="none" stroke-linecap="round"/>
          <path d="M65,123 Q80,136 95,123 Q110,136 125,123 Q140,136 155,123 Q170,136 185,123 Q200,136 215,123 Q228,136 235,123" stroke="white" stroke-width="5" fill="none" stroke-linecap="round"/>
          <!-- Flowers on cake -->
          <text x="100" y="145" font-size="18" text-anchor="middle">🌷</text>
          <text x="150" y="145" font-size="18" text-anchor="middle">🌸</text>
          <text x="200" y="145" font-size="18" text-anchor="middle">🌷</text>
          <!-- Stars decoration -->
          <text x="110" y="100" font-size="12" text-anchor="middle">✨</text>
          <text x="190" y="100" font-size="12" text-anchor="middle">✨</text>
          <!-- Candles — click targets are transparent rects for reliable touch/click -->
          <!-- Candle 1 -->
          <g id="candle1">
            <rect x="108" y="30" width="10" height="32" rx="3" fill="#b8dfff"/>
            <rect x="108" y="44" width="10" height="18" rx="2" fill="#d6eeff"/>
            <g id="flame1group">
              <ellipse cx="113" cy="28" rx="7" ry="10" fill="#ff9ec8" opacity="0.9"/>
              <ellipse cx="113" cy="30" rx="3.5" ry="5" fill="#ffe566"/>
            </g>
            <rect x="103" y="14" width="20" height="34" fill="transparent" style="cursor:pointer;" onclick="blowCandle(1)"/>
          </g>
          <!-- Candle 2 -->
          <g id="candle2">
            <rect x="133" y="22" width="10" height="40" rx="3" fill="#f9c6d8"/>
            <rect x="133" y="36" width="10" height="26" rx="2" fill="#ffb3d1"/>
            <g id="flame2group">
              <ellipse cx="138" cy="20" rx="7" ry="10" fill="#ffb347" opacity="0.9"/>
              <ellipse cx="138" cy="22" rx="3.5" ry="5" fill="#ffe566"/>
            </g>
            <rect x="128" y="6" width="20" height="34" fill="transparent" style="cursor:pointer;" onclick="blowCandle(2)"/>
          </g>
          <!-- Candle 3 -->
          <g id="candle3">
            <rect x="158" y="18" width="10" height="44" rx="3" fill="#e8d5f5"/>
            <rect x="158" y="32" width="10" height="30" rx="2" fill="#d4bfef"/>
            <g id="flame3group">
              <ellipse cx="163" cy="16" rx="7" ry="10" fill="#ff9ec8" opacity="0.9"/>
              <ellipse cx="163" cy="18" rx="3.5" ry="5" fill="#fff"/>
            </g>
            <rect x="153" y="2" width="20" height="34" fill="transparent" style="cursor:pointer;" onclick="blowCandle(3)"/>
          </g>
          <!-- Candle 4 -->
          <g id="candle4">
            <rect x="183" y="26" width="10" height="36" rx="3" fill="#b8dfff"/>
            <rect x="183" y="40" width="10" height="22" rx="2" fill="#d6eeff"/>
            <g id="flame4group">
              <ellipse cx="188" cy="24" rx="7" ry="10" fill="#ff6b6b" opacity="0.9"/>
              <ellipse cx="188" cy="26" rx="3.5" ry="5" fill="#ffe566"/>
            </g>
            <rect x="178" y="10" width="20" height="34" fill="transparent" style="cursor:pointer;" onclick="blowCandle(4)"/>
          </g>
        </svg>
      </div>
      <p class="cake-instruction" id="cake-instruction">Click each candle to blow it out 🕯️</p>
      <button class="btn-ghost" id="mic-btn" onclick="startMicListening()" style="display:none;margin:0 auto;">🎤 Blow into the microphone!</button>
      <div class="birthday-reveal" id="birthday-reveal" style="display:none;flex-direction:column;align-items:center;gap:1rem;animation:fadeUp 1s forwards;">
        <div style="font-size:3rem;">🎉🌷✨🎊</div>
        <h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,5vw,3rem);font-style:italic;color:var(--pink-500);text-shadow:0 0 40px rgba(240,82,127,0.3);">All candles out! ✨</h2>
        <p style="font-family:'Cormorant Garamond',serif;font-style:italic;color:var(--text-mid);font-size:1.1rem;">
          Scroll down to write your birthday wish 🌷
        </p>
      </div>
    </div>
  </section>

  <!-- ===== GIFT ===== -->
  <section id="gift-section">
    <div class="section-title reveal">A Little <em>Something</em></div>
    <div class="section-divider reveal"><span>🎁</span></div>
    <div class="reveal">
      <div class="gift-box" id="gift-box" onclick="openGift()">
        <svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
          <!-- Box -->
          <rect x="15" y="65" width="120" height="75" rx="6" fill="#f9c6d8"/>
          <rect x="15" y="65" width="120" height="75" rx="6" stroke="#ffb3d1" stroke-width="2" fill="none"/>
          <!-- Lid -->
          <rect x="10" y="50" width="130" height="22" rx="5" fill="#ff8fb8"/>
          <!-- Ribbon vertical -->
          <rect x="68" y="50" width="14" height="90" rx="3" fill="#fff0f5" opacity="0.8"/>
          <!-- Ribbon horizontal on lid -->
          <rect x="10" y="56" width="130" height="10" rx="3" fill="#fff0f5" opacity="0.8"/>
          <!-- Bow -->
          <ellipse cx="75" cy="50" rx="28" ry="14" fill="#ff6b9d" transform="rotate(-20,75,50)"/>
          <ellipse cx="75" cy="50" rx="28" ry="14" fill="#ff6b9d" transform="rotate(20,75,50)"/>
          <circle cx="75" cy="50" r="10" fill="#ff8fb8"/>
          <circle cx="75" cy="50" r="6" fill="#fff0f5"/>
          <!-- Stars on box -->
          <text x="35" y="110" font-size="16" opacity="0.4">✨</text>
          <text x="95" y="120" font-size="14" opacity="0.4">⭐</text>
        </svg>
      </div>
      <p class="cake-instruction" style="margin-top:1rem;">Click to open your gift 🎁</p>
      <div class="gift-message" id="gift-message">
        <p>
          <!-- GIFT MESSAGE — EDIT THIS -->
          🌷 I'm sorry, I still haven't gotten you a birthday gift.

Today, all I can give you is a warm hug, all my love, and my sincerest birthday wishes. I know it's not much, but I promise I'll make it up to you with something special soon. You deserve the whole world, Ania.
          Happy Birthday 💕
        </p>
      </div>
    </div>
  </section>
  
  <!-- ===== WISH SECTION ===== -->
  <section id="wish-section">

    <!-- Section header -->
    <div class="ws-header reveal">
      <div class="ws-eyebrow">✦ a moment just for you ✦</div>
      <h2 class="ws-title">Write Your <em>Birthday Wish</em></h2>
      <p class="ws-tagline">Whisper it softly — the stars are listening tonight.</p>
    </div>

    <!-- Two-column layout -->
    <div class="ws-layout reveal">

      <!-- RIGHT: form panel -->
      <div class="ws-right">
        <div class="ws-form-card">

          <!-- Step tag -->
          <div class="ws-step">
            <div class="ws-step-num">✦</div>
            <span class="ws-step-label">Your moment to wish upon a star</span>
            <div class="ws-step-line"></div>
          </div>

          <!-- === WRITING FORM === -->
          <div id="wish-form-area">
            <h3 class="ws-form-heading">Make a <em>Wish</em>, Ania 🌟</h3>
            <p class="ws-form-sub">What does your heart hope for today?</p>

            <!-- Textarea -->
            <div class="ws-textarea-shell">
              <textarea class="wish-textarea" id="wish-input"
                placeholder="Write your birthday wish here… a dream, a hope, a secret longing 🌷"
                maxlength="200" rows="4" oninput="updateCharCount(); wsUpdateProgress()"></textarea>
              <div class="ws-meta-row">
                <div class="ws-progress-bar">
                  <div class="ws-progress-fill" id="ws-progress-fill"></div>
                </div>
                <span class="wish-char-count" id="wish-char-count">0 / 200</span>
              </div>
            </div>

            <!-- Buttons -->
            <div class="ws-btn-row">
              <button class="wish-send-btn" onclick="sendWish()" id="wish-send-btn">
                <span class="wish-send-icon">⭐</span>
                Send My Wish to the Stars
                <span class="wish-send-icon">✨</span>
              </button>

            </div>
          </div>

          <!-- === SUCCESS MESSAGE (replaces form) === -->
          <div class="wish-success" id="wish-success-area">
            <!-- Constellation animation -->
            <div class="ws-constellation">
              <span class="ws-star-center">💖</span>
              <span class="ws-orbit-star">✨</span>
              <span class="ws-orbit-star">🌟</span>
              <span class="ws-orbit-star">🌸</span>
            </div>
            <div class="wish-success-emojis"></div>
            <h2 class="wish-success-title">Happy Birthday, <em>Ania!</em></h2>
            <p class="wish-success-msg">Your wish has been whispered to every star in the sky.<br>May it find its way back to you a thousand times over. 🌷</p>
            <div class="wish-success-bubble" id="wish-display" style="display:none;"></div>
            <div class="wish-success-stars">
              <span>🌟</span><span>🌷</span><span>🦋</span><span>🌸</span><span>⭐</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>


  <!-- ===== FINALE ===== -->
  <section id="final-section">
    <div class="night-sky" id="night-sky"></div>
    <div class="lanterns-container" id="lanterns-container"></div>
    <div class="final-content">
      <div style="font-size:3rem;animation:float 4s ease-in-out infinite;">🌷</div>
      <div class="final-title" id="final-title">
        <!-- FINAL MESSAGE — EDIT THIS -->
        No matter where life takes us,<br>
        you'll always be my loving sister.<br><br>
        <em>Happy Birthday, Ania.</em>
      </div>
      <div class="final-signature" id="final-sig">
        Made with ❤️ by your brother <br><em> Akif </em> </br>
      </div>
      <div style="font-size:2rem;margin-top:1rem;animation:float 3s 1s ease-in-out infinite;color:rgba(255,255,255,0.9);">
        🌟 ✨ 🌷 ✨ 🌟
      </div>
    </div>
  </section>

</div><!-- /main-content -->

<!-- Hidden Tulips (Easter Egg) -->
<div class="hidden-tulip" id="htulip1" style="top:35%;left:3%;" onclick="collectTulip(this)">🌷</div>
<div class="hidden-tulip" id="htulip2" style="top:55%;right:4%;" onclick="collectTulip(this)">🌷</div>
<div class="hidden-tulip" id="htulip3" style="top:75%;left:5%;" onclick="collectTulip(this)">🌷</div>
<div class="hidden-tulip" id="htulip4" style="top:90%;right:6%;" onclick="collectTulip(this)">🌷</div>
<div class="hidden-tulip" id="htulip5" style="top:15%;left:2%;" onclick="collectTulip(this)">🌷</div>

<!-- Audio -->
<audio id="bg-music" loop>
  <source src="audio.mp3" type="audio/mpeg">
</audio>

<script src="script.js"></script>
</body>
</html>