interface Pair {
  [x: string]: string,
  inhalt: string
}
export default class Meta {
  angabe: {
    typ: string,
    typWert: string
  };
  inhalt: string;
  vorlage: string;
  verbreitet: string;
  constructor(pair: Pair, verbreitet?: string) {
    if (verbreitet) this.verbreitet = verbreitet;
    this.angabe.typ = Object.keys(pair)[0];
    this.angabe.typWert = Object.values(pair)[0];
    this.inhalt = pair.inhalt;
    this.vorlage = `<meta ${(this.angabe) ? `${this.angabe.typ}="${this.angabe.typWert}"` : ''} content="${this.inhalt}">`
  }
  aktualisierenInhalt(text) {
    this.inhalt = text;
  }
}
