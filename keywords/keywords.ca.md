# Keyword research and page map — Catalan (ca) — volumeboosting.com/ca/

Goal: same as `keywords.md` — rank for Catalan queries from people with a quiet file on their iPhone
right now. Copy uses informal «tu», as the store listing and `build/ca.json` do.

Method (2026-10-03): the ES App Store listing in Catalan (`https://apps.apple.com/es/app/id6741472421?l=ca`),
the phrases the listing targets (augmenta el volum, potenciador de volum/so, amplificador de so, fes …
més fort), Catalan query patterns («com pujar el volum …», «… fluix», «… més fort»), Apple's Catalan app
names where verifiable (support.apple.com/ca-es), the Spanish pages (`/es/`) as a sibling reference, and
the English map. No keyword-volume tool; tiers are directional (Catalan ≈ 1/40–1/80 of US English demand;
many Catalan speakers also search in Spanish, which `/es/` covers). Validate in Search Console (filter `/ca/`).

Tiers: **High** ≈ 200+/mo, **Medium** ≈ 30–200, **Low** ≈ 10–30, **Niche** < 10.

## 0. What the storefront shows in Catalan (2026-10-03)

- Localized: «Augmenta Volum Vídeo» / «Fes àudio i música més forts»; **5,0★ from 6 ratings** (ES
  storefront). The homepage still shows «4,5 ★ · 121 valoracions» (global figure).
- **Listing bug to fix in App Store Connect:** the Catalan page shows «IDIOMA DE» and «Idiomes: Alemany i
  30 més» (German) instead of Catalan.
- The description ends with English search terms ("increase volume", "sound booster", …) instead of
  Catalan ones; replacing them with «augmentar volum», «potenciador de so», «amplificador de volum» would
  match Catalan searches better.
- **Screenshots:** the Catalan listing uses the **Spanish** screenshot set (pixel-identical to
  `img/screenshots/es/`, headlines in Spanish: «Aumentar volumen hasta 1000 %», «Seleccione la cantidad de
  aumento», …). Copied them to `img/screenshots/ca/1–7.webp` so the site matches the store; `ca.json` hero
  and screenshot items point there and guide image alts note «titular en castellà». Consider making
  Catalan-headline screenshots.
- IAPs (ES, Catalan names): «Potenciador de volum setmanal» (weekly, free trial); «Amplificador de volum i so»
  (annual, 34,90 €). Subscription only — but `download.price_note` says «… pagament únic de per vida»;
  fix if no lifetime purchase exists.

## 1. Language notes

- Phrasing: «pujar el volum», «augmentar el volum», «més fort», «fluix» (quiet), «àudio / missatge de veu»
  (WhatsApp), «gravació de pantalla», «pòdcast».
- Apple Catalan names used: Fotos, Fitxers, **Notes de Veu** (Voice Memos — verified on
  support.apple.com/ca-es), Centre de control, Gravació de pantalla, Comparteix, Desa a Fitxers, Desa el
  vídeo, Configuració, iMovie.
- `glossary.tsv` has **no ca-ES column**; add one if Catalan will be maintained.
- **Brand mismatch**: store name «Augmenta Volum Vídeo»; the rest of `build/ca.json` (hero, download, cta,
  footer, alts) still says «Increase Volume – Potència de so» / «Pujar volum». Meta, guides and FAQ now
  use «Augmenta Volum Vídeo». Pick one name and replace the rest.
- **Verify on a Catalan iPhone** (not confirmed from Apple docs): «Configuració › Sons i vibracions ›
  Seguretat dels auriculars › Reduir els sons forts», «Música › Equalitzador › Tard a la nit»,
  «Comprovació del so», «Accessibilitat › Àudio i elements visuals › Balanç», «Millora la gravació»,
  «Mescla d'àudio», voice boost in Podcasts, iMovie «Inicia un projecte nou».
- In-app labels used (from `build/ca.json`; verify against the app's strings): «Multiplicació del volum»,
  «Reforça el volum a ×10», «Millora la qualitat de l'àudio», Original / Processat, «Descarrega el processat».

## 2. Primary keywords (ca homepage)

| Keyword | Tier | Placement |
|---|---|---|
| com pujar el volum d'un vídeo (a l'iPhone) | Medium | `<title>`, meta, hero, guide 1 |
| augmentar el volum / app per augmentar el volum | Medium | Meta keywords, FAQ |
| amplificador de volum / potenciador de so | Low | Meta keywords, download section |

## 3. Long-tail keywords → guide pages (`/ca/guies/`)

| # | Keyword | Tier | Slug | EN twin |
|---|---|---|---|---|
| 1 | com pujar el volum d'un vídeo a l'iPhone | Medium | com-pujar-el-volum-d-un-video-a-l-iphone | how-to-make-a-video-louder-on-iphone |
| 2 | àudio / missatge de veu de WhatsApp fluix | Low | missatge-de-veu-whatsapp-fluix | how-to-make-a-whatsapp-voice-message-louder |
| 3 | gravació de pantalla amb so fluix iPhone | Low | gravacio-de-pantalla-amb-so-fluix-iphone | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | pujar el volum d'una gravació de Notes de Veu | Low | notes-de-veu-mes-fort | how-to-increase-voice-memo-volume-on-iphone |
| 5 | música fluixa a l'iPhone | Low | musica-fluixa-iphone | how-to-make-music-louder-on-iphone |
| 6 | com pujar el volum d'un MP3 | Low | com-pujar-el-volum-d-un-mp3 | how-to-make-mp3-louder-on-iphone |
| 7 | per què el vídeo de l'iPhone sona fluix | Low | per-que-el-video-sona-fluix | why-is-my-iphone-video-so-quiet |
| 8 | com fer un vídeo de TikTok més fort | Niche | video-de-tiktok-mes-fort | how-to-make-a-tiktok-video-louder |
| 9 | pujar el volum d'un vídeo a l'app Fotos | Niche | pujar-volum-video-des-de-fotos | how-to-boost-video-volume-from-the-photos-app |
| 10 | pujar el volum sense perdre qualitat | Niche | mes-fort-sense-perdre-qualitat | how-to-make-a-video-louder-without-losing-quality |
| 11 | iMovie volum més del 500 % | Niche | imovie-volum-mes-de-500 | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | pòdcast / audiollibre fluix a l'iPhone | Low | podcast-audiollibre-fluix-iphone | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Anchors used by the homepage FAQ: `per-que-el-video-sona-fluix#reproduccio`,
`mes-fort-sense-perdre-qualitat#privadesa`.

## 4. Homepage FAQ → «Més informació»

11 questions in the EN order (vídeo, WhatsApp, gravació de pantalla, Notes de Veu, MP3, Fotos, distorsió,
iMovie, altaveu, preu → App Store, privadesa), each linking to its guide.
