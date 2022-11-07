/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ClientUIProps, IClient } from "types/client";
import { Card } from "ui";
import { flags } from "../groupsearch/__fixtures__/groupSearchInputs";

export interface ClientCardProps {
  onClick?: (personId: IClient["id"]) => void;
  clientData: Partial<ClientUIProps>;
}

export const ClientCard = ({
  onClick = (id: string) => null,
  clientData,
}: ClientCardProps) => {
  return (
    <Card>
      <div
        data-testid={`client-card-${clientData?.id}`}
        className={"grid cursor-pointer grid-cols-[8em_1fr] gap-2"}
        onClick={() => {
          onClick(clientData.id as string);
        }}
      >
        <div className="overflow-hidden">
          {clientData?.avatar && (
            <img
              width="128"
              height="128"
              data-testid="client-avatar"
              src={clientData.avatar}
              alt={clientData.name}
            />
          )}
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="mt-1 text-lg font-bold" data-testid="client-name">
            {clientData?.name}
          </h3>
          <p className="text-sm text-gray-500" data-testid="client-title">
            {clientData?.title}
          </p>
          {clientData?.showDetails && (
            <div>
              <p data-testid="client-nationality">
                {clientData?.nationality && (
                  <>
                    {flags[clientData.nationality]} {clientData.nationality}
                  </>
                )}
              </p>
              {clientData?.quote && (
                <q
                  data-testid="client-quote"
                  className="mt-2 block border-l-2 border-blue-400 p-2 text-sm italic"
                >
                  {clientData.quote}
                </q>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
