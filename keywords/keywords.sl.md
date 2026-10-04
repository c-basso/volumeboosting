# Keyword research and page map — Slovenian (sl) — volumeboosting.com/sl/

Goal: same as `keywords.md` — rank for Slovenian queries from people with a quiet file on their iPhone
right now. Copy keeps the informal «ti» already used in `build/sl.json` («Prenesi», «Skeniraj»).

Method (2026-10-03): the SI App Store listing (`https://apps.apple.com/si/app/id6741472421?l=sl`), Slovenian
query patterns («kako povečati glasnost …», «kako ojačati …», «tih / tiha …», «glasneje»), Apple's Slovenian
app names where verifiable (support.apple.com/sl-si), the Croatian pages (`/hr/vodici/`) as a sibling
reference, and the English map. No keyword-volume tool; tiers are directional (Slovenian ≈ 1/150–1/250 of
US English demand — a small market, so expect low absolute numbers). Validate in Search Console (filter `/sl/`).

Tiers: **High** ≈ 100+/mo, **Medium** ≈ 20–100, **Low** ≈ 5–20, **Niche** < 5.

## 0. What the SI storefront shows (2026-10-03)

- **Not localized**: even with `?l=sl` the listing shows the English title «Increase Volume Sound», English
  description and «EN + še 30». The subtitle slot shows «Glasba» (category) instead of a subtitle.
  **Adding a Slovenian App Store localization is the biggest SEO/ASO gap for this locale**; the site copy
  (guides, FAQ) can be reused as a starting point.
- No ratings section shown in the SI storefront. The homepage still shows «4,5 ★ · 121 ocen» (global figure).
- **Screenshots are not localized** (same 6 English images). The site keeps the shared
  `/img/screenshots/1–7.webp`; no `img/screenshots/sl/`.
- IAPs (SI, English names): «Volume & Sound Booster Weekly» (weekly, free trial); «Volume Booster Sound
  Amplifier» (annual, 29,90 €). Subscription only — but `download.price_note` says «… enkraten doživljenjski
  paket»; fix if no lifetime purchase exists.

## 1. Language notes

- Phrasing: «povečati glasnost», «ojačati», «glasneje / glasnejši», «tih / tiho», «glasovno sporočilo»,
  «snemanje zaslona», «podkast». Viber is common in Slovenia, so guide 2 covers Viber alongside WhatsApp.
- Apple Slovenian names used: Fotografije, Datoteke, **Glasovni zapiski** (Voice Memos — verified on
  support.apple.com/sl-si), Nadzorno središče, Snemanje zaslona, Deli, Shrani v Datoteke, Shrani video,
  Nastavitve, iMovie. Note: `sl.json` uses «glasovne opombe» in meta — Apple's name is Glasovni zapiski.
- `glossary.tsv` has **no sl-SI column**; add one if Slovenian will be maintained.
- **Brand**: with no Slovenian store name, the site keeps «Increase Volume» (as `sl.json` already does).
  The homepage hero/download still use «Increase Volume – Ojačitev zvoka» / «Povečanje glasnosti».
- **Verify on a Slovenian iPhone** (not confirmed from Apple docs): «Nastavitve › Zvoki in haptika ›
  Varnost slušalk › Zmanjšaj glasne zvoke», «Glasba › Izenačevalnik › Pozno ponoči», «Preverjanje zvoka»,
  «Dostopnost › Zvok in slika › Ravnovesje», «Izboljšaj posnetek», «Zvočni miks», voice boost in Podcasti,
  iMovie «Začni nov projekt».
- In-app labels used (from `build/sl.json`; verify against the app's strings): «Množitelj glasnosti»,
  «Ojači glasnost na ×10», «Izboljšaj kakovost zvoka», Izvirnik / Obdelano, «Prenesi obdelano».

## 2. Primary keywords (sl homepage)

| Keyword | Tier | Placement |
|---|---|---|
| kako povečati glasnost videa (na iPhonu) | Medium | `<title>`, meta, hero, guide 1 |
| povečanje glasnosti / ojačevalnik glasnosti | Medium | Meta keywords, FAQ |
| aplikacija za povečanje glasnosti | Low | Meta keywords |

## 3. Long-tail keywords → guide pages (`/sl/vodniki/`)

| # | Keyword | Tier | Slug | EN twin |
|---|---|---|---|---|
| 1 | kako povečati glasnost videa na iPhonu | Medium | kako-povecati-glasnost-videa-na-iphonu | how-to-make-a-video-louder-on-iphone |
| 2 | tiho glasovno sporočilo WhatsApp / Viber | Low | tiho-glasovno-sporocilo-whatsapp | how-to-make-a-whatsapp-voice-message-louder |
| 3 | tih zvok pri snemanju zaslona iPhone | Low | tih-posnetek-zaslona-iphone | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | kako ojačati posnetek v Glasovnih zapiskih | Low | glasovni-zapiski-glasneje | how-to-increase-voice-memo-volume-on-iphone |
| 5 | tiha glasba na iPhonu | Low | tiha-glasba-iphone | how-to-make-music-louder-on-iphone |
| 6 | kako ojačati MP3 na iPhonu | Low | kako-ojaciti-mp3-na-iphonu | how-to-make-mp3-louder-on-iphone |
| 7 | zakaj je video na iPhonu tih | Low | zakaj-je-video-tih | why-is-my-iphone-video-so-quiet |
| 8 | kako narediti video za TikTok glasnejši | Niche | glasnejsi-video-za-tiktok | how-to-make-a-tiktok-video-louder |
| 9 | povečati glasnost videa v Fotografijah | Niche | glasnost-videa-v-fotografijah | how-to-boost-video-volume-from-the-photos-app |
| 10 | povečati glasnost brez izgube kakovosti | Niche | glasneje-brez-izgube-kakovosti | how-to-make-a-video-louder-without-losing-quality |
| 11 | iMovie glasnost nad 500 % | Niche | imovie-glasnost-nad-500 | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | tih podkast / zvočna knjiga na iPhonu | Low | tih-podcast-zvocna-knjiga-iphone | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Anchors used by the homepage FAQ: `zakaj-je-video-tih#predvajanje`, `glasneje-brez-izgube-kakovosti#zasebnost`.

## 4. Homepage FAQ → «Več o tem»

11 questions in the EN order (video, WhatsApp, posnetek zaslona, Glasovni zapiski, MP3, Fotografije,
popačenje, iMovie, zvočnik, cena → App Store, zasebnost), each linking to its guide.
