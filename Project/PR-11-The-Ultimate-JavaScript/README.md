<div align="center">

# 🦠⚡ **INDIA COVID INTEL-DASH™**  
### *A Pandemic Monitoring System That Looks Like It Was Built in 2040.*

</div>

---

<div align="center">

```

█████████████████████████████████████████████████████████████
█░░░░░  COVID-19 INTELLIGENCE GRID : INDIA LIVE  ░░░░░░░░░░░░█
█████████████████████████████████████████████████████████████

→ STATUS: Online
→ Source: National Health Grid
→ Mode: High-Precision Visual Telemetry

[ Fetching Regional Vectors… ]
[ Normalizing Medical Datasets… ]
[ Rendering Population Impact Model… ]

```

### **🔴 LIVE SYSTEM ACCESS**
### https://covid-stats-india-ten.vercel.app/

</div>

---

# 🌌 **WHY THIS PROJECT EXISTS**
No dashboards.  
No boring charts.  
No plain numbers.  

This project was built to answer one question:

> **What if a COVID statistics tracker felt like a mission control system?**  
> **What if you could *feel* the data — not just read it?**

So this system doesn’t “display stats.”  
It **broadcasts** them.  
With motion. With color. With warning levels.  
With a UI that reacts to the danger level of the data itself.

Not a website —  
**a live pandemic intelligence terminal.**

---

# 🧬 **FEATURE SET: NEXT-GEN EDITION**

<div align="center">

## 1️⃣ REAL-TIME STATE DATA PIPELINE
```

┌───────────────────────────────────────┐
│  INPUT: India COVID National Dataset  │
│  PROCESSOR: Live Fetch Engine         │
│  OUTPUT: Clean, normalized payload    │
└───────────────────────────────────────┘

```

Every state autoloads. No duplicates.  
No manual lists. Just pure, real, live.

---

## 2️⃣ VISUAL IMPACT ENGINE
The background isn’t aesthetic — it’s **diagnostic**.

| Cases | Mode |
|-------|------|
| < 500k | 🟢 Low Impact |
| 500k – 5M | 🟡 Medium Alert |
| > 5M | 🔴 Biohazard |

The moment numbers change, the entire interface morphs.

---

## 3️⃣ ANIMATED QUANTUM COUNTERS
Numbers don’t appear.  
They **evolve**.

```

0 → 10 → 120 → 5,243 → 65,930 → Final Value

```

Driven by `requestAnimationFrame()`  
— meaning perfectly smooth at 60fps.

---

## 4️⃣ AUTO-MEMORY INTELLIGENCE
Your last searched state is stored.  
You leave.  
You come back.  
It loads automatically.

Zero clicks. Zero friction.

---

## 5️⃣ GLASS REACTOR UI
Built on pure CSS magic.

```

Frosted panels
Neon edges
Layered blur fields

```

Dark & light mode with instant variable switching.

No frameworks.  
Just raw power.

---

</div>

---

# ⚙️ **TECH OPERATIONS BLUEPRINT**

<div align="center">

```

╔════════════════════════════╗
║ SYSTEM ARCHITECTURE        ║
╚════════════════════════════╝

Frontend:       Vanilla JavaScript
Data Source:    api.rootnet.in
Rendering:      Dynamic DOM Patching
Animation:      RAF Counter System
UI Engine:      CSS Glassmorphism + Gradients
Security:       CORS Safe
Deploy Node:    Vercel Cloud Edge

````

</div>

---

# 🧠 **HOW THE CORE ENGINE THINKS**

```javascript
async function fetchCovidData() {
    const raw = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    const structured = (await raw.json()).data.regional;

    return structured.map(region => ({
        state: region.loc,
        cases: region.totalConfirmed,
        deaths: region.deaths,
        recovered: region.discharged,
        active: region.totalConfirmed - (region.deaths + region.discharged)
    }));
}
````

Clean data.
Normalized output.
Instant render.

---

# 🌐 **LIVE DEMO**

<div align="center">

### 🚀 **[https://covid-stats-india-ten.vercel.app/](https://covid-stats-india-ten.vercel.app/)**

*(This is not a website. This is a dashboard from the future.)*

</div>

---

# 🧩 **UPCOMING INTEL MODULES**

* 🧭 District-level mapping
* 🔥 Spread acceleration index
* 🧪 Variant impact visualizer
* 📉 Realtime downward-trend model
* 🛰 National heatmap layer

---

# 🏆 **CREATOR’S NOTE**

This project isn’t a school project.
It’s not a beginner experiment.
It’s a **statement**.

That data can be
**beautiful**,
**alive**,
and **powerful**.

Built with logic. Styled with intention.
And presented like a **scientific instrument.**

---

<div align="center">

# 🌟 **INDIA COVID INTEL-DASH™**

### *When data becomes an experience.*

```
═══════════════════════════════════════════════════════
      Designed to inform. Built to impress.
═══════════════════════════════════════════════════════
```

</div>
```