(function () {

	L.TextIcon = L.Icon.extend({
		options: L.extend({}, new L.Icon.Default().options),

		initialize: function (options) {
			L.setOptions(this, options);
			var iconUrl = 'lib/leaflet/images/' + this.options.windNum + '.png'
			this._iconImg = this._createImg(iconUrl);
			this._iconImg.style.webkitTransformOrigin = "center bottom";
			this._iconImg.style.webkitTransform = "rotate(" + this.options.windDirection + "deg)";
		},
		createIcon: function () {

			var temperatureDiv = document.createElement('div');
			temperatureDiv.className = 'icon-text-temperature';
			temperatureDiv.innerHTML = this.options.temperature || '';
			
			var rHDiv = document.createElement('div');
			rHDiv.className = 'icon-text-rH';
			rHDiv.innerHTML = this.options.rH || '';


			var textDiv = document.createElement('div');
			textDiv.appendChild(temperatureDiv);
			textDiv.appendChild(rHDiv);
			//textDiv.style
			var div = document.createElement('div');
			div.appendChild(this._iconImg);
			div.appendChild(textDiv);

			this._setIconStyles(div, 'icon');
			this._textDiv = textDiv;
			return div;
		},
		setElementHiddden: function (elementNum) {
			//this._iconImg.src = 'lib/leaflet/images/' + windNum + '.png'
			this._textDiv.children[elementNum].style.visibility="hidden";
		}
	});

} ());
