import async_request from './../scripts/async.js'

test('async function that returns date from jsonplaceholder works well (return way)', () => {
	expect.assertions(3); // Для того, чтобы быть уверенными в том, что все три expect-a вызвались
	return async_request().then(data => {
		expect(data.data.id).toBe(1);
		expect(data.data.userId).toBe(1);
		expect(data.data.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
	});
});

test('async function that returns date from jsonplaceholder works well (done() way)', done => {
	expect.assertions(3); // Для того, чтобы быть уверенными в том, что все три expect-a вызвались
	async_request().then(data => {
		expect(data.data.id).toBe(1);
		expect(data.data.userId).toBe(1);
		expect(data.data.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
		done();
	});
});