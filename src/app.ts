import './resources/scss/app.scss';
import highlight from './resources/modules/satzstellungmarkieren';

export class App {
  aus: HTMLElement;
  pageTitle = 'MTG 2000';
  einstellungen = [
    {
      title: 'Configurações Gerais',
      lager: [
        {
          eingang: {
            inhalt: 'utf-8'
          },
          showInput: false
        },
        {
          etikette: 'Titulo',
          verbreitet: 'title',
          showInput: true
        },
        {
          etikette: 'Descrição da Página',
          eingang: {
            name: 'description'
          },
          verbreitet: 'description',
          showInput: true
        },
        {
          etikette: 'Site Image',
          eingang: {
            name: 'image'
          },
          verbreitet: 'image',
          showInput: true
        },
        {
          eingang: {
            itemprop: 'name'
          },
          verbreitet: 'title',
          showInput: false
        },
        {
          eingang: {
            itemprop: 'description',
          },
          verbreitet: 'description',
          showInput: false
        },
        {
          eingang: {
            itemprop: 'image'
          },
          verbreitet: 'image',
          showInput: false
        }
      ]
    },
    {
      title: 'Open Graph',
      lager: [
        {
          etikette: 'Imagem de Pré-visualização',
          eingang: {
            name: 'og:image'
          },
          showInput: true
        },
        {
          etikette: 'URL',
          eingang: {
            name: 'og:url'
          },
          showInput: true
        },
        {
          etikette: 'Nome do Site',
          eingang: {
            name: 'og:site_name'
          },
          showInput: true
        },
        {
          etikette: 'Locale',
          eingang: {
            name: 'og:locale'
          },
          showInput: true
        },
        {
          etikette: 'Vídeo',
          eingang: {
            name: 'og:video'
          },
          showInput: true
        },
        {
          etikette: 'Admins ID',
          eingang: {
            name: 'fb:admins'
          },
          showInput: true
        },
        {
          etikette: 'App ID',
          eingang: {
            name: 'fb:app_id'
          },
          showInput: true
        },
        {
          eingang: {
            name: 'og:type',
            inhalt: 'website'
          },
          showInput: false
        },
        {
          eingang: {
            name: 'og:description'
          },
          verbreitet: 'description',
          showInput: false
        }
      ]
    },
    {
      title: 'Twitter',
      lager: [
        {
          etikette: 'Alça do Editor',
          eingang: {
            name: 'twitter:site'
          },
          showInput: true
        },
        {
          etikette: 'Alça do autor do artigo',
          eingang: {
            name: 'twitter:creator'
          },
          showInput: true
        },
        {
          etikette: 'Imagem de Pré-visualização',
          eingang: {
            name: 'twitter:image:src'
          },
          showInput: true
        },
        {
          etikette: 'Fonte de Video/Audio Player',
          eingang: {
            name: 'twitter:player'
          },
          showInput: true
        },
        {
          eingang: {
            name: 'twitter:card',
            inhalt: 'summary'
          },
          showInput: false
        }
      ]
    }
  ]
  komment(text: string) {
    return `<!-- ${text} -->`
  }
  updateMeta(self) {
    console.log(this);
  }
  high() {
    highlight(this.aus, 'html');
  }
}
