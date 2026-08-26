"use client";

import { useEffect, useSyncExternalStore } from "react";
import {
  getServerConsentChoice,
  readConsentChoice,
  subscribeToConsentChoice,
} from "../lib/consent";

type HubSpotMeetingProps = {
  bookingUrl: string;
};

export default function HubSpotMeeting({ bookingUrl }: HubSpotMeetingProps) {
  const choice = useSyncExternalStore(
    subscribeToConsentChoice,
    readConsentChoice,
    getServerConsentChoice,
  );

  useEffect(() => {
    if (choice !== "optional") return;

    document.getElementById("els-hubspot-meetings")?.remove();
    const script = document.createElement("script");
    script.id = "els-hubspot-meetings";
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => script.remove();
  }, [choice]);

  if (choice === "optional") {
    return (
      <div className="hubspot-meeting-frame">
        <div
          className="meetings-iframe-container"
          data-src={`${bookingUrl}?embed=true`}
        />
        <p className="booking-fallback">
          Need to choose another date or having trouble with the calendar?{" "}
          <a href={bookingUrl} target="_blank" rel="noreferrer">
            Open the booking page
          </a>.
        </p>
      </div>
    );
  }

  return (
    <div className="booking-consent-placeholder">
      <p>
        Allow optional cookies to view the live HubSpot calendar here, or use the booking
        page without changing your website cookie choice.
      </p>
      <a className="button booking-button" href={bookingUrl} target="_blank" rel="noreferrer">
        Book your first session free
      </a>
    </div>
  );
}
