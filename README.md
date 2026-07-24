# agent-human-loop

Confidence-based HITL escalation checkpoints for agents. Proceed, escalate, or block.

```typescript
import { HumanLoop } from "agent-human-loop";
const hl = new HumanLoop();
hl.addCheckpoint({ name: "delete", confidenceThreshold: 0.9, action: "escalate" });
hl.check("delete", 0.5); // { action: "escalate", ... }
```

MIT
