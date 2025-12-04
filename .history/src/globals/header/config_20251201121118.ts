import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/Header/RowLabel#RowLabel',
        },
      },
    },

    {
      name: 'social',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link',
        },
        {
          name: 'icon_fontawesome',
          type: 'text',
          label: 'FontAwesone Icon Class',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
