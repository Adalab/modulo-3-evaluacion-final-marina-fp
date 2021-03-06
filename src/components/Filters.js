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
      <form className='filter__form' onSubmit={handleSubmit}>
        <FilterByName
          handleFilter={props.handleFilter}
          handleReset={props.handleReset}
        />
        <FilterBySpecies
          handleFilter={props.handleFilter}
          handleReset={props.handleReset}
        />
      </form>
      <span onClick={handleReset} className='reset'>
        Reset
      </span>
    </section>
  );
};
export default Filters;
