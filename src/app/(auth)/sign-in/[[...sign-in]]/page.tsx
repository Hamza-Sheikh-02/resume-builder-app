import { SignIn } from "@clerk/nextjs";

function Page() {
  return (
    <main className="flex h-screen justify-center items-center p-3">
      <SignIn />
    </main>
  );
}

export default Page;
