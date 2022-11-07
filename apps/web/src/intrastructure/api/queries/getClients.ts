/* eslint-disable turbo/no-undeclared-env-vars */
export const getClients = async ({ queryKey }: { queryKey: string[] }) => {
  const [params] = queryKey;

  //I'm not try/catching this in here because i'm leaving it up to the useQuery to handle the error

  const apiPath =
    process.env.NEXT_PUBLIC_API_PATH || process.env.STORYBOOK_THEME_API_PATH;

  if (!apiPath) {
    throw new Error(
      "API path not found. create an .env.local file and add NEXT_PUBLIC_API_PATH to it"
    );
  }

  const url = `${apiPath}/api/client?${params}`;
  const response = await fetch(url);
  return await response.json();
};
