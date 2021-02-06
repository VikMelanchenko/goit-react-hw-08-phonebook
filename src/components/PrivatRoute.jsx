import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

// Если маршрут приватный (PrivatRoute) и пользователь залогинен, (true), рендерит компонент
// Есжи нет, делаем Redirect на redirectTo

export default function PrivatRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLogedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
