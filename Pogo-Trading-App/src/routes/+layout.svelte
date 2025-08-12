<script lang="ts">
	import Modal from '$lib/components/modal.svelte';
	import type { Snippet } from 'svelte';
	let { children, navlist }: { children?: Snippet; navlist?: Snippet } = $props();
</script>

<header class="nav-wrap">
	{#if navlist}
		{@render navlist()}
	{:else}
		<nav class="nav">
			<a class="nav__link" href="/">Home</a>
			<a class="nav__link" href="/trade">Trade</a>
			<a class="nav__link" href="/register">Register</a>
			<a class="nav__link" href="/notification">Notifications</a>
			<a class="nav__link" href="/login">Login</a>
			<a class="nav__link" href="/inventory">Inventory</a>
			<a class="nav__link" href="/profile">Profile</a>
		</nav>
	{/if}
</header>

<main class="main">
	{@render children?.()}
</main>
<Modal />

<style>
	.nav {
		display: flex;
		align-items: center;
		height: 3.75rem;
		background-color: var(--color-primary-dark);
		font-family: var(--font-heading);
		font-weight: 600;
		box-shadow: var(--shadow-md);
		overflow: hidden;
	}

	.nav__link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 8rem;
		height: 100%;
		color: var(--color-surface);
		text-decoration: none;
		position: relative;
		letter-spacing: 0.02em;
		transition: color 180ms ease;
	}

	.nav__link::after {
		content: '';
		position: absolute;
		top: 20%;
		right: 0;
		width: 1px;
		height: 60%;
		background-color: var(--color-primary-light);
		opacity: 0.18;
		pointer-events: none;
	}

	.nav__link:last-child::after {
		content: none;
	}

	.nav__link::before {
		content: '';
		position: absolute;
		left: 12%;
		bottom: 0;
		width: 76%;
		height: 3px;
		background: var(--color-accent);
		transform-origin: left;
		transform: scaleX(0);
		transition: transform 240ms cubic-bezier(0.2, 0.9, 0.3, 1);
		border-radius: var(--radius-sm);
	}

	.nav__link:hover::before,
	.nav__link:focus::before {
		transform: scaleX(1);
	}

	.main {
		width: 100%;
		max-width: 900px;
		margin-inline: auto;
		background-color: var(--color-surface);
		box-shadow: var(--shadow-sm);
		border-radius: var(--radius-md);
		overflow: hidden;
		min-height: 70vh;
		font-family: var(--font-body);
		color: var(--color-text-secondary);
		position: relative;
	}

	.main::before,
	.main::after {
		content: '';
		display: block;
		height: 1.5rem;
		pointer-events: none;
	}

	.main::before {
		background: linear-gradient(90deg, var(--color-bg), var(--color-bg));
		box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.02);
	}

	.main::after {
		background: linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%);
		opacity: 0.08;
	}
</style>
