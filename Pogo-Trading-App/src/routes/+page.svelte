<script lang="ts">
	import Toast from '$lib/components/toast.svelte';
</script>

<section class="home">
	<h1 class="home__title">Välkommen till Fredricks PogoTrading App</h1>
	<Toast />
</section>

<style>
	.home {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80%;
		height: 80vh;
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow-lg);
		position: relative;
	}

	.home::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		background-color: var(--color-primary);
		border-radius: var(--radius-sm);
	}

	.home__title {
		font-family: var(--font-heading);
		font-weight: 700;
		color: var(--color-primary-dark);
		position: relative;
	}

	.home__title::before {
		content: '';
		position: absolute;
		left: -12px;
		top: 50%;
		transform: translateY(-50%);
		width: 6px;
		height: 80%;
		background-color: var(--color-accent-dark);
		border-radius: var(--radius-sm);
	}
</style>
