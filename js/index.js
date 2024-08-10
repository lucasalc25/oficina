document.addEventListener("DOMContentLoaded", () => {
    // Selecione todos os elementos de miniaturas de imagem
    const linksDasImagens = document.querySelectorAll("#fotos-galeria a");
    // Selecione todos os elementos de imagem ampliadas
    const imagemDoModal = document.getElementById("imagem-ampliada");
    // Selecione o modal
    const modal = document.getElementById("modal");

    // Adicione um evento de clique a cada miniatura
    linksDasImagens.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            // Acesse a imagem dentro do link (<a>), e pegue o src da miniatura
            const imgSrc = link.querySelector("img").src;

            console.log(imgSrc);
            
            // Mude o src da imagem ampliada para o src da miniatura clicada
            imagemDoModal.src = imgSrc;
            
            // Mostre o modal
            modal.style.display = "flex";
        });
    });

    // Feche o modal ao clicar fora da imagem
    modal.addEventListener("click", (event) => {
        // Verifica se o clique foi fora da imagem para fechar o modal
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    
    index = (index + step + totalSlides) % totalSlides;
    
    const offset = -index * 710; // A largura da imagem, deve corresponder ao CSS
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

// Opcional: Adiciona a funcionalidade de autoplay
function startAutoPlay() {
    setInterval(() => moveSlide(1), 5000); // Muda a imagem a cada 3 segundos
}

startAutoPlay();
