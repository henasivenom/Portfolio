export interface LeetCodeStats {
  status: string
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  ranking?: number
}

const fallbackStats: LeetCodeStats = {
  status: 'success',
  totalSolved: 482,
  easySolved: 210,
  mediumSolved: 215,
  hardSolved: 57,
  ranking: 142320,
}

export async function getLeetCodeStats(username: string): Promise<LeetCodeStats> {
  try {
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      return fallbackStats
    }

    const data = (await response.json()) as Partial<LeetCodeStats>

    if (data.status !== 'success') {
      return fallbackStats
    }

    return {
      status: 'success',
      totalSolved: data.totalSolved ?? fallbackStats.totalSolved,
      easySolved: data.easySolved ?? fallbackStats.easySolved,
      mediumSolved: data.mediumSolved ?? fallbackStats.mediumSolved,
      hardSolved: data.hardSolved ?? fallbackStats.hardSolved,
      ranking: data.ranking ?? fallbackStats.ranking,
    }
  } catch {
    return fallbackStats
  }
}
