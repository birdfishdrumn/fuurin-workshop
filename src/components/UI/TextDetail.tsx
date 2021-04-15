import  React  from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
    marginBottom: 16,
    background: "white",
    padding: 16,
    borderRadius: "10px",
    boxShadow: "0 0px 10px rgba(0,0,0,0.2)"
  },
  label: {
    marginLeft: 0,
    marginRight: 'auto'
  },
  value: {
    fontWeight: 600,
    marginLeft: 'auto',
    marginRight: 0
  }
});

interface PROPS {
  label: string;
  value: string;
};

const TextDetail: React.FC<PROPS> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.row}>
      <div className={classes.label}>
        {props.label}
      </div>
      <div className={classes.value}>
        {props.value}
      </div>
    </div>
  );
};

export default TextDetail
