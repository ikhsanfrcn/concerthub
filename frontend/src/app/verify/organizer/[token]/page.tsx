import VerifyOrganizerPage from "./_components/Verify";

export default async function Page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const token = (await params).token;

  return (
    <div>
      <VerifyOrganizerPage token={token} />
    </div>
  );
}
