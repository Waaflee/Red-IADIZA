'use strict'
// Import every user data into a objet
import Avatar_md from '../assets/markdown/avatar.md';
import Avatar_pic from '../assets/images/avatars/avatar.png';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  headerIds: false
});

const users: any = {
  'avatar' : {
    'description': marked(Avatar_md),
    'photoUrl': Avatar_pic
  }
};

export default users;
