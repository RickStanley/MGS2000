interface Paar {
  [x: string]: string;
  inhalt?: string;
}
export default class Meta {
  angabe: {
    typ: string;
    typWert: string;
  };
  inhalt: string;
  vorlage: string;
  verbreitet: string;
  constructor(pair: Paar, verbreitet?: string) {
    this.angabe = {
      typ: '',
      typWert: ''
    };
    this.verbreitet = verbreitet || '';
    if (pair && Object.keys(pair)[0] && Object.keys(pair)[0] !== 'inhalt') {
      this.angabe.typ = Object.keys(pair)[0];
      this.angabe.typWert = Object.values(pair)[0];
    }
    this.inhalt = pair && pair.inhalt ? pair.inhalt : '';
    this.vorlage = `<meta ${(this.angabe && this.angabe.typ !== '') ? `${this.angabe.typ}="${this.angabe.typWert}"` : ''} content="${this.inhalt}">`
  }
  aktualisierenInhalt(text) {
    this.inhalt = text;
  }
}
