function drag(evt) {
  evt.dataTransfer.setData('text', evt.target.id);
}
function drop(evt) {
  evt.preventDefault();
  const data = evt.dataTransfer.getData('text');
  evt.target.appendChild(document.getElementById(data));
  // data.className += ' dropped';
}
function allowDrop(evt) {
  evt.preventDefault();
  if (evt.target.getAttribute('draggable') === 'true')
    evt.dataTransfer.dropEffect = 'none';
  // dropping is not allowed
  else evt.dataTransfer.dropEffect = 'all'; // drop allowed
}
