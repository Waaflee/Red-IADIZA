import Card from './cards';

export default () => {
  window.onload = () => {
    const nombres: string[] = ['avatar','avatar','avatar','avatar','avatar','avatar'];
    const investigadores: Card[] = nombres.map((n)=> new Card(n));

    let container = document.getElementsByClassName('columns')[0];
    investigadores.map((n) => {
      container.innerHTML += n.render();
    });

  }
}
