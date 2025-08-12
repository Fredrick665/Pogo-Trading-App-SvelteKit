<script lang="ts">
	import FormInput from '$lib/components/formInput.svelte';
	import FormWrapper from '$lib/components/formWrapper.svelte';
</script>

<section class="register">
	<h1 class="register__title">Register Page</h1>
</section>
<FormWrapper />
<FormInput />

<style>
	.register {
		max-width: 600px;
		background-color: var(--color-bg);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-md);
		position: relative;
		min-height: 50vh;
		font-family: var(--font-body);
		color: var(--color-text);
		display: flex;
		justify-content: center;
		align-items: center;
		margin-inline: auto;
	}

	.register__title {
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: 2.25rem;
		color: var(--color-primary);
		position: relative;
		display: inline-block;
	}

	.register__title::before {
		content: '';
		position: absolute;
		top: -1rem;
		left: 0;
		width: 50px;
		height: 4px;
		background-color: var(--color-accent-dark);
		border-radius: var(--radius-sm);
	}
</style>
