import { storyblokEditable } from '@storyblok/react/rsc';

const ImageContentCta = ({ blok }) => {
	return (
		<div className={`image-content-cta ${blok.mode || ''}`} style={{ backgroundImage: `url(${blok.bgimage.filename})`, backgroundColor: blok.bgcolor.color }} {...storyblokEditable(blok)}>
			<div>
				<img src={blok.image.filename} alt={blok.image.alt} className="" /></div>
			<div>
				<h2 className={`${blok.font_family} text-5xl font-bold mb-4`}>{blok.heading}</h2>
            	<h3 className="font-sans text-gray-600">{blok.subheading}</h3>
			</div>
		</div>
	);
};

export default ImageContentCta;
