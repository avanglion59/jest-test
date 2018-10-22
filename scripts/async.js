import axios from 'axios'

function async_request() {
	return axios.get('https://jsonplaceholder.typicode.com/posts/1');
}

module.exports = async_request;