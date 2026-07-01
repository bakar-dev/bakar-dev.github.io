# Project screenshots

Drop your screenshots in **this folder** (`public/projects/`) and they appear
automatically on the project cards + case-study modals. Until a file exists,
that project shows a branded gradient fallback (no broken image).

Expected filenames (already wired in `src/lib/data.ts` via the `shot` field):

| File | Project |
|------|---------|
| `intelligize.png`      | Intelligize+ AI |
| `wxw.png`              | Delivery Delight |
| `mountaintop.png`      | PepsiCo · MountainTop |
| `visalay.png`          | Visalay |
| `yellowschool.png`     | Yellow School |
| `technotweak.png`      | TechnoTweak |
| `lovebeyondautism.png` | Love Beyond Autism |
| `bendlawgroup.png`     | Bend Law Group |

**Tips**
- Use a wide shot (~1600×1000) for the sharpest result.
- Keep the exact filenames above (lowercase, `.png`).
- PNG or JPG both work. If you use `.jpg`, update the path in `data.ts`.
- After dropping files: `git add public/projects && git commit && git push`
  to deploy them to the live site.
