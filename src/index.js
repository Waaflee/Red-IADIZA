import 'animate.css';
import './css/main.scss';
import main from './js/main';
// import Glide from '@glidejs/glide';
import 'aos/dist/aos.css';
import AOS from 'aos/dist/aos';

AOS.init({
  offset: 225,
  duration: 500,
  easing: 'ease-in-sine',
  delay: 100,
});
main();
// new Glide('.glide').mount();
