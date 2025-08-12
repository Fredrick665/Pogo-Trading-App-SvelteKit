<script>
	let showToast = $state(false);

	function triggerToast() {
		showToast = true;
		setTimeout(() => {
			showToast = false;
		}, 3000);
	}
</script>

<button class="toastpage__button" onclick={triggerToast}>Visa Toast</button>

{#if showToast}
	<aside class="toastpage__toast toastpage__toast--visible" role="alert" aria-live="assertive">
		Det här är en toast!
	</aside>
{/if}

<style>
	.toastpage__toast {
		position: fixed;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%) translateY(120%);
		background-color: var(--color-info);
		color: var(--color-surface);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		font-family: var(--font-body);
		font-weight: 600;
		opacity: 0;
		pointer-events: none;
		transition:
			transform 0.3s ease,
			opacity 0.3s ease;
		z-index: 9999;
		line-height: 1.5;
		overflow: hidden;
	}

	.toastpage__toast--visible {
		transform: translateX(-50%) translateY(0);
		opacity: 1;
		pointer-events: auto;
	}

	.toastpage__toast::before {
		content: '';
		position: absolute;
		bottom: -6px;
		left: 50%;
		transform: translateX(-50%);
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-top: 6px solid var(--color-info);
	}

	/* --- Toast Button --- */
	.toastpage__button {
		background: var(--color-primary);
		color: var(--color-surface);
		border: none;
		border-radius: var(--radius-sm);
		cursor: pointer;
		font-weight: 600;
		font-family: var(--font-body);
		width: 100px;
		height: 32px;
		position: relative;
	}

	.toastpage__button::after {
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

	.toastpage__button:hover::after,
	.toastpage__button:focus::after {
		opacity: 1;
	}
</style>
