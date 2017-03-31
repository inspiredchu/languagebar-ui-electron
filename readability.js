

var readability = {
	regex: {
		tag: {
			omit: /script|button|header|footer/i
		},
		class: {
			omit: /link|menu|header/i
		}
	},

	init: function () {
		var page = readability.prepPage(),
			allElements = page.getElementsByTagName('*'),
			content = '';

		for (var i = 0; i < allElements.length; i++)  {
			var element = allElements[i];
			var childNodes = element.childNodes;
			var elementContent = '';
			for (var i2 = 0; i2 < childNodes.length; i2++){
				var childNode = childNodes[i2];
				if (childNode.nodeType == 3 && childNode.textContent.trim() !== "")
					elementContent = elementContent + childNode.textContent;
			}

			if (elementContent.length > 10 && elementContent.search(/(\w+\s){3,}/) > -1){
				content = content + elementContent + "\n";
			}

		}

		readability.attachEvents();
		console.log(content);
	},

	prepPage: function () {
		var pageObj = document.body.cloneNode(true);
		var allElements = pageObj.getElementsByTagName('*');

		for (var i = 0; i < allElements.length; i++){
			var element = allElements[i];
			if (element.tagName.search(readability.regex.tag.omit) != -1){
				element.parentNode.removeChild(element);
				i-=1;
			}

			if (element.tagName == "A" || element.tagName == "SPAN"){
				element.outerHTML = element.innerHTML;
				i -= 1;
			}
		}

		return pageObj;
	},

	getContent: function () {
		var page = document.body,
			allElements = page.getElementsByTagName('*'),
			content = "";

		for (var elementIndex = 0; elementIndex < allElements.length; elementIndex++){
			var element = allElements[elementIndex],
				childNodes = element.childNodes;

			for (var childIndex = 0; childIndex < childNodes.length; childIndex++){
				var childNode = childNodes[childIndex];

				if (childNode.nodeType = 3 && childNode.textContent.trim() != ""){
					content = content + childNode.textContent;
				}
			}
		}
	},

	attachEvents: function () {
		document.body.addEventListener('click', function (event) {
			console.log(event);
		});
	}
}

readability.init();