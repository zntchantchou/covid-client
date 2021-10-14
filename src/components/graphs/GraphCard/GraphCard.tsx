import React from "react";
import styles from "src/components/graphs/GraphCard/GraphCard.module.css";
import Select from "react-select";
import { selectOptions, ISelectOption } from "src/views/CovidDashboard/utils/date";
// TODO fetch data
// TODO pass data down to a Line Graph, render LineGraph via

interface IGraphCardProps {
  content: React.ReactNode;
  title: React.ReactNode;
  withDate?: boolean;
  onDateChange?(value: ISelectOption): void;
}


const GraphCard: React.FC<IGraphCardProps> = ({
  title,
  content,
  withDate,
  onDateChange,
}) => {
  return (
    <div className={styles.graphCard}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        {withDate && onDateChange && (
          <div className={styles.periodSelect}>
            <Select
              options={selectOptions}
              defaultValue={selectOptions[0]}
              // eslint-disable-next-line
              // @ts-ignore
              onChange={(v: ISelectOption) => onDateChange(v)}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default GraphCard;
