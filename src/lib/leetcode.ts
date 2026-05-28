export async function getLeetCodeStats(username: string) {
  const base = process.env.NEXT_PUBLIC_LEETCODE_STATS_URL || 'https://leetcode-stats-api.herokuapp.com'

  try {
    const url = `${base.replace(/\/+$/,'')}/${encodeURIComponent(username)}`
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      console.error('LeetCode stats fetch failed:', res.status, text)
      throw new Error('Failed to fetch leetcode stats')
    }

    return await res.json()
  } catch (err) {
    // Log error for debugging in development
    if (process.env.NODE_ENV !== 'production') console.error('getLeetCodeStats error:', err)

    // Fallback static data to avoid breaking UI when the external API is unavailable
    return {
      totalSolved: 78,
      easySolved: 50,
      mediumSolved: 28,
      hardSolved: 0,
      totalQuestions: 3907,
      easyTotal: 938,
      mediumTotal: 2045,
      hardTotal: 924,
    }
  }
}
