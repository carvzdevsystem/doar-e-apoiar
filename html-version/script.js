// Mobile Menu Toggle
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Format CPF
function formatCPF(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
}

// Format Phone
function formatPhone(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
}

// Format CEP
function formatCEP(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1');
}

// Show Toast Notification
function showToast(title, description) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 0.25rem;">${title}</div>
        <div style="font-size: 0.875rem;">${description}</div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialize Form Handlers
document.addEventListener('DOMContentLoaded', function() {
    // CPF Input Formatting
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            e.target.value = formatCPF(e.target.value);
        });
    }

    // Phone Input Formatting
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            e.target.value = formatPhone(e.target.value);
        });
    }

    // CEP Input Formatting and API Call
    const cepInput = document.getElementById('cep');
    if (cepInput) {
        cepInput.addEventListener('input', function(e) {
            e.target.value = formatCEP(e.target.value);
        });

        cepInput.addEventListener('blur', function(e) {
            const cep = e.target.value.replace(/\D/g, '');
            if (cep.length === 8) {
                // Simulating CEP lookup
                showToast('CEP encontrado', 'Endereço preenchido automaticamente.');
                
                // In production, you would call ViaCEP API here:
                // fetch(`https://viacep.com.br/ws/${cep}/json/`)
                //     .then(response => response.json())
                //     .then(data => {
                //         document.getElementById('endereco').value = data.logradouro;
                //         document.getElementById('cidade').value = data.localidade;
                //         document.getElementById('estado').value = data.uf;
                //     });
            }
        });
    }

    // Set max date for birth date (today)
    const dataNascimentoInput = document.getElementById('dataNascimento');
    if (dataNascimentoInput) {
        const today = new Date().toISOString().split('T')[0];
        dataNascimentoInput.setAttribute('max', today);
    }

    // Form Submission
    const cadastroForm = document.getElementById('cadastroForm');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';

            // Simulate form submission
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Finalizar Cadastro';
                
                showToast(
                    'Cadastro realizado com sucesso!',
                    'Entraremos em contato em breve com as próximas etapas.'
                );
                
                cadastroForm.reset();
            }, 1500);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#doar' && href !== '#parceria') {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});