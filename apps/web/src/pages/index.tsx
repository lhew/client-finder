import React, { useEffect, useState } from "react";
import { Layout } from "../components/layout";
import { ClientCard } from "../components/clientcard";
import { GroupSearch } from "../components/groupsearch";
import inputs from "../components/groupsearch/__fixtures__/groupSearchInputs";
import { useQuery } from "@tanstack/react-query";
import { getClients } from "../intrastructure/api/queries/getClients";
import { ClientUIProps, IClient } from "types/client";

export default function ResultsPage() {
  const [filterParams, setFilterParams] = useState(inputs);
  const [clients, setClients] = useState<ClientUIProps[]>([]);
  const [queryParam, setQueryParam] = useState("");

  const query = useQuery([queryParam], getClients, {
    enabled: queryParam.length > 0,
    retry: false,
    retryOnMount: false,
    onSuccess(data) {
      if (data.clients) {
        setClients(
          data.clients.map((c: ClientUIProps) => ({ ...c, showDetails: false }))
        );
      }
    },
    onError(error) {
      //this should send an error to sentry, splunk, or any error logger available in the project
      console.error("there was an error while fetching the data: ", error);
    },
  });

  useEffect(() => {
    setQueryParam(
      filterParams
        .filter((f) => f.value)
        .map(({ name, value }) => `${name}=${value}`)
        .join("&")
    );
  }, [filterParams]);

  return (
    <Layout>
      <>
        <GroupSearch
          inputs={filterParams}
          placeholder="Search and press Enter"
          onSearch={setFilterParams}
        />
        <hr className="my-8" />
        {query.isFetching && (
          <p data-testid="loading-p" className="text-xs">
            Loading...
          </p>
        )}
        {query.isFetched && clients?.length === 0 && (
          <p data-testid="no-clients-p" className="text-center">
            No clients found. try different search parameters.
          </p>
        )}
        {query.error && (
          <p data-testid="error-p" className="text-center text-xs text-red-500">
            There was an error while processing your request. We are working on
            that. Please try again in a few minutes
          </p>
        )}
        <div className="grid flex-1 gap-3 sm:grid-cols-1  md:grid-cols-2">
          {query.data?.message && (
            <p data-testid="message-p">{query.data.message}</p>
          )}

          {clients?.map((person: IClient) => (
            <ClientCard
              key={person.id}
              clientData={person}
              onClick={(clientId) => {
                setClients((_clients) => {
                  return _clients.map((client) => {
                    if (client.id === clientId) {
                      return { ...client, showDetails: !client.showDetails };
                    }
                    return client;
                  });
                });
              }}
            />
          ))}
        </div>
      </>
    </Layout>
  );
}
