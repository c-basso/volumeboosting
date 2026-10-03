# Keyword research and page map — Bengali (bn) — volumeboosting.com/bn/

Goal: same as `keywords.md` — rank for Bengali queries (Bangladesh and West Bengal, India) from people with
a quiet file on their iPhone right now. Copy uses the polite «আপনি», as `build/bn.json` does.

Method (2026-10-03): the App Store listing with `?l=bn` (IN storefront), Bengali query patterns («ভিডিওর
সাউন্ড কীভাবে বাড়াবেন», «আওয়াজ বাড়ানোর উপায়», «আওয়াজ কম», «ভলিউম বাড়ানোর অ্যাপ»), Apple's Bengali names
where verifiable (support.apple.com/bn-in), and the English map. No keyword-volume tool; tiers are directional.
Validate in Search Console (filter `/bn/`).

Tiers: **High** ≈ 500+/mo, **Medium** ≈ 100–500, **Low** ≈ 20–100, **Niche** < 20.

## 0. What the storefronts show (2026-10-03)

- **Bangladesh storefront**: `https://apps.apple.com/bd/app/id6741472421?l=bn` **redirects to the US
  listing** — the app appears not to be available in the BD storefront. `bn.json` sets `og_locale` to
  `bn_BD`; if Bangladesh is a target market, enable the BD storefront in App Store Connect (pricing &
  availability).
- **India storefront with `?l=bn`**: **not localized** — English title «Increase Volume Sound», English
  description; 3,6★ from 5 ratings; annual subscription ₹ 699. The language field shows «ZH + ৩০ আরও»
  (another wrong-language display, like CA/HI). The site keeps the name «Increase Volume».
  **Adding a Bengali App Store localization is the biggest ASO gap** for this locale.
- **Screenshots are not localized** (same 6 English images). The site keeps the shared
  `/img/screenshots/1–7.webp`; no `img/screenshots/bn/`.
- `download.price_note` says «… এককালীন লাইফটাইম প্ল্যান»; the store lists only subscriptions. The homepage
  rating line «4.5 ★ · 121টি রেটিং» is the global figure. The FAQ price answer avoids naming a currency
  (BDT vs INR).

## 1. Language and market notes

- Phrasing: «আওয়াজ / সাউন্ড বাড়ানো», «আওয়াজ কম», «আস্তে বাজে», «জোরালো করা», «ভয়েস মেসেজ», «স্ক্রিন রেকর্ডিং».
- **Spelling**: `bn.json` uses «ভলিয়াম» (in-app labels); the more common search spelling is «ভলিউম». Prose and
  keywords use «ভলিউম»; quoted UI labels keep «ভলিয়াম» to match the homepage. Consider unifying to «ভলিউম».
- Messaging: WhatsApp, Messenger and imo are all common; guide 2 mentions Messenger and imo. Guide 8 keeps
  TikTok (available in Bangladesh) and adds Reels/Shorts and Facebook Reels, since Indian users can't use TikTok.
- Apple Bengali names used: ফটো (Photos), ফাইল (Files), **ভয়েস মেমো** (Voice Memos — verified on
  support.apple.com/bn-in), কন্ট্রোল সেন্টার, স্ক্রিন রেকর্ডিং, শেয়ার, ফাইলে সেভ করুন, ভিডিও সেভ করুন, সেটিংস.
- `glossary.tsv` has **no bn column**; add one if Bengali will be maintained.
- **Verify on a Bengali iPhone** (not confirmed from Apple docs): «সেটিংস › শব্দ ও হ্যাপটিক্স › হেডফোন সুরক্ষা ›
  জোরালো অডিও কমান», «মিউজিক › EQ › গভীর রাত», «সাউন্ড চেক», «অ্যাক্সেসিবিলিটি › অডিও ও ভিজ্যুয়াল ›
  ব্যালান্স», «রেকর্ডিং উন্নত করুন», «অডিও মিক্স», iMovie «নতুন প্রজেক্ট শুরু করুন».
