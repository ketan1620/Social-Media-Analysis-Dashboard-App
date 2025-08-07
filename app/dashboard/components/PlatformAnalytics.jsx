'use client';
import { ResponsiveContainer, AreaChart, Area, LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function PlatformAnalytics({ data, platform }) {
  const COLORS = ['#A855F7', '#3B82F6', '#EF4444', '#10B981'];

  return (
    <div className="analytics-container">
      <div className="stats-overview">
        <div className="stat-card">
          <h3>Total Followers</h3>
          <div className="stat-value">{data.totalFollowers}</div>
          <div className={`stat-change ${data.followerGrowth >= 0 ? 'increase' : 'decrease'}`}>
            {data.followerGrowth >= 0 ? '↑' : '↓'} {Math.abs(data.followerGrowth)}% vs last month
          </div>
        </div>

        <div className="stat-card">
          <h3>Engagement Rate</h3>
          <div className="stat-value">{data.engagementRate}%</div>
          <div className={`stat-change ${data.engagementChange >= 0 ? 'increase' : 'decrease'}`}>
            {data.engagementChange >= 0 ? '↑' : '↓'} {Math.abs(data.engagementChange)}% vs last month
          </div>
        </div>

        <div className="stat-card">
          <h3>Total Posts</h3>
          <div className="stat-value">{data.totalPosts}</div>
          <div className={`stat-change ${data.postGrowth >= 0 ? 'increase' : 'decrease'}`}>
            {data.postGrowth >= 0 ? '↑' : '↓'} {Math.abs(data.postGrowth)}% vs last month
          </div>
        </div>
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h2>Audience Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data.audienceGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="followers" stroke="#A855F7" fill="#A855F7" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Post Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.postPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="likes" fill="#3B82F6" />
              <Bar dataKey="comments" fill="#10B981" />
              <Bar dataKey="shares" fill="#A855F7" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Engagement Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.engagementDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
              >
                {data.engagementDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}