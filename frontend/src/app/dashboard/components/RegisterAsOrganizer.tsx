interface OrganizerProps {
  isVisible: boolean;
}

export const RegisterAsOrganizer: React.FC<OrganizerProps> = (isVisible) => {
  if (!isVisible) return null;
  return <div>
    REGISTER AS AN ORGANIZER
  </div>;
};
