console.log('hello');


 soundManager.setup({
  url: 'scripts/audiofiles/english.mp3',
  onready: function() {


    $('#clip1').on('click', function(){
      var mySound = soundManager.createSound({
        url: 'scripts/audiofiles/AdamWest.mp3',
      });
      mySound.play();
    });

    $('#clip2').on('click', function(){
      var mySound = soundManager.createSound({
        url: 'scripts/audiofiles/MichaelKeaton.mp3',
      });
      mySound.play();
    });

    $('#clip3').on('click', function(){
      var mySound = soundManager.createSound({
        url: 'scripts/audiofiles/ValKilmer2.mp3',
      });
      mySound.play();
    });

    $('#clip4').on('click', function(){
      var mySound = soundManager.createSound({
        url: 'scripts/audiofiles/GeorgeClooney2.mp3',
      });
      mySound.play();
    });

    $('#clip5').on('click', function(){
      var mySound = soundManager.createSound({
        url: 'scripts/audiofiles/ChristianBale.mp3',
      });
      mySound.play();
    });

    $('#clip6').on('click', function(){
      var mySound = soundManager.createSound({
        url: 'scripts/audiofiles/WillArnett2.mp3',
      });
      mySound.play();
    });



  },
  ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
  }
});