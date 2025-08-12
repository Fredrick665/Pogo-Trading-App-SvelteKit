<script lang="ts">
	import type { inventoryItem } from '../../lib/interfaces/inventoryItem.ts';
	import type { Pokemon } from '../../lib/interfaces/pokemon.ts';
	import InventoryList from '$lib/components/inventoryList.svelte';
	import PokemonCard from '$lib/components/pokemonCard.svelte';

	const examplePokemon: Pokemon = {
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
	};

	const inventory: inventoryItem[] = [
		{
			id: 'item1',
			pokemon: examplePokemon,
			ownerId: 'user1',
			isLocked: false,
			createdAt: new Date()
		}
	];
</script>

<section class="inventory">
	<h1 class="inventory__title">Inventory Page</h1>

	<ul class="inventory__list">
		{#each inventory as item}
			<li class="inventory__item">
				<img src={item.pokemon.imageUrl} alt="Pokemon" class="inventory__image" />
				<p class="inventory__pokemonSpecies">Species ID: {item.pokemon.speciesId}</p>
				<p class="inventory__pokemonCp">CP: {item.pokemon.cp}</p>
				<p class="inventory__locked">{item.isLocked ? 'Locked' : 'Unlocked'}</p>
			</li>
		{/each}
	</ul>
</section>
<InventoryList />

<style>
	.inventory {
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

	.inventory__title {
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: 2rem;
		color: var(--color-primary-dark);
		position: relative;
		display: inline-block;
	}

	.inventory__title::before {
		content: '';
		position: absolute;
		top: -1rem;
		left: 0;
		width: 50px;
		height: 4px;
		background-color: var(--color-accent-dark);
		border-radius: var(--radius-sm);
	}

	.inventory__list {
		list-style: none;
		width: 100%;
	}

	.inventory__item {
		background-color: var(--color-surface);
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow-sm);
		display: flex;
		align-items: center;
		border: 1px solid var(--color-border);
		margin-bottom: 0;
		position: relative;
	}

	.inventory__image {
		width: 72px;
		height: 72px;
		object-fit: contain;
		flex-shrink: 0;
	}

	.inventory__pokemonSpecies,
	.inventory__pokemonCp,
	.inventory__locked {
		font-family: var(--font-body);
		color: var(--color-text-secondary);
		display: inline-block;
		width: 100%;
	}
</style>
