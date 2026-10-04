# Keyword research and page map — Norwegian Bokmål (no) — volumeboosting.com/no/

Goal: same as `keywords.md` — rank for Norwegian queries from people with a quiet file on their iPhone
right now. Copy uses informal «du» per `glossary.tsv`. Pages live under `/no/` but declare
`lang="nb"` / `hreflang="nb"` (Bokmål); guide pages now use `nb` too (build fix, see below).

Method (2026-10-02): the NO App Store listing (localized with `?l=nb`: "Volumforsterker – Volume Boost" /
"Gjør musikk og video høyere"), the phrases the listing targets (volumforsterker, øke volumet, gjøre
høyere, lydforsterker, musikkforsterker), Norwegian query patterns («gjøre … høyere», «… for lav»,
«øke volumet på …»), Apple's Norwegian app names where verifiable (support.apple.com/nb-no), and the
English map. No keyword-volume tool; tiers are directional (Norwegian ≈ 1/40–1/60 of US English demand;
NO iPhone share is high). Validate in Search Console (filter `/no/`).

Tiers: **High** ≈ 300+/mo, **Medium** ≈ 50–300, **Low** ≈ 10–50, **Niche** < 10.

## 0. What the NO storefront shows (2026-10-02)

- Without `?l=nb` the page shows English; with `?l=nb` the Bokmål title, subtitle and description appear.
- Not enough ratings in the NO storefront. **The homepage still shows «4,5★ · 121 vurderinger»** (global
  figure, hero/download/cta) — keep only if you accept a non-NO rating; otherwise remove.
- **Screenshots are not localized** (same 6 English images as nl/ms/ko). The site keeps the shared
  `/img/screenshots/1–7.webp`; no `img/screenshots/no/`.
- IAPs (NO): «Volumforsterker ukentlig» (weekly, free trial); «Volum- og lydforsterker» (annual, 379,00 kr).
  Subscription only — but `download.price_note` on the homepage says «… eller et engangskjøp for alltid»;
  fix if no lifetime purchase exists.

## 1. Language notes

- Phrasing: «gjøre lyden høyere», «øke volumet», «for lav lyd», «talemelding» (WhatsApp), «skjermopptak».
- Apple Norwegian names used: Bilder, Filer, **Taleopptak** (Voice Memos — verified on support.apple.com/nb-no;
  `glossary.tsv` says «talemeldinger», update it), Kontrollsenter, Skjermopptak, Del, Arkiver i Filer, iMovie.
- **Brand mismatch**: the store name is «Volumforsterker – Volume Boost», but the rest of `build/no.json`
  (hero, download, cta, footer, alts) still says «Increase Volume – Lydboost» / «Øk lydstyrken». Meta,
  guides and FAQ now use Volumforsterker. Decide on one name and replace the rest.
- **Verify on a Norwegian iPhone** (not confirmed from Apple docs): «Innstillinger › Lyder og haptikk ›
  Hodetelefonsikkerhet › Reduser høye lyder», «Musikk › EQ › Sen kveld», «Lydsjekk», «Tilgjengelighet ›
  Lyd og visuelt › Balanse», «Forbedre opptak», «Lydmiks», «Forbedre stemmer» (Podkaster), iMovie
  «Start nytt prosjekt», «Arkiver video».
- In-app labels used (from `build/no.json`; verify against the app's strings): «Volummultiplikasjon»,
  «Boost lydstyrken til ×10», «Forbedre lydkvalitet», Original / Behandlet, «Last ned behandlet».

## 2. Primary keywords (no homepage)

| Keyword | Tier | Placement |
|---|---|---|
| gjøre lyden på video høyere (iPhone) | Medium | `<title>`, meta, hero, guide 1 |
| volumforsterker / lydforsterker | Medium | `<title>` (store name), download section |
| øke volumet (iPhone) | Medium | Meta keywords, FAQ |
| app for å øke lyden | Low | Meta keywords |

## 3. Long-tail keywords → guide pages (`/no/guider/`)

| # | Keyword | Tier | Slug | EN twin |
|---|---|---|---|---|
| 1 | gjøre lyden på video høyere iPhone | Medium | gjor-video-hoyere-iphone | how-to-make-a-video-louder-on-iphone |
| 2 | WhatsApp talemelding for lav | Medium | whatsapp-talemelding-for-lav | how-to-make-a-whatsapp-voice-message-louder |
| 3 | skjermopptak lyd for lav iPhone | Low | skjermopptak-lyd-for-lav-iphone | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | gjøre taleopptak høyere iPhone | Low | taleopptak-hoyere-iphone | how-to-increase-voice-memo-volume-on-iphone |
| 5 | musikk for lav iPhone | Medium | musikk-for-lav-iphone | how-to-make-music-louder-on-iphone |
| 6 | gjøre MP3 høyere iPhone | Low | gjor-mp3-hoyere-iphone | how-to-make-mp3-louder-on-iphone |
| 7 | hvorfor er videoen så lav iPhone | Low | hvorfor-er-videoen-sa-lav | why-is-my-iphone-video-so-quiet |
| 8 | gjøre TikTok-video høyere | Low | tiktok-video-hoyere | how-to-make-a-tiktok-video-louder |
| 9 | øke volumet på video i Bilder | Low | gjor-video-hoyere-fra-bilder | how-to-boost-video-volume-from-the-photos-app |
| 10 | gjøre lyd høyere uten kvalitetstap | Niche | hoyere-uten-kvalitetstap | how-to-make-a-video-louder-without-losing-quality |
| 11 | iMovie volum over 500 % | Niche | imovie-volum-over-500 | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | podkast / lydbok for lav iPhone | Low | podkast-lydbok-hoyere-iphone | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Anchors used by the homepage FAQ: `hvorfor-er-videoen-sa-lav#avspilling`, `hoyere-uten-kvalitetstap#personvern`.

## 4. Homepage FAQ → «Les mer»

11 questions in the EN order (video, WhatsApp, skjermopptak, Taleopptak, MP3, Bilder, forvrengning, iMovie,
høyttaler, pris → App Store, personvern), each linking to its guide.

## 5. Build change made for this locale

`build/constants.js` gained `toHreflang()` (no → nb) and `build/build.js` passes `hreflang` to the
template for guide pages and hubs, so `/no/guider/` pages, the EN guides and `sitemap.xml` now say
`hreflang="nb"`, consistent with the homepage. Other locales are unchanged.
