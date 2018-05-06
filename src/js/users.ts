'use strict'
// Import every user data into a objet
import claudiamd from "../assets/markdown/claudia.md";
import claudiapic from "../assets/images/avatars/claudia.png";
import emiliamd from "../assets/markdown/emilia.md";
import emiliapic from "../assets/images/avatars/emilia.png";
import francomd from "../assets/markdown/franco.md";
import francopic from "../assets/images/avatars/franco.png";
import gabrielamd from "../assets/markdown/gabriela.md";
import gabrielapic from "../assets/images/avatars/gabriela.png";
import juanmd from "../assets/markdown/juan.md";
import juanpic from "../assets/images/avatars/juan.png";
import lauramd from "../assets/markdown/laura.md";
import laurapic from "../assets/images/avatars/laura.png";
import solanamd from "../assets/markdown/solana.md";
import solanapic from "../assets/images/avatars/solana.png";

import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  headerIds: false
});

const users: any = {
  'claudia' : {
    'description': marked(claudiamd),
    'photoUrl': claudiapic
  },
  'emilia' : {
    'description': marked(emiliamd),
    'photoUrl': emiliapic
  },
  'franco' : {
    'description': marked(francomd),
    'photoUrl': francopic
  },
  'gabriela' : {
    'description': marked(gabrielamd),
    'photoUrl': gabrielapic
  },
  'juan' : {
    'description': marked(juanmd),
    'photoUrl': juanpic
  },
  'laura' : {
    'description': marked(lauramd),
    'photoUrl': laurapic
  },
  'solana' : {
    'description': marked(solanamd),
    'photoUrl': solanapic
  },

};

export default users;
