console.log('test');

soundManager.onload= function(){
 soundManager.createSound({
 id:'mySound1',
 url:'audiofiles/run.m4a'
 });

$('.beyonce').on('click', function(){
   console.log("hello")
 var mySound = soundManager.createSound({
   url: 'audiofiles/run.m4a' 
});
////cal function
 mySound.play();

