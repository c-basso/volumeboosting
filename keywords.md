# Keyword research and page map — volumeboosting.com

Goal: rank for queries whose searcher has a quiet file on their iPhone *right now* and wants
it fixed. Those queries convert to App Store installs; generic "volume booster" queries
mostly do not (they are dominated by Chrome extensions, Android speaker apps, and hardware).

Method (2026-09-10): SERP analysis of each candidate query, App Store listing analysis of
the app and its direct competitors (Loudify / videovolumebooster.com, AudioFix, Music
Amplifier, Video Sound Booster), Apple Support and community threads for problem phrasing,
and the current listing's own keyword set (`app.md`). Volume figures are *directional tiers*,
not tool exports: this repo has no Ahrefs/Semrush access, and published volumes for these
terms differ 3–8× between tools anyway. Validate with Google Search Console after 4–6 weeks.

Tiers: **High** ≈ 10k+/mo global, **Medium** ≈ 1k–10k, **Low** ≈ 100–1k, **Niche** < 100
but very specific intent.

## 1. Primary keywords (homepage)

| Keyword | Tier | Intent | Why it converts | Placement |
|---|---|---|---|---|
| volume booster iPhone / iPhone volume booster app | High | Commercial | Searcher wants an app. Half of SERP is speaker-booster apps that disappoint; we answer the *file* use case explicitly. | `<title>`, H1, hero copy, download section |
| increase volume (of video / audio) | High | Mixed | Matches app name; brand + category term. | Brand name, H1, meta |
| make video louder iPhone | High | Transactional how-to | Top competitor cluster; strong install intent. | Hero subtitle, How it works, Guide #1 |
| make audio louder iPhone | Medium | Transactional how-to | Distinguishes us from video-only apps. | Hero, Guide #3/#10 |
| sound booster app / audio booster app | Medium | Commercial | Listing terms; used by non-native English searchers. | Meta keywords, download section |
| video volume booster | Medium | Commercial | Exact competitor positioning; we carry it in the download section and Guide #1. | Download section, FAQ |

Homepage `<title>` (57 chars): `Increase Volume – Volume Booster App for iPhone (10× Louder)`
Homepage meta description (156 chars): `Make any video, MP3 or voice memo up to 10× louder on iPhone. Increase Volume boosts the file itself, keeps it clear, and saves a copy you can share. Free download.`

## 2. Long-tail keywords → one guide page each

Each guide answers the searcher's question in the first paragraph (featured-snippet /
AI-Overview format), explains the native options and their limits honestly, then shows the
exact in-app steps with a screenshot. Every guide carries `HowTo` + `FAQPage` + `BreadcrumbList`
JSON-LD and links back to the App Store and to 3 related guides.

| # | Slug (`/guides/<slug>/`) | Target keyword | Secondary phrases | Tier | Screenshot |
|---|---|---|---|---|---|
| 1 | `how-to-make-a-video-louder-on-iphone` | how to make a video louder on iPhone | make video louder iPhone, increase video volume iPhone, boost video volume iPhone, video too quiet iPhone | High | 2 |
| 2 | `how-to-increase-voice-memo-volume-on-iphone` | how to increase volume of a voice memo on iPhone | voice memo too quiet, make voice memo louder, boost voice recording volume iPhone | Medium | 4 |
| 3 | `how-to-make-mp3-louder-on-iphone` | how to make an MP3 louder on iPhone | increase MP3 volume iPhone, boost MP3 volume, audio file too quiet | Medium | 3 |
| 4 | `how-to-make-a-screen-recording-louder-on-iphone` | how to make a screen recording louder on iPhone | screen recording too quiet iPhone, screen recording low volume, boost screen recording audio | Medium | 2 |
| 5 | `how-to-make-a-tiktok-video-louder` | how to make a TikTok video louder | TikTok video too quiet, make Reels louder, boost video volume before posting | Medium | 6 |
| 6 | `how-to-make-a-whatsapp-voice-message-louder` | how to make a WhatsApp voice message louder | WhatsApp voice note too quiet, boost voice message volume iPhone, Telegram voice message quiet | Medium | 6 |
| 7 | `how-to-make-a-podcast-or-audiobook-louder-on-iphone` | how to make a podcast louder on iPhone | audiobook too quiet, boost podcast volume, lecture recording too quiet | Low | 7 |
| 8 | `imovie-volume-limit-how-to-boost-video-beyond-500-percent` | iMovie volume limit 500% | make video louder than iMovie, iMovie not loud enough, boost video more than iMovie | Low | 4 |
| 9 | `how-to-boost-video-volume-from-the-photos-app` | boost video volume from Photos app iPhone | increase volume of video in Photos, Photos app video too quiet, share sheet volume booster | Low | 6 |
| 10 | `how-to-make-music-louder-on-iphone` | how to make music louder on iPhone | music volume booster iPhone, songs too quiet iPhone, boost song volume | Medium | 3 |
| 11 | `how-to-make-a-video-louder-without-losing-quality` | make video louder without losing quality | boost audio without distortion, increase volume without clipping, does boosting volume reduce quality | Medium | 5 |
| 12 | `why-is-my-iphone-video-so-quiet` | why is my iPhone video so quiet | iPhone video audio low, recorded video too quiet, iPhone video sound very low after recording | Medium | 1 |

