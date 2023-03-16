import Link from "next/link";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  console.log("--", router);
  return (
    <div>
      Welcome to Next.js!
      <br />
      <button onClick={() => router.push("/first")}>First Page</button>
    </div>
  );
};

export default HomePage;
