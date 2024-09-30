export default function CenteredLayout(props: { children: React.ReactNode }) {
  // const { userId } = auth();

  // if (userId) {
  //   redirect("/dashboard");
  // }

  return <div className="flex min-h-screen w-full items-center justify-center">{props.children}</div>;
}
