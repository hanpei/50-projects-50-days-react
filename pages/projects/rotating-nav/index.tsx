import * as React from 'react'
import { Icon } from '@iconify/react'
import { RotatingContainer } from '../../../components/RotatingNav'

export interface IIndexProps {}

export default function Index(props: IIndexProps) {
  const navItems = [
    {
      key: '1',
      iconName: 'ion:home-sharp',
      value: 'Home',
      url: '/home',
    },
    {
      key: '2',
      iconName: 'ion:person-sharp',
      value: 'About',
      url: '/about',
    },
    {
      key: '3',
      iconName: 'ion:mail-sharp',
      value: 'Contact',
      url: '/contact',
    },
  ]
  return (
    <RotatingContainer nav={navItems}>
      <div className="container mx-auto max-w-3xl text-lg">
        <h1 className="py-5 text-3xl font-bold">Customer Tactics Analyst</h1>
        <small className="text-gray-500">Elza</small>
        <p className="py-5">
          Voluptatibus iure eaque cupiditate quo autem quos aliquam atque. Enim
          qui et autem vel ut eaque quia et quia. Sunt dolor ut pariatur
          molestiae. Dignissimos incidunt praesentium quia et. Magni vero
          occaecati illum qui blanditiis aut. Ab eum repellendus animi et unde
          eligendi ea rerum reiciendis. Ea exercitationem ut id officiis atque
          velit ut rerum ipsum. Sapiente est nulla eligendi. Enim dolore nulla
          perferendis. Asperiores maxime officiis tempora odit. Iure rerum
          itaque error exercitationem.
        </p>
        <h3 className="py-5 text-xl font-bold">
          Principal Integration Architect
        </h3>
        <img
          className="w-full py-5"
          src="http://placeimg.com/640/480/cats"
          alt="cats"
        />
        <p className="py-5">
          Tempora quis asperiores. Nulla rerum cumque earum ut mollitia qui
          sequi beatae quod. Ut sed vero illum. Assumenda ea et ut. Blanditiis
          doloremque atque qui voluptas blanditiis tempora ratione. Corrupti
          aperiam autem nihil adipisci et voluptatem ipsam. Sed ut sunt numquam.
          Quibusdam fuga dolore ex quo dolorum quod cupiditate eos omnis. Quia
          placeat sequi qui natus aut similique et. Sint quo fugit
          exercitationem atque rerum ut. Consequatur doloremque vero mollitia
          omnis aperiam quia itaque. Sed eos dolor ut voluptas qui id enim illo.
          Fuga omnis impedit quisquam quasi laudantium et ipsum. Iure voluptas
          voluptatem rerum voluptatem. Cupiditate excepturi nihil nemo rem
          facilis eveniet. Ea atque rem adipisci ut ea. Quasi tenetur omnis aut.
          Eligendi vero quidem sed neque.
        </p>
      </div>
    </RotatingContainer>
  )
}
