interface Paar {
  [x: string]: string;
  inhalt?: string;
}
export default class Meta {
  _prafix: {
    typ: string;
    typWert: string;
  };
  _inhalt: string;
  _angabe: string;
  _verbreitet: string;
  _mittel: string;
  _ende: string;
  constructor(pair: Paar, verbreitet?: string) {
    this._prafix = {
      typ: '',
      typWert: ''
    };
    this._verbreitet = verbreitet || '';
    if (pair && Object.keys(pair)[0] && Object.keys(pair)[0] !== 'inhalt') {
      this._prafix.typ = Object.keys(pair)[0];
      this._prafix.typWert = Object.values(pair)[0];
    }
    this._inhalt = pair && pair.inhalt ? pair.inhalt : '';
    this._angabe = `<meta ${(this._prafix && this._prafix.typ !== '') ? this._prafix.typ + '=' : ''}`;
    this._mittel = ` ${this._inhalt === 'utf-8' ? 'charset' : 'content'}=`;
    this._ende = '>';
  }

  public set inhalt(v: string) {
    this._inhalt = v;
  }

  public get mittel(): string {
    return this._mittel;
  }

  public get ende(): string {
    return this._ende;
  }

  public get prafix(): object {
    return this._prafix;
  }

  public get angabe(): string {
    return this._angabe;
  }

  public get inhalt(): string {
    return this._inhalt;
  }

  public get verbreitet(): string {
    return this._verbreitet;
  }

}
