import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='filter'>
      <h3 className="filter__quote">Let's Get Schwifty!</h3>
      <form className='filter__form' onSubmit={handleSubmit}>
        <FilterByName
          handleFilter={props.handleFilter}
          handleReset={props.handleReset}
        />
        <FilterBySpecies
          handleFilter={props.handleFilter}
          handleReset={props.handleReset}
        />
        <span onClick={handleReset} className='reset'>
        <i class="fas fa-trash-alt"></i>
      </span>
      </form>
      
    </section>
  );
};
export default Filters;
