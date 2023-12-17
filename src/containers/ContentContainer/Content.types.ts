export interface ContentUtils {
    episodes: Episode[];
}

export interface Episode {
    id:          number;
    title:       string;
    description: string;
    keywords:    string[];
    url:         string;
}