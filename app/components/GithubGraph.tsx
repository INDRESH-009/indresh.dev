'use client'

import GitHubCalendar from 'react-github-calendar'
import React from 'react'

const GithubGraph = () => {
  return (
    <div className="overflow-x-auto p-4">
      <GitHubCalendar
        username="INDRESH-009"
        colorScheme="light" // or "light"
        blockSize={14}
        blockMargin={4}
        fontSize={14}
      />
    </div>
  )
}

export default GithubGraph
