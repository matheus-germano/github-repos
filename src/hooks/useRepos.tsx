interface useRepoProps {
  org: string
}

export function useRepos({ org }: useRepoProps) {
  function getOrganizationRepositories() {
    fetch(`https://api.github.com/orgs/${org}/repos`)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  function refetch() {
    getOrganizationRepositories()
  }

  return { data, isLoading, error, refetch }
}
