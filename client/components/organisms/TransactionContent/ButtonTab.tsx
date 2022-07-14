import classNames from "classnames";

interface ButtonTabProps {
  title: string;
  active?: boolean;
  onClick: () => void;
}

export default function ButtonTab(props: ButtonTabProps) {
  const { active, title, onClick } = props;

  const btnClass = classNames({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });

  return (
    <button
      type="button"
      data-filter="*"
      onClick={onClick}
      className={btnClass}
    >
      {title}
    </button>
  );
}
