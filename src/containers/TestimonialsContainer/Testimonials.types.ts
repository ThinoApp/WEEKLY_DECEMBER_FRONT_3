export interface TestimonialsUtils {
    testimonials: Testimonial[];
}

export interface Testimonial {
    id:          number;
    avatar:      string;
    name:        string;
    description: string;
    platform:    Platform;
}

export interface Platform {
    icon:  string;
    label: string;
}
