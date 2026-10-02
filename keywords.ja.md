# Keyword research and page map — Japanese (ja) — volumeboosting.com/ja/

Goal: same as `keywords.md` — rank for Japanese queries from people with a quiet file on their
iPhone right now. Japan is iPhone-heavy (≈ half of smartphones), so this is a high-value locale.
Copy uses です・ます per `glossary.tsv`.

Method (2026-10-02): the JP App Store listing (localized: "音量ブースター - 音楽も動画も" /
"サウンド・オーディオを最大10倍に"), the phrases the listing targets (音量アップ, 音量ブースター,
オーディオブースター, 動画の音量アップ), the existing ja homepage target (録音した音を大きくするアプリ),
Japanese query patterns (「〇〇 音量 上げる」「〇〇 音が小さい」), and the English map. No keyword-volume
tool; tiers are directional (Japanese ≈ 1/3–1/5 of US English demand for these intents).
Validate in Search Console (filter `/ja/`).

Length rules: the SEO validator treats ja as non-Latin (title 25–70 chars; description ≥110 to avoid
a "short" warning, ≤165). og:description must be 110–160. Japanese SERPs show ≈30–35 title chars and
≈100–120 description chars, so key terms are front-loaded.

Tiers: **High** ≈ 2k+/mo, **Medium** ≈ 300–2k, **Low** ≈ 50–300, **Niche** < 50.

## 0. What the JP storefront shows (2026-10-02)

- Japanese title/subtitle and description; 4.3★ from 6 ratings.
- One review (4月7日) reports album sync not showing in the gallery picker ("アルバムがありません") and asks for
  a cache-clear option and a contact form; the developer replied asking to update. Worth confirming the fix.
- **Screenshots are not localized**: the same 6 English images as he/hr/hu/id. The site keeps the
  shared `/img/screenshots/1–7.webp`; no `img/screenshots/ja/`.
- IAPs (JP): weekly subscription with free trial; annual subscription ¥3,080. Subscription only.

## 1. Language notes

- Patterns: 「動画 音量 上げる」「録音 音を大きくする」「音が小さい」「音量アップ アプリ」. Messaging in Japan is
  **LINE**-first, so guide 2 targets LINE and WhatsApp together.
- Apple Japanese names used: 写真, ファイル, ボイスメモ, コントロールセンター, 画面収録, 共有, iMovie,
  「設定」›「サウンドと触覚」›「ヘッドフォンの安全性」›「大きな音を抑える」, 「ミュージック」›「音量の自動調整」,
  「録音を補正」, 「無音部分をスキップ」, 「スタジオ音質の声」, 「Face IDとパスコード」, 「スクリーンタイム」,
  「アクセシビリティ」›「オーディオとビジュアル」›「バランス」. **Verify on a Japanese iPhone**, especially the EQ
  preset names (kept as "Late Night" / "Loudness") and the exact LINE menu path for sharing a voice message.

## 2. Primary keywords (ja homepage)

| Keyword | Tier | Placement |
|---|---|---|
| iPhone 動画 音量 上げる | High | `<title>`, meta, hero, guide 1 |
| 録音した音を大きくするアプリ / ボイスメモ 音 大きくする | Medium | `<title>`, meta keywords, guide 4 |
| 音量ブースター / 音量アップ アプリ | Medium | `<title>` (store name), download section |

Homepage `<title>`: `iPhoneで動画・録音の音量を上げるアプリ｜音量ブースター（最大10倍）`

## 3. Long-tail keywords → one Japanese guide each (`/ja/guide/<slug>/`)

| # | Slug | Target keyword | EN twin |
|---|---|---|---|
| 1 | `iphone-douga-onryou-ageru` | iPhone 動画 音量 上げる | how-to-make-a-video-louder-on-iphone |
| 2 | `line-onsei-message-oto-chiisai` | LINE 音声メッセージ 音が小さい | how-to-make-a-whatsapp-voice-message-louder |
| 3 | `gamen-shuuroku-oto-chiisai` | 画面収録 音が小さい | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | `voice-memo-oto-ookiku` | ボイスメモ 音を大きくする | how-to-increase-voice-memo-volume-on-iphone |
| 5 | `iphone-ongaku-oto-chiisai` | iPhone 音楽 音が小さい | how-to-make-music-louder-on-iphone |
| 6 | `mp3-onryou-ageru-iphone` | MP3 音量 上げる | how-to-make-mp3-louder-on-iphone |
| 7 | `douga-oto-chiisai-riyuu` | 動画 音が小さい 原因 | why-is-my-iphone-video-so-quiet |
| 8 | `tiktok-douga-onryou-ageru` | TikTok 動画 音量 上げる | how-to-make-a-tiktok-video-louder |
| 9 | `shashin-app-douga-onryou` | 写真アプリ 動画 音量 上げる | how-to-boost-video-volume-from-the-photos-app |
| 10 | `onshitsu-ochizu-onryou-ageru` | 音質を落とさず 音量 上げる | how-to-make-a-video-louder-without-losing-quality |
| 11 | `imovie-500-ijou` | iMovie 音量 上げる | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | `podcast-audiobook-onryou-ageru` | オーディオブック 音が小さい | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Slugs are romaji (stable URLs without percent-encoding).

### Deliberately excluded
- 「iPhone スピーカー 音量 限界 突破」: system-volume intent; every page says the app boosts the file.
  Android boosters; Spotify/YouTube (DRM).

## 4. FAQ on the ja homepage (each with 「詳しく見る」)

Video (1), LINE/WhatsApp (2), screen recording (3), ボイスメモ (4), MP3 (6), 写真 (9), distortion (10),
iMovie (11), speaker expectation (7 → #saisei), price (App Store), privacy (10 → #privacy).
