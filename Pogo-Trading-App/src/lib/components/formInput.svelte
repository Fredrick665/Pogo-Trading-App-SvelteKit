<script lang="ts"></script>

<input class="form-input form-input__field" type="text" /> Forminput

<style>
	.form-input {
		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);
		font-family: var(--font-body);
		color: var(--color-text);
		width: 100%;
		height: 32px;
		position: relative;
	}

	.form-input:focus {
		border-color: var(--color-primary);
		outline: none;
	}

	.form-input::before {
		content: '';
		position: absolute;
		height: 2px;
		width: 0;
		bottom: 0;
		left: 50%;
		background: var(--color-primary);
		transition: all 0.3s ease;
	}

	.form-input:focus::before {
		width: 100%;
		left: 0;
	}
</style>
