
// PAGINA DE INICIO DE SESIÓN

const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === 'ejemplo@ejemplo.com' && password === '12345') {
            alert('Inicio de sesión exitoso');
            window.location.href = 'menu.html';
            
        } else {
            alert('Correo o contraseña incorrectos. Intenta de nuevo');

        }
    });
     



    $(document).ready(function() {

  var balance = 0;
    }

  function updateBalance() {
    $('#balance').text(balance.toFixed(2));
  }


    $('#depositBtn').click(function() {
    var amount = parseFloat($('#amount').val());
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      updateBalance();
      $('#amount').val('');
      alert('Depósito realizado!');
    } else {
      alert('Monto inválido. Por favor ingrese un número positivo.');
    }
  });


  // PAGINA DE DEPOSITO DE DINERO


const botonDepositar = document.getElementById('btnDepositar');
const inputMonto = document.getElementById('monto');
const inputCuenta = document.getElementById('cuenta');
const parrafoMensaje = document.getElementById('mensaje');


function procesarDeposito() {
    const monto = parseFloat(inputMonto.value); 
    const cuenta = inputCuenta.value;

    if (isNaN(monto) || monto <= 0) {
        parrafoMensaje.textContent = 'Por favor, ingrese un monto válido.';
        parrafoMensaje.style.color = 'red';
        return;
    }
    if (cuenta.trim() === '') {
        parrafoMensaje.textContent = 'Por favor, ingrese un número de cuenta.';
        parrafoMensaje.style.color = 'red';
        return;
    }

    
    parrafoMensaje.textContent = `Depósito de $${monto.toFixed(2)} realizado exitosamente en la cuenta ${cuenta}.`;
    parrafoMensaje.style.color = 'white';

   
    inputMonto.value = '';
    inputCuenta.value = '';
}


botonDepositar.addEventListener('click', procesarDeposito);



// PAGINA DE TRANSFERENCIA DE DINERO

let saldoActual = 1000; 

    
    const montoInput = document.getElementById('monto');
    const destinoInput = document.getElementById('destino');
    const mensajeP = document.getElementById('mensaje');
    const botonTransferir = document.getElementById('btnTransferir');
   
function simularTransferencia() {
    const monto = parseFloat(montoInput.value); 
    const destino = destinoInput.value;

}
    if (isNaN(monto) || monto <= 0) {
        mensajeP.textContent = "Por favor, ingrese un monto válido.";
        mensajeP.style.color = "red";
        return; 
    }
    if (destino === "") {
        mensajeP.textContent = "Por favor, ingrese una cuenta de destino.";
        mensajeP.style.color = "red";
        return;
    }

    
    if (saldoActual >= monto) {
        
        saldoActual -= monto;
        
        document.getElementById('saldo').textContent = saldoActual;
       
        mensajeP.textContent = `Transferencia de $${monto} a ${destino} realizada con éxito.`;
        mensajeP.style.color = "white";
       
        montoInput.value = 0;
        destinoInput.value = "";
    } else {
        
        mensajeP.textContent = "Saldo insuficiente para realizar la transferencia.";
        mensajeP.style.color = "red";
    }

 botonTransferir.addEventListener('click', simularTransferencia);



// PAGINA DE AGENDA DE CONTACTOS


const formulario = document.getElementById('formularioContacto');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const listaContactos = document.getElementById('listaContactos');


formulario.addEventListener('submit', function(event) {
   
    event.preventDefault();

   
    const nombre = nombreInput.value;
    const email = emailInput.value;

   
    const nuevoContactoLi = document.createElement('li');
    nuevoContactoLi.textContent = `${nombre} - ${email}`;

    
    listaContactos.appendChild(nuevoContactoLi);

   
    nombreInput.value = '';
    emailInput.value = '';
});

// AUTOCOMPLETADO DE CONTACTOS


$(function() {
    var contactos = [
        "Alez Nuñez",
        "Camil Díaz",
        "Carmen Gloria",
        "Cesar Muñoz",
        
    ];

    $("#campoBuscar").autocomplete({
        source: contactos, // La lista de contactos
        minLength: 1 // Muestra sugerencias desde el primer carácter
    });
});



// PAGINA DE TRANSACCIONES REALIZADAS


async function obtenerTransacciones() {
    
    return [
        { id: 1, fecha: '2024-01-15', monto: 50.00, descripcion: 'Compra Supermercado' },
        { id: 2, fecha: '2024-01-14', monto: 25.50, descripcion: 'Café' },
        { id: 3, fecha: '2024-01-13', monto: 120.00, descripcion: 'Pago Renta' }
    ];
}


function mostrarTransacciones(transacciones) {
    const lista = document.getElementById('lista-transacciones');
    lista.innerHTML = ''; 
    if (transacciones.length === 0) {
        lista.innerHTML = '<li>No hay transacciones recientes.</li>';
        return;
    }

    transacciones.forEach(tx => {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <strong>${tx.fecha}</strong> - ${tx.descripcion}: $${tx.monto.toFixed(2)}
        `;
        lista.appendChild(li); 
    });
}


document.addEventListener('DOMContentLoaded', async () => {
    const transacciones = await obtenerTransacciones();
    mostrarTransacciones(transacciones);
});

// PAGINA DE ACTUALIZAR SALDO

$(document).ready(function() {
    
    function obtenerNuevoSaldo() {
       
        return (Math.random() * 1000).toFixed(2); 
    }
    
    $('#btnActualizar').on('click', function() {
       
        $('#mensaje').html('<p>Actualizando saldo...</p>');

        
        setTimeout(function() {
            let nuevoSaldo = obtenerNuevoSaldo();

           
            $('#saldo').text(nuevoSaldo); 

            
            $('#mensaje').html('<p style="color: green;">¡Saldo actualizado con éxito!</p>'); 

            
        }, 1000); 
    });

   
    $('#mensaje').html('<p>Haz clic en el botón para cargar tu saldo inicial.</p>');
});


// PAGINA DE MENÚ - CERRAR SESIÓN
document.getElementById('btnCerrarSesion').addEventListener('click', function() {
    // Aquí va tu lógica de cierre de sesión (ej: borrar token de sesión)
    // sessionStorage.removeItem('token'); 

    // Redirige a la página de inicio de sesión o principal
    window.location.href = 'login.html'; 
});
