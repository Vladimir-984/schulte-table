import { PromoBannerData } from 'types/vkui'

export const defaultPromoBannerData: PromoBannerData = {
   title: 'Заголовок',
   domain: 'vk.com',
   trackingLink: 'https://vk.com',
   ctaText: 'Перейти',
   advertisingLabel: 'Реклама',
   iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
   description: 'Описание рекламы',
   ageRestrictions: '14+',
   statistics: [
      { url: '', type: 'playbackStarted' },
      { url: '', type: 'click' },
   ],
}
