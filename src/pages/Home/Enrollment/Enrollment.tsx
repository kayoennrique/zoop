import "./Enrollment.css";
import Button from "@/components/Button";
import FieldDigitation from "@/components/FieldDigitation";
import Typography from "@/components/Typography";

const Enrollment = () => {
  return (
    <section className="section__enrollment">
      <div className="section__enrollment--content">
        <Typography element="h2" variant="h2" color="blue">
          Inscreva-se para ganhar descontos!
        </Typography>
        <Typography element="p" variant="body" color="blue">
          Cadastre seu email em nossa newsletter e saiba dos descontos, cupons e
          novidades em primeira mão!
        </Typography>
        <form
          noValidate
          className="section__enrollment--form"
        >
          <FieldDigitation
            type="email"
            name="inscricao"
            placeholder="Digite seu melhor endereço de email"
            style={{ width: "650px" }}
          />
          <Button variant="primary" type="submit">
            Inscrever
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Enrollment;
