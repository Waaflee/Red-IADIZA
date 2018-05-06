import Card from './cards';

export default () => {
  window.onload = () => {
    const nombres: string[] = ['claudia','emilia','franco','gabriela','juan','laura','solana'];
    const investigadores: Card[] = nombres.map((n)=> new Card(n));

    let container = document.getElementsByClassName('has-cards')[0];
    investigadores.map((n) => {
      container.innerHTML += n.render();
    });

  }
}
