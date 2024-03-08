import { useId } from "react";
import Button from "../Button";
import FieldDigitation from "../FieldDigitation";
import { IconeBusca } from "../Icons";
import "./Search.css";

const Search = () => {
  const idSearch = useId();
  return (
    <div className="field__search" aria-label="Campo de Busca">
      <FieldDigitation
        id={idSearch}
        placeholder="Digite aqui o produto que você busca"
        type="text"
        name="Campo entrada"
        aria-label="Campo de pesquisa"
      />
      <Button aria-label="Ícone de Lupa" type="button" icon={<IconeBusca />} />
    </div>
  );
};

export default Search;
