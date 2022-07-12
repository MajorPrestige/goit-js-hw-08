import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// const newPlayer = () => {
//   player.getCurrentTime().then(function (seconds) {
//     localStorage.setItem('videoplayer-current-time', seconds);
//   });
// };

// player.on('timeupdate', throttle(newPlayer, 1000));
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(videoDuration, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function videoDuration(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}
