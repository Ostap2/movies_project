import React, { FC } from "react";
import { Credits } from "../../../types/actorTypes";
import { useLocation } from "react-router-dom";
import { CreditsListDesk, HeadingDesk, LinkCredit, ListGroupItemCredit } from "./ActorCredits.styled";
import { useTranslation } from "react-i18next";

interface ActorCreditsProps {
  credits: Credits[];
}

const ActorCreditsDesk: FC<ActorCreditsProps> = ({ credits }) => {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <>
    
      <HeadingDesk>{t("actor.acting")}</HeadingDesk>
      <CreditsListDesk>
        {credits.map((credit:Credits) => {
          const { id, title} = credit;
          return (
            <LinkCredit to={`/movie/${id}`} state={{ from: location }} key={id}>
              <ListGroupItemCredit>{title}</ListGroupItemCredit>
            </LinkCredit>
          );
        })}
      </CreditsListDesk>
    </>
  );
};

export default ActorCreditsDesk;