### Why these twelve

- #1, #4, #5, #11, #12 are the *video* cluster (largest demand; 5 distinct intents).
- #2, #3, #6, #7, #10 are the *audio-file* cluster, which most competitor apps (video-only
  boosters) cannot serve; this is our defensible niche and matches the listing subtitle
  "Audio & Music Booster".
- #8 and #9 are *comparison / workflow* pages that intercept people already trying the
  built-in route (iMovie, Photos) and hitting its ceiling.

### Deliberately excluded

- "volume booster" alone, "speaker booster", "make iPhone speaker louder", "hearing aid
  app": system-volume intent; the app cannot satisfy it and the reviews prove it produces
  1-star ratings. Every page includes one sentence that redirects this intent.
- "volume booster Android", "Chrome volume booster": wrong platform.
- "Spotify / YouTube louder": streaming, not local files; cannot import DRM media.

## 3. FAQ keywords (homepage FAQ, each with a "Learn more" link to a guide)

| Question (FAQ H3) | Query it targets | Learn more → |
|---|---|---|
| How do I make a video louder on iPhone? | make video louder iPhone | Guide 1 |
| Can I make a voice memo louder after recording it? | make voice memo louder | Guide 2 |
| Does it work on MP3 and other audio files, not just video? | make MP3 louder iPhone | Guide 3 |
| Why is my iPhone screen recording so quiet? | screen recording too quiet | Guide 4 |
| Will boosting the volume make my video sound distorted? | make video louder without losing quality | Guide 11 |
| How much louder than iMovie can it go? | iMovie volume limit | Guide 8 |
| Can I boost a video straight from the Photos app? | boost video volume Photos app | Guide 9 |
| Does Increase Volume make my iPhone speaker louder? | (expectation management) | Guide 12 |
| Is the app free? What does the subscription unlock? | increase volume app price | App Store |
| Is my audio uploaded anywhere? | private volume booster on device | Guide 11 |

## 4. On-page rules used across the site

- One H1 per page containing the target keyword; H2s phrased as the secondary questions.
- First 60 words answer the query directly (snippet bait), followed by a "Quick answer" box.
- Keyword appears in `<title>`, meta description, H1, first paragraph, one image alt, URL.
- Every guide links to: App Store (2×), homepage, 3 related guides, the guides hub.
- Every page states the file-vs-speaker distinction once (reduces mismatched installs and
  bad reviews).
- `dateModified` in JSON-LD and a visible "Updated" date on every page (GEO freshness).
- Facts that are quotable by AI engines: "up to 10× (1000%)", "iMovie caps at about 500%",
  "4.5★ from 118 ratings", "iOS 18.6+", "26.8 MB", "31 languages".

## 5. Measurement

- Search Console: track impressions/clicks per `/guides/*` URL and per query family.
- App Store Connect: create a campaign link (`?pt=…&ct=web-guide-<slug>`) per guide to see
  which guide drives installs. (Not added yet — needs the provider token from App Store Connect.)
- Re-check SERPs quarterly; refresh the "Updated" date only when content actually changes.
