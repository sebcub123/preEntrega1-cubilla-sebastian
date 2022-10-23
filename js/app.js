let tipoCabello

while (tipoCabello != 'seco' && tipoCabello != 'mixto' && tipoCabello != 'graso'){
    
    tipoCabello = prompt ('Seleccione su tipo de cabello entre: Seco, Mixto, Graso');

    switch (tipoCabello){

        case 'seco':
            alert('Elegi para tu cabello productos con aceites escenciales como lino, argan o girasol para mantenerlo nutrido');
            break;

        case 'mixto':
            alert('Elegi para tu cuero cabelludo productos purificantes o neutros y utiliza de medios a puntas productos nutritivos, como karite, keratina o argan');
            break;

        case 'graso':
            alert('Elegi para tu cabello productos con ph neutro o acido, tambien podes utilizar productos purificantes para reducir el cebo capilar');
            break;

        default:
            alert('Ingreso un valor incorrecto');
            break;        
    }
}