const karaoke = {};
karaoke.retroApiKey = `YOUR_API_KEY`;
karaoke.retroBaseUrl = 'https://retroapi.hackeryou.com/api';
karaoke.lyricsBaseUrl = 'https://api.lyrics.ovh/v1';

karaoke.$title = $('.songTitle');
karaoke.$artist = $('.artist');
karaoke.$lyrics = $('.lyrics');

// helper function
// get randome element from array
karaoke.getRandomElement = (array) => {
  const i = Math.floor(Math.random() * array.length);
  return array[i];
}

karaoke.getRetroDetails = () => {
  const yearsResponse = $.ajax({
    url: `${karaoke.retroBaseUrl}/years`,
    method: 'GET',
    dataType: 'json',
    data: {
      apiKey: karaoke.retroApiKey
    }
  });

  return yearsResponse;
}

karaoke.getLyrics = (artist, title) => {
  const response = $.ajax({
    url: `${karaoke.lyricsBaseUrl}/${artist}/${title}`,
    method: 'GET',
    dataType: 'json'
  });

  return response;
}

// helper function
// formats artist for lyrics API
karaoke.formatArtist = (artist) => {
  const soloArtist = artist.split("feat.")[0];
  const formattedAndArtist = soloArtist.replace(' and', ' &').trim();

  return formattedAndArtist;
}

karaoke.setSong = () => {
  // Step 1: Make call to retro API to get back all the years in database
  const allRetroDetails = karaoke.getRetroDetails();

  allRetroDetails.done(res => {
    // Step 2: Grab a random year
    const randYear = karaoke.getRandomElement(res);
    // Step 3: Grab the song array
    const songArray = randYear.songs;
    // Step 4: Grab a random song
    const randSong = karaoke.getRandomElement(songArray);

    // Step 5: Grab artist and title off of song
    const title = randSong.title;
    const artist = randSong.artist;

    // Step 6: Format the artist string, so the lyrics API can use it
    const formattedArtist = karaoke.formatArtist(artist);

    // Step 7: Display artist and title on our screen
    karaoke.$artist.append(formattedArtist);
    karaoke.$title.append(title);

    // Step 8: Pass artist and title into lyrics API to get back the lyrics
    const lyricsData = karaoke.getLyrics(formattedArtist, title);

    // Step 9: Display lyrics on screen
    lyricsData.done(res => { karaoke.$lyrics.append(res.lyrics) });

  });
}

// helper function
// Empties out jQuery objects from our DOM, refreshes the song
karaoke.refreshSong = () => {
  karaoke.$title.empty();
  karaoke.$lyrics.empty();
  karaoke.$artist.empty();
  karaoke.setSong();
}

karaoke.init = () => {
  // Step 10: Refresh the song displayed with every curtain open
  let curtainOpens = 0;

  karaoke.setSong();

  $('.curtain').on('click', () => {
    // If curtainOpens is even / every other click of the curtains
    if (curtainOpens % 2 === 0) {
      karaoke.refreshSong();
    }
    curtainOpens++;
  })

}

$(() => {
  karaoke.init();
})
