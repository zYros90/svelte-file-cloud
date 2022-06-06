<script>
	import { userStore } from '../props/stores.js';
	// $: console.log('change in userStore', $userStore);
	let username = '';
	let password = '';

	// ### sub to store example ###
	let token = '';
	let wrongpassword = '';

	// using fetch()
	async function sendLoginRequest() {
		try {
			const response = await fetch('http://localhost:9090/login/v1', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: username,
					password: password
				})
			});
			const loginResp = await response.json();
			// TODO before setting userstore check fields
			if (response.status != 200) {
				console.error(`login failed`);
				wrongpassword = 'wrong password';
			} else {
				token = loginResp['token'];
				userStore.set(loginResp);
				wrongpassword = '';
			}
		} catch (error) {
			console.error(`Error in sendRequest function: ${error}`);
		}
	}
</script>

<section>
	<h2>Login</h2>
	<input bind:value={username} placeholder="username" />
	<input type="password" bind:value={password} placeholder="password" />
	<button on:click={sendLoginRequest}>Login</button> <b>{wrongpassword}</b><br /><br />
	<br />
</section>

<style>
	h2 {
		text-align: left;
	}
	h3 {
		text-align: center;
	}
	button {
		font-size: 14px;
		text-decoration: none;
	}
</style>
