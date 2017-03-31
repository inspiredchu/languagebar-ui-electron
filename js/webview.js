/**
 * Created by david on 31/03/2017.
 */
var element = window.document.body.getElementsByTagName('webview')[0];
console.dir(element);
element.executeJavaScript('var element2 = window.document.body;console.log(element2);');