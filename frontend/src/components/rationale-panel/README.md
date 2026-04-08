# RationalePanel (experimental)

Shows the reasons a price signal moved, feature contributions, and a
confidence band. Guarded behind `NEXT_PUBLIC_RATIONALE_PANEL=1`.

Consume with mock data for now:

```tsx
import { RationalePanel } from "./RationalePanel";
import { sampleRationale } from "./mockData";

<RationalePanel data={sampleRationale} />
```

Wiring the component to the pricing model's explain endpoint is tracked as
the next pass.
