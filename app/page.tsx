import SignUpForm from "./components/SignUpForm/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black bg-[url('https://images.pexels.com/photos/6087533/pexels-photo-6087533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover">
      <SignUpForm />
    </div>
  );
}
