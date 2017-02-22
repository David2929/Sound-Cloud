function Jukebox()	{
	this.findAndPlayTrack = function()	{
	var trackName = $("#track-name").val()

	SC.get('/tracks', {
	  q: 'trackName', license: 'cc-by-sa'
	}).then(function(tracks) {
	console.log(tracks)
	var firstTrack = tracks[0]

	$(".song-title").empty()
	$(".song-title").append(firstTrack.title)

	$(".description").empty()
	$(".description").append(firstTrack.description)

	$(".genre").empty()
	$(".genre").append(firstTrack.genre)

	$(".artwork").empty()
	$(".artwork").html("<img src=" + firstTrack.artwork_url + "></img>")


	SC.stream('/tracks/' + firstTrack.id).then(function(player){
  	myPlayer = player
  	player.play();
	});
	});
	}

	this.pause = function()	{
		myPlayer.pause()
	}
	}


$(document).ready(function()	{
var jukebox = new Jukebox()
SC.initialize({     
	client_id: 'fd4e76fc67798bfa742089ed619084a6'   
});
 


$(".search-button").click(function()	{	
	jukebox.findAndPlayTrack()
})
         

$(".pause-button").click(function()	{
	jukebox.pause()
})

})


