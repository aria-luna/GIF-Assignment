// Giphy API key and endpoint
const API_KEY = "YOUR_API_KEY"; // Replace with your Giphy API key
const BASE_URL = "https://api.giphy.com/v1/gifs/search";

// a. Get DOM elements
const gifContainer = document.querySelector('#gif-container');
const fetchButton = document.querySelector('#fetch-gif-btn');
const searchInput = document.querySelector('#search-input'); // ✅ Fetch the input field

// b. Add event listener
fetchButton.addEventListener('click', async () => {
  const query = searchInput.value.trim(); // ✅ Get search term
  if (!query) return;

  // Clear previous gifs
  gifContainer.innerHTML = '';

  try {
    // ✅ Use string interpolation to insert query in URL
    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=9`);
    const data = await response.json();

    const gifs = data.data;

    // ✅ Render each gif
    for (let gif of gifs) {
      gifContainer.innerHTML += `
        <img src="${gif.images.fixed_width.url}" class="col-3 mb-3" />
      `;
    }
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    gifContainer.innerHTML = `<p class="text-danger">Failed to load GIFs. Try again later.</p>`;
  }
});
console.log("script.js loaded");
{
  "data": [
    {
      "type": "gif",
      "id": "o0vwzuFwCGAFO",
      "url": "https://giphy.com/gifs/cat-hacker-webs-o0vwzuFwCGAFO",
      "slug": "cat-hacker-webs-o0vwzuFwCGAFO",
      "bitly_gif_url": "http://gph.is/1oXJHnO",
      "bitly_url": "http://gph.is/1oXJHnO",
      "embed_url": "https://giphy.com/embed/o0vwzuFwCGAFO",
      "username": "",
      "source": "https://www.reddit.com/r/CatGifs/comments/48sql9/hacker_cat_at_it_again_taking_over_the_webs/",
      "title": "Cat Working GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.reddit.com",
      "source_post_url": "https://www.reddit.com/r/CatGifs/comments/48sql9/hacker_cat_at_it_again_taking_over_the_webs/",
      "is_sticker": 0,
      "import_datetime": "2016-03-05 13:08:53",
      "trending_datetime": "2021-04-07 12:45:09",
      "images": {
        "original": {
          "height": "300",
          "width": "300",
          "size": "1420192",
          "url": "https://media3.giphy.com/media/o0vwzuFwCGAFO/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "238200",
          "mp4": "https://media3.giphy.com/media/o0vwzuFwCGAFO/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "520126",
          "webp": "https://media3.giphy.com/media/o0vwzuFwCGAFO/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "42",
          "hash": "09dc32be9af94096420758e4e3944bac"
        },
        "fixed_height": {
          "height": "200",
          "width": "200",
          "size": "574947",
          "url": "https://media3.giphy.com/media/o0vwzuFwCGAFO/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "123217",
          "mp4": "https://media3.giphy.com/media/o0vwzuFwCGAFO/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "268088",
          "webp": "https://media3.giphy.com/media/o0vwzuFwCGAFO/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "200",
          "size": "80020",
          "url": "https://media3.giphy.com/media/o0vwzuFwCGAFO/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "55626",
          "webp": "https://media3.giphy.com/media/o0vwzuFwCGAFO/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "100",
          "size": "198964",
          "url": "https://media3.giphy.com/media/o0vwzuFwCGAFO/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "45304",
          "mp4": "https://media3.giphy.com/media/o0vwzuFwCGAFO/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "85396",
          "webp": "https://media3.giphy.com/media/o0vwzuFwCGAFO/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "200",
          "width": "200",
          "size": "574947",
          "url": "https://media3.giphy.com/media/o0vwzuFwCGAFO/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "123217",
          "mp4": "https://media3.giphy.com/media/o0vwzuFwCGAFO/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "212888",
          "webp": "https://media3.giphy.com/media/o0vwzuFwCGAFO/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "200",
          "width": "200",
          "size": "80020",
          "url": "https://media3.giphy.com/media/o0vwzuFwCGAFO/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "55626",
          "webp": "https://media3.giphy.com/media/o0vwzuFwCGAFO/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "100",
          "width": "100",
          "size": "198964",
          "url": "https://media3.giphy.com/media/o0vwzuFwCGAFO/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "45304",
          "mp4": "https://media3.giphy.com/media/o0vwzuFwCGAFO/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "85396",
          "webp": "https://media3.giphy.com/media/o0vwzuFwCGAFO/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPW8wdnd6dUZ3Q0dBRk8mY3Q9Zw",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPW8wdnd6dUZ3Q0dBRk8mY3Q9Zw&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPW8wdnd6dUZ3Q0dBRk8mY3Q9Zw&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPW8wdnd6dUZ3Q0dBRk8mY3Q9Zw&action_type=SENT"
        }
      },
      "alt_text": "",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "qZgHBlenHa1zKqy6Zn",
      "url": "https://giphy.com/gifs/cat-face-cats-qZgHBlenHa1zKqy6Zn",
      "slug": "cat-face-cats-qZgHBlenHa1zKqy6Zn",
      "bitly_gif_url": "https://gph.is/g/4g22OeJ",
      "bitly_url": "https://gph.is/g/4g22OeJ",
      "embed_url": "https://giphy.com/embed/qZgHBlenHa1zKqy6Zn",
      "username": "rizalalthur",
      "source": "",
      "title": "Cat Confuse GIF by Rizal Althur",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "source_caption": "",
      "is_sticker": 0,
      "import_datetime": "2023-11-17 22:47:40",
      "trending_datetime": "0000-00-00 00:00:00",
      "images": {
        "original": {
          "height": "640",
          "width": "640",
          "size": "2566025",
          "url": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "628534",
          "mp4": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "1478756",
          "webp": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "46",
          "hash": "f64d93d9eb8a01c043cf883fdc61be51"
        },
        "fixed_height": {
          "height": "200",
          "width": "200",
          "size": "527256",
          "url": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "135547",
          "mp4": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "206086",
          "webp": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "200",
          "size": "68428",
          "url": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "44008",
          "webp": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "100",
          "size": "189133",
          "url": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "41034",
          "mp4": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "60838",
          "webp": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "200",
          "width": "200",
          "size": "527256",
          "url": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "135547",
          "mp4": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "158438",
          "webp": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "200",
          "width": "200",
          "size": "68428",
          "url": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "44008",
          "webp": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "100",
          "width": "100",
          "size": "189133",
          "url": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "41034",
          "mp4": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "60838",
          "webp": "https://media3.giphy.com/media/qZgHBlenHa1zKqy6Zn/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/rizalalthur/rfIsNLfqcekV.jpg",
        "banner_image": "",
        "banner_url": "",
        "profile_url": "https://giphy.com/rizalalthur/",
        "username": "rizalalthur",
        "display_name": "Rizal Althur",
        "description": "a Designer\r\nI make products and cool visual.",
        "instagram_url": "https://instagram.com/rizalalthur",
        "website_url": "https://www.linkedin.com/in/rizal-s-althur-58596411a/",
        "is_verified": true
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPXFaZ0hCbGVuSGExektxeTZabiZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPXFaZ0hCbGVuSGExektxeTZabiZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPXFaZ0hCbGVuSGExektxeTZabiZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPXFaZ0hCbGVuSGExektxeTZabiZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "CS6YxDFlrCWmA",
      "url": "https://giphy.com/gifs/forever-alone-taylor-swift-gif-catblr-CS6YxDFlrCWmA",
      "slug": "forever-alone-taylor-swift-gif-catblr-CS6YxDFlrCWmA",
      "bitly_gif_url": "http://gph.is/1J1eWno",
      "bitly_url": "http://gph.is/1J1eWno",
      "embed_url": "https://giphy.com/embed/CS6YxDFlrCWmA",
      "username": "",
      "source": "http://emilysurvivesgradschool.tumblr.com/post/114671005489/me-in-10-years-or-next-year",
      "title": "Taylor Swift Cats GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "emilysurvivesgradschool.tumblr.com",
      "source_post_url": "http://emilysurvivesgradschool.tumblr.com/post/114671005489/me-in-10-years-or-next-year",
      "is_sticker": 0,
      "import_datetime": "2015-06-23 03:01:57",
      "trending_datetime": "1970-01-01 00:00:00",
      "images": {
        "original": {
          "height": "293",
          "width": "488",
          "size": "1421978",
          "url": "https://media3.giphy.com/media/CS6YxDFlrCWmA/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "407787",
          "mp4": "https://media3.giphy.com/media/CS6YxDFlrCWmA/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "662112",
          "webp": "https://media3.giphy.com/media/CS6YxDFlrCWmA/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "18",
          "hash": "45697c65936bf8a0a67ecc1f4ebddf35"
        },
        "fixed_height": {
          "height": "200",
          "width": "334",
          "size": "580449",
          "url": "https://media3.giphy.com/media/CS6YxDFlrCWmA/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "207228",
          "mp4": "https://media3.giphy.com/media/CS6YxDFlrCWmA/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "302372",
          "webp": "https://media3.giphy.com/media/CS6YxDFlrCWmA/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "334",
          "size": "183424",
          "url": "https://media3.giphy.com/media/CS6YxDFlrCWmA/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "125730",
          "webp": "https://media3.giphy.com/media/CS6YxDFlrCWmA/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "168",
          "size": "187440",
          "url": "https://media3.giphy.com/media/CS6YxDFlrCWmA/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "58228",
          "mp4": "https://media3.giphy.com/media/CS6YxDFlrCWmA/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "87572",
          "webp": "https://media3.giphy.com/media/CS6YxDFlrCWmA/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "120",
          "width": "200",
          "size": "251883",
          "url": "https://media3.giphy.com/media/CS6YxDFlrCWmA/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "84707",
          "mp4": "https://media3.giphy.com/media/CS6YxDFlrCWmA/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "116398",
          "webp": "https://media3.giphy.com/media/CS6YxDFlrCWmA/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "120",
          "width": "200",
          "size": "78955",
          "url": "https://media3.giphy.com/media/CS6YxDFlrCWmA/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "53374",
          "webp": "https://media3.giphy.com/media/CS6YxDFlrCWmA/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "60",
          "width": "100",
          "size": "73650",
          "url": "https://media3.giphy.com/media/CS6YxDFlrCWmA/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "27126",
          "mp4": "https://media3.giphy.com/media/CS6YxDFlrCWmA/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "40764",
          "webp": "https://media3.giphy.com/media/CS6YxDFlrCWmA/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPUNTNll4REZsckNXbUEmY3Q9Zw",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPUNTNll4REZsckNXbUEmY3Q9Zw&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPUNTNll4REZsckNXbUEmY3Q9Zw&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPUNTNll4REZsckNXbUEmY3Q9Zw&action_type=SENT"
        }
      },
      "alt_text": "",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "2x0VePimPaFJDpGZ7H",
      "url": "https://giphy.com/gifs/reaction-mood-2x0VePimPaFJDpGZ7H",
      "slug": "reaction-mood-2x0VePimPaFJDpGZ7H",
      "bitly_gif_url": "https://gph.is/2IW3ijl",
      "bitly_url": "https://gph.is/2IW3ijl",
      "embed_url": "https://giphy.com/embed/2x0VePimPaFJDpGZ7H",
      "username": "",
      "source": "http://cutecatgifs.com",
      "title": "International Cat Day Cats GIF by MOODMAN",
      "rating": "g",
      "content_url": "",
      "source_tld": "cutecatgifs.com",
      "source_post_url": "http://cutecatgifs.com",
      "source_caption": "",
      "is_sticker": 0,
      "import_datetime": "2018-03-26 22:00:02",
      "trending_datetime": "0000-00-00 00:00:00",
      "images": {
        "original": {
          "height": "480",
          "width": "480",
          "size": "29567203",
          "url": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "3464561",
          "mp4": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "8349754",
          "webp": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "353",
          "hash": "5b44773f28b475bd45db4c5247740fdb"
        },
        "fixed_height": {
          "height": "200",
          "width": "200",
          "size": "5481985",
          "url": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "942771",
          "mp4": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "2259746",
          "webp": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "200",
          "size": "89497",
          "url": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "56970",
          "webp": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "100",
          "size": "1859238",
          "url": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "369740",
          "mp4": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "757440",
          "webp": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "200",
          "width": "200",
          "size": "5481985",
          "url": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "942771",
          "mp4": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "1830890",
          "webp": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "200",
          "width": "200",
          "size": "89497",
          "url": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "56970",
          "webp": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "100",
          "width": "100",
          "size": "1859238",
          "url": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "369740",
          "mp4": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "757440",
          "webp": "https://media0.giphy.com/media/2x0VePimPaFJDpGZ7H/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTJ4MFZlUGltUGFGSkRwR1o3SCZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTJ4MFZlUGltUGFGSkRwR1o3SCZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTJ4MFZlUGltUGFGSkRwR1o3SCZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTJ4MFZlUGltUGFGSkRwR1o3SCZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "Video gif. Almost a dozen fluffy white kittens walk and pile on top of each other, looking up at the camera with friendly, alert expressions.",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "NfzERYyiWcXU4",
      "url": "https://giphy.com/gifs/kate-cats-NfzERYyiWcXU4",
      "slug": "kate-cats-NfzERYyiWcXU4",
      "bitly_gif_url": "http://gph.is/1CWDd7R",
      "bitly_url": "http://gph.is/1CWDd7R",
      "embed_url": "https://giphy.com/embed/NfzERYyiWcXU4",
      "username": "",
      "source": "http://www.hercampus.com/school/ufl/much-needed-study-break-cats",
      "title": "Cats Happy Cat GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.hercampus.com",
      "source_post_url": "http://www.hercampus.com/school/ufl/much-needed-study-break-cats",
      "is_sticker": 0,
      "import_datetime": "2015-04-17 17:50:21",
      "trending_datetime": "2021-05-26 11:15:12",
      "images": {
        "original": {
          "height": "320",
          "width": "406",
          "size": "1452172",
          "url": "https://media4.giphy.com/media/NfzERYyiWcXU4/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "496356",
          "mp4": "https://media4.giphy.com/media/NfzERYyiWcXU4/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "456486",
          "webp": "https://media4.giphy.com/media/NfzERYyiWcXU4/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "35",
          "hash": "70d67026b4f9867facc5ff3f1897a339"
        },
        "fixed_height": {
          "height": "200",
          "width": "254",
          "size": "492355",
          "url": "https://media4.giphy.com/media/NfzERYyiWcXU4/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "89565",
          "mp4": "https://media4.giphy.com/media/NfzERYyiWcXU4/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "166130",
          "webp": "https://media4.giphy.com/media/NfzERYyiWcXU4/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "254",
          "size": "79863",
          "url": "https://media4.giphy.com/media/NfzERYyiWcXU4/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "49362",
          "webp": "https://media4.giphy.com/media/NfzERYyiWcXU4/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "126",
          "size": "171557",
          "url": "https://media4.giphy.com/media/NfzERYyiWcXU4/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "21512",
          "mp4": "https://media4.giphy.com/media/NfzERYyiWcXU4/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "47356",
          "webp": "https://media4.giphy.com/media/NfzERYyiWcXU4/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "158",
          "width": "200",
          "size": "364960",
          "url": "https://media4.giphy.com/media/NfzERYyiWcXU4/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "54063",
          "mp4": "https://media4.giphy.com/media/NfzERYyiWcXU4/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "89550",
          "webp": "https://media4.giphy.com/media/NfzERYyiWcXU4/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "158",
          "width": "200",
          "size": "57865",
          "url": "https://media4.giphy.com/media/NfzERYyiWcXU4/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "35048",
          "webp": "https://media4.giphy.com/media/NfzERYyiWcXU4/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "80",
          "width": "100",
          "size": "123852",
          "url": "https://media4.giphy.com/media/NfzERYyiWcXU4/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "14806",
          "mp4": "https://media4.giphy.com/media/NfzERYyiWcXU4/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "35836",
          "webp": "https://media4.giphy.com/media/NfzERYyiWcXU4/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPU5mekVSWXlpV2NYVTQmY3Q9Zw",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPU5mekVSWXlpV2NYVTQmY3Q9Zw&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPU5mekVSWXlpV2NYVTQmY3Q9Zw&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPU5mekVSWXlpV2NYVTQmY3Q9Zw&action_type=SENT"
        }
      },
      "alt_text": "",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "3oKIPCSX4UHmuS41TG",
      "url": "https://giphy.com/gifs/Bubble-Witch-cats-pets-3oKIPCSX4UHmuS41TG",
      "slug": "Bubble-Witch-cats-pets-3oKIPCSX4UHmuS41TG",
      "bitly_gif_url": "http://gph.is/2oImD0j",
      "bitly_url": "http://gph.is/2oImD0j",
      "embed_url": "https://giphy.com/embed/3oKIPCSX4UHmuS41TG",
      "username": "Bubble_Witch",
      "source": "https://www.facebook.com/BubbleWitch3Saga/",
      "title": "Clean Up Cats GIF by Bubble Witch",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.facebook.com",
      "source_post_url": "https://www.facebook.com/BubbleWitch3Saga/",
      "source_caption": "",
      "is_sticker": 0,
      "import_datetime": "2017-04-06 15:25:16",
      "trending_datetime": "2017-05-15 07:30:01",
      "images": {
        "original": {
          "height": "464",
          "width": "480",
          "size": "4572495",
          "url": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "796235",
          "mp4": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "1145418",
          "webp": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "78",
          "hash": "2bd262d9bd7a3bee3560b3df11d1b28e"
        },
        "fixed_height": {
          "height": "200",
          "width": "206",
          "size": "940478",
          "url": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "193649",
          "mp4": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "340332",
          "webp": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "206",
          "size": "71680",
          "url": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "52050",
          "webp": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "104",
          "size": "306132",
          "url": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "69120",
          "mp4": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "102660",
          "webp": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "194",
          "width": "200",
          "size": "883730",
          "url": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "191054",
          "mp4": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "264470",
          "webp": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "194",
          "width": "200",
          "size": "67701",
          "url": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "50048",
          "webp": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "98",
          "width": "100",
          "size": "291827",
          "url": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "67301",
          "mp4": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "100128",
          "webp": "https://media1.giphy.com/media/3oKIPCSX4UHmuS41TG/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/Bubble_Witch/Eql4xdDSvZj7.png",
        "banner_image": "",
        "banner_url": "",
        "profile_url": "https://giphy.com/Bubble_Witch/",
        "username": "Bubble_Witch",
        "display_name": "Bubble Witch",
        "description": "Help Stella defeat the evil Wilbur in this exciting adventure! He may look cute, but he's full of magical mischief! Travel the realm bursting as many bubbles as you can in this bubble shooting puzzle game.\r\n",
        "instagram_url": "https://instagram.com/bubblewitchsagaofficial",
        "website_url": "",
        "is_verified": false
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTNvS0lQQ1NYNFVIbXVTNDFURyZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTNvS0lQQ1NYNFVIbXVTNDFURyZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTNvS0lQQ1NYNFVIbXVTNDFURyZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTNvS0lQQ1NYNFVIbXVTNDFURyZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "kKeJ4JuNkaEZbkPOOL",
      "url": "https://giphy.com/gifs/yeulu-cute-animals-cats-kKeJ4JuNkaEZbkPOOL",
      "slug": "yeulu-cute-animals-cats-kKeJ4JuNkaEZbkPOOL",
      "bitly_gif_url": "https://gph.is/g/ZYVP6np",
      "bitly_url": "https://gph.is/g/ZYVP6np",
      "embed_url": "https://giphy.com/embed/kKeJ4JuNkaEZbkPOOL",
      "username": "yeulu",
      "source": "",
      "title": "Cats Aww GIF by Yêu Lu",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "source_caption": "",
      "is_sticker": 0,
      "import_datetime": "2024-04-19 05:07:23",
      "trending_datetime": "0000-00-00 00:00:00",
      "images": {
        "original": {
          "height": "480",
          "width": "383",
          "size": "3587166",
          "url": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "1406519",
          "mp4": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "843946",
          "webp": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "40",
          "hash": "ea601181a38d9986f7935b463321e1b7"
        },
        "fixed_height": {
          "height": "200",
          "width": "160",
          "size": "513590",
          "url": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "150439",
          "mp4": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "211976",
          "webp": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "160",
          "size": "91446",
          "url": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "50264",
          "webp": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "80",
          "size": "168164",
          "url": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "47810",
          "mp4": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "78234",
          "webp": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "251",
          "width": "200",
          "size": "729640",
          "url": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "221246",
          "mp4": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "299698",
          "webp": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "251",
          "width": "200",
          "size": "125720",
          "url": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "74660",
          "webp": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "126",
          "width": "100",
          "size": "238181",
          "url": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "48147",
          "mp4": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "109378",
          "webp": "https://media3.giphy.com/media/kKeJ4JuNkaEZbkPOOL/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/yeulu/UOqXSRWIgZUx.jpg",
        "banner_image": "https://media3.giphy.com/headers/yeulu/T3uBg01c5IBX.jpg",
        "banner_url": "https://media3.giphy.com/headers/yeulu/T3uBg01c5IBX.jpg",
        "profile_url": "https://giphy.com/yeulu/",
        "username": "yeulu",
        "display_name": "Yêu Lu",
        "description": "Trang Giphy chính thức của Yêu Lu",
        "instagram_url": "https://instagram.com/yeulu.vn",
        "website_url": "http://yeulu.vn/",
        "is_verified": true
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWtLZUo0SnVOa2FFWmJrUE9PTCZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWtLZUo0SnVOa2FFWmJrUE9PTCZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWtLZUo0SnVOa2FFWmJrUE9PTCZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWtLZUo0SnVOa2FFWmJrUE9PTCZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "1ViLp0GBYhTcA",
      "url": "https://giphy.com/gifs/pics-dump-eyesanity-1ViLp0GBYhTcA",
      "slug": "pics-dump-eyesanity-1ViLp0GBYhTcA",
      "bitly_gif_url": "http://gph.is/ODwI8O",
      "bitly_url": "http://gph.is/ODwI8O",
      "embed_url": "https://giphy.com/embed/1ViLp0GBYhTcA",
      "username": "",
      "source": "http://www.eyesanity.com/2014/03/20/the-gif-dump-50-pics-15/",
      "title": "Lil Bub Cat GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.eyesanity.com",
      "source_post_url": "http://www.eyesanity.com/2014/03/20/the-gif-dump-50-pics-15/",
      "is_sticker": 0,
      "import_datetime": "2014-03-20 06:08:25",
      "trending_datetime": "2014-03-20 14:58:53",
      "images": {
        "original": {
          "height": "400",
          "width": "415",
          "size": "2725963",
          "url": "https://media2.giphy.com/media/1ViLp0GBYhTcA/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "854100",
          "mp4": "https://media2.giphy.com/media/1ViLp0GBYhTcA/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "1300634",
          "webp": "https://media2.giphy.com/media/1ViLp0GBYhTcA/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "47",
          "hash": "6c520216606ba2b3adda0c35934ed9ca"
        },
        "fixed_height": {
          "height": "200",
          "width": "208",
          "size": "881907",
          "url": "https://media2.giphy.com/media/1ViLp0GBYhTcA/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "219650",
          "mp4": "https://media2.giphy.com/media/1ViLp0GBYhTcA/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "447670",
          "webp": "https://media2.giphy.com/media/1ViLp0GBYhTcA/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "208",
          "size": "104753",
          "url": "https://media2.giphy.com/media/1ViLp0GBYhTcA/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "68222",
          "webp": "https://media2.giphy.com/media/1ViLp0GBYhTcA/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "102",
          "size": "281834",
          "url": "https://media2.giphy.com/media/1ViLp0GBYhTcA/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "65126",
          "mp4": "https://media2.giphy.com/media/1ViLp0GBYhTcA/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "130110",
          "webp": "https://media2.giphy.com/media/1ViLp0GBYhTcA/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "194",
          "width": "200",
          "size": "832443",
          "url": "https://media2.giphy.com/media/1ViLp0GBYhTcA/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "238710",
          "mp4": "https://media2.giphy.com/media/1ViLp0GBYhTcA/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "346040",
          "webp": "https://media2.giphy.com/media/1ViLp0GBYhTcA/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "194",
          "width": "200",
          "size": "99591",
          "url": "https://media2.giphy.com/media/1ViLp0GBYhTcA/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "65006",
          "webp": "https://media2.giphy.com/media/1ViLp0GBYhTcA/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "98",
          "width": "100",
          "size": "271494",
          "url": "https://media2.giphy.com/media/1ViLp0GBYhTcA/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "64017",
          "mp4": "https://media2.giphy.com/media/1ViLp0GBYhTcA/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "127104",
          "webp": "https://media2.giphy.com/media/1ViLp0GBYhTcA/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTFWaUxwMEdCWWhUY0EmY3Q9Zw",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTFWaUxwMEdCWWhUY0EmY3Q9Zw&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTFWaUxwMEdCWWhUY0EmY3Q9Zw&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTFWaUxwMEdCWWhUY0EmY3Q9Zw&action_type=SENT"
        }
      },
      "alt_text": "",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "YRtLgsajXrz1FNJ6oy",
      "url": "https://giphy.com/gifs/moodman-YRtLgsajXrz1FNJ6oy",
      "slug": "moodman-YRtLgsajXrz1FNJ6oy",
      "bitly_gif_url": "https://gph.is/g/Z8ekQMk",
      "bitly_url": "https://gph.is/g/Z8ekQMk",
      "embed_url": "https://giphy.com/embed/YRtLgsajXrz1FNJ6oy",
      "username": "",
      "source": "http://cutecatgifs.com",
      "title": "International Cat Day Cats GIF by MOODMAN",
      "rating": "g",
      "content_url": "",
      "source_tld": "cutecatgifs.com",
      "source_post_url": "http://cutecatgifs.com",
      "source_caption": "",
      "is_sticker": 0,
      "import_datetime": "2020-02-20 23:40:37",
      "trending_datetime": "2020-08-25 15:30:10",
      "images": {
        "original": {
          "height": "640",
          "width": "640",
          "size": "13853692",
          "url": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "2267293",
          "mp4": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "12288532",
          "webp": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "276",
          "hash": "71858101b351f4a52a9e351bbde3ccd3"
        },
        "fixed_height": {
          "height": "200",
          "width": "200",
          "size": "3145998",
          "url": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "466436",
          "mp4": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "2048408",
          "webp": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "200",
          "size": "85034",
          "url": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "58728",
          "webp": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "100",
          "size": "982860",
          "url": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "157506",
          "mp4": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "585230",
          "webp": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "200",
          "width": "200",
          "size": "3145998",
          "url": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "466436",
          "mp4": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "1639226",
          "webp": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "200",
          "width": "200",
          "size": "85034",
          "url": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "58728",
          "webp": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "100",
          "width": "100",
          "size": "982860",
          "url": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "157506",
          "mp4": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "585230",
          "webp": "https://media1.giphy.com/media/YRtLgsajXrz1FNJ6oy/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVlSdExnc2FqWHJ6MUZOSjZveSZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVlSdExnc2FqWHJ6MUZOSjZveSZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVlSdExnc2FqWHJ6MUZOSjZveSZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVlSdExnc2FqWHJ6MUZOSjZveSZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "Video gif. Three cats piled on top of each other, orange, black, and gray from bottom to top. Their heads are in a perfect vertical line and squished together. They all look calm and sweet as they look around with curiosity at their surroundings, the one on top drifting off to sleep. ",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "W3QKEujo8vztC",
      "url": "https://giphy.com/gifs/cats-blanket-W3QKEujo8vztC",
      "slug": "cats-blanket-W3QKEujo8vztC",
      "bitly_gif_url": "http://gph.is/1Pst7YA",
      "bitly_url": "http://gph.is/1Pst7YA",
      "embed_url": "https://giphy.com/embed/W3QKEujo8vztC",
      "username": "",
      "source": "http://www.reddit.com/r/gifs/comments/3v1amj/two_little_cats_under_blanket/",
      "title": "Cat GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.reddit.com",
      "source_post_url": "http://www.reddit.com/r/gifs/comments/3v1amj/two_little_cats_under_blanket/",
      "is_sticker": 0,
      "import_datetime": "2015-12-01 19:25:51",
      "trending_datetime": "2020-12-19 14:45:11",
      "images": {
        "original": {
          "height": "479",
          "width": "500",
          "size": "1252599",
          "url": "https://media2.giphy.com/media/W3QKEujo8vztC/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "107137",
          "mp4": "https://media2.giphy.com/media/W3QKEujo8vztC/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "590982",
          "webp": "https://media2.giphy.com/media/W3QKEujo8vztC/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "17",
          "hash": "1b6b6e83f3f927c5b48e9b5bfaefe1be"
        },
        "fixed_height": {
          "height": "200",
          "width": "210",
          "size": "234334",
          "url": "https://media2.giphy.com/media/W3QKEujo8vztC/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "22682",
          "mp4": "https://media2.giphy.com/media/W3QKEujo8vztC/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "147112",
          "webp": "https://media2.giphy.com/media/W3QKEujo8vztC/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "210",
          "size": "89431",
          "url": "https://media2.giphy.com/media/W3QKEujo8vztC/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "66260",
          "webp": "https://media2.giphy.com/media/W3QKEujo8vztC/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "104",
          "size": "67467",
          "url": "https://media2.giphy.com/media/W3QKEujo8vztC/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "7641",
          "mp4": "https://media2.giphy.com/media/W3QKEujo8vztC/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "40416",
          "webp": "https://media2.giphy.com/media/W3QKEujo8vztC/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "192",
          "width": "200",
          "size": "215761",
          "url": "https://media2.giphy.com/media/W3QKEujo8vztC/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "23225",
          "mp4": "https://media2.giphy.com/media/W3QKEujo8vztC/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "109298",
          "webp": "https://media2.giphy.com/media/W3QKEujo8vztC/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "192",
          "width": "200",
          "size": "82397",
          "url": "https://media2.giphy.com/media/W3QKEujo8vztC/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "61078",
          "webp": "https://media2.giphy.com/media/W3QKEujo8vztC/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "96",
          "width": "100",
          "size": "63748",
          "url": "https://media2.giphy.com/media/W3QKEujo8vztC/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "7719",
          "mp4": "https://media2.giphy.com/media/W3QKEujo8vztC/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "37384",
          "webp": "https://media2.giphy.com/media/W3QKEujo8vztC/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVczUUtFdWpvOHZ6dEMmY3Q9Zw",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVczUUtFdWpvOHZ6dEMmY3Q9Zw&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVczUUtFdWpvOHZ6dEMmY3Q9Zw&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVczUUtFdWpvOHZ6dEMmY3Q9Zw&action_type=SENT"
        }
      },
      "alt_text": "Video gif. Two cats are swaddled together in a pink polka dot blanket. One cat is completely a sleep, while the other is looking over to its left with slightly sleepy eyes.",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "ND6xkVPaj8tHO",
      "url": "https://giphy.com/gifs/cat-money-cash-ND6xkVPaj8tHO",
      "slug": "cat-money-cash-ND6xkVPaj8tHO",
      "bitly_gif_url": "http://gph.is/1UOqRIl",
      "bitly_url": "http://gph.is/1UOqRIl",
      "embed_url": "https://giphy.com/embed/ND6xkVPaj8tHO",
      "username": "",
      "source": "http://gifs.tastefullyoffensive.com/post/127026664737",
      "title": "Cat Money GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "gifs.tastefullyoffensive.com",
      "source_post_url": "http://gifs.tastefullyoffensive.com/post/127026664737",
      "is_sticker": 0,
      "import_datetime": "2016-06-13 17:26:20",
      "trending_datetime": "2020-01-05 08:15:05",
      "images": {
        "original": {
          "height": "310",
          "width": "334",
          "size": "1248416",
          "url": "https://media3.giphy.com/media/ND6xkVPaj8tHO/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "244329",
          "mp4": "https://media3.giphy.com/media/ND6xkVPaj8tHO/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "371922",
          "webp": "https://media3.giphy.com/media/ND6xkVPaj8tHO/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "61",
          "hash": "fc32a8e2c6f4428426664fc3cd141f05"
        },
        "fixed_height": {
          "height": "200",
          "width": "216",
          "size": "597841",
          "url": "https://media3.giphy.com/media/ND6xkVPaj8tHO/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "67143",
          "mp4": "https://media3.giphy.com/media/ND6xkVPaj8tHO/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "170644",
          "webp": "https://media3.giphy.com/media/ND6xkVPaj8tHO/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "216",
          "size": "59321",
          "url": "https://media3.giphy.com/media/ND6xkVPaj8tHO/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "32390",
          "webp": "https://media3.giphy.com/media/ND6xkVPaj8tHO/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "106",
          "size": "210159",
          "url": "https://media3.giphy.com/media/ND6xkVPaj8tHO/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "24741",
          "mp4": "https://media3.giphy.com/media/ND6xkVPaj8tHO/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "57826",
          "webp": "https://media3.giphy.com/media/ND6xkVPaj8tHO/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "186",
          "width": "200",
          "size": "603485",
          "url": "https://media3.giphy.com/media/ND6xkVPaj8tHO/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "60624",
          "mp4": "https://media3.giphy.com/media/ND6xkVPaj8tHO/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "124706",
          "webp": "https://media3.giphy.com/media/ND6xkVPaj8tHO/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "186",
          "width": "200",
          "size": "57464",
          "url": "https://media3.giphy.com/media/ND6xkVPaj8tHO/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "29362",
          "webp": "https://media3.giphy.com/media/ND6xkVPaj8tHO/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "94",
          "width": "100",
          "size": "191244",
          "url": "https://media3.giphy.com/media/ND6xkVPaj8tHO/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "22060",
          "mp4": "https://media3.giphy.com/media/ND6xkVPaj8tHO/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "53946",
          "webp": "https://media3.giphy.com/media/ND6xkVPaj8tHO/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPU5ENnhrVlBhajh0SE8mY3Q9Zw",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPU5ENnhrVlBhajh0SE8mY3Q9Zw&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPU5ENnhrVlBhajh0SE8mY3Q9Zw&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPU5ENnhrVlBhajh0SE8mY3Q9Zw&action_type=SENT"
        }
      },
      "alt_text": "Video gif. A gray kitten guards a banded stack of money from an invading human hand with a sassy swat.",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "aC45M5Q4D07Pq",
      "url": "https://giphy.com/gifs/cat-funny-animation-aC45M5Q4D07Pq",
      "slug": "cat-funny-animation-aC45M5Q4D07Pq",
      "bitly_gif_url": "http://gph.is/11sgz9i",
      "bitly_url": "http://gph.is/11sgz9i",
      "embed_url": "https://giphy.com/embed/aC45M5Q4D07Pq",
      "username": "",
      "source": "http://www.cutecatgifs.com/",
      "title": "cat massaging GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.cutecatgifs.com",
      "source_post_url": "http://www.cutecatgifs.com/",
      "is_sticker": 0,
      "import_datetime": "2013-07-30 12:10:58",
      "trending_datetime": "1970-01-01 00:00:00",
      "images": {
        "original": {
          "height": "360",
          "width": "480",
          "size": "815546",
          "url": "https://media1.giphy.com/media/aC45M5Q4D07Pq/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "169672",
          "mp4": "https://media1.giphy.com/media/aC45M5Q4D07Pq/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "420238",
          "webp": "https://media1.giphy.com/media/aC45M5Q4D07Pq/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "25",
          "hash": "5ad989ebb80bead899d721812c4d95b6"
        },
        "fixed_height": {
          "height": "200",
          "width": "266",
          "size": "395610",
          "url": "https://media1.giphy.com/media/aC45M5Q4D07Pq/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "54156",
          "mp4": "https://media1.giphy.com/media/aC45M5Q4D07Pq/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "184990",
          "webp": "https://media1.giphy.com/media/aC45M5Q4D07Pq/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "266",
          "size": "94267",
          "url": "https://media1.giphy.com/media/aC45M5Q4D07Pq/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "66574",
          "webp": "https://media1.giphy.com/media/aC45M5Q4D07Pq/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "134",
          "size": "129399",
          "url": "https://media1.giphy.com/media/aC45M5Q4D07Pq/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "16101",
          "mp4": "https://media1.giphy.com/media/aC45M5Q4D07Pq/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "55346",
          "webp": "https://media1.giphy.com/media/aC45M5Q4D07Pq/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "150",
          "width": "200",
          "size": "246620",
          "url": "https://media1.giphy.com/media/aC45M5Q4D07Pq/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "34366",
          "mp4": "https://media1.giphy.com/media/aC45M5Q4D07Pq/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "99388",
          "webp": "https://media1.giphy.com/media/aC45M5Q4D07Pq/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "150",
          "width": "200",
          "size": "59071",
          "url": "https://media1.giphy.com/media/aC45M5Q4D07Pq/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "41916",
          "webp": "https://media1.giphy.com/media/aC45M5Q4D07Pq/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "76",
          "width": "100",
          "size": "81147",
          "url": "https://media1.giphy.com/media/aC45M5Q4D07Pq/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "10591",
          "mp4": "https://media1.giphy.com/media/aC45M5Q4D07Pq/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "36362",
          "webp": "https://media1.giphy.com/media/aC45M5Q4D07Pq/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWFDNDVNNVE0RDA3UHEmY3Q9Zw",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWFDNDVNNVE0RDA3UHEmY3Q9Zw&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWFDNDVNNVE0RDA3UHEmY3Q9Zw&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWFDNDVNNVE0RDA3UHEmY3Q9Zw&action_type=SENT"
        }
      },
      "alt_text": "Video gif. An furry orange cat lies on its back with its paws in the air as another orange cat gently massages its belly. ",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "KztT2c4u8mYYUiMKdJ",
      "url": "https://giphy.com/gifs/cute-cats-kawaii-KztT2c4u8mYYUiMKdJ",
      "slug": "cute-cats-kawaii-KztT2c4u8mYYUiMKdJ",
      "bitly_gif_url": "https://gph.is/g/E3Bprn4",
      "bitly_url": "https://gph.is/g/E3Bprn4",
      "embed_url": "https://giphy.com/embed/KztT2c4u8mYYUiMKdJ",
      "username": "",
      "source": "",
      "title": "Cats Chibi GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": 0,
      "import_datetime": "2019-05-01 18:38:18",
      "trending_datetime": "2021-03-18 00:15:10",
      "images": {
        "original": {
          "height": "342",
          "width": "440",
          "size": "254450",
          "url": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "50798",
          "mp4": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "132072",
          "webp": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "14",
          "hash": "c2ea243e0fb3b4dfc5e7a44a1425a5cd"
        },
        "fixed_height": {
          "height": "200",
          "width": "258",
          "size": "97448",
          "url": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "19057",
          "mp4": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "72152",
          "webp": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "258",
          "size": "41798",
          "url": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "31702",
          "webp": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "126",
          "size": "30936",
          "url": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "9890",
          "mp4": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "24294",
          "webp": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "156",
          "width": "200",
          "size": "62234",
          "url": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "14882",
          "mp4": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "47022",
          "webp": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "156",
          "width": "200",
          "size": "27610",
          "url": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "24334",
          "webp": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "78",
          "width": "100",
          "size": "21343",
          "url": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "7570",
          "mp4": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "18542",
          "webp": "https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPUt6dFQyYzR1OG1ZWVVpTUtkSiZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPUt6dFQyYzR1OG1ZWVVpTUtkSiZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPUt6dFQyYzR1OG1ZWVVpTUtkSiZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPUt6dFQyYzR1OG1ZWVVpTUtkSiZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "Kawaii gif. A gray cat strokes the head of a white cat. The white cat blinks happily, feeling soothed. Both cats' ears twitch around in satisfaction while a cute beating red heart blinks above both of them. ",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "l41m3pCCdMLTNky4M",
      "url": "https://giphy.com/gifs/afv-cats-meow-noise-l41m3pCCdMLTNky4M",
      "slug": "afv-cats-meow-noise-l41m3pCCdMLTNky4M",
      "bitly_gif_url": "http://gph.is/1e1pKI7",
      "bitly_url": "http://gph.is/1e1pKI7",
      "embed_url": "https://giphy.com/embed/l41m3pCCdMLTNky4M",
      "username": "afv",
      "source": "",
      "title": "Cat Lady Cats GIF by America's Funniest Home Videos",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "source_caption": "",
      "is_sticker": 0,
      "import_datetime": "2015-06-09 22:57:05",
      "trending_datetime": "2025-08-08 14:30:03",
      "images": {
        "original": {
          "height": "500",
          "width": "500",
          "size": "4362449",
          "url": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "1059902",
          "mp4": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "1390324",
          "webp": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "47",
          "hash": "1da58a6215c9f36101d4c09b68a6823b"
        },
        "fixed_height": {
          "height": "200",
          "width": "200",
          "size": "665878",
          "url": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "185195",
          "mp4": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "263312",
          "webp": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "200",
          "size": "81513",
          "url": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "49692",
          "webp": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "100",
          "size": "223402",
          "url": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "48137",
          "mp4": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "85172",
          "webp": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "200",
          "width": "200",
          "size": "665878",
          "url": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "185195",
          "mp4": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "205210",
          "webp": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "200",
          "width": "200",
          "size": "81513",
          "url": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "49692",
          "webp": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "100",
          "width": "100",
          "size": "223402",
          "url": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "48137",
          "mp4": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "85172",
          "webp": "https://media4.giphy.com/media/l41m3pCCdMLTNky4M/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/afv/duCgJiq67muO.jpg",
        "banner_image": "https://media3.giphy.com/headers/afv/TAOb1kS1fcLv.gif",
        "banner_url": "https://media3.giphy.com/headers/afv/TAOb1kS1fcLv.gif",
        "profile_url": "https://giphy.com/afv/",
        "username": "afv",
        "display_name": "America's Funniest Home Videos",
        "description": "AFV:  Over 1 million videos aching to be gifs. Watch, every Sun night at 7 on ABC.",
        "instagram_url": "https://instagram.com/afvofficial",
        "website_url": "https://www.afv.com/",
        "is_verified": true
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWw0MW0zcENDZE1MVE5reTRNJmN0PWc",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWw0MW0zcENDZE1MVE5reTRNJmN0PWc&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWw0MW0zcENDZE1MVE5reTRNJmN0PWc&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWw0MW0zcENDZE1MVE5reTRNJmN0PWc&action_type=SENT"
        }
      },
      "alt_text": "",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "SS40oFiyppsHhvClo2",
      "url": "https://giphy.com/gifs/cat-cats-devon-rex-SS40oFiyppsHhvClo2",
      "slug": "cat-cats-devon-rex-SS40oFiyppsHhvClo2",
      "bitly_gif_url": "https://gph.is/g/Z7yl9A6",
      "bitly_url": "https://gph.is/g/Z7yl9A6",
      "embed_url": "https://giphy.com/embed/SS40oFiyppsHhvClo2",
      "username": "theRockstarCats",
      "source": "",
      "title": "Scrolling Late Night GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "source_caption": "",
      "is_sticker": 0,
      "import_datetime": "2025-03-14 15:28:56",
      "trending_datetime": "2025-03-15 00:47:02",
      "images": {
        "original": {
          "height": "480",
          "width": "480",
          "size": "5273180",
          "url": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "687657",
          "mp4": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "1685742",
          "webp": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "76",
          "hash": "37e4fd53074bd0d502be9c191ec47ba9"
        },
        "fixed_height": {
          "height": "200",
          "width": "200",
          "size": "919613",
          "url": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "169658",
          "mp4": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "486006",
          "webp": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "200",
          "size": "86129",
          "url": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "65060",
          "webp": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "100",
          "size": "296756",
          "url": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "57284",
          "mp4": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "145800",
          "webp": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "200",
          "width": "200",
          "size": "919613",
          "url": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "169658",
          "mp4": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "392638",
          "webp": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "200",
          "width": "200",
          "size": "86129",
          "url": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "65060",
          "webp": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "100",
          "width": "100",
          "size": "296756",
          "url": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "57284",
          "mp4": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "145800",
          "webp": "https://media0.giphy.com/media/SS40oFiyppsHhvClo2/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/theRockstarCats/KshVRwuDojH3.gif",
        "banner_image": "",
        "banner_url": "",
        "profile_url": "https://giphy.com/channel/theRockstarCats/",
        "username": "theRockstarCats",
        "display_name": "The Rockstar Cats",
        "description": "Gibson, Tangerine, Roadie \r\nDevon Rex cats | Music | Fun",
        "instagram_url": "https://instagram.com/therockstarcat",
        "website_url": "https://rockstarcatgear.com",
        "is_verified": false
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVNTNDBvRml5cHBzSGh2Q2xvMiZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVNTNDBvRml5cHBzSGh2Q2xvMiZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVNTNDBvRml5cHBzSGh2Q2xvMiZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVNTNDBvRml5cHBzSGh2Q2xvMiZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "H4DjXQXamtTiIuCcRU",
      "url": "https://giphy.com/gifs/cats-cute-cat-catception-H4DjXQXamtTiIuCcRU",
      "slug": "cats-cute-cat-catception-H4DjXQXamtTiIuCcRU",
      "bitly_gif_url": "https://gph.is/g/aQNYkkA",
      "bitly_url": "https://gph.is/g/aQNYkkA",
      "embed_url": "https://giphy.com/embed/H4DjXQXamtTiIuCcRU",
      "username": "",
      "source": "",
      "title": "Cats Cute Cat GIF by MOODMAN",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "source_caption": "",
      "is_sticker": 0,
      "import_datetime": "2019-08-02 19:03:43",
      "trending_datetime": "2021-01-31 10:15:06",
      "images": {
        "original": {
          "height": "364",
          "width": "372",
          "size": "3171188",
          "url": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "287032",
          "mp4": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "709974",
          "webp": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "66",
          "hash": "98692f2d44a740bc0f4e47b8e2ed89c4"
        },
        "fixed_height": {
          "height": "200",
          "width": "204",
          "size": "990979",
          "url": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "105086",
          "mp4": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "312028",
          "webp": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "204",
          "size": "93222",
          "url": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "56342",
          "webp": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "102",
          "size": "290236",
          "url": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "40730",
          "mp4": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "102374",
          "webp": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "196",
          "width": "200",
          "size": "964429",
          "url": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "105525",
          "mp4": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "246888",
          "webp": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "196",
          "width": "200",
          "size": "90140",
          "url": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "54076",
          "webp": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "98",
          "width": "100",
          "size": "276996",
          "url": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "40341",
          "mp4": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "99630",
          "webp": "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPUg0RGpYUVhhbXRUaUl1Q2NSVSZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPUg0RGpYUVhhbXRUaUl1Q2NSVSZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPUg0RGpYUVhhbXRUaUl1Q2NSVSZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPUg0RGpYUVhhbXRUaUl1Q2NSVSZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "cfuL5gqFDreXxkWQ4o",
      "url": "https://giphy.com/gifs/cat-cool-cats-cfuL5gqFDreXxkWQ4o",
      "slug": "cat-cool-cats-cfuL5gqFDreXxkWQ4o",
      "bitly_gif_url": "http://gph.is/2I5xics",
      "bitly_url": "http://gph.is/2I5xics",
      "embed_url": "https://giphy.com/embed/cfuL5gqFDreXxkWQ4o",
      "username": "Bubblepunk",
      "source": "",
      "title": "On My Way Goodbye GIF by Bubble Punk",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "source_caption": "",
      "is_sticker": 0,
      "import_datetime": "2018-03-04 20:50:43",
      "trending_datetime": "1970-01-01 00:00:00",
      "images": {
        "original": {
          "height": "480",
          "width": "480",
          "size": "5932770",
          "url": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "935737",
          "mp4": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "1747820",
          "webp": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "80",
          "hash": "1c883f8a3904bd830aecedf9897e7b6d"
        },
        "fixed_height": {
          "height": "200",
          "width": "200",
          "size": "1183589",
          "url": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "330107",
          "mp4": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "589686",
          "webp": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "200",
          "size": "85632",
          "url": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "58698",
          "webp": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "100",
          "size": "417308",
          "url": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "122745",
          "mp4": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "192380",
          "webp": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "200",
          "width": "200",
          "size": "1183589",
          "url": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "330107",
          "mp4": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "504532",
          "webp": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "200",
          "width": "200",
          "size": "85632",
          "url": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "58698",
          "webp": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "100",
          "width": "100",
          "size": "417308",
          "url": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "122745",
          "mp4": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "192380",
          "webp": "https://media3.giphy.com/media/cfuL5gqFDreXxkWQ4o/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/Bubblepunk/E55XZI4qQ6I8.gif",
        "banner_image": "https://media3.giphy.com/headers/Bubblepunk/F0nyfsiuGrZN.gif",
        "banner_url": "https://media3.giphy.com/headers/Bubblepunk/F0nyfsiuGrZN.gif",
        "profile_url": "https://giphy.com/Bubblepunk/",
        "username": "Bubblepunk",
        "display_name": "Bubble Punk",
        "description": "Sweet 'n sour eye candy.",
        "instagram_url": "https://instagram.com/bubblepunk",
        "website_url": "http://www.instagram.com/bubblepunk/",
        "is_verified": true
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWNmdUw1Z3FGRHJlWHhrV1E0byZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWNmdUw1Z3FGRHJlWHhrV1E0byZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWNmdUw1Z3FGRHJlWHhrV1E0byZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWNmdUw1Z3FGRHJlWHhrV1E0byZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "Digital compilation gif. Image of a real cat edited to look like it's wearing a leather jacket and riding a motorcycle. The cat's eyes are wide with surprise or terror as it speeds down the road.",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "W8krmZSDxPIfm",
      "url": "https://giphy.com/gifs/party-night-weekend-W8krmZSDxPIfm",
      "slug": "party-night-weekend-W8krmZSDxPIfm",
      "bitly_gif_url": "http://gph.is/22ziZPj",
      "bitly_url": "http://gph.is/22ziZPj",
      "embed_url": "https://giphy.com/embed/W8krmZSDxPIfm",
      "username": "",
      "source": "https://www.reddit.com/r/gifs/comments/4ewqgq/yeah_its_party_all_night_on_weekend/",
      "title": "Excited Saturday Morning GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.reddit.com",
      "source_post_url": "https://www.reddit.com/r/gifs/comments/4ewqgq/yeah_its_party_all_night_on_weekend/",
      "is_sticker": 0,
      "import_datetime": "2016-04-15 13:40:19",
      "trending_datetime": "2021-06-04 19:30:11",
      "images": {
        "original": {
          "height": "229",
          "width": "400",
          "size": "240247",
          "url": "https://media3.giphy.com/media/W8krmZSDxPIfm/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "82581",
          "mp4": "https://media3.giphy.com/media/W8krmZSDxPIfm/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "121300",
          "webp": "https://media3.giphy.com/media/W8krmZSDxPIfm/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "6",
          "hash": "0dc215c7b8ae11f490a10c09523a3e02"
        },
        "fixed_height": {
          "height": "200",
          "width": "350",
          "size": "195296",
          "url": "https://media3.giphy.com/media/W8krmZSDxPIfm/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "77030",
          "mp4": "https://media3.giphy.com/media/W8krmZSDxPIfm/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "110450",
          "webp": "https://media3.giphy.com/media/W8krmZSDxPIfm/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "350",
          "size": "263582",
          "url": "https://media3.giphy.com/media/W8krmZSDxPIfm/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "108644",
          "webp": "https://media3.giphy.com/media/W8krmZSDxPIfm/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "176",
          "size": "66732",
          "url": "https://media3.giphy.com/media/W8krmZSDxPIfm/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "23345",
          "mp4": "https://media3.giphy.com/media/W8krmZSDxPIfm/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "29490",
          "webp": "https://media3.giphy.com/media/W8krmZSDxPIfm/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "114",
          "width": "200",
          "size": "84021",
          "url": "https://media3.giphy.com/media/W8krmZSDxPIfm/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "30894",
          "mp4": "https://media3.giphy.com/media/W8krmZSDxPIfm/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "37376",
          "webp": "https://media3.giphy.com/media/W8krmZSDxPIfm/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "114",
          "width": "200",
          "size": "101904",
          "url": "https://media3.giphy.com/media/W8krmZSDxPIfm/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "44768",
          "webp": "https://media3.giphy.com/media/W8krmZSDxPIfm/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "58",
          "width": "100",
          "size": "25962",
          "url": "https://media3.giphy.com/media/W8krmZSDxPIfm/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "11653",
          "mp4": "https://media3.giphy.com/media/W8krmZSDxPIfm/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "13440",
          "webp": "https://media3.giphy.com/media/W8krmZSDxPIfm/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVc4a3JtWlNEeFBJZm0mY3Q9Zw",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVc4a3JtWlNEeFBJZm0mY3Q9Zw&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVc4a3JtWlNEeFBJZm0mY3Q9Zw&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVc4a3JtWlNEeFBJZm0mY3Q9Zw&action_type=SENT"
        }
      },
      "alt_text": "Video gif. A cat is edited to look like a DJ scratching vinyl on turntables as other cats dance under party lights behind it.",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "oz0iZ8vYdgeTVMtFAe",
      "url": "https://giphy.com/gifs/oz0iZ8vYdgeTVMtFAe",
      "slug": "oz0iZ8vYdgeTVMtFAe",
      "bitly_gif_url": "https://gph.is/g/4LMom3E",
      "bitly_url": "https://gph.is/g/4LMom3E",
      "embed_url": "https://giphy.com/embed/oz0iZ8vYdgeTVMtFAe",
      "username": "",
      "source": "https://www.reddit.com/r/gifs/comments/b014g7/cuteness_overload/",
      "title": "Cat GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.reddit.com",
      "source_post_url": "https://www.reddit.com/r/gifs/comments/b014g7/cuteness_overload/",
      "is_sticker": 0,
      "import_datetime": "2019-03-12 06:13:11",
      "trending_datetime": "2019-04-17 22:00:02",
      "images": {
        "original": {
          "height": "480",
          "width": "336",
          "size": "3981291",
          "url": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "1453228",
          "mp4": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "849886",
          "webp": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "56",
          "hash": "c592252c5a56981dbcf2e66bdb1b6eeb"
        },
        "fixed_height": {
          "height": "200",
          "width": "140",
          "size": "1239179",
          "url": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "152498",
          "mp4": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "190308",
          "webp": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "140",
          "size": "135128",
          "url": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "45644",
          "webp": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "70",
          "size": "369214",
          "url": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "59840",
          "mp4": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "69032",
          "webp": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "286",
          "width": "200",
          "size": "2363194",
          "url": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "254224",
          "mp4": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "330312",
          "webp": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "286",
          "width": "200",
          "size": "257346",
          "url": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "78596",
          "webp": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "143",
          "width": "100",
          "size": "691952",
          "url": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "47291",
          "mp4": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "112500",
          "webp": "https://media4.giphy.com/media/oz0iZ8vYdgeTVMtFAe/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPW96MGlaOHZZZGdlVFZNdEZBZSZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPW96MGlaOHZZZGdlVFZNdEZBZSZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPW96MGlaOHZZZGdlVFZNdEZBZSZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPW96MGlaOHZZZGdlVFZNdEZBZSZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "dRyXC8ICV1LsUlz4dF",
      "url": "https://giphy.com/gifs/bestfriends-reaction-save-them-all-bfas-dRyXC8ICV1LsUlz4dF",
      "slug": "bestfriends-reaction-save-them-all-bfas-dRyXC8ICV1LsUlz4dF",
      "bitly_gif_url": "https://gph.is/g/ZxDpmYP",
      "bitly_url": "https://gph.is/g/ZxDpmYP",
      "embed_url": "https://giphy.com/embed/dRyXC8ICV1LsUlz4dF",
      "username": "bestfriends",
      "source": "bestfriends.org",
      "title": "Cat Reaction GIF by Best Friends Animal Society",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "bestfriends.org",
      "source_caption": "",
      "is_sticker": 0,
      "import_datetime": "2021-01-07 19:14:20",
      "trending_datetime": "2021-04-19 10:45:17",
      "images": {
        "original": {
          "height": "400",
          "width": "480",
          "size": "596012",
          "url": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "164036",
          "mp4": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "200284",
          "webp": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "16",
          "hash": "94e4e014d29dbef5d9dbf2e2b52339bd"
        },
        "fixed_height": {
          "height": "200",
          "width": "240",
          "size": "175691",
          "url": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "47763",
          "mp4": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "69210",
          "webp": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "240",
          "size": "61386",
          "url": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "36762",
          "webp": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "120",
          "size": "61236",
          "url": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "17856",
          "mp4": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "24192",
          "webp": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "166",
          "width": "200",
          "size": "143702",
          "url": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "34398",
          "mp4": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "44822",
          "webp": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "166",
          "width": "200",
          "size": "50717",
          "url": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "30244",
          "webp": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "84",
          "width": "100",
          "size": "47571",
          "url": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "14096",
          "mp4": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "20668",
          "webp": "https://media4.giphy.com/media/dRyXC8ICV1LsUlz4dF/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/bestfriends/4Ja63d50vmML.gif",
        "banner_image": "https://media3.giphy.com/headers/bestfriends/4hNDBzWNX3fb.jpg",
        "banner_url": "https://media3.giphy.com/headers/bestfriends/4hNDBzWNX3fb.jpg",
        "profile_url": "https://giphy.com/bestfriends/",
        "username": "bestfriends",
        "display_name": "Best Friends Animal Society",
        "description": "Best Friends Animal Society is a leading animal welfare organization dedicated to saving the lives of dogs and cats in America's shelters and making the entire country no-kill. Founded in 1984, Best Friends runs lifesaving facilities and programs nationwide in partnership with more than 5,500 shelters and rescue organizations. From our headquarters in Kanab, Utah, we also operate the nation's largest no-kill animal sanctuary — a destination that brings our mission to life for thousands of visitors each year. We maintain the most comprehensive animal sheltering data in the country and make it accessible to the public — empowering communities with critical insights into the needs of their local shelters and how they can help. We believe every dog and cat deserves a home. And we believe that, by working together, we can Save Them All®.",
        "instagram_url": "https://instagram.com/bestfriendsanimalsociety",
        "website_url": "http://www.bestfriends.org/",
        "is_verified": true
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWRSeVhDOElDVjFMc1VsejRkRiZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWRSeVhDOElDVjFMc1VsejRkRiZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWRSeVhDOElDVjFMc1VsejRkRiZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWRSeVhDOElDVjFMc1VsejRkRiZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "TpiK8rK6J5ZWWodevg",
      "url": "https://giphy.com/gifs/milo-kioku-kiokuart-TpiK8rK6J5ZWWodevg",
      "slug": "milo-kioku-kiokuart-TpiK8rK6J5ZWWodevg",
      "bitly_gif_url": "https://gph.is/g/ZnY8eK1",
      "bitly_url": "https://gph.is/g/ZnY8eK1",
      "embed_url": "https://giphy.com/embed/TpiK8rK6J5ZWWodevg",
      "username": "kiokuart",
      "source": "",
      "title": "Cat Love GIF by Kiokuart",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "source_caption": "",
      "is_sticker": 0,
      "import_datetime": "2022-07-15 02:02:46",
      "trending_datetime": "0000-00-00 00:00:00",
      "images": {
        "original": {
          "height": "480",
          "width": "480",
          "size": "101831",
          "url": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "70838",
          "mp4": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "105236",
          "webp": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "16",
          "hash": "583697d43047a2bef69f62e875617edf"
        },
        "fixed_height": {
          "height": "200",
          "width": "200",
          "size": "35650",
          "url": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "24659",
          "mp4": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "42614",
          "webp": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "200",
          "size": "13172",
          "url": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "15540",
          "webp": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "100",
          "size": "16839",
          "url": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "11724",
          "mp4": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "16440",
          "webp": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "200",
          "width": "200",
          "size": "35650",
          "url": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "24659",
          "mp4": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "36750",
          "webp": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "200",
          "width": "200",
          "size": "13172",
          "url": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "15540",
          "webp": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "100",
          "width": "100",
          "size": "16839",
          "url": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "11724",
          "mp4": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "16440",
          "webp": "https://media3.giphy.com/media/TpiK8rK6J5ZWWodevg/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/kiokuart/Vc1DGRMvilYk.gif",
        "banner_image": "",
        "banner_url": "",
        "profile_url": "https://giphy.com/kiokuart/",
        "username": "kiokuart",
        "display_name": "Kiokuart",
        "description": "Kioku, you yellow Sushi head friend!",
        "instagram_url": "https://instagram.com/kioku.art",
        "website_url": "http://kiokuart.artstation.com/",
        "is_verified": true
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVRwaUs4cks2SjVaV1dvZGV2ZyZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVRwaUs4cks2SjVaV1dvZGV2ZyZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVRwaUs4cks2SjVaV1dvZGV2ZyZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPVRwaUs4cks2SjVaV1dvZGV2ZyZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "Digital illustration gif. Orange cat sits with its eyes closed and its tail wrapped around its body against a sage green background with red hearts. It wiggles its whiskers and lifts its tail, like its purring or feeling very content in the moment. ",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "gl8ymnpv4Sqha",
      "url": "https://giphy.com/gifs/cats-gl8ymnpv4Sqha",
      "slug": "cats-gl8ymnpv4Sqha",
      "bitly_gif_url": "http://gph.is/1ZexrL0",
      "bitly_url": "http://gph.is/1ZexrL0",
      "embed_url": "https://giphy.com/embed/gl8ymnpv4Sqha",
      "username": "",
      "source": "http://www.reddit.com/r/gifs/comments/40bwcc/cats_cuddling/",
      "title": "Cats Hugging GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.reddit.com",
      "source_post_url": "http://www.reddit.com/r/gifs/comments/40bwcc/cats_cuddling/",
      "is_sticker": 0,
      "import_datetime": "2016-01-10 16:25:16",
      "trending_datetime": "2021-05-19 13:30:06",
      "images": {
        "original": {
          "height": "282",
          "width": "335",
          "size": "1945907",
          "url": "https://media3.giphy.com/media/gl8ymnpv4Sqha/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "804124",
          "mp4": "https://media3.giphy.com/media/gl8ymnpv4Sqha/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "1012262",
          "webp": "https://media3.giphy.com/media/gl8ymnpv4Sqha/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "47",
          "hash": "d3b9a8e019b5d035cc1e8acbee6f766f"
        },
        "fixed_height": {
          "height": "200",
          "width": "236",
          "size": "898739",
          "url": "https://media3.giphy.com/media/gl8ymnpv4Sqha/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "260522",
          "mp4": "https://media3.giphy.com/media/gl8ymnpv4Sqha/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "436582",
          "webp": "https://media3.giphy.com/media/gl8ymnpv4Sqha/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "236",
          "size": "107602",
          "url": "https://media3.giphy.com/media/gl8ymnpv4Sqha/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "78524",
          "webp": "https://media3.giphy.com/media/gl8ymnpv4Sqha/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "118",
          "size": "290864",
          "url": "https://media3.giphy.com/media/gl8ymnpv4Sqha/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "75021",
          "mp4": "https://media3.giphy.com/media/gl8ymnpv4Sqha/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "128014",
          "webp": "https://media3.giphy.com/media/gl8ymnpv4Sqha/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "168",
          "width": "200",
          "size": "670810",
          "url": "https://media3.giphy.com/media/gl8ymnpv4Sqha/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "162786",
          "mp4": "https://media3.giphy.com/media/gl8ymnpv4Sqha/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "270978",
          "webp": "https://media3.giphy.com/media/gl8ymnpv4Sqha/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "168",
          "width": "200",
          "size": "80849",
          "url": "https://media3.giphy.com/media/gl8ymnpv4Sqha/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "58292",
          "webp": "https://media3.giphy.com/media/gl8ymnpv4Sqha/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "86",
          "width": "100",
          "size": "226545",
          "url": "https://media3.giphy.com/media/gl8ymnpv4Sqha/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "59217",
          "mp4": "https://media3.giphy.com/media/gl8ymnpv4Sqha/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "104000",
          "webp": "https://media3.giphy.com/media/gl8ymnpv4Sqha/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWdsOHltbnB2NFNxaGEmY3Q9Zw",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWdsOHltbnB2NFNxaGEmY3Q9Zw&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWdsOHltbnB2NFNxaGEmY3Q9Zw&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWdsOHltbnB2NFNxaGEmY3Q9Zw&action_type=SENT"
        }
      },
      "alt_text": "Video gif. Gray cat rests on its side next to an orange cat, wrapping its paw around the orange cat's neck as the orange cat stares with intense, wide-eyed fixation at something offscreen. It looks like the gray cat wants to calm down the anxiety of the moment and just chill.",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "gVsmn4qdyBn1Bra2tN",
      "url": "https://giphy.com/gifs/unscreen-cat-cats-kitty-gVsmn4qdyBn1Bra2tN",
      "slug": "unscreen-cat-cats-kitty-gVsmn4qdyBn1Bra2tN",
      "bitly_gif_url": "https://gph.is/g/Zdnqz30",
      "bitly_url": "https://gph.is/g/Zdnqz30",
      "embed_url": "https://giphy.com/embed/gVsmn4qdyBn1Bra2tN",
      "username": "unscreen",
      "source": "",
      "title": "Cat Dancing GIF by Unscreen",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "source_caption": "",
      "is_sticker": 0,
      "import_datetime": "2023-08-17 15:50:08",
      "trending_datetime": "0000-00-00 00:00:00",
      "images": {
        "original": {
          "height": "480",
          "width": "480",
          "size": "6115038",
          "url": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "1358032",
          "mp4": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "2168352",
          "webp": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "156",
          "hash": "3f08a00f38bddcc2804aab27dd0fbba1"
        },
        "fixed_height": {
          "height": "200",
          "width": "200",
          "size": "1295614",
          "url": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "435283",
          "mp4": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "679522",
          "webp": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "200",
          "size": "44906",
          "url": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "39084",
          "webp": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "100",
          "size": "464913",
          "url": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "156833",
          "mp4": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "214910",
          "webp": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "200",
          "width": "200",
          "size": "1295614",
          "url": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "435283",
          "mp4": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "531544",
          "webp": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "200",
          "width": "200",
          "size": "44906",
          "url": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "39084",
          "webp": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "100",
          "width": "100",
          "size": "464913",
          "url": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "156833",
          "mp4": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "214910",
          "webp": "https://media3.giphy.com/media/gVsmn4qdyBn1Bra2tN/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/unscreen/iO2GhNbzQjLL.gif",
        "banner_image": "",
        "banner_url": "",
        "profile_url": "https://giphy.com/unscreen/",
        "username": "unscreen",
        "display_name": "Unscreen",
        "description": "Remove Video Backgrounds\r\n100% Automatically and Free",
        "instagram_url": "",
        "website_url": "http://www.unscreen.com",
        "is_verified": false
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWdWc21uNHFkeUJuMUJyYTJ0TiZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWdWc21uNHFkeUJuMUJyYTJ0TiZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWdWc21uNHFkeUJuMUJyYTJ0TiZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWdWc21uNHFkeUJuMUJyYTJ0TiZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "9gISqB3tncMmY",
      "url": "https://giphy.com/gifs/cat-star-wars-9gISqB3tncMmY",
      "slug": "cat-star-wars-9gISqB3tncMmY",
      "bitly_gif_url": "http://gph.is/24Uu5kV",
      "bitly_url": "http://gph.is/24Uu5kV",
      "embed_url": "https://giphy.com/embed/9gISqB3tncMmY",
      "username": "",
      "source": "https://www.reddit.com/r/gifs/comments/4jks4t/star_wars_cat/",
      "title": "Star Wars Cat GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.reddit.com",
      "source_post_url": "https://www.reddit.com/r/gifs/comments/4jks4t/star_wars_cat/",
      "is_sticker": 0,
      "import_datetime": "2016-05-16 11:50:06",
      "trending_datetime": "2016-05-16 15:30:02",
      "images": {
        "original": {
          "height": "281",
          "width": "500",
          "size": "1233793",
          "url": "https://media3.giphy.com/media/9gISqB3tncMmY/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "267759",
          "mp4": "https://media3.giphy.com/media/9gISqB3tncMmY/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "435248",
          "webp": "https://media3.giphy.com/media/9gISqB3tncMmY/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "22",
          "hash": "4e6abcc499b8ca3e510a61dceed71338"
        },
        "fixed_height": {
          "height": "200",
          "width": "358",
          "size": "519637",
          "url": "https://media3.giphy.com/media/9gISqB3tncMmY/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "173512",
          "mp4": "https://media3.giphy.com/media/9gISqB3tncMmY/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "222626",
          "webp": "https://media3.giphy.com/media/9gISqB3tncMmY/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "358",
          "size": "133045",
          "url": "https://media3.giphy.com/media/9gISqB3tncMmY/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "84964",
          "webp": "https://media3.giphy.com/media/9gISqB3tncMmY/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "176",
          "size": "173711",
          "url": "https://media3.giphy.com/media/9gISqB3tncMmY/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "50196",
          "mp4": "https://media3.giphy.com/media/9gISqB3tncMmY/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "52784",
          "webp": "https://media3.giphy.com/media/9gISqB3tncMmY/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "112",
          "width": "200",
          "size": "214974",
          "url": "https://media3.giphy.com/media/9gISqB3tncMmY/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "60776",
          "mp4": "https://media3.giphy.com/media/9gISqB3tncMmY/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "63776",
          "webp": "https://media3.giphy.com/media/9gISqB3tncMmY/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "112",
          "width": "200",
          "size": "53654",
          "url": "https://media3.giphy.com/media/9gISqB3tncMmY/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "29248",
          "webp": "https://media3.giphy.com/media/9gISqB3tncMmY/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "56",
          "width": "100",
          "size": "68509",
          "url": "https://media3.giphy.com/media/9gISqB3tncMmY/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "22281",
          "mp4": "https://media3.giphy.com/media/9gISqB3tncMmY/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "25364",
          "webp": "https://media3.giphy.com/media/9gISqB3tncMmY/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTlnSVNxQjN0bmNNbVkmY3Q9Zw",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTlnSVNxQjN0bmNNbVkmY3Q9Zw&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTlnSVNxQjN0bmNNbVkmY3Q9Zw&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPTlnSVNxQjN0bmNNbVkmY3Q9Zw&action_type=SENT"
        }
      },
      "alt_text": "Digital compilation gif. Two cats fight with blue and green light sabers on a beige couch cushion in a bright living room setting. ",
      "is_low_contrast": false
    },
    {
      "type": "gif",
      "id": "dIVa0pwco4Mj5rQ7gy",
      "url": "https://giphy.com/gifs/tiktok-cat-dIVa0pwco4Mj5rQ7gy",
      "slug": "tiktok-cat-dIVa0pwco4Mj5rQ7gy",
      "bitly_gif_url": "https://gph.is/g/amz3v5Z",
      "bitly_url": "https://gph.is/g/amz3v5Z",
      "embed_url": "https://giphy.com/embed/dIVa0pwco4Mj5rQ7gy",
      "username": "tiktok",
      "source": "https://bit.ly/2BcAl0y",
      "title": "Happy International Cat Day GIF by TikTok",
      "rating": "g",
      "content_url": "",
      "source_tld": "bit.ly",
      "source_post_url": "https://bit.ly/2BcAl0y",
      "source_caption": "",
      "is_sticker": 0,
      "import_datetime": "2019-02-22 21:10:53",
      "trending_datetime": "2020-02-27 05:45:05",
      "images": {
        "original": {
          "height": "480",
          "width": "336",
          "size": "3988729",
          "url": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/giphy.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "mp4_size": "712471",
          "mp4": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/giphy.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
          "webp_size": "1822244",
          "webp": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/giphy.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=giphy.webp&ct=g",
          "frames": "56",
          "hash": "f03d1eb7bd5e38462ec8fc3140e11022"
        },
        "fixed_height": {
          "height": "200",
          "width": "140",
          "size": "820650",
          "url": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/200.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.gif&ct=g",
          "mp4_size": "166466",
          "mp4": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/200.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.mp4&ct=g",
          "webp_size": "400074",
          "webp": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/200.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "140",
          "size": "85833",
          "url": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/200_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.gif&ct=g",
          "webp_size": "49566",
          "webp": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/200_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "70",
          "size": "242666",
          "url": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/100.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.gif&ct=g",
          "mp4_size": "62808",
          "mp4": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/100.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.mp4&ct=g",
          "webp_size": "119790",
          "webp": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/100.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100.webp&ct=g"
        },
        "fixed_width": {
          "height": "286",
          "width": "200",
          "size": "1311396",
          "url": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/200w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.gif&ct=g",
          "mp4_size": "291271",
          "mp4": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/200w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.mp4&ct=g",
          "webp_size": "553370",
          "webp": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/200w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "286",
          "width": "200",
          "size": "134090",
          "url": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/200w_d.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
          "webp_size": "88254",
          "webp": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/200w_d.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "144",
          "width": "100",
          "size": "457021",
          "url": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/100w.gif?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.gif&ct=g",
          "mp4_size": "93913",
          "mp4": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/100w.mp4?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.mp4&ct=g",
          "webp_size": "194426",
          "webp": "https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/100w.webp?cid=7233a242j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe&ep=v1_gifs_search&rid=100w.webp&ct=g"
        }
      },
      "user": {
        "avatar_url": "https://media3.giphy.com/avatars/tiktok/78F6dPcUBc73.gif",
        "banner_image": "https://media3.giphy.com/headers/tiktok/SRLJgKV9HbQK.gif",
        "banner_url": "https://media3.giphy.com/headers/tiktok/SRLJgKV9HbQK.gif",
        "profile_url": "https://giphy.com/tiktok/",
        "username": "tiktok",
        "display_name": "TikTok",
        "description": "Get the app now  ↓   ↓  ↓\r\nhttp://vm.tiktok.com/mxhMwf/",
        "instagram_url": "https://instagram.com/tiktok",
        "website_url": "https://bit.ly/2BcAl0y",
        "is_verified": true
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWRJVmEwcHdjbzRNajVyUTdneSZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWRJVmEwcHdjbzRNajVyUTdneSZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWRJVmEwcHdjbzRNajVyUTdneSZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD03MjMzYTI0Mmo1bzRpdGUzNTgwb3JtaWg3d2M4NzdmdXM4cnN1MGo2NGp5YnZoaGUmZ2lmX2lkPWRJVmEwcHdjbzRNajVyUTdneSZjdD1n&action_type=SENT"
        }
      },
      "alt_text": "Video gif. Three cats of different colors hang side by side on a rail as their furry faces rest between their front paws. ",
      "is_low_contrast": false
    }
  ],
  "meta": {
    "status": 200,
    "msg": "OK",
    "response_id": "j5o4ite3580ormih7wc877fus8rsu0j64jybvhhe"
  },
  "pagination": {
    "total_count": 500,
    "count": 25,
    "offset": 0
  }
}
