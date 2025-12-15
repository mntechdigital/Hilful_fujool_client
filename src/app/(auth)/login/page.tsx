
import LoginForm from "../_components/LoginForm";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 ">
      <div className="max-w-lg shadow-md rounded-md bg-white pt-5">
        <LoginForm/>
      </div>
    </div>
  );
};

export default Login;
