var audioPlayer = document.getElementById('audioPlayer');
  var currentSong = 0;
  var songs = [
    'Kepada Titik Nol Kita Kembali (Agustinus Wibowo)_1JDzdnSEruM.mp3',
    'Menyayangimu adalah soal keikhlasan_fQje9D-o3eo.mp3',
    'OST. PETUALANGAN SHERINA - Luthfi Aulia feat. Mentari Novel (COVER).mp3'
  ];

  audioPlayer.addEventListener('ended', function() {
    currentSong++;
    if (currentSong >= songs.length) {
      currentSong = 0; // Kembali ke lagu pertama setelah lagu terakhir selesai
    }
    audioPlayer.src = songs[currentSong];
    audioPlayer.play();
  });

  audioPlayer.src = songs[currentSong];
  audioPlayer.play();