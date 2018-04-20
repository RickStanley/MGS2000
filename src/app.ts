import './resources/scss/app.scss';
import highlight from './resources/modules/satzstellungmarkieren';
import Meta from "./resources/models/meta";

interface Lager {
  etikette?: string;
  eingang?: {
    [x: string]: string,
    inhalt?: string
  };
  verbreitet?: string;
  showInput: boolean;
  meta?: Meta;
}
interface Einstellungen {
  title: string;
  lager: Array<Lager>;
}
export class App {
  aus: HTMLElement;
  pageTitle = 'MTG 2000';
  einstellungen: Array<Einstellungen>;

  metas: Array<any>;
  constructor() {
    this.einstellungen = [
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
            etikette: 'Imagem do Site',
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
    ];
    (async (callback) => {
      await Promise.all(this.einstellungen.map(async einstellung => {
        try {
          await Promise.all(einstellung.lager.map(async meta => meta.meta = new Meta(meta.eingang, meta.verbreitet)));
        } catch (error) { console.error(error) }
      })).then(() => callback()).catch(reason => console.error(reason));
    })(() => {
      console.log('done: ', this.einstellungen);
    });

  }
  komment(text: string): string {
    return `<!-- ${text} -->`
  }
  updateMeta(obj): void {
    console.log('obj: ', obj);
  }
  high(): void {
    highlight(this.aus, 'html');
  }
}
