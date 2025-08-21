import RegisterForm from "../components/RegisterForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 pt-5">
      <h1 className="text-center mb-4 text-2xl font-bold">User Register Form</h1>
      <RegisterForm />
    </div>
  );
}
