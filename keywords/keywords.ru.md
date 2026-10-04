# Keyword research and page map — Russian (ru) — volumeboosting.com/ru/

Goal: same as `keywords.md` — rank for Russian queries (Google and Yandex) from people with a quiet file
on their iPhone right now. Copy addresses the reader with «вы» (lower-case, as in Apple's Russian UI).

Method (2026-10-02): the RU App Store listing (`https://apps.apple.com/ru/app/id6741472421?l=ru`), the
phrases the listing itself targets (увеличить громкость, как увеличить громкость, усилитель громкости,
увеличить громкость видео / аудио / MP3 / песни), Russian query patterns («как увеличить громкость …»,
«как сделать … громче», «тихое …», «почему … тихое»), Apple's Russian app names, and the English map.
No keyword-volume tool (Yandex Wordstat would be the right next check); tiers are directional (Russian ≈
1/3–1/6 of US English demand for these queries; Telegram voice messages are as common as WhatsApp).
Validate in Search Console and Yandex Webmaster (filter `/ru/`).

Tiers: **High** ≈ 1000+/mo, **Medium** ≈ 200–1000, **Low** ≈ 50–200, **Niche** < 50.

## 0. What the RU storefront shows (2026-10-02)

- Localized: «Увеличить Громкость» / «Усилитель Видео & Аудио»; **4,4★ from 32 ratings**. The homepage
  still shows «4,5 ★ · 121 оценок» (global figure; also «121 оценок» should be «121 оценка» grammatically).
- **Screenshots are localized** (Russian headlines over the English app UI). Downloaded the 6 images to
  `img/screenshots/ru/1–6.webp`; `7.webp` is a copy of the shared one. `build.js` picks the folder up
  automatically; `ru.json` hero and screenshot items now point at it.
  Headlines: «Увеличьте громкость до 1000% ×10 громче», «Делайте видео громче», «Усиливайте громкость
  музыки», «Выбирайте, на сколько громче», «Слушайте результат обработки», «Скачивайте и делитесь с друзьями».
- IAPs (RU): «Усилитель громкости недельный» (weekly, trial); «Усилитель громкости и звука» (annual,
  899,00 ₽). Subscription only — but `download.price_note` says «… разовая покупка навсегда»; fix if no
  lifetime purchase exists.
- Note: the RU storefront and payments are restricted in practice (Apple has limited payment methods in
  Russia since 2022); many Russian-speaking users are on other storefronts (KZ, AM, GE, etc.) with
  Russian UI. The `/ru/` pages target the language, not only the RU storefront.

## 1. Language notes

- Phrasing: «увеличить громкость», «сделать громче», «тихий звук», «голосовое» (WhatsApp/Telegram),
  «запись экрана».
- Apple Russian names used: «Фото», «Файлы», **«Диктофон»** (Voice Memos), «Пункт управления»,
  «Запись экрана», «Поделиться», «Сохранить в Файлы», «Сохранить видео», «Настройки», iMovie.
- `glossary.tsv` has **no ru-RU column**; the Russian notes live in the `notes` field of `locale_voice`.
  Add a ru-RU column if Russian will be maintained.
- **Brand**: the store name «Увеличить Громкость» is the same as the search phrase, which is good for
  keyword matching but ambiguous in running text, so copy uses «приложение «Увеличить Громкость»» or
  «в приложении «Увеличить Громкость»». The rest of `build/ru.json` (hero, download, cta, footer, alts)
  still says «Increase Volume – Усиление звука» / «Увеличить громкость – Усиление звука»; pick one name.
- **Verify on a Russian iPhone** (not confirmed from Apple docs): «Настройки › Звуки, тактильные сигналы ›
  Безопасность наушников», «Музыка › Эквалайзер › Поздняя ночь», «Проверка звука», «Универсальный доступ ›
  Аудиовизуальный материал › Баланс», «Улучшить запись», «Аудиомикс», voice boost in «Подкасты»,
  iMovie «Новый проект».
- In-app labels used (from `build/ru.json`; verify against the app's strings): «Умножение громкости»,
  «Усилить громкость до ×10», «Улучшить качество звука», «Оригинал» / «Обработано», «Скачать обработанный».

## 2. Primary keywords (ru homepage)

| Keyword | Tier | Placement |
|---|---|---|
| как увеличить громкость видео (на iPhone) | High | `<title>`, meta, hero, guide 1 |
| увеличить громкость / приложение для увеличения громкости | High | `<title>` (store name), meta, FAQ |
| усилитель громкости / усилитель звука | Medium | Meta keywords, download section |

## 3. Long-tail keywords → guide pages (`/ru/instrukcii/`)

| # | Keyword | Tier | Slug | EN twin |
|---|---|---|---|---|
| 1 | как увеличить громкость видео на iPhone | High | kak-uvelichit-gromkost-video-na-iphone | how-to-make-a-video-louder-on-iphone |
| 2 | тихое голосовое WhatsApp / Telegram | Medium | tikhoe-golosovoe-whatsapp | how-to-make-a-whatsapp-voice-message-louder |
| 3 | тихий звук записи экрана iPhone | Medium | tikhiy-zvuk-zapisi-ekrana-iphone | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | как сделать запись диктофона громче | Low | kak-sdelat-zapis-diktofona-gromche | how-to-increase-voice-memo-volume-on-iphone |
| 5 | тихая музыка на iPhone | Medium | tikhaya-muzyka-na-iphone | how-to-make-music-louder-on-iphone |
| 6 | как увеличить громкость MP3 на iPhone | Medium | kak-uvelichit-gromkost-mp3-na-iphone | how-to-make-mp3-louder-on-iphone |
| 7 | почему видео на iPhone тихое | Low | pochemu-video-tikhoe | why-is-my-iphone-video-so-quiet |
| 8 | как сделать видео для TikTok громче | Low | kak-sdelat-video-tiktok-gromche | how-to-make-a-tiktok-video-louder |
| 9 | увеличить громкость видео в приложении «Фото» | Low | gromkost-video-v-prilozhenii-foto | how-to-boost-video-volume-from-the-photos-app |
| 10 | увеличить громкость без потери качества | Low | gromche-bez-poteri-kachestva | how-to-make-a-video-louder-without-losing-quality |
| 11 | iMovie громкость больше 500% | Niche | imovie-gromkost-bolshe-500 | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | тихий подкаст / аудиокнига на iPhone | Low | tikhiy-podkast-audiokniga-iphone | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Local references: guide 2 covers Telegram as well as WhatsApp; guides 5–6 name Яндекс Музыка / VK Музыка
as DRM sources; guide 8 mentions VK Клипы; guide 12 names ЛитРес, Яндекс Книги, Storytel.
Slugs are Latin transliteration. Anchors used by the homepage FAQ: `pochemu-video-tikhoe#vosproizvedenie`,
`gromche-bez-poteri-kachestva#konfidencialnost`.

## 4. Homepage FAQ → «Подробнее»

11 questions in the EN order (видео, WhatsApp, запись экрана, Диктофон, MP3, Фото, искажения, iMovie,
динамик, цена → App Store, конфиденциальность), each linking to its guide.
