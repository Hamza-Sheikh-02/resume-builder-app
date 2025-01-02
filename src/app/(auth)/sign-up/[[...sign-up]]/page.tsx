import { SignUp } from "@clerk/nextjs";

function Page() {
  return (
    <main className="flex h-screen justify-center items-center p-3">
      <SignUp />
    </main>
  );
}

export default Page;
