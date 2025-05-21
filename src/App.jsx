import './App.css'

function App() {

  return (
    <>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MiniStore - Sua Lojinha Online</title>
    
</head>
<body>
    <header>
        <div class="container">
            <nav class="navbar">
                <a href="#" class="logo">Mini<span>Store</span></a>
                <div class="nav-links">
                    <a href="#">Início</a>
                    <a href="#">Categorias</a>
                    <a href="#">Produtos</a>
                    <a href="#">Ofertas</a>
                    <a href="#">Contato</a>
                </div>
                <div class="nav-icons">
                    <div class="nav-icon">
                        <i>Criar lojinha</i>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>Sua loja online favorita</h1>
            <p>Encontre os melhores produtos com os melhores preços. Entrega rápida e atendimento excepcional!</p>
            <a href="#" class="btn">Comprar Agora</a>
        </div>
    </section>

    <section class="categories">
        <div class="container">
            <h2 class="section-title">Categorias Populares</h2>
            <div class="category-grid">
                <div class="category-card">
                    <div class="category-img">Moda</div>
                    <div class="category-info">
                        <h3>Moda</h3>
                        <p>42 produtos</p>
                    </div>
                </div>
                <div class="category-card">
                    <div class="category-img">Eletrônicos</div>
                    <div class="category-info">
                        <h3>Eletrônicos</h3>
                        <p>38 produtos</p>
                    </div>
                </div>
                <div class="category-card">
                    <div class="category-img">Casa</div>
                    <div class="category-info">
                        <h3>Casa</h3>
                        <p>24 produtos</p>
                    </div>
                </div>
                <div class="category-card">
                    <div class="category-img">Bebês</div>
                    <div class="category-info">
                        <h3>Bebês</h3>
                        <p>16 produtos</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="featured-products">
        <div class="container">
            <h2 class="section-title">Produtos em Destaque</h2>
            <div class="product-grid">
                <div class="product-card">
                    <div class="product-img">
                        Smartphone
                        <span class="discount-badge">-20%</span>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Smartphone XYZ Pro</h3>
                        <div class="product-price">
                            <span class="current-price">R$ 1.599,90</span>
                            <span class="original-price">R$ 1.999,90</span>
                        </div>
                        <div class="product-actions">
                            <button class="add-to-cart">Adicionar ao Carrinho</button>
                            <button class="wishlist-btn">♡</button>
                        </div>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-img">
                        Tênis
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Tênis Esportivo Runner</h3>
                        <div class="product-price">
                            <span class="current-price">R$ 299,90</span>
                        </div>
                        <div class="product-actions">
                            <button class="add-to-cart">Adicionar ao Carrinho</button>
                            <button class="wishlist-btn">♡</button>
                        </div>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-img">
                        Smartwatch
                        <span class="discount-badge">-15%</span>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Smartwatch Fitness</h3>
                        <div class="product-price">
                            <span class="current-price">R$ 389,90</span>
                            <span class="original-price">R$ 459,90</span>
                        </div>
                        <div class="product-actions">
                            <button class="add-to-cart">Adicionar ao Carrinho</button>
                            <button class="wishlist-btn">♡</button>
                        </div>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-img">
                        Camiseta
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Camiseta Premium Algodão</h3>
                        <div class="product-price">
                            <span class="current-price">R$ 79,90</span>
                        </div>
                        <div class="product-actions">
                            <button class="add-to-cart">Adicionar ao Carrinho</button>
                            <button class="wishlist-btn">♡</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials">
        <div class="container">
            <h2 class="section-title">O que dizem nossos clientes</h2>
            <div class="testimonial-grid">
                <div class="testimonial-card">
                    <p class="testimonial-text">
                        "Compro nesta loja há mais de um ano e nunca tive problemas. Produtos de qualidade, entrega rápida e atendimento excelente!"
                    </p>
                    <div class="testimonial-author">
                        <div class="author-avatar">A</div>
                        <div class="author-info">
                            <h4>Ana Silva</h4>
                            <p>Cliente desde 2023</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">
                        "Sempre encontro o que preciso aqui, com preços justos e entrega dentro do prazo. Recomendo a todos!"
                    </p>
                    <div class="testimonial-author">
                        <div class="author-avatar">C</div>
                        <div class="author-info">
                            <h4>Carlos Oliveira</h4>
                            <p>Cliente desde 2022</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">
                        "O atendimento ao cliente é excepcional. Tive um problema com um produto e a equipe resolveu rapidamente. Satisfação garantida!"
                    </p>
                    <div class="testimonial-author">
                        <div class="author-avatar">M</div>
                        <div class="author-info">
                            <h4>Mariana Santos</h4>
                            <p>Cliente desde 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
            <h2>Receba nossas ofertas</h2>
            <p>Inscreva-se para receber as melhores ofertas e novidades em primeira mão!</p>
            <form class="email-form">
                <input type="email" placeholder="Seu melhor e-mail" class="email-input" required />
                <button type="submit" class="submit-btn">Inscrever-se</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-about">
                    <div class="footer-logo">Mini<span>Store</span></div>
                    <p class="footer-about">
                        Nossa missão é oferecer produtos de qualidade com preços acessíveis, garantindo a melhor experiência de compra para nossos clientes.
                    </p>
                    <div class="social-icons">
                        <a href="#" class="social-icon">FB</a>
                        <a href="#" class="social-icon">IG</a>
                        <a href="#" class="social-icon">TW</a>
                        <a href="#" class="social-icon">YT</a>
                    </div>
                </div>
                <div class="footer-links">
                    <h3>Links Úteis</h3>
                    <ul>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Termos de Serviço</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h3>Categorias</h3>
                    <ul>
                        <li><a href="#">Eletrônicos</a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Casa & Decoração</a></li>
                        <li><a href="#">Esportes</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h3>Contato</h3>
                    <ul>
                        <li>Endereço: Rua Exemplo, 123</li>
                        <li>Telefone: (11) 9999-9999</li>
                        <li>Email: contato@ministore.com</li>
                        <li>Horário: Seg-Sex: 9h às 18h</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 MiniStore. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
</body>
</html>
    </>
  )
}

export default App
