var setButtonEvent = function() {
$("#search-button").click(function(event){
		event.preventDefault();
		get_user_input();
	});
};

var get_user_input = function() {
	var search_box = document.getElementById("search-box");
	var screen_name = search_box.value;
	async_load_json(screen_name);
};

var async_load_json = function(screen_name) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "/tweets/"+ screen_name, true);
	xhr.onload = function(e) {
		if(xhr.readyState === 4){
			if(xhr.status === 200){
			var parsed_json = xhr.responseText;
			render_tweets(parsed_json);
		} else {
			console.error(xhr.statusText);
		}
	}
};

	xhr.send(null);

};

var render_tweets = function(parced_json) {
	var tweets = $.parseJSON(parced_json);
	console.log(tweets);
	// var json_length,
	// 	tweet,
	// 	tweet_list,
	// 	i = 0;
	// json_length = parsed_json.length;
	// tweet_list = document.getElementById('tweet-list');
	// tweet_list.innerHTML = '';
	// for(;i < json_length;) {
	// 	tweet = parsed_json[i];
	// 	tweet_list.innerHTML += ('<li>' + tweet + '</li>');
	// 	i = i + 1;
	// }
};

window.onload = function() {setButtonEvent();};