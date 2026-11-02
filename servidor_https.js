// EJEMPLO 2: SERVIDOR HTTPS (CON LA CADENA DE CONFIANZA)
const https = require('https');
const fs = require('fs');

const PORT = 8443;
const opcionesDeSeguridad = {

};

try {
    const server = https.createServer(opcionesDeSeguridad, (req, res) => {
        let cuerpoPeticion = '';
        req.on('data', (bloque) => {
            cuerpoPeticion += bloque;
        });

        req.on('end', () => {
            console.log('\n🔒 [CONEXIÓN SEGURA - HTTPS / TLS]');
            console.log('En el cable de red viajó como ruido ilegible (cifrado).');
            console.log('Descifrado seguro en el servidor:', cuerpoPeticion);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                mensaje: 'Pago procesado y protegido por HTTPS',
                seguro: true
            }));
        });
    });

    server.listen(PORT, () => {
        console.log(` Servidor HTTPS seguro activo en: https://localhost:${PORT}`);
    });
} catch (error) {
    console.log("Nota explicativa:");
    console.log("Para arrancar un servidor HTTPS en vivo necesitas archivos de certificado (.key y .cert).");
    console.log("Revisa simulador_seguridad.html para ver la demostración interactiva visual completa.");
}

