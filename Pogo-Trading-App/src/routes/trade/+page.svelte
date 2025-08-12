<script lang="ts">
	import type { tradeOffer } from '../../lib/interfaces/trade.ts';
	import FormInput from '$lib/components/formInput.svelte';
	import FormWrapper from '$lib/components/formWrapper.svelte';
	import TradeCard from '$lib/components/tradeCard.svelte';

	const trade: tradeOffer = {
		id: 'trade123',
		Creatorid: 'user1',
		Offereditems: [],
		Requesteitems: [],
		Message: "Let's trade these Pokémon!",
		Status: 'pending',
		createdAt: new Date(),
		expiresAt: new Date(Date.now() + 7 * 24 * 3600 * 1000),
		Participants: [],
		Visibility: true
	};
</script>

<section class="trade">
	<h1 class="trade__title">Trade Page</h1>

	<article class="trade__offer">
		<p class="trade__message">{trade.Message}</p>
		<p class="trade__status">Status: {trade.Status}</p>
		<p class="trade__expiry">Expires: {trade.expiresAt.toLocaleDateString()}</p>
	</article>
</section>
<FormWrapper />
<FormInput />

<style>
	.trade {
		max-width: 900px;
		background-color: var(--color-surface);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		position: relative;
		min-height: 60vh;
		font-family: var(--font-body);
		color: var(--color-text-secondary);
		margin-inline: auto;
	}

	.trade__title {
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: 2rem;
		color: var(--color-primary-dark);
		position: relative;
		display: inline-block;
	}

	.trade__title::before {
		content: '';
		position: absolute;
		top: -1.5rem;
		left: 0;
		width: 50px;
		height: 4px;
		background-color: var(--color-accent);
		border-radius: var(--radius-sm);
	}
</style>
