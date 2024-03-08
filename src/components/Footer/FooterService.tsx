import Link from "../Link";
import Typography from "../Typography";

const FooterService = () => {
  return (
    <div className="footer__service">
      <Typography
        style={{ fontWeight: "700" }}
        element="h3"
        variant="body"
        color="green"
      >
        Central de atendimento
      </Typography>
      <Link href="#">SAC 4003 4848</Link>
    </div>
  );
};

export default FooterService;
