// RationalePanel — minimum delighter slice for the "explainable pricing
// insights" P1 backlog item. Renders the reasons a price signal moved,
// feature contributions, and a confidence band. Guarded behind the
// NEXT_PUBLIC_RATIONALE_PANEL feature flag so it can be merged dark.

import * as React from "react";

export type FeatureContribution = {
  name: string;
  weight: number; // -1..1
  direction: "up" | "down";
};

export type RationaleData = {
  signalId: string;
  summary: string;
  confidenceLow: number;
  confidenceHigh: number;
  features: FeatureContribution[];
};

const FLAG_KEY = "NEXT_PUBLIC_RATIONALE_PANEL";

export function isRationalePanelEnabled(): boolean {
  if (typeof process === "undefined") return false;
  return process.env[FLAG_KEY] === "1";
}

type Props = { data: RationaleData | null };

export function RationalePanel({ data }: Props) {
  if (!isRationalePanelEnabled()) return null;
  if (!data) {
    return (
      <aside aria-label="Pricing rationale" className="rationale-panel empty">
        No rationale available for this signal yet.
      </aside>
    );
  }
  return (
    <aside aria-label="Pricing rationale" className="rationale-panel">
      <h3>Why this recommendation</h3>
      <p>{data.summary}</p>
      <p className="confidence">
        Confidence band: {data.confidenceLow.toFixed(2)} –{" "}
        {data.confidenceHigh.toFixed(2)}
      </p>
      <ul>
        {data.features.map((f) => (
          <li key={f.name}>
            <strong>{f.name}</strong>: {f.direction === "up" ? "+" : "-"}
            {Math.abs(f.weight).toFixed(2)}
          </li>
        ))}
      </ul>
    </aside>
  );
}
