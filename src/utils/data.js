const inbox = [
  {
    id: 1,
    type: 'group',
    title: '109220-Naturalization',
    createdAt: 'January 1, 2021 19:10',
    messages: [
      {
        user: 'Cameron Phillips',
        message: 'Please check this out!',
        read: false,
      },
    ],
  },
  {
    id: 2,
    type: 'group',
    title: 'Jeanette Moraima Guaman Chamba (Hutto 1-589) [ Hutto Follow Up - Brief Service ]',
    createdAt: '02/06/2021 10:45',
    messages: [
      {
        user: 'Ellen',
        message: 'Hey, please read.',
        read: true,
      },
    ],
  },
  {
    id: 3,
    type: 'group',
    title: '8405-Diana SALAZAR MUNGUIA',
    createdAt: '01/06/2021 12:19',
    messages: [
      {
        user: 'Cameron Phillips',
        message: 'I understand your',
        read: true,
      },
    ],
  },
  {
    id: 4,
    type: 'private',
    title: 'FastVisa Support',
    createdAt: '01/06/2021 12:19',
    messages: [
      {
        user: 'FastVisa',
        message: 'Hey there! Welcome to your inbox.',
        read: true,
      },
    ],
  },
];

function getInbox() {
  return inbox;
}

export default getInbox;
