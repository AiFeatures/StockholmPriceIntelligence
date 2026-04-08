import type { RationaleData } from "./RationalePanel";

// Mock data used while the rationale pipeline is still stubbed. Real data will
// come from the pricing model's explain endpoint in a later slice.
export const sampleRationale: RationaleData = {
  signalId: "SIG-20260408-001",
  summary:
    "Price moved up 2.1% driven by higher weekend demand and reduced supply from competing venues.",
  confidenceLow: 0.82,
  confidenceHigh: 0.94,
  features: [
    { name: "weekend_demand", weight: 0.38, direction: "up" },
    { name: "competitor_supply", weight: -0.21, direction: "down" },
    { name: "historical_trend", weight: 0.12, direction: "up" },
  ],
};
