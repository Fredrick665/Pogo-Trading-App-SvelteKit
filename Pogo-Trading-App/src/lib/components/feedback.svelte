<script lang="ts"></script>

<p class="feedback feedback__message">Feedback</p>

<style>
	.feedback {
		font-family: var(--font-body);
		font-weight: 600;
		color: var(--color-error);
		position: relative;
	}

	.feedback::before {
		content: '⚠';
		color: var(--color-error);
		margin-right: 4px;
	}
</style>
