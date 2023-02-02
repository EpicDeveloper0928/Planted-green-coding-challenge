import React from "react";

type PlantationProjectType = {
  name: string;
  distance: number;
};

export default function PlantationProject(props: PlantationProjectType) {
  return (
    <div className="rounded-md border border-gray-400 mt-4 p-2">
      <div className="font-semibold">{props.name}</div>
      <div>{props.distance.toFixed(2)} km</div>
    </div>
  );
}
