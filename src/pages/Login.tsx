/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
import bg from "./../assets/images/bg-1.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loginUser } from "../redux/features/user/userSlice";
import { useEffect } from "react";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  // const location = useLocation();
  const navigate = useNavigate();

  // const from = location?.state?.from?.pathname || "/";

  const { state } = useLocation();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    dispatch(loginUser({ email: data.email, password: data.password }));
    reset();
  };
  useEffect(() => {
    if (user.email) {
      navigate(state?.from ? state.from : "/", { replace: true });
    }
    return () => {
      reset();
    };
  }, [user.email, navigate]);
  // useEffect(() => {
  //   if (user.email && !isLoading) {
  //     navigate(from, { replace: true });
  //   }
  // }, [user.email, isLoading]);
  return (
    <div>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center top",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            className="text-center lg:text-left p-16"
            style={{ color: "#fff" }}
          >
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="font-bold text-center">Login Here</h2>
              <span className="text-center">
                Enter your email and password to login
              </span>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      className="input input-bordered my-2"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                    <input
                      id="password"
                      className="input input-bordered my-2"
                      placeholder="your password"
                      type="password"
                      autoCapitalize="none"
                      autoCorrect="off"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                  </div>
                  <button className="btn btn-primary">Login</button>
                  <p className="text-center">
                    If you do not have a account please <br />
                    <Link
                      to="/register"
                      className="underline text-blue-600 font-bold"
                    >
                      Create Account
                    </Link>{" "}
                  </p>
                  <br />
                  <Link to="/" className="btn btn-info">
                    {" "}
                    Go To Home
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
