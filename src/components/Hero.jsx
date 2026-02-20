import { storyblokEditable } from '@storyblok/react/rsc';

const Hero = ({ blok }) => {
	return (
		<div className={`hero ${blok.extraclass || ''}`} style={{ backgroundImage: `url(${blok.herobgimage.filename})`, backgroundColor: blok.herobgcolor.color }} {...storyblokEditable(blok)}>
			<h2 className={`${blok.font_family} text-5xl font-bold mb-4`}>{blok.herohead}</h2>
            <h3 className="font-sans text-gray-600">{blok.herosubhead}</h3>
		</div>
	);
};

export default Hero;
