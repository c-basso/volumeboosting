# Keyword research and page map — Hindi (hi) — volumeboosting.com/hi/

Goal: same as `keywords.md` — rank for Hindi and Hinglish queries from people in India with a quiet file
on their iPhone right now. Copy uses the polite «आप», as `build/hi.json` does.

Method (2026-10-03): the IN App Store listing in Hindi (`https://apps.apple.com/in/app/id6741472421?l=hi`),
the phrases the listing targets (वॉल्यूम बूस्टर, साउंड बूस्टर, आवाज़ बढ़ाएँ, plus English "volume booster",
"sound booster"), Indian query patterns — Devanagari («वीडियो की आवाज़ कैसे बढ़ाएँ», «आवाज़ कम») and the very
common Romanized Hinglish («video ki awaz kaise badhaye», «awaz kam») — Apple's Hindi app names where
verifiable (support.apple.com/hi-in), and the English map. No keyword-volume tool; tiers are directional.
Indian iPhone users often run iOS in English and search in Hinglish or English, so guide keywords mix
Devanagari and Hinglish, and slugs are Hinglish. Validate in Search Console (filter `/hi/`).

Tiers: **High** ≈ 1000+/mo, **Medium** ≈ 200–1000, **Low** ≈ 50–200, **Niche** < 50.

## 0. What the IN storefront shows in Hindi (2026-10-03)

- Localized: «वॉल्यूम बूस्टर: तेज़ साउंड» / «तेज़ म्यूज़िक और वीडियो»; **3,6★ from 5 ratings** (IN). The
  homepage still shows «4.5 ★ · App Store पर 121 रेटिंग» (global figure).
- **Listing bug to fix in App Store Connect:** the Hindi page shows «भाषा VI» and «Vietnamese और 30 अधिक»
  instead of Hindi.
- The description mixes Hindi with English terms ("volume booster", "audio booster") — that matches how
  Indians search, so it is fine for ASO.
- **Screenshots are not localized** (same 6 English images). The site keeps the shared
  `/img/screenshots/1–7.webp`; no `img/screenshots/hi/`.
- IAPs (IN, Hindi names): «वॉल्यूम बूस्टर साप्ताहिक» (weekly, free trial); «वॉल्यूम बूस्टर साउंड एम्पलीफायर»
  (annual, ₹ 699). Subscription only — but `download.price_note` says «… एक बार का लाइफ़टाइम प्लान»; fix if
  no lifetime purchase exists.

## 1. Language and market notes

- Phrasing: «आवाज़ बढ़ाएँ», «आवाज़ कम», «तेज़ करें», «वॉइस मैसेज», «स्क्रीन रिकॉर्डिंग»; Hinglish:
  «awaz badhaye», «awaz kam», «volume booster».
- **TikTok is banned in India**, so guide 8 (EN twin: TikTok) targets **Instagram Reels / YouTube Shorts**
  (slug `reels-video-ki-awaz-badhaye`) and mentions Moj and Josh; TikTok is named only for users abroad.
- Local services named: JioSaavn (DRM streaming), Pocket FM (audiobooks/audio series).
- Apple Hindi names used: तस्वीरें (Photos), फ़ाइल (Files — verified), **वॉइस मेमो** (Voice Memos — verified on
  support.apple.com/hi-in), कंट्रोल सेंटर, स्क्रीन रिकॉर्डिंग, शेयर करें, फ़ाइल में सहेजें, वीडियो सहेजें,
  सेटिंग्ज़, iMovie. Guide 5 notes the English names for users on English iOS.
- `glossary.tsv` has **no hi-IN column**; add one if Hindi will be maintained.
- **Brand mismatch**: store name «वॉल्यूम बूस्टर: तेज़ साउंड»; the rest of `build/hi.json` (hero, download, cta,
  footer, alts) still says «Increase Volume – ध्वनि बूस्ट». Meta, guides and FAQ now use the store name.
