export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">PestOps - Pest Control Management System</h1>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Welcome to PestOps - Your comprehensive pest control management solution.
        </p>
      </div>
    </main>
  );
}
