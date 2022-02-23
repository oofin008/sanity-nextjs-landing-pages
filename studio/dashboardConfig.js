export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62165aa3ce5d7125989aa7d2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2mp1yw1i',
                  apiId: 'ae0c201d-d408-4876-9dea-c4a49b367aa3'
                },
                {
                  buildHookId: '62165aa1d44990168f14d8eb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-v1i18rx8',
                  apiId: 'def3e196-5f86-4a06-859c-6238231eaed1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oofin008/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-v1i18rx8.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
