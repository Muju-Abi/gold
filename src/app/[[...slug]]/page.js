import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
	const { slug } = await params;

	let fullSlug = slug ? slug.join('/') : 'home';

	let sbParams = {
		version: 'draft',
	};

	// Prevent rendering the config story as a page
	if (fullSlug === 'config') {
		notFound();
	}

	const storyblokApi = getStoryblokApi();
	try { 
	let { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, sbParams);
		return <StoryblokStory story={data.story} />;
	} 
	catch (error) {
		notFound();
	}
}
