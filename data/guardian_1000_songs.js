var fs = require('fs');

fs.readFile('guardian_1000_songs_source.json', function(error, data) {
  if(error) {
    throw error;
  }

// 0, 8-12
// theme, title, artist, year, spotify_url
  var newData = JSON.parse(data).data.map(function(song) {   
    return {
      rank: song[0],
      theme: song[8],
      title: song[9],
      artist: song[10],
      year: song[11],
      spotify_url: song[12][0]
    }
  });
  
  fs.writeFile('guardian_1000_songs.json', JSON.stringify(newData), function(error) {
    if(error) {
      throw error;
    }
    console.log('Write successful!');
  });
});
