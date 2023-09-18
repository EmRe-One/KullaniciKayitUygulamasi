


export interface CountryDto {
    name: {
        common: string;
        nativeName: any;
    };
    cca3: string;
    translations: {
        tur: {
            common: string
        }
    }
}

export interface Country {
    name: string;
    native: any;
    turName: string;
    code: string;
}
