<script lang="ts">
	let open = $state(false);
	function toogleModal() {
		open = !open;
	}
</script>

<button class="modal-toggle" onclick={toogleModal} aria-expanded={open} aria-controls="modal">
	{#if open}
		Stäng modal
	{:else}
		Öppna modal
	{/if}
</button>

{#if open}
	<section id="modal" role="dialog" aria-modal="true" tabindex="-1" class="modal modal__container">
		<header class="modal__header">
			<button class="modal__close" onclick={toogleModal} aria-label="Stäng">×</button>
		</header>

		<article class="modal__content">
			<h2 class="modal__title">Modal</h2>
			<p class="modal__text">Här är modalens innehåll.</p>
		</article>
	</section>
{/if}

<style>
	.modal__container {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10000;
	}

	.modal {
		background: var(--color-surface);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		width: 90%;
		max-width: 500px;
		max-height: 90vh;
		overflow-y: auto;
		position: relative;
		font-family: var(--font-body);
		color: var(--color-text);
		display: flex;
		flex-direction: column;
	}

	.modal::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 6px;
		background: var(--color-primary);
		border-radius: var(--radius-lg) var(--radius-lg) 0 0;
	}

	.modal__header {
		display: flex;
		justify-content: flex-end;
	}

	.modal__close {
		background: transparent;
		border: none;
		font-size: 1.5rem;
		line-height: 1;
		cursor: pointer;
		color: var(--color-text-secondary);
		transition: color 0.2s ease;
		width: 32px;
		height: 32px;
		position: relative;
	}

	.modal__close:hover,
	.modal__close:focus {
		color: var(--color-error);
		outline: none;
	}

	.modal__title {
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: 1.5rem;
		color: var(--color-text);
		position: relative;
	}

	.modal__title::after {
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

	.modal__text {
		color: var(--color-text-secondary);
		position: relative;
	}

	.modal__text::after {
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
