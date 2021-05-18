import { GraphQLClient, gql } from 'graphql-request'

const DATOCMS_API_KEY = process.env.DATOCMS_API_KEY
const DATOCMS_API_ENDPOINT = process.env.DATOCMS_API_ENDPOINT
const DATOCMS_PREVIEW_API_ENDPOINT = process.env.DATOCMS_PREVIEW_API_ENDPOINT

const queryDatoCMS = async ({ query, preview = false, variables = {} }) => {
  const graphQLClient = new GraphQLClient(
    preview ? DATOCMS_PREVIEW_API_ENDPOINT : DATOCMS_API_ENDPOINT,
    {
      headers: {
        authorization: `Bearer ${DATOCMS_API_KEY}`,
      },
    }
  )

  const data = await graphQLClient.request(
    gql`
      ${query}
    `,
    variables
  )
  // console.log(JSON.stringify(data, undefined, 2))

  return data
}

const getKnowledgeArticleBySlug = async (slug, preview = false) => {
  const cms = await queryDatoCMS({
    preview,
    query: `{
      article: knowledgeBase(filter: {slug: {eq: "${slug}"}}) {
        id
        title
        slug
        description
        _firstPublishedAt
        _publishedAt
        _updatedAt
        _status
        relatedContents {
          ... on KnowledgeBaseRecord {
            title
            slug
            _publishedAt
            _updatedAt
            description
          }
          ... on GuideRecord {
            title
            slug
            _publishedAt
            _updatedAt
            description
            authors {
              isMemberOfVercelTeam
            }
          }
          ... on FaqRecord {
            question
            slug
            _publishedAt
            _updatedAt
          }
        }
        content {
          ... on MarkdownRecord {
            id
            content
            contentType
            _modelApiKey
          }
          ... on HtmlRecord {
            id
            content
            contentType
            _modelApiKey
          }
          ... on ImageRecord {
            id
            caption
            imageAnchor
            openAnchorInNewWindow
            _modelApiKey
            image {
              url
              width
              height
              alt
              title
            }
          }
          ... on CodeRecord {
            id
            _modelApiKey
            allowCopy
            caption
            content
          }
          ... on GitImportRecord {
            id
            _modelApiKey
            showBitbucket
            showGithub
            showGitlab
            repoUrl
          }
          ... on VercelDeployButtonRecord {
            id
            _modelApiKey
          }
          ... on VideoRecord {
            id
            _modelApiKey
          }
          ... on VideoExternalRecord {
            id
            _modelApiKey
          }
          ... on ImageExternalRecord {
            id
            imageAnchor
            openAnchorInNewWindow
            imageUrl
            imageWidth
            imageHeight
            imageTitle
            imageAlt
            caption
            _modelApiKey
          }
        }
        seo {
          description
          image {
            url
          }
          twitterCard
          title
        }
        topics {
          slug
          title
          position
          description
        }
      }
    }`,
  })

  return cms.article
}

const getKnowledgeArticleById = async (id, preview = false) => {
  const cms = await queryDatoCMS({
    preview,
    query: `{
      article: knowledgeBase(filter: {id: {eq: "${id}"}}) {
        id
        title
        slug
        description
        _firstPublishedAt
        _publishedAt
        _updatedAt
        _status
        relatedContents {
          ... on KnowledgeBaseRecord {
            title
            slug
            _publishedAt
            _updatedAt
            description
          }
          ... on GuideRecord {
            title
            slug
            _publishedAt
            _updatedAt
            description
            authors {
              isMemberOfVercelTeam
            }
          }
          ... on FaqRecord {
            question
            slug
            _publishedAt
            _updatedAt
          }
        }
        content {
          ... on MarkdownRecord {
            id
            content
            contentType
            _modelApiKey
          }
          ... on HtmlRecord {
            id
            content
            contentType
            _modelApiKey
          }
          ... on ImageRecord {
            id
            caption
            imageAnchor
            openAnchorInNewWindow
            _modelApiKey
            image {
              url
              width
              height
              alt
              title
            }
          }
          ... on CodeRecord {
            id
            _modelApiKey
            allowCopy
            caption
            content
          }
          ... on GitImportRecord {
            id
            _modelApiKey
            showBitbucket
            showGithub
            showGitlab
            repoUrl
          }
          ... on VercelDeployButtonRecord {
            id
            _modelApiKey
          }
          ... on VideoRecord {
            id
            _modelApiKey
          }
          ... on VideoExternalRecord {
            id
            _modelApiKey
          }
          ... on ImageExternalRecord {
            id
            imageAnchor
            openAnchorInNewWindow
            imageUrl
            imageWidth
            imageHeight
            imageTitle
            imageAlt
            caption
            _modelApiKey
          }
        }
        seo {
          description
          image {
            url
          }
          twitterCard
          title
        }
        topics {
          slug
          title
          position
          description
        }
      }
    }`,
  })

  return cms.article
}

// TODO: add pagination support
const getAllKnowledgeArticles = async ({ first, preview = false, filter }) => {
  const cms = await queryDatoCMS({
    preview,
    query: `{
      articles: allKnowledgeBases(first: ${first}, orderBy: _firstPublishedAt_DESC${
      filter ? `, filter: ${filter}` : ``
    }) {
        id
        
        title
        slug
        description
        
        _firstPublishedAt
        _publishedAt
        _updatedAt
        _status

        authors {
          slug
          isMemberOfVercelTeam
          profilePicture {
            url
          }
        }
        _publishedAt
        _updatedAt
      }
    }`,
  })

  return cms.articles
}

export {
  DATOCMS_API_KEY,
  DATOCMS_API_ENDPOINT,
  DATOCMS_PREVIEW_API_ENDPOINT,
  queryDatoCMS,
  getKnowledgeArticleBySlug,
  getKnowledgeArticleById,
  getAllKnowledgeArticles,
}
