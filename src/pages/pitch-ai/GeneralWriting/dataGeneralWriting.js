// icons 
import { RxAvatar } from 'react-icons/rx';
import { MdOutlineReceiptLong, MdOutlineQuestionAnswer, MdOutlineFormatListBulleted, MdOutlineAutoStories } from 'react-icons/md';
import { BsArrowsAngleContract } from 'react-icons/bs';
import { VscReplaceAll } from 'react-icons/vsc';
import { TbMessageChatbot, TbReplace } from 'react-icons/tb';


const dataGeneralWriting = [
    {
        link: '/pitchAI-editor/personal-bio',
        icon: <RxAvatar />,
        titleText: 'Personal Bios',
        childText:
            'Perfect bio copy that shows your expertise and drives more clients to you',
    },
    {
        link: '/pitchAI-editor/text-extender',
        icon: <MdOutlineReceiptLong />,
        titleText: 'Text Extender',
        childText:
            'Extend short sentences into more descriptive and interesting ones.',
    },
    // {
    //     link: '/pitchAI-editor/company-bio',
    //     icon: <BsBuildings />,
    //     titleText: 'Company Bio',
    //     childText:
    //         'Factual, up-to-date instant articles (up to 2500) based on your competitors articles or your existing content (option to feed up to 20 articles at a time).',
    // },
    {
        link: '/pitchAI-editor/content-rephrase',
        icon: <VscReplaceAll />,
        titleText: 'Content rephrase',
        childText:
            'Rephrase your content in a different voice and style to appeal to different readers.',
    },
    // {
    //     link: '/pitchAI-editor/chatsonic',
    //     icon: <GrArticle />,
    //     titleText: 'Chatsonic',
    //     childText:
    //         'Chatsonic (Like ChatGPT).',
    // },
    {
        link: '/pitchAI-editor/pros-cons',
        icon: <TbMessageChatbot />,
        titleText: 'Pros and cons',
        childText:
            'A chatbot like ChatGPT but with real-time data, images &amp; voice search.',
    },
    {
        link: '/pitchAI-editor/content-shorten',
        icon: <BsArrowsAngleContract />,
        titleText: 'Content Shorten',
        childText:
            'Short your content in a different voice and style to appeal to different readers.',
    },
    {
        link: '/pitchAI-editor/answers',
        icon: <MdOutlineQuestionAnswer />,
        titleText: 'Answers',
        childText:
            'Instant, quality answers to any questions or concerns that your audience might have.',
    },
    {
        link: '/pitchAI-editor/passive-to-active',
        icon: <TbReplace />,
        titleText: 'Passive to active voice',
        childText:
            'Easy and quick solution to converting your passive voice sentences into active voice sentences.',
    },
    {
        link: '/pitchAI-editor/bullet-points',
        icon: <MdOutlineFormatListBulleted />,
        titleText: 'Bullet Point answers',
        childText:
            "Precise and informative bullet points that provide quick and valuable answers to your customers' questions.",
    },
    {
        link: '/pitchAI-editor/stories',
        icon: <MdOutlineAutoStories />,
        titleText: 'Stories',
        childText:
            "Engaging and persuasive stories that will capture your reader's attention and interest..",
    },
]

export default dataGeneralWriting;