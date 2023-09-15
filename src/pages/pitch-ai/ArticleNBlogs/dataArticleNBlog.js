import { GrArticle } from 'react-icons/gr';
import { FaParagraph } from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';
import { AiOutlineAlignCenter, AiOutlineSortDescending } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';

const dataArticleNBlog = [
    {
        link: '/pitchAI-editor/article-editor',
        icon: <GrArticle />,
        titleText: 'AI Article writer 5.0',
        childText:
            'Factual, up-to-date instant articles (up to 2500) based on your competitors articles or your existing content (option to feed up to 20 articles at a time).',
    },
    {
        link: '/pitchAI-editor/para',
        icon: <FaParagraph />,
        titleText: 'Paragraph Writer',
        childText:
            'Write short, punchy paragraphs that turn your readers into customers',
    },
    {
        link: '/pitchAI-editor/article-idea',
        icon: <GiTeamIdea />,
        titleText: 'AI Article Ideas',
        childText:
            'Article/blog ideas that you can use to generate more traffic, leads, and sales for your business'
    },
    {
        link: '/pitchAI-editor/article-outline',
        icon: <AiOutlineAlignCenter />,
        titleText: 'AI Article Outlines',
        childText:
            'Detailed article outlines that help you write better content on a consistent basis.',
    },
    {
        link: '/pitchAI-editor/article-rewriting',
        icon: <BsPencilFill />,
        titleText: 'Article Rewriter',
        childText:
            'Copy an article, paste it in to the program, and with just one click you will have an entirely different article to read',
    },
    {
        link: '/pitchAI-editor/article-conclusion',
        icon: <AiOutlineSortDescending />,
        titleText: 'Conclusion writer',
        childText:
            'Powerful conclusion copy that will make a reader take action.',
    },
];

export default dataArticleNBlog;