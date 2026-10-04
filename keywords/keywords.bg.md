# Keyword research and page map — Bulgarian (bg) — volumeboosting.com/bg/

Goal: same as `keywords.md` — rank for Bulgarian queries from people with a quiet file on their iPhone
right now. Copy keeps the formal «вие» already used in `build/bg.json`.

Method (2026-10-02): the BG App Store listing (`https://apps.apple.com/bg/app/id6741472421?l=bg`), Bulgarian
query patterns («как да усиля звука на …», «усилване на звука», «тихо …», «по-силно»), Apple's Bulgarian app
names where verifiable (support.apple.com/bg-bg), and the English map. No keyword-volume tool; tiers are
directional (Bulgarian ≈ 1/80–1/120 of US English demand). Validate in Search Console (filter `/bg/`).

Tiers: **High** ≈ 200+/mo, **Medium** ≈ 30–200, **Low** ≈ 10–30, **Niche** < 10.

## 0. What the BG storefront shows (2026-10-02)

- **Not localized**: even with `?l=bg` the listing shows the English title «Increase Volume Sound» /
  «Audio & Music Booster», English description and «EN + 30 More». **Adding a Bulgarian App Store
  localization is the biggest SEO/ASO gap for this locale** — the site copy (guides, FAQ) can be reused
  as a starting point.
- Not enough ratings in the BG storefront. The homepage still shows «4,5 ★ · 121 оценки» (global figure).
- **Screenshots are not localized** (same 6 English images). The site keeps the shared
  `/img/screenshots/1–7.webp`; no `img/screenshots/bg/`.
- IAPs (BG, English names): «Volume & Sound Booster Weekly» (weekly, free trial); «Volume Booster Sound
  Amplifier» (annual, **24,90 €** — the BG storefront prices in euro). Subscription only — but
  `download.price_note` says «… еднократен план за цял живот»; fix if no lifetime purchase exists.

## 1. Language notes

- Phrasing: «усилване на звука», «как да усиля звука», «по-силно», «тихо / тих звук», «гласово съобщение»,
  «запис на екрана». Viber is very common in Bulgaria, so guide 2 covers Viber alongside WhatsApp.
- Apple Bulgarian names used: «Снимки», «Файлове», **«Диктофон»** (Voice Memos — verified on
  support.apple.com/bg-bg), «Контролен център», «Запис на екрана», «Споделяне», «Запазване във Файлове»,
  «Настройки», iMovie.
- `glossary.tsv` has **no bg-BG column**; add one if Bulgarian will be maintained.
- **Brand**: with no Bulgarian store name, the site keeps «Increase Volume» (as `bg.json` already does;
  store title is «Increase Volume Sound»). If you localize the listing, update meta/guides/FAQ to match.
- **Verify on a Bulgarian iPhone** (not confirmed from Apple docs): «Настройки › Звуци и усещания ›
  Безопасност на слушалките», «Музика › Еквалайзер › Късно през нощта», «Проверка на звука»,
  «Достъпност › Аудио и визуални › Баланс», «Подобряване на записа», «Аудио микс», voice boost in
  «Подкасти», iMovie «Нов проект», «Запазване на видеото».
- In-app labels used (from `build/bg.json`; verify against the app's strings): «Умножение на силата»,
  «Усилване до ×10», «Подобряване на качеството на звука», «Оригинал» / «Обработен», «Изтегляне на
  обработения файл».

## 2. Primary keywords (bg homepage)

| Keyword | Tier | Placement |
|---|---|---|
| как да усиля звука на видео (в iPhone) | Medium | `<title>`, meta, hero, guide 1 |
| усилване на звука / усилвател на звук | Medium | Meta keywords, FAQ |
| приложение за усилване на звука | Low | Meta keywords |

## 3. Long-tail keywords → guide pages (`/bg/rakovodstva/`)

| # | Keyword | Tier | Slug | EN twin |
|---|---|---|---|---|
| 1 | как да усиля звука на видео в iPhone | Medium | kak-da-usilite-zvuka-na-video-iphone | how-to-make-a-video-louder-on-iphone |
| 2 | тихо гласово съобщение WhatsApp / Viber | Low | tiho-glasovo-saobshtenie-whatsapp | how-to-make-a-whatsapp-voice-message-louder |
| 3 | тих звук при запис на екрана iPhone | Low | tih-zvuk-zapis-na-ekrana-iphone | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | как да усиля запис от Диктофон | Low | diktofon-zapis-po-silno | how-to-increase-voice-memo-volume-on-iphone |
| 5 | тиха музика на iPhone | Low | tiha-muzika-iphone | how-to-make-music-louder-on-iphone |
| 6 | как да усиля MP3 на iPhone | Low | kak-da-usilite-mp3-iphone | how-to-make-mp3-louder-on-iphone |
| 7 | защо видеото на iPhone е тихо | Low | zashto-videoto-e-tiho | why-is-my-iphone-video-so-quiet |
| 8 | как да направя видео за TikTok по-силно | Niche | po-silno-video-tiktok | how-to-make-a-tiktok-video-louder |
| 9 | усилване на видео в приложението Снимки | Niche | usilvane-na-video-ot-snimki | how-to-boost-video-volume-from-the-photos-app |
| 10 | усилване на звука без загуба на качество | Niche | po-silno-bez-zaguba-na-kachestvo | how-to-make-a-video-louder-without-losing-quality |
| 11 | iMovie сила на звука над 500% | Niche | imovie-sila-na-zvuka-nad-500 | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | тих подкаст / аудиокнига на iPhone | Low | tih-podkast-audiokniga-iphone | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Slugs are Latin transliteration. Anchors used by the homepage FAQ: `zashto-videoto-e-tiho#vazproizvezhdane`,
`po-silno-bez-zaguba-na-kachestvo#poveritelnost`.

## 4. Homepage FAQ → «Научете повече»

11 questions in the EN order (видео, WhatsApp, запис на екрана, Диктофон, MP3, Снимки, изкривяване, iMovie,
високоговорител, цена → App Store, поверителност), each linking to its guide.
