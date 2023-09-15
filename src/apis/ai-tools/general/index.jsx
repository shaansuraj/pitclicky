import axios from 'axios';

// answer generator
export const AnsGenerator = async (question) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/ans-my-ques',
            {
                question: question,
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

// bullet answer generator
export const BUlletPointAnsGenerator = async (question) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/bulletpoint-answers',
            {
                question: question,
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
}

// not working
// company bios generator
export const CompanyBiosGenerator = async (company_name, company_info, tone_of_voice) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/company-bios',
            {
                company_name: company_name,
                company_info: company_info,
                tone_of_voice: tone_of_voice,
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

// content shortner
export const ShortContentGenerator = async (content_to_shorten) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/content-shorten',
            {
                content_to_shorten: content_to_shorten,
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

// Passive to Active Voice
export const ActiveToPassiveGenerator = async (sentence) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/active-voice',
            {
                sentence: sentence,
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

// Personal Bio generator
export const PersonalBiosGenerator = async (name, personal_info, tone_of_voice) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/personal-bios',
            {
                name: name,
                personal_info: personal_info,
                tone_of_voice: tone_of_voice
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

// pros and cons generator
export const ProsAndConsGenerator = async (paragraph) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/pros-and-cons',
            {
                paragraph: paragraph,
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

// Story generator
export const StoryGenerator = async (description, tone_of_voice) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/story-generation',
            {
                description: description,
                tone_of_voice: tone_of_voice
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

// text extender
export const ExtendTextGenerator = async (content_to_expand, tone_of_voice, keyword) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/sentence-expand',
            {
                content_to_expand: content_to_expand,
                tone_of_voice: tone_of_voice,
                keyword: keyword
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

// content rephraseing 
export const RephraseGenerator = async (content_to_rephrase, tone_of_voice) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/content-rephrase',
            {
                content_to_rephrase: content_to_rephrase,
                tone_of_voice: tone_of_voice,
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

// chat sonic
export const ChatsGenerator = async (enable_memory, input_text, history_data) => {
    try {
        const apiResponse = await axios.post(
            'https://api.writesonic.com/v2/business/content/chatsonic',
            {
                enable_google_results: true,
                enable_memory: enable_memory,
                input_text: input_text,
                // history_data: history_data
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
                },
            }
        );

        return apiResponse.data;
    } catch (error) {
        throw new Error('An error occurred: ' + error.message);
    }
};