- In-app labels used (from `build/bn.json`; verify against the app's strings): «ভলিয়াম গুণন», «ভলিয়াম ×10
  পর্যন্ত বুস্ট করুন», «অডিও গুণমান উন্নত করুন», আসল / প্রসেসড, «প্রসেসড ডাউনলোড করুন».
- Length checks: `bn` is in the validator's non-Latin set (description ≥ 110, ≤ 165); guide descriptions
  are 132–147 characters.

## 2. Primary keywords (bn homepage)

| Keyword | Tier | Placement |
|---|---|---|
| iPhone-এ ভিডিওর সাউন্ড কীভাবে বাড়াবেন / ভিডিওর আওয়াজ বাড়ানোর উপায় | Medium | `<title>`, meta, hero, guide 1 |
| ভলিউম বাড়ানোর অ্যাপ / ভলিউম বুস্টার | Medium | Meta keywords, FAQ |
| সাউন্ড বুস্টার | Low | Meta keywords |

## 3. Long-tail keywords → guide pages (`/bn/guide/`)

| # | Keyword | Tier | Slug | EN twin |
|---|---|---|---|---|
| 1 | iPhone-এ ভিডিওর সাউন্ড কীভাবে বাড়াবেন | Medium | iphone-video-r-awaj-barano | how-to-make-a-video-louder-on-iphone |
| 2 | WhatsApp ভয়েস মেসেজের আওয়াজ কম | Low | whatsapp-voice-message-awaj-kom | how-to-make-a-whatsapp-voice-message-louder |
| 3 | iPhone স্ক্রিন রেকর্ডিংয়ে আওয়াজ কম | Low | screen-recording-awaj-kom-iphone | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | ভয়েস মেমোর আওয়াজ কীভাবে বাড়াবেন | Low | voice-memo-awaj-barano | how-to-increase-voice-memo-volume-on-iphone |
| 5 | iPhone-এ গানের আওয়াজ কম | Low | iphone-gan-er-awaj-kom | how-to-make-music-louder-on-iphone |
| 6 | iPhone-এ MP3-এর আওয়াজ কীভাবে বাড়াবেন | Low | mp3-er-awaj-barano-iphone | how-to-make-mp3-louder-on-iphone |
| 7 | iPhone ভিডিওর আওয়াজ কম কেন | Low | video-r-awaj-kom-keno | why-is-my-iphone-video-so-quiet |
| 8 | TikTok / Reels ভিডিওর আওয়াজ বাড়ানো | Low | tiktok-reels-video-awaj-barano | how-to-make-a-tiktok-video-louder |
| 9 | ফটো অ্যাপে ভিডিওর আওয়াজ বাড়ানো | Niche | photos-app-theke-video-awaj-barano | how-to-boost-video-volume-from-the-photos-app |
| 10 | কোয়ালিটি না কমিয়ে আওয়াজ বাড়ানো | Niche | quality-na-komiye-awaj-barano | how-to-make-a-video-louder-without-losing-quality |
| 11 | iMovie ভলিউম ৫০০%-এর বেশি | Niche | imovie-volume-500-er-beshi | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | iPhone-এ পডকাস্ট/অডিওবুকের আওয়াজ কম | Niche | podcast-audiobook-awaj-kom-iphone | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Slugs are Latin romanization. Anchors used by the homepage FAQ: `video-r-awaj-kom-keno#playback`,
`quality-na-komiye-awaj-barano#privacy` (Latin ids, as in ja/ko/hi).

## 4. Homepage FAQ → «আরও জানুন»

11 questions in the EN order (ভিডিও, WhatsApp, স্ক্রিন রেকর্ডিং, ভয়েস মেমো, MP3, ফটো, ফাটা আওয়াজ, iMovie,
স্পিকার, দাম → App Store, প্রাইভেসি), each linking to its guide.
