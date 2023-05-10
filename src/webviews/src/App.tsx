import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'

import styles from './App.module.css'

const App: Component = () => {
  const [count, setCount] = createSignal(0)
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src='assets/logo.svg' class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save too reload.
        </p>
        <div>{count()}</div>
        <button onClick={() => setCount(count() + 1)}>increment</button>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  )
}

export default App
