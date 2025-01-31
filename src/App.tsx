import { FaAndroid, FaHeart, FaBook, FaInfoCircle } from "react-icons/fa";
import "./App.css";
import icon from "/src/assets/icon.webp";
import home_screen from "/src/assets/home-screen.jpeg";
import health_info from "/src/assets/health-info.jpeg";
import culture_section from "/src/assets/culture-section.jpeg";
import events_calendar from "/src/assets/events-calendar.jpeg";

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <div className="hero-content">
          <img src={icon} alt="Icone Quilombola" className="rounded-img" />
          <h1>Quilombytes</h1>
          <p>
            Aplicativo com guia de políticas públicas para Quilombolas de
            Quilombolas de Porto Alegre e região metropolitana para ampliar o
            acesso aos direitos de cidadania e promover a equidade de gênero.
          </p>

          <div className="download-buttons">
            <a
              href="/quilombola-site/Quilombytes.apk "
              className="download-btn android"
              aria-label="Baixar para Android"
            >
              <FaAndroid className="icon" />
              Download
            </a>
          </div>
        </div>
      </header>

      <section className="screenshots-section">
        <h2>Galeria do Aplicativo</h2>
        <div className="screenshots-container">
          <div className="screenshot-item">
            <img
              src={home_screen}
              alt="Tela inicial do app Quilombytes"
              className="screenshot-img"
            />
          </div>
          <div className="screenshot-item">
            <img
              src={health_info}
              alt="Tela de informações de saúde"
              className="screenshot-img"
            />
          </div>
          <div className="screenshot-item">
            <img
              src={culture_section}
              alt="Seção cultural do aplicativo"
              className="screenshot-img"
            />
          </div>
          <div className="screenshot-item">
            <img
              src={events_calendar}
              alt="Calendário de eventos quilombolas"
              className="screenshot-img"
            />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <FaHeart className="feature-icon" />
          <h3>Saúde Comunitária</h3>
          <p>
            Acesso a informações de saúde específicas para comunidades
            quilombolas
          </p>
        </div>

        <div className="feature-card">
          <FaBook className="feature-icon" />
          <h3>Cultura e Tradição</h3>
          <p>Preservação e divulgação da cultura quilombola</p>
        </div>

        <div className="feature-card">
          <FaInfoCircle className="feature-icon" />
          <h3>Informações Úteis</h3>
          <p>Direitos e programas governamentais</p>
        </div>
      </section>

      <footer className="app-footer">
        <p>Contato: appquilombola@gmail.com</p>
        <p>© 2025 Quilombytes - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
