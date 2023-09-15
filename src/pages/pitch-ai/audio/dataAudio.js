import { SiSimpleanalytics } from 'react-icons/si';
import { TbSum, TbLayersDifference } from 'react-icons/tb';
import { MdOutlineRateReview, MdOutlineLyrics } from 'react-icons/md';
import { PiFileAudioDuotone } from 'react-icons/pi';
import { BsTranslate } from 'react-icons/bs';

const dataAudio = [
    {
        link: '/pitchAI-editor/aida-framework',
        icon: <SiSimpleanalytics />,
        titleText: 'AIDA Framework',
        childText:
            'Factual, up-to-date instant articles (up to 2500) based on your competitors articles or your existing content (option to feed up to 20 articles at a time).',
    },
    {
        link: '/pitchAI-editor/pain-agitate',
        icon: <TbSum />,
        titleText: 'Pain-Agitate Solutions',
        childText:
            'Factual, up-to-date instant articles (up to 2500) based on your competitors articles or your existing content (option to feed up to 20 articles at a time).',
    },
    {
        link: '/pitchAI-editor/review-responder',
        icon: <MdOutlineRateReview />,
        titleText: 'Review Responder',
        childText:
            'Factual, up-to-date instant articles (up to 2500) based on your competitors articles or your existing content (option to feed up to 20 articles at a time).',
    },
    {
        link: '/pitchAI-editor/tone-changer',
        icon: <PiFileAudioDuotone />,
        titleText: 'Tone Changer',
        childText:
            'Factual, up-to-date instant articles (up to 2500) based on your competitors articles or your existing content (option to feed up to 20 articles at a time).',
    },
    {
        link: '/pitchAI-editor/analogy-maker',
        icon: <TbLayersDifference />,
        titleText: 'Analogy Maker',
        childText:
            'Factual, up-to-date instant articles (up to 2500) based on your competitors articles or your existing content (option to feed up to 20 articles at a time).',
    },
    {
        link: '/pitchAI-editor/song-lyrics',
        icon: <MdOutlineLyrics />,
        titleText: 'Song Lyrics',
        childText:
            'Factual, up-to-date instant articles (up to 2500) based on your competitors articles or your existing content (option to feed up to 20 articles at a time).',
    },
    {
        link: '/pitchAI-editor/translate',
        icon: <BsTranslate />,
        titleText: 'Translate',
        childText:
            'Factual, up-to-date instant articles (up to 2500) based on your competitors articles or your existing content (option to feed up to 20 articles at a time).',
    },
]

export default dataAudio;