<script lang="ts">
	import { page, navigating } from '$app/stores';
</script>

<svelte:head>
	<title>Owen Stanley</title>
</svelte:head>

<div class="wrapper">
	<section class="switcher centred | box">
		<article>
			<h1>Hi, I'm Owen</h1>
			<p>Middleware Support Analyst</p>
			<p>Aspiring developer</p>
		</article>
		<article class="">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src="/me-square.png" alt="photo of me" style="width: 30vw" />
		</article>
	</section>
	<section class="box | centred">
		bio / introduction that spans the full width of main, but that will wrap nicely if the page
		width is small
	</section>
	<section class="box">
		<nav>
			<ul class="switcher switcher-nav | centred">
				<li><a href="#experience-section">cv</a></li>
				<li><a href="#projects-section">projects</a></li>
				<li><a href="#blog-section">blog</a></li>
			</ul>
		</nav>
	</section>
	<section class="box" id="experience-section">
		<h2>current experience</h2>
		<p>
			Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur viverra aenean; ridiculus
			sagittis imperdiet praesent. Pharetra venenatis dictum ad consectetur himenaeos tellus.
			Facilisis cursus egestas risus litora neque; morbi ligula. Potenti egestas morbi neque cubilia
			in dui lacus porta. Mattis nam erat mattis cras vulputate dictum sociosqu. Taciti congue
			commodo donec porttitor tempor imperdiet iaculis. Etiam nam malesuada egestas ultricies justo
			est metus class. Pretium porttitor nullam lectus euismod finibus ornare.
		</p>
		<p>
			Ultrices nisi cubilia sollicitudin lacus sodales nam euismod. Cursus ad eget potenti,
			scelerisque pulvinar fames ultrices nisi iaculis. Cursus aenean magna; aptent penatibus dui
			felis malesuada porttitor. Ligula quam orci mauris egestas rhoncus maximus; nostra magnis
			sapien. Finibus ultrices himenaeos ullamcorper potenti risus pharetra molestie. Risus est
			sociosqu elit mus ultricies volutpat.
		</p>
		<a
			href="/cv"
			aria-current={$page.url.pathname === '/cv'}
			data-sveltekit-preload-code
			class="items-center no-underline"
		>
			take a look at my full cv here</a
		>
	</section>
	<section class="box" id="projects-section">
		<h2>projects</h2>
		<p>
			Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur viverra aenean; ridiculus
			sagittis imperdiet praesent. Pharetra venenatis dictum ad consectetur himenaeos tellus.
			Facilisis cursus egestas risus litora neque; morbi ligula. Potenti egestas morbi neque cubilia
			in dui lacus porta. Mattis nam erat mattis cras vulputate dictum sociosqu. Taciti congue
			commodo donec porttitor tempor imperdiet iaculis. Etiam nam malesuada egestas ultricies justo
			est metus class. Pretium porttitor nullam lectus euismod finibus ornare.
		</p>
		<article class="grid switcher | flow">
			<div class="flow | card card-project">
				<div class="wrapper-centred">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img src="" alt="placeholder image" />
				</div>
				<h3>SvelteKit web design</h3>
				<p>
					Ultrices nisi cubilia sollicitudin lacus sodales nam euismod. Cursus ad eget potenti,
					scelerisque pulvinar fames ultrices nisi iaculis. Cursus aenean magna; aptent penatibus
					dui felis malesuada porttitor.
				</p>
				<a
					href="/projects/svelte-kit"
					aria-current={$page.url.pathname === '/projects/svelte-kit'}
					data-sveltekit-preload-code>Click here to view this project in full</a
				>
			</div>
			<div class="flow | card card-project">
				<div class="wrapper-centred">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img src="" alt="placeholder image" />
				</div>
				<h3>VST3 Plugins</h3>
				<p>
					Ultrices nisi cubilia sollicitudin lacus sodales nam euismod. Cursus ad eget potenti,
					scelerisque pulvinar fames ultrices nisi iaculis. Cursus aenean magna; aptent penatibus
					dui felis malesuada porttitor.
				</p>
				<a
					href="/projects/vst3-plugin"
					aria-current={$page.url.pathname === '/projects/vst3-plugin'}
					data-sveltekit-preload-cod>Click here to view this project in full</a
				>
			</div>
			<div class="flow | card card-project">
				<div class="wrapper-centred">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img src="" alt="placeholder image" />
				</div>
				<h3>REST APIs</h3>
				<p>
					Ultrices nisi cubilia sollicitudin lacus sodales nam euismod. Cursus ad eget potenti,
					scelerisque pulvinar fames ultrices nisi iaculis. Cursus aenean magna; aptent penatibus
					dui felis malesuada porttitor.
				</p>
				<a
					href="/projects/rest-apis"
					aria-current={$page.url.pathname === '/projects/rest-apis'}
					data-sveltekit-preload-cod>Click here to view this project in full</a
				>
			</div>
		</article>
		<p class="centred">
			<a
				href="/projects"
				aria-current={$page.url.pathname === '/projects'}
				data-sveltekit-preload-code
				class="items-center no-underline">take a look at all my projects here</a
			>
		</p>
	</section>
	<section class="box" id="blog-section">
		<h2>recent blog posts</h2>
		<p>
			Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur viverra aenean; ridiculus
			sagittis imperdiet praesent. Pharetra venenatis dictum ad consectetur himenaeos tellus.
			Facilisis cursus egestas risus litora neque; morbi ligula. Potenti egestas morbi neque cubilia
			in dui lacus porta. Mattis nam erat mattis cras vulputate dictum sociosqu. Taciti congue
			commodo donec porttitor tempor imperdiet iaculis. Etiam nam malesuada egestas ultricies justo
			est metus class. Pretium porttitor nullam lectus euismod finibus ornare.
		</p>
		<p>
			Ultrices nisi cubilia sollicitudin lacus sodales nam euismod. Cursus ad eget potenti,
			scelerisque pulvinar fames ultrices nisi iaculis. Cursus aenean magna; aptent penatibus dui
			felis malesuada porttitor. Ligula quam orci mauris egestas rhoncus maximus; nostra magnis
			sapien. Finibus ultrices himenaeos ullamcorper potenti risus pharetra molestie. Risus est
			sociosqu elit mus ultricies volutpat.
		</p>
		<a
			href="/blog"
			aria-current={$page.url.pathname === '/blog'}
			data-sveltekit-preload-code
			class="items-center no-underline">take a look at all my blog posts here</a
		>
	</section>
	{#if $navigating}
		navigating to {$navigating.to?.url.pathname}
	{/if}
</div>
