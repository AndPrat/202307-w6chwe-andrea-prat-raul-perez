import { useAppDispatch } from "../../store";
import { hideErrorActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import "./Error.css";

const Error = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const closeError = () => {
    dispatch(hideErrorActionCreator());
  };

  return (
    <div className="error">
      <span>Something went wrong...</span>
      <Button
        className="error-button"
        text="Close"
        actionOnClick={() => closeError()}
      />
    </div>
  );
};

export default Error;
