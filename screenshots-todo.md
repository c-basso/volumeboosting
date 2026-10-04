# Screenshots to replace (guides + homepage)

Guides use one screenshot per topic, the same slot in every locale (`/img/screenshots/<lang?>/N.webp`).
Recommended: a separate `img/guides/<en_slug>.webp` per guide (raw UI, 1179×2556 → 460×995 webp), and per-locale overrides where the UI/third-party app differs.

## Priority 1 — the image does not show what the guide is about
| # | Guide (EN slug) | Now | What the screenshot should show |
|---|---|---|---|
| 10 | why-is-my-iphone-video-so-quiet | 1 (promo «10x louder») | iOS **Settings › Sounds & Haptics › Headphone Safety** with «Reduce Loud Audio» (the #1 playback cause). Alt: Control Center with the Bluetooth output picker. |
| 8 | how-to-make-a-whatsapp-voice-message-louder | 6 (app share sheet) | WhatsApp chat: long-press on a voice message → **Forward → Share** sheet with Increase Volume in the app row. Locale variants: Telegram/Viber (ru, uk), LINE (th), Zalo (vi), WeChat «用其他应用打开» on a received file (zh). |
| 5 | how-to-make-a-tiktok-video-louder | 6 (app share sheet) | TikTok editor **Volume** panel with «Original sound» capped at 100% (the problem), ideally split with the app slider at ×5. Variants: Instagram Reels (hi, bn, ta, te, ml — TikTok banned in India), Douyin (zh). |
| 6 | how-to-boost-video-volume-from-the-photos-app | 6 (app share sheet) | **Photos app** video open → Share sheet with the **Increase Volume icon in the app row** (the entry point). Second choice: Photos Edit mode with only the mute speaker icon. |
| 2 | how-to-make-a-screen-recording-louder-on-iphone | 4 (slider) | **Control Center**: long-press on Screen Recording → **Microphone On** toggle. |
| 3 | how-to-increase-voice-memo-volume-on-iphone | 4 (slider) | **Voice Memos** recording → «…» → Share sheet with Increase Volume, or the Edit screen with the «Enhance Recording» magic wand. |
| 7 | imovie-volume-limit-how-to-boost-video-beyond-500-percent | 4 (slider) | Side-by-side: **iMovie clip volume slider at 500%** vs the app slider at ×10. |

## Priority 2 — acceptable, but a more specific image converts better
| # | Guide | Now | Better |
|---|---|---|---|
| 11 | how-to-make-music-louder-on-iphone | 3 (MP3 processing) | **Settings › Music › EQ** list with «Late Night» selected (or Sound Check toggle). |
| 12 | how-to-make-a-podcast-or-audiobook-louder-on-iphone | 7 (project list) | **Files app** folder with audiobook chapters/MP3 lecture → Share → Increase Volume. |
| 9 | how-to-make-a-video-louder-without-losing-quality | 5 (result screen) | Keep, but add a before/after **waveform** (quiet → boosted, no clipping) — no such screen exists in the store set. |

## OK as is
| 1 | how-to-make-a-video-louder-on-iphone | 2 (slider over video) | fits |
| 4 | how-to-make-mp3-louder-on-iphone | 3 (MP3 processing) | fits |

## Homepage «How it works»
| Step | Text | Now | Better |
|---|---|---|---|
| 1 | Import a file | 2 (slider over video) | Import screen / project list (7) or Photos share sheet with the app icon |
| 2 | Choose ×N, boost | 4 | fits |
| 3 | Save / share | 6 | fits |

## Cross-locale issues
- **English UI on non-English pages**: only de, es, fr, it, pt, ru, tr (and ca = es) have localized store screenshots; ~30 locales show English UI while the guides quote localized button labels («Множення гучності», «音量倍数»…). The app supports 31 languages → capture raw in-app screenshots per locale for guides (no marketing frame/headline needed).
- **Bad headlines in store frames** (also visible on the site): pt #5, tr #4 «SEÇİN MİKTAR ARTTIRMA» (reads as "don't increase").
- **Guides should use raw UI**, not marketing frames: headlines like «10x louder» duplicate the H1 and look like ads inside an article.
