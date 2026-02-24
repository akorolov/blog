<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-12">
	<h1 class="mb-8 text-4xl font-bold">Blog</h1>

	<div class="flex flex-col gap-6">
		{#each data.posts as post (post.slug)}
			<a href="/blog/{post.slug}" class="card bg-base-100">
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
