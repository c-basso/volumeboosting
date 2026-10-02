# Keyword research and page map — Czech (cs) — volumeboosting.com/cs/

Goal: same as the English map (`keywords.md`): rank for Czech queries from people who have a
quiet file on their iPhone *right now*, and send them to the App Store.

Method (2026-10-01): Czech SERP checks for each candidate query (Google, cs results), the
CZ App Store storefront (`country=cz`), Czech Apple terminology (Apple's Czech app names), and
the existing English map. No keyword-volume tool was used; tiers are directional and scaled to
the Czech market (roughly 1/40–1/60 of US English demand). Validate in Search Console
(filter: page contains `/cs/`) after 4–6 weeks.

Tiers: **Medium** ≈ 300+/mo, **Low** ≈ 50–300, **Niche** < 50 but very specific intent.

## 0. What the CZ storefront shows (2026-10-01)

- The App Store listing has **no Czech metadata**: title, subtitle and description are the
  English ones in the CZ storefront. The app UI itself is localized to Czech.
- CZ storefront rating: 0 ratings (the 4.5★ / 121 figure on the site is the US storefront and is
  labelled as App Store rating, which is accurate).
- Screenshots and icon are the same as the US listing (already in `img/`).
- **Biggest opportunity outside the website:** add a Czech App Store localization (title,
  subtitle, keywords field, description). Suggested: title `Zesílení zvuku: Hlasitost videa`,
  subtitle `Zesilovač zvuku a hudby ×10`, keywords field
  `zesílit,hlasitost,zvuk,video,hudba,mp3,diktafon,nahrávka,zesilovač,potichu,hlasitější,tiktok`.

## 1. SERP observations

- Czech results for "jak zesílit zvuk videa na iPhone", "zesílení zvuku aplikace iPhone",
  "záznam obrazovky iPhone tichý zvuk", "jak zesílit mp3" are dominated by **machine-translated
  vendor blogs** (Apeaksoft, Movavi, Speechify, CapCut, AnyMP4) and general Apple news
  articles (Letem světem Applem). None answers the iPhone + file-boost intent directly with
  native Czech copy. Competition is weak; a native, specific page can rank.
- Czech users often type **without diacritics** ("jak zesilit zvuk videa na iphonu"). Google
  maps these to the diacritic forms, so copy uses correct Czech; slugs are diacritic-free.
- Both "na iPhone" and "na iPhonu" (locative) are searched; copy uses "na iPhonu" in H1s and
  "iPhone" in titles where it fits naturally.
- Apple's Czech app names used in copy: Fotky (Photos), Soubory (Files), Diktafon (Voice
  Memos), Zprávy (Messages), Ovládací centrum, Záznam obrazovky, Nastavení › Zvuky a haptika ›
  Bezpečnost sluchátek › Ztlumit hlasité zvuky, Nastavení › Hudba › Kontrola hlasitosti.

## 2. Primary keywords (cs homepage)

| Keyword | Tier | Intent | Placement |
|---|---|---|---|
| zesílení zvuku iPhone / zesilovač zvuku iPhone | Medium | Commercial (app) | `<title>`, H1 area, download section |
| zvýšit hlasitost videa (iPhone) | Medium | Transactional how-to | Meta description, hero, guide 1 |
| jak zesílit zvuk videa | Medium | How-to | FAQ 1, guide 1 |
| zesílit nahrávku / hlasitost nahrávky | Low | How-to | FAQ, guide 3 |
| zesilovač hlasitosti aplikace | Low | Commercial | Meta keywords, download section |

Homepage `<title>`: `Zesílení zvuku na iPhonu – video a audio až 10× hlasitěji`
Homepage meta description: `Zesil tiché video, MP3 nebo nahrávku z Diktafonu na iPhonu až 10×. Increase Volume zesílí přímo soubor, zachová srozumitelnost a uloží kopii. Zdarma.`

## 3. Long-tail keywords → one Czech guide each (`/cs/navody/<slug>/`)

