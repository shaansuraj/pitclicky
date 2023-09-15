import Home from '../pages'

// services pages
import EditDeck from "../pages/edit-deck";
// import EditWholeDeck from '../pages/edit-deck/edit-full';
// analytics
import Analytics from '../pages/analytics/';
import Demographics from '../pages/analytics/ClickyVisitorDemographics'
import Engagement from '../pages/analytics/Engagement/'
import TrafficSourcesAnalysis from '../pages/analytics/TrafficSourcesAnalysis'
import SearchAnalysis from '../pages/analytics/SearchAnalysis'
import VisitorsMostActive from '../pages/analytics/VisitorsMostActive'

import CreateSubDomain from "../pages/create-subdomain";
import PitchAI from "../pages/pitch-ai";
// article and blogs
import ArticleAndBlog from "../pages/pitch-ai/ArticleNBlogs/AIArticleWritng/index.jsx";
import AIArticleIdea from "../pages/pitch-ai/ArticleNBlogs/AIArticleIdea/index.jsx";
import AIArticleOutline from "../pages/pitch-ai/ArticleNBlogs/AIArticleOutline/index.jsx";
import ArticleRewriting from "../pages/pitch-ai/ArticleNBlogs/articleRewriting/index.jsx";
import ConclusionWriting from "../pages/pitch-ai/ArticleNBlogs/conclusionWriting/index.jsx";
import ParaWriting from "../pages/pitch-ai/ArticleNBlogs/paraWriting/index.jsx";
// general writing 
import Answers from "../pages/pitch-ai/GeneralWriting/Answers/index.jsx";
import BulletPoint from "../pages/pitch-ai/GeneralWriting/BulletPoint/index.jsx";
import Chatsonic from "../pages/pitch-ai/GeneralWriting/Chatsonic/index.jsx";
import CompanyBio from "../pages/pitch-ai/GeneralWriting/CompanyBio/index.jsx";
import ContentShorten from "../pages/pitch-ai/GeneralWriting/ContentShorten/index.jsx";
import Contentrephrase from "../pages/pitch-ai/GeneralWriting/Contentrephrase/index.jsx";
import PassiveToActive from "../pages/pitch-ai/GeneralWriting/PassiveToActive/index.jsx";
import PersonalBios from "../pages/pitch-ai/GeneralWriting/PersonalBios/index.jsx";
import ProsNCons from "../pages/pitch-ai/GeneralWriting/ProsNCons/index.jsx";
import Stories from "../pages/pitch-ai/GeneralWriting/Stories/index.jsx";
import TextExtender from "../pages/pitch-ai/GeneralWriting/TextExtender/index.jsx";
// audio
import AIDAFramework from "../pages/pitch-ai/audio/AIDAFramework/index.jsx";
import AnalogyMaker from "../pages/pitch-ai/audio/analogyMaker/index.jsx";
import PainAgitate from "../pages/pitch-ai/audio/painAgitate/index.jsx";
import SongLyrics from "../pages/pitch-ai/audio/songLyrics/index.jsx";
import ToneChanger from "../pages/pitch-ai/audio/toneChanger/index.jsx";
import Translate from "../pages/pitch-ai/audio/translate/index.jsx";
import ReviewResponder from "../pages/pitch-ai/audio/ReviewResponder";
// photosonic
import PhotoSonic from "../pages/pitch-ai/photoSonic/index.jsx"

const Routing = [
    {
        path: '/dashboard',
        element: <Home />
    },
    {
        path: '/deck-editor',
        element: <EditDeck />
    },
    {
        path: '/analytics',
        element: <Analytics />
    },
    {
        path: '/analytics/demographics',
        element: <Demographics />
    },
    {
        path: '/analytics/engagement',
        element: <Engagement />
    },
    {
        path: '/analytics/traffic-sources-analysis',
        element: <TrafficSourcesAnalysis />
    },
    {
        path: '/analytics/search-analysis',
        element: <SearchAnalysis />
    },
    {
        path: '/analytics/visitorsMostActive',
        element: <VisitorsMostActive />
    },
    {
        path: '/create-subdomain',
        element: <CreateSubDomain />
    },
    {
        path: '/pitchAI-editor',
        element: <PitchAI />
    },

    // article and blogs 
    {
        path: '/pitchAI-editor/article-editor',
        element: <ArticleAndBlog />
    },
    {
        path: '/pitchAI-editor/article-idea',
        element: <AIArticleIdea />
    },
    {
        path: '/pitchAI-editor/article-outline',
        element: <AIArticleOutline />
    },
    {
        path: '/pitchAI-editor/article-rewriting',
        element: <ArticleRewriting />
    },
    {
        path: '/pitchAI-editor/article-conclusion',
        element: <ConclusionWriting />
    },
    {
        path: '/pitchAI-editor/para',
        element: <ParaWriting />
    },

    // general writing
    {
        path: '/pitchAI-editor/answers',
        element: <Answers />
    },
    {
        path: '/pitchAI-editor/bullet-points',
        element: <BulletPoint />
    },
    {
        path: '/pitchAI-editor/chatsonic',
        element: <Chatsonic />
    },
    {
        path: '/pitchAI-editor/company-bio',
        element: <CompanyBio />
    },
    {
        path: '/pitchAI-editor/content-shorten',
        element: <ContentShorten />
    },
    {
        path: '/pitchAI-editor/content-rephrase',
        element: <Contentrephrase />
    },
    {
        path: '/pitchAI-editor/passive-to-active',
        element: <PassiveToActive />
    },
    {
        path: '/pitchAI-editor/personal-bio',
        element: <PersonalBios />
    },
    {
        path: '/pitchAI-editor/pros-cons',
        element: <ProsNCons />
    },
    {
        path: '/pitchAI-editor/stories',
        element: <Stories />
    },
    {
        path: '/pitchAI-editor/text-extender',
        element: <TextExtender />
    },

    // audio
    {
        path: '/pitchAI-editor/aida-framework',
        element: <AIDAFramework />
    },
    {
        path: '/pitchAI-editor/analogy-maker',
        element: <AnalogyMaker />
    },
    {
        path: '/pitchAI-editor/pain-agitate',
        element: <PainAgitate />
    },
    {
        path: '/pitchAI-editor/song-lyrics',
        element: <SongLyrics />
    },
    {
        path: '/pitchAI-editor/review-responder',
        element: <ReviewResponder />
    },
    {
        path: '/pitchAI-editor/tone-changer',
        element: <ToneChanger />
    },
    {
        path: '/pitchAI-editor/translate',
        element: <Translate />
    },

    // photo sonic
    {
        path: '/pitchAI-editor/photo-sonic',
        element: <PhotoSonic />
    },
]

export default Routing;