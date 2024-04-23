export default function List(props) {
  const { workouts, onDelClick } = props;

  return (
    <div className="workout-list">
      <div className="workout-list_titles">
        <span>Дата (ДД.ММ.ГГГГ)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>

      <div className="workout-list_items">
        {workouts.map((workout) => (
          <div className="workout-item" key={crypto.randomUUID()}>
            <div>{workout.date}</div>
            <div>{workout.path}</div>
            <div className="workout-item_actions">
              <span
                className="material-icons del-action"
                onClick={() => onDelClick(workout)}
              >
                Х
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}