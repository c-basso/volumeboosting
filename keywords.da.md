# Keyword research and page map — Danish (da) — volumeboosting.com/da/

Goal: same as `keywords.md` — rank for Danish queries from people with a quiet file on their
iPhone right now, and send them to the App Store.

Method (2026-10-01): Danish SERP checks for each candidate query, the DK App Store storefront
(`country=dk`), Apple's Danish app and settings names, and the English map. No keyword-volume
tool was used; tiers are directional and scaled to the Danish market (roughly 1/60–1/80 of US
English demand). Validate in Search Console (filter: page contains `/da/`) after 4–6 weeks.

Tiers: **Medium** ≈ 200+/mo, **Low** ≈ 30–200, **Niche** < 30 but very specific intent.

## 0. What the DK storefront shows (2026-10-01)

- No Danish App Store metadata: title, subtitle and description are English in the DK storefront.
  The app UI itself is localized to Danish.
- DK storefront: **1 rating, 1★**. Likely the same expectation mismatch seen in US reviews
  (expecting a system-wide speaker booster). The Danish pages state the file-vs-speaker
  distinction on every page and in the FAQ.
- Screenshots and icon are identical to the US listing (already in `img/`).
- **Opportunity outside the website:** add a Danish App Store localization. Suggested title
  `Lydforstærker: Højere video`, subtitle `Gør lyd og musik op til 10× højere`, keywords field
  `lydstyrke,højere,lyd,video,forstærker,booster,mp3,diktafon,optagelse,musik,lav,tiktok`.

## 1. SERP observations

- Danish results for "gør lyden højere på video iPhone", "skærmoptagelse lyd for lav", "diktafon
  optagelse for lav" are dominated by FAQ farms (skagenonline.dk), machine-translated vendor
  pages (Apeaksoft) and Clipchamp's generic desktop article. No native Danish page answers the
  iPhone + file-boost intent. Competition is weak.
- Danes phrase low volume as **"for lav"** (most common) and **"for stille"**; both are used in copy.
  "Højere" (louder) is the action word: "gør video højere", "gør lyden højere".
- Many Danes also search in English; the English pages already cover that. hreflang links each
  Danish guide to its English twin.
- Apple's Danish names used in copy: Fotos, Filer, Diktafon (Voice Memos), Beskeder, Kontrolcenter,
  Skærmoptagelse, Indstillinger › Lyde og haptik › Høretelefonsikkerhed › Reducer høj lyd,
  Indstillinger › Musik › Lydkontrol (Sound Check), Forbedr optagelse (Enhance Recording).
  **To verify** on a Danish-language iPhone before relying on exact wording.

## 2. Primary keywords (da homepage)

| Keyword | Tier | Intent | Placement |
|---|---|---|---|
| lydforstærker iPhone / lydstyrke booster app | Medium | Commercial | `<title>`, download section |
| gør video højere (iPhone) | Medium | How-to | Meta description, hero, guide 1 |
| øg lydstyrken på video | Low | How-to | FAQ 1, guide 1 |
| forstærk lyd / gør lyden højere | Low | How-to | Meta keywords, FAQ |

Homepage `<title>`: `Lydforstærker til iPhone – video og lyd op til 10× højere`
Homepage meta description: `Gør en stille video, MP3 eller Diktafon-optagelse op til 10× højere på iPhone. Increase Volume forstærker selve filen, holder lyden klar og gemmer en kopi.`

## 3. Long-tail keywords → one Danish guide each (`/da/guides/<slug>/`)

