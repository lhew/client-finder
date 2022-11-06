/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IPerson } from "types/person";
import { Card } from "ui/components/card";

export interface PersonCardProps {
  children?: React.ReactNode;
}

export interface PersonCardProps {
  onClick?: (personId: IPerson["id"]) => void;
  personData: Partial<IPerson>;
}

export const PersonCard = ({
  onClick = (id: string) => null,
  personData,
}: PersonCardProps) => {
  return (
    <Card>
      <div
        data-testid={`person-card-${personData.id}`}
        className={"grid cursor-pointer grid-cols-[8em_1fr] gap-2"}
        onClick={() => {
          onClick(personData.id as string);
        }}
      >
        <div className="overflow-hidden">
          {personData?.avatar && (
            <img
              className="mt-[-1em]"
              width="128"
              height="128"
              src={personData.avatar}
              alt={personData.name}
            />
          )}
        </div>
        <div>
          <h3 className="mt-1 text-lg font-bold">{personData?.name}</h3>
          <p className="text-sm text-gray-500">{personData?.title}</p>
        </div>
      </div>
    </Card>
  );
};
