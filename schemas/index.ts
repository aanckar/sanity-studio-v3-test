export const schemaTypes = [
  {
    name: 'textBlock',
    title: 'Text block',
    type: 'object',
    fields: [
      {
        name: 'text',
        title: 'Text',
        type: 'object',
        fieldsets: [
          {
            title: 'Translations',
            name: 'translations',
            options: {collapsible: true},
          },
        ],
        fields: [
          {
            name: 'en',
            title: 'English',
            type: 'string',
            fieldset: null,
          },
          {
            name: 'fi',
            title: 'Finnish',
            type: 'string',
            fieldset: 'translations',
          },
        ],
      },
    ],
  },
  {
    name: 'blocks',
    title: 'Content',
    type: 'array',
    of: [
      {
        type: 'textBlock',
      },
    ],
  },
  {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'blocks',
        title: 'Blocks',
        type: 'blocks',
      },
    ],
  },
]
