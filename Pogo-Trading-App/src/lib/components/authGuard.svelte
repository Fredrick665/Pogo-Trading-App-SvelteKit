<script lang="ts"></script>

<section class="auth-guard auth-guard__container">Auth Guard Container</section>

<style>
	.auth-guard {
		background: var(--color-bg);
		border: 2px dashed var(--color-accent);
		border-radius: var(--radius-md);
		color: var(--color-accent-dark);
		font-family: var(--font-body);
		text-align: center;
		position: relative;
	}

	.auth-guard::before {
		content: '🔒';
		position: absolute;
		top: 8px;
		left: 8px;
		font-size: 1.25rem;
	}
</style>
