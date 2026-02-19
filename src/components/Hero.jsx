import { storyblokEditable } from '@storyblok/react/rsc';

const Hero = ({ blok }) => {
	return (
		<div className="hero" {...storyblokEditable(blok)}>
			<span>{blok.herohead}</span>
            <h1>{blok.herosubhead}</h1>
		</div>
	);
};

export default Hero;
