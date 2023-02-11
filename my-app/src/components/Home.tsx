import React, { useState } from "react"
import Counters from "./counters"
import NavBar from "./navbar"

interface ICounter {
  id: number
  value: number
}

interface IAppState {
  counters: ICounter[]
}

const Home = () => {
  const initValue = [
    { id: 0, value: 1 },
    { id: 1, value: 1 },
    { id: 2, value: 1 },
  ]

  const [counters, setCounters] = useState<ICounter[]>(initValue)

  const inc = (id: number) => {
    let counter = counters[id];
    counter.value += 1;
    let newArray = counters;
    newArray[id] = counter;
    setCounters(newArray);
  }

  const dec = (id: number) => {
    let counter = counters[id];
    counter.value -= 1;
    let newArray = counters;
    newArray[id] = counter;
    setCounters(newArray);  }

  const reset = () => {
    setCounters(initValue)
  }

  const add = () => {
    setCounters([...counters, { id: counters.length, value: 1 }])
  }

  return (
    <>
      <NavBar
        totalCounters={counters.filter((c) => c.value > 0).length}
      />
      <main className="container">
        <Counters
          counters={counters}
          onReset={reset}
          onAdd={add}
          onIncrement={inc}
          onDecrement={dec}
          onDelete={delete}
        />
      </main>
    </>
  )
}
export default Home
