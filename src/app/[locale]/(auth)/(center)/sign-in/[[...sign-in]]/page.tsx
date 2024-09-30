import { getTranslations } from "next-intl/server";
import Link from "next/link";
import LoginForm from "./components/LoginForm";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "SignIn",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const SignInPage = (props: { params: { locale: string } }) => (
  <div className="flex flex-1 flex-col justify-center px-[25%]">
    <h2 className="text-center font-bold text-[1.25rem] text-medium-blue leading-7">Login</h2>
    <div className="my-5 text-center text-[.75rem] leading-5">
      Don't have an account?
      <Link className="font-bold text-medium-blue" href={"/SignUp"}>
        To sign up page
      </Link>
    </div>
    <LoginForm />
    {props.params.locale}
  </div>
);

export default SignInPage;
