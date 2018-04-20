interface allgemeinesPaar {
    typ?: string;
    inhalt?: string;
}
export default class Allgemeines {
    _angabe: string;
    _ende: string;
    _inhalt: string;
    constructor(paar: allgemeinesPaar) {
        switch (paar.typ) {
            case 'title' :
                this._angabe = '<title>';
                this._inhalt = paar.inhalt || '';
                this._ende = '</title>'
                break;
            default:
                console.warn('Der Typ konnte nicht identifiziert werden.');
                break;
        }
    }
    
    public set inhalt(v : string) {
        this._inhalt = v;
    }
    
    public get inhalt() : string {
        return this._inhalt;
    }
    
    public get angabe() : string {
        return this._angabe;
    }
    
    public get ende() : string {
        return this._ende;
    }
    
}