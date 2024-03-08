import { IconeInstagram, IconeTiktok, IconeWhatsapp } from "../Icons";
import Link from "../Link";
import Typography from "../Typography";

const iconsSocialNetwork = [
  {
    link: "whatsapp",
    componente: <IconeWhatsapp />,
    alt: "Ícone da rede social Whatsapp",
  },
  {
    link: "instagram",
    componente: <IconeInstagram />,
    alt: "Ícone da rede social Instagram",
  },
  {
    link: "tiktok",
    componente: <IconeTiktok />,
    alt: "Ícone da rede social Tik Tok",
  },
];

const FooterSocialNetworks = () => {
  return (
    <div className="footer__social-networks">
      <Typography
        style={{ fontWeight: "700" }}
        element="h3"
        variant="body"
        color="green"
      >
        Redes sociais
      </Typography>
      <Typography element="p" variant="body" color="gray">
        Acesse nossas redes:
      </Typography>
      <ul tabIndex={0} className="footer__social-networks--icons">
        {iconsSocialNetwork.map((icone) => (
          <li key={icone.alt}>
            <Link
              href={"#" + icone.link}
              alt={icone.alt}
              aria-label={icone.alt}
            >
              {icone.componente}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSocialNetworks;
