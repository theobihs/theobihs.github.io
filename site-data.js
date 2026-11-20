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
  /* Opening screen words. Leave any of them '' to hide it.
     headline: the big words. If '', the site name is shown big instead.
     intro:    a short line under the headline.
     button:   (not used in this design) */
  headline: '',
  intro: '',
  button: '',
  tagline: '',   /* older setting, used only if intro is '' */

  /* Opening screen.
     heroPhotos: one or more photos. With several, they fade slowly from one
       to the next. Wide (sideways) photos look best on computers.
       Example: heroPhotos: ['photos/hero.jpg', 'photos/IMG_4021.JPG', 'photos/IMG_4107.JPG'],
     heroVideo: optional short silent clip instead, e.g. 'videos/hero.mp4' (under 25 MB).
       Leave as '' to use the photos. Leave both empty to show the painted canyon. */
  heroPhotos: ['photos/roper-buoys-glow.jpg', 'photos/roper-porch-swing.jpg', 'photos/roper-blue-hour.jpg', 'photos/roper-road-dusk.jpg'],
  heroVideo: '',

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

     OPTIONAL TRIP STORY (each part only shows on the site once you fill it in):
       when:       when you went, any wording, e.g. 'October 2025' or 'Three visits, 2024 to 2025'
       journey:    what prompted the trip and what the drive was like
       campsite:   where you stayed and what the campground was like
       experience: what you did and explored
       moments:    favourite family moments, funny or unexpected ones
     Use backticks ` ` for several paragraphs, same as story.

     OPTIONAL CAMPGROUND REVIEW: paste this inside a place, after the moments line,
     and give each a number from 1 to 5 (leave out any you don't want):
       review: { campground: 'Name of campground', location: 5, facilities: 4, scenery: 5,
                 family: 5, overall: 5, again: 'Yes', notes: 'A few words about it.' },

     To add a place, copy one { ... }, block, paste it below, and change it. */
  places: [
    { name: 'Mount Lemmon', kind: 'mountains', area: 'Santa Catalina Mountains, above Tucson',
      line: 'Cool pine forest an hour up the mountain from home.', lat: 32.44, lon: -110.79,
      photo: 'photos/lemmon-tent-pines.jpg', story: '',
      when: 'November 2026', journey: '', campsite: '', experience: '', moments: '',
      photos: ['photos/lemmon-family-aspens.jpg', 'photos/lemmon-shoulders.jpg', 'photos/lemmon-silly-pose.jpg', 'photos/lemmon-selfie-view.jpg', 'photos/lemmon-campsite.jpg', 'photos/lemmon-hammock.jpg', 'photos/lemmon-mug.jpg', 'photos/lemmon-pines-up.jpg', 'photos/lemmon-vista.jpg', 'photos/lemmon-clouds.jpg', 'photos/lemmon-chairlift.jpg', 'photos/lemmon-selfie-view-2.jpg'] },
    { name: 'Grand Canyon', kind: 'parks', area: 'Northern Arizona',
      line: 'Standing at the rim together.', lat: 36.06, lon: -112.11,
      photo: 'photos/gc-rim-view.jpg', story: '',
      when: 'October 2025', journey: '', campsite: '', experience: '', moments: '',
      photos: ['photos/gc-rim-pose.jpg', 'photos/gc-sunset-family.jpg', 'photos/gc-sunset-mom.jpg', 'photos/gc-sunset-shoulders.jpg', 'photos/gc-sunset-arms.jpg'] },
    { name: 'Sedona', kind: 'mountains', area: 'Red Rock Country, north-central Arizona',
      line: 'Red rocks and blue skies. We keep coming back.', lat: 34.87, lon: -111.76,
      photo: 'photos/sedona-red-rocks.jpg', story: '',
      when: '', journey: '', campsite: '', experience: '', moments: '',
      photos: ['photos/sedona-golden-cliffs.jpg', 'photos/sedona-bell-rock.jpg', 'photos/sedona-bell-rock-2.jpg', 'photos/sedona-drive.jpg'] },
    { name: 'Sabino Canyon', kind: 'mountains', area: 'Coronado National Forest, northeast Tucson',
      line: 'Desert canyon, creek and saguaros on the edge of town.', lat: 32.31, lon: -110.82,
      photo: 'photos/sabino-creek-wade.jpg', story: '',
      when: '', journey: '', campsite: '', experience: '', moments: '',
      photos: ['photos/sabino-creek-rest.jpg'] },
    { name: 'Madera Canyon', kind: 'mountains', area: 'Santa Rita Mountains, south of Tucson',
      line: 'Shady trails and birdsong in the Santa Ritas.', lat: 31.72, lon: -110.88,
      photo: 'photos/madera-couple.jpg', story: '',
      when: 'November 2026', journey: '', campsite: '', experience: '', moments: '',
      photos: ['photos/madera-trail-kids.jpg', 'photos/madera-bridge-kids.jpg', 'photos/madera-creek.jpg', 'photos/madera-laughing.jpg', 'photos/madera-hair-flip.jpg'] },
    { name: 'Pinetop', kind: 'mountains', area: 'White Mountains, northeastern Arizona',
      line: 'Summer in the cool ponderosa pines.', lat: 34.14, lon: -109.96,
      photo: 'photos/pinetop-family-pines.jpg', story: '',
      when: 'July 2026', journey: '', campsite: '', experience: '', moments: '',
      photos: ['photos/pinetop-bridge-family.jpg', 'photos/pinetop-pattycake.jpg', 'photos/pinetop-shoulders.jpg', 'photos/pinetop-lake-explorer.jpg', 'photos/pinetop-dock.jpg', 'photos/pinetop-blanket.jpg', 'photos/pinetop-shoulders-side.jpg', 'photos/pinetop-silly-face.jpg', 'photos/pinetop-lake-geese.jpg', 'photos/pinetop-tall-pines.jpg', 'photos/pinetop-lake-clouds.jpg', 'photos/pinetop-meadow-sky.jpg', 'photos/family-picnic-2.jpg', 'photos/family-picnic-1.jpg'] },
    { name: 'Dead Horse Ranch', kind: 'lakes', area: 'Dead Horse Ranch State Park, Cottonwood',
      line: 'A cabin stay by the Verde River, with cottonwoods, pines and creek splashing.', lat: 34.76, lon: -112.02,
      photo: 'photos/deadhorse-cabin-family.jpg', story: '',
      when: 'July 2025', journey: '', campsite: '', experience: '', moments: '',
      photos: ['photos/deadhorse-creek-splash.jpg', 'photos/deadhorse-river-carry.jpg', 'photos/deadhorse-river-log.jpg', 'photos/deadhorse-cottonwoods.jpg', 'photos/deadhorse-pines-pose.jpg', 'photos/deadhorse-pines-seated.jpg', 'photos/deadhorse-trail-sign.jpg', 'photos/deadhorse-cabin-family-2.jpg'] },
    { name: 'Lake Havasu', kind: 'lakes', area: 'Lake Havasu State Park, Lake Havasu City',
      line: 'A cabin stay on the Colorado River, with sunsets on the beach and a boat ride through the canyon.', lat: 34.50, lon: -114.36,
      photo: 'photos/havasu-sunset-chairs.jpg', story: '',
      when: 'March 2025', journey: '', campsite: '', experience: '', moments: '',
      photos: ['photos/havasu-shore-walk.jpg', 'photos/havasu-beach-pjs.jpg', 'photos/havasu-sunset-buoys.jpg', 'photos/havasu-cabin.jpg', 'photos/havasu-boat-dad.jpg', 'photos/havasu-canyon-cove.jpg', 'photos/havasu-phone-booth.jpg'] },
    { name: 'Alamo Lake', kind: 'lakes', area: 'Alamo Lake State Park, near Wenden',
      line: 'A cabin stay on quiet water, far from everything.', lat: 34.23, lon: -113.58,
      photo: 'photos/alamo-chairs.jpg', story: '',
      when: 'December 2025', journey: '', campsite: '', experience: '', moments: '',
      photos: ['photos/alamo-family-view.jpg', 'photos/alamo-sunset-joy.jpg', 'photos/alamo-cabin-porch-2.jpg', 'photos/alamo-reflection.jpg', 'photos/alamo-shoulders.jpg', 'photos/alamo-road-pose.jpg', 'photos/alamo-road-mom.jpg', 'photos/alamo-road-dad.jpg', 'photos/alamo-sunset-family.jpg', 'photos/alamo-cabin-porch.jpg', 'photos/alamo-dawn.jpg'] },
    { name: 'Roper Lake', kind: 'lakes', area: 'Roper Lake State Park, near Safford',
      line: 'A lakeside cabin stay under Mount Graham.', lat: 32.76, lon: -109.70,
      photo: 'photos/roper-lake-overlook.jpg', story: '',
      when: 'March 2026', journey: '', campsite: '', experience: '', moments: '',
      photos: ['photos/roper-family-selfie.jpg', 'photos/roper-braids.jpg', 'photos/roper-hug-lake.jpg', 'photos/roper-porch-couple.jpg', 'photos/roper-swing-mom.jpg', 'photos/roper-swing-dad.jpg', 'photos/roper-swing-view.jpg', 'photos/roper-breakfast.jpg', 'photos/roper-walk.jpg', 'photos/roper-sign.jpg', 'photos/roper-overlook.jpg', 'photos/roper-selfie-mountains.jpg', 'photos/roper-buoys-glow.jpg', 'photos/roper-porch-swing.jpg', 'photos/roper-cabins-sunset.jpg', 'photos/roper-reeds-sunset.jpg', 'photos/roper-blue-hour.jpg', 'photos/roper-road-dusk.jpg', 'photos/cabin-porch.jpg', 'photos/hero-lake.jpg'] },
    { name: 'Patagonia Lake', kind: 'lakes', area: 'Patagonia Lake State Park, south of Tucson',
      line: 'A lake tucked into the grassland hills near the border.', lat: 31.49, lon: -110.85,
      photo: 'photos/patagonia-panorama.jpg', story: '',
      when: 'March 2024', journey: '', campsite: '', experience: '', moments: '',
      photos: ['photos/patagonia-selfie.jpg', 'photos/patagonia-dad-rock.jpg', 'photos/patagonia-tree-boat.jpg', 'photos/patagonia-dad-tree.jpg', 'photos/patagonia-table-stand.jpg', 'photos/patagonia-mom-baby.jpg', 'photos/patagonia-glasses.jpg', 'photos/patagonia-mom-kayak.jpg', 'photos/patagonia-bridge.jpg', 'photos/patagonia-table-wide.jpg', 'photos/patagonia-selfie-2.jpg', 'photos/patagonia-reflection.jpg', 'photos/patagonia-sign.jpg'] },
  ],

  /* ---------- PHOTOS & VIDEOS ----------
     One line each. Newest at the top looks nicest.
       { photo: 'photos/havasu-sunset.jpg', caption: 'Lake Havasu' },
       { video: 'videos/dunes.mp4', caption: 'Sledding' },        (short clips, under 25 MB)
       { youtube: 'dQw4w9WgXcQ', caption: 'Grand Canyon day' },   (the code after v= in a YouTube link)
     The site sorts these by trip on its own (from the place's photo list, the place
     name in the caption, or the start of the file name). If one lands in the wrong
     place, add trip: 'Place name', e.g.
       { photo: 'photos/IMG_5.JPG', caption: 'Morning coffee', trip: 'Roper Lake' },
     While this list is empty, the site shows the paintings instead. */
  gallery: [
    { photo: 'photos/patagonia-panorama.jpg', caption: 'Big skies over Patagonia Lake' },
    { photo: 'photos/patagonia-dad-rock.jpg', caption: 'Watching the water with Daddy' },
    { photo: 'photos/patagonia-tree-boat.jpg', caption: 'Tree-hugging by the lake' },
    { photo: 'photos/patagonia-selfie.jpg', caption: 'Family day at Patagonia Lake' },
    { photo: 'photos/patagonia-reflection.jpg', caption: 'Clouds in the water' },
    { photo: 'photos/sedona-golden-cliffs.jpg', caption: 'Golden hour on the Sedona cliffs' },
    { photo: 'photos/sabino-creek-rest.jpg', caption: 'Cooling off in Sabino Creek' },
    { video: 'videos/sabino-creek-carry.mp4', caption: 'Crossing the creek, Sabino Canyon' },
    { photo: 'photos/sabino-creek-wade.jpg', caption: 'Wading in Sabino Creek' },
    { video: 'videos/sabino-road.mp4', caption: 'Walking into Sabino Canyon' },
    { photo: 'photos/alamo-chairs.jpg', caption: 'Three chairs by the water, Alamo Lake' },
    { photo: 'photos/alamo-sunset-joy.jpg', caption: 'Sunset silliness at Alamo Lake' },
    { photo: 'photos/alamo-reflection.jpg', caption: 'Clouds on still water' },
    { video: 'videos/alamo-view.mp4', caption: 'The view over the Alamo Lake cabins' },
    { photo: 'photos/alamo-dawn.jpg', caption: 'Pink dawn over Alamo Lake' },
    { photo: 'photos/alamo-cabin-porch-2.jpg', caption: 'Our Burro Bungalow' },
    { photo: 'photos/havasu-sunset-chairs.jpg', caption: 'Front-row seats to a Lake Havasu sunset' },
    { photo: 'photos/havasu-shore-walk.jpg', caption: 'An evening walk along the water' },
    { photo: 'photos/havasu-canyon-cove.jpg', caption: 'Boat ride through the canyon, Lake Havasu' },
    { photo: 'photos/havasu-phone-booth.jpg', caption: 'By the London Bridge' },
    { photo: 'photos/deadhorse-cabin-family.jpg', caption: 'Our cabin at Dead Horse Ranch' },
    { video: 'videos/deadhorse-creek.mp4', caption: 'Splashing in the creek at Dead Horse Ranch' },
    { photo: 'photos/deadhorse-river-carry.jpg', caption: 'Crossing the Verde River' },
    { photo: 'photos/deadhorse-river-log.jpg', caption: 'Quiet moment by the Verde River' },
    { video: 'videos/deadhorse-pines.mp4', caption: 'Through the pines at Dead Horse Ranch' },
    { photo: 'photos/gc-rim-view.jpg', caption: 'Taking in the Grand Canyon' },
    { photo: 'photos/gc-sunset-family.jpg', caption: 'Sunset near the Grand Canyon' },
    { photo: 'photos/gc-rim-pose.jpg', caption: 'On the rim' },
    { photo: 'photos/sedona-red-rocks.jpg', caption: 'The red rocks of Sedona' },
    { video: 'videos/gc-road.mp4', caption: 'On the road' },
    { photo: 'photos/gc-sunset-arms.jpg', caption: 'Sunset joy' },
    { photo: 'photos/roper-braids.jpg', caption: 'Hair braiding by Roper Lake' },
    { video: 'videos/roper-cabins-sunset.mp4', caption: 'Sunset over the Roper Lake cabins' },
    { photo: 'photos/roper-porch-couple.jpg', caption: 'Golden hour on the cabin porch' },
    { photo: 'photos/roper-hug-lake.jpg', caption: 'Hugs by the water' },
    { video: 'videos/roper-lakeside.mp4', caption: 'Evening light on Roper Lake' },
    { photo: 'photos/roper-sign.jpg', caption: 'Reading the trail sign above Roper Lake' },
    { video: 'videos/roper-cabin-inside.mp4', caption: 'Inside our cabin' },
    { photo: 'photos/pinetop-family-pines.jpg', caption: 'Summer in the pines at Pinetop' },
    { video: 'videos/pinetop-walk.mp4', caption: 'A walk through the Pinetop forest' },
    { photo: 'photos/pinetop-pattycake.jpg', caption: 'Patty-cake on the picnic blanket' },
    { photo: 'photos/pinetop-dock.jpg', caption: 'The lake and dock at Pinetop' },
    { video: 'videos/pinetop-lake-pines.mp4', caption: 'Pines by the lake' },
    { photo: 'photos/pinetop-lake-explorer.jpg', caption: 'Little explorer by the lake' },
    { photo: 'photos/madera-couple.jpg', caption: 'Fall colours in Madera Canyon' },
    { photo: 'photos/madera-bridge-kids.jpg', caption: 'Watching the creek, Madera Canyon' },
    { photo: 'photos/madera-trail-kids.jpg', caption: 'Little explorers on the trail' },
    { photo: 'photos/lemmon-tent-pines.jpg', caption: 'Our campsite on Mount Lemmon' },
    { video: 'videos/lemmon-hammock.mp4', caption: 'Hammock time on Mount Lemmon' },
    { photo: 'photos/lemmon-shoulders.jpg', caption: 'The best seat on Mount Lemmon' },
    { photo: 'photos/lemmon-clouds.jpg', caption: 'Above the clouds, Mount Lemmon' },
    { photo: 'photos/lemmon-silly-pose.jpg', caption: 'Copying Daddy' },
    { photo: 'photos/roper-buoys-glow.jpg', caption: 'Last light on Roper Lake' },
    { photo: 'photos/roper-porch-swing.jpg', caption: 'Porch swing at sunset' },
    { photo: 'photos/roper-cabins-sunset.jpg', caption: 'Roper Lake cabins' },
    { photo: 'photos/family-picnic-2.jpg', caption: 'Picnic in the pines at Pinetop' },
    { photo: 'photos/roper-lake-overlook.jpg', caption: 'Roper Lake overlook' },
    { photo: 'photos/hero-cabins.jpg', caption: 'Sunset over the Roper Lake cabins' },
    { photo: 'photos/hero-lake.jpg', caption: 'Roper Lake at dusk' },
    { photo: 'photos/cabin-porch.jpg', caption: 'Our cabin porch at Roper Lake' },
    { photo: 'photos/family-picnic-1.jpg', caption: 'All three of us' },
  ],

  /* ---------- BUCKET LIST ----------
     Change done: false to done: true when you've been. */
  bucketList: [
    { name: 'Lost Dutchman State Park', done: false },
  ],

  /* ---------- GUESTBOOK ----------
     Paste a Google Form link here so visitors can leave notes.
     Leave '' to hide the button. */
  guestbookLink: '',

};
