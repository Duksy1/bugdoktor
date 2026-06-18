# BugDoktor — Tehnička garaža

Jedan čisti koncept za BugDoktor: zabavan, čvrst, radionički neo-brutalistički dizajn za tehnički medij o web stranicama, web shopovima, PC slaganju, hardwareu i softwareu.

## Što je unutra

- `index.html` — struktura stranice i tekstovi
- `blog.html` — indeks svih blog postova
- `blog/` — pojedinačni blog postovi
- `styles.css` — kompletan Šaraf garaža vizualni identitet
- `script.js` — mobilni meni, search filter, ticker i copy button
- `robots.txt`, `sitemap.xml`, `feed.xml`, `site.webmanifest`, `_headers`, `404.html` — SEO, feed, PWA i osnovne deploy datoteke

## Deploy na Cloudflare Pages

Ovo je običan statički HTML/CSS/JS projekt.

### Direct Upload

1. Raspakiraj ZIP.
2. U Cloudflareu otvori **Workers & Pages**.
3. Napravi novi Pages projekt.
4. Uploadaj cijelu mapu `bugdoktor-saraf-garaza`.

### GitHub deploy

1. Stavi sadržaj mape u GitHub repo.
2. Spoji repo u Cloudflare Pages.
3. Postavke:
   - Build command: ostavi prazno
   - Build output directory: `/` ili root projekta

## Uređivanje

- Savjete mijenjaš u `index.html`, u sekciji `#savjeti`.
- Blog postove mijenjaš u mapi `blog/`, a popis na `blog.html`.
- Boje mijenjaš u `styles.css`, u `:root` varijablama.
- Linkove za članke mijenjaš na karticama u `index.html` i `blog.html`.
- Ako domena nije `bugdoktor.hr`, zamijeni kanonske URL-ove u HTML datotekama, `sitemap.xml`, `robots.txt` i `feed.xml`.
