import { useAppDispatch } from "../../store";
import { hideErrorActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import "./ErrorFeedback.css";

const ErrorFeedback = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const closeError = () => {
    dispatch(hideErrorActionCreator());
  };

  return (
    <div className="error">
      <span aria-label="error message">Something went wrong...</span>
      <Button
        className="error-button"
        text="Close"
        actionOnClick={() => closeError()}
      />
    </div>
  );
};

export default ErrorFeedback;
