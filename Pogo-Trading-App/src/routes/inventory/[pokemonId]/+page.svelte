<script lang="ts">
	import type { inventoryItem } from '../../../lib/interfaces/inventoryItem.js';
	import PokemonCard from '$lib/components/pokemonCard.svelte';

	const itemDetail: inventoryItem = {
		id: 'item1',
		pokemon: {
			id: 'poke1',
			speciesId: 25,
			form: 'normal',
			cp: 1500,
			shiny: false,
			moves: { fast: 'Thunder Shock', charged: 'Thunderbolt' },
			gender: 'male',
			capturedAt: new Date(),
			imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
			source: 'wild',
			tags: 'tradeable'
		},
		ownerId: 'user1',
		isLocked: false,
		createdAt: new Date()
	};
</script>

<section class="inventoryPokemon">
	<h1 class="inventoryPokemon__title">Inventory PokemonID Page</h1>

	<article class="inventoryPokemon__details">
		<img src={itemDetail.pokemon.imageUrl} alt="Pokemon" class="inventoryPokemon__image" />
		<p>Species ID: {itemDetail.pokemon.speciesId}</p>
		<p>CP: {itemDetail.pokemon.cp}</p>
		<p>Form: {itemDetail.pokemon.form}</p>
		<p>Shiny: {itemDetail.pokemon.shiny ? 'Yes' : 'No'}</p>
		<p>Locked: {itemDetail.isLocked ? 'Yes' : 'No'}</p>
	</article>
</section>
<PokemonCard />

<style>
	.inventoryPokemon {
		max-width: 900px;
		background-color: var(--color-bg);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		position: relative;
		min-height: 60vh;
		font-family: var(--font-body);
		color: var(--color-text-secondary);
		margin-inline: auto;
	}

	.inventoryPokemon__title {
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: 2rem;
		color: var(--color-primary-dark);
		position: relative;
		display: inline-block;
	}

	.inventoryPokemon__title::before {
		content: '';
		position: absolute;
		top: -1rem;
		left: 0;
		width: 50px;
		height: 4px;
		background-color: var(--color-accent-dark);
		border-radius: var(--radius-sm);
	}

	.inventoryPokemon__image {
		width: 100px;
		height: 100px;
		object-fit: contain;
		display: block;
		margin-block-end: 1rem;
	}
</style>
