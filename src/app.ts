import './resources/scss/app.scss';
import Meta from "./resources/models/meta";
import Allgemeines from 'resources/models/Allgemeines';
import { RouterConfiguration, Router } from "aurelia-router";
import { PLATFORM } from 'aurelia-pal';

interface Typ {
  name: string;
  options?: string | string[];
}

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
  istMeta: boolean;
  fuhrer?: boolean;
  typ?: Typ;
}
interface Standardeinstellugen {
  title: string;
  komment: string;
  lager: Array<Lager>;
}
export class App {
  aus: HTMLElement;
  pageTitle = 'MGS 2000';
  standardeinstellungen: Array<Standardeinstellugen> = [
    {
      title: 'Configurações Gerais',
      komment: this.komment('COMMON TAGS & Search Engine & Schema.org para Google'),
      lager: [
        {
          eingang: {
            inhalt: 'utf-8'
          },
          eingabeAnzeigen: false,
          istMeta: true
        },
        {
          eingang: {
            ['http-equiv']: 'X-UA-Compatible',
            inhalt: 'IE=edge'
          },
          eingabeAnzeigen: false,
          istMeta: true
        },
        {
          eingang: {
            name: 'viewport',
            inhalt: 'width=device-width, initial-scale=1, shrink-to-fit=no'
          },
          eingabeAnzeigen: false,
          istMeta: true
        },
        {
          etikette: 'Título',
          platzhalter: 'Título da Página',
          verbreitet: 'title',
          eingang: {
            typ: 'title'
          },
          eingabeAnzeigen: true,
          typ: {
            name: 'text'
          },
          istMeta: false,
          fuhrer: true
        },
        {
          etikette: 'Descrição da Página',
          platzhalter: 'Descrição da Página',
          darunter: {
            text: 'Entre 150 até 255 caracteres'
          },
          verbreitet: 'description',
          eingang: {
            name: 'description'
          },
          eingabeAnzeigen: true,
          typ: {
            name: 'text'
          },
          istMeta: true,
          fuhrer: true
        },
        {
          etikette: 'Palavras Chave',
          platzhalter: 'promoção,fim de ano,especial,especial de natal,der metzger meister',
          darunter: {
            text: 'Palavras chave separadas por vírgula e sem espaço no início e fim de cada. É aconselhado manter menos de 12 palavras chave'
          },
          eingang: {
            name: 'keywords'
          },
          eingabeAnzeigen: true,
          typ: {
            name: 'text'
          },
          istMeta: true
        },
        {
          etikette: 'Imagem do Site',
          platzhalter: 'https://zumbeispiele.com/imagem.jpg',
          darunter: {
            text: 'URL para a imagem de compartilhamento'
          },
          eingang: {
            name: 'image'
          },
          verbreitet: 'image',
          eingabeAnzeigen: true,
          typ: {
            name: 'text'
          },
          istMeta: true,
          fuhrer: true
        },
        {
          eingang: {
            itemprop: 'name'
          },
          verbreitet: 'title',
          eingabeAnzeigen: false,
          istMeta: true,
          fuhrer: false
        },
        {
          eingang: {
            itemprop: 'description',
          },
          verbreitet: 'description',
          eingabeAnzeigen: false,
          istMeta: true,
          fuhrer: false
        },
        {
          eingang: {
            itemprop: 'image'
          },
          verbreitet: 'image',
          eingabeAnzeigen: false,
          istMeta: true,
          fuhrer: false
        }
      ]
    },
    // {
    //   title: 'Informação sobre o seu aplicativo iOS ou Android',
    //   komment: this.komment('Mobile App para iOS & Android'),
    //   lager: [

    //   ]
    // },
    {
      title: 'Open Graph',
      komment: this.komment('Open Graph general (Facebook, Pinterest & Google+)'),
      lager: [
        {
          eingang: {
            property: 'og:title'
          },
          verbreitet: 'title',
          eingabeAnzeigen: false,
          istMeta: true,
          fuhrer: false
        },
        {
          eingang: {
            property: 'og:description'
          },
          verbreitet: 'description',
          eingabeAnzeigen: false,
          istMeta: true,
          fuhrer: false
        },
        {
          etikette: 'Imagem de Pré-visualização',
          platzhalter: 'https://www.zumbeispiele.com/logo.jpg',
          darunter: {
            text: 'Dimensão recomendada: 1200px x 630px; dimensão mínima: 600px x 315px'
          },
          eingang: {
            property: 'og:image'
          },
          eingabeAnzeigen: true,
          typ: {
            name: 'text'
          },
          istMeta: true
        },
        {
          etikette: 'URL',
          platzhalter: 'https://zumbeispiele.com',
          darunter: {
            text: 'URL permanente para a página, e.g, "http://www.fermen.to/funcionarios/stanley/"'
          },
          eingang: {
            property: 'og:url'
          },
          eingabeAnzeigen: true,
          typ: {
            name: 'text'
          },
          istMeta: true
        },
        {
          etikette: 'Nome do Site',
          platzhalter: 'Site Exemplo',
          darunter: {
            text: 'Se a página faz parte de um Web Site maior, usar um nome generalizado. e.g., "Fermen.to"'
          },
          eingang: {
            property: 'og:site_name'
          },
          eingabeAnzeigen: true,
          typ: {
            name: 'text'
          },
          istMeta: true
        },
        {
          etikette: 'Locale',
          platzhalter: 'pt_BR',
          eingang: {
            property: 'og:locale',
            inhalt: 'pt_BR'
          },
          eingabeAnzeigen: true,
          typ: {
            name: 'text'
          },
          istMeta: true
        },
        // {
        //   etikette: 'Vídeo',
        //   platzhalter: 'https://www.zumbeispiele.com/video.avi',
        //   eingang: {
        //     property: 'og:video'
        //   },
        //   eingabeAnzeigen: true,
        //   istMeta: true
        // },
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
          typ: {
            name: 'text'
          },
          istMeta: true
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
          typ: {
            name: 'text'
          },
          istMeta: true
        },
        {
          etikette: 'Tipo da página',
          eingang: {
            property: 'og:type',
            inhalt: 'website'
          },
          typ: {
            name: 'select',
            options: ['website', 'article']
          },
          eingabeAnzeigen: true,
          istMeta: true
        },
        {
          eingang: {
            property: 'og:description'
          },
          verbreitet: 'description',
          eingabeAnzeigen: false,
          istMeta: true,
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
            name: 'twitter:title'
          },
          verbreitet: 'title',
          eingabeAnzeigen: false,
          istMeta: true,
          fuhrer: false
        },
        {
          eingang: {
            name: 'twitter:description'
          },
          verbreitet: 'description',
          eingabeAnzeigen: false,
          istMeta: true,
          fuhrer: false
        },
        {
          etikette: 'Alça do Editor',
          platzhalter: '@nome_site',
          eingang: {
            name: 'twitter:site'
          },
          eingabeAnzeigen: true,
          typ: {
            name: 'text'
          },
          istMeta: true
        },
        {
          etikette: 'Alça do autor do artigo',
          platzhalter: '@autor_alça',
          eingang: {
            name: 'twitter:creator'
          },
          eingabeAnzeigen: true,
          typ: {
            name: 'text'
          },
          istMeta: true
        },
        {
          etikette: 'Imagem de Pré-visualização',
          platzhalter: 'https://zumbeispiele.com/imagem.jpg',
          darunter: {
            text: 'Dimensão máxima: 1024px x 512px; dimensão mínima: 440px x 220px'
          },
          eingang: {
            name: 'twitter:image'
          },
          eingabeAnzeigen: true,
          typ: {
            name: 'text'
          },
          istMeta: true
        },
        // {
        //   etikette: 'Fonte de Video/Audio Player',
        //   platzhalter: 'https://www.youtube.com/embed/Vhh_GeBPOhs',
        //   darunter: {
        //     text: 'HTTPS URL para um player iFrame'
        //   },
        //   eingang: {
        //     name: 'twitter:player'
        //   },
        //   eingabeAnzeigen: true,
        //   istMeta: true
        // },
        {
          eingang: {
            name: 'twitter:card',
            inhalt: 'summary_large_image'
          },
          eingabeAnzeigen: false,
          istMeta: true
        }
      ]
    }
  ];
  router: Router;
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Meta Tags Generator 2000';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './app'},
    ]);
  }
  constructor() {
    Promise.all(this.standardeinstellungen.map(async einstellung => {
      try {
        await Promise.all(einstellung.lager.map(async feld => feld.objekt = feld.istMeta ? new Meta(feld.eingang, feld.verbreitet) : new Allgemeines(feld.eingang)));
      } catch (error) { console.error(error) }
    })).catch(reason => console.error(reason));
  }
  komment(text: string): string {
    return `<!-- ${text} -->`
  }
  async checkVerwandte(obj: Lager): Promise<void> {
    if (obj.fuhrer) {
      Promise.all(this.standardeinstellungen.map(async einstellung => {
        await Promise.all(einstellung.lager.map(async feld => {
          if (!feld.fuhrer && feld.verbreitet === obj.verbreitet) feld.objekt.inhalt = obj.objekt.inhalt;
        }));
      }));
    }
  }
  kopieren(self: HTMLElement): void {
    let range = document.createRange();
    range.selectNodeContents(this.aus);
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    if (document.execCommand('copy')) {
      self.classList.add('kopiert');
      setTimeout(() => self.classList.remove('kopiert'), 1500);
    }
  }
  export(self: HTMLElement): void {
    // startRegex for spaces of 4, endRegex for new lines, netkommeZitate to escape dobule quotations, Strifenlinen to strip pre-formated new lines
    const [startRegex, endRegex, entkommeZitate, Streifenlinien] = [/(<!--|<meta)/g, /(-->|">|e><)/g, /(="|[A-z0-9]"|[A-z0-9] ")/g, /\r?\n|\r/g];
    let innererInhalt = this.aus.innerText.replace(startRegex, '\$space$1');
    innererInhalt = innererInhalt.replace(endRegex, '$1\\n');
    innererInhalt = innererInhalt.replace(entkommeZitate, (match): any => {
      return `${match.split('')[0]}\\${match.split('')[1]}`;
    });
    innererInhalt = innererInhalt.replace(Streifenlinien, '');
    const inhalt = `#!/bin/bash\nspace='\\ \\ \\ \\ ' \nSEO="${innererInhalt}"\nsed -i "/<\\/head>/i $SEO" $1`;
    this.download('concat-seo.sh', inhalt);
    self.classList.add('kopiert');
    setTimeout(() => self.classList.remove('kopiert'), 1500);
  }

  download(filename: string, content: string): void {
    let anchor = document.createElement('a');
    anchor.setAttribute('href', `data:text/plain;charset=utf-8,${content}`);
    anchor.setAttribute('download', filename);
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}
