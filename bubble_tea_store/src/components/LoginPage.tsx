function LoginPage() {
  return (
    <>
      <div id="LoginPage">
        <form action="">
          <label htmlFor="">
            Username
            <br />
            <input type="text" />
          </label>
          <label htmlFor="">
            Password
            <br />
            <input type="password" />
          </label>
          <button>Login</button>
        </form>
      </div>
      <div id="RegisterPage">
        <form action="">
          <label htmlFor="">
            Username
            <br />
            <input type="text" />
          </label>
          <label htmlFor="">
            Password
            <br />
            <input type="password" />
          </label>
          <label htmlFor="">
            Repeat Password
            <br />
            <input type="password" />
          </label>
          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
