<script lang="ts"></script>

<article class="pokemonCard">
	<img class="pokemonCard__image" alt="Pokemon" />
	<p class="pokemonCard__species">Species ID:</p>
	<p class="pokemonCard__cp">CP:</p>
	<p class="pokemonCard__form">Form:</p>
	<p class="pokemonCard__shiny">Shiny:</p>
	<p class="pokemonCard__locked">Locked:</p>
</article>

<style>
	.pokemonCard {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		font-family: var(--font-body);
		color: var(--color-text);
		display: flex;
		flex-direction: column;
		width: 250px;
		position: relative;
	}

	.pokemonCard__image {
		display: block;
		width: 100%;
		height: auto;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		position: relative;
	}

	.pokemonCard__image::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: var(--radius-md);
		box-shadow: inset 0 0 15px var(--color-primary-light);
		pointer-events: none;
	}

	.pokemonCard__species,
	.pokemonCard__cp,
	.pokemonCard__form,
	.pokemonCard__shiny,
	.pokemonCard__locked {
		color: var(--color-text-secondary);
		position: relative;
	}

	.pokemonCard__species::after,
	.pokemonCard__cp::after,
	.pokemonCard__form::after,
	.pokemonCard__shiny::after,
	.pokemonCard__locked::after {
		content: '';
		display: block;
		height: 1px;
		width: 100%;
		background: var(--color-border);
		position: absolute;
		bottom: -5px;
		left: 0;
	}
</style>
