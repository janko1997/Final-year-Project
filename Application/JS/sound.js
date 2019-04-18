// $(document).ready(() => {
//   $('#yes').click(function() {
//       $("#Yes.mp3")[0].play();
//   });
// });
$(document).ready(function() {
  const obj1 = document.createElement('audio');
  obj1.src = '/sounds/Yes.mp3';
  obj1.volume = 0.5;
  obj1.autoPlay = false;
  obj1.preLoad = true;
  obj1.controls = true;

  const obj2 = document.createElement('audio');
  obj2.src = '/sounds/No.mp3';
  obj2.volume = 0.5;
  obj2.autoPlay = false;
  obj2.preLoad = true;
  obj2.controls = true;

  $('#yes').click(function() {
    obj1.play();
    // obj.pause();
  });
  $('#no').click(function() {
    obj2.play();
    // obj.pause();
  });
});
