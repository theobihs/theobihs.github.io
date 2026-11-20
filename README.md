# The Obih Adventures

Our family website. It lives at **https://theobihs.github.io** (once it's set up).

Everything you'll ever change is in **`site-data.js`**. Photos go in **`photos/`**, short videos in **`videos/`**. You never need to touch `index.html`.

---

## Part 1: Put the site online (one time, on a computer, about 15 minutes)

### 1. Organization and repository (done)
The site lives in the free GitHub organization **theobihs** (owned by the Chidera001 account),
in the repository **theobihs.github.io**.

### 3. Upload the files
1. Unzip `obih-adventures.zip` on your computer.
2. On the new repository page, click **uploading an existing file**.
3. Drag in everything from the unzipped folder: `index.html`, `site-data.js`, `README.md`, and the `photos` and `videos` folders.
   (On a Mac, the hidden file `.nojekyll` may not drag across. That's fine, it's optional.)
4. Click **Commit changes**.

### 4. Switch the website on
1. In the repository, go to **Settings**, then **Pages** (left side).
2. Under **Build and deployment**, Source: **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)**. Click **Save**.
4. Wait 1 to 2 minutes, then open **https://theobihs.github.io**

---

## Part 2: Add photos from your phone

**Before your first upload (iPhone):** iPhones save photos as HEIC, which most browsers can't show.
Go to **Settings → Camera → Formats → Most Compatible** so new photos are JPG.
For older photos, sharing them by email or AirDrop to yourself usually turns them into JPG.

1. Open **github.com** in Safari or Chrome on your phone and sign in.
2. Go to the **theobihs.github.io** repository, then tap the **photos** folder.
3. Tap **Add file → Upload files**.
   If you don't see it, switch to the desktop site (Safari: tap **aA → Request Desktop Website**; Chrome: **⋮ → Desktop site**).
4. Choose your photos (each must be under 25 MB). Tap **Commit changes**.
5. Note the file names exactly as shown, for example `IMG_4021.JPG`. Capitals matter.

## Part 3: Show the photos on the site

1. In the repository, tap **site-data.js**, then the **pencil** icon (Edit).
2. Find the section you want and type the photo's name. Examples:

   A cover photo for a place (replaces the painting):
   ```
   photo: 'photos/IMG_4021.JPG', story: '' },
   ```

   A photo in the gallery (add a new line inside `gallery: [ ]`):
   ```
   { photo: 'photos/IMG_4021.JPG', caption: 'Sunset at Lake Havasu' },
   ```

   A YouTube video (the code after `v=` in the link):
   ```
   { youtube: 'aBcD1234xyz', caption: 'Grand Canyon day' },
   ```

   A bucket list place:
   ```
   { name: 'Zion National Park', done: false },
   ```

3. Tap **Commit changes**. The site updates in about a minute. Refresh the page to see it.

**If the site goes blank after an edit**, a quote mark or comma is probably missing. Open `site-data.js`, check the line you just changed against the examples above, and fix it. You can also click **History** to see and undo your last change.

---

## Videos

- Short clips (under 25 MB, `.mp4`) can go in `videos/` and be added like photos: `{ video: 'videos/clip.mp4', caption: '...' },`
- iPhone videos are often `.mov` and large. Longer videos are best on **YouTube as Unlisted**, then added with their YouTube code.
- **Opening-screen video:** a 10 to 20 second silent clip. Put it in `videos/` and set `heroVideo: 'videos/hero.mp4'` near the top of `site-data.js`. Adding a still photo as `heroPhoto` too makes it look good while the video loads.

## Guestbook

1. Make a Google Form (Name, Message).
2. Click **Send**, then the link icon, and copy the link.
3. Paste it into `guestbookLink: ''` in `site-data.js`. The guestbook section and button appear automatically.

## Trip stories, dates and campground reviews

Each place in `site-data.js` has empty slots: `when`, `journey`, `campsite`, `experience`, `moments`.
Type into any of them and that part appears in the trip's pop-up; empty ones stay hidden.
A campground review template (ratings 1 to 5) is in the notes at the top of the places list.

## Pages

The homepage is a highlights tour (opening photo, about us, latest 3 trips, a small map,
one favourite photo from each recent trip, bucket list). Full pages:
`#trips` (all trips, with filters), `#map`, `#photos`, `#tips`, and one page per trip.

## Trip pages and order

Every place gets its own page, e.g. `theobihs.github.io/#trip-mount-lemmon`.
Trips are listed newest first, using the month and year written in `when` (e.g. 'July 2026').
Places with no date go at the end.

## Photos sorted by trip

The Photos section sorts gallery pictures into trips by itself. If one ends up under the wrong
trip, add `trip: 'Place name'` to its line.

## Adding a new place

Copy one whole `{ name: ... },` block in `places`, paste it below, and change the details.
For `lat` and `lon`: in Google Maps, long-press the spot; the numbers appear at the top (the first is lat, the second is lon).
`kind` must be `'mountains'`, `'lakes'` or `'parks'`.

## Limits to keep in mind

- Each uploaded file: under **25 MB** (when uploading in the browser).
- The whole site: under **1 GB**. That's a few hundred phone photos. Long videos belong on YouTube.
- The site is **public**: anyone with the link can see it.

## Using your own web address later

After buying a name like `theobihs.com`:
1. Repository **Settings → Pages → Custom domain**, type the address, **Save**.
2. At the company you bought it from, add the DNS records GitHub lists here:
   https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
3. Tick **Enforce HTTPS** once it becomes available (can take up to a day).
