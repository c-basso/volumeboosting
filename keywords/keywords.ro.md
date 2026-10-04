# Keyword research and page map — Romanian (ro) — volumeboosting.com/ro/

Goal: same as `keywords.md` — rank for Romanian queries from people with a quiet file on their iPhone
right now. Copy uses the informal «tu» form per `glossary.tsv`.

Method (2026-10-02): the RO App Store listing (localized with `?l=ro`: "Amplificator – Volume Boost" /
"Volum și sunet mai tare"), the phrases the listing targets (amplificator de volum, amplificator de
sunet, crește volumul, mai tare), Romanian query patterns («cum măresc volumul …», «… se aude încet»,
«… mai tare»), Apple's Romanian app names where verifiable (support.apple.com/ro-ro), and the English
map. No keyword-volume tool; tiers are directional (Romanian ≈ 1/25–1/40 of US English demand).
Validate in Search Console (filter `/ro/`).

Tiers: **High** ≈ 300+/mo, **Medium** ≈ 50–300, **Low** ≈ 10–50, **Niche** < 10.

## 0. What the RO storefront shows (2026-10-02)

- Romanian title/subtitle and description; **5,0★ from 3 ratings**. The homepage still shows
  «4,5 ★ · 121 evaluări» (global figure in hero/download/cta).
- **Screenshots are not localized** (same 6 English images). The site keeps the shared
  `/img/screenshots/1–7.webp`; no `img/screenshots/ro/`.
- IAPs (RO): «Amplificator volum săptămânal» (weekly, free trial); «Amplificator de volum și sunet»
  (annual, 61,99 lei). Subscription only — but `download.price_note` says «… plată unică pe viață»;
  fix if no lifetime purchase exists.
- «Furnizor» shows the developer name in Cyrillic (Владимир Ивахненко), like the PL listing.

## 1. Language notes

- Phrasing: «a mări / a crește volumul», «se aude încet», «mai tare», «mesaj vocal» (WhatsApp),
  «înregistrare ecran».
- Apple Romanian names used: Poze, Fișiere, **Reportofon** (Voice Memos — verified on support.apple.com/ro-ro;
  `glossary.tsv` says «note vocale», update it), Centrul de control, Înregistrare ecran, Partajați,
  Salvați în Fișiere, Salvați video, iMovie.
- **Settings name**: the guides use **Configurări**, which is the Romanian iOS name for Settings;
  `glossary.tsv` says «Setări». Confirm on a Romanian iPhone and update one or the other.
- iOS UI in Romanian uses the formal «dvs.» form (Partajați, Salvați), so button names stay formal even
  though the copy addresses the reader with «tu».
- **Brand mismatch**: the store name is «Amplificator – Volume Boost», but the rest of `build/ro.json`
  (hero, download, cta, footer, alts) still says «Increase Volume – Amplificare sunet» / «Crește volumul».
  Meta, guides and FAQ now use «Amplificator – Volume Boost» (first mention) and «Volume Boost» (short
  form, since "amplificator" alone is a generic word). Pick one name and replace the rest.
- **Verify on a Romanian iPhone** (not confirmed from Apple docs): «Configurări › Sunete și haptică ›
  Siguranța căștilor › Reduceți sunetele puternice», «Muzică › Egalizator › Noaptea târziu»,
  «Verificare sunet», «Accesibilitate › Audio și vizual › Balans», «Îmbunătățire înregistrare»,
  «Mixaj audio», voice boost in Podcasturi, iMovie «Începeți un proiect nou».
- In-app labels used (from `build/ro.json`; verify against the app's strings): «Multiplicare volum»,
  «Amplifică volumul la ×10», «Îmbunătățește calitatea audio», Original / Procesat, «Descarcă procesat».

## 2. Primary keywords (ro homepage)

| Keyword | Tier | Placement |
|---|---|---|
| cum mărești volumul unui videoclip pe iPhone | Medium | `<title>`, meta, hero, guide 1 |
| amplificator de volum / amplificator sunet | Medium | meta, download section (store name) |
| crește volumul / aplicație pentru mărirea volumului | Medium | Meta keywords, FAQ |

## 3. Long-tail keywords → guide pages (`/ro/ghiduri/`)

| # | Keyword | Tier | Slug | EN twin |
|---|---|---|---|---|
| 1 | cum măresc volumul la un videoclip pe iPhone | Medium | cum-maresti-volumul-unui-videoclip-pe-iphone | how-to-make-a-video-louder-on-iphone |
| 2 | mesaj vocal WhatsApp se aude încet | Medium | mesaj-vocal-whatsapp-se-aude-incet | how-to-make-a-whatsapp-voice-message-louder |
| 3 | înregistrare ecran sunet încet iPhone | Low | inregistrare-ecran-sunet-incet-iphone | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | înregistrare din Reportofon mai tare | Low | reportofon-inregistrare-mai-tare | how-to-increase-voice-memo-volume-on-iphone |
| 5 | muzica se aude încet pe iPhone | Medium | muzica-se-aude-incet-iphone | how-to-make-music-louder-on-iphone |
| 6 | cum măresc volumul unui MP3 pe iPhone | Low | cum-maresti-volumul-mp3-pe-iphone | how-to-make-mp3-louder-on-iphone |
| 7 | de ce se aude încet videoclipul pe iPhone | Low | de-ce-se-aude-incet-videoclipul | why-is-my-iphone-video-so-quiet |
| 8 | cum fac un videoclip TikTok mai tare | Low | videoclip-tiktok-mai-tare | how-to-make-a-tiktok-video-louder |
| 9 | mărire volum videoclip în aplicația Poze | Low | volum-videoclip-din-aplicatia-poze | how-to-boost-video-volume-from-the-photos-app |
| 10 | mărire volum fără pierderea calității | Niche | volum-mai-tare-fara-pierderea-calitatii | how-to-make-a-video-louder-without-losing-quality |
| 11 | iMovie volum peste 500% | Niche | imovie-volum-peste-500 | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | podcast / audiobook se aude încet pe iPhone | Low | podcast-audiobook-incet-iphone | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Guide 12 names Audible, Storytel and Voxa (Romanian audiobook service) as DRM sources.
Anchors used by the homepage FAQ: `de-ce-se-aude-incet-videoclipul#redare`,
`volum-mai-tare-fara-pierderea-calitatii#confidentialitate`.

## 4. Homepage FAQ → «Află mai multe»

11 questions in the EN order (videoclip, WhatsApp, înregistrare ecran, Reportofon, MP3, Poze, distorsiune,
iMovie, difuzor, preț → App Store, confidențialitate), each linking to its guide.
