import React from 'react'
import { useAmp } from 'next/amp'
import { withRouter } from 'next/router'

import Head from '~/components/layout/head'
import Heading from '~/components/text/linked-heading'
import ContentFooter from '~/components/layout/content-footer'
import components from '~/lib/remark-components'
import Text, { H1, H2, H3, H4 } from '~/components/text'
import HR from '~/components/text/hr'
import { FooterFeedback } from '~/components/feedback-input'
import { PRODUCT_NAME, ORG_NAME } from '~/lib/constants'
import SubHeader from '~/components/subheader'
import Link from '~/components/text/link'
import Footer from '~/components/footer'
import Wrapper from '~/components/layout/wrapper'
import Content from '~/components/layout/content'
import { LinkList } from '~/components/list'
import formatDate from 'date-fns/format'

import DatoCMSRenderer from '~/components/datocms-renderer'

const DocH1 = ({ children }) => (
  <>
    <Heading noAnchor lean offsetTop={175}>
      <H1>{children}</H1>
    </Heading>
    <style jsx>{`
      :global(h1) {
        margin: 0;
      }
    `}</style>
  </>
)

const DocH2 = ({ children }) => (
  <>
    <Heading lean offsetTop={175}>
      <H2>{children}</H2>
    </Heading>
    <style jsx>{`
      :global(h2) {
        margin: 40px 0 0 0;
      }
    `}</style>
  </>
)

const DocH3 = ({ children }) => (
  <>
    <Heading lean offsetTop={175}>
      <H3>{children}</H3>
    </Heading>
    <style jsx>{`
      :global(h3) {
        margin: 40px 0 0 0;
      }
    `}</style>
  </>
)

const DocH4 = ({ children }) => (
  <>
    <Heading lean offsetTop={175}>
      <H4>{children}</H4>
    </Heading>
    <style jsx>{`
      :global(h4) {
        margin: 40px 0 0 0;
      }
    `}</style>
  </>
)

const NonAmpOnly = ({ children }) => (useAmp() ? null : children)

