import Button from "../Button";
import Search from "../Search";
import { IconeCarrinho, IconePerfil } from "../Icons";
import "./Header.css";
import Logo from "./Logo";
import Link from "../Link";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Link href="#" style={{ color: "var(--blue-primary)" }}>Sobre nós</Link>
      <form>
        <Search />
      </form>
      <ul tabIndex={0} className="header__icons">
        <li>
          <Button
            aria-label="Carrinho de supermercado"
            icon={<IconeCarrinho />}
          />
        </li>
        <li>
          <Button aria-label="Perfil" icon={<IconePerfil />} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
