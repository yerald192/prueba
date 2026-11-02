// EJEMPLO 1: SERVIDOR HTTP (SIN SEGURIDAD)
const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'POST') {
        let cuerpoPeticion = '';

        req.on('data', (bloque) => {
            cuerpoPeticion += bloque;
        });

        req.on('end', () => {
            console.log('\n [ALERTA DE SEGURIDAD - HTTP]');
            console.log('Un atacante en la misma red Wi-Fi puede ver esto tal cual:');
            console.log('Datos recibidos en texto plano:', cuerpoPeticion);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                mensaje: 'Pago procesado (pero transmitido de forma insegura)',
                seguro: false
            }));
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Servidor HTTP funcionando. Envía un POST para probar.');
    }
});

server.listen(PORT, () => {
    console.log(` Servidor HTTP inseguro activo en: http://localhost:${PORT}`);
});

