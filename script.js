

// const agendamentos = {};

// document.getElementById('bookingForm').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const service = document.getElementById('service').value;
//     const duration = parseInt(document.getElementById('duration').value, 10);
//     const date = document.getElementById('date').value;
//     const time = document.getElementById('time').value;

//     // Convert time to minutes for easy calculation
//     const [startHour, startMinute] = time.split(':').map(Number);
//     const startTimeInMinutes = startHour * 60 + startMinute;
//     const endTimeInMinutes = startTimeInMinutes + duration;

//     // Verificar se o horário já está agendado
//     if (!agendamentos[date]) {
//         agendamentos[date] = [];
//     }

//     const isConflict = agendamentos[date].some(agendamento => {
//         const [bookedStartHour, bookedStartMinute] = agendamento.time.split(':').map(Number);
//         const bookedStartTimeInMinutes = bookedStartHour * 60 + bookedStartMinute;
//         const bookedEndTimeInMinutes = bookedStartTimeInMinutes + parseInt(agendamento.duration, 10);

//         return (startTimeInMinutes < bookedEndTimeInMinutes && endTimeInMinutes > bookedStartTimeInMinutes);
//     });

//     if (isConflict) {
//         document.getElementById('errorMessage').textContent = 'Horário já está agendado. Escolha outro horário.';
//         return;
//     }

//     agendamentos[date].push({ name, email, phone, service, time, duration });
//     document.getElementById('errorMessage').textContent = '';

//     // Atualizar visualização dos horários
//     atualizarHorariosDisponiveis(date);
//     atualizarClientesAgendados(date);
// });


// function atualizarHorariosDisponiveis(date) {
//     const listaHorarios = document.getElementById('listaHorarios');
//     listaHorarios.innerHTML = '';

//     const horariosDoDia = agendamentos[date]?.map(agendamento => ({
//         start: agendamento.time,
//         end: addMinutes(agendamento.time, agendamento.duration),
//         name: agendamento.name
//     })) || [];

//     const todosHorarios = [
//         { start: '08:00', end: '09:00' },
//         { start: '09:00', end: '10:00' },
//         { start: '10:00', end: '11:00' },
//         { start: '11:00', end: '12:00' },
//         { start: '13:00', end: '14:00' },
//         { start: '14:00', end: '15:00' },
//         { start: '15:00', end: '16:00' },
//         { start: '16:00', end: '17:00' },
//         { start: '17:00', end: '18:00' },
//         { start: '18:00', end: '19:00' },
//         { start: '19:00', end: '20:00' }
//     ];

//     todosHorarios.forEach(horario => {
//         const agendado = horariosDoDia.find(h => (h.start < horario.end && h.end > horario.start));
//         const listItem = document.createElement('li');

//         if (agendado) {
//             listItem.textContent = `Ocupado: ${agendado.start} - ${agendado.end} (Cliente: ${agendado.name})`;
//             listItem.style.color = 'red';
//         } else {
//             listItem.textContent = `Disponível: ${horario.start} - ${horario.end}`;
//             listItem.style.color = 'green';
//         }
//         listaHorarios.appendChild(listItem);
//     });
// }


// function atualizarClientesAgendados(date) {
//     const listaClientes = document.getElementById('listaClientes');
//     listaClientes.innerHTML = '';

//     const clientesDoDia = agendamentos[date] || [];
//     clientesDoDia.forEach(agendamento => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `Nome: ${agendamento.name}, Email: ${agendamento.email}, Serviço: ${agendamento.service}, Horário: ${agendamento.time}`;
//         listaClientes.appendChild(listItem);
//     });
// }

// function addMinutes(time, minutes) {
//     const [hour, minute] = time.split(':').map(Number);
//     const newMinutes = hour * 60 + minute + parseInt(minutes, 10);
//     const newHour = Math.floor(newMinutes / 60);
//     const newMinute = newMinutes % 60;
//     return `${newHour.toString().padStart(2, '0')}:${newMinute.toString().padStart(2, '0')}`;
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('bookingForm');
//     const saveClientButton = document.getElementById('saveClientButton');
//     const nameInput = document.getElementById('name');
//     const emailInput = document.getElementById('email');
//     const phoneInput = document.getElementById('phone');

//     // Cargar clientes existentes desde el localStorage
//     const clients = JSON.parse(localStorage.getItem('clients')) || {};

//     // Evento para guardar un nuevo cliente
//     saveClientButton.addEventListener('click', function () {
//         const name = nameInput.value;
//         const email = emailInput.value;
//         const phone = phoneInput.value;

//         if (name && email && phone) {
//             clients[name] = { email, phone };
//             localStorage.setItem('clients', JSON.stringify(clients));
//             alert('Cliente guardado!');
//         } else {
//             alert('Por favor, complete todos los campos antes de guardar.');
//         }
//     });

//     // Evento para rellenar automáticamente los datos del cliente
//     nameInput.addEventListener('input', function () {
//         const name = nameInput.value;
//         if (clients[name]) {
//             emailInput.value = clients[name].email;
//             phoneInput.value = clients[name].phone;
//         } else {
//             emailInput.value = '';
//             phoneInput.value = '';
//         }
//     });

//     // Evento para manejar el envío del formulario
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();
//         // Aquí puedes agregar el código para manejar el envío del formulario y el agendamiento
//     });
// });

// async function enviarMensagemWhatsApp(phone, name, date, time, service) {
//     // Aquí debes implementar la lógica para enviar el mensaje de WhatsApp
// }

