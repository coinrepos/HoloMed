'use client'

import { useEffect, useState } from 'react';

export default function DAODashboard() {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetch('/api/dao-proposals')
      .then((res) => res.json())
      .then(setProposals);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">🗳️ DAO Health Funding Proposals</h1>
      <ul className="mt-4 space-y-2">
        {proposals.map((p, i) => (
          <li key={i} className="border p-4 rounded bg-white shadow">
            <h2 className="text-lg font-medium">{p.title}</h2>
            <p>{p.description}</p>
            <p className="text-sm text-gray-600">Requested: {p.amount} HMD</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
