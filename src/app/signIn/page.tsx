import Header from "@/src/components/shared/Header";
import SignInForm from "@/src/components/signIn/SignInForm";


const SignIn = () => {
    return (
        <div>
         <Header/>
         <div className="flex justify-center pt-40">
         <SignInForm/>
         </div>
       </div>
    );
};

export default SignIn;