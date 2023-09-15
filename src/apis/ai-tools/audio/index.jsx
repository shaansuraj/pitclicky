import axios from 'axios';

// AIDA framework
export const AIDAGenerator = async (product_description) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/aida',
            {
                product_description: product_description,
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

// analogies maker
export const AnalogiesGenerator = async (content) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/analogies',
            {
                content: content,
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

// Pain-Agitate-Solutions generator
export const PainAgitateSolutionssGenerator = async (product_name, product_description) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/pas',
            {
                product_name: product_name,
                product_description: product_description
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

// review response generator
export const ReviewResponseGenerator = async (review, type, company, contact, user) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/review-responses',
            {
                review: review,
                type: type,
                company: company,
                contact: contact,
                user: user
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

// song lyrics generator
export const SongLyricsGenerator = async (topic, genre) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/lyrics-generator',
            {
                topic: topic,
                genre: genre,
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

// not working
// tone changer
export const ToneGenerator = async (content, tone) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/tone-changer',
            {
                content: content,
                tone: tone,
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


