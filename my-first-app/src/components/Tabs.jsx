import React from "react";
import { useState } from 'react'

function Tabs() {
    const [tabs , setTabs] = useState(false);
  return (
    <div>
      <div className="p-20">
        <div className="text-center">
          <button
            onClick={() => setTabs(false)}
            className="mx-10 bg-red-800 px-4 py-2 text-white"
          >
            Monthly
          </button>
          <button
            onClick={() => setTabs(true)}
            className="bg-blue-800 px-4 py-2 text-white"
          >
            Yearly
          </button>
        </div>

        <div className={`yearly ${tabs ? "flex" : "hidden"}`}>
          <div className="yearly-div bg-zinc-100 w-96 text-center py-20 m-10">
            <h3>Starter</h3>
            <h1>Free</h1>
            <ul>
              <li>2 Website</li>
              <li>30 GB hosting</li>
              <li>Limited Support</li>
            </ul>
          </div>

          <div className="yearly-div bg-zinc-100 w-96 text-center py-20 m-10">
            <h3>Starter</h3>
            <h1>$70/ Yearly</h1>
            <ul>
              <li>2 Website</li>
              <li>15 GB hosting</li>
              <li>Limited Support</li>
            </ul>
          </div>
        </div>

        <div className={`monthly ${tabs ? "hidden" : "flex"}`}>
          <div className="yearly-div bg-zinc-100 w-96 text-center py-20 m-10">
            <h3>Starter</h3>
            <h1>Free</h1>
            <ul>
              <li>1 Website</li>
              <li>15 GB hosting</li>
              <li>Limited Support</li>
            </ul>
          </div>

          <div className="yearly-div bg-zinc-100 w-96 text-center py-20 m-10">
            <h3>Starter</h3>
            <h1>$ 29/ Month</h1>
            <ul>
              <li>2 Website</li>
              <li>15 GB hosting</li>
              <li>Limited Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
