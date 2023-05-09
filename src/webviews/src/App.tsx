import type { Component } from 'solid-js'

import styles from './App.module.css'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src='assets/logo.svg' class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save too reload.
        </p>
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
