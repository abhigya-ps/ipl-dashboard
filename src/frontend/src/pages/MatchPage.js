import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const MatchPage = () => {

    const { year } = useParams();
  return (
    <div className="MatchPage">
        <h1>Match Page {year}</h1>
    </div>
  );
};
