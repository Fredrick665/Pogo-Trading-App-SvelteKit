<script lang="ts">
	// Global layout logik kan läggas här
</script>

<nav class="nav">
	<a class="nav__link" href="/">Home</a>
	<a class="nav__link" href="/trade">Trade</a>
	<a class="nav__link" href="/register">Register</a>
	<a class="nav__link" href="/notification">Notifications</a>
	<a class="nav__link" href="/login">Login</a>
	<a class="nav__link" href="/inventory">Inventory</a>
	<a class="nav__link" href="/profile">Profile</a>
</nav>

<main class="main">
	<slot />
</main>

<style>
	.nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 60px;
		background-color: var(--color-primary-dark);
	}

	.nav__link {
		color: var(--color-surface);
		text-decoration: none;
		font-family: var(--font-heading);
		position: relative;
	}

	.nav__link::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -4px;
		width: 100%;
		height: 2px;
		background-color: var(--color-accent);
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}

	.nav__link:hover::after {
		transform: scaleX(1);
	}

	.main {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--color-bg);
		color: var(--color-text);
		flex: 1;
	}
</style>
