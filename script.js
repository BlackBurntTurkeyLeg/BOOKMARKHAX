var input = document.getElementById("input")
input.focus();
function createText(text){
	var tex = document.createElement("text");
  tex.innerHTML = text
  
  document.body.appendChild(tex);
}
function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

document.getElementById("input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click();
    }
})
function myFunction(){
	var str = 'Bookmark this!:\njavascript:var win = window.open("about:blank"); var url = input.value; function create(htmlStr) { var frag = win.document.createDocumentFragment(), temp = win.document.createElement(\'div\'); temp.innerHTML = htmlStr; while (temp.firstChild) { frag.appendChild(temp.firstChild); } return frag; } var fragment = create(\'<iframe src="\'+ url + \'" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>\'); win.document.body.insertBefore(fragment, win.document.body.childNodes[0]);window.close();'
  const a = window.open("about:blank")  
  
  copyTextToClipboard(str);
  
  a.close()
}
