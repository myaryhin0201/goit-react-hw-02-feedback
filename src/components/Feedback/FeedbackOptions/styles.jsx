import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  button: {
    width: '150px',
    padding: '10px 0',
    border: '0',
    borderRadius: '10px',
    '&:hover, &:focus': {
      backgroundColor: 'aqua',
      outline: 'none',
    },
    '&::first-letter': {
      textTransform: 'uppercase',
    },
  },
  good: {
    backgroundColor: 'lawngreen',
  },
  bad: {
    backgroundColor: {
      backgroundColor: 'red',
    },
  },
  neutral: {
    backgroundColor: 'orange',
  },
  FeedbackOptions__list: {
    display: 'flex',
    justifyContent: 'center',
  },
  FeedbackOptions__item: {
    '&:not(:last-child)': {
      marginRight: '10px',
    },
  },
});
export default useStyles;
