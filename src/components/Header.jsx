import me from '../assets/me.jpeg';

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center mb-10">
      <img
        src={me}
        alt="me"
        className="w-64 rounded-xl mb-4 md:mb-0 md:mr-6"
      />
      <div>
        <h1 className="text-2xl font-semibold">Hi, I'm Sebastian</h1>
        <p className="text-gray-600 dark:text-gray-300">
          I like to build things that are sometimes useful, mostly not
        </p>
      </div>
    </div>
  );
}

