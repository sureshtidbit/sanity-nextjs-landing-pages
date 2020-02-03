export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e37fc7e2dc111ff3aba4611',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ry9hzks2',
                  apiId: 'fb685baf-f5e3-4bfb-b2c3-902d8f0a85d6'
                },
                {
                  buildHookId: '5e37fc7ed14944c7101f0dfc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5jsxkw3j',
                  apiId: '8fbe1f22-c3b4-43ea-abb8-3081bd9624de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sureshtidbit/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5jsxkw3j.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
