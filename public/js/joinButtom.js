    const form = document.getElementById('registrationForm');
    const button = document.getElementById('registerButton');

    form.addEventListener('submit', () => {
        // Jaise hi form submit ho:
        // 1. Button ko disable kar dein
        button.disabled = true;
        // 2. Button ka text badal dein
        button.innerHTML = 'Processing... <span class="spinner-border spinner-border-sm"></span>';
    });