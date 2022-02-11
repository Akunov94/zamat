import Authlogin from '../../components/pages/authentication/AuthLogin';
import useData from '../../hooks/useData/index';
function PrivateRoute({ children, show, ...rest }) {
	let auth = useData();

	return auth.user ? children : <Authlogin />;
}

export default PrivateRoute;
