<script lang="ts">
	type SeoProps = {
		title: string;
		description: string;
		path: string;
		type?: 'website' | 'article';
		image?: string;
		imageAlt?: string;
		publishedTime?: string;
		tags?: string[];
	};

	const siteUrl = 'https://natorium.dev';
	const defaultImage = '/profile.jpg';
	const defaultImageAlt = "natori's black-and-white profile illustration";

	let {
		title,
		description,
		path,
		type = 'website',
		image = defaultImage,
		imageAlt = defaultImageAlt,
		publishedTime,
		tags = []
	}: SeoProps = $props();

	const canonicalUrl = $derived(`${siteUrl}${path}`);
	const imageUrl = $derived(image.startsWith('http') ? image : `${siteUrl}${image}`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="natori's Site" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1254" />
	<meta property="og:image:height" content="1254" />
	<meta property="og:image:alt" content={imageAlt} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:creator" content="@nator1_hrj" />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={imageAlt} />

	{#if type === 'article' && publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	{#if type === 'article'}
		{#each tags as tag (tag)}
			<meta property="article:tag" content={tag} />
		{/each}
	{/if}
</svelte:head>
