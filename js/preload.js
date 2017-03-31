/**
 * Created by david on 31/03/2017.
 */


process.once('loaded', function () {
	console.log(global.window);
	var elements = global.window.document.getElementsByTagName("body");
	var body = elements.length;
	console.log(body);

})