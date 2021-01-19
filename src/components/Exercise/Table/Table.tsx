import React from "react";
import exercise from "../../../models/models";
import styles from "./styles.module.scss";

interface Props {
  exercise: exercise[];
}

const ExerciseTable: React.FC<Props> = (props) => {
  const { exercise } = props;

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Exercise name</th>
            <th>Approaches</th>
            <th>Repetitions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {exercise.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.icon}</td>
                <td>{item.exerciseName}</td>
                <td>
                  <input
                    type="text"
                    value={item.approaches}
                    placeholder={"0"}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.repetitions}
                    placeholder={"0"}
                  />
                </td>
                <td>
                  <div>
                    <button>Edit Button</button>
                    <button>Completed Button</button>
                    <button>Remove Button</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseTable;
