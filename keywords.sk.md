# Keyword research and page map — Slovak (sk) — volumeboosting.com/sk/

Goal: same as `keywords.md` — rank for Slovak queries from people with a quiet file on their iPhone
right now. Copy uses the informal «ty» form per `glossary.tsv` (sk-SK: tykanie v UI).

Method (2026-10-02): the SK App Store listing (localized with `?l=sk`: "Zosilňovač hlasitosti a zvuku" /
"Volume Boost – 10× hlasnejšie"), the phrases the listing targets (zosilňovač hlasitosti, zosilňovač
zvuku, zvýšiť hlasitosť, hlasnejšie, zosilniť), Slovak query patterns («ako zosilniť …», «tichý / tichá …»,
«… potichu», «… hlasnejšie»), Apple's Slovak app names where verifiable (support.apple.com/sk-sk), the
Czech pages already built (`/cs/navody/`) as a sibling reference, and the English map. No keyword-volume
tool; tiers are directional (Slovak ≈ 1/60–1/80 of US English demand; many Slovaks also search in Czech).
Validate in Search Console (filter `/sk/`).

Tiers: **High** ≈ 200+/mo, **Medium** ≈ 30–200, **Low** ≈ 10–30, **Niche** < 10.

## 0. What the SK storefront shows (2026-10-02)

- Slovak title/subtitle and description; **5,0★ from 1 rating**. The homepage still shows
  «4,5 ★ · 121 hodnotení» (global figure in hero/download/cta).
- The listing description uses the formal «vy» form («Importujte», «Stiahnite si»), while the site and the
  glossary use «ty». Consider aligning one way.
- **Screenshots are not localized** (same 6 English images). The site keeps the shared
  `/img/screenshots/1–7.webp`; no `img/screenshots/sk/`.
- IAPs (SK): «Zosilňovač hlasitosti týždenný» (weekly, free trial); «Zosilňovač hlasitosti a zvuku»
  (annual, 29,90 €). Subscription only — but `download.price_note` says «… jednorazová doživotná licencia»;
  fix if no lifetime purchase exists.
- «Poskytovateľ» shows the developer name in Cyrillic (Владимир Ивахненко), as in PL and RO.

## 1. Language notes

- Phrasing: «zosilniť zvuk», «zvýšiť hlasitosť», «hlasnejšie», «tichý / potichu», «hlasová správa»
  (WhatsApp), «záznam / nahrávanie obrazovky».
- Apple Slovak names used: Fotky, Súbory, **Diktafón** (Voice Memos — verified on support.apple.com/sk-sk;
  `glossary.tsv` says «Hlasové poznámky», update it), Ovládacie centrum, Nahrávanie obrazovky, Zdieľať,
  Uložiť do Súborov, Uložiť video, Nastavenia, iMovie.
- **Brand mismatch**: the store name is «Zosilňovač hlasitosti a zvuku», but the rest of `build/sk.json`
  (hero, download, cta, footer, alts) still says «Increase Volume – Zosilnenie zvuku» / «Zvýšenie
  hlasitosti». Meta, guides and FAQ now use «Zosilňovač hlasitosti a zvuku» (first mention) and «Volume
  Boost» (short form, as the listing itself does). Pick one name and replace the rest.
- **Verify on a Slovak iPhone** (not confirmed from Apple docs): «Nastavenia › Zvuky a haptika ›
  Bezpečnosť slúchadiel › Znížiť hlasné zvuky», «Hudba › Ekvalizér › Neskoro v noci», «Vyrovnanie
  hlasitosti» (Sound Check), «Prístupnosť › Zvuk a obraz › Vyváženie», «Vylepšiť nahrávku», «Mix zvuku»,
  voice boost in Podcasty, iMovie «Vytvoriť nový projekt».
- In-app labels used (from `build/sk.json`; verify against the app's strings): «Násobok hlasitosti»,
  «Zosilniť hlasitosť na ×10», «Vylepšiť kvalitu zvuku», Pôvodné / Spracované, «Stiahnuť spracované».

## 2. Primary keywords (sk homepage)

| Keyword | Tier | Placement |
|---|---|---|
| ako zosilniť zvuk videa (na iPhone) | Medium | `<title>`, meta, hero, guide 1 |
| zosilňovač hlasitosti / zosilňovač zvuku | Medium | `<title>` (store name), meta, download section |
| zvýšiť hlasitosť / aplikácia na zvýšenie hlasitosti | Medium | Meta keywords, FAQ |

## 3. Long-tail keywords → guide pages (`/sk/navody/`)

| # | Keyword | Tier | Slug | EN twin |
|---|---|---|---|---|
| 1 | ako zosilniť zvuk videa na iPhone | Medium | ako-zosilnit-zvuk-videa-na-iphone | how-to-make-a-video-louder-on-iphone |
| 2 | tichá hlasová správa WhatsApp | Low | ticha-hlasova-sprava-whatsapp | how-to-make-a-whatsapp-voice-message-louder |
| 3 | tichý záznam obrazovky iPhone | Low | tichy-zaznam-obrazovky-iphone | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | ako zosilniť nahrávku z Diktafónu | Low | ako-zosilnit-nahravku-z-diktafonu | how-to-increase-voice-memo-volume-on-iphone |
| 5 | tichá hudba na iPhone | Low | ticha-hudba-na-iphone | how-to-make-music-louder-on-iphone |
| 6 | ako zosilniť MP3 na iPhone | Low | ako-zosilnit-mp3-na-iphone | how-to-make-mp3-louder-on-iphone |
| 7 | prečo je video na iPhone potichu | Low | preco-je-video-potichu | why-is-my-iphone-video-so-quiet |
| 8 | ako spraviť video na TikTok hlasnejšie | Low | hlasnejsie-video-na-tiktok | how-to-make-a-tiktok-video-louder |
| 9 | zvýšiť hlasitosť videa v aplikácii Fotky | Niche | zosilnit-video-v-aplikacii-fotky | how-to-boost-video-volume-from-the-photos-app |
| 10 | zvýšiť hlasitosť bez straty kvality | Niche | hlasnejsie-bez-straty-kvality | how-to-make-a-video-louder-without-losing-quality |
| 11 | iMovie hlasitosť nad 500 % | Niche | imovie-hlasitost-nad-500 | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | tichý podcast / audiokniha na iPhone | Low | tichy-podcast-audiokniha-iphone | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Guide 12 names Audible, Storytel and Audiolibrix (CZ/SK audiobook store) as DRM sources.
Anchors used by the homepage FAQ: `preco-je-video-potichu#prehravanie`, `hlasnejsie-bez-straty-kvality#sukromie`.

## 4. Homepage FAQ → «Zistiť viac»

11 questions in the EN order (video, WhatsApp, záznam obrazovky, Diktafón, MP3, Fotky, skreslenie, iMovie,
reproduktor, cena → App Store, súkromie), each linking to its guide.
