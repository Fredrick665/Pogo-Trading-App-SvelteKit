<script lang="ts">
	import type { Notification } from '../../lib/interfaces/notification.js';
	import FormInput from '$lib/components/formInput.svelte';
	import FormWrapper from '$lib/components/formWrapper.svelte';

	const notifications: Notification[] = [
		{
			id: 'notif1',
			userId: 'user1',
			type: 'tradeRequest',
			Payload: {},
			Read: false,
			createdAt: new Date()
		}
	];
</script>

<section class="notification">
	<h1 class="notification__title">Notification Page</h1>

	<ul class="notification__list">
		{#each notifications as notif}
			<li class="notification__item">
				<p>Type: {notif.type}</p>
				<p>Status: {notif.Read ? 'Read' : 'Unread'}</p>
				<p>Date: {notif.createdAt.toLocaleString()}</p>
			</li>
		{/each}
	</ul>
</section>
<FormWrapper />
<FormInput />

<style>
	.notification {
		max-width: 900px;
		background-color: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow-sm);
		position: relative;
		min-height: 50vh;
		font-family: var(--font-body);
		color: var(--color-text-secondary);
		margin-inline: auto;
	}

	.notification__title {
		font-family: var(--font-heading);
		font-weight: 600;
		font-size: 1.8rem;
		color: var(--color-info);
		position: relative;
		display: inline-block;
	}

	.notification__title::before {
		content: '';
		position: absolute;
		top: -1rem;
		left: 0;
		width: 60px;
		height: 3px;
		background-color: var(--color-info);
		border-radius: var(--radius-sm);
	}
</style>
