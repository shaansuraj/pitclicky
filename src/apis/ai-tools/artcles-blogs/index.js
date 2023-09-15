import axios from 'axios';

// article and blog idea generator 
export const BlogIdeaGenerator = async (topic) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/blog-ideas',
            {
                topic: topic,
            },
            {
                method: 'POST',
                headers: {
                    'X-API-KEY': 'b546f683-eb1d-4bc7-a283-1f3002166e83',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                params: {
                    engine: 'economy',
                    language: 'en',
                    num_copies: 1,
                },
            }
        );

        return apiResponse.data;
    } catch (error) {
        throw new Error('An error occurred: ' + error.message);
    }
};

// blog outline generator
export const BlogOutlinesGenerator = async (topic, intro) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/blog-outlines',
            {
                blog_title: topic,
                blog_intro: intro
            },
            {
                headers: {
                    'X-API-KEY': 'b546f683-eb1d-4bc7-a283-1f3002166e83',
                    'Content-Type': 'application/json',
                },
                params: {
                    engine: 'economy',
                    language: 'en',
                    num_copies: '1',
                },
            }
        );

        return apiResponse.data;
    } catch (error) {
        throw new Error('An error occurred: ' + error.message);
    }
};

// article and blog generator
export const ArticleGenerator = async (topic, intro, keywords) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/ai-article-writer-v3',
            {
                article_title: topic,
                article_intro: intro,
                article_sections: keywords,
            },
            {
                headers: {
                    'X-API-KEY': 'b546f683-eb1d-4bc7-a283-1f3002166e83',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                params: {
                    engine: 'premium',
                    language: 'en',
                },
            }
        );

        return apiResponse.data;

    } catch (error) {
        throw new Error('An error occurred: ' + error.message);
    }
};

// article rewriting
export const ArticleRewritingGenerator = async (article, keywords) => {

    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/rewrite-with-keywords',
            {
                article: article,
                keywords: keywords,
            },
            {
                headers: {
                    'X-API-KEY': 'b546f683-eb1d-4bc7-a283-1f3002166e83',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                params: {
                    engine: 'economy',
                    language: 'en',
                    num_copies: '1'
                },
            }
        );

        return apiResponse.data;

    } catch (error) {
        throw new Error('An error occurred: ' + error.message);
    }
};

// article and blog generator
export const ConclusionGenerator = async (article) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/conclusion-writer',
            {
                article: article,
            },
            {
                headers: {
                    'X-API-KEY': 'b546f683-eb1d-4bc7-a283-1f3002166e83',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                params: {
                    engine: 'economy',
                    language: 'en',
                    num_copies: '1'
                },
            }
        );

        return apiResponse.data;

    } catch (error) {
        throw new Error('An error occurred: ' + error.message);
    }
};


// paragraph writing
export const ParaGenerator = async (paragraph_title, tone_of_voice, keywords) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/paragraph-writer',

            {
                paragraph_title: paragraph_title,
                tone_of_voice: tone_of_voice,
                keywords: keywords
            },
            {
                headers: {
                    'X-API-KEY': 'b546f683-eb1d-4bc7-a283-1f3002166e83',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                params: {
                    engine: 'economy',
                    language: 'en',
                    num_copies: '1'
                },
            }
        );

        return apiResponse.data;

    } catch (error) {
        throw new Error('An error occurred: ' + error.message);
    }
};
export const generator = () => {
    return null;
}