<script context="module">
	import { fly } from 'svelte/transition';
</script>

<script>
	let username = '';
	// let email = '';
	let password = '';
	let passwordConfirm = '';
	let email = '';
	$: passwordEqual = true;
	let showRegFormular = false;
	function toggleShowFormular() {
		showRegFormular = !showRegFormular;
	}
	async function sendRegisterRequest() {
		try {
			const response = await fetch('http://localhost:9090/user/v1', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: username,
					password: password,
					email: email
				})
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(`Error in sendRequest function: ${error}`);
		}
	}
	$: if (password === passwordConfirm || passwordConfirm === '') {
		passwordEqual = true;
	} else {
		passwordEqual = false;
	}
</script>

<section>
	New here?
	<button on:click={toggleShowFormular}>Create Account</button>
	<br /><br />
</section>
{#if showRegFormular}
	<section transition:fly={{ x: -50, duration: 1000 }}>
		<form>
			<input bind:value={username} type="text" placeholder="Username" /><br />
			<!-- <input bind:value={email} type="email" placeholder="E-Mail" /><br/> -->
			<input bind:value={password} type="password" placeholder="Password" /><br />
			{#if passwordEqual}
				<input bind:value={passwordConfirm} type="password" placeholder="Confirm Password" /><br />
			{:else}
				<input
					class="wrong"
					bind:value={passwordConfirm}
					type="password"
					placeholder="Confirm Password"
				/>
				<br />
			{/if}
			<input bind:value={email} type="email" placeholder="Email" /><br />
		</form>
		<button on:click={sendRegisterRequest}>Submit</button>
	</section>
{/if}

<style>
	button {
		font-size: 11px;
		text-decoration: none;
	}
	form {
		width: 100%;
	}

	.wrong {
		color: red;
	}
</style>
