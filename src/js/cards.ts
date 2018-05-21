'use strict'
import users from './users';

export default class Card {

  description: string;
  photoUrl: string;

  constructor(name: string) {
    this.description = users[name].description;
    this.photoUrl = users[name].photoUrl;
  }

  render() {
    return `<div class="column">
                    <div class="card" data-aos="zoom-in">
                    <div class="card-image">
                    <figure class="image is-4by3">
                    <img src=${this.photoUrl} alt="avatar">
                    </figure>
                    </div>
                    <div class="card-content">
                    ${this.description}
                    </div>
                    </div>
                    </div>`
  };
}
