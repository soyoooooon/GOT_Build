(() => {
	console.log('Fired!');

	// variable stack -> get the shields
	const sigils = document.querySelectorAll('.sigilContainer'),
		  lightBox = document.querySelector('.lightbox'),
		  closeButton = document.querySelector('.close-lightbox'), 
		  houseVideo = document.querySelector('.house-video'),
		  bannerImages = document.querySelector("#houseImages"),
		  houseName = document.querySelector("#house-name"),
		  houseInfo = document.querySelector(".house-info"),
		  pauseButton = document.querySelector(".fa-pause"),
		  playButton = document.querySelector(".fa-play"),
		  stepButton = document.querySelector(".fa-step-backward");
          
	const houseData = [ //houseData[0] is pointing the name for stark, [1] is paragraph
		["stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],

		["baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.`], 
		["lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.`], 
		["tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."`], 
		["greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.`], 
		["arryn",`House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.`]
		];
		  videoData = ["House-Stark.mp4", "House-Baratheon.mp4", "House-Lannister.mp4", "House-Tully.mp4", "House-Greyjoy.mp4", "House-Arryn.mp4"];

		  //이름은 차례대로 0,1,2,3,4,5로 주고[1][0], paragraph will be [1][1]
		  //house Data is a multidimensional array (arrays within arrays!) Data containers can hold anything - in this case, each index or entry holds another, smaller container with 2 indexes - 1 with the house name, one with the house data.//
		  //when you click on a shield, the dataset.offset property is a 0 through 4 that's poiniting at the main index of houseData array (stark, baratheon, etc) so the syntax becomes houseData[0][0] for the house name,
		  //and houseData[0][1] for the house 

		  //pause the video on a click
		  function pauseVideo() {
		  	houseVideo.pause();

		  }


		  function playVideo(){
		  	houseVideo.play();
		  }


		  function playRevideo(){
		  	houseVideo.currentTime = 0; //rewind the video
			houseVideo.play();

		  }
		  //write the other functions for the custom video controls (play, volume control, time counter,,,)


	function popLightBox() {

		lightBox.classList.add('show-lightbox');

		//grab a reference to the current video via the className object
		//get the className property, split it into its seperate words(an array), and 
		//then get the last word -> [1]-> that will always be the house name.
		
		//let houseName = this.className.split(" ")[1];

		let houseName = this.className;//.videoData;
		// capitalize the first letter with j.s string methods
		houseName = `House-${videoData}`;
		//houseName.src = document.querySelector(`#${videoData}`)
		//debugger;

		houseName = houseVideo.load();
		houseName = houseVideo.play();

		//debugger;
		//houseName = houseName.charAt(0).toUpperCase() + houseName.slice(1);
		//charAt 0 - start letter (soyoon = s) slice 1 = the rest of letters except the first one(0)
		// S //oyoon(slices)
		// use Javascript string interpolation to build the path to the target video
		//let videoPath =`video/House-${houseName}.mp4`;
	
		//load this new video videoPath
		//houseVideo.src = videoPath;
		//houseVideo.src = videoData;

		//houseVideo.load();

		//houseVideo.play();
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

		//the multiplier is the outer array index (and also the data-offest custom attribute on)
		//the html element -> the shield you're clicking on
		//houseName.textContent = "House " + houseData[multiplier];
		//the second [] is the INNER array reference 어레이//
		houseName.textContent = `House ${houseData[multiplier][0]}`;
		houseInfo.textContent = houseData[multiplier][1];

		//lightBox.classList.add('show-lightbox');


	}


	//sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
	sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));
	bannerImages.addEventListener("transitionend",popLightBox);

	//debugger;

	closeButton.addEventListener("click", closeLightBox);
	houseVideo.addEventListener('ended', closeLightBox);
	pauseButton.addEventListener("click", pauseVideo);
	playButton.addEventListener("click", playVideo);
	stepButton.addEventListener("click", playRevideo);


})();