import AuthContent from "../components/Auth/AuthContent";
import { loginUser } from "../util/Auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useState,useContext } from "react";
import { Alert } from "react-native";
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const handleLogin = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const token = await loginUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "đăng nhập thất bại",
        "bạn có thể xem lại thông tin và thử lại"
      );
      setIsLoading(false);
    }
    
  };
  if (isLoading) {
    return <LoadingOverlay />;
  }

  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}

export default LoginScreen;
