---
name: 'a'
root: '.'
output: '.'
questions:
  stage:
    message: 'Please select stage.'
    choices:
      - 'atom'
      - 'molecule'
      - 'organism'
      - 'template'
  name: 'Please enter a component name.'
---

# `src/components/{{ inputs.stage }}s/{{ inputs.name | pascal }}.tsx`

```tsx
export const {{ inputs.name | pascal }} = () => {
  return null
}
```