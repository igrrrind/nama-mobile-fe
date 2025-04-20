import { toast } from "sonner";

export const handleNotify = (title: string, description?: React.ReactNode, type: "success" | "error" | "info" = "info") => {
  console.log(title, description, type);
  toast[type](title, {
    description,
    duration: 3000, // Adjust as needed
    closeButton: true,
  });
};
