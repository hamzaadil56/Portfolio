export type Testimonial = {
	id: string;
	quote: string;
	name: string;
	role: string;
	company: string;
	avatar?: string;
};

// ADD_TESTIMONIALS_HERE — section auto-renders only when this array is non-empty.
export const testimonials: Testimonial[] = [];