class withStandard extends React.PureComponent {
  render() {
    const {
      article = {
        title: `${PRODUCT_NAME} Knowledge`,
        description: `The knowledge base and documentation for how to use ${PRODUCT_NAME} and how it works.`,
      },
      publishedArticle,
    } = this.props

    const hasArticle = article !== null
    const isPreview = this.props.preview === true

    return (
      <>
        <Head
          titlePrefix={isPreview ? `[PREVIEW] ` : ``}
          titleSuffix={` - ${ORG_NAME} Knowledge Base`}
          title={
            hasArticle ? `${article.title}` : `Knowledge Base Article Not Found`
          }
          description={
            hasArticle
              ? article.description
              : `The article that has been requested was not found.`
          }
          image={hasArticle ? article.image : undefined}
          lastEdited={hasArticle ? article._publishedAt : undefined}
          noIndex={!hasArticle || isPreview}
        ></Head>
        {isPreview && (
          <header className="preview-heading">
            <Wrapper>
              <div>
                You are currently viewing the{' '}
                <span
                  className="version"
                  title={`updated on ${formatDate(
                    article._updatedAt,
                    'MMMM Do YYYY, HH:mm:ss'
                  )}`}
                >
                  preview version
                </span>{' '}
                of{' '}
                <i>
                  <strong>"{article.title}"</strong>
                </i>
                .
                <span className="time-block">
                  It was updated on{' '}
                  <span className="timestamp">
                    {formatDate(article._updatedAt, 'MMMM Do YYYY, HH:mm:ss')}
                  </span>
                  .
                </span>
              </div>
              {article._status !== 'draft' ? (
                <div>
                  The{' '}
                  <span
                    className="version"
                    title={
                      publishedArticle._publishedAt ===
                      publishedArticle._firstPublishedAt
                        ? `published on ${formatDate(
                            publishedArticle._firstPublishedAt,
                            'MMMM Do YYYY, HH:mm:ss'
                          )}`
                        : `first published on ${formatDate(
                            publishedArticle._firstPublishedAt,
                            'MMMM Do YYYY, HH:mm:ss'
                          )}, revised on ${formatDate(
                            publishedArticle._publishedAt,
                            'MMMM Do YYYY, HH:mm:ss'
                          )}`
                    }
                  >
                    published version
                  </span>{' '}
                  of this article can be accessed{' '}
                  <Link
                    href="/knowledge/[slug]"
                    as={`/knowledge/${publishedArticle.slug}`}
                    target="_blank"
                  >
                    <b>here</b>
                  </Link>
                  .
                  {publishedArticle._publishedAt ===
                  publishedArticle._firstPublishedAt ? (
                    <span className="time-block">
                      It was published on{' '}
                      <span className="timestamp">
                        {formatDate(
                          publishedArticle._firstPublishedAt,
                          'MMMM Do YYYY, HH:mm:ss'
                        )}
                      </span>
                    </span>
                  ) : (
                    <span className="time-block">
                      It was first published on{' '}
                      <span className="timestamp">
                        {formatDate(
                          publishedArticle._firstPublishedAt,
                          'MMMM Do YYYY, HH:mm:ss'
                        )}
                      </span>{' '}
                      and revised at{' '}
                      <span className="timestamp">
                        {formatDate(
                          publishedArticle._publishedAt,
                          'MMMM Do YYYY, HH:mm:ss'
                        )}
                      </span>
                    </span>
                  )}
                </div>
              ) : (
                <div>This article has not been published yet.</div>
              )}
            </Wrapper>
          </header>
        )}

        <header className="knowledge-heading">
          <Wrapper width="900">
            <SubHeader title="Knowledge">
              <Link href="/knowledge" style={{ fontSize: 14 }}>
                View All Articles
              </Link>
            </SubHeader>
            {hasArticle && (
              <div className="knowledge-title">
                <DocH1>{article.title}</DocH1>
              </div>
            )}
          </Wrapper>
        </header>

        <Wrapper width="768">
          {hasArticle ? (
            <section className="knowledge">
              {article.content && (
                <DatoCMSRenderer
                  components={{
                    ...components,
                    h2: DocH2,
                    h3: DocH3,
                    h4: DocH4,
                  }}
                  content={article.content}
                />
              )}

              <NonAmpOnly>
                <>
                  <HR />
                  <FooterFeedback />
                </>
              </NonAmpOnly>
              <ContentFooter
                lastEdited={article._updatedAt}
                // editUrl={meta.editUrl}
              />
            </section>
          ) : (
            <Content center small>
              <div className="description">
                <svg
                  width="289"
                  height="271"
                  viewBox="0 0 289 271"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M108.36 2.48l105.7 185.47H2.66L108.35 2.48z"
                    fill="#fff"
                    stroke="#EAEAEA"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <g filter="url(#filter0_d)">
                    <ellipse
                      cx="182.68"
                      cy="156.48"
                      rx="74.32"
                      ry="74.52"
                      fill="#fff"
                    />
                    <path
                      d="M256.5 156.48c0 40.88-33.05 74.02-73.82 74.02-40.77 0-73.83-33.14-73.83-74.02 0-40.87 33.06-74.01 73.83-74.01 40.77 0 73.82 33.14 73.82 74.01z"
                      stroke="#EAEAEA"
                    />
                  </g>
                  <mask
                    id="a"
                    maskUnits="userSpaceOnUse"
                    x="108"
                    y="81"
                    width="149"
                    height="150"
                  >
                    <ellipse
                      cx="182.68"
                      cy="156.48"
                      rx="74.32"
                      ry="74.52"
                      fill="#fff"
                    />
                  </mask>
                  <g mask="url(#a)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M108.36 2.48l105.7 185.47H2.66L108.35 2.48z"
                      fill="#000"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d"
                      x="76.35"
                      y="57.97"
                      width="212.65"
                      height="213.03"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="8" />
                      <feGaussianBlur stdDeviation="16" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>

                <H1>404</H1>
                <H4>Article Not Found</H4>
                <Text type="secondary">
                  We couldn’t find the article you were looking for. Try
                  searching the documentation for keywords.
                </Text>
                <LinkList>
                  <Link href="/docs">Docs</Link>
                  <Link href="/guides">Guides</Link>
                  <Link href="/knowledge">Knowledge</Link>
                  <Link href="/blog">Blog</Link>
                </LinkList>
              </div>
            </Content>
          )}
        </Wrapper>
        <Footer />
        <style jsx>{`
          .knowledge-heading {
            border-bottom: 1px solid #eaeaea;
            margin-top: 36px;
            padding-bottom: 44px;
            text-align: center;
          }

          .preview-heading {
            padding: 2rem 0;
            position: sticky;
            top: 4rem;
            z-index: 1;

            //background: #faf8c3CC;
            background: var(--geist-warning-light);
            opacity: 0.95;
          }

          .preview-heading div {
            margin-bottom: 0.5rem;
            font-size: 0.85em;
          }

          .preview-heading div .version {
            text-decoration: underline;
            cursor: pointer;
          }

          .preview-heading div .time-block {
            display: block;
            font-size: 0.9em;
          }

          .preview-heading div .time-block .timestamp {
            font-style: italic;
          }

          .knowledge-title {
            padding-top: 15px;
          }

          .knowledge {
            padding-bottom: 64px;
            padding-top: 32px;
          }

          .description {
            text-align: center;
            width: 512px;
            max-width: 100%;
            padding: 0 16px;
            padding-top: 64px;
            margin: 3rem auto 4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .description svg {
            margin-bottom: -32px;
            margin-left: 32px;
            max-width: 100%;
          }

          .description :global(h1) {
            margin-bottom: 8px;
          }

          .description :global(h4) {
            margin-top: 0;
            margin-bottom: 16px;
          }

          .description :global(p) {
            margin-top: 0;
            margin-bottom: 32px;
          }
        `}</style>
      </>
    )
  }
}

export default withRouter(withStandard)
