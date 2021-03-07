import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import "../stylesheets/Filters.scss";

const Filters = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='filter'>
      <h3 className='filter__quote'>Let's Get Schwifty!</h3>
      <form className='filter__form' onSubmit={handleSubmit}>
        <FilterByName name={props.name}
          handleFilter={props.handleFilter}
          handleReset={props.handleReset}
        />
        <FilterBySpecies species={props.species}
          handleFilter={props.handleFilter}
          handleReset={props.handleReset}
        />
        <span onClick={handleReset} className='reset'>
          <i className='fas fa-trash-alt'></i>
        </span>
      </form>
    </section>
  );
};
export default Filters;
