/* ============================================================
   THE OBIH ADVENTURES — everything on the website lives here.
   To change the site, edit this file on GitHub (pencil icon),
   then press "Commit changes". The site updates in a minute or two.

   Rules that keep it working:
   - Keep the quote marks ' ' around words.
   - Keep the comma at the end of each line or { } block.
   - Photos go in the "photos" folder, videos in the "videos" folder.
     Write the file name exactly, capitals too, e.g. 'photos/IMG_1234.JPG'
   ============================================================ */

window.SITE = {

  title: 'The Obih Adventures',
  tagline: '',   /* optional line under the title on the opening screen; leave '' for none */

  /* Opening screen.
     heroPhotos: one or more photos. With several, they fade slowly from one
       to the next. Wide (sideways) photos look best on computers.
       Example: heroPhotos: ['photos/hero.jpg', 'photos/IMG_4021.JPG', 'photos/IMG_4107.JPG'],
     heroVideo: optional short silent clip instead, e.g. 'videos/hero.mp4' (under 25 MB).
       Leave as '' to use the photos. Leave both empty to show the painted canyon. */
  heroPhotos: ['photos/hero-cabins.jpg'],
  heroVideo: 'videos/hero-cabins.mp4',

  about: [
    "We're a family in Tucson. When we get the chance, we pack up and head somewhere new: up the mountain, out to a lake cabin, or to the edge of the Grand Canyon.",
    "This is where we keep those trips, so we remember them and so our kids can look back on them one day."
  ],
  familyPhoto: 'photos/family-picnic-1.jpg',

  /* ---------- PLACES ----------
     kind: 'mountains'  (Mountains & canyons)
           'lakes'      (Lakes & state parks)
           'parks'      (National parks)
     lat / lon: find them by long-pressing the spot in Google Maps.
     photo: the cover picture for this place. Leave '' to use the painting.
     photos: optional extra pictures shown when someone taps the place,
             e.g. photos: ['photos/IMG_1.JPG', 'photos/IMG_2.JPG'],
     story: as long as you like. Shown when someone taps the place.
            For several paragraphs, use backticks ` ` instead of ' ' and
            leave a blank line between paragraphs, like this:
            story: `We drove up early.

            The kids found pinecones everywhere.`,
     To add a place, copy one { ... }, block, paste it below, and change it. */
  places: [
    { name: 'Mount Lemmon', kind: 'mountains', area: 'Santa Catalina Mountains, above Tucson',
      line: 'Cool pine forest an hour up the mountain from home.', lat: 32.44, lon: -110.79,
      photo: '', story: '' },
    { name: 'Grand Canyon', kind: 'parks', area: 'Northern Arizona',
      line: 'Standing at the rim together.', lat: 36.06, lon: -112.11,
      photo: '', story: '' },
    { name: 'Sabino Canyon', kind: 'mountains', area: 'Coronado National Forest, northeast Tucson',
      line: 'Desert canyon, creek and saguaros on the edge of town.', lat: 32.31, lon: -110.82,
      photo: '', story: '' },
    { name: 'Madera Canyon', kind: 'mountains', area: 'Santa Rita Mountains, south of Tucson',
      line: 'Shady trails and birdsong in the Santa Ritas.', lat: 31.72, lon: -110.88,
      photo: '', story: '' },
    { name: 'Pinetop', kind: 'mountains', area: 'White Mountains, northeastern Arizona',
      line: 'Summer in the cool ponderosa pines.', lat: 34.14, lon: -109.96,
      photo: 'photos/family-picnic-2.jpg', story: '' },
    { name: 'Lost Dutchman', kind: 'lakes', area: 'Lost Dutchman State Park, Superstition Mountains',
      line: 'A cabin stay at the foot of the Superstitions.', lat: 33.46, lon: -111.48,
      photo: '', story: '' },
    { name: 'Lake Havasu', kind: 'lakes', area: 'Lake Havasu State Park, Lake Havasu City',
      line: 'A cabin stay on the Colorado River.', lat: 34.50, lon: -114.36,
      photo: '', story: '' },
    { name: 'Alamo Lake', kind: 'lakes', area: 'Alamo Lake State Park, near Wenden',
      line: 'A cabin stay on quiet water, far from everything.', lat: 34.23, lon: -113.58,
      photo: '', story: '' },
    { name: 'Roper Lake', kind: 'lakes', area: 'Roper Lake State Park, near Safford',
      line: 'A lakeside cabin stay under Mount Graham.', lat: 32.76, lon: -109.70,
      photo: 'photos/roper-lake-overlook.jpg', story: '',
      photos: ['photos/cabin-porch.jpg', 'photos/hero-cabins.jpg'] },
    { name: 'Patagonia Lake', kind: 'lakes', area: 'Patagonia Lake State Park, south of Tucson',
      line: 'A lake tucked into the grassland hills near the border.', lat: 31.49, lon: -110.85,
      photo: '', story: '' },
  ],

  /* ---------- PHOTOS & VIDEOS ----------
     One line each. Newest at the top looks nicest.
       { photo: 'photos/havasu-sunset.jpg', caption: 'Lake Havasu' },
       { video: 'videos/dunes.mp4', caption: 'Sledding' },        (short clips, under 25 MB)
       { youtube: 'dQw4w9WgXcQ', caption: 'Grand Canyon day' },   (the code after v= in a YouTube link)
     While this list is empty, the site shows the paintings instead. */
  gallery: [
    { photo: 'photos/family-picnic-2.jpg', caption: 'Picnic in the pines at Pinetop' },
    { photo: 'photos/roper-lake-overlook.jpg', caption: 'Roper Lake overlook' },
    { photo: 'photos/hero-cabins.jpg', caption: 'Sunset over the Roper Lake cabins' },
    { photo: 'photos/cabin-porch.jpg', caption: 'Our cabin porch at Roper Lake' },
    { photo: 'photos/family-picnic-1.jpg', caption: 'All three of us' },
  ],

  /* ---------- BUCKET LIST ----------
     Change done: false to done: true when you've been. */
  bucketList: [
  ],

  /* ---------- GUESTBOOK ----------
     Paste a Google Form link here so visitors can leave notes.
     Leave '' to hide the button. */
  guestbookLink: '',

};
