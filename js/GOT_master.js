(() => {
	console.log('Fired!');

	// variable stack -> get the shields
	const sigils = document.querySelectorAll('.sigilContainer'),
		  lightBox = document.querySelector('.lightbox'),
		  closeButton = document.querySelector('.close-lightbox'),
		  houseVideo = document.querySelector('.house-video'),
		  bannerImages = document.querySelector("#houseImages"),
		  houseName = document.querySelector("#house-name"),
		  houseInfo = document.querySelector(".house-info");


	const houseData = [
		["stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],
		["baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.`], 
		["lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.`], 
		["tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."`], 
		["greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.`], 
		["arryn",`House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.`]
		];
		  

	function popLightBox() {

		lightBox.classList.add('show-lightbox');

		houseVideo.play();
	}

	function closeLightBox(event) {
		event.preventDefault();
		
		// make the lightbox close
		lightBox.classList.remove('show-lightbox');
		houseVideo.currentTime = 0; //rewind the video
		houseVideo.pause();
	}

	function animateBanners() {
		//we need an offset that we can multiply by to animate
		//our banners to the left and make that active one show up

		let offset = 600,
			multiplier = this.dataset.offset;
			//this is the data-offset custom data attribute
			//on each of the sigils

		console.log((offset * multiplier) + "px");

		//move the banners to the left using the product of our math
		bannerImages.style.right = `${offset * multiplier + "px"}`;

		//houseName.textContent = "House " + houseData[multiplier];
		houseName.textContent = `House ${houseData[multiplier][0]}`;
		houseInfo.textContent = houseData[multiplier][1];
	}


	/*sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));*/
	sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));

	closeButton.addEventListener("click", closeLightBox);
	houseVideo.addEventListener('ended', closeLightBox);


})();