- **Verify on a Hindi iPhone** (not confirmed from Apple docs): «सेटिंग्ज़ › ध्वनि और हैप्टिक्स › हेडफ़ोन
  सुरक्षा › तेज़ ऑडियो कम करें», «संगीत › EQ › देर रात», «ध्वनि जाँच», «ऐक्सेसिबिलिटी › ऑडियो और विज़ुअल ›
  बैलेंस», «रिकॉर्डिंग बेहतर बनाएँ», «ऑडियो मिक्स», «संपादित करें», iMovie «नया प्रोजेक्ट शुरू करें».
- In-app labels used (from `build/hi.json`; verify against the app's strings): «वॉल्यूम गुणन», «वॉल्यूम ×10 तक
  बूस्ट करें», «ऑडियो गुणवत्ता सुधारें», मूल / प्रोसेस्ड, «प्रोसेस्ड डाउनलोड करें».
- Length checks: `hi` is in the validator's non-Latin set (description ≥ 110, ≤ 165); guide descriptions are
  139–155 characters.

## 2. Primary keywords (hi homepage)

| Keyword | Tier | Placement |
|---|---|---|
| iPhone पर वीडियो की आवाज़ कैसे बढ़ाएँ / video ki awaz kaise badhaye | High | `<title>`, meta, hero, guide 1 |
| वॉल्यूम बूस्टर / volume booster (app) | High | `<title>` (store name), meta, download |
| साउंड बूस्टर / sound booster | Medium | Meta keywords |

## 3. Long-tail keywords → guide pages (`/hi/guide/`)

| # | Keyword | Tier | Slug | EN twin |
|---|---|---|---|---|
| 1 | iPhone पर वीडियो की आवाज़ कैसे बढ़ाएँ | High | video-ki-awaz-kaise-badhaye-iphone | how-to-make-a-video-louder-on-iphone |
| 2 | WhatsApp वॉइस मैसेज की आवाज़ कम | Medium | whatsapp-voice-message-awaz-kam | how-to-make-a-whatsapp-voice-message-louder |
| 3 | iPhone स्क्रीन रिकॉर्डिंग की आवाज़ कम | Medium | screen-recording-awaz-kam-iphone | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | वॉइस मेमो की आवाज़ कैसे बढ़ाएँ | Low | voice-memo-awaz-badhaye | how-to-increase-voice-memo-volume-on-iphone |
| 5 | iPhone पर गाने की आवाज़ कम | Medium | iphone-music-awaz-kam | how-to-make-music-louder-on-iphone |
| 6 | iPhone पर MP3 की आवाज़ कैसे बढ़ाएँ | Medium | mp3-ki-awaz-badhaye-iphone | how-to-make-mp3-louder-on-iphone |
| 7 | iPhone वीडियो की आवाज़ कम क्यों है | Low | video-ki-awaz-kam-kyon | why-is-my-iphone-video-so-quiet |
| 8 | Reels वीडियो की आवाज़ कैसे बढ़ाएँ | Medium | reels-video-ki-awaz-badhaye | how-to-make-a-tiktok-video-louder |
| 9 | तस्वीरें ऐप में वीडियो की आवाज़ बढ़ाएँ | Low | photos-app-se-video-awaz-badhaye | how-to-boost-video-volume-from-the-photos-app |
| 10 | बिना क्वालिटी खराब किए आवाज़ बढ़ाएँ | Low | bina-quality-kharab-awaz-badhaye | how-to-make-a-video-louder-without-losing-quality |
| 11 | iMovie वॉल्यूम 500% से ज़्यादा | Niche | imovie-volume-500-se-zyada | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | iPhone पर पॉडकास्ट/ऑडियोबुक की आवाज़ कम | Low | podcast-audiobook-awaz-kam-iphone | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Anchors used by the homepage FAQ: `video-ki-awaz-kam-kyon#playback`, `bina-quality-kharab-awaz-badhaye#privacy`
(Latin ids, as in ja/ko).

## 4. Homepage FAQ → «और जानें»

11 questions in the EN order (वीडियो, WhatsApp, स्क्रीन रिकॉर्डिंग, वॉइस मेमो, MP3, तस्वीरें, फटना, iMovie,
स्पीकर, कीमत → App Store, प्राइवेसी), each linking to its guide.
