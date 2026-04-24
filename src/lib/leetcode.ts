export async function getLeetCodeStats(username: string) {
  try {
    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      throw new Error('Failed')
    }

    return await res.json()
  } catch {
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
