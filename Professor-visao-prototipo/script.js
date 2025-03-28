/* No código comentado, só permitia Hylson, 123 e Eder,123. Agora qualquer usuario consegue
const usuarios = [
    { username: "Hylson", password: "12345" },
    { username: "Eder", password: "123" }
];

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");

            const usuarioValido = usuarios.find(user => user.username === username && user.password === password);

            if (usuarioValido) {
                window.location.href = "cadastro.html";
            } else {
                errorMessage.textContent = "Usuário ou senha incorretos!";
            }
        });
    }

    const reservaForm = document.getElementById("reservaForm");
    if (reservaForm) {
        reservaForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const turma = document.getElementById("turma").value;
            const ano = document.getElementById("ano").value;
            const sala = document.getElementById("sala").value;
            const horario = document.getElementById("horario").value;
            const successMessage = document.getElementById("success-message");

            successMessage.textContent = `Reserva confirmada para a Sala ${sala}, Turma ${turma}, Ano ${ano}, Horário ${horario}!`;
        });
    }
});
*/

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Qualquer usuário pode entrar
            window.location.href = "cadastro.html";
        });
    }

    const reservaForm = document.getElementById("reservaForm");
    if (reservaForm) {
        reservaForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const turma = document.getElementById("turma").value;
            const ano = document.getElementById("ano").value;
            const sala = document.getElementById("sala").value;
            const horario = document.getElementById("horario").value;
            const successMessage = document.getElementById("success-message");

            successMessage.textContent = `Reserva confirmada para a Sala ${sala}, Turma ${turma}, Ano ${ano}, Horário ${horario}!`;
        });
    }
});
