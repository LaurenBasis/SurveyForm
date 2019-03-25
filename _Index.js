function preventFormSubmit() {
  var forms = document.querySelectorAll('form');
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function(event) {
      event.preventDefault();
    });
  }
}
window.addEventListener('load', preventFormSubmit);

function handleFormSubmit(formObject) {
  google.script.run.withSuccessHandler(updateUrl).processForm(formObject);
}
function updateUrl(url) {
  var div = document.getElementById('output');
  div.innerHTML = '<a href="' + url + '">Got it!</a>';
}