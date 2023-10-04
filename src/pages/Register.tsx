/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../redux/features/user/userSlice";
import { useAppDispatch } from "../redux/hooks";
import bg from "./../assets/images/bg-2.jpg";
import { useForm } from "react-hook-form";

interface SignupFormInputs {
  email: string;
  password: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
    dispatch(createUser({ email: data.email, password: data.password }));
    navigate("/");
    reset();
  };
  return (
    <div>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "bottom center",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="font-bold text-center">Create An Account</h2>
              <span className="text-center">
                Enter your email and password to below account create
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
                  <button className="btn btn-primary">Create Account</button>
                  <p className="text-center">
                    Already I have a account <br />
                    <Link
                      to="/login"
                      className="underline text-blue-600 font-bold"
                    >
                      Login
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
          <div
            className="text-center lg:text-left p-16"
            style={{ color: "#fff" }}
          >
            <h1 className="text-5xl font-bold">Register here!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
