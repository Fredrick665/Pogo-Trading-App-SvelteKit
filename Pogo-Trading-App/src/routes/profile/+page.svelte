<script lang="ts">
	import type { User } from '../../lib/interfaces/user.js';
	import FormInput from '$lib/components/formInput.svelte';
	import FormWrapper from '$lib/components/formWrapper.svelte';
	const user: User = {
		id: 'user1',
		username: 'Fredrick',
		roles: ['user'],
		preferences: 'dark-theme'
	};
</script>

<section class="profile">
	<h1 class="profile__title">Profile Page</h1>
	<p class="profile__username">Username: {user.username}</p>
	<p class="profile__roles">Roles: {user.roles.join(', ')}</p>
</section>

<FormWrapper />
<FormInput />

<style>
	.profile {
		max-width: 900px;
		background-color: var(--color-surface);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-md);
		position: relative;
		min-height: 60vh;
		font-family: var(--font-body);
		color: var(--color-text);
		margin-inline: auto;
	}

	.profile__title {
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: 2rem;
		color: var(--color-primary);
		position: relative;
		display: inline-block;
	}

	.profile__title::after {
		content: '';
		position: absolute;
		bottom: -0.5rem;
		left: 0;
		width: 40%;
		height: 0.3rem;
		background-color: var(--color-accent);
		border-radius: var(--radius-sm);
	}
</style>
