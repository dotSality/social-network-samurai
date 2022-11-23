import home from '../common/Img/links/home.svg';
import message from '../common/Img/links/message.svg';
import news from '../common/Img/links/news.svg';
import users from '../common/Img/links/users.svg';
import music from '../common/Img/links/music.svg';

export const linksImages = { home, message, news, users, music };

export const links = [
  { label: 'Home', icon: home, route: `/` },
  { label: 'Messages', icon: message, route: '/dialogs' },
  { label: 'News', icon: news, route: '/news' },
  { label: 'Users', icon: users, route: '/users' },
  { label: 'Music', icon: music, route: '/music' },
];