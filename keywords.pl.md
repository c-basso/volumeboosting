# Keyword research and page map — Polish (pl) — volumeboosting.com/pl/

Goal: same as `keywords.md` — rank for Polish queries from people with a quiet file on their iPhone
right now. Copy uses the informal «Ty» form per `glossary.tsv`.

Method (2026-10-02): the PL App Store listing (localized with `?l=pl`: "Wzmacniacz – Volume Boost" /
"Głośniejsza muzyka i wideo"), the phrases the listing targets (wzmacniacz głośności, wzmacniacz dźwięku,
wzmacniacz muzyki, zwiększ głośność, podbij dźwięk), Polish query patterns («jak zwiększyć głośność …»,
«jak zgłośnić …», «cichy …», «za cichy …»), Apple's Polish app names where verifiable
(support.apple.com/pl-pl), and the English map. No keyword-volume tool; tiers are directional
(Polish ≈ 1/10–1/20 of US English demand; iPhone share in PL is lower than in the Nordics, so expect
less than the population suggests). Validate in Search Console (filter `/pl/`).

Tiers: **High** ≈ 500+/mo, **Medium** ≈ 100–500, **Low** ≈ 20–100, **Niche** < 20.

## 0. What the PL storefront shows (2026-10-02)

- Polish title/subtitle and description; not enough ratings in the PL storefront. **The homepage still
  shows «4,5 ★ · 121 ocen»** (global figure in hero/download/cta) — keep only if you accept a non-PL rating.
- **Screenshots are not localized** (same 6 English images). The site keeps the shared
  `/img/screenshots/1–7.webp`; no `img/screenshots/pl/`.
- IAPs (PL): «Wzmacniacz głośności na tydzień» (weekly, free trial); «Wzmacniacz głośności i dźwięku»
  (annual, 69,90 zł). Subscription only — but `download.price_note` says «… lub jednorazowy plan
  dożywotni»; fix if no lifetime purchase exists.
- The «Dostawca» field shows the developer name in Cyrillic («Владимир Ивахненко»), while «Deweloper»
  shows «Vladimir Ivakhnenko». Cosmetic, but worth aligning in App Store Connect.

## 1. Language notes

- Phrasing: «jak zwiększyć głośność», «zgłośnić», «cichy / za cichy», «wiadomość głosowa» (WhatsApp),
  «nagrywanie ekranu».
- Apple Polish names used: Zdjęcia, Pliki, **Dyktafon** (Voice Memos — verified on support.apple.com/pl-pl;
  `glossary.tsv` says «notatki głosowe», update it), Centrum sterowania, Nagrywanie ekranu, Udostępnij,
  Zachowaj w Plikach, Zachowaj wideo, iMovie.
- **Brand mismatch**: the store name is «Wzmacniacz – Volume Boost», but the rest of `build/pl.json`
  (hero, download, cta, footer, alts) still says «Increase Volume – Wzmocnienie dźwięku» / «Zwiększ
  głośność». Meta, guides and FAQ now use «Wzmacniacz – Volume Boost» (first mention) and «Volume Boost»
  (short form, avoids declining "Wzmacniacz"). Pick one name and replace the rest.
- **Verify on a Polish iPhone** (not confirmed from Apple docs): «Ustawienia › Dźwięki i haptyka ›
  Bezpieczeństwo słuchawek», «Muzyka › Korektor › Późny wieczór», «Wyrównywanie głośności» (Sound Check),
  «Dostępność › Audio i wizualne › Balans», «Ulepsz nagranie», «Miks audio», voice boost in Podcasty,
  iMovie «Rozpocznij nowy projekt».
- In-app labels used (from `build/pl.json`; verify against the app's strings): «Mnożnik głośności»,
  «Wzmocnij głośność do ×10», «Popraw jakość dźwięku», Oryginał / Przetworzony, «Pobierz przetworzony».

## 2. Primary keywords (pl homepage)

| Keyword | Tier | Placement |
|---|---|---|
| jak zwiększyć głośność filmu na iPhonie | Medium | `<title>`, meta, hero, guide 1 |
| wzmacniacz głośności / wzmacniacz dźwięku | Medium | meta, download section (store name) |
| zgłośnić wideo / zwiększyć głośność | Medium | Meta keywords, FAQ |
| aplikacja do zwiększania głośności | Low | Meta keywords |

## 3. Long-tail keywords → guide pages (`/pl/poradniki/`)

| # | Keyword | Tier | Slug | EN twin |
|---|---|---|---|---|
| 1 | jak zwiększyć głośność filmu na iPhonie | Medium | jak-zwiekszyc-glosnosc-filmu-iphone | how-to-make-a-video-louder-on-iphone |
| 2 | cicha wiadomość głosowa WhatsApp | Medium | cicha-wiadomosc-glosowa-whatsapp | how-to-make-a-whatsapp-voice-message-louder |
| 3 | nagrywanie ekranu cichy dźwięk iPhone | Low | nagrywanie-ekranu-cichy-dzwiek-iphone | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | jak zgłośnić nagranie z Dyktafonu | Low | glosniejsze-nagranie-dyktafon | how-to-increase-voice-memo-volume-on-iphone |
| 5 | cicha muzyka na iPhonie | Medium | cicha-muzyka-iphone | how-to-make-music-louder-on-iphone |
| 6 | jak zwiększyć głośność MP3 na iPhonie | Low | jak-zwiekszyc-glosnosc-mp3-iphone | how-to-make-mp3-louder-on-iphone |
| 7 | dlaczego film na iPhonie jest cichy | Low | dlaczego-film-jest-cichy | why-is-my-iphone-video-so-quiet |
| 8 | jak zgłośnić film na TikToka | Low | glosniejszy-film-tiktok | how-to-make-a-tiktok-video-louder |
| 9 | zwiększyć głośność filmu w aplikacji Zdjęcia | Low | glosnosc-filmu-w-aplikacji-zdjecia | how-to-boost-video-volume-from-the-photos-app |
| 10 | zwiększyć głośność bez utraty jakości | Niche | glosniej-bez-utraty-jakosci | how-to-make-a-video-louder-without-losing-quality |
| 11 | iMovie głośność powyżej 500% | Niche | imovie-glosnosc-powyzej-500 | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | cichy podcast / audiobook na iPhonie | Low | cichy-podcast-audiobook-iphone | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Guide 12 names the Polish audiobook services (Audioteka, Storytel, Empik Go) as DRM-protected sources.
Anchors used by the homepage FAQ: `dlaczego-film-jest-cichy#odtwarzanie`, `glosniej-bez-utraty-jakosci#prywatnosc`.

## 4. Homepage FAQ → «Dowiedz się więcej»

11 questions in the EN order (wideo, WhatsApp, nagranie ekranu, Dyktafon, MP3, Zdjęcia, przesterowanie,
iMovie, głośnik, cena → App Store, prywatność), each linking to its guide.
