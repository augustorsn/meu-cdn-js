export function falar(palavra: string): string {
    return `${palavra}!`;
}

// Expor as funções globalmente
const MeuCDN = {
    falar
};

export default MeuCDN;
