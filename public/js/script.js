let index = 0;  // Índice da posição atual do carrossel
const slides = document.querySelector('.clr');  // Seleciona a lista de imagens
const totalSlides = document.querySelectorAll('.item').length / 2; // Total de "blocos" de imagens (dividido por 2 devido à duplicação)
const alturaSlide = document.querySelector('.item').clientHeight; // Obtém a altura do slide (imagem)

// Função para mover o carrossel
function moverSlide(direction) {
    index += direction;

    // Se o índice for menor que 0, vai para o último slide
    if (index < 0) {
        index = totalSlides - 1;
        slides.style.transition = 'none'; // Remove a transição durante a mudança abrupta
        slides.style.transform = `translateY(-${index * alturaSlide}px)`; // Muda para o último item sem transição
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out'; // Restaura a transição
            slides.style.transform = `translateY(-${index * alturaSlide}px)`; // Reaplica o movimento com transição
        }, 50); // Aguarda um curto tempo para reiniciar a transição
    }

    // Se o índice for maior que o total de slides, vai para o primeiro slide
    if (index >= totalSlides) {
        index = 0;
        slides.style.transition = 'none'; // Remove a transição durante a mudança abrupta
        slides.style.transform = `translateY(0)`; // Vai para o primeiro item sem transição
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out'; // Restaura a transição
            slides.style.transform = `translateY(-${index * alturaSlide}px)`; // Reaplica o movimento com transição
        }, 50); // Aguarda um curto tempo para reiniciar a transição
    }

    // Mover o carrossel para a posição do índice
    slides.style.transform = `translateY(-${index * alturaSlide}px)`;
}
