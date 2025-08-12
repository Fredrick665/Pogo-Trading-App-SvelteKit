<script lang="ts">
	import type { tradeOffer } from '../../../lib/interfaces/trade.ts';
	import TradeCard from '$lib/components/tradeCard.svelte';
	import FormWrapper from '$lib/components/formWrapper.svelte';
	import FormInput from '$lib/components/formInput.svelte';

	const tradeDetail: tradeOffer = {
		id: 'trade123',
		Creatorid: 'user1',
		Offereditems: [],
		Requesteitems: [],
		Message: 'Trade detail view',
		Status: 'pending',
		createdAt: new Date(),
		expiresAt: new Date(Date.now() + 7 * 24 * 3600 * 1000),
		Participants: [],
		Visibility: true
	};
</script>

<section class="tradeId">
	<h1 class="tradeId__title">Trade ID Page</h1>

	<article class="tradeId__details">
		<p class="tradeId__message">{tradeDetail.Message}</p>
		<p class="tradeId__status">Status: {tradeDetail.Status}</p>
		<p class="tradeId__created">Created: {tradeDetail.createdAt.toLocaleDateString()}</p>
	</article>
</section>
<FormWrapper />
<FormInput />
<TradeCard />

<style>
	.tradeId {
		max-width: 900px;
		background-color: var(--color-surface);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		position: relative;
		min-height: 60vh;
		font-family: var(--font-body);
		color: var(--color-text-secondary);
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.tradeId__title {
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: 2rem;
		color: var(--color-primary-dark);
		position: relative;
		display: inline-block;
	}

	.tradeId__title::after {
		content: '';
		position: absolute;
		bottom: -0.6rem;
		left: 0;
		width: 40%;
		height: 0.3rem;
		background-color: var(--color-accent);
		border-radius: var(--radius-sm);
	}
</style>
