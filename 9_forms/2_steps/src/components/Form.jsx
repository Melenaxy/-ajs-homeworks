import PropTypes from "prop-types";

export default function Form(props) {
  const { form, onFormChange, onFormSubmit } = props;

  return (
    <form className="workout-form" onSubmit={onFormSubmit}>
      <label>
        Дата(ДД.ММ.ГГГГ)
        <input
          id="date"
          type="date"
          name="date"
          value={form.date}
          onChange={onFormChange}
        />
      </label>

      <label>
        Пройдено км
        <input
          id="path"
          type="text"
          name="path"
          value={form.path}
          onChange={onFormChange}
        />
      </label>
      
      <label>
        <button>ОК</button>
      </label>
    </form>
  );
}

Form.propTypes = {
  form: PropTypes.object,
};
