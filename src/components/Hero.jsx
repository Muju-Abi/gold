import { storyblokEditable } from '@storyblok/react/rsc';

const Hero = ({ blok }) => {
	return (
		<div className={`hero ${blok.extraclass || ''}`} style={{ backgroundImage: `url(${blok.heroimage.filename})`, backgroundColor: blok.herobgcolor.color }} {...storyblokEditable(blok)}>
			<h2>{blok.herohead}</h2>
            <h3>{blok.herosubhead}</h3>
		</div>
	);
};

export default Hero;
