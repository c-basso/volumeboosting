# Keyword research and page map — Spanish (es) — volumeboosting.com/es/

Goal: same as `keywords.md` — rank for Spanish queries from people with a quiet file on their
iPhone right now, and send them to the App Store. Spanish is the largest non-English audience
for this site (Spain + Mexico + the rest of Latin America + US Hispanics).

Method (2026-10-02): Spanish SERP checks per query, the ES and MX App Store listings (both
localized: "Aumentar Volumen Audio" / "Subir Volumen Video & MP3"), Apple's Spanish app and
settings names, and the English map. No keyword-volume tool; tiers are directional (Spanish
combined ≈ 1/3–1/4 of US English demand for these intents). Validate in Search Console
(filter: page contains `/es/`; break down by country ES vs MX) after 4–6 weeks.

Tiers: **High** ≈ 3k+/mo, **Medium** ≈ 500–3k, **Low** ≈ 50–500, **Niche** < 50.

## 0. What the storefronts show

- ES: localized title **Aumentar Volumen Audio**, subtitle **Subir Volumen Video & MP3**, 5.0★ (6).
- MX: same localized title, 4.28★ (29), separate es-MX screenshot set. Mexico already produces
  more ratings than Spain; the Spanish pages must work for both ("vídeo"/"video", "audios").
- ES screenshots (Spanish headlines) are now in `img/screenshots/es/`. Screenshot 5 reads
  "Escuche procesado resultado" (wrong word order) — fix in App Store Connect.
- The site's Spanish brand line ("Increase Volume – Potencia de sonido") differs from the store
  title; pages mention "Aumentar Volumen" so searchers recognise the listing.

## 1. SERP observations

- "cómo subir el volumen de un vídeo en iPhone": results are generic system-volume articles
  (Tecnobits), EaseUS, Apple Community threads. No page answers boosting the file itself.
- "audios de WhatsApp se escuchan bajo": huge LatAm query family; results are Android-heavy
  (Androidayuda, Samsung community, La República). An iPhone-specific page has room.
- "grabación de pantalla se escucha bajo / sin sonido": Apple Community threads, Wondershare,
  FAQ farms. Weak.
- "notas de voz" content (Applesfera, Profesional Review) covers recording quality, not boosting.
- Phrasing: "subir el volumen" (most common, ES + LatAm), "aumentar el volumen" (store wording),
  "se escucha bajo / muy bajo / bajito" (problem phrase, esp. LatAm), "más alto / más fuerte".
  "Vídeo" (ES) vs "video" (LatAm): copy uses "vídeo" (matches site), slugs/keywords use "video".
- Apple's Spanish names used: Fotos, Archivos, Notas de Voz, Mensajes, Centro de control,
  Grabación de pantalla, Ajustes › Sonidos y vibraciones › Seguridad de los auriculares › Reducir
  sonidos fuertes, Ajustes › Música › Ajuste de volumen (Sound Check), Mejorar grabación.

## 2. Primary keywords (es homepage)

| Keyword | Tier | Intent | Placement |
|---|---|---|---|
| subir volumen video iPhone / aumentar volumen de un vídeo | High | How-to | `<title>`, meta, hero, guide 1 |
| app para subir volumen / amplificador de volumen iPhone | Medium | Commercial | `<title>`, download section |
| subir volumen audio / MP3 | Medium | How-to | Meta keywords, FAQ |

Homepage `<title>`: `Subir volumen de vídeos en iPhone – Aumentar Volumen 10×`

## 3. Long-tail keywords → one Spanish guide each (`/es/guias/<slug>/`)

| # | Slug | Target keyword | Secondary | Tier | EN twin |
|---|---|---|---|---|---|
| 1 | `como-subir-el-volumen-de-un-video-en-iphone` | cómo subir el volumen de un vídeo en iPhone | aumentar volumen video, vídeo se escucha bajo | High | how-to-make-a-video-louder-on-iphone |
| 2 | `audios-de-whatsapp-se-escuchan-bajo-iphone` | audios de WhatsApp se escuchan bajo | subir volumen audio WhatsApp, nota de voz WhatsApp bajita | Medium | how-to-make-a-whatsapp-voice-message-louder |
| 3 | `grabacion-de-pantalla-se-escucha-bajo-iphone` | grabación de pantalla se escucha bajo | grabación de pantalla sin sonido, con audio | Medium | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | `subir-volumen-nota-de-voz-iphone` | subir volumen nota de voz | grabación de voz se escucha bajo, Mejorar grabación | Medium | how-to-increase-voice-memo-volume-on-iphone |
| 5 | `musica-se-escucha-bajo-iphone` | música se escucha bajo iPhone | Ajuste de volumen, Reducir sonidos fuertes | Medium | how-to-make-music-louder-on-iphone |
| 6 | `subir-volumen-mp3-iphone` | subir volumen MP3 | aumentar volumen MP3, amplificar audio | Medium | how-to-make-mp3-louder-on-iphone |
| 7 | `por-que-mi-video-de-iphone-se-escucha-bajo` | por qué mi vídeo se escucha bajo | micrófono iPhone bajo | Low | why-is-my-iphone-video-so-quiet |
| 8 | `subir-volumen-video-tiktok` | subir volumen vídeo TikTok | Reels se escucha bajo | Low | how-to-make-a-tiktok-video-louder |
| 9 | `aumentar-volumen-video-desde-fotos` | aumentar volumen vídeo Fotos | app Fotos volumen | Low | how-to-boost-video-volume-from-the-photos-app |
| 10 | `subir-volumen-sin-perder-calidad` | subir volumen sin perder calidad | sin distorsión, se satura | Low | how-to-make-a-video-louder-without-losing-quality |
| 11 | `imovie-volumen-mas-de-500` | iMovie subir volumen | iMovie más de 500 % | Niche | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | `subir-volumen-podcast-audiolibro-iphone` | audiolibro se escucha bajo | subir volumen podcast, grabación de clase | Low | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

### Deliberately excluded
- "subir volumen del altavoz iPhone", "iPhone más volumen del máximo": system-volume intent;
  every page says the app boosts the file, not the speaker.
- Android / Chrome boosters; Spotify / YouTube (DRM).

## 4. FAQ on the es homepage (each with «Más información»)

Video (1), WhatsApp audios (2), screen recording (3), voice memo (4), MP3 (6), Fotos (9),
distortion (10), iMovie (11), speaker expectation (7 → #reproduccion), price (App Store),
privacy (10 → #privacidad).

## 5. In-app labels used in Spanish copy

From `build/es.json`: «Multiplicación del volumen», «Potenciar volumen a ×N», «Mejorar calidad de
audio», Original / Procesado, «Descargar procesado». The screenshots show the English UI, so
**verify** against the app's Spanish strings.
