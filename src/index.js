import main from './js/main';
import 'aos/dist/aos.css';
import AOS from 'aos/dist/aos';

AOS.init({
  offset: 120,
  duration: 500,
  easing: 'ease-in-sine',
  delay: 100,
});
main();
// new Glide('.glide').mount();
