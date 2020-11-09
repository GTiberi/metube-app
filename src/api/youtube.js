import axios from 'axios';

const KEY = 'AIzaSyAVoweb210Q626HxHlei4LCSsxPfhT9HK0';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
		type: 'video',
	},
});
