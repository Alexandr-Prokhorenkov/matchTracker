export const mapStatusToVariant = (status: string): "Live" | "Finished" | "Match preparing" => {
  switch (status) {
    case "Ongoing":
      return "Live";
    case "Finished":
      return "Finished";
    case "Scheduled":
      return "Match preparing";
    default:
      return "Match preparing";
  }
};