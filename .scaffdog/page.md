---
name: 'p'
root: '.'
output: '.'
questions:
  name: 'Please enter a page name.'
---

# `src/pages/{{ inputs.name }}.tsx`

```tsx
import type { NextPage } from "next"

const {{ inputs.name | pascal }}Page: NextPage = () => {
  return null
}

export default {{ inputs.name | pascal }}Page
```