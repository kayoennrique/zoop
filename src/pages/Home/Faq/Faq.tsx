import "./Faq.css";
import Typography from "@/components/Typography";

const Faq = () => {

  return (
    <section className="section__doubts">
      <Typography element="h2" variant="h2" color="blue">
        Dúvidas frequentes
      </Typography>
      <Typography element="p" variant="body" color="graphite">
        Antes de entrar em contato, verifique se sua dúvida está respondida em
        nossa FAQ!
      </Typography>
    </section>
  );
};

export default Faq;