| # | Slug | Target keyword | Secondary phrases | Tier | EN twin (`en_slug`) |
|---|---|---|---|---|---|
| 1 | `jak-zesilit-zvuk-videa-na-iphonu` | jak zesílit zvuk videa na iPhonu | zvýšit hlasitost videa iPhone, hlasitější video, video je potichu | Medium | how-to-make-a-video-louder-on-iphone |
| 2 | `jak-zesilit-nahravku-z-diktafonu-na-iphonu` | jak zesílit nahrávku z Diktafonu | nahrávka z diktafonu je potichu, zesílit hlasovou nahrávku iPhone | Low | how-to-increase-voice-memo-volume-on-iphone |
| 3 | `jak-zesilit-zaznam-obrazovky-na-iphonu` | záznam obrazovky iPhone potichu | tichý zvuk záznamu obrazovky, zesílit záznam obrazovky | Low | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | `jak-zesilit-hlasovou-zpravu-z-whatsappu` | hlasová zpráva WhatsApp potichu | zesílit hlasovku, hlasová zpráva Messenger / Telegram potichu | Low | how-to-make-a-whatsapp-voice-message-louder |
| 5 | `jak-zesilit-mp3-na-iphonu` | jak zesílit MP3 | zvýšit hlasitost MP3, MP3 je potichu, zesílit audio soubor | Low | how-to-make-mp3-louder-on-iphone |
| 6 | `jak-zesilit-video-primo-z-aplikace-fotky` | zesílit video v aplikaci Fotky | hlasitost videa ve Fotkách, Fotky nemají hlasitost | Niche | how-to-boost-video-volume-from-the-photos-app |
| 7 | `jak-zesilit-zvuk-videa-pro-tiktok-a-reels` | TikTok video potichu | zesílit zvuk na TikToku, Reels potichu | Low | how-to-make-a-tiktok-video-louder |
| 8 | `jak-zesilit-zvuk-videa-bez-ztraty-kvality` | zesílit zvuk bez ztráty kvality | zesílit zvuk bez zkreslení, praskání po zesílení | Low | how-to-make-a-video-louder-without-losing-quality |
| 9 | `proc-je-video-z-iphonu-potichu` | proč je video z iPhonu potichu | video z iPhonu nemá zvuk / tichý zvuk, mikrofon iPhonu potichu | Low | why-is-my-iphone-video-so-quiet |
| 10 | `jak-zesilit-hudbu-na-iphonu` | hudba na iPhonu je potichu | jak zesílit hudbu, Kontrola hlasitosti, Ztlumit hlasité zvuky | Medium | how-to-make-music-louder-on-iphone |
| 11 | `imovie-hlasitost-jak-zesilit-video-nad-500-procent` | iMovie hlasitost | iMovie nejde víc nahlas, zesílit zvuk v iMovie | Niche | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | `jak-zesilit-podcast-nebo-audioknihu-na-iphonu` | podcast / audiokniha potichu | zesílit audioknihu, nahrávka přednášky potichu | Niche | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Ordering (priority) differs from English: the Diktafon and WhatsApp/Messenger voice-message
intents are relatively stronger in Czech, the iMovie comparison weaker.

### Deliberately excluded (same reasons as English)

- "zesílení reproduktoru iPhone", "hlasitější reproduktor": system-volume intent the app cannot
  satisfy. Every page says once that the app makes the file louder, not the speaker.
- "zesilovač zvuku Android", "Chrome zesilovač hlasitosti": wrong platform.
- "Spotify / YouTube hlasitěji": streamed, DRM-protected media.

## 4. FAQ on the cs homepage (each with "Zjistit více")

| Question (FAQ H3) | Query it targets | Learn more → |
|---|---|---|
| Jak zesílit zvuk videa na iPhonu? | jak zesílit zvuk videa | Guide 1 |
| Jde zesílit nahrávka z Diktafonu až po nahrání? | zesílit nahrávku z diktafonu | Guide 2 |
| Proč je záznam obrazovky na iPhonu tak potichu? | záznam obrazovky potichu | Guide 3 |
| Jak zesílit hlasovou zprávu z WhatsAppu? | hlasová zpráva WhatsApp potichu | Guide 4 |
| Funguje aplikace i na MP3 a jiné audio soubory? | jak zesílit MP3 | Guide 5 |
| Jde video zesílit přímo z aplikace Fotky? | zesílit video Fotky | Guide 6 |
| Nebude zesílené video zkreslené? | zesílit zvuk bez ztráty kvality | Guide 8 |
| O kolik víc než iMovie umí aplikace zesílit? | iMovie hlasitost | Guide 11 |
| Zesílí aplikace reproduktor iPhonu? | (expectation management) | Guide 9 → #prehravani |
| Kolik aplikace stojí? | cena | App Store |
| Nahrává se můj zvuk někam? | soukromí | Guide 8 → #soukromi |

## 5. In-app labels used in Czech copy

Taken from the existing Czech site copy (`build/cs.json`), which mirrors the app's Czech UI:
„Násobek hlasitosti“ (slider), „Zesílit hlasitost na ×N“ (button), „Vylepšit kvalitu zvuku“
(toggle), Původní / Zpracované (comparison toggle), „Stáhnout zpracované“ (save button).
**To verify:** confirm these against the app's Czech `Localizable` strings; if any differ,
search-and-replace them in `build/guides/cs/*.json` and `build/cs.json`.
