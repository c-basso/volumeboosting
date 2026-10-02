# Keyword research and page map — Swedish (sv) — volumeboosting.com/sv/

Goal: same as `keywords.md` — rank for Swedish queries from people with a quiet file on their iPhone
right now. Copy uses «du» per `glossary.tsv` (sv-SE: B2C «du»).

Method (2026-10-02): the SE App Store listing (`https://apps.apple.com/se/app/id6741472421?l=sv`), the
phrases the listing targets (volymförstärkare, ljudförstärkare, volymbooster, göra … högre, förstärka),
Swedish query patterns («höja volymen på …», «göra … högre», «… för lågt», «varför är … så tyst»), Apple's
Swedish app names where verifiable (support.apple.com/sv-se), the Norwegian pages (`/no/guider/`) as a
sibling reference, and the English map. No keyword-volume tool; tiers are directional (Swedish ≈ 1/30–1/50
of US English demand; Sweden has a high iPhone share). Validate in Search Console (filter `/sv/`).

Tiers: **High** ≈ 300+/mo, **Medium** ≈ 50–300, **Low** ≈ 10–50, **Niche** < 10.

## 0. What the SE storefront shows (2026-10-02)

- Localized: «Volymförstärkare Ljud & Video» / «Gör musik, klipp, poddar högre»; **5,0★ from 1 rating**.
  The homepage still shows «4,5 ★ · 121 betyg» (global figure in hero/download/cta).
- **Screenshots are not localized** (same 6 English images). The site keeps the shared
  `/img/screenshots/1–7.webp`; no `img/screenshots/sv/`.
- IAPs (SE): «Volymbooster veckovis» (weekly, free trial); «Volymbooster ljudförstärkare» (annual,
  319,00 kr). Subscription only — but `download.price_note` says «… ett engångsköp för alltid»; fix if no
  lifetime purchase exists.
- «Leverantör» shows the developer name in Cyrillic (Владимир Ивахненко), as in PL/RO/SK.

## 1. Language notes

- Phrasing: «höja volymen», «göra … högre», «för lågt ljud», «tyst», «röstmeddelande» (WhatsApp),
  «skärminspelning», «podd/poddar» (more common than «podcast» in Swedish search).
- Apple Swedish names used: Bilder, Filer, **Röstmemon** (Voice Memos — verified on support.apple.com/sv-se;
  `glossary.tsv` says «Röstmemo / röstanteckningar», update it), Kontrollcenter, Skärminspelning, Dela,
  Spara i Filer, Spara video, Inställningar, iMovie.
- **Brand mismatch**: the store name is «Volymförstärkare Ljud & Video», but the rest of `build/sv.json`
  (hero, download, cta, footer, alts) still says «Increase Volume – Ljudboost» / «Höj volymen». Meta,
  guides and FAQ now use «Volymförstärkare Ljud & Video» (first mention) and «Volymförstärkare» (short).
  Pick one name and replace the rest.
- **Verify on a Swedish iPhone** (not confirmed from Apple docs): «Inställningar › Ljud och haptik ›
  Hörlurssäkerhet › Minska höga ljud», «Musik › EQ › Sen kväll», «Ljudkontroll» (Sound Check),
  «Hjälpmedel › Ljud och bild › Balans», «Förbättra inspelning», «Ljudmix», voice boost in Podcaster,
  iMovie «Starta nytt projekt».
- In-app labels used (from `build/sv.json`; verify against the app's strings): «Volymmultiplikation»,
  «Boosta volymen till ×10», «Förbättra ljudkvalitet», Original / Bearbetad, «Hämta bearbetad».

## 2. Primary keywords (sv homepage)

| Keyword | Tier | Placement |
|---|---|---|
| höja volymen på video / göra ljudet högre (iPhone) | Medium | `<title>`, meta, hero, guide 1 |
| volymförstärkare / ljudförstärkare | Medium | `<title>` (store name), meta, download section |
| app för att höja volymen | Low | Meta keywords, FAQ |

## 3. Long-tail keywords → guide pages (`/sv/guider/`)

| # | Keyword | Tier | Slug | EN twin |
|---|---|---|---|---|
| 1 | höja volymen på en video iPhone | Medium | gor-ljudet-pa-en-video-hogre-iphone | how-to-make-a-video-louder-on-iphone |
| 2 | WhatsApp röstmeddelande för lågt | Low | whatsapp-rostmeddelande-for-lagt | how-to-make-a-whatsapp-voice-message-louder |
| 3 | skärminspelning för lågt ljud iPhone | Low | skarminspelning-for-lagt-ljud-iphone | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | göra röstmemo högre iPhone | Low | rostmemo-hogre-iphone | how-to-increase-voice-memo-volume-on-iphone |
| 5 | musiken för låg iPhone | Medium | musiken-for-lag-iphone | how-to-make-music-louder-on-iphone |
| 6 | göra MP3 högre iPhone | Low | gor-mp3-hogre-iphone | how-to-make-mp3-louder-on-iphone |
| 7 | varför är videon så tyst iPhone | Low | varfor-ar-videon-sa-tyst | why-is-my-iphone-video-so-quiet |
| 8 | göra TikTok-video högre | Low | tiktok-video-hogre | how-to-make-a-tiktok-video-louder |
| 9 | höja volymen på video i Bilder | Low | hoj-volymen-pa-video-i-bilder | how-to-boost-video-volume-from-the-photos-app |
| 10 | höja volymen utan kvalitetsförlust | Niche | hogre-utan-kvalitetsforlust | how-to-make-a-video-louder-without-losing-quality |
| 11 | iMovie volym över 500 % | Niche | imovie-volym-over-500 | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | podd / ljudbok för låg iPhone | Low | podd-ljudbok-for-lag-iphone | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Guide 12 names Storytel, BookBeat and Nextory (Swedish audiobook services) as DRM sources.
Anchors used by the homepage FAQ: `varfor-ar-videon-sa-tyst#uppspelning`, `hogre-utan-kvalitetsforlust#integritet`.

## 4. Homepage FAQ → «Läs mer»

11 questions in the EN order (video, WhatsApp, skärminspelning, Röstmemon, MP3, Bilder, förvrängning, iMovie,
högtalare, pris → App Store, integritet), each linking to its guide.
