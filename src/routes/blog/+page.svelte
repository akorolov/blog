<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Posts</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-12">
	<h1 class="mb-8 text-4xl font-bold">Blog</h1>

	<div class="flex flex-col gap-6">
		{#each data.posts as post (post.slug)}
			<a href="/blog/{post.slug}" class="card bg-base-100 card-hover">
				<div class="card-body">
					<h2 class="card-title">{post.title}</h2>
					<time class="text-sm opacity-60">
						{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
					</time>
					{#if post.description}
						<p class="opacity-70">{post.description}</p>
					{/if}
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.card-hover {
		box-shadow: 0 1px 1px #470C3B14, 0 2px 2px #470C3B14;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.card-hover:hover {
		transform: translateY(-3px);
		box-shadow: 0 4px 12px #470C3B28, 0 8px 24px #470C3B14;
	}

	.card-hover:active {
		transform: translateY(0px);
		box-shadow: 0 1px 2px #470C3B14;
	}
</style>
