import VerifyPage from "./components/Verify";

export default async function Page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const token = (await params).token;
  console.log(token);
  

  return (
    <div>
      <VerifyPage token={token} />
    </div>
  );
}
