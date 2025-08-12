<script lang="ts"></script>

<article class="trade-card">
	<h2 class="trade-card__title">Trade Offer</h2>
	<p class="trade-card__message">Här är ett exempel på meddelande för bytet.</p>
	<p class="trade-card__status">Status: Pending</p>
	<p class="trade-card__expires">Går ut: 2025-12-31</p>
	<button class="trade-card__button" aria-label="Acceptera trade">Acceptera</button>
</article>

<style>
	.trade-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		position: relative;
		font-family: var(--font-body);
		color: var(--color-text);
		display: flex;
		flex-direction: column;
	}

	.trade-card::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 6px;
		background: var(--color-primary);
		border-radius: var(--radius-sm) 0 0 var(--radius-sm);
	}

	.trade-card__title {
		font-family: var(--font-heading);
		font-weight: 600;
		font-size: 1.25rem;
		position: relative;
	}

	.trade-card__title::after {
		content: '';
		display: block;
		height: 2px;
		width: 40px;
		background: var(--color-primary-light);
		position: absolute;
		bottom: -6px;
		left: 0;
		border-radius: var(--radius-sm);
	}

	.trade-card__message {
		font-size: 1rem;
		color: var(--color-text-secondary);
		position: relative;
	}

	.trade-card__message::after {
		content: '';
		display: block;
		height: 1px;
		width: 100%;
		background: var(--color-border);
		position: absolute;
		bottom: -5px;
		left: 0;
	}

	.trade-card__status {
		font-weight: 600;
		color: var(--color-text);
		position: relative;
		padding-left: 18px; /* Visuell indikation, kan även ersättas */
	}

	.trade-card__status::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		height: 10px;
		width: 10px;
		border-radius: 50%;
		background: var(--color-warning);
	}

	.trade-card__expires {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		position: relative;
	}

	.trade-card__expires::after {
		content: '';
		display: block;
		height: 1px;
		width: 100%;
		background: var(--color-border);
		position: absolute;
		bottom: -5px;
		left: 0;
	}

	.trade-card__button {
		background-color: var(--color-primary);
		color: var(--color-surface);
		border: none;
		border-radius: var(--radius-sm);
		font-weight: 600;
		cursor: pointer;
		box-shadow: var(--shadow-sm);
		align-self: flex-start;
		position: relative;
		height: 32px;
		width: 110px;
	}

	.trade-card__button::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		height: 3px;
		width: 100%;
		background: var(--color-primary-dark);
		border-radius: 0 0 var(--radius-sm) var(--radius-sm);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.trade-card__button:hover::before,
	.trade-card__button:focus::before {
		opacity: 1;
	}
</style>
