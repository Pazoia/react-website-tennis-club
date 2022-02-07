import { useNavigate } from "react-router-dom";

import RegistrationForm from "./RegistrationForm";

const withRouter = WrappedComponent => props => {
  const navigate = useNavigate();

  return (
    <WrappedComponent 
      {...props}
      navigate={navigate}
    />
  );
};

export default withRouter(RegistrationForm);