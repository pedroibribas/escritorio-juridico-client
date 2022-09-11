const Button = ({ action, path, handler, children }) => {
  switch (action) {
    case "button":
      return <button onClick={handler}>{children}</button>
    case "link":
      return <Link to={path}>{children}</Link>
    case "submit":
      return <button type="submit">Enviar</button>
  } 
};

export { Button };
