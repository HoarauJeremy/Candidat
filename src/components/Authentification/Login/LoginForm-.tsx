import {Button} from "@Components/ui/button.tsx";

const LoginForm = ({
  active = "login",
  firstName = "",
  lastName = "",
  email = "",
  password = "",
  onLogin = () => {},
  onRegister = () => {},
}) => {

  onchangeHandler = (event) => {
    let name = event.target.name.value;
    let value = event.target.value;
    this.setState({[name]: value});
  }

  onSubmitLogin = (e) => {
    this.state.onLogin(e, this.state.email, this.state.password);
  }

  onSubmitRegister = (e) => {
    this.state.onRegister(e, this.state.email, this.state.password, this.state.fistName, this.state.lastName);
  }

  return (
    <div className="w-full md:w-1/3 lg:w-1/3">

      <ul>
        <li>
          <Button>Login</Button>
          {/*<Button className={`${this.state.active === "login" ? "active" : ""}`}>Login</Button>*/}
        </li>
        <li>
          <Button>Register</Button>
        </li>
      </ul>

      <div>

        <form action="">
          <div>
            <label htmlFor=""></label>
            <input type="text"/>
          </div>

          <div>
            <label htmlFor=""></label>
            <input type="text"/>
          </div>

          <div>
            <label htmlFor=""></label>
            <input type="text"/>
          </div>

          <div>
            <label htmlFor=""></label>
            <input type="text"/>
          </div>

          <div>
            <label htmlFor=""></label>
            <input type="text"/>
          </div>
        </form>

      </div>

    </div>
  )
}

export default LoginForm;