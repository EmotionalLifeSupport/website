import type { Metadata } from "next";
import Home from "../page";
import "./preview.css";

export const metadata: Metadata = {
  title: "Mobile-first design preview | Emotional Life Support",
  description: "A private local preview of the approved Emotional Life Support redesign.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignPreviewPage() {
  return (
    <div className="design-preview">
      <Home />
    </div>
  );
}