| # | Slug | Target keyword | Secondary phrases | Tier | EN twin (`en_slug`) |
|---|---|---|---|---|---|
| 1 | `goer-en-video-hoejere-paa-iphone` | gør video højere på iPhone | øg lyden på video iPhone, video for lav lyd, forstærk lyd i video | Medium | how-to-make-a-video-louder-on-iphone |
| 2 | `skaermoptagelse-med-for-lav-lyd-paa-iphone` | skærmoptagelse lyd for lav | skærmoptagelse uden lyd, skærmoptagelse med lyd iPhone | Low | how-to-make-a-screen-recording-louder-on-iphone |
| 3 | `goer-en-diktafon-optagelse-hoejere-paa-iphone` | diktafon optagelse for lav | stemmememo for lav, forstærk lydoptagelse iPhone | Low | how-to-increase-voice-memo-volume-on-iphone |
| 4 | `goer-en-lydbesked-fra-whatsapp-hoejere` | lydbesked WhatsApp for lav | talebesked for lav, Messenger lydbesked lav lyd | Low | how-to-make-a-whatsapp-voice-message-louder |
| 5 | `goer-en-mp3-hoejere-paa-iphone` | gør MP3 højere | øg lydstyrke MP3, MP3 for lav | Low | how-to-make-mp3-louder-on-iphone |
| 6 | `musik-for-lav-paa-iphone` | musik for lav på iPhone | lyden er for lav iPhone, Lydkontrol, Reducer høj lyd | Medium | how-to-make-music-louder-on-iphone |
| 7 | `hvorfor-er-min-iphone-video-saa-lav` | hvorfor er lyden på min video så lav | iPhone video lav lyd, mikrofon lav lyd | Low | why-is-my-iphone-video-so-quiet |
| 8 | `goer-lyden-paa-en-tiktok-video-hoejere` | TikTok video lav lyd | Reels for lav lyd, gør lyd højere før upload | Low | how-to-make-a-tiktok-video-louder |
| 9 | `oeg-lyden-paa-en-video-direkte-fra-fotos` | øg lyd på video i Fotos | Fotos-appen lydstyrke, video i Fotos for lav | Niche | how-to-boost-video-volume-from-the-photos-app |
| 10 | `goer-lyden-hoejere-uden-at-miste-kvalitet` | gør lyd højere uden at miste kvalitet | uden forvrængning, lyden skratter efter forstærkning | Niche | how-to-make-a-video-louder-without-losing-quality |
| 11 | `imovie-lydstyrke-over-500-procent` | iMovie lydstyrke | iMovie ikke højt nok, iMovie max lydstyrke | Niche | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | `goer-en-podcast-eller-lydbog-hoejere-paa-iphone` | podcast/lydbog for lav | lydbog for lav lyd, forelæsning optagelse for lav | Niche | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Slugs use Danish words with ø→oe, æ→ae, å→aa (Danish convention for URLs).

### Deliberately excluded

- "gør iPhone højttaler højere", "højere højttaler": system-volume intent the app cannot satisfy
  (and the likely cause of the DK 1★ rating). Every page says once that the app makes the file
  louder, not the speaker.
- "lydforstærker Android", "Chrome lydforstærker": wrong platform.
- "Spotify / YouTube højere": streamed, DRM-protected media.

## 4. FAQ on the da homepage (each with "Læs mere")

| Question (FAQ H3) | Target | Læs mere → |
|---|---|---|
| Hvordan gør jeg en video højere på iPhone? | gør video højere | Guide 1 |
| Hvorfor er lyden på min skærmoptagelse så lav? | skærmoptagelse lyd for lav | Guide 2 |
| Kan jeg gøre en Diktafon-optagelse højere bagefter? | diktafon for lav | Guide 3 |
| Hvordan gør jeg en lydbesked fra WhatsApp højere? | lydbesked for lav | Guide 4 |
| Virker appen også med MP3 og andre lydfiler? | gør MP3 højere | Guide 5 |
| Kan jeg øge lyden på en video direkte fra Fotos? | Fotos | Guide 9 |
| Bliver den forstærkede video forvrænget? | uden at miste kvalitet | Guide 10 |
| Hvor meget højere end iMovie kan appen gå? | iMovie lydstyrke | Guide 11 |
| Gør Increase Volume min iPhone-højttaler højere? | (expectation management) | Guide 7 → #afspilning |
| Hvad koster Increase Volume? | pris | App Store |
| Bliver min lyd uploadet nogen steder? | privatliv | Guide 10 → #privatliv |

## 5. In-app labels used in Danish copy

From the existing Danish site copy (`build/da.json`), which mirrors the app's Danish UI:
„Lydstyrke-multiplikation“ (slider), „Boost lydstyrke til ×N“ (button), „Forbedr lydkvalitet“
(toggle), Original / Behandlet (comparison toggle), „Download behandlet“ (save button).
**To verify** against the app's Danish strings; if any differ, search-and-replace them in
`build/guides/da/*.json` and `build/da.json`.
