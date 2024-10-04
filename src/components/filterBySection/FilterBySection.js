import { filterData } from '../../data/filterData';
import styles from './filterbysection.module.css';


const FilterBySection = () => {

    return (
        <div className={styles.filterBySection}>
          <h2 className={styles.title}>Filter By</h2>
          <hr className={styles.hr} />
    
          {filterData?.map((filter, index) => (
            <section key={index}>
              <h3 className={styles.filterTitle}>{filter.title}</h3>
    
              {filter.inputType === "number" ? (
                <input
                  className={styles.inputFilter}
                  type="number"
                  name={filter.value}
                  id={filter.value}
                />
              ) : (
                <div className={styles.allChoices}>
                  {filter.options.map((option, idx) => (
                    <div className={styles.inputBlock} key={idx}>
                      <input
                        hidden
                        className={styles.inputSearchBy}
                        type="checkbox"
                        name={option.value}
                        id={option.value}
                      />
                      <label className={styles.tag} htmlFor={option.value}>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      );
}
 
export default FilterBySection;