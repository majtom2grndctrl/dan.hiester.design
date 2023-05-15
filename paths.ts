export default {
  about: '/about',
  blog: '/blog',
  blog_item: (slug: string) => `/blog/${slug}`,
  portfolio: '/portfolio',
  portfolio_item: (slug: string) => '/portfolio/' + slug,
  portfolio_all: '/portfolio/all-projects',
  portfolio_all_item: (slug: string) => '/portfolio/all-projects/' + slug,
  styleguide: '/styleguide',
}
