<script lang="ts">
	import type { Credentials } from '../../lib/interfaces/credentials.js';
	import FormInput from '$lib/components/formInput.svelte';
	import FormWrapper from '$lib/components/formWrapper.svelte';

	let credentials: Credentials = { username: '', password: '' };

	function submitLogin() {
		console.log('Loggar in med', credentials);
	}
</script>

<section class="login">
	<h1 class="login__title">Login Page</h1>

	<form class="login__form" on:submit|preventDefault={submitLogin}>
		<input
			type="text"
			placeholder="Username"
			bind:value={credentials.username}
			class="login__input"
		/>
		<input
			type="password"
			placeholder="Password"
			bind:value={credentials.password}
			class="login__input"
		/>
		<button type="submit" class="login__button">Login</button>
	</form>
</section>
<FormWrapper />
<FormInput />

<style>
	.login {
		max-width: 400px;
		background-color: var(--color-surface);
		box-shadow: var(--shadow-lg);
		border-radius: var(--radius-md);
		position: relative;
		min-height: 40vh;
		font-family: var(--font-body);
		color: var(--color-text);
		margin-inline: auto;
	}

	.login__title {
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: 2rem;
		color: var(--color-primary-dark);
		position: relative;
		display: inline-block;
	}

	.login__title::after {
		content: '';
		position: absolute;
		bottom: -0.4rem;
		left: 0;
		width: 35%;
		height: 0.25rem;
		background-color: var(--color-primary-light);
		border-radius: var(--radius-sm);
	}
</style>
