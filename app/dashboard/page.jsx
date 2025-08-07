'use client';
import { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import Navigation from './components/Navigation';
import { fetchPlatformData } from './utils/processData';
import './dashboard.css';


const platforms = [
  { id: 'twitter', name: 'X', icon: 'fa-brands fa-x-twitter' },
  { id: 'instagram', name: 'Instagram', icon: 'fa-brands fa-instagram' },
  { id: 'facebook', name: 'Facebook', icon: 'fa-brands fa-facebook' }
];

export default function Dashboard() {
  const [selectedPlatform, setSelectedPlatform] = useState('twitter');
  const [platformData, setPlatformData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      if (selectedPlatform) {
        setIsLoading(true);
        setError(null);
        try {
          const data = await fetchPlatformData(selectedPlatform);
          console.log("📊 Loaded data for", selectedPlatform, data); // ✅ Debug log
          setPlatformData(data);
        } catch (err) {
          console.error("❌ Error loading data:", err); // ✅ Error log
          setError('Failed to load data. Please try again later.');
        } finally {
          setIsLoading(false);
        }
      }
    }
    loadData();
  }, [selectedPlatform]);
  

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Social Media Analytics</h1>
        <Navigation />
      </div>

      <PlatformSelector
        platforms={platforms}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />

      {isLoading ? (
        <div className="loading-state">Loading analytics...</div>
      ) : error ? (
        <div className="error-state">{error}</div>
      ) : (
        platformData && (
          <div className="analytics-container">
            <ChartCard title="Followers Growth" data={platformData.followers} type="area" color="#A855F7" />
            <ChartCard title="Engagement Rate" data={platformData.engagement} type="line" color="#10B981" />
            <ChartCard title="Posts Overview" data={platformData.posts} type="bar" color="#3B82F6" />
          </div>
        )
      )}
    </div>
  );
}

function PlatformSelector({ platforms, selectedPlatform, setSelectedPlatform }) {
  return (
    <div className="platforms-grid">
      {platforms.map((platform) => (
        <button
          key={platform.id}
          className={`platform-card ${selectedPlatform === platform.id ? 'active' : ''}`}
          onClick={() => setSelectedPlatform(platform.id)}
        >
          <i className={`platform-icon ${platform.icon}`}></i>
          <span className="platform-name">{platform.name}</span>
        </button>
      ))}
    </div>
  );
}

function ChartCard({ title, data, type, color }) {
  const chartData = {
    labels: data.map((item) => item.label || item.date),
    datasets: [
      {
        label: title,
        data: data.map((item) => item.value),
        backgroundColor: `${color}80`, // 80 = 50% opacity in hex
        borderColor: color,
        borderWidth: 2,
        fill: type === 'area',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-card">
      <h2>{title}</h2>
      {type === 'bar' ? (
        <Bar data={chartData} options={options} />
      ) : (
        <Line data={chartData} options={options} />
      )}
    </div>
  );
}
