---
name: 'pp'
root: '.'
output: '.'
questions:
  name: 'Please enter a page name.'
---

# `src/pages/{{ inputs.name }}.tsx`

```tsx
import type { NextPage, GetServerSideProps } from "next"

interface Props {}

const {{ inputs.name | pascal }}Page: NextPage<Props> = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async () => {
  const props: Props = {}

  return { props }
}

export default {{ inputs.name | pascal }}Page
```