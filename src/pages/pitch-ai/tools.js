import dataArticleNBlog from './ArticleNBlogs/dataArticleNBlog';
import dataqAudio from './audio/dataAudio';
import dataGeneralWriting from './GeneralWriting/dataGeneralWriting';
import dataPhotoSomic from './photoSonic/dataPhotoSonic'

const featureData = [
    ...dataArticleNBlog,
    ...dataqAudio,
    ...dataGeneralWriting,
    ...dataPhotoSomic
]

export default featureData;