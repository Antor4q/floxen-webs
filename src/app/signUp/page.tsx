"use client";



import SignUpForm from "@/src/components/signUp/SignUpForm";

import Header from "@/src/components/shared/Header";



const SignUp = () => {
    return (
       <div>
         <Header/>
         <div className="flex justify-center pt-40">
          <SignUpForm/>
         </div>
       </div>
    );
};

export default SignUp;