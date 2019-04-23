$(document).ready(() => {
  $('a[href="#morning"]').click(() => {
    $('#mainBody').load('../morningAct.html');
  });
  $('a[href="#welcome"]').click(() => {
    $('#mainBody').load('../welcome.html');
  });
  $('a[href="#afternoon"]').click(() => {
    $('#mainBody').load('../afternoonAct.html');
  });
  $('a[href="#evening"]').click(() => {
    $('#mainBody').load('../eveningAct.html');
  });
  $('a[href="#yesno"]').click(() => {
    $('#mainBody').load('../yesno.html');
  });
  $('a[href="#feelings"]').click(() => {
    $('#mainBody').load('../feelings.html');
  });
  $('a[href="#oscar"]').click(() => {
    $('#mainBody').load('../oscar.html');
  });
});
function openNav() {
  $('#mySidenav').width('250px');
  $('#main').css('marginLeft', '250px');
  $('body').css('background-color', 'rgba(250, 174, 103, 0.74)');
}
function closeNav() {
  $('#mySidenav').width('0');
  $('#main').css('marginLeft', '0');
  $('body').css('background-color', 'rgba(250, 174, 103, 0.74)');
}
