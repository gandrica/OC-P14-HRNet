import styles from "./FormCustomSelect.module.scss";

function FormCustomSelect({ options }) {
  const { labelName, labelText, registerFunc, listSelection } = options;
  return (
    <>
      <label htmlFor={labelName}>{labelText}</label>
      <select
        id={labelName}
        {...registerFunc(labelName)}
        className={styles.customSelect}
      >
        {listSelection.map((option) => (
          <option
            key={option.abbreviation || option}
            value={option.abbreviation || option}
          >
            {option.name || option}
          </option>
        ))}
      </select>
    </>
  );
}

export default FormCustomSelect;
