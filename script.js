$(document).ready(function() {
    $('#nombre').on('input', function() {
        var valorActual = $(this).val().trim();
        
        if (valorActual.length > 0) {
            $('.user-display-name').text(valorActual);
        } else {
            $('.user-display-name').text('Invitado');
        }
    });

    $('#registro-form').submit(function(event) {
        event.preventDefault();

        var nombre = $('#nombre').val().trim();
        var correo = $('#correo').val().trim();
        var $feedback = $('#form-feedback');
        var patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nombre === '' || correo === '') {
            $feedback
                .text('⚠️ Error: Tanto el Nombre como el Correo son campos obligatorios.')
                .css({
                    'background-color': '#fee2e2',
                    'color': '#991b1b',
                    'border': '1px solid #f87171'
                })
                .fadeIn(300);
            return;
        }

        if (!patronEmail.test(correo)) {
            $feedback
                .text('⚠️ Error: Por favor introduzca un correo electrónico válido (ejemplo@dominio.com).')
                .css({
                    'background-color': '#fef3c7',
                    'color': '#92400e',
                    'border': '1px solid #fcd34d'
                })
                .fadeIn(300);
            return;
        }

        $feedback
            .text('✓ ¡Registro exitoso! Bienvenido/a ' + nombre + '. Tus datos han sido procesados.')
            .css({
                'background-color': '#dcfce7',
                'color': '#166534',
                'border': '1px solid #86efac'
            })
            .fadeIn(300);

        $('.user-display-name').text(nombre);
    });

    $('#btn-toggle-info').click(function() {
        $('#card-welcome').slideToggle(400, function() {
            var visible = $('#card-welcome').is(':visible');
            $('#btn-toggle-info').text(visible ? 'Ocultar Bienvenida' : 'Mostrar Bienvenida');
        });
    });

    $('#btn-theme-blue').click(function() {
        $('#interactive-box').css({
            'background-color': '#2563eb',
            'border': '2px solid #1d4ed8',
            'box-shadow': '0 8px 16px rgba(37, 99, 235, 0.3)'
        });
    });

    $('#btn-theme-emerald').click(function() {
        $('#interactive-box').css({
            'background-color': '#059669',
            'border': '2px solid #047857',
            'box-shadow': '0 8px 16px rgba(5, 150, 105, 0.3)'
        });
    });

    $('#btn-theme-violet').click(function() {
        $('#interactive-box').css({
            'background-color': '#7c3aed',
            'border': '2px solid #6d28d9',
            'box-shadow': '0 8px 16px rgba(124, 58, 237, 0.3)'
        });
    });

    $('#btn-anim-expand').click(function() {
        $('#interactive-box').stop().animate({
            width: '320px',
            height: '160px',
            borderRadius: '30px',
            opacity: 0.95
        }, 500);
    });

    $('#btn-anim-shrink').click(function() {
        $('#interactive-box').stop().animate({
            width: '140px',
            height: '90px',
            borderRadius: '4px',
            opacity: 1
        }, 500);
    });

    $('#btn-anim-pulse').click(function() {
        $('#interactive-box')
            .stop()
            .animate({ opacity: 0.35, width: '180px' }, 200)
            .animate({ opacity: 1, width: '200px' }, 200);
    });

    $('#btn-anim-reset').click(function() {
        $('#interactive-box').stop().animate({
            width: '200px',
            height: '120px',
            borderRadius: '10px',
            opacity: 1
        }, 400).css({
            'background-color': '#0d9488',
            'border': 'none',
            'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)'
        });
    });
});
