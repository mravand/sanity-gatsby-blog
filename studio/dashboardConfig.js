export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5cdbea0ecdd06549867ab156',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ogvtp34v',
                  apiId: '5513841e-0f15-40cc-a6ce-106a71f84f74'
                },
                {
                  buildHookId: '5cdbea0ee146213c34d78390',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-honbpwxw',
                  apiId: '1b74d5f3-4561-4a04-9580-757845ef7b59'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mravand/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-honbpwxw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
