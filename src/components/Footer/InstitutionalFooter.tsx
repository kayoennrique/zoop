import Link from "../Link";
import Typography from "../Typography";

const rodapeLinks = ["Nossa história", "Carreiras", "Nossa Loja"];

const InstitutionalFooter = () => {
  return (
    <div className="footer__institutional">
      <Typography
        style={{ fontWeight: "700" }}
        element="h3"
        variant="body"
        color="green"
      >
        Institucional
      </Typography>
      <ul tabIndex={0} className="footer__institutional--links">
        {rodapeLinks.map((link) => (
          <li key={link}>
            <Link href="#">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstitutionalFooter;
