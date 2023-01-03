import type { Spots } from '@lib/types/spots';
import type { Salle } from '@lib/types/salle';

type Category = { category: Spots; salles: Salle[] };

export const allSpots: Readonly<Category[]> = [
  {
    category: 'Industriel',
    salles: [
      {
        name: 'Zone Tremen',
        price: 15,
        description:
          'Est ultricies integer quis auctor elit sed vulputate. Libero enim sed faucibus turpis in eu mi bibendum. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. ',
        image: '/assets/spots/industrie/industrie.jpg'
      },
      {
        name: 'Zone keride',
        price: 17,
        description:
          'Eget duis at tellus at urna condimentum mattis pellentesque. Purus in mollis nunc sed id semper risus in hendrerit. In mollis nunc sed id semper risus in hendrerit.',
        image: '/assets/spots/industrie/industrie_1.jpg'
      }
    ]
  },
  {
    category: 'Abondonne',
    salles: [
      {
        name: 'ROC',
        price: 14,
        description:
          'Mi sit amet mauris commodo quis imperdiet massa tincidunt. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
        image: '/assets/spots/abandoned_building/abandoned_building.jpg'
      },
      {
        name: 'Avity',
        price: 15,
        description:
          'Vel pharetra vel turpis nunc eget lorem dolor sed. Nisi lacus sed viverra tellus in hac habitasse platea. Suspendisse sed nisi lacus sed viverra.',
        image: '/assets/spots/abandoned_building/abandoned_building_0.jpg'
      },
      {
        name: 'Sinner',
        price: 20,
        description: 'Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Quis imperdiet massa tincidunt nunc pulvinar sapien.',
        image: '/assets/spots/abandoned_building/abandoned_building_1.jpg'
      },

      {
        name: 'Error',
        price: 20,
        description: 'Eget dolor morbi non arcu risus. Pulvinar proin gravida hendrerit lectus a. Ultrices gravida dictum fusce ut placerat. Purus gravida quis blandit turpis. ',
        image: '/assets/spots/abandoned_building/abandoned_building_3.jpg'
      }
    ]
  }, {
    category: 'Cyberpunk Club',
    salles: [
      {
        name: 'Ether',
        price: 22,
        description:
          'Risus feugiat in ante metus dictum. Felis donec et odio pellentesque Lobortis mattis aliquam faucibus purus in.',
        image: '/assets/spots/Cyberpunk_bar/Cyberpunk_bar.jpg'
      },
      {
        name: 'KEEPVON',
        price: 25,
        description:
          ' Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Nulla facilisi etiam dignissim diam quis.',
        image: '/assets/spots/Cyberpunk_bar/Cyberpunk_bar_0.jpg'
      },
      {
        name: 'Sitrate',
        price: 27,
        description:
          ' Morbi leo urna molestie at elementum eu facilisis sed. Id faucibus nisl tincidunt eget nullam. Urna et pharetra pharetra massa massa ultricies mi quis.',
        image: '/assets/spots/Cyberpunk_bar/Cyberpunk_bar_1.jpg'
      }, {
        name: '11',
        price: 22,
        description:
          'Vitae suscipit tellus mauris a diam maecenas. Lorem ipsum dolor sit amet,  Adipiscing commodo elit . ',
        image: '/assets/spots/Cyberpunk_bar/Cyberpunk_bar_2.jpg'
      }
    ]
  },
];
