interface OrganizerProps {
  isVisible: boolean;
}

export const OrganizerDashboard: React.FC<OrganizerProps> = (isVisible) => {
  if (!isVisible) return null;
  return <div>
    DASHBOARD ORGANIZER
  </div>;
};
