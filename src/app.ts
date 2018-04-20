import './resources/scss/app.scss';
import Meta from "./resources/models/meta";
import Allgemeines from 'resources/models/Allgemeines';

interface Lager {
  etikette?: string;
  platzhalter?: string
  darunter?: {
    link?: string,
    text: string
  };
  eingang?: {
    [x: string]: string,
    inhalt?: string
  };
  verbreitet?: string;
  eingabeAnzeigen: boolean;
  objekt?: Meta | Allgemeines;
  isMeta: boolean;
  fuhrer?: boolean;
}
interface Metaeinstellungen {
  title: string;
  komment: string;
  lager: Array<Lager>;
}
export class App {
  aus: HTMLElement;
  pageTitle = 'MTG 2000';
  metaeinstellungen: Array<Metaeinstellungen> = [
    {
      title: 'Configurações Gerais',
      komment: this.komment('COMMON TAGS & Search Engine & Schema.org para Google'),
      lager: [
        {
          eingang: {
            inhalt: 'utf-8'
          },
          eingabeAnzeigen: false,
          isMeta: true
        },
        {
          etikette: 'Título',
          platzhalter: 'Título da Página',
          verbreitet: 'title',
          eingang: {
            typ: 'title'
          },
          eingabeAnzeigen: true,
          isMeta: false,
          fuhrer: true
        },
        {
          etikette: 'Descrição da Página',
          platzhalter: 'Descrição da Página',
          darunter: {
            text: '150 caracteres para SEO, 200 caracteres para Twitter & Facebook'
          },
          verbreitet: 'description',
          eingang: {
            name: 'description'
          },
          eingabeAnzeigen: true,
          isMeta: true,
          fuhrer: true
        },
        {
          etikette: 'Imagem do Site',
          platzhalter: 'https://zumbeispiele.com/imagem.jpg',
          eingang: {
            name: 'image'
          },
          verbreitet: 'image',
          eingabeAnzeigen: true,
          isMeta: true,
          fuhrer: true
        },
        {
          eingang: {
            itemprop: 'name'
          },
          verbreitet: 'title',
          eingabeAnzeigen: false,
          isMeta: true,
          fuhrer: false
        },
        {
          eingang: {
            itemprop: 'description',
          },
          verbreitet: 'description',
          eingabeAnzeigen: false,
          isMeta: true,
          fuhrer: false
        },
        {
          eingang: {
            itemprop: 'image'
          },
          verbreitet: 'image',
          eingabeAnzeigen: false,
          isMeta: true,
          fuhrer: false
        }
      ]
    },
    {
      title: 'Open Graph',
      komment: this.komment('Open Graph general (Facebook, Pinterest & Google+)'),
      lager: [
        {
          eingang: {
            name: 'og:title'
          },
          verbreitet: 'title',
          eingabeAnzeigen: false,
          isMeta: true,
          fuhrer: false
        },
        {
          eingang: {
            name: 'og:description'
          },
          verbreitet: 'description',
          eingabeAnzeigen: false,
          isMeta: true,
          fuhrer: false
        },
        {
          etikette: 'Imagem de Pré-visualização',
          platzhalter: 'https://www.zumbeispiele.com/logo.jpg',
          darunter: {
            text: 'Dimensões recomendadas: 1200px x 630px; dimensão mínima: 600px x 315px'
          },
          eingang: {
            name: 'og:image'
          },
          eingabeAnzeigen: true,
          isMeta: true
        },
        {
          etikette: 'URL',
          platzhalter: 'https://zumbeispiele.com',          
          eingang: {
            name: 'og:url'
          },
          eingabeAnzeigen: true,
          isMeta: true
        },
        {
          etikette: 'Nome do Site',
          platzhalter: 'Site Exemplo',          
          eingang: {
            name: 'og:site_name'
          },
          eingabeAnzeigen: true,
          isMeta: true
        },
        {
          etikette: 'Locale',
          platzhalter: 'pt_BR',          
          eingang: {
            name: 'og:locale'
          },
          eingabeAnzeigen: true,
          isMeta: true
        },
        {
          etikette: 'Vídeo',
          platzhalter: 'https://www.zumbeispiele.com/video.avi',          
          eingang: {
            name: 'og:video'
          },
          eingabeAnzeigen: true,
          isMeta: true
        },
        {
          etikette: 'Admins ID',
          platzhalter: 'Um ID de usuário do Facebook',
          darunter: {
            link: 'https://findmyfbid.com/',
            text: 'Encontre seu ID de usuário de Facebook com esta ferramenta'
          },
          eingang: {
            name: 'fb:admins'
          },
          eingabeAnzeigen: true,
          isMeta: true
        },
        {
          etikette: 'App ID',
          platzhalter: 'App ID Facebook',      
          darunter: {
            link: 'https://developers.facebook.com/apps/',
            text: 'Encontre seu Facebook App ID aqui'
          },    
          eingang: {
            name: 'fb:app_id'
          },
          eingabeAnzeigen: true,
          isMeta: true
        },
        {
          eingang: {
            name: 'og:type',
            inhalt: 'website'
          },
          eingabeAnzeigen: false,
          isMeta: true
        },
        {
          eingang: {
            name: 'og:description'
          },
          verbreitet: 'description',
          eingabeAnzeigen: false,
          isMeta: true,
          fuhrer: false
        }
      ]
    },
    {
      title: 'Twitter',
      komment: this.komment('Twitter'),
      lager: [
        {
          eingang: {
            name: 'og:title'
          },
          verbreitet: 'title',
          eingabeAnzeigen: false,
          isMeta: true,
          fuhrer: false
        },
        {
          eingang: {
            name: 'og:description'
          },
          verbreitet: 'description',
          eingabeAnzeigen: false,
          isMeta: true,
          fuhrer: false
        },
        {
          etikette: 'Alça do Editor',
          platzhalter: '@editor_alça',          
          eingang: {
            name: 'twitter:site'
          },
          eingabeAnzeigen: true,
          isMeta: true
        },
        {
          etikette: 'Alça do autor do artigo',
          platzhalter: '@autor_alça',          
          eingang: {
            name: 'twitter:creator'
          },
          eingabeAnzeigen: true,
          isMeta: true
        },
        {
          etikette: 'Imagem de Pré-visualização',
          platzhalter: 'https://zumbeispiele.com/imagem.jpg',
          darunter: {
            text: 'Dimensão máxima: 1024px x 512px; dimensão mínima: 440px x 220px'
          },
          eingang: {
            name: 'twitter:image:src'
          },
          eingabeAnzeigen: true,
          isMeta: true
        },
        {
          etikette: 'Fonte de Video/Audio Player',
          platzhalter: 'https://www.youtube.com/embed/Vhh_GeBPOhs',     
          darunter: {
            text: 'HTTPS URL para um playr iFrame'
          },     
          eingang: {
            name: 'twitter:player'
          },
          eingabeAnzeigen: true,
          isMeta: true
        },
        {
          eingang: {
            name: 'twitter:card',
            inhalt: 'summary'
          },
          eingabeAnzeigen: false,
          isMeta: true
        }
      ]
    }
  ];

  constructor() {
    Promise.all(this.metaeinstellungen.map(async einstellung => {
      try {
        await Promise.all(einstellung.lager.map(async feld => feld.objekt = feld.isMeta ? new Meta(feld.eingang, feld.verbreitet) : new Allgemeines(feld.eingang)));
      } catch (error) { console.error(error) }
    })).catch(reason => console.error(reason));
  }
  komment(text: string): string {
    return `<!-- ${text} -->`
  }
  async checkVerwandte(obj: Lager): Promise<void> {
    if (obj.fuhrer) {
      Promise.all(this.metaeinstellungen.map(async einstellung => {
        await Promise.all(einstellung.lager.map(async feld => {
          if (!feld.fuhrer && feld.verbreitet === obj.verbreitet) feld.objekt.inhalt = obj.objekt.inhalt;
        }));
      }));
    }
  }
}
