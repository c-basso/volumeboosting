# Keyword research and page map — Portuguese (pt, Brazil) — volumeboosting.com/pt/

Goal: same as `keywords.md` — rank for Brazilian Portuguese queries from people with a quiet file on
their iPhone right now. Copy uses «você» per `glossary.tsv`; `og_locale` is `pt_BR`.

Method (2026-10-02): the BR App Store listing (`https://apps.apple.com/br/app/id6741472421?l=pt-BR`; the
same URL without `?l=pt-BR` returned «Ocorreu um erro» in the browser), the phrases the listing itself
targets (aumentar volume, amplificador de volume, aumentador de volume, booster de volume, aumentar som,
amplificador de som, aumentar volume de vídeo / de música / de áudio / MP3), Brazilian query patterns
(«como aumentar o volume de …», «… baixo», «áudio do WhatsApp baixo»), Apple's pt-BR app names where
verifiable, and the English map. No keyword-volume tool; tiers are directional (Brazilian Portuguese ≈
1/3–1/5 of US English demand for these queries — a large market; iPhone share is lower than Android, but
"aumentar volume" queries are very common). Validate in Search Console (filter `/pt/`).

Tiers: **High** ≈ 1000+/mo, **Medium** ≈ 200–1000, **Low** ≈ 50–200, **Niche** < 50.

## 0. What the BR storefront shows (2026-10-02)

- Localized: «Aumentar Volume Áudio» / «Amplificador Som & Música»; **4,6★ from 31 ratings**. The homepage
  still shows «4,5 ★ · 121 avaliações» (global figure) — consider showing the BR 4,6★ (31) instead.
- **Screenshots are localized** (Portuguese headlines; the app UI inside is still English). Downloaded the
  6 images to `img/screenshots/pt/1–6.webp`; `7.webp` is a copy of the shared one (the listing has 6).
  `build.js` picks the folder up automatically; `pt.json` hero and screenshot items now point at it.
- Headline note: screenshot 5 reads «OUVIR PROCESSADO RESULTADO», which is ungrammatical; suggest
  «OUÇA O RESULTADO PROCESSADO».
- IAPs (BR): «Amplificador de volume semanal» (weekly, free trial); «Amplificador de volume e som»
  (annual, R$ 96,90). Subscription only — but `download.price_note` says «… plano vitalício com
  pagamento único»; fix if no lifetime purchase exists.
- The listing's description ends with «Terms of Use» / «Privacy Policy» in English → «Termos de uso» /
  «Política de privacidade».
- One review visible: «Bom» — «Aplicativo do pp, 10/10» (27/08/2025).

## 1. Language notes

- Phrasing: «aumentar o volume», «som baixo», «deixar mais alto», «áudio do WhatsApp» (Brazilians say
  «áudio», not «mensagem de voz»), «gravação de tela».
- Apple pt-BR names used: Fotos, Arquivos, **Gravador** (Voice Memos — Apple's App Store page
  apps.apple.com/br/app/gravador/id1069512134; `glossary.tsv` says «notas de voz», update it), Central de
  Controle, Gravação de Tela, Compartilhar, Salvar em Arquivos, Salvar Vídeo, iMovie.
- **Brand mismatch**: the store name is «Aumentar Volume Áudio», but the rest of `build/pt.json` (hero,
  download, cta, footer, alts) still says «Increase Volume – Reforço de som» / «Aumentar volume – Reforço
  de som». Meta, guides and FAQ now use «Aumentar Volume Áudio» / «o app Aumentar Volume» (the «app»
  prefix keeps the brand distinct from the verb phrase). Pick one name and replace the rest.
- **Verify on a Brazilian iPhone** (not confirmed from Apple docs): «Ajustes › Sons e Tátil › Segurança dos
  Fones de Ouvido › Reduzir Áudio Alto», «Música › Equalizador › Noite», «Verificação de Som»,
  «Acessibilidade › Áudio e Visual › Equilíbrio», «Melhorar Gravação», «Mix de Áudio», voice boost in
  Podcasts, iMovie «Iniciar Novo Projeto».
- In-app labels used (from `build/pt.json`; verify against the app's strings): «Multiplicação do volume»,
  «Amplificar volume para ×10», «Melhorar qualidade do áudio», Original / Processado, «Baixar processado».

## 2. Primary keywords (pt homepage)

| Keyword | Tier | Placement |
|---|---|---|
| como aumentar o volume de vídeo (no iPhone) | High | `<title>`, meta, hero, guide 1 |
| aumentar volume / app para aumentar volume | High | Meta keywords, FAQ |
| amplificador de volume / aumentador de volume | Medium | Meta keywords, download section |
| aumentar som | Medium | Meta keywords |

## 3. Long-tail keywords → guide pages (`/pt/guias/`)

| # | Keyword | Tier | Slug | EN twin |
|---|---|---|---|---|
| 1 | como aumentar o volume de um vídeo no iPhone | High | como-aumentar-volume-de-video-no-iphone | how-to-make-a-video-louder-on-iphone |
| 2 | áudio do WhatsApp baixo | High | audio-do-whatsapp-baixo | how-to-make-a-whatsapp-voice-message-louder |
| 3 | gravação de tela com som baixo iPhone | Medium | gravacao-de-tela-com-som-baixo-iphone | how-to-make-a-screen-recording-louder-on-iphone |
| 4 | aumentar volume de gravação do Gravador | Low | aumentar-volume-do-gravador-iphone | how-to-increase-voice-memo-volume-on-iphone |
| 5 | música baixa no iPhone | Medium | musica-baixa-no-iphone | how-to-make-music-louder-on-iphone |
| 6 | aumentar volume de MP3 no iPhone | Medium | aumentar-volume-de-mp3-no-iphone | how-to-make-mp3-louder-on-iphone |
| 7 | por que meu vídeo está com som baixo | Low | por-que-meu-video-esta-baixo | why-is-my-iphone-video-so-quiet |
| 8 | aumentar volume de vídeo do TikTok | Medium | aumentar-volume-de-video-do-tiktok | how-to-make-a-tiktok-video-louder |
| 9 | aumentar volume de vídeo no app Fotos | Low | aumentar-volume-de-video-no-app-fotos | how-to-boost-video-volume-from-the-photos-app |
| 10 | aumentar volume sem perder qualidade | Low | aumentar-volume-sem-perder-qualidade | how-to-make-a-video-louder-without-losing-quality |
| 11 | iMovie volume acima de 500% | Niche | imovie-volume-acima-de-500 | imovie-volume-limit-how-to-boost-video-beyond-500-percent |
| 12 | podcast / audiolivro baixo no iPhone | Low | podcast-audiolivro-baixo-iphone | how-to-make-a-podcast-or-audiobook-louder-on-iphone |

Guide 8 also names Kwai (popular in Brazil); guide 12 names Audible, Storytel and Ubook as DRM sources.
Anchors used by the homepage FAQ: `por-que-meu-video-esta-baixo#reproducao`,
`aumentar-volume-sem-perder-qualidade#privacidade`.

## 4. Homepage FAQ → «Saiba mais»

11 questions in the EN order (vídeo, WhatsApp, gravação de tela, Gravador, MP3, Fotos, distorção, iMovie,
alto-falante, preço → App Store, privacidade), each linking to its guide.
