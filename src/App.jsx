import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import ProductCard from './components/ProductCard'

function App() {

return (
    <>
        {/* Removido <html>, <head> e <body> pois não são usados em componentes React */}
        <header>
            <div className="container">
                <nav className="navbar">
                    <a href="#" className="logo">Mini<span>Store</span></a>
                    <div className="nav-links">
                        <a href="#">Início</a>
                        <a href="#">Categorias</a>
                        <a href="#">Produtos</a>
                        <a href="#">Ofertas</a>
                    </div>
                    <div className="nav-icons">
                        <div className="nav-icon">
                            <i>Criar lojinha</i>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

        <section className="hero">
            <div className="container">
                <h1>Sua loja online favorita</h1>
                <p>Encontre os melhores produtos com os melhores preços. Entrega rápida e atendimento excepcional!</p>
                <a
                    href="#"
                    className="btn"
                    style={{
                        background: 'linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%)',
                        color: '#fff',
                        padding: '1rem 2.5rem',
                        border: 'none',
                        borderRadius: '30px',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        transition: 'background 0.3s, transform 0.2s',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        display: 'inline-block',
                        marginTop: '1.5rem'
                    }}
                    onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #feb47b 0%, #ff7e5f 100%)'}
                    onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%)'}
                >
                    Comprar Agora
                </a>
            </div>
        </section>

        <section className="featured-products">
          <div className="container">
            <h2 className="section-title">Produtos em Destaque</h2>
            <div className="carousel-controls" style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginBottom: '1rem' }}>
                <button className="custom-prev" style={{ fontSize: 24, cursor: 'pointer' }}>{'<'}</button>
                <button className="custom-next" style={{ fontSize: 24, cursor: 'pointer' }}>{'>'}</button>
            </div>
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }
              }}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev'
                }}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <ProductCard
                  img="https://down-br.img.susercontent.com/file/br-11134207-7r98o-m9puxpke51yxf4@resize_w450_nl.webp"
                  discount="-29%"
                  title="Kit de Potes Herméticos Electrolux com 8 unidades de Plástico"
                  price="R$ 72,99"
                  originalPrice="R$ 102,24"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  img="https://down-br.img.susercontent.com/file/br-11134258-7r98o-lzp49gh02mud40https://down-br.img.susercontent.com/file/br-11134207-7r98o-ls2q2py1u9es2b@resize_w450_nl.webp"
                  title="Kit Colçha Cobre Leito Luxo Matelado Queen-Casal-Solteiro-King - MELHOR CUSTO BENEFÍCIO"
                  price="R$ 98,99"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  img="https://down-br.img.susercontent.com/file/br-11134207-7qukw-li1u0y8qr9ct0b@resize_w450_nl.webp"
                  title="Campainha Com Câmera Vídeo Porteiro Sem Fio Wi-Fi HD Inteligente Smart Home Vê Pelo Celular Recarregável"
                  price="R$ 49,99"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  img="https://down-br.img.susercontent.com/file/sg-11134301-7rffs-m9oaakh1ghee7f@resize_w450_nl.webp"
                  discount="-20%"
                  title="Relógio De Quartzo Empresarial Masculino Moderno , Pulseira De Couro Elegante , Estilo Casual E Esportivo"
                  price="R$ 10,00"
                  originalPrice="R$ 22,90"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  img="https://down-br.img.susercontent.com/file/br-11134207-7r98o-lx9mzb4sn267fd@resize_w450_nl.webp"
                  title="Espelho Orgânico 60x40 Couro + Suporte Banheiro / Sala / Quarto"
                  price="R$ 89,90"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  img="https://down-br.img.susercontent.com/file/br-11134207-7r98o-m33xm0722i9xf3@resize_w450_nl.webp"
                  discount="-29%"
                  title="Dispenser Porta Cereais Redondo Giratório 360 Alimentos Pote + BRINDES"
                  price="R$ 99,90"
                  originalPrice="R$ 139,90"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  img="https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljvfoyvyq6qr8c@resize_w450_nl.webp"
                  discount="-24%"
                  title="Kit Suplemento Hipercalórico Muscle Mass + Bcaa 3:1:1 + Creatina + Glutamina + Shaker - Espartanos"
                  price="R$ 98,90"
                  originalPrice="R$ 129,90"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="categories">
            <div className="container">
                <h2 className="section-title">Categorias Populares</h2>
                <div className="category-grid">
                    <div className="category-card">
                        <div className="category-img">Moda</div>
                        <div className="category-info">
                            <h3>Moda</h3>
                            <p>42 produtos</p>
                        </div>
                    </div>
                    <div className="category-card">
                        <div className="category-img">Eletrônicos</div>
                        <div className="category-info">
                            <h3>Eletrônicos</h3>
                            <p>38 produtos</p>
                        </div>
                    </div>
                    <div className="category-card">
                        <div className="category-img">Casa</div>
                        <div className="category-info">
                            <h3>Casa</h3>
                            <p>24 produtos</p>
                        </div>
                    </div>
                    <div className="category-card">
                        <div className="category-img">Bebês</div>
                        <div className="category-info">
                            <h3>Bebês</h3>
                            <p>16 produtos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="featured-products">
            <div className="container">
                <h2 className="section-title">Super Ofertas</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <div className="product-img">
                            <img src="https://down-br.img.susercontent.com/file/br-11134207-7r98o-m9bs763t59a1fd" alt="" srcset="" />
                            <span className="discount-badge">-20%</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product-title">Smartphone XYZ Pro</h3>
                            <div className="product-price">
                                <span className="current-price">R$ 1.599,90</span>
                                <span className="original-price">R$ 1.999,90</span>
                            </div>
                            <div className="product-actions">
                                <button className="add-to-cart">Comprar</button>
                                <button className="wishlist-btn">♡</button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-img">
                            <img src="https://down-br.img.susercontent.com/file/sg-11134201-7reod-m857bisg77b446@resize_w450_nl.webp" alt="" srcset="" />
                        </div>
                        <div className="product-info">
                            <h3 className="product-title">Tênis Esportivo Runner</h3>
                            <div className="product-price">
                                <span className="current-price">R$ 299,90</span>
                            </div>
                            <div className="product-actions">
                                <button className="add-to-cart">Comprar</button>
                                <button className="wishlist-btn">♡</button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-img">
                            <img src="https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltxyui9rvtec1c.webp" alt="" srcset="" />
                            <span className="discount-badge">-15%</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product-title">Smartwatch Fitness</h3>
                            <div className="product-price">
                                <span className="current-price">R$ 389,90</span>
                                <span className="original-price">R$ 459,90</span>
                            </div>
                            <div className="product-actions">
                                <button className="add-to-cart">Comprar</button>
                                <button className="wishlist-btn">♡</button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-img">
                            <img src="https://down-br.img.susercontent.com/file/br-11134207-7r98o-m3ywul57c3b58a.webp" alt="" srcset="" />
                        </div>
                        <div className="product-info">
                            <h3 className="product-title">Camiseta Premium Algodão</h3>
                            <div className="product-price">
                                <span className="current-price">R$ 79,90</span>
                            </div>
                            <div className="product-actions">
                                <button className="add-to-cart">Comprar</button>
                                <button className="wishlist-btn">♡</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">O que dizem nossos clientes</h2>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <p className="testimonial-text">
                            "Compro nesta loja há mais de um ano e nunca tive problemas. Produtos de qualidade, entrega rápida e atendimento excelente!"
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar">A</div>
                            <div className="author-info">
                                <h4>Ana Silva</h4>
                                <p>Cliente desde 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">
                            "Sempre encontro o que preciso aqui, com preços justos e entrega dentro do prazo. Recomendo a todos!"
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar">C</div>
                            <div className="author-info">
                                <h4>Carlos Oliveira</h4>
                                <p>Cliente desde 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">
                            "O atendimento ao cliente é excepcional. Tive um problema com um produto e a equipe resolveu rapidamente. Satisfação garantida!"
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar">M</div>
                            <div className="author-info">
                                <h4>Mariana Santos</h4>
                                <p>Cliente desde 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta-section">
            <div className="container">
                <h2>Receba nossas ofertas</h2>
                <p>Inscreva-se para receber as melhores ofertas e novidades em primeira mão!</p>
                <form className="email-form">
                    <input type="email" placeholder="Seu melhor e-mail" className="email-input" required />
                    <button
                        type="submit"
                        className="submit-btn"
                        style={{
                            background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
                            color: '#fff',
                            padding: '0.8rem 2rem',
                            border: 'none',
                            borderRadius: '25px',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            transition: 'background 0.3s, transform 0.2s',
                            cursor: 'pointer',
                            marginLeft: '1rem'
                        }}
                        onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #185a9d 0%, #43cea2 100%)'}
                        onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)'}
                    >
                        Inscrever-se
                    </button>
                </form>
            </div>
        </section>

        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-about">
                        <div className="footer-logo">Mini<span>Store</span></div>
                        <p className="footer-about">
                            Nossa missão é oferecer produtos de qualidade com preços acessíveis, garantindo a melhor experiência de compra para nossos clientes.
                        </p>
                      <div className="social-icons">
                        <a href="#" className="social-icon" aria-label="Instagram">
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" style={{ width: 24, height: 24 }} />
                        </a>
                        <a href="#" className="social-icon" aria-label="Facebook">
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="Facebook" style={{ width: 24, height: 24 }} />
                        </a>
                        <a href="#" className="social-icon" aria-label="Twitter">
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg" alt="Twitter (X)" style={{ width: 24, height: 24 }} />
                        </a>
                        <a href="#" className="social-icon" aria-label="YouTube">
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/youtube.svg" alt="YouTube" style={{ width: 24, height: 24 }} />
                        </a>
                      </div>
                    </div>
                    <div className="footer-links">
                        <h3>Links Úteis</h3>
                        <ul>
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Termos de Serviço</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>Categorias</h3>
                        <ul>
                            <li><a href="#">Eletrônicos</a></li>
                            <li><a href="#">Moda</a></li>
                            <li><a href="#">Casa & Decoração</a></li>
                            <li><a href="#">Esportes</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>Contato</h3>
                        <ul>
                            <li>Endereço: Rua Exemplo, 123</li>
                            <li>Telefone: (11) 9999-9999</li>
                            <li>Email: contato@ministore.com</li>
                            <li>Horário: Seg-Sex: 9h às 18h</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 MiniStore. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    </>
)
}

export default App
