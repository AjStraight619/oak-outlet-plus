import { useSearchParams } from "next/navigation";
const ThankYouPage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div>
      <h1>Thank you page</h1>
    </div>
  );
};

export default ThankYouPage;
