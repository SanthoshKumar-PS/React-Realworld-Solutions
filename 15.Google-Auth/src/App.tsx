import {GoogleLogin} from '@react-oauth/google';
import {jwtDecode} from   'jwt-decode'

  type GoogleJwtPayload = {
  name: string;
  email: string;
  picture: string;
};

function App() {

  return(
    <div className='flex min-h-screen items-center justify-center'>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          const credential=jwtDecode<GoogleJwtPayload>(credentialResponse.credential!)
          console.log(credential)
        }}
        onError={() => {
          console.log('Login Failed');
        }}
/>

    </div>
)
}

export default App
