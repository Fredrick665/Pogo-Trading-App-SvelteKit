<script lang="ts"></script>

<form class="form-wrapper form-wrapper__container"></form>
Form Wrappern

<style>
	.form-wrapper {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		font-family: var(--font-body);
		color: var(--color-text);
		width: 400px;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.form-wrapper::before {
		content: '';
		height: 4px;
		width: 100%;
		background: var(--color-primary);
		border-radius: var(--radius-sm) var(--radius-sm) 0 0;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
