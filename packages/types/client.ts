export interface IClient {
  id: string;
  name: string;
  title: string;
  avatar: string;
  quote?: string | null;
  nationality?: string;
}

/**
 * To be used in components with extra interactivity component (showDetails)
 */
export type ClientUIProps = IClient & { showDetails?: boolean };
