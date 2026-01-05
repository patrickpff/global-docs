export interface DocumentDefinition {
    validate(value: string): boolean;
    mask?(value: string): string;
}

export interface CountryModule {
    country: string;
    documents: Record<string, DocumentDefinition>;
}

export interface DocumentValidator {
    type: string;
    description: string;
    validate(value: string): boolean;
    mask?: (value: string) => string;
}