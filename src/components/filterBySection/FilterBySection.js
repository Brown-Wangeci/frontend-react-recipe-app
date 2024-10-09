import { filterData } from '../../data/filterData';
import styles from './filterbysection.module.css';
import { useState } from 'react';


const FilterBySection = ({onFiltersChange}) => {
    const [selectedFilters, setSelectedFilters] = useState({});


    const handleCheckboxChange = (filterCategory, value) => {
        setSelectedFilters(prevFilters => {
            const updatedFilters = {
                ...prevFilters,
                [filterCategory]: prevFilters[filterCategory] === value ? null : value
            };
            onFiltersChange(updatedFilters);
            return updatedFilters;
        });
    };

    // console.log(selectedFilters)

    return (
        <div className={styles.filterBySection}>
          <h2 className={styles.title}>Filter By</h2>
          <hr className={styles.hr} />
    
          <div className={styles.allSections}>
            {filterData?.map((filter, index) => (
                <section key={index}>
                    <h3 className={styles.filterTitle}>{filter.title}</h3>
            
                    <div className={styles.allChoices}>
                        {filter.options?.map((option, idx) => (
                            <div className={styles.inputBlock} key={idx}>
                                <input
                                    hidden
                                    className={styles.inputSearchBy}
                                    type="checkbox"
                                    name={filter.categoryName}
                                    id={option.value}
                                    value={option.value}
                                    checked={
                                        selectedFilters[filter.categoryName]?.includes(option.value) || false
                                    }
                                    onChange={() =>
                                        handleCheckboxChange(filter.categoryName, option.value)
                                    }
                                />
                                <label className={styles.tag} htmlFor={option.value}>
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
          </div>
        </div>
      );
}
 
export default FilterBySection;