import Separator from "../Separator";
import Typography from "../Typography";

const FooterLogo = () => {
  return (
    <div className="footer__logo">
      <img
        src="/logo-rodape.svg"
        alt="Logo da Zoop Megastore nas cores magenta e branco"
      />
      <Separator />
      <Typography element="p" variant="body" color="gray">
        O jeito mais prático e rápido de realizar os seus desejos.
      </Typography>
    </div>
  );
};

export default FooterLogo;
