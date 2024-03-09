import { useState, useContext } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/Auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const handleSingUp = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const token = await createUser(email, password);
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
    return <LoadingOverlay message={"create user..."} />;
  }

  return <AuthContent onAuthenticate={handleSingUp} />;
}

export default SignupScreen;
