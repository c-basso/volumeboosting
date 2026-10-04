# Keyword research and page map — Finnish (fi) — volumeboosting.com/fi/

Goal: same as `keywords.md` — rank for Finnish queries from people with a quiet file on their
iPhone right now, and send them to the App Store.

Method (2026-10-02): Finnish SERP checks per query, the FI App Store storefront (`country=fi`),
Apple's Finnish app/settings names, and the English map. No keyword-volume tool; tiers are
directional and scaled to Finland (≈ 1/80–1/120 of US English demand; iPhone share is high).
Validate in Search Console (filter: page contains `/fi/`) after 4–6 weeks.

Tiers: **Medium** ≈ 100+/mo, **Low** ≈ 20–100, **Niche** < 20.

## 0. What the FI storefront shows (2026-10-02)

- No Finnish App Store metadata (English title/description); app UI is Finnish. 0 ratings.
- Screenshots/icon identical to US (already in `img/`).
- **Opportunity outside the website:** add a Finnish App Store localization. Suggested title
  `Äänen tehostus: Kovempi video`, subtitle `Musiikki ja MP3 jopa 10× kovemmalle`, keywords field
  `äänenvoimakkuus,kovempi,ääni,video,tehostin,vahvistin,mp3,sanelin,musiikki,hiljainen,booster`.

## 1. SERP observations

- Finnish SERPs for «videon ääni kovemmaksi iPhone», «näytön tallennus ääni hiljainen»,
  «WhatsApp ääniviesti hiljainen» have almost **no native Finnish content**: machine-translated
  Apeaksoft/AnyMP4 pages and English results. Very weak competition; native pages can rank fast.
- Finnish phrasing: «kovemmaksi / kovemmalle» (louder, colloquial), «äänenvoimakkuus» (volume),
  «nostaa / tehostaa» (raise / boost), «hiljainen» (quiet, problem word). Users often type without
  ä/ö («aani», «hiljainen»); slugs use a/o for ä/ö.
- Copy uses «sinä» and imperative (per `glossary.tsv`).
- Apple's Finnish names used (**verify on a Finnish-language iPhone**): Kuvat, Tiedostot, Sanelin
  (Voice Memos), Viestit, Ohjauskeskus, Näytön tallennus, Asetukset › Äänet ja tuntokyky ›
  Kuulokkeiden turvallisuus › Vähennä kovia ääniä, Asetukset › Musiikki › Äänitason tarkistus
  (Sound Check), Paranna tallennetta (Enhance Recording).

## 2. Primary keywords (fi homepage)

| Keyword | Tier | Intent | Placement |
|---|---|---|---|
| videon ääni kovemmaksi (iPhone) | Medium | How-to | `<title>`, meta, hero, guide 1 |
| äänen tehostus / äänenvoimakkuuden vahvistin iPhone | Low | Commercial | `<title>`, download |
| hiljainen video / äänite kovemmaksi | Low | How-to | Meta keywords, FAQ |

Homepage `<title>`: `Videon ääni kovemmaksi iPhonella – äänen tehostus jopa 10×`

## 3. Long-tail keywords → one Finnish guide each (`/fi/oppaat/<slug>/`)

| # | Slug | Target keyword | Tier | EN twin |
|---|---|---|---|---|
| 1 | `nain-saat-videon-aanen-kovemmaksi-iphonella` | videon ääni kovemmaksi iPhone | Medium | how-to-make-a-video-louder-on-iphone |
| 2 | `nayton-tallennuksen-aani-hiljainen-iphone` | näytön tallennus ääni hiljainen | Low | how-to-make-a-screen-recording-louder-on-iphone |
| 3 | `whatsapp-aaniviesti-hiljainen` | WhatsApp ääniviesti hiljainen | Low | how-to-make-a-whatsapp-voice-message-louder |
| 4 | `sanelin-aanite-kovemmaksi-iphonella` | sanelin äänite hiljainen | Low | how-to-increase-voice-memo-volume-on-iphone |
| 5 | `musiikki-kovemmalle-iphonella` | musiikki hiljaisella iPhone | Low | how-to-make-music-louder-on-iphone |
| 6 | `mp3-tiedosto-kovemmaksi-iphonella` | MP3 kovemmaksi | Niche | how-to-make-mp3-louder-on-iphone |
| 7 | `miksi-iphonen-video-on-niin-hiljainen` | miksi video on hiljainen | Low | why-is-my-iphone-video-so-quiet |
| 8 | `tiktok-video-kovemmaksi` | TikTok video hiljainen | Niche | how-to-make-a-tiktok-video-louder |
| 9 | `video-kovemmaksi-kuvat-apista` | video kovemmaksi Kuvat | Niche | how-to-boost-video-volume-from-the-photos-app |
| 10 | `aani-kovemmaksi-ilman-laadun-heikkenemista` | ääni kovemmaksi ilman säröä | Niche | how-to-make-a-video-louder-without-losing-quality |
| 11 | `imovie-aanenvoimakkuus-yli-500-prosenttia` | iMovie äänenvoimakkuus | Niche | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | `podcast-tai-aanikirja-kovemmaksi-iphonella` | äänikirja hiljainen | Niche | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Finnish-specific: audiobooks are very popular in Finland (BookBeat, Storytel, Nextory); the
audiobook guide names them as DRM-protected services.

### Deliberately excluded
- «iPhonen kaiutin kovemmalle»: system-volume intent; every page says the app boosts the file.
- Android / Chrome boosters; Spotify / YouTube (DRM).

## 4. FAQ on the fi homepage (each with «Lue lisää»)

Video (1), screen recording (2), WhatsApp (3), Sanelin (4), MP3 (6), Kuvat (9), distortion (10),
iMovie (11), speaker expectation (7 → #toisto), price (App Store), privacy (10 → #tietosuoja).

## 5. In-app labels used in Finnish copy

From `build/fi.json`: Äänenvoimakkuuden kertoja, Tehosta äänenvoimakkuutta, Paranna äänenlaatua,
Alkuperäinen / Käsitelty, Lataa käsitelty. **Verify** against the app's Finnish strings.
