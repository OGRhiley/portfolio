import './style.css'

type PageKey = 'home' | 'work' | 'journey' | 'contact'

const page = ((document.body.dataset.page as PageKey) || 'home')
const profilePhotoUrl = '/cdn/profile.jpg'

function navLink(path: string, label: string, activePage: PageKey, pageKey: PageKey) {
  const activeClass = activePage === pageKey ? ' class="active"' : ''
  return `<a href="${path}"${activeClass}>${label}</a>`
}

const pageContent: Record<PageKey, string> = {
  home: `
    <section class="hero reveal">
      <div class="hero-head">
        <div>
          <p class="hero-kicker">About Me</p>
          <h2>I'm a high school software engineer who likes shipping real things.</h2>
        </div>
        <div class="hero-photo-wrap" aria-label="Profile photo">
          <div class="hero-photo" style="background-image: url('${profilePhotoUrl}')" role="img" aria-label="Rhiley profile photo"></div>
        </div>
      </div>
      <p>
        My main tech stack is Java and Kotlin. I maintain FRC robot code that has to work on the field, and
        Minecraft plugins for minecraft servers, like ShoreSMP. I like building things that real people end up using, and
        figuring out what breaks once they do.
      </p>

      <div class="hero-metrics" aria-label="Quick stats">
        <article>
          <strong>Currently</strong>
          <span>Lead programmer for an FRC team and maintaining the Java/Kotlin plugin stack behind ShoreSMP's mainstream gamemodes.</span>
        </article>
        <article>
          <strong>Working With</strong>
          <span>Java, Kotlin, and WPILib day-to-day. Git, Docker, and whatever else the project needs.</span>
        </article>
        <article>
          <strong>What's Next</strong>
          <span>Finishing high school with a real track record of shipped software, and getting deeper into backend engineering along the way.</span>
        </article>
      </div>
    </section>
  `,
  work: `
    <section class="work-grid reveal" aria-label="Selected projects">
      <article class="work-card featured">
        <p>Built + Maintained</p>
        <h3>FRC Lead Programmer</h3>
        <p>
          I wrote my team's robot codebase from scratch and actively maintain it season to season. It's coded in Java on top of WPILib's command-based framework.
        </p>
        <ul class="work-points">
          <li>Tuned autonomous routines that hold up across different alliance partners and field variance</li>
          <li>Built reusable subsystem and command abstractions the rest of the programming team extends</li>
          <li>Implement logging and replay tooling so post-match issues get diagnosed instead of guessed at</li>
        </ul>
      </article>
      <article class="work-card is-linked">
        <a class="work-card-link" href="https://arch.mc" target="_blank" rel="noreferrer" aria-label="Visit ArchMC"></a>
        <span class="work-card-arrow" aria-hidden="true">↗</span>
        <p>Software Engineering</p>
        <h3>ArchMC Software Engineer (Rule Your Own Game, Inc)</h3>
        <p>
          Software engineer building custom Minecraft gamemodes for ArchMC, with services orchestrated
          on Kubernetes. I worked across the stack: writing and maintaining Java/Kotlin plugins for the gameplay
          logic, configuring deployments and scaling, and tightening the pipeline that gets changes
          from a PR into a live server.
        </p>
        <ul class="work-points">
          <li>Implemented gamemode features and core mechanics players actually interact with</li>
          <li>Hunted down performance and reliability bugs in production server code</li>
          <li>Learned the ins and outs of Software Engineering in a real company, and how to work effectively on a team</li>
          <li>Configured and maintained Kubernetes workloads for game services</li>
        </ul>
      </article>
      <article class="work-card is-linked">
        <a class="work-card-link" href="https://discord.gg/shoresmp" target="_blank" rel="noreferrer" aria-label="Join ShoreSMP on Discord"></a>
        <span class="work-card-arrow" aria-hidden="true">↗</span>
        <p>Plugin Development</p>
        <h3>ShoreSMP</h3>
        <p>
          A Minecraft SMP where I write and maintain the Java and Kotlin plugins that power the
          server's gameplay. I handle the full loop: shipping new features, fixing bugs as they
          surface, tuning configuration, and keeping the server stable for the community.
        </p>
        <ul class="work-points">
          <li>Built custom Java and Kotlin plugins for SMP-specific mechanics</li>
          <li>Maintain configuration and server setup across updates</li>
          <li>Triage and fix bugs reported by players and staff</li>
          <li>Ship new features end-to-end, from design to deploy</li>
        </ul>
      </article>
    </section>
  `,
  journey: `
    <section class="journey reveal">
      <h3>Journey</h3>
      <div class="timeline-item">
        <span>Feb, 2025 - Present</span>
        <p>
          I'm the lead programmer for my FRC team, where I focus on improving our robot code's
          reliability and maintainability. This role has taught me the importance of good software
          design and testing practices in a high-pressure environment, and has sparked my interest in
          building secure, dependable systems. I'm also working on personal projects to deepen my
          understanding of network monitoring and security hardening, which I hope to apply in future
          engineering roles.
        </p>
      </div>
      <div class="timeline-item">
        <span>Jul, 2025 - May, 2026</span>
        <p>
          I was a Software Engineer at ArchMC, a subsidiary of Rule Your Own Game Inc., where I contributed
          to improving the overall player experience, fixing bugs, implementing features, and improving
          server performance. This role gave me valuable experience in software engineering, devops, troubleshooting technical issues. Through this work, I've developed
          strong communication skills and a deeper understanding of Software Engineering in the real world, aswell as bettering my practices, and learning how to work effectively in a team environment.
        </p>
      </div>
      <div class="timeline-item">
        <span>May, 2026 - Present</span>
        <p>
          I write and maintain the Java and Kotlin plugins that power ShoreSMP, a Minecraft survival
          server. The work covers the full loop: shipping new features, fixing bugs as they come up,
          tuning configuration, and keeping the server stable for the community.
        </p>
      </div>
      <div class="timeline-item">
        <span>Next Step</span>
        <p>
          Continuing to sharpen my Java and Kotlin, getting deeper into backend work, and shipping
          more real projects along the way.
        </p>
      </div>
    </section>
  `,
  contact: `
    <section class="contact-shell reveal">
      <article class="contact-band contact-hero">
        <p class="hero-kicker">Contact</p>
        <h3>Open to projects, teams, and opportunities.</h3>
        <p>
          If you're working in robotics, cybersecurity, or networking, feel free to reach out. I am
          especially interested in practical projects, internships, and team-based work where I can
          keep learning and contribute.
        </p>
        <div class="contact-actions">
          <a href="https://www.linkedin.com/in/rhiley/" target="_blank" rel="noreferrer">Send a LinkedIn message</a>
          <a href="https://github.com/ogrhiley" target="_blank" rel="noreferrer" class="ghost">Review my GitHub</a>
        </div>
      </article>

      <div class="contact-subgrid">
        <article class="contact-band contact-card" aria-label="Topics">
          <h4>Good Topics to Reach Out About</h4>
          <ul>
            <li>FRC software and competition reliability</li>
            <li>Cybersecurity and homelab learning</li>
            <li>ArchMC staff and community operations</li>
          </ul>
        </article>

        <article class="contact-band contact-card" aria-label="Availability">
          <h4>Availability</h4>
          <p>Open to remote collaboration, project feedback, and student opportunities.</p>
          <p class="contact-note">Fastest response: LinkedIn direct message.</p>
        </article>
      </div>
    </section>
  `,
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="ambient" aria-hidden="true">
  <span class="blob blob-a"></span>
  <span class="blob blob-b"></span>
  <span class="grid-noise"></span>
  <canvas class="sparkles"></canvas>
</div>

<main class="site-shell">
  <aside class="left-rail">
    <p class="rail-kicker">Digital Portfolio<span class="view-counter" aria-label="Site views"> · — views</span></p>
    <h1>Rhiley</h1>
    <p class="rail-subtitle">High school software engineer building Java and Kotlin projects for robotics and minecraft servers.</p>
    <a class="discord-status" data-status="loading" href="https://discord.com/users/659881222897664017" target="_blank" rel="noreferrer" aria-label="Discord status">
      <span class="discord-dot"></span>
      <span class="discord-text">Connecting Discord…</span>
    </a>

    <div class="now-playing" hidden aria-label="Now playing">
      <div class="np-inner">
        <div class="np-art" aria-hidden="true">
          <img alt="" />
        </div>
        <div class="np-body">
          <p class="np-kicker">
            <span class="np-pulse" aria-hidden="true"></span>
            <span class="np-kicker-label">Now playing</span>
          </p>
          <p class="np-title"></p>
          <p class="np-artist"></p>
          <div class="np-progress">
            <div class="np-progress-bar"></div>
          </div>
          <div class="np-times">
            <span class="np-elapsed">0:00</span>
            <span class="np-total">0:00</span>
          </div>
        </div>
      </div>
    </div>

    <nav class="section-nav" aria-label="Section navigation">
      ${navLink('/index.html', 'Home', page, 'home')}
      ${navLink('/work.html', 'Projects', page, 'work')}
      ${navLink('/journey.html', 'Journey', page, 'journey')}
      <a href="https://discord.com/users/659881222897664017" target="_blank" rel="noreferrer">Contact: Discord</a>
    </nav>

    <div class="social-row">
      <a href="https://github.com/ogrhiley" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/rhiley/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://e-z.bio/data" target="_blank" rel="noreferrer">Bio</a>
    </div>
  </aside>

  <section class="content-flow">${pageContent[page]}</section>
</main>
`

;(async function trackViews() {
  const NAMESPACE = 'rhiley-portfolio'
  const KEY = 'views'
  const LOCAL_KEY = 'rhiley_portfolio_counted'
  const el = document.querySelector<HTMLSpanElement>('.view-counter')
  if (!el) return

  const isNew = !localStorage.getItem(LOCAL_KEY)
  const url = isNew
    ? `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`
    : `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/`

  try {
    const res = await fetch(url)
    const data = await res.json()
    const count: number | undefined = data.count ?? data.value ?? data.data?.count
    if (typeof count === 'number') {
      el.textContent = ` · ${count.toLocaleString()} views`
      if (isNew) localStorage.setItem(LOCAL_KEY, '1')
    } else {
      el.textContent = ''
    }
  } catch (err) {
    console.warn('[views] failed to load', err)
    el.textContent = ''
  }
})()

type LanyardStatus = 'online' | 'idle' | 'dnd' | 'offline'

const DISCORD_USER_ID = '659881222897664017'

const statusLabels: Record<LanyardStatus, string> = {
  online: 'Online',
  idle: 'Idle',
  dnd: 'Do not disturb',
  offline: 'Offline',
}

function describeActivity(data: { activities?: Array<{ type: number; name: string; state?: string; details?: string }> }) {
  const acts = data.activities ?? []
  const custom = acts.find((a) => a.type === 4)
  if (custom?.state) return custom.state
  const game = acts.find((a) => a.type === 0)
  if (game) return `Playing ${game.name}`
  const listening = acts.find((a) => a.type === 2)
  if (listening) return `Listening to ${listening.details ?? listening.name}`
  return null
}

function renderDiscordStatus(data: LanyardData) {
  const el = document.querySelector<HTMLAnchorElement>('.discord-status')
  if (!el) return
  const text = el.querySelector<HTMLSpanElement>('.discord-text')
  if (!text) return
  el.dataset.status = data.discord_status
  const activity = describeActivity(data)
  text.textContent = activity ? `${statusLabels[data.discord_status]} · ${activity}` : statusLabels[data.discord_status]

  updateActivityCard(data)
}

type LanyardActivity = {
  type: number
  name: string
  details?: string
  state?: string
  timestamps?: { start?: number; end?: number }
  assets?: { large_image?: string; large_text?: string; small_image?: string; small_text?: string }
  application_id?: string
}

type LanyardData = {
  discord_status: LanyardStatus
  activities?: LanyardActivity[]
  listening_to_spotify?: boolean
  spotify?: SpotifyData | null
}

type SpotifyData = {
  track_id: string
  song: string
  artist: string
  album: string
  album_art_url: string
  timestamps: { start: number; end: number }
}

type ActivityItem =
  | { kind: 'spotify'; data: SpotifyData }
  | { kind: 'generic'; data: LanyardActivity }

let activityItems: ActivityItem[] = []
let activityIndex = 0
let progressTimer: number | undefined
let rotateTimer: number | undefined

function formatTime(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000))
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function formatElapsed(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000))
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  return `${m}:${s.toString().padStart(2, '0')}`
}

function assetUrl(activity: LanyardActivity, key?: string) {
  if (!key) return null
  if (key.startsWith('mp:external/')) {
    return `https://media.discordapp.net/${key.slice(3)}`
  }
  if (key.startsWith('mp:')) {
    return `https://media.discordapp.net/${key.slice(3)}`
  }
  if (activity.application_id) {
    return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${key}.png`
  }
  return null
}

function activityFlavor(activity: LanyardActivity): { label: string; theme: string } {
  const name = activity.name.toLowerCase()
  if (/intellij|idea|webstorm|pycharm|jetbrains|rider|clion|goland|phpstorm|rubymine|android studio/.test(name)) {
    return { label: 'Coding', theme: 'jetbrains' }
  }
  if (/visual studio code|vscode|vs code/.test(name)) {
    return { label: 'Coding', theme: 'vscode' }
  }
  if (/visual studio/.test(name)) return { label: 'Coding', theme: 'vscode' }
  if (/neovim|vim|emacs|zed|sublime|cursor/.test(name)) return { label: 'Coding', theme: 'generic' }
  if (activity.type === 1) return { label: 'Streaming', theme: 'generic' }
  if (activity.type === 3) return { label: 'Watching', theme: 'generic' }
  if (activity.type === 5) return { label: 'Competing', theme: 'generic' }
  if (activity.type === 0) return { label: `Playing ${activity.name}`, theme: 'game' }
  return { label: activity.name, theme: 'generic' }
}

function updateActivityCard(data: LanyardData) {
  const items: ActivityItem[] = []
  if (data.listening_to_spotify && data.spotify) {
    items.push({ kind: 'spotify', data: data.spotify })
  }
  for (const a of data.activities ?? []) {
    if (a.type === 2) continue
    if (a.type === 4) continue
    items.push({ kind: 'generic', data: a })
  }

  activityItems = items
  window.clearInterval(rotateTimer)

  const card = document.querySelector<HTMLDivElement>('.now-playing')
  if (!card) return

  if (items.length === 0) {
    card.hidden = true
    window.clearInterval(progressTimer)
    return
  }

  if (activityIndex >= items.length) activityIndex = 0
  renderActivityItem(items[activityIndex])

  if (items.length > 1) {
    rotateTimer = window.setInterval(() => {
      activityIndex = (activityIndex + 1) % activityItems.length
      swapActivityItem(activityItems[activityIndex])
    }, 6500)
  }
}

const SLIDE_MS = 520

function swapActivityItem(item: ActivityItem) {
  const card = document.querySelector<HTMLDivElement>('.now-playing')
  const inner = card?.querySelector<HTMLDivElement>('.np-inner')
  if (!card || !inner) return

  inner.classList.add('np-leaving')
  window.setTimeout(() => {
    renderActivityItem(item)
    inner.classList.remove('np-leaving')
    inner.classList.add('np-entering')
    requestAnimationFrame(() => {
      requestAnimationFrame(() => inner.classList.remove('np-entering'))
    })
  }, SLIDE_MS)
}

function renderActivityItem(item: ActivityItem) {
  const card = document.querySelector<HTMLDivElement>('.now-playing')
  if (!card) return
  card.hidden = false
  card.dataset.activity = item.kind

  const art = card.querySelector<HTMLImageElement>('.np-art img')
  const title = card.querySelector<HTMLParagraphElement>('.np-title')
  const artist = card.querySelector<HTMLParagraphElement>('.np-artist')
  const kicker = card.querySelector<HTMLParagraphElement>('.np-kicker')
  const progress = card.querySelector<HTMLDivElement>('.np-progress')
  const total = card.querySelector<HTMLSpanElement>('.np-total')

  if (item.kind === 'spotify') {
    const s = item.data
    delete card.dataset.theme
    if (art) {
      art.src = s.album_art_url
      art.style.opacity = '1'
    }
    if (title) title.textContent = s.song
    if (artist) artist.textContent = s.artist
    if (kicker) {
      const label = kicker.querySelector('.np-kicker-label')
      if (label) label.textContent = 'Now playing'
    }
    if (progress) progress.style.display = ''
    if (total) total.textContent = formatTime(s.timestamps.end - s.timestamps.start)

    window.clearInterval(progressTimer)
    tickSpotifyProgress(s)
    progressTimer = window.setInterval(() => tickSpotifyProgress(s), 1000)
  } else {
    const a = item.data
    const flavor = activityFlavor(a)
    card.dataset.theme = flavor.theme
    const largeImage = assetUrl(a, a.assets?.large_image)
    if (art) {
      if (largeImage) {
        art.src = largeImage
        art.style.opacity = '1'
      } else {
        art.removeAttribute('src')
        art.style.opacity = '0'
      }
    }
    if (title) title.textContent = a.details || a.name
    if (artist) artist.textContent = a.state || (a.details ? a.name : a.assets?.large_text || '')
    if (kicker) {
      const label = kicker.querySelector('.np-kicker-label')
      if (label) label.textContent = flavor.label
    }
    if (progress) progress.style.display = 'none'

    window.clearInterval(progressTimer)
    tickIdeProgress(a)
    progressTimer = window.setInterval(() => tickIdeProgress(a), 1000)
  }
}

function tickSpotifyProgress(spotify: SpotifyData) {
  const card = document.querySelector<HTMLDivElement>('.now-playing')
  if (!card) return
  const { start, end } = spotify.timestamps
  const duration = end - start
  const elapsed = Math.max(0, Math.min(duration, Date.now() - start))
  const pct = duration > 0 ? (elapsed / duration) * 100 : 0
  const bar = card.querySelector<HTMLDivElement>('.np-progress-bar')
  if (bar) bar.style.width = `${pct}%`
  const elapsedEl = card.querySelector<HTMLSpanElement>('.np-elapsed')
  if (elapsedEl) elapsedEl.textContent = formatTime(elapsed)
}

function tickIdeProgress(activity: LanyardActivity) {
  const card = document.querySelector<HTMLDivElement>('.now-playing')
  if (!card) return
  const start = activity.timestamps?.start
  const elapsedEl = card.querySelector<HTMLSpanElement>('.np-elapsed')
  const totalEl = card.querySelector<HTMLSpanElement>('.np-total')
  if (!start) {
    if (elapsedEl) elapsedEl.textContent = ''
    if (totalEl) totalEl.textContent = ''
    return
  }
  if (elapsedEl) elapsedEl.textContent = `${formatElapsed(Date.now() - start)} elapsed`
  if (totalEl) totalEl.textContent = activity.name
}

function markDiscordOffline(message = 'Discord offline') {
  const el = document.querySelector<HTMLAnchorElement>('.discord-status')
  if (!el) return
  el.dataset.status = 'offline'
  const text = el.querySelector<HTMLSpanElement>('.discord-text')
  if (text) text.textContent = message
}

;(async function initDiscord() {
  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const payload = await res.json()
    if (payload?.data) renderDiscordStatus(payload.data)
  } catch {
    markDiscordOffline('Discord unavailable')
    return
  }

  let socket: WebSocket | null = null
  let heartbeatTimer: number | undefined
  let reconnectTimer: number | undefined

  function connect() {
    socket = new WebSocket('wss://api.lanyard.rest/socket')
    socket.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data)
      if (msg.op === 1) {
        socket?.send(JSON.stringify({ op: 2, d: { subscribe_to_id: DISCORD_USER_ID } }))
        const interval = msg.d?.heartbeat_interval ?? 30000
        heartbeatTimer = window.setInterval(() => {
          socket?.readyState === WebSocket.OPEN && socket.send(JSON.stringify({ op: 3 }))
        }, interval)
      } else if (msg.op === 0 && (msg.t === 'INIT_STATE' || msg.t === 'PRESENCE_UPDATE')) {
        const data = msg.t === 'INIT_STATE' ? msg.d[DISCORD_USER_ID] : msg.d
        if (data) renderDiscordStatus(data)
      }
    })
    socket.addEventListener('close', () => {
      window.clearInterval(heartbeatTimer)
      reconnectTimer = window.setTimeout(connect, 5000)
    })
    socket.addEventListener('error', () => {
      socket?.close()
    })
  }

  connect()
  window.addEventListener('beforeunload', () => {
    window.clearInterval(heartbeatTimer)
    window.clearTimeout(reconnectTimer)
    socket?.close()
  })
})()

const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches
const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const sparkleCanvas = document.querySelector<HTMLCanvasElement>('.sparkles')
if (sparkleCanvas && !isReducedMotion) {
  const ctx = sparkleCanvas.getContext('2d')!
  const dpr = Math.min(window.devicePixelRatio || 1, isTouchDevice ? 1 : 2)

  const SPRITE_SIZE = 64
  const sparkleSprite = document.createElement('canvas')
  sparkleSprite.width = SPRITE_SIZE
  sparkleSprite.height = SPRITE_SIZE
  const sctx = sparkleSprite.getContext('2d')!
  const cx = SPRITE_SIZE / 2
  const grad = sctx.createRadialGradient(cx, cx, 0, cx, cx, cx)
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)')
  grad.addColorStop(0.18, 'rgba(220, 240, 255, 0.85)')
  grad.addColorStop(0.45, 'rgba(160, 220, 255, 0.25)')
  grad.addColorStop(1, 'rgba(125, 211, 252, 0)')
  sctx.fillStyle = grad
  sctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE)

  type Sparkle = {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    baseAlpha: number
    phase: number
    speed: number
  }

  let sparkles: Sparkle[] = []
  let width = 0
  let height = 0

  function resize() {
    width = window.innerWidth
    height = window.innerHeight
    sparkleCanvas!.width = width * dpr
    sparkleCanvas!.height = height * dpr
    sparkleCanvas!.style.width = `${width}px`
    sparkleCanvas!.style.height = `${height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const divisor = isTouchDevice ? 28000 : 9000
    const cap = isTouchDevice ? 60 : 220
    const count = Math.round((width * height) / divisor)
    sparkles = Array.from({ length: Math.min(count, cap) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: Math.random() * 0.55 + 0.25,
      size: Math.random() * 2.2 + 1.1,
      baseAlpha: Math.random() * 0.4 + 0.55,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.025 + 0.008,
    }))
  }

  resize()
  window.addEventListener('resize', resize)

  let running = true
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden
    if (running) requestAnimationFrame(draw)
  })

  function draw() {
    if (!running) return
    ctx.clearRect(0, 0, width, height)
    for (const s of sparkles) {
      s.x += s.vx
      s.y += s.vy
      s.phase += s.speed

      if (s.y > height + 4) {
        s.y = -4
        s.x = Math.random() * width
      }
      if (s.x < -4) s.x = width + 4
      if (s.x > width + 4) s.x = -4

      const twinkle = (Math.sin(s.phase) + 1) / 2
      const alpha = Math.min(1, s.baseAlpha * (0.55 + twinkle * 0.7))
      const drawSize = s.size * (isTouchDevice ? 5 : 8)
      ctx.globalAlpha = alpha
      ctx.drawImage(sparkleSprite, s.x - drawSize / 2, s.y - drawSize / 2, drawSize, drawSize)
    }
    ctx.globalAlpha = 1
    requestAnimationFrame(draw)
  }

  requestAnimationFrame(draw)
}

if (!isTouchDevice) {
  let cursorFrame = 0
  window.addEventListener('pointermove', (event) => {
    if (cursorFrame) return
    cursorFrame = requestAnimationFrame(() => {
      document.body.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.body.style.setProperty('--cursor-y', `${event.clientY}px`)
      cursorFrame = 0
    })
  }, { passive: true })
} else {
  document.body.classList.add('is-touch')
}

const revealElements = document.querySelectorAll<HTMLElement>('.reveal')
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in')
        revealObserver.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.2 },
)

for (const element of revealElements) {
  revealObserver.observe(element)
}
