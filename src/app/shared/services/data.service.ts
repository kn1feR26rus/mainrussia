export class DataService {
  private bloggers = [
    {
      id: 1,
      name: 'Влад А4',
      img: 'https://image.winudf.com/v2/image1/Y29tLm9tZy5iZXN0d2FsbHBhcGVyc2hkX3NjcmVlbl8wXzE2MDQwODAxMTlfMDk4/screen-0.jpg?fakeurl=1&type=.jpg',
      youtube: '1 111 000',
      vk: '133 000',
      insta: '122 333',
      info: 'Lorem ipsum dolor sit amet, consssssssssssssssssssssssssssssssssssssssssectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac ',
    },
    {
      id: 2,
      name: 'Юрий Дудь',
      img: 'https://problogerov.ru/wp-content/uploads/2020/03/jurij-dud-bloger.jpg',
      youtube: '1 213 222',
      vk: '213 213',
      insta: '321 321',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac ',
    },
    {
      id: 3,
      name: 'SlivkiShow',
      img: 'https://sun9-29.userapi.com/impf/c637217/v637217511/34e39/YHZekP4wWqQ.jpg?size=604x604&quality=96&sign=96db729db7b6dea1b4f37cb36b083411&type=album',
      youtube: '1 123 123',
      vk: '55 222',
      insta: '33 555',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac ',
    },
    {
      id: 4,
      name: 'Дневник Хача',
      img: 'https://storage.myseldon.com/yugo/2BE6B7637512DDF2E8A40F4DD4297D29.png',
      youtube: '2 122 222',
      vk: '444 111',
      insta: '444 222',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac ',
    },
    {
      id: 5,
      name: 'Настя Ивлеева',
      img: 'https://avatars.mds.yandex.net/get-zen_doc/1863556/pub_5f1d6151b646dd546ed90609_5f1d61fc8541ce71f637378c/scale_1200',
      youtube: '1 111 666',
      vk: '222 222',
      insta: '555 555',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac ',
    },
    {
      id: 6,
      name: 'TheKateClapp',
      img: 'https://pbs.twimg.com/media/EbrRqXEWsAAOttm.jpg',
      youtube: '1 123 231',
      vk: '442 212',
      insta: '442 213',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac ',
    },
    {
      id: 7,
      name: 'Wylsacom',
      img: 'https://avatars.mds.yandex.net/get-zen_doc/57035/pub_5988db093c50f71f44035d6b_5988db3457906a45d9720a39/scale_1200',
      youtube: '3 113 221',
      vk: '222 333',
      insta: '444 221',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac ',
    },
    {
      id: 8,
      name: 'LiveHuck',
      img: 'https://smoservice.media/upload/iblock/b35/b35313826d1170bbccf76a021731d255.jpg',
      youtube: '5 123 121',
      vk: '213 222',
      insta: '333 222',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac ',
    }
  ]

  constructor() { }

  public getAll() {
    return this.bloggers;
  }

  public getBlogger(id: number) {
    return this.bloggers.find(bloggers => bloggers.id === id)

  }
}
