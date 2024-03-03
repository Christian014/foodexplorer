import { Container } from "./style";
import { NavBarAdmin } from "../../components/componentsAdmin/navBarAdmin";
import Lanches from "../../assets/lanches.png";
import { Footer } from "../../components/footer";
import { CarouselAdmin } from "../../components/componentsAdmin/carouselAdmin";
import { useState } from "react";

export function HomeAdmin() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <Container>
      <main>
        <NavBarAdmin onSearch={handleSearch} />
        <div className="img-banner" />
        <div className="banner">
          <img className="lanhces" src={Lanches} alt="" />
          <div className="banner-text">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
        <div className="meals">
          <h2>Refeições</h2>
          <div className="dishes refeicoes">
            <CarouselAdmin category="Refeição" searchValue={searchValue} />
          </div>
          <h2>Sobremesas</h2>
          <div className="dishes sobremesas">
            <CarouselAdmin category="Sobremesas" searchValue={searchValue} />
          </div>
          <h2>Bebidas</h2>
          <div className="dishes bebidas">
            <CarouselAdmin category="Bebidas" searchValue={searchValue} />
          </div>
        </div>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </Container>
  );
}
