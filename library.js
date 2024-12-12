const library = {
  tracks: {
	  t01:
		{
			id: "t01",
    	name: "Code Monkey",
    	artist: "Jonathan Coulton",
    	album: "Thing a Week Three" 
		},
  	t02: 
		{
			id: "t02",
    	name: "Model View Controller",
    	artist: "James Dempsey",
    	album: "WWDC 2003"},
  	t03: 
		{
			id: "t03",
    	name: "Four Thirty-Three",
    	artist: "John Cage",
    	album: "Woodstock 1952"
		}
  },
  playlists:
	{
		p01:
		{
			id: "p01",
    	name: "Coding Music",
    	tracks: ["t01", "t02"]
  	},
  	p02:
		{
			id: "p02",
    	name: "Other Playlist",
    	tracks: ["t03"]
  	}
  },
//-------------------------------------------------------------
	printPlaylists: function() {
		for (const playlistsObj in this.playlists) {
		// console.log(playlistsObj) // keys: p01, p02 of playlists
		const valueOfName = this.playlists[playlistsObj] // value of name inside object(p01, p02)
		// console.group(valueOfName.name) // coding music, other playlist
		// console.log(valueOfName.tracks.length) // 2, 1
		console.log(`${playlistsObj}: ${valueOfName.name} - ${valueOfName.tracks.length} tracks`)
		}
	},
//-------------------------------------------------------------
	printTracks: function() {
		for (const track in this.tracks) { // t01, t02, t03
			const songName 		= this.tracks[track].name // all values of name property
			const artistName	= this.tracks[track].artist
			const albumName 	= this.tracks[track].album
			console.log(`${track}: ${songName} by ${artistName} (${albumName})`)
		}
	},
//-------------------------------------------------------------
	printPlaylist: function(playlistId) { // expecting a string paramter
		const playlist = this.playlists[playlistId] //
		// console.log(playlist)
		console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`)
	
		for (const trackId of playlist.tracks) {
			// console.log(trackId)
			const track = this.tracks[trackId]
			// console.log(track)
			console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
		}
	},
//-------------------------------------------------------------
	addTrackToPlaylist: function(trackId, playlistId) {
		const tracklistId = this.tracks[trackId]
		const playlist = this.playlists[playlistId]
		// console.log(tracklistId) // should be the object t01, t02, t03
		// console.log(playlist) // should be p01, p02
	
		if (!tracklistId) {
			console.log(`Track list ID ${trackId} does not exist`)
			return; //add return to prevent code from running further if condition is false
		}
		
		if (!playlist) {
			console.log("playlist ID doesn't exist ")
			return;
		}
	
		// now check current trackID already exists in playlist, if not, then add to it
	const tracksArr = playlist.tracks
		if (tracksArr.includes(trackId)) {
			console.log(`track ${trackId} already exists in ${playlistId}, no need to add again` )
			return
		}
	
		tracksArr.push(trackId)
		console.log(`${trackId} has been added to ${playlistId}`)
		console.log(playlist)
	},
//-------------------------------------------------------------
	generateUid: function() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	},
	//-------------------------------------------------------------
	addTrack: function(name, artist, album) {
		const newTrackId = this.generateUid();
		const trackObj = {
			id: newTrackId,
			name: name,
			artist: artist,
			album: album
		};
		
		this.tracks[newTrackId] = trackObj;
		
		console.log(`${trackObj.name} has been added to the library`);
	},
	//-------------------------------------------------------------
	addPlaylist: function(name) {
		const newPlaylistId 	= this.generateUid();
		const newPlaylistObj 	=
		{
			id: newPlaylistId,
			name: name,
		};
		this.playlists[newPlaylistId] = newPlaylistObj;
	}
};

library.generateUid()
library.addPlaylist("Morning get up song");
console.log(library.playlists);
/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// // prints a list of all playlists, in the form:
// // p01: Coding Music - 2 tracks
// // p02: Other Playlist - 1 tracks



// printPlaylists()

// // prints a list of all tracks, using the following format:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)



// printTracks()

// // prints a list of tracks for a given playlist, using the following format:
// // p01: Coding Music - 2 tracks
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)



// printPlaylist("p01")
// printPlaylist("p02")


// // adds an existing track to an existing playlist

// // first check if both track and playlist exists


// addTrackToPlaylist("t03",  "p01")
// addTrackToPlaylist("t01",  "p02")
// addTrackToPlaylist("t02",  "p02")
// addTrackToPlaylist("t01",  "p02")



// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)


// // console.log(generateUid())

// adds a track to the library


// addTrack("GetUp", "GoodMorning Pancake", "Getup");
// console.log(library.tracks);

// adds a playlist to the library


// addPlaylist("Morning get up song");
// console.log(library.playlists);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};