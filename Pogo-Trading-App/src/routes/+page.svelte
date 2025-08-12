<script lang="ts"></script>

<section class="home">
	<h1 class="home__title">Välkommen till Fredricks PogoTrading App</h1>
</section>

<style>
	.home {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80%;
		height: 80%;
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
		height: 5px;
		background-color: var(--color-primary);
	}

	.home::after {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 5px;
		background-color: var(--color-accent);
	}

	.home__title {
		font-family: var(--font-heading);
		color: var(--color-primary-dark);
		position: relative;
	}

	.home__title::before {
		content: '';
		position: absolute;
		left: -10px;
		top: 50%;
		transform: translateY(-50%);
		width: 5px;
		height: 100%;
		background-color: var(--color-accent-dark);
	}
</style>
