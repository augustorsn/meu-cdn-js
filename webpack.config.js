const path = require('path');

module.exports = {
    entry: './src/index.ts', // Arquivo principal
    output: {
        filename: 'bundle.js', // Nome do arquivo gerado
        path: path.resolve(__dirname, 'dist'),
        library: 'MeuCDN', // Nome da variável global
        libraryTarget: 'umd', // Torna o módulo compatível com CommonJS, AMD e Browser
        globalObject: 'this' // Evita problemas com Node.js
    },
    resolve: {
        extensions: ['.ts', '.js'], // Permite importar arquivos TS e JS
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    mode: 'production', // Modo de otimização
};
