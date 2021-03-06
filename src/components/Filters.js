import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

const Filters = props =>{
  return (
    <section className="filters">
    <form className="filters__form" >
      <FilterByName handleFilter = {props.handleFilter} />
      <FilterBySpecies handleFilter = {props.handleFilter} />
    </form>
  </section>
  )
}
export default Filters